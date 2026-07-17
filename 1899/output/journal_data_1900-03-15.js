// Date: 1900-03-15
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-03-15 (Version Restaurée, 30 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Chronique",
    "title": "L'impôt sur le plaisir",
    "summary": "Face à la décision des directeurs de théâtres d'augmenter le prix des places pour le droit des pauvres, la presse s'indigne. Le débat sur l'équité de cette taxe historique, héritée de Louis XIV, est relancé.",
    "paragraphs": [
      "Il y a quelques jours, une nouvelle inattendue éclata comme une bombe dans le courrier des divers journaux. Les directeurs de théâtres s'étaient réunis et, d'un commun accord, avaient décidé que le droit des pauvres serait payé à part par le spectateur, c'est-à-dire en sus. La presse a protesté unanimement contre cette augmentation nouvelle du prix des places.",
      "De tout temps, le législateur s'est efforcé de rappeler le riche aux devoirs que la charité lui impose et de prélever, au profit des indigents, une petite portion des sommes qu'il consacre à ses plaisirs. Ce fut Louis XIV qui établit sur les théâtres un impôt qui est la véritable origine du droit des pauvres tel qu'il existe aujourd'hui.",
      "L'historique de la taxe dite « droit des pauvres » subsiste depuis bientôt cent ans, mais elle a été souvent attaquée. La querelle semble près de renaître, et il est évident que les directeurs rivaux, qui viennent de s'associer, poursuivront de toutes leurs forces la modification d'une taxe qui leur semble fort lourde.",
      "À notre avis, il conviendrait de voir si un droit uniforme de 10 % qui pèse sur les petites comme sur les grandes recettes est juste. La taxe ne serait plus controversée si elle s'élevait proportionnellement à la recette."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Roman",
    "title": "Les amoureux de Rolande",
    "summary": "Henri, troublé par la lettre du docteur Lecoutellier, se rend à l'École de médecine. Entre devoir et loyauté, l'entrevue avec le médecin promet d'être décisive pour son avenir avec Rolande.",
    "paragraphs": [
      "Lorsque Henri reçut la lettre du docteur Lecoutellier, il eut, avec un violent battement de cœur, une grande angoisse. Claude, pour lui, était un inconnu.",
      "Il savait ce qu'il avait fait pour Manuèle Casteras, dont il fut le sauveur, l'hôte, puis l'ami. Mais, s'il ne savait rien du drame intime, il sentait la paternelle amitié du docteur Lecoutellier pour Rolande.",
      "Le docteur Lecoutellier parlait de devoir, d'un devoir de délicatesse et de loyauté. Henri, après avoir hésité, se rendit à l'École de médecine à midi sonnant.",
      "Le docteur se leva pour aller au-devant de ce visiteur attendu. Henri éprouva alors la prestigieuse impression de cet homme à la haute stature, aux larges épaules et au regard perçant.",
      "Leur entretien porta sur les raisons du départ et le renoncement d'Henri, tournant autour de la question de l'argent et des obstacles à leur amour."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Nouvelles Coloniales",
    "title": "La colonne d'In Salah",
    "summary": "L'Agence Havas dément les rumeurs sur le mauvais état des troupes en route vers In-Salah, confirmant la bonne organisation des forces sous le commandement du général Grisot.",
    "paragraphs": [
      "L'Agence Havas communique une note réfutant les allégations d'un journal du matin sur le mauvais état et la mauvaise organisation de la colonne de renforts se dirigeant d'El-Goléa sur In-Salah.",
      "Ces renseignements sont inexacts. Les tirailleurs ont plus d'un an de service et le général Grisot s'est assuré par lui-même des conditions excellentes de l'organisation. La colonne doit arriver le 25 à In-Salah."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Faits Divers",
    "title": "L'incendie du Théâtre-Français",
    "summary": "Le déblaiement du Théâtre-Français se poursuit. M. Lépine et l'architecte Guadet confirment la stabilité des structures, tandis que des objets précieux, dont le buste de Gresset, sont sauvés des décombres.",
    "paragraphs": [
      "Les travaux de déblaiement ont continué hier. Une équipe de vingt terrassiers a été chargée de rejeter sur l'emplacement des fauteuils d'orchestre les débris qui surchargent les pourtours.",
      "M. Lépine, préfet de police, a fait une longue visite à l'intérieur. Il paraît vraisemblable qu'on n'aura pas à toucher aux gros murs. M. Guadet, l'architecte, a toute liberté dans la conduite des travaux qui devront être terminés le 13 juillet.",
      "Le déménagement des loges des artistes est terminé. Au cours des travaux, le buste de Gresset a été retrouvé en bon état. M. Jules Claretie a pu pénétrer dans la loge de Talma, qui est restée intacte."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Social",
    "title": "La reconstruction du Théâtre-Français",
    "summary": "La commission du budget examine le plan de reconstruction du Théâtre-Français. Elle privilégie des tournées en province plutôt que l'installation provisoire de la troupe à l'Odéon.",
    "paragraphs": [
      "Les deux projets de M. Leygues, ministre de l'Instruction publique, sur la question du Théâtre-Français, ont été longuement discutés hier par la commission du budget.",
      "La commission a voté le crédit pour la reconstruction, mais a modifié le projet portant sur l'installation provisoire à l'Odéon, suggérant plutôt des tournées en province."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Mystérieuse affaire à l'hôpital Trousseau",
    "summary": "Le commissaire Boutineau enquête sur le suicide suspect de l'infirmière Marie Huon à l'hôpital Trousseau, après les déclarations troublantes d'un témoin de quinze ans.",
    "paragraphs": [
      "M. Boutineau, commissaire de police, a été informé du suicide d'une infirmière, Marie Huon, qui se serait donné la mort en se frappant d'un coup de couteau au cœur.",
      "Une enquête a été ouverte suite aux déclarations d'une jeune fille de quinze ans, témoin d'un dialogue suspect, laissant planer un doute sérieux sur les circonstances réelles du décès."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Double suicide à Montmartre",
    "summary": "Mme Henriette Suchaud et sa fille Blanche ont mis fin à leurs jours dans une misère profonde, rue Lepic. Elles avaient formulé le vœu d'être inhumées dans le même cercueil.",
    "paragraphs": [
      "M. Dupuis, commissaire de police, a été appelé hier pour constater un double suicide rue Lepic. Il s'agit de Mme Henriette Suchaud et de sa fille Blanche, âgées respectivement de quarante et vingt-huit ans.",
      "En situation de grande précarité, elles ont mis fin à leurs jours ensemble. Une lettre retrouvée sur place demandait instamment qu'on les inhumât dans le même cercueil."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Politique",
    "title": "L'amnistie au Sénat",
    "summary": "M. Émile Zola a été entendu par la commission sénatoriale au sujet du projet de loi d'amnistie, réaffirmant son engagement pour la vérité dans l'affaire Dreyfus.",
    "paragraphs": [
      "M. Émile Zola a été entendu par la commission du Sénat au sujet du projet de loi sur l'amnistie. Il a expliqué ses motivations et a réaffirmé sa volonté de faire éclater la vérité dans l'affaire Dreyfus.",
      "La commission a décidé de reporter ses travaux au samedi 24 mars."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Étranger",
    "title": "Dans l'État libre d'Orange",
    "summary": "Les troupes britanniques du général Roberts ont investi Bloemfontein. Le drapeau anglais flotte sur la présidence alors que le commandant Delarey fait état des combats d'Abraham's Kraal.",
    "paragraphs": [
      "Les troupes britanniques, sous le commandement de lord Roberts, ont pris possession de Bloemfontein. Le drapeau britannique flotte désormais sur le palais de la présidence.",
      "Les autorités locales ont remis les clefs des bureaux au général. Par ailleurs, le commandant Delarey a fait un rapport sur le combat d'Abraham's Kraal, où les troupes fédérales ont résisté vaillamment aux bombardements anglais."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "Combats sur la colline stratégique",
    "summary": "Récit d'un affrontement acharné sur une position stratégique face aux troupes anglaises, marqué par la résistance héroïque des combattants fédéraux malgré leurs pertes.",
    "paragraphs": [
      "Le point le plus élevé de la route, où je me trouvais posté avec 300 hommes, revêtait une grande importance stratégique pour les Anglais.",
      "Les fédéraux s'en étant rendu compte, un violent combat s'ensuivit, de neuf heures du matin jusqu'au coucher du soleil. Les fédéraux ont lutté en véritables héros, repoussant à trois reprises les masses des Anglais qui nous opposaient des troupes fraîches. Chaque tentative d'assaut fut brisée, et au coucher du soleil, quarante mètres seulement nous séparaient des Anglais.",
      "Ces derniers ont essuyé de lourdes pertes. Nous n'avons pas encore le relevé exact des nôtres, mais un rapport suivra à ce sujet.",
      "Les attachés russe et hollandais sont portés manquants, bien que l'on suppose qu'ils se trouvent au camp."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "Situation militaire à Prétoria et Aliwal-North",
    "summary": "À Pretoria, le gouvernement boer envisage un transfert face à l'avancée britannique. Près d'Aliwal-North, les commandos occupent des positions stratégiques sur le fleuve, tandis que les redditions de rebelles s'accentuent.",
    "paragraphs": [
      "Prétoria, 13 mars. Le correspondant du Volkstem, à Bloemfontein, télégraphie qu'étant donnée la situation militaire, il se pourrait que le siège du gouvernement soit déplacé.",
      "Herschell, 13 mars. Un messager déclare que le commandant Olivier et ses troupes sont rentrés hier dans l'État libre en traversant le fleuve et qu'ils ont pris position sur un kopje à proximité d'Aliwal-North par le sud. On croit qu'ils vont se maintenir dans cette position, car ils ont fait des approvisionnements importants.",
      "Deux autres commandos sont à Aliwal-North. Beaucoup de rebelles, parmi lesquels plusieurs tireurs, se rendent quotidiennement."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "Le sort de Cronjé",
    "summary": "Le général Cronjé, capturé par les troupes britanniques, a été transféré. Son état de santé, marqué par une affection cardiaque, pourrait retarder son transfert vers l'Angleterre.",
    "paragraphs": [
      "Londres, 14 mars. Les journaux annoncent que le général Cronjé et les principaux prisonniers ont été transportés, ainsi que nous l'avions annoncé. Il paraît, d'autre part, atteint d'un malaise de cœur, ce qui pourrait différer son départ pour l'Angleterre."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "Dépêches de Mafeking",
    "summary": "Les dépêches du Times confirment une fusillade continue sur Mafeking, sans victimes britanniques signalées. Parallèlement, un engagement armé à Aliwal-North a permis de capturer plusieurs soldats ennemis.",
    "paragraphs": [
      "Londres, 14 mars. Le Times de ce matin publie les dépêches suivantes : L'attaque du jour a été produite, la fusillade a continué toute la journée. Les Boers continuent de tirer sur la ville, mais heureusement nous n'avons aucun blessé à soigner.",
      "Un engagement à Aliwal-North a été livré. L'ennemi occupe toujours ses positions. Une violente canonnade a eu lieu et nous avons fait plusieurs prisonniers."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "Bombardement à Stormberg",
    "summary": "Les troupes boers ont engagé un bombardement sur Stormberg. Aux abords du fleuve Orange, les escarmouches se multiplient, poussant les Britanniques à mobiliser leurs meilleurs tireurs d'élite.",
    "paragraphs": [
      "Stormberg, 13 mars, 1 heure du soir. Les Boers viennent de commencer le bombardement de la ville et du camp.",
      "La journée a été calme. Des agents ont été aperçus au fleuve Orange ; ils ont tiré quelques coups de fusil sur les troupes anglaises. On a choisi quelques bons tireurs pour les opposer aux tirailleurs boers."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "Mission de paix",
    "summary": "Une délégation boer, composée de MM. Wolmarans, Wessels et Fischer, quitte Lourenço-Marques pour l'Europe. Leur mission vise à entamer des négociations de paix diplomatiques à Londres.",
    "paragraphs": [
      "Londres, 14 mars. On mande de Lourenço-Marques au Times : La délégation boer qui se rend en Europe pour la question de la paix partira demain.",
      "Les Boers ont ouvert des négociations à Londres. Les délégués sont MM. Wolmarans, Wessels et Fischer. M. Fischer, interviewé, a refusé toute déclaration sur la nature de la mission."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "Télégramme des Présidents Steijn et Krüger au gouvernement britannique",
    "summary": "Les présidents Steijn et Krüger adressent un télégramme à Londres, affirmant que leur résistance armée vise uniquement la défense de l'indépendance des Républiques sud-africaines.",
    "paragraphs": [
      "Bloemfontein, 5 mars. Le sang et les larmes de milliers d'êtres qui ont souffert de cette guerre, et la perspective de la ruine morale et économique dont l'Afrique du Sud est actuellement menacée, font une nécessité aux deux belligérants de se demander pourquoi ils combattent.",
      "Nous déclarons solennellement que cette guerre a été entreprise comme mesure défensive pour maintenir l'indépendance de la République sud-africaine. Nous sommes désireux de voir la paix rétablie, à condition que l'indépendance des deux Républiques soit reconnue et que ceux qui ont pris part avec nous ne soient pas molestés.",
      "Si le gouvernement de Sa Majesté est décidé à détruire l'indépendance des deux Républiques, il ne nous restera qu'à persévérer jusqu'au bout dans la voie où nous sommes engagés."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "Réponse de lord Salisbury",
    "summary": "Le Foreign Office, par la voix de lord Salisbury, rejette toute souveraineté aux Républiques et rejette sur elles la responsabilité des hostilités et des coûts humains de la guerre.",
    "paragraphs": [
      "Foreign Office, 11 mars. J'ai l'honneur d'accuser réception du télégramme des Présidents de l'État libre d'Orange et de la République sud-africaine. Sa Majesté ne peut reconnaître une souveraineté internationale aux deux Républiques.",
      "Au mois d'octobre dernier, la paix existait. La République de l'Afrique du Sud a envoyé un ultimatum à Sa Majesté. La Grande-Bretagne a été obligée de faire des préparatifs militaires, ce qui a entraîné de lourdes pertes. Cette calamité est la pénalité que la Grande-Bretagne a eu à supporter pour avoir acquiescé à l'existence des deux Républiques."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Politique",
    "title": "Réforme du budget et dépenses publiques",
    "summary": "La commission du budget valide un amendement de M. Berthelot instaurant une autorisation législative préalable obligatoire pour tout nouvel engagement de dépense publique.",
    "paragraphs": [
      "La commission du budget a maintenu un article additionnel stipulant qu'aucun engagement de dépenses ne peut être inscrit au budget s'il n'a été préalablement autorisé par une loi antérieure.",
      "Après une longue discussion, la commission du budget a maintenu hier un amendement de M. Berthelot visant à enrayer l'accroissement des dépenses publiques."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Faits Divers",
    "title": "Les tribunaux et les affaires de justice",
    "summary": "La justice poursuit ses travaux avec le report du délibéré sur la catastrophe de Juvisy et l'arrestation d'un médecin accusé de vols réitérés au domicile de ses clients.",
    "paragraphs": [
      "La cour a remis à huitaine le prononcé de son arrêt dans l'affaire de la catastrophe de Juvisy, concernant le sous-chef de gare.",
      "Un médecin peu scrupuleux, qui joignait l'art de guérir à celui de subtiliser des objets dans les domiciles de ses patients, a été arrêté et sera jugé pour ses agissements."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Économie",
    "title": "Exposition universelle de 1900",
    "summary": "M. Dorvillé, directeur général adjoint, impose aux exposants une livraison finale impérative des installations pour le 15 avril, sans possibilité de prolongation.",
    "paragraphs": [
      "M. Dorvillé, directeur général adjoint, rappelle aux exposants que l'Exposition doit être achevée le 15 avril au soir et être entièrement prête à recevoir les visiteurs dès le lendemain.",
      "Pour aucun motif ce terme ne sera modifié."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Nécrologie",
    "title": "Mort du général Eugène Pavy",
    "summary": "Le général Eugène Pavy, officier de la Légion d'honneur et vétéran des campagnes d'Italie et de Tunisie, est décédé à soixante ans. Ses obsèques seront célébrées samedi à l'église Saint-François-Xavier.",
    "paragraphs": [
      "Le général Eugène Pavy, commandant de brigade d'infanterie, est mort hier matin à l'hôpital de Saint-Jean-de-Dau, dans sa soixantième année.",
      "Officier de la Légion d'honneur, le général était médaillé d'Italie et de Tunisie. Les obsèques auront lieu samedi à l'église Saint-François-Xavier."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits Divers",
    "title": "Une Affaire Délicate",
    "summary": "Un instituteur, soupçonné d'avoir abusé de jeunes orphelines, a été interpellé après une perquisition menée par M. Martin. Il a été conduit à la prison de la Santé pour détournement de mineures.",
    "paragraphs": [
      "Un instituteur, chargé de l'instruction dans un quartier accueillant des orphelines, aurait abusé de ses élèves. Il les aurait ensuite conduites en province, malgré l'opposition de leurs familles.",
      "Un commissaire aux délégations judiciaires, M. Martin, s'est rendu hier après-midi à l'institut, a effectué une perquisition et recueilli les dépositions de plusieurs jeunes filles.",
      "Après cette enquête, M. Martin a mandé l'abbé S. dans son cabinet, puis l'a fait conduire chez M. Joly. L'abbé a été écroué à la prison de la Santé sous l'inculpation de détournement de mineures."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un Infanticide",
    "summary": "Une jeune femme demeurant rue des Mathurins a été arrêtée hier par le commissaire de police de la Madeleine pour le meurtre de son nouveau-né. L'instruction judiciaire est ouverte.",
    "paragraphs": [
      "Le commissaire de police du quartier de la Madeleine a mis, hier matin, en état d'arrestation une jeune fille, Georgette P., demeurant rue des Mathurins, qui avait étranglé l'enfant qu'elle venait de mettre au monde.",
      "M. Joly, juge d'instruction, est chargé de l'affaire."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Mutinerie d'ouvriers chinois",
    "summary": "Des ouvriers chinois employés à la construction du pavillon de la Chine se sont mutinés rue du Ranelagh, séquestrant leur chef de campement avant d'être maîtrisés par les autorités.",
    "paragraphs": [
      "Dès leur arrivée à Paris, les ouvriers chinois chargés de la construction du pavillon de la Chine, malgré leur contrat signé, se sont mis en grève.",
      "Des interprètes furent envoyés auprès des ouvriers du Céleste-Empire pour les inciter à réintégrer leurs chantiers, mais une certaine effervescence continua à régner dans le campement installé rue du Ranelagh.",
      "Cette révolte a provoqué l'intervention du commissaire de police du quartier. Dans la matinée d'hier, le chef du campement, M. Picard, a été agressé au poste par dix-sept ouvriers mutinés.",
      "Après une altercation, ils s'étaient emparés de lui et l'avaient ligoté. M. N. a pénétré dans le campement et a délivré le prisonnier, mettant fin à cette mutinerie complexifiée par la barrière de la langue."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "Autour de Paris : Agressions et Faits Divers",
    "summary": "Série d'agressions et de troubles dans la périphérie parisienne : coups et blessures à Suresnes, tentative de meurtre à Clichy, bagarres à la Place des Fêtes, à Pantin et à Aubervilliers.",
    "paragraphs": [
      "Suresnes : Un ouvrier mécanicien, Eugène, âgé de trente-cinq ans, a été attaqué par deux hommes qui l'ont roué de coups de bâton et l'ont laissé inanimé après lui avoir brisé la jambe droite. Son état est jugé alarmant.",
      "Clichy : Une tentative de meurtre a eu lieu hier soir. Bodier, marchand ambulant, a frappé sa maîtresse, Malvina Briquay, d'un coup de couteau au cou. Le magistrat a ordonné l'arrestation de Bodier.",
      "Place des Fêtes : Au cours d'une bagarre, l'agent Heurteau a été blessé à la main. Les agresseurs, nommés Chapillot et Trièbes, ont été arrêtés.",
      "Pantin : Joseph Grundhber, vingt ans, sujet à des accès de fureur alcoolique, a été appréhendé après avoir fait usage de son arme sur ses voisins. Un ouvrier couvreur, Jean Plammand, et une employée, Mlle Marie Grenier, ont été blessés.",
      "Aubervilliers : Une violente bagarre a éclaté rue de Solférino. Le gardien Laurons a été blessé par un rôdeur nommé Henri Dumont, qui tirait des coups de revolver. Dumont et deux acolytes ont été arrêtés."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Feuilleton",
    "title": "Deux Passions - Vie perdue",
    "summary": "Gabrielle confie à l'avocat le dévouement qu'elle porte à Valentine et dénonce la machination de Dufresne, qui tente de manipuler la jeune femme sous couvert d'une réconciliation feinte.",
    "paragraphs": [
      "Gabrielle ajouta : « Vous comprenez que j'étais dirigée par un seul mobile, mon affection pour Valentine. Vous ne sauriez vous figurer à quel point elle est faite pour être aimée. »",
      "Gabrielle discute avec l'avocat des lettres de Dufresne, qualifiées de compromettantes. Elles révèlent une machination visant à endormir la méfiance de Valentine tout en paraissant réconcilié avec elle, incluant des instructions pour brûler les preuves.",
      "L'avocat exprime son fatalisme face à cette situation, doutant que le mariage puisse être empêché malgré leurs vives inquiétudes."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Sports",
    "title": "Actualités Sportives : Cyclisme, Football et Escrime",
    "summary": "Le point sur les actualités sportives : réunions des syndicats automobiles, calendrier de la course Paris-Roubaix, championnat de football parisien et assaut d'escrime annuel.",
    "paragraphs": [
      "L'Union des conducteurs d'automobiles se réunit en chambre syndicale.",
      "Course Paris-Roubaix : La liste des engagements pour les motocycles et bicyclettes est ouverte jusqu'au 9 avril.",
      "Football : Le Stade Français et le Racing Club de France se rencontreront dimanche prochain pour décider du champion parisien.",
      "Escrime : La salle Berges donnera son assaut annuel le 16 mars à la salle des Agriculteurs."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Courrier des Théâtres",
    "title": "Programmes des spectacles",
    "summary": "Le programme théâtral parisien est marqué par la première de « L'Aiglon » de M. Edmond Rostand au Théâtre Sarah-Bernhardt et la préparation de la reprise de « Véronique » aux Bouffes-Parisiens.",
    "paragraphs": [
      "Théâtre Sarah-Bernhardt : Première représentation de « L'Aiglon » de M. Edmond Rostand.",
      "Autres représentations : La Comédie-Française, l'Odéon, le Châtelet et le Nouveau-Théâtre proposent divers spectacles et concerts.",
      "Les Bouffes-Parisiens font relâche pour préparer la reprise de « Véronique » d'André Messager."
    ]
  },
  {
    "id": 29,
    "page": 4,
    "category": "Faits Divers - Témoignage médical",
    "title": "Un cas de guérison grâce au Charbon de Belloc",
    "summary": "Mme Marie Pellerin, éprouvée par des troubles gastriques sévères liés à l'anxiété, témoigne de sa guérison complète et du retour de sa santé grâce à l'usage du Charbon de Belloc.",
    "paragraphs": [
      "Madame Pellerin, âgée de cinquante-deux ans, se trouvant séparée de sa famille, éprouva de vives inquiétudes sur le sort de son fils qui faisait partie de l'expédition de Madagascar. Bientôt, elle tomba malade.",
      "« Je perdis bientôt l'appétit, écrivait-elle, je ne pouvais rien digérer. Après le plus léger repas, j'étais prise de maux de tête et je sentais un gonflement à l'estomac. Tantôt j'avais des vomissements, tantôt des crampes d'estomac qui me faisaient atrocement souffrir. »",
      "« Ne pouvant plus digérer, je ne tardai pas à tomber dans une faiblesse extrême. Aussi, je maigris rapidement et je fus prise d'une profonde mélancolie. »",
      "« Une amie m'ayant parlé des effets merveilleux obtenus dans les maladies de l'estomac par l'emploi du Charbon de Belloc, je me décidai de suite à en essayer. Je pris deux cuillerées à bouche de poudre après chaque repas. »",
      "Quatre jours plus tard, je ne ressentais plus d'oppression ni de pesanteur après mes repas. Je digérais parfaitement les viandes rôties.",
      "Bientôt, je retrouvai un vif appétit ; au lieu de maigrir, je repris du corps et revins peu à peu à ma grosseur habituelle. La gaieté succéda à la tristesse. Au bout d'une dizaine de jours de traitement, j'étais parfaitement guérie.",
      "Depuis lors, je n'ai jamais eu ni vomissements ni crampes. Ma confiance en ce remède est absolue. Signé : Marie Pellerin. Argenton (Creuse), le 3 février."
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Chronique Littéraire / Roman-feuilleton",
    "title": "Le dialogue entre Paul Tavernier et Georges Dufresne",
    "summary": "Georges Dufresne rend visite à l'avocat Paul Tavernier pour tenter une réconciliation. Une conversation s'engage sur leurs passés respectifs et sur la place de Suzanne.",
    "paragraphs": [
      "Et dès qu'il fut dans le cabinet de l'avocat : « Mon cher Paul, commença-t-il, je viens faire amende honorable. J'ai réfléchi depuis notre entretien de là-bas, un soir, à l'Orfrasière. Tu as raison de me haïr parce que je suis un être haïssable, mais nous ne pouvons pas rester deux étrangers l'un pour l'autre après avoir vécu si longtemps dans l'intimité. J'ai eu des torts et je les reconnais, des torts graves. »",
      "Paul Tavernier s'était adossé à la cheminée et il écoutait avec une véritable stupeur cette confession, en se demandant si elle était sincère. Il ne répondit pas d'abord, et pourtant il éprouvait une satisfaction du retour de ce camarade détesté, au moment où il se trouvait en proie à la mélancolie qui torture parfois si durement ceux que les hasards de la naissance condamnent aux misères de l'isolement.",
      "À la fin, Paul Tavernier dit : « Reste. Veux-tu déjeuner avec moi très modestement ? »",
      "Le déjeuner des deux compagnons s'achevait et la mère Antoine venait de servir le café et s'était retirée, lorsque Paul Tavernier demanda : « Et Suzanne ? »",
      "Alors seulement, la figure de Georges Dufresne s'éclaira. L'avocat reprit : « Vous vous voyez donc ? »",
      "« Quelquefois. »",
      "« Alors tu n'as pas tout perdu puisqu'elle te reste. Elle est reconnaissante sans doute de ce que tu as fait, car c'est pour elle que tu as désorganisé ton existence qui eût pu être si belle. C'est vrai, tu as renoncé à une fortune superbe, à une femme qui t'aimait ton pesant d'or... »",
      "Dufresne déclara vivement : « Mille raisons... »",
      "La principale était que, de ses fenêtres, il découvrait au loin, sur la Seine, l'endroit qu'il avait désigné un jour comme le lieu du désastre, entre l'Ermitage et Etelan."
    ]
  }
];
