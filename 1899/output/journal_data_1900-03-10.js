// Date: 1900-03-10
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-03-10 (Version Restaurée, 20 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Science",
    "title": "Le fond des mers",
    "summary": "Une étude historique sur l'évolution des techniques de sondage océanique, des méthodes artisanales aux avancées scientifiques de la fin du XIXe siècle pour cartographier le relief sous-marin.",
    "paragraphs": [
      "La mer a toujours exercé sur l'homme un mystérieux et effrayant prestige. Toutes les époques furent envahies d'une immense curiosité de savoir ce qui se passe au fond des magnifiques et cruels abîmes de l'océan.",
      "L'histoire de la conquête progressive du fond des mers, de la pénétration de l'investigation scientifique dans des milieux d'où elle semblait à jamais exilée, présente un vif intérêt et témoigne éloquemment de ce que l'homme est capable d'accomplir contre les éléments.",
      "Il semble simple de déterminer la profondeur d'une étendue d'eau : il suffirait de fixer une masse pesante à une corde et de la dévider jusqu'au fond. Or, cette opération s'avère impraticable dès que la profondeur devient trop importante.",
      "La sonde s'arrête en effet à mi-chemin, par la simple résistance occasionnée par le frottement de l'eau sur la corde qui la soutient.",
      "Dès le XVIe siècle, on tenta de créer une sonde sans fil avec une bouée légère qui se détacherait au contact du fond. Cependant, sous l'effet de l'énorme pression, la bouée acquérait la densité de la pierre et ne pouvait revenir à la surface.",
      "C'est Aimé, un savant français disparu en 1846, qui rendit la géographie sous-marine réalisable en imaginant une ligne très mince en soie et un appareil enregistreur signalant le moment précis où la sonde atteint le fond.",
      "Les États-Unis ont largement contribué à cette œuvre immense grâce à des navires tels que le Dolphin, l'Arctic ou le Gettysburg.",
      "Grâce à cet outillage, on divise le fond de la mer en aires isobathes pour dresser des cartes du relief sous-marin. Il serait souhaitable d'entreprendre une carte d'ensemble du lit océanique sur le globe entier."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Roman-Feuilleton",
    "title": "Mariage Secret - Deuxième Partie",
    "summary": "Face aux reproches de son père concernant ses fréquentations, Henri de Lorgerac apprend avec stupeur la ruine financière de sa famille, ruinant ses espérances de mariage.",
    "paragraphs": [
      "Terrible réveil, et quelle honte ! Il cherchait aux yeux de son père la réponse que celui-ci ne pouvait formuler. François de Lorgerac était livide. Il s'attendait depuis longtemps à ce coup terrible.",
      "Tout était remis en question, et celui contre lequel il fallait lutter n'était autre que son propre fils.",
      "Le baron de Lorgerac, d'une voix sèche et dure, reprochait à son fils de s'enticher d'une femme qu'il qualifiait d'intrigante, une personne ayant tenté de les faire chanter dix-sept ans plus tôt.",
      "Henri, perdant tout sang-froid, défendit Rolande d'Aspremont, affirmant qu'elle était sa proche parente et qu'il l'aimait.",
      "Acculé, le baron finit par avouer la vérité à son fils : il n'est pas riche, il se débat depuis vingt ans dans un gouffre financier et son crédit reposait entièrement sur l'héritage escompté de son cousin."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Nouvelles Coloniales",
    "title": "L'occupation d'In-Salah",
    "summary": "Le gouvernement français confirme les mesures militaires pour consolider l'occupation d'In-Salah, en précisant que les opérations ne toucheront pas à la région du Tafilet.",
    "paragraphs": [
      "On télégraphie d'Alger : d'après les journaux, le gouvernement vient d'arrêter, sur la proposition du gouverneur général et du général commandant le 19e corps, des décisions dont l'exécution est confiée aux colonnes d'El-Goléa et du Sud-Oranais.",
      "Il n'est pas question d'inclure dans l'itinéraire de ces colonnes la région du Tafilet, qui reste géographiquement et politiquement en dehors de la zone d'opération, mais seulement de donner à l'occupation d'In-Salah les suites immédiates qu'elle comporte."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Social",
    "title": "Les militaires rapatriés des colonies",
    "summary": "Une nouvelle circulaire ministérielle garantit désormais le maintien de la solde pour les militaires rapatriés des colonies durant leur congé de convalescence.",
    "paragraphs": [
      "Le ministre des Colonies, de concert avec le ministre de la Guerre, a cherché les moyens de mettre fin à la situation pénible des militaires rapatriés des colonies qui, durant leur congé de convalescence, se retrouvaient licenciés sans solde.",
      "À l'avenir, par application d'une nouvelle circulaire, les gradés et hommes de troupe libérables au cours d'un congé de convalescence pour fin de séjour colonial seront, sur demande, maintenus sous les drapeaux jusqu'à l'expiration dudit congé."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "L'accident du puits Larbousset",
    "summary": "Une catastrophe minière à Bessèges cause la mort de seize ouvriers par asphyxie. Le gouvernement apporte un secours financier immédiat aux familles des victimes.",
    "paragraphs": [
      "Bessèges, 9 mars. Le puits Larbousset, dépendant de la concession des mines de Trélys, a été le théâtre d'une catastrophe hier vers dix heures du matin, causée par un dégagement d'acide carbonique au troisième niveau.",
      "Seize corps ont été remontés, prouvant que les malheureux mineurs ont été asphyxiés presque instantanément. Parmi les victimes figurent Claude Faurel, Marius Scapin, Jules Saury et plusieurs autres pères de famille.",
      "Le préfet du Gard et les autorités locales sont sur les lieux. Le président du Conseil a fait parvenir une somme de 1.000 francs aux familles des victimes."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Culture",
    "title": "Incendie de la Comédie-Française",
    "summary": "La destruction de la Comédie-Française et la mort tragique de Jane Henriot attristent Paris. M. Jules Claretie, tout en organisant les secours, écarte l'hypothèse d'une négligence et incrimine l'électricité.",
    "paragraphs": [
      "La disparition de notre grande scène littéraire a causé une véritable stupeur. La mort de l'infortunée Jane Henriot a douloureusement ému la population parisienne.",
      "Le service d'ordre, placé sous la direction de M. Orsatti, a supervisé le sauvetage des objets précieux. Le coffre-fort de M. Claretie a été mis en sécurité tandis que des œuvres, dont la statue de George Sand par Clésinger, ont été déplacées avec précaution.",
      "M. Jules Claretie, administrateur général, a déclaré que la fatalité est seule en cause, réfutant les accusations sur une mauvaise surveillance et pointant du doigt l'électricité ainsi que les rideaux de scène qui ont agi comme une cheminée d'appel pour le feu."
    ]
  },
  {
    "id": 7,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drame de la rue du Château-d'Eau",
    "summary": "Drame passionnel rue du Château-d'Eau : M. Froissant blesse son épouse par balle, tente de s'égorger, puis se jette du sixième étage. Il a succombé à ses blessures à l'hôpital Saint-Louis.",
    "paragraphs": [
      "Avant-hier soir, vers onze heures, Mme Froissant a été victime d'une agression brutale de la part de son mari, qui a fait usage d'un revolver. La malheureuse, blessée au sein droit, a réussi à prendre la fuite en appelant au secours.",
      "Alors qu'elle descendait l'escalier, elle entendit une seconde détonation. Son mari venait de se tirer une balle dans la tempe. N'étant que légèrement blessé par ce tir, M. Froissant a tenté de se couper la gorge avant de se précipiter par la fenêtre du sixième étage. Transporté à l'hôpital Saint-Louis, il y est décédé peu après. Le commissaire de police du quartier s'est rendu sur place pour recueillir la déposition de Mme Froissant."
    ]
  },
  {
    "id": 8,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un Enfant sauveteur",
    "summary": "Au port Saint-Bernard, le jeune Ernest Renard, âgé de douze ans, a fait preuve d'un courage exemplaire en plongeant à trois reprises pour sauver un camarade de la noyade après le chavirage d'un bachot.",
    "paragraphs": [
      "Un magnifique exemple de courage a été donné par un enfant de douze ans, nommé Ernest Renard, au port Saint-Bernard. Alors que plusieurs enfants jouaient dans un bachot, celui-ci a chaviré, entraînant les occupants dans l'eau. L'un d'eux, âgé de dix ans, fut emporté par le courant et, privé de forces, luttait désespérément contre la noyade.",
      "Le jeune Ernest Renard, témoin de la scène, n'hésita pas une seconde et plongea à trois reprises pour porter secours à son camarade. Grâce à sa ténacité, il parvint à ramener le malheureux sain et sauf sur la rive. M. Michaux, commissaire de police, a décidé de signaler ce fait héroïque aux autorités afin qu'une récompense soit décernée au jeune sauveteur."
    ]
  },
  {
    "id": 9,
    "page": 3,
    "category": "Faits Divers",
    "title": "Agression d'un ouvrier serrurier",
    "summary": "M. José Olivier, ouvrier serrurier de trente-sept ans, a été sauvagement agressé et dévalisé par des malfaiteurs rue Saint-Maur. Blessé à la tête, il a pu fournir un signalement précis à la police.",
    "paragraphs": [
      "Un ouvrier serrurier, M. José Olivier, âgé de trente-sept ans, a été agressé par des rôdeurs alors qu'il rentrait chez lui, rue Saint-Maur. L'un de ses agresseurs lui a porté un violent coup de couteau derrière la tête avant de le dévaliser.",
      "Le blessé a été promptement secouru par deux gardiens de la paix qui l'ont fait transporter dans une pharmacie voisine. Il a été en mesure de fournir un signalement précis de son agresseur aux autorités compétentes."
    ]
  },
  {
    "id": 10,
    "page": 3,
    "category": "Faits Divers",
    "title": "Fugue d'un jeune aventurier",
    "summary": "Un garçon de onze ans, fils d'un négociant troyen, a tenté une fugue pour Paris après avoir dérobé les économies paternelles. Il fut intercepté à la gare alors qu'il rêvait de partir pour l'Afrique.",
    "paragraphs": [
      "Un négociant de Troyes a été le témoin d'une aventure singulière. Son fils, le jeune Gustave, âgé de onze ans seulement, a tenté une fugue retentissante avec pour objectif de visiter l'Exposition à Paris. Après avoir dérobé une somme importante au domicile familial, le garçon a été intercepté à la gare par un voyageur alors qu'il s'apprêtait, dans un élan d'imagination débordante, à prendre un train pour l'Afrique.",
      "Aussitôt averti par dépêche télégraphique, le père est arrivé en toute hâte sur les lieux. Après une entrevue empreinte de fermeté paternelle, le jeune aventurier a fini par consentir à abandonner ses projets d'évasion lointaine pour regagner le domicile familial en compagnie de son père."
    ]
  },
  {
    "id": 11,
    "page": 3,
    "category": "Faits Divers",
    "title": "Vol à la gare de Lyon",
    "summary": "M. Jozef Van den Heigth, voyageur, a été dévalisé de trente mille francs au bureau de l'octroi de la gare de Lyon. Une enquête est ouverte par le commissaire de police Sébastian.",
    "paragraphs": [
      "M. Jozef Van den Heigth, voyageur, s'est fait dérober son portefeuille contenant une trentaine de mille francs alors qu'il se trouvait au bureau de l'octroi de la gare de Lyon. Une enquête est actuellement en cours sous la direction de M. Sébastian, commissaire de police."
    ]
  },
  {
    "id": 12,
    "page": 3,
    "category": "Faits Divers",
    "title": "Suicides à Paris",
    "summary": "Deux tragiques tentatives de suicide par défenestration ont eu lieu à Paris cette semaine. Pierre Chassard et Paul Haury ont été transportés à l'hôpital dans un état désespéré.",
    "paragraphs": [
      "Pierre Chassard, ouvrier mécanicien demeurant rue de la Chapelle, s'est jeté par la fenêtre de son logement situé au troisième étage. Il a été transporté à l'hôpital Lariboisière dans un état grave.",
      "Paul Haury, employé de commerce âgé de dix-neuf ans, après avoir dérobé des fonds à son patron, s'est précipité par la fenêtre d'un deuxième étage. Il a été transporté mourant à l'hôpital Tenon."
    ]
  },
  {
    "id": 13,
    "page": 3,
    "category": "Départements",
    "title": "Suicide d'un cavalier près de Beauvais",
    "summary": "Le corps d'un cavalier du 5e dragons, le nommé Martin, âgé de vingt et un ans, a été retrouvé pendu dans le bois des Merchies, probablement par peur d'une sanction disciplinaire.",
    "paragraphs": [
      "Le cadavre d'un cavalier du 5e dragons, nommé Martin, âgé de vingt et un ans, a été découvert pendu à un arbre dans le bois des Merchies, près de Beauvais. Le défunt était porteur d'une permission expirée et l'on attribue son geste désespéré à la crainte d'une punition pour son retard."
    ]
  },
  {
    "id": 14,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Faits divers dans les communes",
    "summary": "La chronique judiciaire de la banlieue parisienne relate divers accidents et décès tragiques survenus à Levallois-Perret, Asnières, Colombes, Chatou, Aubervilliers et Champigny.",
    "paragraphs": [
      "Levallois-Perret : Louis Despré, dit « le Bandit », a été arrêté au cours d'un bal public.",
      "Asnières : M. Cyprien Tinet est décédé après avoir été renversé par une voiture place Voltaire.",
      "Colombes : M. Eugène Pardin a succombé à une asphyxie causée par le charbon.",
      "Chatou : Le corps de la dame Poirier, fleuriste à Levallois, a été retiré de la Seine par un blanchisseur.",
      "Aubervilliers : Adolphe Boulât a été grièvement blessé par un marteau-pilon, tandis qu'Émile Jacquard, ouvrier tréfileur, a été horriblement mutilé par une machine.",
      "Champigny : Le cadavre d'un homme inconnu a été retiré des eaux de la Marne."
    ]
  },
  {
    "id": 15,
    "page": 3,
    "category": "Chronique littéraire",
    "title": "Critiques et publications",
    "summary": "Tour d'horizon des récentes publications littéraires et scientifiques, incluant les ouvrages de MM. Ernest Daudet, Max de Nansouty, F. de Norvins et Julien Leclercq.",
    "paragraphs": [
      "M. Ernest Daudet publie un nouveau roman intitulé « La Princesse de Ligne ».",
      "Max de Nansouty fait paraître un ouvrage consacré aux progrès de la science et de l'industrie pour l'Exposition.",
      "M. F. de Norvins a publié « Les Milliardaires américains », révélant les coulisses de la haute société des États-Unis.",
      "Julien Leclercq publie « Le Caractère et la main », une étude approfondie sur la chiromancie."
    ]
  },
  {
    "id": 16,
    "page": 3,
    "category": "Bourse",
    "title": "Bulletin financier du 9 mars",
    "summary": "Le marché boursier du 9 mars est marqué par une tendance calme. Les valeurs espagnoles progressent, les rentes restent stables, et les titres Rio Tinto affichent une légère hausse dans un climat financier sans surprise.",
    "paragraphs": [
      "La Bourse du 9 mars montre des cours généralement bien tenus. Si les affaires ne sont pas très animées, les valeurs espagnoles progressent tandis que les rentes se maintiennent. Le Rio Tinto est en hausse et les mines restent à leur niveau."
    ]
  },
  {
    "id": 17,
    "page": 4,
    "category": "Feuilleton",
    "title": "DEUX PASSIONS - UN DRAME DU MARIAGE",
    "summary": "Face à face tendu entre Dufresne et Tavernier. Entre accusations de trahison amoureuse et griefs sur le passé, les deux hommes règlent leurs comptes autour de Suzanne et de souvenirs douloureux.",
    "paragraphs": [
      "« En mission ? » Tiens, fit le Parisien en le regardant, « tu as ta figure des mauvais jours. » Tavernier tira son carnet de sa poche et, en montrant le portrait de son ami, lui dit : « Regarde-toi, tu es en vérité presque aussi sinistre que ton logis. »",
      "Dufresne éclata de rire. Tavernier demanda : « Où as-tu pris tes raisons de mécontentement ? » « Je vais te le dire. » « Quand es-tu arrivé ? » « Ce matin, vers midi. » « Pourquoi si tôt ? » « Parce que j'avais hâte de savoir ce qui se passait ici. » « D'où viens-tu ? Qui as-tu vu ? » « Le docteur Bernay. »",
      "Paul Tavernier remit sa bicyclette où il l'avait prise. Ils s'éloignèrent des ruines et prirent le sentier du sommet de la falaise. Dufresne s'arrêta : « Tu es allé ailleurs qu'à Augeville. » « Parfaitement. À Orvilliers d'abord. Je comptais y trouver le docteur Bernay. » « Ne pensais-tu pas plutôt que Suzanne y serait seule ? » « C'est ce qui est arrivé et je n'en ai pas été fâché. »",
      "« Tu l'as vue ? » « Oui. » « Et tu lui as parlé ? » « C'est exact. » « Longuement ? » « Sous la charmille. » Paul Tavernier répondit tranquillement : « Sous la charmille, en effet. J'y étais aussi, à deux pas de vous. »",
      "Dufresne continua son récit : « Je les ai reconnues sans peine. C'était celle de Suzanne. Et la mienne ? Parfaitement. J'ai appris, en vous écoutant, que non seulement tu manifestais les plus vives sympathies pour elle, mais que tu l'honorais d'une cour assidue. »",
      "Dufresne s'emporta : « Le monde n'est donc plein que de perfidies et de trahisons ? » Tavernier répondit : « Sois calme ! Tu sais très bien que je n'ai aucune intention de parler d'amour à Suzanne. D'abord le moment serait mal choisi, ensuite elle ne m'écouterait pas. »",
      "Tavernier expliqua : « Après avoir eu quelques préventions contre elle, j'ai trouvé cette femme charmante, digne de tous les respects. Le malheur de Suzanne m'a donné d'autres sentiments. Je n'éprouve pour elle aujourd'hui qu'une loyale et profonde amitié et aussi une grande compassion de la savoir entre des mains si indignes. »",
      "« Et auprès ? » dit Tavernier en le bravant, « quand je t'aurais pris ta femme, pourquoi t'en plaindrais-tu ? Tu m'as bien volé ma maîtresse, Marcelle Bréval. Une malheureuse enfant de seize ans que j'avais rencontrée sur le pavé de Paris. Je m'y étais attaché. Un jour, en rentrant chez elle, je me heurtai à un inconnu qui me parut sortir de sa chambre. Je n'eus qu'un doute. Tout était en désordre. Je sortis pour ne plus la revoir. »",
      "« Quelques mois plus tard, elle mourut à l'hôpital. » « C'est du passé, » dit Tavernier. « Pour moi, l'outrage est d'hier. »"
    ]
  },
  {
    "id": 18,
    "page": 4,
    "category": "Chronique Agricole",
    "title": "Actualités du secteur agricole",
    "summary": "Compte-rendu des activités agricoles incluant les projets d'expositions internationales, les prévisions météorologiques et des notes techniques sur la viticulture et l'horticulture ornementale.",
    "paragraphs": [
      "Agriculture. Henry Marchand : Les Expositions internationales d'agriculture. Échos agricoles : Albert Berthot : Prévisions du temps.",
      "Viticulture. G. Battanchon : Questions viticoles. P. : Revue vinicole.",
      "Horticulture. A. Magnien : Culture forcée de la carotte. J. de Loverdo : Le Jardin colonial. S. Mottet : Ornementation des corbeilles et des plates-bandes."
    ]
  },
  {
    "id": 19,
    "page": 4,
    "category": "Bulletin Commercial",
    "title": "Cours des halles et marchés",
    "summary": "Stabilité sur le marché des grains au 9 mars. Dans le secteur du vin, les prix restent fermes pour les crus de qualité, tandis que les transactions sur les vins vieux et le Bordelais demeurent actives.",
    "paragraphs": [
      "Le marché du vendredi 9 mars affiche une stabilité relative dans les cours des grains. Les vins dans le Gard, les bons vins de bonne tenue, sont fermes de 1,90 à 2 fr. le degré.",
      "Dans le Bordelais, les prix sont plus particuliers. Dans la Dordogne, un cru de Bergerac a été vendu 250 fr. le tonneau nu. En Bourgogne, les soutirages sont en grande partie effectués. Les vins vieux sont recherchés."
    ]
  },
  {
    "id": 20,
    "page": 4,
    "category": "Spectacles",
    "title": "Programme des théâtres pour le 10 mars",
    "summary": "Retrouvez le programme complet des représentations lyriques et théâtrales parisiennes pour la soirée du 10 mars, incluant les affiches de l'Opéra, de l'Opéra-Comique et des théâtres de boulevard.",
    "paragraphs": [
      "Opéra : Roméo et Juliette. Opéra-Comique : Carmen. Odéon : Fourchambault. Gymnase : Un Complot. Variétés : La Belle Hélène. Ambigu : Relâche. Opéra Populaire : Le Toréador. Bouffes-Parisiens : La Belle au Bois dormant."
    ]
  }
];
