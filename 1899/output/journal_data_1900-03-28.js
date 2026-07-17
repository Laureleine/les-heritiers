// Date: 1900-03-28
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-03-28 (Version Restaurée, 43 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Feuilleton",
    "title": "L'Honneur du Fiancé",
    "summary": "Le Petit Parisien annonce la publication prochaine de \"L'Honneur du Fiancé\", un roman inédit signé Paul d'Aigremont, promettant une fresque dramatique où les passions humaines les plus violentes se livrent bataille.",
    "paragraphs": [
      "Le Petit Parisien publiera un grand roman inédit, \"L'Honneur du Fiancé\", par Paul d'Aigremont. Ce roman, tout de passion et d'amour, a été spécialement écrit pour nos lecteurs par le grand romancier populaire, Paul d'Aigremont.",
      "C'est une dramatique et émouvante histoire dans laquelle les passions humaines les plus violentes et les sentiments les plus élevés se disputent tour à tour l'attention.",
      "L'intérêt poignant qui commence à la première ligne va sans cesse en grandissant jusqu'à la dernière, et passionnera certainement tous nos lecteurs."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Faits Divers",
    "title": "Les poisons de l'intelligence",
    "summary": "À la suite d'une opération policière dans le quartier de l'Arc-de-Triomphe, l'article souligne les dangers mortels de l'opium et du haschich, véritables fléaux menant à l'atrophie de la volonté et à la folie.",
    "paragraphs": [
      "On a fait quelque bruit, ces jours derniers, autour d'une petite opération de police pratiquée dans le quartier de l'Arc-de-Triomphe, chez une certaine dame Assim, française de naissance et devenue chinoise en 1881. Mme Assim débitait sous le manteau de l'opium et du haschich dans une fumerie clandestine.",
      "La sanction peut paraître dure, elle est justifiée. Le haschich et l'opium sont de véritables poisons. Si leur absorption exalte pour un moment les facultés imaginatives, ce mince résultat est amplement racheté par la prostration qui suit le réveil, par la lente atrophie de la volonté, par l'amaigrissement du corps, par une mélancolie lente qui achemine vers la folie ou le suicide.",
      "On conçoit, après ce rapide exposé, que la plupart des gouvernements européens aient cru devoir prendre des mesures rigoureuses contre la vente de l'opium et du haschich."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Feuilleton",
    "title": "Mariage Secret",
    "summary": "Au cours d'une promenade vers Neuilly, Manuèle et Rolande débattent des intrigues matrimoniales entourant M. de l'Orme et M. de Queyrel, révélant les pressions sociales pesant sur les jeunes femmes.",
    "paragraphs": [
      "Ce matin-là, Manuèle et Rolande se rendaient comme d'habitude à Neuilly. Et, tout en cheminant, elles discutaient d'un certain M. de l'Orme et d'un possible mariage avec M. de Queyrel.",
      "La petite Rolande s'indigne de l'intérêt porté par M. de l'Orme à son égard, tout en questionnant sa mère sur la véracité de ses intentions.",
      "L'échange révèle les tensions et les pressions sociales pesant sur la jeune fille, ainsi que son attachement à Claude, dont elle attend un avis décisif."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Actualités",
    "title": "Le Président de la République",
    "summary": "Le Président de la République est rentré à Paris hier matin, en provenance de Montélimar. De nombreuses personnalités civiles et militaires étaient présentes sur le quai de la gare pour l'accueillir.",
    "paragraphs": [
      "Le Président de la République, accompagné par M. Poulet et le capitaine Chabaud, est rentré à Paris hier matin à neuf heures, venant de Montélimar.",
      "Il a été salué sur le quai de la gare par MM. Noblemaire, directeur de la Compagnie P.-L.-M.; Lépine, préfet de police; Crozier, directeur du protocole; Cavard, directeur de la sûreté générale. Le général Bailloud et M. François Housset attendaient également le Président à la gare."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Actualités",
    "title": "Conseil des Ministres",
    "summary": "Réuni sous la présidence de M. Loubet, le Conseil des ministres a officiellement fixé la date de l'inauguration de l'Exposition universelle au 14 avril prochain.",
    "paragraphs": [
      "Les ministres se sont réunis hier matin, à l'Élysée, sous la présidence de M. Loubet. Le Conseil a décidé, conformément aux propositions de M. le commissaire général, de fixer au 14 avril l'inauguration officielle de l'Exposition universelle."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Politique",
    "title": "Le Président de la Cour des Comptes",
    "summary": "M. le ministre des Finances a soumis à la signature du Président de la République le décret nommant M. Labeyrie premier président de la Cour des Comptes, tandis que M. Morel lui succède au Crédit foncier.",
    "paragraphs": [
      "Le ministre des Finances a soumis à la signature du Président de la République un décret nommant M. Labeyrie premier président de la Cour des Comptes. M. Morel, sous-gouverneur de la Banque de France, est désigné pour lui succéder à la direction du Crédit foncier."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Social",
    "title": "Une loi de travail",
    "summary": "Le Sénat a adopté une loi réglementant la durée du travail dans les établissements industriels. Elle prévoit une réduction progressive de la journée de travail, laquelle sera ramenée à dix heures dans quatre ans.",
    "paragraphs": [
      "Après une longue et sérieuse discussion, le Sénat vient d'adopter la loi sur le travail des filles mineures, des femmes et des enfants dans les établissements industriels. Il s'agit, pour la durée de la journée, d'une réduction progressive : elle sera ramenée à dix heures et demie dans un délai de deux ans, et à dix heures dans un délai de quatre ans.",
      "Le point capital de cette loi réside dans l'article qui vise le travail des adultes dans les ateliers mixtes, fixant également la durée de la journée à onze heures, puis à dix heures et demie dans deux ans et à dix heures dans quatre ans."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Victime de la Fatalité",
    "summary": "Condamné autrefois aux travaux forcés, Nicolas Roucamps, revenu clandestinement à Paris, s'est constitué prisonnier pour rupture de ban. Une demande de grâce est actuellement soumise au Président de la République.",
    "paragraphs": [
      "Nicolas Roucamps, après une suite d'arrestations et de condamnations pour des délits mineurs, s'était vu condamner aux travaux forcés à Cayenne. Ayant purgé sa peine, il est revenu clandestinement à Paris afin d'y revoir ses parents.",
      "Malgré son repentir sincère et le soutien de son entourage, il s'est vu contraint de se constituer prisonnier à la police pour rupture de ban. Une démarche est actuellement en cours auprès du Président de la République afin d'obtenir sa grâce."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Faits Divers",
    "title": "Un double suicide",
    "summary": "Un cocher, Louis Kirsch, et sa maîtresse, Mme Mossière, ont été découverts morts par asphyxie volontaire dans une chambre d'hôtel de la rue du Roi-d'Alger, accablés par leur situation.",
    "paragraphs": [
      "Un cocher nommé Louis Kirsch et sa maîtresse, Mme Mossière, ont été découverts morts, dans la journée, dans leur chambre d'hôtel située rue du Roi-d'Alger. Ils ont succombé à une asphyxie volontaire provoquée par un réchaud.",
      "Une lettre, retrouvée par les autorités, confirme la volonté délibérée du couple de mettre fin à leurs jours ensemble, craignant les conséquences sociales et morales de leur relation adultère."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "Faits Divers",
    "title": "Faux monnayeurs",
    "summary": "Jules Lecomte a été arrêté pour falsification de monnaie. La perquisition a permis de saisir de nombreux moules. Il a avoué agir avec la complicité de son épouse et de son fils, tous conduits au dépôt.",
    "paragraphs": [
      "Jules Lecomte a été arrêté pour un délit de falsification de pièces de monnaie. Une perquisition effectuée à son domicile a permis de saisir plus de cent moules destinés à la contrefaçon, ainsi qu'une grande quantité de fausses pièces.",
      "Interrogé, Lecomte a avoué agir avec la complicité de sa femme et de son fils. La famille entière a été interpellée et conduite au dépôt en attendant leur jugement."
    ]
  },
  {
    "id": 11,
    "page": 1,
    "category": "Actualités Internationales",
    "title": "La Guerre en Afrique australe",
    "summary": "Les pluies torrentielles entravent la progression des troupes du général Roberts en Afrique du Sud, tandis que les Boers tirent profit du relief montagneux pour contrer l'avancée britannique.",
    "paragraphs": [
      "Les dépêches parvenues du Cap annoncent que la saison des pluies a débuté, gênant considérablement la marche des troupes de lord Roberts. Les routes se transforment en fondrières et les difficultés de ravitaillement deviennent insurmontables.",
      "Dans l'État libre d'Orange, la situation demeure extrêmement tendue pour les forces britanniques, alors que les Boers se retranchent dans les montagnes et exploitent le climat à leur avantage tactique."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "Les pertes anglaises",
    "summary": "Le ministère de la Guerre britannique a publié un relevé des pertes au 24 mars, totalisant 21 845 hommes, incluant les morts au combat, les disparus, les prisonniers et les pertes dues aux maladies.",
    "paragraphs": [
      "Le War Office publie un relevé des pertes anglaises constatées jusqu'au 24 mars, qui se décomposent ainsi : pertes au combat, 9 346 blessés, 8 570 manquants et prisonniers, soit un total de 17 916.",
      "Pertes enregistrées en dehors des combats : 1 072 morts ; 2 857 blessés, malades ou rendus impropres au service. Le total général s'élève ainsi à 21 845 hommes."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "Au Natal",
    "summary": "Des détonations ont été entendues près de Glencoe. Sur le front de la Tugela, les généraux Botha et Meyer renforcent leurs positions tandis que des incidents éclatent lors des reconnaissances.",
    "paragraphs": [
      "Quatre fortes explosions ont été entendues aujourd'hui dans la direction de Glencoe.",
      "Le commandant Pretorius a été envoyé hier avec une patrouille. Au cours de cette reconnaissance, les Boers ont surpris et abattu des lanciers anglais. Le général Botha a par ailleurs rapporté que des femmes du Transvaal ont été blessées dans les tranchées boers le long de la Tugela.",
      "Les troupes boers ne s'attendent pas à une attaque immédiate. Les généraux Botha et Meyer ont été rejoints par leurs commandos respectifs."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "À Pretoria",
    "summary": "Le général Joubert est de retour à Pretoria. Deux fonctionnaires boers, sujets britanniques naturalisés, ont été arrêtés pour intelligence avec l'ennemi et incarcérés en vertu de la loi martiale.",
    "paragraphs": [
      "Le général Joubert est rentré à Pretoria. Kroonstadt est rempli d'espoir ; il annonce son retour prochain auprès des troupes.",
      "Deux fonctionnaires boers, sujets anglais naturalisés, qui avaient été envoyés sur le théâtre des opérations avec le commandant de Kroonstadt, ont été interceptés au milieu du camp boer alors qu'ils tentaient de rejoindre les lignes anglaises. Ils ont été arrêtés et, aux termes de la loi martiale, conduits à Pretoria pour y être incarcérés."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Politique",
    "title": "L'Afrikander Bond",
    "summary": "Réunis pour la conciliation, les membres du Bond réclament l'indépendance absolue des Républiques et dénoncent une guerre qu'ils jugent inconstitutionnelle, orchestrée par Cecil Rhodes.",
    "paragraphs": [
      "Une réunion de membres du Bond a été tenue aujourd'hui pour appuyer le mouvement en faveur de la conciliation.",
      "M. Hargrove a déclaré que les Boers ne seraient jamais satisfaits de la domination anglaise et il a prédit d'autres conflits dans six ans si l'indépendance absolue n'était pas rendue aux Républiques. Les Républicains, a-t-il ajouté, exigent la justice et non la magnanimité.",
      "L'orateur a conseillé un appel direct au peuple anglais, jugeant qu'une pétition à la Reine ne pourrait jamais parvenir à Sa Majesté.",
      "M. Marais, membre de l'Assemblée législative, a affirmé que la guerre n'était qu'une continuation du raid précédent, constituant le procédé inconstitutionnel par lequel M. Cecil Rhodes a cherché à arriver à ses fins. L'orateur a qualifié la conférence de Bloemfontein d'action déshonorante.",
      "Une résolution identique à celle adoptée par le comité de conciliation pour le Sud de l'Afrique, regrettant que le ministère du Cap n'ait pas été consulté avant l'ouverture des hostilités, a été adoptée."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "Entrevue avec le comte Sternberg",
    "summary": "Le comte Adalbert Sternberg, officier autrichien prisonnier à Paardeberg, livre ses observations sur la tactique boer, le manque de discipline et leur vive hostilité envers MM. Chamberlain et Rhodes.",
    "paragraphs": [
      "Le New-York Herald a publié une très intéressante interview avec le comte Adalbert Sternberg, officier autrichien qui combattit avec les Boers sous les ordres du général Cronje. Il fut fait prisonnier à Paardeberg.",
      "Le comte Adalbert Sternberg déclare que les Boers n'ont pas de haine pour les Anglais en général, mais détestent du plus profond du cœur MM. Chamberlain et Rhodes.",
      "Sur le rôle des officiers européens, il répond : « En général, ils n'ont pas fait grand-chose. Le Boer n'a pas une très haute opinion des officiers européens, et croit qu'il est bien plus malin qu'eux. »",
      "Leur organisation défectueuse empêche tout ce qui pourrait ressembler à un commandement unique. Le point le plus faible de la tactique boer vient surtout du manque absolu du service d'éclaireurs."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Politique",
    "title": "Entrevue avec le Docteur Leyds",
    "summary": "Le ministre du Transvaal en Europe, le docteur Leyds, dénonce la désinformation entourant le conflit et réaffirme sa pleine confiance dans l'issue finale de la lutte pour le Transvaal.",
    "paragraphs": [
      "Nous venons de nous entretenir avec le docteur Leyds, ministre du Transvaal en Europe, qui a répondu à nos questions.",
      "La situation actuelle est une véritable énigme ; toutes les nouvelles qui nous parviennent sont contradictoires.",
      "Le docteur Leyds ne sait rien concernant l'arrivée en Europe de délégués boers, mais espère que la nouvelle est exacte pour que les gouvernements européens connaissent la vérité sur les origines et les causes réelles de cette guerre injuste.",
      "Le ministre ne perdra pas son temps : il retournera jeudi à Paris et se rendra ensuite à Berlin. Il conserve toujours la plus grande confiance sur le résultat final de la lutte."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Politique",
    "title": "Séance du Sénat (27 mars)",
    "summary": "Lors de la séance du 27 mars sous la présidence de M. Fallières, le Sénat a traité de l'affichage électoral et voté des mesures sur les appareils à pression, avant le dépôt du projet des douzièmes provisoires.",
    "paragraphs": [
      "La séance est ouverte à trois heures un quart, sous la présidence de M. Fallières.",
      "Le président annonce au Sénat la mort de M. Allemand, sénateur de la Haute-Loire.",
      "Le Sénat aborde la discussion de la proposition de loi relative à l'affichage électoral. L'urgence est déclarée. Après des observations de M. Strauss, rapporteur, la proposition est renvoyée à la commission.",
      "Le Sénat vote ensuite le projet de loi concernant les contraventions aux règlements sur les appareils à pression de vapeur et de gaz.",
      "M. Caillaux, ministre des Finances, dépose le projet de loi relatif au quatrième douzième provisoire. La séance est levée à cinq heures."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Politique",
    "title": "Chambre des Députés (27 mars)",
    "summary": "La Chambre valide des élections, vote le quatrième douzième provisoire et entame le débat complexe sur le rattachement administratif de l'armée coloniale, partagée entre la Marine et la Guerre.",
    "paragraphs": [
      "La séance est ouverte à trois heures vingt, sous la présidence de M. Paul Deschanel.",
      "La Chambre valide les élections de MM. Arbouin, Justin Chabert, Chanoz et Dasque.",
      "M. Berteaux dépose une proposition de loi tendant à déclarer jour férié le samedi 14 avril, jour de l'ouverture de l'Exposition. L'urgence est déclarée.",
      "M. Boudenoot donne lecture d'un rapport sur le projet de loi relatif au quatrième douzième provisoire (avril). Le projet est adopté par 434 voix.",
      "La Chambre aborde la discussion du projet de loi relatif à l'armée coloniale. M. Fleury-Ravarin préconise le rattachement de l'armée coloniale à la Marine, estimant qu'il y a une connexion intime entre la flotte et les troupes d'occupation. M. Raiberti se déclare partisan du rattachement au ministère de la Guerre."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Nécrologie",
    "title": "Mort d'un Sénateur",
    "summary": "Décès de M. Allemand, sénateur de la Haute-Loire, âgé de 64 ans, ancien juge au tribunal de Brioude et figure politique opposée au prince-président.",
    "paragraphs": [
      "M. Allemand, sénateur de la Haute-Loire, vient de mourir à l'âge de soixante-quatre ans.",
      "Ancien avoué et ancien juge au tribunal de Brioude, il s'était signalé par son hostilité à la politique du prince-président. Il était sénateur depuis 1891."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Justice",
    "title": "Mouvement Judiciaire",
    "summary": "Le Journal officiel annonce un remaniement au sein de la magistrature, actant les nominations de MM. Milliard à la cour d'appel, Fabre au ministère de la Justice et Leydet au tribunal de la Seine.",
    "paragraphs": [
      "Le Journal officiel publie ce matin le mouvement judiciaire suivant : M. Milliard est nommé conseiller à la cour d'appel de Paris, M. Fabre devient directeur du personnel au ministère de la Justice, et M. Leydet est nommé juge d'instruction à la Seine."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Échos",
    "title": "Réformes à la police municipale",
    "summary": "Afin de renforcer le prestige de l'uniforme lors des cérémonies officielles et des funérailles illustres, les autorités envisagent l'ajout d'un plumet sur le képi des gardiens de la paix.",
    "paragraphs": [
      "Il est question d'orner d'un plumet le képi des gardiens de la paix à l'occasion des grandes cérémonies, telles que l'accueil de souverains étrangers ou les obsèques de personnages illustres. Il convenait de rehausser le prestige de l'uniforme."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Échos",
    "title": "Grandes eaux de Versailles",
    "summary": "Le calendrier des jeux d'eau du domaine de Versailles est arrêté : les grandes eaux reprendront leur cycle bimensuel dès le 6 mai, tandis que les petites eaux seront activées deux fois par semaine dès le 15 avril.",
    "paragraphs": [
      "À compter du 6 mai, les grandes eaux du domaine de Versailles joueront régulièrement tous les quinze jours. Par ailleurs, les petites eaux seront mises en service deux fois par semaine dès le 15 avril."
    ]
  },
  {
    "id": 24,
    "page": 2,
    "category": "Science",
    "title": "Allaitement artificiel",
    "summary": "Une habitante de Kergloff a adressé une pétition singulière à l'Académie de médecine, préconisant l'emploi du lait de truie en tant que succédané du lait maternel pour l'allaitement des nourrissons.",
    "paragraphs": [
      "Le ministre de l'Intérieur a transmis à l'Académie de médecine une pétition émanant d'une dame de Kergloff, tendant à faire adopter le lait de truie comme le meilleur succédané du lait maternel pour l'allaitement artificiel des enfants."
    ]
  },
  {
    "id": 25,
    "page": 2,
    "category": "Société",
    "title": "Exposition culinaire",
    "summary": "La dix-septième exposition internationale culinaire a officiellement fermé ses portes. La clôture a été marquée par un banquet aux salons Marguery, honoré par la présence du sous-chef de cabinet de M. Millerand.",
    "paragraphs": [
      "La dix-septième exposition internationale culinaire est close. À cette occasion, un banquet a réuni les exposants aux salons Marguery, en présence du sous-chef de cabinet de M. Millerand."
    ]
  },
  {
    "id": 26,
    "page": 2,
    "category": "Économie",
    "title": "Le trafic de Pittsburg",
    "summary": "Avec un volume de marchandises dépassant celui des treize plus grandes cités européennes réunies, Pittsburg confirme son statut de métropole industrielle mondiale, brassant plus de 55 millions de tonnes par an.",
    "paragraphs": [
      "Pittsburg, la cité du fer, possède un trafic sensiblement supérieur à celui des treize plus importantes villes d’Europe réunies. La ville reçoit et expédie chaque année, par rail et par voie fluviale, plus de 55 millions de tonnes de marchandises."
    ]
  },
  {
    "id": 27,
    "page": 2,
    "category": "Faits divers",
    "title": "Incendie à Paris",
    "summary": "Un atelier de menuiserie parisien a été ravagé par les flammes hier matin. Grâce à l'intervention rapide des sapeurs-pompiers, le sinistre a été circonscrit après une heure et demie de lutte acharnée.",
    "paragraphs": [
      "Le feu s’est déclaré hier matin dans un atelier de menuiserie parisien. Les sapeurs-pompiers ont dû lutter pendant une heure et demie pour parvenir à maîtriser l’incendie."
    ]
  },
  {
    "id": 28,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Police de l'Exposition",
    "summary": "MM. Lépine et Touny ont arrêté le dispositif de sécurité de l'Exposition Universelle, qui sera divisé en quatre secteurs et mobilisera des centaines d'agents pour maintenir l'ordre public.",
    "paragraphs": [
      "Les consignes générales pour la police de l’Exposition ont été arrêtées par M. Lépine et M. Touny. L’enceinte du site sera divisée en quatre secteurs distincts.",
      "Le service général de la police intérieure sera assuré par des officiers de paix, quatre cents gardiens de la paix ainsi que deux cent cinquante gardes municipaux."
    ]
  },
  {
    "id": 29,
    "page": 2,
    "category": "Transports",
    "title": "Transports en commun à Paris",
    "summary": "Le Conseil municipal étudie la création d'une nouvelle ligne d'omnibus reliant la place Victor-Hugo au faubourg Saint-Germain pour faciliter l'accès des voyageurs aux gares et à l'Exposition.",
    "paragraphs": [
      "Le Conseil municipal examine actuellement le projet de création d’une ligne d’omnibus reliant la place Victor-Hugo au faubourg Saint-Germain, afin de mieux desservir l’Exposition universelle ainsi que les gares parisiennes."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits Divers",
    "title": "Sauvetage à Saint-Quentin",
    "summary": "Un acte de bravoure a été accompli au marché Saint-Quentin, où des riverains ont secouru une habitante prisonnière des fumées au quatrième étage, empêchant ainsi une issue tragique.",
    "paragraphs": [
      "Les habitants du marché Saint-Quentin ont procédé, avec courage, au sauvetage d’une locataire occupant le quatrième étage, qui ne pouvait descendre de chez elle à cause de l’épaisse fumée se dégageant dans l’escalier."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident de lampe à pétrole",
    "summary": "Un grave accident domestique rue Montorgueil : M. Léon Lorétan, imprimeur, a été grièvement brûlé lors de l'explosion d'une lampe à pétrole alors qu'il procédait à son remplissage.",
    "paragraphs": [
      "M. Léon Lorétan, imprimeur, demeurant rue Montorgueil, au deuxième étage, était occupé hier matin, à dix heures, à remplir une lampe à pétrole, lorsque tout à coup le récipient fit explosion.",
      "Le liquide enflammé communiqua le feu aux vêtements de M. Lorétan et un commencement d'incendie se déclara dans l'appartement.",
      "Aux cris de l'imprimeur, plusieurs locataires accoururent et parvinrent à étouffer les flammes qui enveloppaient le malheureux. M. Lorétan a été assez grièvement brûlé à la figure et aux mains.",
      "L'incendie, qui a détruit une partie du mobilier, a pu être éteint en une demi-heure."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident domestique rue des Épinettes",
    "summary": "Une imprudence domestique a tourné au drame rue des Épinettes : Mme Vendlich a été grièvement brûlée après le renversement d'une lampe allumée sur un meuble, laquelle a embrasé sa literie.",
    "paragraphs": [
      "Hier soir, Mme Vendlich, demeurant rue des Épinettes, commettait l'imprudence de laisser, sur une chaise, une lampe allumée.",
      "La lampe se renversa et communiqua le feu aux rideaux et aux couvertures du lit. Mme Vendlich a réussi à fuir, mais elle est grièvement brûlée."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Faits Divers",
    "title": "Décès subit d'un cordonnier",
    "summary": "Drame sur le boulevard Beaumarchais : l'ouvrier cordonnier Alfred Vansabrouck, âgé de 45 ans, est décédé subitement après s'être effondré sur la voie publique malgré l'intervention rapide des secours.",
    "paragraphs": [
      "Hier, vers une heure de l'après-midi, un ouvrier cordonnier, nommé Alfred Vansabrouck, âgé de 45 ans, passait en face du numéro 14 du boulevard Beaumarchais, quand tout à coup il s'affaissa sur le sol.",
      "Des gardiens de la paix le transportèrent dans une pharmacie, mais malgré tous les soins qui lui furent prodigués, le malheureux ne tarda pas à rendre le dernier soupir."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Actualités Sociales",
    "title": "Grande fête de famille Amel",
    "summary": "La Maison Amel a célébré son cinquantenaire en grande pompe devant quatre mille invités, conviant élites politiques et financières à une fastueuse réception conclue par une tombola mémorable.",
    "paragraphs": [
      "Près de quatre mille personnes ont pris part à la fête organisée par la Maison Amel, à l'occasion du 50e anniversaire de sa fondation.",
      "Parmi les invités, on remarquait de nombreux anciens ministres, sénateurs, et hautes personnalités des finances et du commerce.",
      "Le programme proposait des prestations de nombreux artistes et s'est terminé par une tombola gratuite dont le gros lot, une maison de campagne, a été gagné par M. Savoyen, employé de longue date."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Faits Divers",
    "title": "Chronique criminelle autour de Paris",
    "summary": "La banlieue parisienne sous tension : une série de faits divers marque la journée, allant d'agressions armées et de vols qualifiés à des accidents tragiques dans plusieurs communes limitrophes.",
    "paragraphs": [
      "Boulogne-sur-Seine : Louis Monet et Barthélémy ont été arrêtés après un vol dans une propriété du boulevard de Strasbourg.",
      "Asnières-sur-Seine : Lors d'une dispute, le nommé Roufeau a tiré un coup de revolver sur M. Wescoffer, le blessant légèrement au bras.",
      "Villeneuve-la-Garenne : Un cycliste, M. Joseph Desmarc, a eu le crâne ouvert et l'épaule brisée suite à la rupture de la fourche de sa machine.",
      "Gennevilliers-les-Bruyères : Un enfant a été retrouvé blessé gravement au ventre après avoir tenté de pénétrer par escalade dans une propriété privée.",
      "Saint-Ouen : Maximilien Renault, surnommé la Terreur de l'Île, a été arrêté pour avoir agressé un cordonnier et un gendarme.",
      "La Courneuve : Victor Prévôt, ouvrier, a frappé son contremaître d'un coup de couteau, lui tranchant l'artère crurale.",
      "Aubervilliers : Une bagarre entre deux hommes, Jarnot et Guibar, a dégénéré en échanges de coups de feu, nécessitant l'intervention de la police.",
      "Fontenay-sous-Bois : Un homme non identifié a été retrouvé inconscient rue du Progrès et transporté à l'hôpital Saint-Antoine.",
      "Alfortville : Les travaux de déblaiement après l'incendie de l'établissement vétérinaire se poursuivent difficilement en raison de l'état des cadavres d'animaux.",
      "Joinville-le-Pont : M. Jackson a été victime d'un vol de portefeuille contenant mille francs à sa sortie de l'hippodrome de Grivelles.",
      "Dourdan : Louis Toury, cultivateur, a été gravement blessé après que son cheval s'est emballé, renversant la voiture sur lui."
    ]
  },
  {
    "id": 36,
    "page": 3,
    "category": "Dépêches de Province",
    "title": "Faits marquants dans les départements",
    "summary": "Chroniques provinciales : entre drames privés dans l'Oise et le Loiret, tensions sociales à l'École des Arts et Métiers d'Angers et un attentat à la bombe à Valenciennes, l'actualité locale reste chargée.",
    "paragraphs": [
      "Orimont (Oise) : Un cordonnier nommé Dubreuil a tenté de se suicider en se portant sept coups de tranchet dans la poitrine.",
      "Chartres : Un cultivateur de 69 ans, M. Arrondeau, a été trouvé pendu à son domicile.",
      "Arras : Le médecin inspecteur général Dujardin-Beaumetz a visité les casernements locaux suite à une épidémie de méningite.",
      "Angers : Un mouvement d'agitation a éclaté à l'École des Arts et Métiers, nécessitant une présence constante des autorités.",
      "Valenciennes : Une bombe a explosé devant le domicile de M. Cyriaque Dupriez, adjoint au maire, brisant les vitres de l'habitation."
    ]
  },
  {
    "id": 37,
    "page": 3,
    "category": "Social",
    "title": "Grèves et mouvements ouvriers",
    "summary": "Situation sociale : la manufacture de tabac de Morlaix reprend ses activités, tandis que le boulevard du 14-Juillet à Troyes reste marqué par la mobilisation de 3 000 grévistes.",
    "paragraphs": [
      "Morlaix : Les ouvriers de la manufacture de tabac ont voté la reprise du travail, qui s'est effectuée sans incident.",
      "Troyes : Les grévistes, au nombre de 3 000, se sont rassemblés sur le boulevard du 14-Juillet, tandis que la reprise du travail est signalée par 2 000 autres ouvriers."
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Exposition Universelle",
    "title": "Les machines de l'Exposition",
    "summary": "Au Champ-de-Mars, les essais des machines et la mise en pression des chaudières s'accélèrent, confirmant l'avance des constructeurs français sur leurs concurrents étrangers.",
    "paragraphs": [
      "Depuis environ une semaine, on procède au Champ-de-Mars à l'essai et à la mise en train des machines françaises destinées à fournir l'énergie électrique nécessaire à l'éclairage et à la force motrice.",
      "Jeudi dernier, on a allumé le foyer de la grande cheminée de cent mètres, située avenue La Bourdonnais. Le tirage de cette cheminée monumentale a été reconnu excellent de tous points.",
      "Le lendemain, une des chaudières de la batterie installée par M. Roser, constructeur à Saint-Denis, a été mise en pression, et une des canalisations distribuant la vapeur dans le palais de la Mécanique a été éprouvée ; les résultats obtenus sont extrêmement satisfaisants.",
      "Le 21 mars, la machine de 500 chevaux du condenseur, qui dessert toutes les installations mécaniques posées par de grands constructeurs français, a été mise en marche, et le lendemain, une seconde machine de 2 000 chevaux a commencé également à fonctionner.",
      "Il convient de remarquer que les constructeurs français ont été prêts huit jours au moins avant leurs concurrents étrangers, bien que ceux-ci eussent pris possession de leurs emplacements plus d'un mois avant eux."
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "Actualités artistiques",
    "title": "Le pont Alexandre III",
    "summary": "La décoration du pont Alexandre III s'achève avec la pose des Pégases et des candélabres. L'ouvrage, orné dans le style Louis XV, devrait être totalement prêt pour le 1er avril.",
    "paragraphs": [
      "Le dernier des Pégases qui couronnent les pylônes du pont Alexandre III a été mis en place et doré avant-hier matin.",
      "Les travaux, en ce qui concerne la décoration de ce magnifique ouvrage, sont terminés à peu près complètement. Quatre cartouches en bronze ciselé ont été placés aux angles des garde-fous.",
      "En outre, sur le premier pylône droit du pont, on grave et dore actuellement une inscription commémorative de la pose de la première pierre. Les garde-fous du côté aval du pont sont tous mis en place. On commence dès à présent à poser les grands candélabres électriques qui seront placés aux angles, ainsi que les petits groupes en bronze vénitien qui concourent à la décoration artistique.",
      "Les candélabres ordinaires sont d'une forme très heureuse ; de style Louis XV, ils portent chacun un groupe de cinq lanternes, dont les verres bombés sont ornés de soleils et de coquilles Saint-Jacques. Le grand cartouche central qui cache la clé du pont est l'œuvre de M. Réal. On espère avoir entièrement terminé les travaux à la date du 1er avril."
    ]
  },
  {
    "id": 40,
    "page": 4,
    "category": "Exposition Universelle",
    "title": "Les échafaudages",
    "summary": "M. Alfred Picard impose une mesure radicale : tous les échafaudages du chantier de l'Exposition devront être retirés le 4 avril prochain, pressant ainsi les entreprises malgré les demandes de délais.",
    "paragraphs": [
      "M. Alfred Picard vient de prendre, de concert avec les chefs des différents services de l'Exposition, une mesure radicale : le 4 avril, tous les échafaudages, sans exception, seront jetés à terre, quel que soit l'état des travaux. Cette mesure, affichée dans tous les services de l'Exposition, a provoqué de toutes parts une recrudescence de zèle.",
      "Malgré cela, de nombreuses demandes de délais ont été adressées à la direction, mais une fin de non-recevoir a été la réponse faite à la plupart des demandeurs."
    ]
  },
  {
    "id": 41,
    "page": 4,
    "category": "Exposition Universelle",
    "title": "Les envois aux Beaux-Arts",
    "summary": "Le chantier du Grand Palais s'intensifie pour l'Exposition Universelle. Tandis que le sculpteur Destois finalise ses œuvres, les délégations internationales affluent pour installer leurs envois dans une effervescence générale.",
    "paragraphs": [
      "On a procédé hier au moulage du grand cartouche orné exécuté par M. Destois. Bien que le temps lui soit plus que mesuré, l'éminent sculpteur espère néanmoins avoir terminé son œuvre à la date fixée.",
      "Quant aux envois étrangers, ils commencent à affluer au Grand Palais des Beaux-Arts. Les services de la manutention sont débordés de travail ; de six heures du matin à minuit, une véritable armée de coltineurs transporte les caisses sur les emplacements que les œuvres picturales ou sculpturales doivent occuper.",
      "La Suède, l'Angleterre, la Russie, l'Espagne, l'Italie et la Suisse ont terminé leurs envois. On s'attend actuellement à voir arriver les envois des autres nations dans les premiers jours du mois d'avril. Actuellement, tout le monde concourt à l'achèvement du Grand Palais : maçons, terrassiers, mosaïstes, sculpteurs, serruriers, tapissiers, etc., tout ce monde travaille en même temps."
    ]
  },
  {
    "id": 42,
    "page": 4,
    "category": "Exposition Universelle",
    "title": "Le Commissariat général de Russie",
    "summary": "Le commissariat général de l'Empire de Russie pour l'Exposition Universelle est désormais au complet suite à la nomination de quatre nouveaux délégués techniques et ferroviaires.",
    "paragraphs": [
      "MM. Werchowsky et Saiztensky, ingénieurs, viennent d'être adjoints aux fonctionnaires du commissariat général de l'Empire de Russie, en qualité de délégués du ministère. MM. d'Abramson et Skoupievsky ont été également adjoints au commissariat en qualité de délégués de l'administration des chemins de fer de l'Empire.",
      "Par ces quatre nominations, le commissariat général de l'Empire russe se trouve absolument au complet."
    ]
  },
  {
    "id": 43,
    "page": 4,
    "category": "Faits Divers",
    "title": "Perte d'objets précieux",
    "summary": "Un paquet contenant des breloques en or et un médaillon miniature a été égaré les 25 et 26 mars. Une récompense de 500 francs est promise à quiconque les rapportera au 17, rue de Miromesnil.",
    "paragraphs": [
      "Il a été perdu dans les journées des 25 et 26 mars un paquet de breloques composé de quatre médailles en or, une croix en or, un sabot et une petite clochette en or, un cœur en cristal et un médaillon en or contenant une miniature d'enfant et portant, gravée au dos, la date du 25 mars.",
      "La somme de 500 francs sera remise à la personne qui les rapportera au 17, rue de Miromesnil."
    ]
  }
];
