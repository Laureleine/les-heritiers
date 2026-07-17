// Date: 1900-11-29
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-11-29 (Version Restaurée, 33 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Politique",
    "title": "Le Prytanée",
    "summary": "Menacé par le projet de budget de la Guerre, le Prytanée de la Flèche, institution historique héritée de Henri IV, est au cœur d'un vif débat entre les partisans de sa suppression et ceux de sa rénovation.",
    "paragraphs": [
      "Si les propositions du rapporteur spécial du budget de la Guerre sont adoptées, l'une des institutions les plus anciennes et les plus populaires de notre pays va disparaître : le Prytanée militaire de la Flèche, cette maison qui a élevé tant de fils d'officiers et qui a donné tant de généraux valeureux et illustres à la France.",
      "La fondation du collège de La Flèche remonte au règne de Henri IV, lequel, sur la demande de Fouquet de La Varenne, fit don à la ville d'une propriété de famille appelée le Château-Neuf. Les Jésuites, chargés de l'enseignement dès 1604, en assurèrent le rapide essor.",
      "L'histoire de l'établissement est marquée par diverses transformations, du collège jésuite à l'école préparatoire à l'École militaire sous Choiseul, jusqu'à son organisation sous le Premier Consul et les réformes ultérieures sous la Restauration et le Second Empire.",
      "Aujourd'hui, les partisans de sa suppression s'appuient sur la baisse des résultats académiques et le faible nombre d'élèves rejoignant les écoles militaires, tandis que les défenseurs de l'institution prônent une régénération plutôt qu'une destruction, soulignant la valeur morale et historique du Prytanée."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "LES SANS-FAMILLE : Marie-Madeleine",
    "summary": "À la ferme de la Butte-aux-Roches, Pierre Broudin, marqué par sa lutte contre le comte de Rambert, confesse à sa sœur Rose son acte de vengeance meurtrier, révélant la sombre nature de sa rancœur tenace.",
    "paragraphs": [
      "À l'heure où l'on rapportait le comte de Rambert au Prieuré, Pierre Broudin, après une marche de plus de trois heures, rentrait au milieu de l'obscurité à la ferme de la Butte-aux-Roches. Lui aussi était brisé, mais une joie intense, la volupté empoisonnée de la vengeance, lui donnait la force de se soutenir.",
      "Rose, sa sœur, l'attendait, inquiète des rumeurs qui couraient dans la ferme sur un accident arrivé à un invité du marquis. En voyant son frère affalé et ensanglanté, elle l'interrogea avec défiance, soupçonnant une querelle non fortuite avec le comte Maurice de Rambert.",
      "Pierre finit par avouer la lutte à la cabane et la blessure infligée à son ennemi, confirmant les craintes de sa sœur quant à la nature de sa vengeance."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Faits Divers",
    "title": "La catastrophe d'Aniche",
    "summary": "Une violente explosion de dynamite au puits Fénelon de la mine d'Aniche a causé la mort de seize ouvriers, plongeant la région minière dans une profonde affliction et soulevant des questions sur l'origine du drame.",
    "paragraphs": [
      "Ce matin, le bruit se répandait avec la rapidité d'une traînée de poudre qu'une terrible catastrophe venait de se produire aux mines d'Aniche. On craignait d'abord un coup de grisou faisant cinquante victimes, mais les faits sont plus précis.",
      "Les recherches ont confirmé qu'il s'agissait d'une explosion de dynamite au puits Fénelon. Seize ouvriers sont décédés et de nombreux autres ont été blessés, plongeant la région dans le deuil.",
      "L'enquête suggère qu'un dépôt de dynamite situé au fond de la mine pourrait être à l'origine de l'accident, bien que le mystère demeure sur les causes précises de l'ignition."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Faits Divers",
    "title": "Rivalité meurtrière à Fresnes",
    "summary": "Le corps de Joseph Dagrain a été découvert sans vie près de la route de Tournai. Le parquet a identifié François Lemarcq comme auteur présumé, mais ce dernier a réussi à s'enfuir vers la Belgique durant la nuit.",
    "paragraphs": [
      "On a découvert, dissimulé dans un caniveau de la route de Tournai, le cadavre ensanglanté du nommé Joseph Dagrain, âgé de cinquante et un ans, ouvrier de fabrique à Fresnes.",
      "Le parquet a procédé à l'arrestation de l'auteur présumé du meurtre, le nommé François Lemarcq, mais ce dernier a réussi à s'échapper vers la frontière belge durant la nuit."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "International",
    "title": "Président Krüger à Paris",
    "summary": "En visite à Paris, le président Krüger séjourne à l'hôtel Scribe. Malgré les sollicitations médiatiques, il poursuit ses engagements officiels, notamment à l'École des Beaux-Arts où il fut chaleureusement acclamé.",
    "paragraphs": [
      "Le président Krüger poursuit son séjour à l'hôtel Scribe à Paris, recevant des visites de personnalités politiques et se prêtant, avec stoïcisme, aux demandes répétées des photographes souhaitant immortaliser son portrait.",
      "Hier, le président a visité l'École des Beaux-Arts où il a reçu une ovation chaleureuse de la part des élèves et des membres du comité, avant de contempler le projet de monument qui lui est dédié."
    ]
  },
  {
    "id": 6,
    "page": 2,
    "category": "Politique",
    "title": "Discours en l'honneur du colonel de Villebois-Mareuil",
    "summary": "M. Berthoulat et le président Krüger rendent un hommage solennel à la mémoire du colonel de Villebois-Mareuil, héros français tombé au Transvaal, soulignant le soutien indéfectible de la France à la cause boër.",
    "paragraphs": [
      "M. Berthoulat a pris la parole dans un silence imposant pour évoquer les sentiments du comité qui a pris l'initiative d'élever un monument à la mémoire du colonel de Villebois-Mareuil.",
      "Il a rappelé la brillante carrière militaire de ce Français parti vers l'Afrique pour défendre la cause des opprimés.",
      "Le président Krüger a ensuite pris la parole pour remercier le comité du journal La Liberté et saluer la mémoire du héros, le général boër, soulignant le soutien précieux de la France et de sa presse."
    ]
  },
  {
    "id": 7,
    "page": 2,
    "category": "Politique",
    "title": "Visite du président Krüger au Panthéon",
    "summary": "Accueilli par une foule enthousiaste au Quartier Latin, le président Krüger a visité le Panthéon. Malgré quelques incidents mineurs, la cérémonie s'est déroulée dans une atmosphère de ferveur patriotique.",
    "paragraphs": [
      "Après les discours, le président Krüger, entouré de MM. Delon, Yvose et du colonel Montail, s'est rendu au Panthéon.",
      "La foule au Quartier Latin entonnait l'hymne boër et la Marseillaise, tandis que le cortège progressait le long des quais et du boulevard Saint-Germain.",
      "Un incident mineur impliquant des jets de pierres sur la foule a été rapidement maîtrisé par M. Picot, officier de paix."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Actualités internationales",
    "title": "Départ du président Krüger",
    "summary": "Le calendrier du départ du président Krüger reste incertain. Alors que les spéculations vont bon train, le président a passé une soirée calme à l'hôtel Scribe.",
    "paragraphs": [
      "Des bruits circulent quant à la date effective du départ du président Krüger. Si le 29 novembre était initialement prévu, le départ pourrait être repoussé au samedi, au lundi ou au mardi suivant.",
      "La soirée du président à l'hôtel Scribe a été calme, marquée seulement par une visite de M. Famin au docteur Leyds au sujet de l'entrevue effectuée avec M. Delcassé."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Politique étrangère",
    "title": "Réactions à l'étranger sur la réception de Krüger",
    "summary": "La presse autrichienne commente vivement la réception triomphale du président Krüger en France, s'interrogeant sur la possibilité d'une intervention européenne contre l'annexion des Républiques sud-africaines.",
    "paragraphs": [
      "À Vienne, la Deutsche Zeitung prend à partie l'Angleterre et se réjouit de la réception chaleureuse faite à M. Krüger en France.",
      "D'autres journaux, comme le Vaterland et le Deutsches Volksblatt, soulignent qu'aucune considération ne devrait empêcher les puissances d'intervenir contre l'annexion des Républiques sud-africaines."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "Inquiétudes britanniques dans la colonie du Cap",
    "summary": "Les autorités britanniques craignent un soulèvement des Afrikanders au Cap, attisé par la gestion brutale du conflit. Un congrès est attendu en décembre à Worcester pour discuter de la situation.",
    "paragraphs": [
      "Le Daily Mail rapporte que les autorités britanniques redoutent un soulèvement général des Afrikanders dans la colonie du Cap.",
      "Le mécontentement, attisé par les brutalités commises contre les Boers, rend la situation de plus en plus dangereuse, alors qu'un congrès afrikander est prévu pour le 6 décembre à Worcester."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "Nouveaux combats en Afrique du Sud",
    "summary": "Des engagements militaires ont été signalés près de Francfort, Klerksdorp et Heidelberg. Le général Clements aurait croisé le général Delarey, tandis qu'un poste britannique à Border Siding a été surpris par les Boërs.",
    "paragraphs": [
      "Des engagements ont eu lieu aux environs de Francfort, de Klerksdorp et de Heidelberg. Le général Clements aurait rencontré le général Delarey près de Rietfontein.",
      "Un détachement boër a surpris le poste de Border Siding, faisant prisonniers deux policiers et réquisitionnant d'importantes provisions."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Événements de Chine",
    "title": "Situation diplomatique et militaire à Pékin",
    "summary": "L'état de santé de l'impératrice de Chine alimente les intrigues de cour à Pékin, tandis que la France accroît la pression à Swatow après la destruction de biens appartenant à ses ressortissants.",
    "paragraphs": [
      "L'impératrice de Chine serait dans un état de santé préoccupant, provoquant des intrigues au sein du palais impérial.",
      "Les troupes françaises ont effectué une démonstration de force à Swatow afin d'obtenir des indemnités suite à la destruction de maisons appartenant à des ressortissants français.",
      "Les ministres accrédités à Pékin attendent des instructions précises concernant la conduite des négociations avec les plénipotentiaires chinois."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Faits Divers",
    "title": "Drame lors d'une fête à Aubervilliers",
    "summary": "Lors d'un baptême à Aubervilliers, une tentative de vol de bijoux a dégénéré en une violente agression. Léon Vernèche a été gravement blessé à l'arme blanche par les coupables, désormais écroués.",
    "paragraphs": [
      "Lors du baptême du fils de M. Léon Vernèche, des agresseurs ont fait irruption pour dévaliser la marraine de ses bijoux.",
      "Une violente bagarre a éclaté au cours de laquelle Léon Vernèche a été gravement blessé au ventre par un coup de couteau. Les coupables, dont Ambroise Gaspard, ont été immédiatement conduits au dépôt."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Faits Divers",
    "title": "Fusillade dans un débit de la rue Saint-Sauveur",
    "summary": "Une fusillade a éclaté dans un débit de vins de la rue Saint-Sauveur. Deux individus ont ouvert le feu, blessant le garçon d'établissement et un client, ce dernier ayant été transporté à l'hôpital Necker.",
    "paragraphs": [
      "Une scène sanglante s'est déroulée dans un débit de vins de la rue Saint-Sauveur. Deux individus ont fait feu sur les consommateurs présents.",
      "Le garçon de l'établissement, Alfred Étienne, et un client non identifié ont été atteints par les projectiles. Ce dernier, grièvement touché au crâne, a été transporté d'urgence à l'hôpital Necker."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Faits Divers",
    "title": "Arrestation arbitraire de Français en Espagne",
    "summary": "MM. Grau et Rousé, emprisonnés en Espagne pour avoir tenté de recouvrer leurs chevaux volés, ont été libérés suite à une intervention diplomatique française et demandent réparation pour le préjudice subi.",
    "paragraphs": [
      "Deux propriétaires français, MM. Grau et Rousé, ont été emprisonnés et condamnés à une amende en Espagne pour avoir tenté de récupérer leurs chevaux volés.",
      "Grâce à l'intervention diplomatique diligente du gouvernement français, ils ont été remis en liberté et entendent désormais solliciter une indemnité pour réparation du préjudice subi."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Actualités sociales",
    "title": "Le cas du tambour Bertin",
    "summary": "Victime d'une profonde détresse familiale, le tambour Achille Bertin, du 8e régiment d'infanterie, voit sa situation prise en compte par le général André, qui lui accorde un congé illimité exceptionnel.",
    "paragraphs": [
      "Le tambour Achille Bertin, du 8e régiment d'infanterie, s'est présenté au quartier accompagné de ses trois fillettes, accablé par la maladie de son épouse et par une absence totale de ressources.",
      "Le général André, informé de cette situation particulièrement précaire, a immédiatement ordonné, à titre exceptionnel, l'envoi du soldat en congé illimité."
    ]
  },
  {
    "id": 17,
    "page": 3,
    "category": "Faits Divers",
    "title": "Vol chez M. Keller",
    "summary": "Un cambriolage audacieux a été perpétré chez M. Keller, marchand de thé, rue Ramer. Les malfaiteurs, après s'être introduits par les soupiraux, ont dérobé numéraire, liqueurs et cigares.",
    "paragraphs": [
      "Un vol important a été commis au préjudice de M. Keller, marchand de thé, rue Ramer.",
      "Les malfaiteurs, s'introduisant par les soupiraux, ont soustrait de la caisse une somme d'environ cinq cents francs et sont repartis en emportant, en outre, une assez grande quantité de bouteilles de liqueurs et plusieurs boîtes de cigares.",
      "Les auteurs de ce méfait sont activement recherchés par M. Carpin, commissaire de police."
    ]
  },
  {
    "id": 18,
    "page": 3,
    "category": "Faits Divers",
    "title": "Vol chez Madame Réjane",
    "summary": "La célèbre comédienne Mme Réjane a été victime d'un vol de bijoux à son domicile. L'enquête, menée par le juge André, désigne un ouvrier électricien qui a pris la fuite après avoir dérobé les objets précieux.",
    "paragraphs": [
      "Il y a quelques jours, un vol a été commis au domicile de Mme Réjane, la célèbre et charmante actrice du Vaudeville. Plusieurs bijoux de valeur ont été dérobés par un individu qui s'était introduit dans son appartement.",
      "L'instruction de cette affaire a été confiée à M. le juge André. L'enquête a établi que les joyaux ont été emportés par un ouvrier électricien, lequel, au lieu d'exécuter les travaux qui lui avaient été commandés, a dérobé les objets précieux et a pris la fuite."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Faits Divers",
    "title": "Suicide d'une brodeuse",
    "summary": "Âgée de soixante-cinq ans, Mme Amélie Bûcher, brodeuse au passage Gustave-Lepeu, a mis fin à ses jours par asphyxie. La malheureuse, en proie à une profonde mélancolie, avait déjà exprimé des intentions suicidaires.",
    "paragraphs": [
      "Une brodeuse, Mme Amélie Bûcher, âgée de soixante-cinq ans et domiciliée 10, passage Gustave-Lepeu, a été trouvée avant-hier soir asphyxiée dans son logement par son fils qui venait lui rendre visite.",
      "Depuis longtemps, la vieille dame était en proie à une noire mélancolie et avait, à différentes reprises, manifesté l'intention d'en finir avec l'existence."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Faits Divers",
    "title": "Tentative de suicide d'une ménagère",
    "summary": "Drame rue Keller : Mme Augustine Colombau a mis fin à ses jours par asphyxie au gaz après avoir conduit sa fille à l'école. Malgré l'alerte donnée par une amie, les secours n'ont pu que constater son décès.",
    "paragraphs": [
      "Après avoir conduit sa fille Germaine, âgée de dix ans, à l'école, une ménagère, Mme Augustine Colombau, domiciliée rue Keller, s'est enfermée hier après-midi dans sa chambre, a allumé un réchaud et s'est étendue sur son lit, attendant la mort.",
      "Avertie par une lettre que la malheureuse lui avait adressée, une de ses amies, Mme B., accourut et fit enfoncer la porte du logement, mais il était trop tard : la malheureuse venait de succomber à l'asphyxie."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Découverte d'un corps au bois de Boulogne",
    "summary": "Hier après-midi, le corps d'un homme d'environ quarante-cinq ans, vêtu d'un costume de velours côtelé, a été découvert pendu à un sapin au Rond-Royal, dans le bois de Boulogne. Son identité reste encore à établir.",
    "paragraphs": [
      "Neuilly-sur-Seine. Hier, à deux heures de l'après-midi, des agents de service au bois de Boulogne ont découvert, pendu à un sapin du Rond-Royal, le corps d'un homme âgé d'environ quarante-cinq ans, vêtu d'un costume brun en velours côtelé.",
      "La mort remontait à quelques instants à peine. On a trouvé sur lui une carte d'abonnement au chemin de fer au nom de Duchesne, sans autre indication. Le corps a été transporté à la morgue."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Accident de travail à Clichy",
    "summary": "Un tragique accident est survenu à Clichy : le jeune terrassier Eugène Samson a trouvé la mort, emporté par le courant dans un égout en réparation, boulevard National.",
    "paragraphs": [
      "Clichy. Un terrassier, Eugène Samson, âgé de vingt-six ans, demeurant rue Pizillon, était occupé hier, à cinq heures, en face du 11 du boulevard National, dans un égout en réparation, quand il tomba dans le chenal et fut entraîné par la violence du courant.",
      "Ses camarades n'ont pu retrouver le cadavre de l'infortuné qu'après une heure de pénibles recherches."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Enquête sur le drame du quai d'Asnières",
    "summary": "L'enquête sur l'agression au stylet, quai d'Asnières, se poursuit. Mme Liesbourg, qui aurait été frappée la première par la victime, a obtenu la liberté provisoire en attendant la suite des investigations.",
    "paragraphs": [
      "Asnières. M. Kien, commissaire de police, poursuivant son enquête sur le drame du quai d'Asnières, a entendu hier de nombreux témoins.",
      "De l'ensemble des dépositions recueillies, il semble établi qu'avant de recevoir les deux coups de stylet, Tureil, apercevant Mme Eugénie Liesbourg sur le ponton, l'aurait la première frappée violemment au visage. Sa version sur les mauvais propos tenus à son encontre n'ayant jamais été mise en doute, Mme Liesbourg, qui avait été envoyée au dépôt, a été remise en liberté provisoire."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Agression conjugale à Saint-Denis",
    "summary": "Un drame conjugal a éclaté dans un tramway à Saint-Denis. Léon Balzic a violemment agressé son épouse, qui a dû être transportée d'urgence à l'hôpital dans un état jugé grave.",
    "paragraphs": [
      "Saint-Denis. Un ouvrier mécanicien, Léon Balzic, âgé de vingt-six ans, trouvant hier matin dans un tramway sa femme, Maria, âgée de vingt-quatre ans, qui l'avait quitté en raison de sa brutalité, se rua sur elle et lui porta de violents coups au visage et au crâne.",
      "Les voyageurs s'interposèrent et le forcené fut remis entre les mains des gardiens de la paix. La malheureuse femme, dont l'état est jugé grave, a dû être transportée à l'hôpital."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Arrestation d'un escroc à Bry-sur-Marne",
    "summary": "La police de Bry-sur-Marne a appréhendé un escroc sévissant chez les grainetiers. Se faisant passer pour courtier, il détournait le paiement des marchandises au détriment des fournisseurs.",
    "paragraphs": [
      "Bry-sur-Marne. M. Parnet, commissaire de police, a arrêté hier un escroc qui opérait chez les grainetiers.",
      "Cet individu, qui prétend se nommer Charles Monnier, se faisait passer pour courtier en grains. Il prenait les commandes, les transmettait à des marchands de fourrages et se faisait indiquer l'heure de la livraison. Puis, tandis que le charretier déchargeait sa voiture, Monnier se présentait chez l'acheteur, encaissait le montant de la facture et disparaissait.",
      "En moins d'un mois, Monnier a escroqué plus de 10 000 francs. Il a refusé de faire connaître son domicile et a été envoyé au dépôt."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Accident à Charenton",
    "summary": "À Charenton, M. Lucien Daneron, âgé de vingt-huit ans, a été victime d'une chute grave de motocycle, quai des Carrières. Il a été transporté à son domicile dans un état jugé désespéré.",
    "paragraphs": [
      "Charenton. M. Lucien Daneron, âgé de vingt-huit ans, est tombé hier de son motocycle, quai des Carrières, et s'est fracturé le crâne. Il a été transporté à son domicile, rue de Charenton, dans un état désespéré."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Suicide à Versailles et agression de cocher",
    "summary": "Un cordonnier s'est pendu à Versailles. Par ailleurs, un cocher a été violemment agressé et dépouillé par trois individus et une femme lors d'une course vers Guyancourt.",
    "paragraphs": [
      "Versailles. Un cordonnier, Jean Arulli, âgé de trente-sept ans, d'origine italienne, s'est pendu hier après-midi dans son domicile, 18, rue des Tournelles.",
      "La nuit dernière, un cocher nommé Paul Varier avait pris dans sa voiture trois individus et une femme pour les conduire à Guyancourt. Les voyageurs jetèrent le cocher à bas de son siège, le frappèrent à l'aide d'un coup-de-poing américain, puis le dévalisèrent. La victime, grièvement blessée, a été transportée au Chesnay. La voiture et le cheval ont été retrouvés dans les bois de Trappes."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Identification d'un noyé à Hardricourt",
    "summary": "Le corps retrouvé à Hardricourt a été formellement identifié comme étant celui de Gautier Ferand, un ouvrier sculpteur parisien de trente ans.",
    "paragraphs": [
      "Hardricourt. L'identité du mystérieux noyé d'Hardricourt a été établie hier par plusieurs personnes venues de Paris. Le défunt est un ouvrier sculpteur nommé Gautier Ferand, âgé de trente ans, demeurant 51, passage du Génie, à Paris."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Drame familial en Argentine",
    "summary": "Le directeur du haras de Béchoville, M. Edouard Drummer, a appris l'assassinat de son beau-frère et de sa belle-sœur en Argentine. Les deux enfants du couple ont été épargnés.",
    "paragraphs": [
      "Meulan. M. Edouard Drummer, directeur du haras de Béchoville et conseiller municipal de Chapet, vient d'être avisé par l'agent consulaire de San-Cristobal que son beau-frère, M. Aube, commissionnaire en marchandises à Portatis (République argentine), et sa femme, avaient été assassinés.",
      "Les coupables, qui étaient les débiteurs du défunt, ont pris soin de détruire sa comptabilité, mais ont heureusement épargné deux jeunes enfants qui seront rapatriés par les soins de leur famille."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Actualités",
    "title": "Duel militaire",
    "summary": "Un duel au sabre a opposé deux lieutenants du 18e dragons dans la cour de leur caserne. Blessés aux membres, les adversaires ont mis fin au combat et se sont réconciliés.",
    "paragraphs": [
      "Un duel au sabre a eu lieu hier, à deux heures, entre deux lieutenants du 18e dragons, dans la cour des nouvelles casernes.",
      "À la première reprise, le lieutenant B. a été blessé légèrement au biceps droit, tandis que le lieutenant V. était atteint au poignet. Les docteurs Launay, de Paris, et Signier, de Melun, se sont opposés à la reprise du combat. Les deux adversaires se sont réconciliés sur le terrain."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Bulletin du Travail",
    "title": "Fin de la grève des tramways-sud",
    "summary": "Sur l'intervention de M. Pierre Baudin, ministre des Travaux publics, les employés des tramways-sud ont repris le service. Une décision définitive sera arrêtée par le personnel dans un délai de trois jours.",
    "paragraphs": [
      "Ainsi que leurs délégués l'avaient promis à M. Pierre Baudin, ministre des Travaux publics, les employés de la Compagnie des tramways-sud ont repris hier le travail, et toutes les voitures ont circulé comme à l'ordinaire sur les six lignes qui composent le réseau.",
      "Ils attendent maintenant le résultat de l'intervention du ministre et la réponse définitive de la compagnie. M. Pierre Baudin leur a demandé un délai de trois jours. Dès que les employés la connaîtront, ils se réuniront de nouveau pour décider, soit la reprise définitive du travail, soit la grève immédiate et générale."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Faits Divers",
    "title": "Meurtre à Rochechouart",
    "summary": "Un différend judiciaire vire au drame à Rochechouart : Justin Beyle a assassiné son voisin Lacroix à coups de hache et de canne à épée près du Palais de justice. Le meurtrier et son frère ont été écroués.",
    "paragraphs": [
      "Limoges, 28 novembre. Une terrifiante scène s'est déroulée, dans l'après-midi d'hier, au Palais de justice de la petite ville de Rochechouart. Un jeune homme de vingt-cinq ans a tué, à coups de hache et de canne à épée, un de ses voisins avec lequel il avait de graves démêlés judiciaires.",
      "Le meurtrier, le nommé Justin Beyle, était depuis longtemps en complète mésintelligence avec son voisin Lacroix, qu'il accusait d'avoir allumé un incendie dans sa maison. Hier, les deux hommes comparaissaient devant le bureau de l'assistance judiciaire, auquel Beyle avait eu recours.",
      "Après un refus d'assistance, Beyle alla se poster au coin de l'escalier. Sans défiance, Lacroix parut. Justin Beyle se rua sur lui, le frappant à la tête avec sa hache et le lardant de son épée. Lacroix tomba dans une mare de sang. Le forcené a été désarmé et arrêté avec son frère, inculpé de complicité."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Faits Divers",
    "title": "Assassinat d'un cycliste près de Nice",
    "summary": "Le corps d'un cycliste, M. Eugène Marion, a été découvert assassiné près de la frontière monégasque. Les blessures par balle et le vol des effets personnels attestent d'un crime crapuleux.",
    "paragraphs": [
      "Nice. Un ingénieur russe, M. Van Howe, qui revenait de Menton, a trouvé près de la frontière de Monaco, étendu sur la route, le cadavre d'un cycliste portant à la tête deux larges blessures.",
      "Le malheureux avait été assommé d'un coup de matraque et avait reçu deux balles dans la tête. Le corps a été reconnu comme étant celui de M. Eugène Marion, âgé de vingt-cinq à trente ans, qui habitait Monaco. Le crime doit avoir eu le vol pour mobile, l'assassin ayant dépouillé sa victime."
    ]
  }
];
