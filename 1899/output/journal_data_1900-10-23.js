// Date: 1900-10-23
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-10-23 (Version Restaurée, 39 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Éditorial",
    "title": "La mer pour tous",
    "summary": "Face aux ravages de la tuberculose et de la scrofule chez la jeunesse, l'auteur préconise l'aménagement d'hôpitaux marins dans des édifices publics déclassés pour sauver notre force nationale.",
    "paragraphs": [
      "La tuberculose et ses terribles succédanés n'arrêtent point leurs ravages. Pour ne parler que d'un d'entre eux, la scrofule, une statistique récente du ministère de la Guerre établissait que, sur cent jeunes gens qui se présentent devant les conseils de révision, il y en a au moins un et quelquefois deux qui sont atteints du mal.",
      "Si l'on poussait plus avant l'examen, on trouverait une proportion autrement considérable. Quoi qu'il en soit, on peut évaluer à vingt-cinq mille le nombre des malheureux petits êtres atteints de la scrofule en France.",
      "La scrofule est guérissable, mais il y faut le traitement marin. Le conseil général du Morbihan vient de donner un bel exemple en décidant qu'un hôpital marin serait fondé à Port-Louis dans une ancienne usine à sardines achetée par ses soins.",
      "Plutôt que de bâtir des immeubles neufs et coûteux, il serait si aisé d'acquérir à bon marché des immeubles déjà existants, comme les anciens forts et bastions déclassés sur notre littoral.",
      "Il s'agit de sauver des enfants et nous n'en avons plus assez. Rendons au pays ce millier d'hommes de vingt ans qu'on réforme chaque année. La mer, de sa rude et saine caresse, ne tarderait pas à refaire des hommes de ces déshérités."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Le fruit défendu",
    "summary": "Régine, tiraillée entre les projets matrimoniaux de son père et ses sentiments pour un mystérieux amant, tente de gagner du temps malgré la vigilance de son entourage.",
    "paragraphs": [
      "Vois-tu, dans la vie, il faut toujours une part pour le malheur. Cette part avec Rose-Manon, nous l'avons faite. Il est juste qu'avec Régine nous recommencions.",
      "En haut, au même instant, dans sa chambre, Régine relisait pour la centième fois la dernière lettre mystérieuse d'amour.",
      "Jérôme écrivit à Juvardin pour lui dire qu'il pouvait se présenter et que le père de Régine ne s'opposerait pas à leur bonheur. Mais Marianne insista pour consulter Régine.",
      "Régine, en apprenant le nom de Guillaume Juvardin, comprit que ce n'était pas l'homme qu'elle aimait. Néanmoins, pour gagner du temps et éviter les questions, elle accepta qu'il vienne.",
      "Pendant ce temps, elle continuait de correspondre secrètement avec son amant, le tentateur aux longs yeux séduisants, par la poste restante.",
      "Rose-Manon, observant Régine, soupçonnait un mystère dans le cœur de la jeune fille et commençait à douter de sa sincérité concernant le mariage avec Guillaume."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Chronique Politique",
    "title": "M. de Lanessan à Toulon",
    "summary": "M. de Lanessan, ministre de la Marine, a inspecté l'arsenal de Toulon. Après avoir testé le sous-marin Gustave-Zédè, il annonce une demande de crédits pour renforcer la défense maritime et le sort du personnel.",
    "paragraphs": [
      "M. de Lanessan, ministre de la Marine, accompagné du vice-amiral Bienaimé et de plusieurs officiels, a passé son après-midi à étudier techniquement le fonctionnement des principaux ateliers de l'arsenal de Toulon.",
      "Après avoir visité les bassins et le sous-marin Gustave-Zédè, il a effectué lui-même une expérience de navigation sous-marine en rade qui a été très réussie.",
      "Au dîner des amiraux, le ministre a déclaré qu'une augmentation de crédits dans le budget de la Marine devait être demandée pour la continuation des travaux de défense maritime et l'amélioration du sort du personnel."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Politique",
    "title": "L'élection de Toulon",
    "summary": "Les électeurs de la deuxième circonscription de Toulon sont convoqués aux urnes pour le 18 novembre prochain afin de désigner le successeur de M. Cluseret à la Chambre des députés.",
    "paragraphs": [
      "Les électeurs de la deuxième circonscription de Toulon sont convoqués pour le 18 novembre prochain. Il s'agit de désigner le successeur de M. Cluseret à la Chambre."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Social",
    "title": "La campagne d'Algérie et les retraites militaires",
    "summary": "Le général André prépare une réforme des retraites militaires visant à restreindre les majorations de pension aux seules campagnes de guerre effectives, excluant les missions de pacification en Algérie.",
    "paragraphs": [
      "Le général André a mis à l'étude, au ministère de la Guerre, le principe d'une réforme qui permettrait de réaliser une économie sur les retraites militaires.",
      "Actuellement, le décompte des campagnes en Algérie permet à des officiers, même pour des missions courtes et pacifiques, d'obtenir des majorations de pension indues. Le général André souhaite restreindre ce bénéfice aux campagnes effectives de guerre."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Nouvelles Coloniales",
    "title": "La mission Foureau-Lamy",
    "summary": "Au lendemain de l'héroïque décès du commandant Lamy, le commandant Reibell et les officiers de la mission Foureau-Lamy rallient Bordeaux, où une cérémonie officielle célèbrera leur retour et leurs décorations.",
    "paragraphs": [
      "Le commandant Reibell et les officiers de la mission Foureau-Lamy, après l'héroïque mort du commandant Lamy, arrivent demain à Bordeaux. Une cérémonie de remise de décorations aura lieu à l'arrivée du bateau."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Accident à l'Exposition",
    "summary": "Une violente explosion survenue hier à la galerie des moteurs à gaz de l'Exposition, causée par une machine Letombe, a fait cinq blessés, dont M. Somsée. Une enquête est en cours.",
    "paragraphs": [
      "Une explosion d'une violence extrême s'est produite hier soir, vers six heures, à l'Exposition, dans la galerie réservée aux moteurs à gaz. Un moteur de la maison Letombe a provoqué une détonation qui a soulevé le parquet et causé des dégâts importants.",
      "Cinq personnes ont été blessées, dont M. Somsée, ancien député belge, et le mécanicien M. Morel. Les secours ont été rapidement organisés et une enquête est ouverte pour établir les responsabilités."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Politique Étrangère",
    "title": "La démission du ministère espagnol",
    "summary": "Suite à la nomination controversée du général Weyler, le cabinet Silvela a présenté sa démission. Le général Azcarraga est chargé de former un nouveau ministère dans un contexte de crise financière.",
    "paragraphs": [
      "Le ministère conservateur présidé par M. Silvela a donné sa démission. L'incident déclencheur est la nomination du général Weyler à la capitainerie générale de Madrid, sans consultation préalable du conseil.",
      "D'autres facteurs, tels que les difficultés financières, les désaccords profonds sur la politique intérieure et le mouvement des chambres de commerce, ont contribué à cette chute. Un nouveau cabinet a été formé sous la présidence du général Azcarraga."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Faits Divers",
    "title": "Suicide de deux jeunes filles à Lyon",
    "summary": "Un drame poignant s'est déroulé dans un hôtel de la rue Victor-Hugo à Lyon : deux jeunes filles, Pauline Bryat et Fleurine Triolet, ont mis fin à leurs jours. Seule Pauline a survécu.",
    "paragraphs": [
      "Un drame navrant s'est déroulé dans un hôtel de la rue Victor-Hugo à Lyon. Pauline Bryat et Fleurine Triolet, deux jeunes filles, ont mis fin à leurs jours par asphyxie au charbon de bois.",
      "Fleurine est décédée, tandis que Pauline a été transportée à l'Hôtel-Dieu dans un état grave. Une lettre laissée par les deux jeunes filles indique qu'elles ont agi volontairement, sans toutefois donner de raison précise à leur funeste acte."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "Faits Divers",
    "title": "Effondrement d'un bâtiment à Dunkerque",
    "summary": "Aux chantiers de construction de France à Dunkerque, l'écroulement d'un atelier de chaudronnerie sous l'effet des intempéries a causé des blessures graves à six ouvriers. La consternation est vive.",
    "paragraphs": [
      "Un grave accident s'est produit aux chantiers de construction de France à Dunkerque. Un bâtiment en construction, l'atelier de chaudronnerie, s'est subitement écroulé, probablement sous l'effet des pluies persistantes de ces derniers jours.",
      "Une douzaine d'ouvriers ont été ensevelis sous les décombres. Six d'entre eux, grièvement blessés, ont été transportés à l'hôpital. La population locale est plongée dans la consternation."
    ]
  },
  {
    "id": 11,
    "page": 1,
    "category": "Nouvelles Internationales",
    "title": "La situation en Chine",
    "summary": "La situation demeure critique en Chine, où l'insurrection contre la dynastie mandchoue s'intensifie. Pékin propose des négociations tandis que les troupes françaises renforcent leur position à Pao-Ting-Fou.",
    "paragraphs": [
      "La situation continue de s'aggraver dans le Sud. L'insurrection n'est point dirigée contre les étrangers, mais bien contre la dynastie mandchoue.",
      "L'ambassadeur de Chine a remis au ministère des Affaires étrangères une lettre de l'empereur sollicitant des négociations de paix. De son côté, le général Voyron a télégraphié que les troupes françaises occupent désormais la gare et la voie ferrée de Pao-Ting-Fou."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Extrême-Orient",
    "title": "Mouvements de troupes en Chine",
    "summary": "Des renforts chinois convergent vers Si-Ngan-Fou pour assurer la protection impériale. Par ailleurs, des dépêches confirment le suicide du général Cheng, défait par les forces russes.",
    "paragraphs": [
      "Le contingent du Tié-Chouen, fort de 800 hommes, est arrivé à Fiang-Yang, localité située à 250 milles au sud-est de Si-Ngan-Fou.",
      "Ce contingent fait route vers Si-Ngan-Fou afin d'assurer la protection de l'empereur.",
      "Le correspondant du Daily Mail rapporte que, selon des nouvelles parvenues de Ni-Mi-Chouang, le général Cheng, après avoir été battu par les Russes, a mis fin à ses jours."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Politique Étrangère",
    "title": "La Convention anglo-allemande",
    "summary": "La presse européenne commente l'accord anglo-allemand en Chine. Berlin dément l'existence de clauses occultes, tandis que le président américain McKinley examine la portée du troisième article du traité.",
    "paragraphs": [
      "Berlin, 22 octobre : Contrairement aux suppositions émises par les journaux de Paris sur l'accord anglo-allemand en Chine, alléguant l'existence de clauses secrètes, la National Zeitung déclare : « Nous pouvons assurer, avec la certitude la plus entière, qu'il n'existe aucune clause secrète dans cet accord. »",
      "New-York, 22 octobre : On mande de Washington au New-York Herald que, avant de donner son adhésion à l'accord anglo-allemand, le président McKinley se renseignera précisément sur les termes et la portée exacte du troisième article.",
      "Londres, 22 octobre : Les journaux se félicitent de voir l'Allemagne comprendre que ses intérêts sont identiques à ceux de l'Angleterre pour maintenir la paix et la liberté commerciale. Le Standard attache une grande importance à cette convention, soulignant que si d'autres puissances cherchaient à acquérir des avantages territoriaux, Londres et Berlin se verraient contraints de réclamer des compensations."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Politique",
    "title": "M. Barthou à Oloron",
    "summary": "Devant ses électeurs d'Oloron, M. Louis Barthou réaffirme son opposition au nationalisme et à l'antisémitisme, prônant l'union républicaine et la clôture définitive de l'affaire Dreyfus.",
    "paragraphs": [
      "Oloron, 22 octobre : M. Louis Barthou, ancien ministre de l'Intérieur, a rendu compte aujourd'hui de son mandat lors d'une réunion publique. Il a réitéré son opposition au nationalisme et à l'antisémitisme, se déclarant l'adversaire irréductible de ces deux mouvements.",
      "Concernant l'affaire Dreyfus, il a déclaré que celle-ci devait être considérée comme définitivement close, le jugement ayant été rendu par l'autorité même de la loi devant laquelle tout citoyen doit s'incliner.",
      "M. Barthou a également analysé la situation politique, évoquant les projets relatifs à l'impôt sur le revenu et à la réforme scolaire, tout en plaidant pour une politique de progrès par l'union indéfectible des républicains."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Administration",
    "title": "À l'Hôtel de Ville : Le budget",
    "summary": "Le Conseil municipal de Paris a rejeté le projet de budget du préfet de la Seine. Une commission a été constituée pour proposer des économies afin d'éviter tout alourdissement de la fiscalité.",
    "paragraphs": [
      "Le conseil municipal a rejeté le projet de budget présenté par le préfet de la Seine, sommant l'administration d'équilibrer les comptes sans recourir à de nouveaux impôts.",
      "La commission des économies s'est réunie afin de déterminer sur quels chapitres du budget il serait possible d'opérer des réductions de crédits nécessaires."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Fête de clôture et succès de l'Exposition",
    "summary": "Le Conseil municipal de Paris organise une fête à l'Hôtel de Ville pour célébrer le succès triomphal de l'Exposition universelle, qui a accueilli plus de 500 000 visiteurs le dernier dimanche.",
    "paragraphs": [
      "C'est samedi prochain qu'aura lieu, à l'Hôtel de Ville, la fête offerte par le Conseil municipal à l'occasion de la clôture de l'Exposition.",
      "Le succès de l'Exposition universelle ne se dément pas, avec plus de 500 000 visiteurs enregistrés le dimanche dernier.",
      "Le roi Georges de Grèce a visité plusieurs sections de l'Exposition, notamment le musée centennal du costume et le palais de l'Électricité.",
      "La commission des fêtes a formellement fixé la date de la réception solennelle au samedi 10 novembre."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Faits Divers",
    "title": "Incendie mortel à Bruxelles",
    "summary": "Un tragique incendie a détruit un magasin de chaussures à Bruxelles. Les décombres ont révélé le corps carbonisé de Mlle Joséphine Lang, institutrice, qui n'a pu échapper aux flammes.",
    "paragraphs": [
      "Bruxelles, 22 octobre : Un incendie a détruit entièrement un magasin de chaussures. Dans les décombres, on a découvert le cadavre carbonisé de Mlle Joséphine Lang, institutrice, qui n'avait pas eu le temps de fuir."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Guerre au Transvaal",
    "title": "Nouvelles du front",
    "summary": "Les hostilités persistent au Transvaal : Lord Roberts relate une attaque boër repoussée à Jagers-Fontein, tandis que les colonnes britanniques progressent difficilement vers Zeerust.",
    "paragraphs": [
      "Londres, 22 octobre : Lord Roberts télégraphie de Pretoria des détails sur l'attaque de Jagers-Fontein par les Boërs. Ces derniers ont été repoussés par la garnison après avoir toutefois réussi à libérer plusieurs prisonniers.",
      "Le général Methuen télégraphie que la marche sur Zeerust a été très pénible et signale la capture de fourgons boërs. De son côté, le général Knox signale une attaque contre l'infanterie près de la voie ferrée."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Faits Divers",
    "title": "Arrestations d'anarchistes",
    "summary": "Les autorités ont arrêté l'anarchiste Joseph Engel à Bruxelles. À Tunis, un nommé Groswald a été interpellé pour apologie d'assassinat, en possession de documents et plans compromettants.",
    "paragraphs": [
      "Bruxelles, 22 octobre : Arrestation de l'anarchiste Joseph Engel, désormais écroué à la prison de Saint-Gilles.",
      "Tunis, 22 octobre : Un individu se nommant Groswald a été arrêté après avoir fait l'apologie de l'assassinat du roi Humbert. Une perquisition a permis de découvrir une nombreuse correspondance anarchiste ainsi que des plans de routes détaillés entre la France, l'Italie et l'Allemagne."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Justice",
    "title": "Procès de faux-monnayeurs",
    "summary": "La cour d'assises de la Seine juge une bande de sept malfaiteurs spécialisés dans la contrefaçon de pièces de dix francs à l'effigie de Napoléon III, dirigés par le nommé Cosson.",
    "paragraphs": [
      "Une bande de faux-monnayeurs comparaît actuellement devant la cour d'assises de la Seine. Les accusés, au nombre de sept, fabriquaient des pièces de dix francs à l'effigie de Napoléon III.",
      "L'association criminelle était dirigée par un récidiviste nommé Cosson, qui demeure à ce jour en fuite. Les membres de la bande ont été capturés suite aux aveux détaillés d'un complice nommé Billion."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Faits Divers",
    "title": "Double assassinat à Troyes",
    "summary": "Le crime atroce commis rue des Ormes à Troyes a connu son épilogue à la cour d'assises de l'Aube : le meurtrier de MM. Adam et Picard est condamné aux travaux forcés à perpétuité.",
    "paragraphs": [
      "Le drame sanglant survenu rue des Ormes à Troyes, en juin dernier, a connu son dénouement devant la cour d'assises de l'Aube. Un individu sans scrupules a attaqué et massacré M. Adam et M. Picard lors d'une embuscade nocturne des plus lâches.",
      "L'accusé, dont la culpabilité ne faisait aucun doute pour les jurés, a été condamné, après une courte délibération, à la peine des travaux forcés à perpétuité."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drame domestique à Paris",
    "summary": "Une jeune femme a succombé à l'Hôtel-Dieu après un terrible accident domestique ; ses vêtements s'étaient embrasés au contact d'une bougie, causant des brûlures fatales.",
    "paragraphs": [
      "Une jeune femme a été victime d'un terrible accident domestique en entrant en contact avec la flamme d'une bougie. Ses vêtements, légers et inflammables, prirent feu instantanément.",
      "Affolée par le brasier, elle s'enfuit en courant dans les couloirs, activant par ce mouvement la violence des flammes qui l'enveloppaient. Elle finit par s'abattre devant la loge de la concierge, où des secours tentèrent désespérément de l'étouffer à l'aide de couvertures.",
      "Transportée d'urgence à l'Hôtel-Dieu, la malheureuse a succombé après quelques heures d'horribles souffrances."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Dernière Heure",
    "title": "Le général André à Alger",
    "summary": "Le ministre de la Guerre, le général André, a reçu un accueil chaleureux à Alger. Malgré des ovations constantes, quelques remous ont été signalés lors de son arrivée au palais d'Hiver.",
    "paragraphs": [
      "Le général André, ministre de la Guerre, a débarqué à Alger le 25 octobre. Il fut accueilli officiellement par le général Grisot et M. Kœchlin, conseiller du gouvernement général.",
      "Malgré une pluie battante, une foule nombreuse s'était massée sur les boulevards pour acclamer le ministre. Toutefois, après son entrée au palais d'Hiver, une manifestation inopinée a provoqué quelques remous au sein de la foule.",
      "Dans toutes les gares jalonnant son parcours, le ministre a été l'objet d'ovations particulièrement chaleureuses de la part des populations locales."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Déraillement en Belgique",
    "summary": "Un tragique accident de chemin de fer à la gare de Jumet a causé la mort d'une dame Hupaux et de ses enfants, faisant en outre une trentaine de blessés parmi les passagers.",
    "paragraphs": [
      "Un train en provenance de Bruxelles a déraillé ce jour à la gare de Jumet dans des circonstances dramatiques. La locomotive et plusieurs voitures ont quitté les rails et dévalé le remblai.",
      "Le bilan est lourd : trente personnes ont été blessées. Une dame Hupaux, épouse d'un instituteur, est mortellement touchée, ainsi que ses enfants. Le mécanicien et le chef-garde, coincés dans la carcasse de la machine, sont également grièvement blessés."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Politique Étrangère",
    "title": "Lord Salisbury à Balmoral",
    "summary": "Après avoir conféré avec les ambassadeurs de Russie et de Chine, Lord Salisbury s'est rendu à Balmoral, laissant présager un remaniement imminent du cabinet ministériel britannique.",
    "paragraphs": [
      "Lord Salisbury, après avoir reçu successivement les ambassadeurs de Russie et de Chine, est parti pour le château de Balmoral.",
      "On croit savoir dans les cercles autorisés que cette visite à la Reine est motivée par certains changements attendus dans la composition actuelle du cabinet ministériel."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestation de malfaiteurs à Saint-Cloud",
    "summary": "Émile Schillis et Maximilien Dumont, auteurs d'un vol dans une villa du quai de Billancourt, ont été appréhendés à la barrière de Saint-Cloud. Ils ont dénoncé leur complice, Louis Delarue, désormais écroué au dépôt.",
    "paragraphs": [
      "Émile Schillis et Maximilien Dumont, qui avaient dévalisé une villa sise quai de Billancourt, ont été arrêtés par les agents à la barrière de Saint-Cloud.",
      "Conduits au commissariat, ils ont fait des aveux complets et dénoncé leur complice, Louis Delarue. Les trois individus ont été écroués au dépôt en attendant leur comparution."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Agression à Levallois-Perret",
    "summary": "M. Ludovic Contes, employé de commerce, a repoussé courageusement une bande de six agresseurs sous le pont de Levallois en faisant usage de son revolver. Deux des malfaiteurs ont été blessés avant de prendre la fuite.",
    "paragraphs": [
      "M. Ludovic Contes, employé de commerce, a été attaqué sous le pont de Levallois par une bande de six individus aux intentions manifestement criminelles.",
      "Faisant preuve d'un grand sang-froid, il a tiré six coups de revolver sur ses assaillants, dont deux furent visiblement atteints puisqu'ils ont chancelé. Voyant leur résistance inattendue, les malfaiteurs ont pris la fuite."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "Asphyxie mortelle à Asnières",
    "summary": "Un drame domestique a endeuillé la commune d'Asnières : M. Gustave Coudray, boucher, a trouvé la mort accidentellement, asphyxié par une fuite de gaz dans sa boutique.",
    "paragraphs": [
      "Un triste accident a coûté la vie à M. Gustave Coudray, boucher à Asnières, décédé asphyxié par une fuite de gaz survenue dans la glacière de sa boutique.",
      "Le corps inanimé du malheureux n'a été découvert que le lendemain matin par sa mère, accourue sur les lieux."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Découverte d'un cadavre à Nanterre",
    "summary": "Le corps sans vie de M. Louis Hemy, sexagénaire, a été découvert rue du Chemin-de-Fer à Nanterre. Le malheureux aurait succombé après une chute mortelle contre l'angle d'un trottoir.",
    "paragraphs": [
      "Le cadavre de M. Louis Hemy, âgé de soixante ans, a été retrouvé rue du Chemin-de-Fer à Nanterre. Selon les premières constatations, il aurait succombé à la suite d'une chute malheureuse contre l'angle d'un trottoir."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestations à Colombes",
    "summary": "Grâce à l'intervention du commissaire de police de Courbevoie, M. Mazurié, deux repris de justice notoires ont été écroués pour vol avec effraction à Colombes.",
    "paragraphs": [
      "M. Mazurié, commissaire de police de Courbevoie, a fait écrouer au dépôt deux repris de justice, Édouard Spiller et Louis Korler, appréhendés en flagrant délit alors qu'ils commettaient un vol avec effraction à Colombes."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drame familial à Corbeil et Mennecy",
    "summary": "À Corbeil, un marchand de vins est grièvement blessé par un locataire après un différend. À Mennecy, le jeune Jules Barnay est écroué pour avoir tenté d'abattre son père d'un coup de fusil.",
    "paragraphs": [
      "À Corbeil, un marchand de vins a été grièvement blessé d'un coup de marteau par un locataire, à la suite d'un différend d'ordre financier.",
      "À Mennecy, le jeune Jules Barnay a violemment agressé son père après une observation faite par ce dernier. Le misérable, ayant tenté de le menacer avec un fusil, a été arrêté et écroué."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Faits Divers",
    "title": "Agression à Fontainebleau",
    "summary": "Une tentative de meurtre a frappé un sous-chef de gare à Fontainebleau. Un inconnu a fait usage de son revolver contre lui, le blessant au cou avant de prendre la fuite.",
    "paragraphs": [
      "À Fontainebleau, un inconnu a tiré un coup de revolver sur un sous-chef de gare, le blessant au cou. Le tireur a réussi à s'enfuir."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incendies criminels à Fitz-James",
    "summary": "Deux incendies suspects ont ravagé des exploitations agricoles à Fitz-James. Un berger, fortement soupçonné d'être l'auteur de ces sinistres, a été appréhendé et écroué à Clermont.",
    "paragraphs": [
      "Deux incendies ont ravagé une grange appartenant à M. Émile Gilet et une meule de fourrage chez M. Camille Lejyste. Un berger est fortement soupçonné d'en être l'auteur et a été écroué à Clermont."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident mortel à Senlis",
    "summary": "Sur la côte de Balagny, près de Senlis, un tragique accident de voiture a coûté la vie au jeune Georges Leloug, qui a succombé à ses blessures après le renversement du véhicule.",
    "paragraphs": [
      "Une voiture s'est renversée sur la côte de Balagny. Le jeune Georges Leloug a succombé à ses blessures des suites de cette chute."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident domestique à Compiègne",
    "summary": "Un triste drame domestique a endeuillé la ville de Compiègne : une fillette de trois ans, Eugénie Croix-Dermigny, est décédée après avoir accidentellement ingéré de la potasse.",
    "paragraphs": [
      "Une fillette de trois ans, Eugénie Croix-Dermigny, a trouvé la mort après avoir avalé de la potasse trouvée dans une pièce en cours de réparation."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Feuilleton",
    "title": "Les Miettes du Bonheur",
    "summary": "Dans sa maisonnette, le vieux garde rumine sa vengeance. Malgré le mauvais temps, il attend Tiennet, confiant dans l'efficacité des collets qu'il vient de poser, certain de le capturer très prochainement.",
    "paragraphs": [
      "Ce soir-là, dans la maisonnette qu'il habitait, le vieux garde était sorti à plusieurs reprises sur le seuil de sa porte, examinant l'état du ciel, et maugréant : « Y a peut-être bien rien à faire aujourd'hui ; par un temps de chien pareil, Tiennet ne s'aventurera pas dehors. Faudrait vraiment qu'il ait le diable au corps. »",
      "Il rentra, referma la porte, regarda la montre accrochée au mur vers la tête de son lit, lequel occupait un coin de la pièce qui lui servait à la fois de cuisine, de salle à manger, de salon et de chambre à coucher. Il compta mentalement : neuf heures... dix heures, dix heures passées.",
      "Il s'assit encore, bourra une pipe, l'alluma et, songeur, la fuma à bouffées lentes. Parfois, à voix haute, il traduisait ses pensées : « Ah ! Il me berne, le Tiennet. On verra. Rira bien qui rira le dernier. J'ai découvert aujourd'hui même une nouvelle étendue. Naturellement, j'ai laissé les collets. Pas si bête de les enlever. Au moins, je vais pouvoir le pincer là à la première occasion, et je crois que ça ne tardera pas. »"
    ]
  },
  {
    "id": 37,
    "page": 4,
    "category": "Feuilleton",
    "title": "Le Bigame",
    "summary": "Une jeune femme, revenue de l'hôpital et désormais mère, confie le secret de son passé et son renoncement au comte de Terrique pour assurer le bonheur de celle qui l'écoute.",
    "paragraphs": [
      "« Voyons, mon enfant, parlez-vous sérieusement ? — Oh ! monsieur, si je parle sérieusement ! Voulez-vous que je vous raconte comment nous nous sommes connus et comment nous nous sommes quittés ? »",
      "« Oui, c'est encore un secret, un secret même pour ma mère. Quand je suis sortie de l'hôpital, on ne voyait rien encore. J'avais supplié qu'on n'en dise rien aux miens. On se tut. On m'aimait bien, on me soignait. Puis j'avais eu la tête si malade ; on savait qu'à la moindre contrariété, je retomberais dans mes idées de suicide. »",
      "« Oui, j'ai un beau petit garçon de deux mois, en nourrice là-bas. Si je suis revenue à Paris, c'est pour gagner de l'argent afin de l'élever. Car je ne veux rien de personne, rien jamais. Eh bien, je vous le jure, sur la tête de mon cher petit, le comte de Terrique, que je n'oublierai jamais, sera un étranger pour moi, quand je le saurai heureux, heureux avec vous, madame. »"
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Chronique Judiciaire",
    "title": "Une confrontation au Palais de Justice",
    "summary": "Au Palais de Justice, Mme de Terrique sollicite l'intervention du magistrat concernant la conduite de son époux, espérant que celui-ci saura remplir son devoir malgré les délicates implications de cette affaire enterrée.",
    "paragraphs": [
      "Au Palais de Justice, madame de Terrique, qui fit passer sa carte, fut immédiatement reçue par le magistrat, justement encore dans son cabinet.",
      "La question fut abordée sur-le-champ. Madame de Terrique tint là le langage qu'elle tenait dans le salon des Duhalier. Le magistrat, quel que fût son ennui d'avoir à réveiller une affaire qu'il avait de lui-même, à ses risques et périls, enterrée, se sentait absolument disposé, comme magistrat et comme ami, à remplir son devoir."
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "Vie Locale",
    "title": "Drame familial chez les Vandenesse",
    "summary": "Marcel Vandenesse, alerté par un message pressant sur la santé de sa fille, accourt chez ses beaux-parents. Il y découvre avec angoisse que l'enfant, atteinte de diphtérie, réclame sa présence dans un moment d'intense émotion.",
    "paragraphs": [
      "Marcel Vandenesse lut d'un coup d'œil : « Venez, notre petite fille est malade. » Il dit tout haut : « Notre petite fille, mon Dieu ! qu'a-t-elle ? » Il ne pensait qu'au bébé. Il pénétra chez les parents de sa femme. C'est sa belle-mère qu'il vit tout d'abord : « Qu'y a-t-il ? Est-elle perdue ? — Non, mais c'est grave, la diphtérie. »",
      "L'enfant, doucement poussée par sa mère, se réveilla. Elle reconnut celui qui n'était pas là tout à l'heure et, tendant ses menottes, elle articula : « Papa. » — « Mon ange, ma chérie. — Oui, c'est papa, mon amour. »"
    ]
  }
];
