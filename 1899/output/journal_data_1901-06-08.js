// Date: 1901-06-08
// Restauration Pass: 2
// Base de données complète des articles de presse du 1901-06-08 (Version Restaurée, 45 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 2,
    "category": "Faits Divers",
    "title": "Le crime de la rue du Faubourg",
    "summary": "Martinez, auteur d'une tentative d'assassinat sur Mme Quijarro, a menti sur ses motifs. La police a retrouvé les objets volés cachés dans une armoire alors qu'il prétendait fouiller les matelas.",
    "paragraphs": [
      "Martinez, accusé d'avoir tenté d'assassiner Mme Quijarro, a livré un récit de ses actes qui s'avère être un tissu de mensonges. Il prétendait chercher des bijoux dissimulés sous les matelas, mais le commissaire de police, M. Archer, a découvert les effets dérobés cachés dans une armoire, sous du linge.",
      "Le crime porte la marque de la préméditation, Martinez ayant attendu le départ de la locataire pour passer à l'acte. La victime, Mme Quijarro, a été transportée à l'hôpital Lariboisière ; son état demeure comateux et son pronostic vital est engagé.",
      "Un juge d'instruction sera prochainement désigné pour poursuivre l'instruction de cette affaire."
    ]
  },
  {
    "id": 2,
    "page": 2,
    "category": "Politique",
    "title": "Séance du Sénat du 7 juin",
    "summary": "Sous la présidence de M. Fallières, le Sénat a débattu puis adopté le projet de loi relatif à la situation des agents des chemins de fer malgré des divergences sur les amendements.",
    "paragraphs": [
      "Sous la présidence de M. Fallières, le Sénat a délibéré sur un projet de loi relatif à la situation des chauffeurs, mécaniciens et agents des chemins de fer.",
      "Plusieurs amendements ont été longuement discutés, notamment par MM. Leydet et Strauss, portant sur la durée du travail et les temps de réserve. La plupart ont été rejetés après l'intervention du ministre des Finances, M. Caillaux, et du rapporteur, M. Godin.",
      "L'ensemble du projet de loi a finalement été adopté à mains levées par la Haute Assemblée."
    ]
  },
  {
    "id": 3,
    "page": 2,
    "category": "Politique",
    "title": "Séance de la Chambre des Députés du 7 juin",
    "summary": "La Chambre a renvoyé la proposition Berry en commission et entendu un discours sur l'insécurité en Algérie. Le débat est ajourné à vendredi prochain.",
    "paragraphs": [
      "La séance a débuté par une proposition de M. Georges Berry concernant le délai de discussion des interpellations, laquelle a été renvoyée devant la commission du règlement.",
      "M. Marchal a poursuivi son discours relatif aux troubles de Margueritte et à l'insécurité persistante en Algérie, dépeignant la population arabe comme difficile à assimiler aux mœurs européennes.",
      "Sur décision de l'Assemblée, le débat concernant la situation en Algérie a été renvoyé à vendredi prochain."
    ]
  },
  {
    "id": 4,
    "page": 2,
    "category": "Politique",
    "title": "Constitution de la Commission des Finances du Sénat",
    "summary": "La commission des finances du Sénat a désigné son bureau pour la session. M. Magnin est élu président, entouré de MM. Combes, Millaud et Dubost.",
    "paragraphs": [
      "La commission des finances du Sénat a procédé à la constitution de son bureau : M. Magnin a été nommé président, assisté des vice-présidents MM. Combes et Édouard Millaud, ainsi que du rapporteur général M. Antonin Dubost.",
      "Les rapports ont été répartis entre les divers membres de la commission afin de couvrir l'ensemble des départements ministériels, notamment les affaires étrangères, l'intérieur, la justice et la guerre."
    ]
  },
  {
    "id": 5,
    "page": 2,
    "category": "Politique",
    "title": "Candidature de M. Abel Combarieu",
    "summary": "Sollicité par les maires du canton de Luzech, M. Abel Combarieu, secrétaire général de la présidence, se porte candidat au conseil général en réaffirmant ses idéaux républicains.",
    "paragraphs": [
      "Les maires du canton de Luzech ont offert à M. Abel Combarieu, actuel secrétaire général de la présidence, la candidature au conseil général.",
      "M. Combarieu a accepté cette proposition, affirmant qu'il agirait en honnête homme et en républicain, rappelant à cette occasion l'engagement constant de sa famille en faveur de la République."
    ]
  },
  {
    "id": 6,
    "page": 2,
    "category": "Étranger",
    "title": "Nouvelles de la guerre au Transvaal et du Cap",
    "summary": "Mouvements de commandos boers dans les districts de Philippolis et Middelburg, troubles intercommunautaires au Cap et inquiétudes à Londres face à l'avancée signalée des troupes du général De Wet.",
    "paragraphs": [
      "Des mouvements de commandos boers sont signalés dans les districts de Philippolis et aux abords de Middelburg.",
      "Au Cap, une rixe violente entre soldats et Malais à Worcester a entraîné des troubles graves et la destruction d'un lieu de culte musulman.",
      "À Londres, les dépêches indiquent que le général De Wet mènerait une nouvelle incursion. Le président Krüger continue, de son côté, de recevoir des rapports alarmants sur la situation des troupes au front."
    ]
  },
  {
    "id": 7,
    "page": 2,
    "category": "Étranger",
    "title": "Troubles à Barcelone",
    "summary": "Une panique survenue lors de la Fête-Dieu à Barcelone a fait une centaine de blessés, sur fond de tensions sociales croissantes ayant conduit à la fermeture de plusieurs fabriques dans la région du Haut Ter.",
    "paragraphs": [
      "Lors de la procession de la Fête-Dieu à Barcelone, une fausse alerte à la bombe a semé l'épouvante au sein de la foule, causant une bousculade qui a fait une centaine de contusionnés.",
      "Dans la région du Haut Ter, une atmosphère de crise sociale persiste ; de nombreuses fabriques ont été fermées par les industriels suite à des revendications ouvrières incessantes."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Faits Divers",
    "title": "Incendie des docks d'Anvers",
    "summary": "Un incendie a ravagé les entrepôts d'Anvers, détruisant des stocks de café, sucre et tabac. Le fisc réclamant les droits de douane sur ces marchandises perdues, le Parlement est saisi du litige.",
    "paragraphs": [
      "Un incendie dévastateur a ravagé plusieurs entrepôts à Anvers, entraînant la perte irrémédiable de marchandises non assurées, notamment d'importants stocks de café, de sucre et de tabac.",
      "Le fisc a suscité un vif mécontentement en exigeant le paiement des droits de douane sur ces denrées détruites, prétextant une consommation fictive sur le territoire. Le Parlement est désormais saisi du litige."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Faits Divers",
    "title": "Tentative de rébellion à la prison de Blida",
    "summary": "Les inculpés de l'affaire de Margueritte, incarcérés à la prison de Montpensier, ont tenté de fomenter une révolte, rapidement maîtrisée par les gardiens qui ont mis les meneurs aux fers.",
    "paragraphs": [
      "Les inculpés de l'affaire de Margueritte, détenus à la prison de Montpensier, ont tenté de fomenter une révolte afin de s'évader. Les gardiens ont réprimé promptement la tentative de sédition et les principaux meneurs ont été aussitôt mis aux fers."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Faits Divers",
    "title": "Les duels du jour",
    "summary": "Chroniques des duels récents : une rencontre sans issue entre M. Max Régis et M. Laberdesque, et un affrontement au pistolet où la vie de M. Lautier fut sauvée par une pièce de monnaie dans sa poche.",
    "paragraphs": [
      "Un duel à l'épée, disputé au vélodrome du Parc des Princes entre M. Max Régis et M. Laberdesque, s'est terminé sans résultat probant après dix-huit reprises intenses.",
      "Un affrontement au pistolet a opposé MM. Willy de Blest-Gana et Lautier. M. Lautier a été atteint, mais n'a été blessé que légèrement, la balle ayant ricoché sur une pièce de monnaie logée dans sa poche."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Faits Divers",
    "title": "L'affaire de la recluse de Poitiers",
    "summary": "L'instruction sur le sort de Blanche Monnier se poursuit. M. le juge Dollin du Fresnel interroge les membres de la famille, tandis que des fouilles approfondies au domicile familial livrent de curieux restes.",
    "paragraphs": [
      "L'instruction se poursuit activement concernant l'affaire Blanche Monnier. M. le juge Dollin du Fresnel a procédé à l'interrogatoire de Mme Monnier et de son fils, Marcel.",
      "Marcel Monnier se retranche derrière son respect filial, affirmant n'avoir jamais remarqué l'état de délabrement de sa sœur. De son côté, Mme Monnier maintient avec opiniâtreté qu'elle agissait pour le seul bien de sa fille.",
      "Les fouilles entreprises dans le jardin de la propriété ont permis la découverte d'ossements d'animaux, actuellement soumis à un examen approfondi par les experts judiciaires."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Conseil de Paris",
    "title": "Délibérations du conseil municipal",
    "summary": "Le Conseil municipal de Paris débat de l'évolution des armoiries de la Ville, du devenir du cirque des Champs-Élysées et des réformes nécessaires au sein de l'Assistance publique après un récent accident.",
    "paragraphs": [
      "Le conseil a longuement discuté de la modification des armoiries de la Ville de Paris, rendue nécessaire par l'ajout officiel de la croix de la Légion d'honneur.",
      "Il a également délibéré sur le sort du cirque des Champs-Élysées, actuellement en ruines, ainsi que sur l'accident survenu à l'hôpital Lariboisière, réclamant des réformes urgentes dans les services de l'Assistance publique."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Théâtre",
    "title": "Critique de la pièce 'Le Petit Empereur'",
    "summary": "Représentée au Théâtre de la Renaissance, la pièce 'Le Petit Empereur' subit les foudres de la critique, qui la juge puérile, sans envergure et médiocre, telle une pâle imitation de l'Aiglon.",
    "paragraphs": [
      "La pièce 'Le Petit Empereur', jouée au Théâtre de la Renaissance, est jugée puérile et dépourvue d'intérêt artistique majeur par la critique, s'apparentant à un démarquage bien médiocre de l'Aiglon."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Actualités",
    "title": "Faits divers parisiens",
    "summary": "Une série d'incidents trouble la quiétude de la capitale : accidents de la voie publique, explosions industrielles, rixes violentes et arrestations d'escrocs occupent intensément l'activité des forces de police.",
    "paragraphs": [
      "Un accident de voiture, survenu rue Réaumur, a fait plusieurs blessés. Par ailleurs, une violente explosion dans un atelier de bronzeurs, rue de Commines, a grièvement brûlé un ouvrier. Une rixe, rue Frémicourt, a nécessité l'intervention des agents et l'arrestation d'un jeune homme pour tentative de meurtre.",
      "La police est également parvenue à déjouer un vol préparé par une bande dans un hôtel meublé, récupérant ainsi de nombreux objets de valeur. Enfin, un individu se faisant passer pour un représentant en soieries a été appréhendé pour une escroquerie audacieuse."
    ]
  },
  {
    "id": 15,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident mortel au boulevard Voltaire",
    "summary": "Un tragique accident de travail s'est produit dans une sucrerie du boulevard Voltaire, coûtant la vie à M. François Debarde, un ouvrier bourrelier âgé de quarante et un ans.",
    "paragraphs": [
      "M. François Debarde, bourrelier, âgé de quarante et un ans, a eu, hier soir, le bras droit arraché par une courroie de transmission dans la sucrerie située au numéro 38 du boulevard Voltaire.",
      "Transféré en urgence, le malheureux a succombé à ses blessures à l'hôpital Saint-Louis."
    ]
  },
  {
    "id": 16,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drame passionnel rue Charonne",
    "summary": "Sortant d'un débit de vins rue de la Roquette, une habitante de la rue Charonne, Mme Rousseau, a poignardé son amant, Constant Couteau, de deux coups de stylet. L'auteur a été arrêté et la victime hospitalisée.",
    "paragraphs": [
      "Sortant d'un débit de vins de la rue de la Roquette, hier soir à sept heures, Mme Rousseau, demeurant au numéro 38 de la rue Charonne, a frappé son amant, Constant Couteau, de deux coups de stylet au ventre.",
      "Mme Rousseau a été mise à la disposition de M. le commissaire de police. Le blessé a été transporté d'urgence à l'hôpital Saint-Antoine."
    ]
  },
  {
    "id": 17,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Boulogne-sur-Seine : Accident mortel d'un scieur de pierre",
    "summary": "Victime d'une congestion due à la chaleur sur un chantier de la rue de l'Ouest, Désiré Déras, scieur de pierre, a fait une chute mortelle de deux mètres, se brisant les reins dans l'accident.",
    "paragraphs": [
      "Un scieur de pierre nommé Désiré Déras, âgé de soixante-quatre ans, demeurant 74 rue Dulong à Paris, qui travaillait dans un chantier au 7 rue de l'Ouest, a été frappé d'une congestion occasionnée par la chaleur et est tombé à la renverse d'une hauteur de deux mètres.",
      "Dans sa chute, le malheureux s'est brisé les reins. C'est dans un état fort inquiétant qu'il a été transporté à l'hôpital."
    ]
  },
  {
    "id": 18,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Puteaux : Explosion dans une usine",
    "summary": "Une explosion de vapeur d'essence dans une usine d'automobiles de Puteaux a grièvement blessé trois ouvriers. L'état de l'un d'entre eux, Joseph Silvanri, inspire les plus vives inquiétudes à ses proches.",
    "paragraphs": [
      "Hier après-midi, vers une heure, des ouvriers étaient occupés à placer des fils près d'une usine d'automobiles lorsqu'un conduit de fonte contenant de l'essence surchauffée a fait explosion.",
      "Trois travailleurs ont été grièvement blessés : Joseph Silvanri, Alexis Curabet et Léonard Furieux.",
      "Sur la demande expresse de sa famille, Silvanri, dont l'état inspire les plus vives inquiétudes, a été transporté à son domicile. Les deux autres blessés ont reçu des soins au poste de secours."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Clichy : Suicide d'un garçon boulanger",
    "summary": "En proie à une fièvre chaude, le nommé Édouard Ronvalet, garçon boulanger, s'est donné la mort en se jetant dans la Seine près du pont d'Asnières. Son corps a été repêché par des mariniers.",
    "paragraphs": [
      "Dans un accès de fièvre chaude, un garçon boulanger, Édouard Ronvalet, âgé de trente-neuf ans, demeurant rue du Bois, s'est échappé hier matin de sa chambre et est allé se précipiter dans la Seine, non loin du pont d'Asnières.",
      "Retiré de l'eau par des mariniers, le malheureux n'a pas tardé à succomber."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Autour de Paris",
    "title": "La Garenne-Colombes : Accident de terrassement",
    "summary": "Deux ouvriers terrassiers ont été ensevelis lors d'un éboulement route de Courbevoie. Henri Caillères a la jambe fracturée, tandis que le pronostic vital de Jacques Roger reste engagé.",
    "paragraphs": [
      "Deux ouvriers terrassiers, Henri Caillères, âgé de vingt-neuf ans, et Jacques Roger, âgé de trente-sept ans, ont été ensevelis, hier matin, en travaillant dans une tranchée route de Courbevoie.",
      "Caillères a pu être retiré avec la jambe gauche fracturée et transporté à l'hôpital Beaujon. Quant à son camarade Roger, son état est désespéré."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Gennevilliers : Accident de bicyclette",
    "summary": "Jules Landry, un jeune employé de commerce de vingt et un ans, a été mortellement blessé hier soir à Gennevilliers lors d'une collision entre sa bicyclette et une voiture de factage.",
    "paragraphs": [
      "Jules Landry, employé de commerce de vingt et un ans, rentrant chez lui en bicyclette, a été renversé hier soir par une voiture de factage. Relevé dans un état désespéré, il a été transporté à l'hôpital Beaujon où il a succombé peu après."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Argenteuil : Scène de violence conjugale",
    "summary": "À la suite d'une dispute, le musicien Grégoire Peretti a violemment précipité son épouse par la fenêtre d'un hôtel meublé à Argenteuil. La victime est grièvement blessée et le coupable a été arrêté.",
    "paragraphs": [
      "À la suite d'une discussion futile, un musicien ambulant, Grégoire Peretti, âgé de vingt-huit ans, a jeté sa femme, Juliette, âgée de vingt-deux ans, par la fenêtre du premier étage d'un hôtel meublé.",
      "La malheureuse, atteinte de contusions multiples et très graves, a été secourue, tandis que Peretti était aussitôt arrêté par les autorités."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Saint-Denis : Suicide d'un ouvrier",
    "summary": "L'ouvrier Pierre Wagner, âgé de trente-trois ans, s'est donné la mort hier matin à Saint-Denis. Atteint de chagrins intimes, il s'est tiré trois coups de revolver et a succombé lors de son transfert.",
    "paragraphs": [
      "Des passants ont découvert inanimé, hier matin, un homme qui s'était infligé deux coups de revolver dans la tempe et un troisième dans la poitrine.",
      "L'infortuné, identifié comme étant l'ouvrier Pierre Wagner, âgé de trente-trois ans, s'est suicidé sous l'empire de profonds chagrins intimes. Il a rendu le dernier soupir alors qu'on le transportait vers son domicile."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Maine-Saint-Denis : Agression au lavoir",
    "summary": "Une querelle de jalousie au lavoir de la rue Voisine a dégénéré hier. Mathilde Hardesse a blessé grièvement Mme Boques à coups de pince. L'agresseuse a été appréhendée par la police.",
    "paragraphs": [
      "Mme Boques, âgée de quarante ans, lavait son linge hier dans un lavoir de la rue Voisine, lorsqu'elle a été assaillie par Mathilde Hardesse, âgée de vingt-quatre ans. Sous le coup d'une violente jalousie, cette dernière lui a porté deux coups de pince à la tête.",
      "La victime, grièvement blessée, a été secourue, et l'agresseuse a été immédiatement appréhendée par le commissaire de police."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Aubervilliers : Un fou interpellé",
    "summary": "Un journalier nommé Dumus Deusol a été interpellé à Aubervilliers après avoir semé le trouble dans un établissement. En proie à un délire, il s'est grièvement blessé avant d'être conduit au dépôt.",
    "paragraphs": [
      "Un journalier, nommé Dumus Deusol, vingt-six ans, a pénétré hier après-midi dans un établissement de la rue de la Haie-Coq, poussant des cris de détresse et prétendant avec égarement qu'on venait de lui dérober 6 000 francs.",
      "Avant qu'une intervention ne puisse être tentée, l'individu, en proie à une crise de folie, s'est jeté contre un mur, se blessant sérieusement au crâne. Le commissaire de police a fait conduire le malheureux à l'infirmerie spéciale du dépôt."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Pantin : Suicide au cimetière",
    "summary": "Au cimetière de Pantin, une jeune femme de vingt et un ans, Mlle Fabon, a été découverte agonisante devant le caveau de sa famille après s'être tiré un coup de revolver dans la tempe. Son état est jugé désespéré.",
    "paragraphs": [
      "Une jeune fille de vingt et un ans, Mlle Fabon, a été retrouvée étendue devant le caveau de sa famille au cimetière de Pantin, s'étant tiré un coup de revolver dans la tempe. Son état est des plus désespérés."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Maisons-Alfort : Décès suite à un accident",
    "summary": "Le bilan des accidents de la circulation s'alourdit à Maisons-Alfort : M. Alexandre Joachim a succombé à ses blessures, tandis qu'un second habitant, M. Charles Lebrun, a été hospitalisé dans un état critique.",
    "paragraphs": [
      "M. Alexandre Joachim, qui avait été renversé rue du Pont-d'Ivry par un tramway, est décédé à l'hôpital cantonal des suites de ses blessures.",
      "Dans la même journée, au même endroit, M. Charles Lebrun a été renversé par un tramway et transporté dans un état désespéré vers l'établissement hospitalier."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "Charenton : Tentative d'assassinat",
    "summary": "L'état de M. Lombard demeure fort préoccupant après sa tentative d'assassinat. Les autorités policières ont procédé à l'interpellation de trois individus suspects rôdant dans les environs.",
    "paragraphs": [
      "L'état de M. Lombard ne s'est point amélioré suite à la tentative d'assassinat dont il fut victime. La police a procédé à l'arrestation de trois rôdeurs suspects qui circulaient dans le secteur."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Ivry : Drame conjugal",
    "summary": "À la suite d'une dispute domestique concernant le repas, Barthélémy Compt, maréchal-ferrant, a fait feu sur son épouse. La malheureuse a été transportée à l'hôpital ; le mari a été arrêté.",
    "paragraphs": [
      "Barthélémy Compt, maréchal-ferrant, a tiré un coup de revolver dans la tête de sa femme à la suite d'une altercation concernant le dîner.",
      "La victime a été conduite à l'hôpital dans un état grave. Le mari a été immédiatement appréhendé par les forces de l'ordre."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits Divers",
    "title": "Palaiseau : Agression dans un débit de vins",
    "summary": "Un terrassier récidiviste, Elie Daniel, a violemment agressé la gérante d'un débit de vins à Palaiseau après un refus de service. Le malfaiteur a été écroué à la prison de Versailles.",
    "paragraphs": [
      "Un terrassier ivre, Elie Daniel, a brisé un verre sur la tête de Mme veuve Josset, gérante d'un débit de vins, après que celle-ci eut refusé de le servir. Le suspect, un récidiviste, a été écroué à la prison de Versailles."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Faits Divers",
    "title": "Conflans : Arrestation d'un employé infidèle",
    "summary": "À Conflans, Jacques Daâies, dix-huit ans, a été arrêté après s'être constitué prisonnier pour avoir détourné une somme importante appartenant à son patron.",
    "paragraphs": [
      "Jacques Daâies, âgé de dix-huit ans, s'est présenté spontanément aux autorités pour se constituer prisonnier, après avoir dissipé une importante somme d'argent qui lui avait été confiée, en toute confiance, par son patron."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Faits Divers",
    "title": "Meaux : Mutilation volontaire d'un hussard",
    "summary": "Le jeune engagé volontaire René Agoustenc s'est infligé une grave blessure à la main gauche avec de la dynamite pour obtenir sa réforme. Il devra répondre de cet acte devant le conseil du corps.",
    "paragraphs": [
      "Le nommé René Agoustenc, jeune engagé volontaire, s'est infligé une mutilation atroce à la main gauche au moyen de dynamite, dans l'espoir manifeste d'obtenir sa réforme. Cet acte de désespoir ou de fraude sera prochainement déféré devant le conseil du corps."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Sport",
    "title": "Résultats des courses à Maisons-Laffitte",
    "summary": "La réunion hippique de Maisons-Laffitte a consacré la supériorité de l'écurie Juigné-d'Arenberg, avec les victoires remarquées de Le Béarnais II et de Dame de Cœur.",
    "paragraphs": [
      "La réunion hippique qui s'est tenue à Maisons-Laffitte a été marquée par la nette supériorité de l'écurie Juigné-d'Arenberg, dont les représentants, Le Béarnais II et Dame de Cœur, ont remporté des victoires éclatantes qui ont soulevé l'enthousiasme du public."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Sport",
    "title": "Accident aux courses de Wynghène",
    "summary": "Un tragique accident s'est produit lors d'une épreuve hippique près de Tielt : le jockey Oscar Dewitte a trouvé la mort après avoir été violemment projeté contre un mur.",
    "paragraphs": [
      "Un tragique accident est survenu lors d'une épreuve hippique organisée aux environs de Tielt. Le jockey Oscar Dewitte a trouvé la mort au cours de la compétition, ayant été violemment projeté contre un mur par sa monture dans un virage périlleux."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Social",
    "title": "Manifestation syndicale : Délégation à Londres",
    "summary": "Une délégation commune des Trade-Unions britanniques et des représentants ouvriers français prépare un grand meeting pour la paix à Londres, incluant un banquet fraternel.",
    "paragraphs": [
      "Une délégation commune, composée de représentants des Trade-Unions britanniques et de délégués ouvriers français, s'active actuellement à l'organisation d'un grand meeting en faveur de la paix à Londres.",
      "Cette manifestation sera solennellement conclue par un banquet fraternel, destiné à resserrer les liens d'amitié entre les travailleurs des deux nations."
    ]
  },
  {
    "id": 36,
    "page": 3,
    "category": "Départements",
    "title": "Compiègne : Suicide d'un jeune soldat",
    "summary": "Le jeune Henri Palanque, soldat de dix-huit ans, s'est donné la mort à la caserne de Compiègne en se précipitant par une fenêtre, craignant d'être accusé à tort d'un vol.",
    "paragraphs": [
      "Le nommé Henri Palanque, jeune soldat de dix-huit ans, s'est défenestré cet après-midi des étages de la caserne de Compiègne. L'infortuné, redoutant d'être accusé d'un vol dont il se disait innocent, a succombé à ses blessures peu après sa chute."
    ]
  },
  {
    "id": 37,
    "page": 3,
    "category": "Départements",
    "title": "Guise : Incendie agricole",
    "summary": "Un incendie dévastateur a ravagé une exploitation agricole près de Guise. La grange de M. Vieville et deux batteuses mobiles ont été entièrement détruites par les flammes.",
    "paragraphs": [
      "Un incendie dévastateur a éclaté dans une exploitation agricole aux environs de Guise. Le sinistre a entièrement détruit une grange remplie de récoltes appartenant à M. Vieville, ainsi que deux batteuses mobiles qui se trouvaient sur les lieux. Les pertes subies par le propriétaire sont considérables."
    ]
  },
  {
    "id": 38,
    "page": 3,
    "category": "Départements",
    "title": "Auxerre : Drame de la rivière et suicide",
    "summary": "L'actualité auxerroise est assombrie par le décès de la jeune Aline Petit, noyée dans l'Yonne, et le suicide par arme à feu du garde champêtre de Sormery, M. Gauvin.",
    "paragraphs": [
      "Une jeune fille de dix-huit ans, prénommée Aline Petit, a été découverte noyée dans les eaux de l'Yonne. Les circonstances de ce tragique accident sont actuellement en cours d'enquête par les autorités.",
      "Par ailleurs, à Sormery, M. Gauvin, garde champêtre de son état, a mis fin à ses jours en se tirant un coup de fusil. Son corps sans vie a été découvert au cours de la journée."
    ]
  },
  {
    "id": 39,
    "page": 3,
    "category": "Départements",
    "title": "Nevers : Accident aux usines de la Pique",
    "summary": "Un grave accident du travail s'est produit aux usines de la Pique, à Nevers. L'ouvrier Naissant a été grièvement brûlé par de la fonte en fusion lors de la manipulation d'un creuset.",
    "paragraphs": [
      "Un accident tragique est survenu aux usines de la Pique, à Nevers. Un ouvrier nommé Naissant a été grièvement brûlé lors du renversement accidentel d'un creuset contenant de la fonte en fusion. La malheureuse victime a été transportée en urgence pour recevoir des soins."
    ]
  },
  {
    "id": 40,
    "page": 3,
    "category": "Départements",
    "title": "Orléans : Noyades accidentelles",
    "summary": "La région d'Orléans est en deuil après deux noyades mortelles : celle d'un vieillard nommé Hérou et celle du jeune maçon Marius Vanneau, âgé de dix-neuf ans, lors d'une baignade.",
    "paragraphs": [
      "Un vieillard nommé Hérou a été retrouvé noyé dans les eaux de la localité. Une enquête judiciaire a été ouverte afin de déterminer les circonstances exactes de ce décès.",
      "Dans un autre incident, Marius Vanneau, un jeune maçon de dix-neuf ans, a trouvé la mort par noyade alors qu'il s'était rendu à la baignade."
    ]
  },
  {
    "id": 41,
    "page": 4,
    "category": "Météorologie",
    "title": "La Température",
    "summary": "Le temps demeure globalement beau en France. Si le nord profite d'un climat chaud et ensoleillé, des orages localisés persistent sur la moitié sud, malgré des températures en légère baisse sur l'ensemble du territoire.",
    "paragraphs": [
      "Le beau temps continue à Paris. Nous avons encore eu, hier, une superbe journée.",
      "Une aire de forte pression s'étend de l'ouest au nord-est de l'Europe ; le baromètre atteint 770 mm sur les îles Britanniques et la mer du Nord. La pression est un peu plus basse dans le sud-est de l'Europe (756 mm) ainsi qu'en Algérie.",
      "Le vent est modéré d'entre nord et est sur nos côtes de la Manche et de l'Océan, faible de l'est en Provence. Des pluies sont tombées dans le sud-est du continent; en France, on signale des orages dans la moitié sud. On a recueilli 5 mm d'eau à Rochefort et 7 mm à Limoges.",
      "La température a baissé sur nos régions ; elle était, hier, de 9° à Bodø, 17° à Moscou, 24° à Malte et au Mont-Ventoux, 13° à l'Aigoual, 12° au Puy-de-Dôme, 6° au Pic-du-Midi.",
      "En France, le temps va rester beau et chaud dans le nord ; des orages sont probables dans le sud.",
      "Situation particulière aux ports français : la mer est généralement belle."
    ]
  },
  {
    "id": 42,
    "page": 4,
    "category": "Économie",
    "title": "Canal de Suez - Assemblée du 4 juin",
    "summary": "Le Conseil d'administration du Canal de Suez confirme la prospérité de la compagnie. Un emprunt de 25 millions a été voté pour financer l'élargissement du canal afin d'augmenter le tirant d'eau autorisé aux grands navires.",
    "paragraphs": [
      "Extrait du rapport du Conseil d'administration : l'année 1900 maintient, avec un faible écart, les résultats obtenus en 1899, qui marquaient le point culminant de la prospérité de la Compagnie. Ces résultats permettent de proposer la distribution du même revenu, soit 108 francs nets pour chaque action de capital.",
      "Grâce aux travaux d'amélioration accomplis, le canal se trouve aujourd'hui dans un état beaucoup plus satisfaisant, et les résultats permettent d'entrevoir la possibilité prochaine de porter de 7,80 m à 8 mètres le maximum de tirant d'eau imposé aux navires.",
      "Le Conseil a demandé à l'Assemblée l'autorisation de contracter un emprunt, dont le montant serait fixé à 25 millions, afin de poursuivre les travaux d'élargissement nécessaires à l'utilisation du canal par les navires de grandes dimensions.",
      "Pour une période un peu inférieure à cinq mois, les recettes de l'exercice en cours ont donné une plus-value de 4 millions et demi. L'assemblée a approuvé, à l'unanimité, toutes les résolutions présentées par le Conseil d'administration."
    ]
  },
  {
    "id": 43,
    "page": 4,
    "category": "Agriculture et Commerce",
    "title": "Vins et Eaux-de-Vie",
    "summary": "Malgré des disparités locales, les perspectives viticoles restent encourageantes. Le marché parisien, quant à lui, subit une baisse des cours favorisée par une offre abondante de vins.",
    "paragraphs": [
      "Dans le Gard, les vignes ont belle apparence et il y a assez de fruit pour assurer une bonne récolte. Dans l'Hérault, la vigne est moins chargée que l'année dernière ; néanmoins, on est satisfait.",
      "Dans le Bordelais, la vigne est en fleur, les mannes sont belles et vigoureuses. Si rien ne vient contrarier la végétation, il y aura du fruit pour une belle récolte.",
      "Dans le Poitou, la végétation est rapide et la récolte sera abondante si ne survient pas de contretemps. Dans le Nantais, les perspectives de la future récolte laissent à désirer.",
      "Les bonnes nouvelles des vignobles ont une influence sur notre marché parisien ; on offre des vins de tous côtés et à des prix très bas.",
      "Rien de nouveau à signaler dans les Charentes pour les eaux-de-vie. En Armagnac, les prix sont tenus fermes."
    ]
  },
  {
    "id": 44,
    "page": 4,
    "category": "Vie culturelle",
    "title": "Concerts et Orphéons",
    "summary": "Le samedi 8 juin, l'Harmonie du Bon-Marché donnera un concert au Square du Bon-Marché, sous la direction de M. G. Wettge, avec un répertoire incluant Delibes et Wagner.",
    "paragraphs": [
      "Le samedi 8 juin, à 5 heures, au Square du Bon-Marché : concert de l'Harmonie du Bon-Marché. Direction : M. G. Wettge. Programme : Jupiter (Gurtner), Ouverture de Silvio Pellico (G. Wettge), Ballet de Coppélia (Léo Delibes), Menuet de Colombine (Delahaye), Sélection sur le Tannhœuser (Wagner), Santiago (Corbin), Finale."
    ]
  },
  {
    "id": 45,
    "page": 4,
    "category": "Navigation",
    "title": "Navigation fluviale",
    "summary": "État des voies navigables au 7 juin : relevés des niveaux d'eau sur la Haute-Seine, la Marne, la Basse-Seine et l'Oise pour le suivi du trafic fluvial.",
    "paragraphs": [
      "Au 7 juin, 7 heures du matin : Haute-Seine (pont de Seine à Montereau : 2 m 20), Marne (écluse de Cumières), Basse-Seine (écluse du canal Saint-Martin : 2 m 52), Oise (Barrage de Vinette)."
    ]
  }
];
