// Date: 1900-04-12
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-04-12 (Version Restaurée, 32 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Marine",
    "title": "Héroïsme des marins républicains",
    "summary": "Hommage aux marins de la République, des officiers du Citoyen aux héros du vaisseau Le Vengeur, dont le sacrifice et la bravoure demeurent gravés dans la mémoire nationale au Panthéon.",
    "paragraphs": [
      "Lorsque je faisais, il y a quelques jours, l'histoire de notre ancienne marine et que je rappelais les hauts faits des marins d'autrefois, j'avais indiqué rapidement que leurs descendants n'avaient pas dégénéré et qu'après les hardis officiers ou soldats de la marine royale, il y avait lieu de louer aussi les marins de la République.",
      "C'est d'abord à un navire de Marseille que nous rendrons hommage. Il s'appelait le Citoyen. Sorti depuis six semaines du port de Marseille, le capitaine Henry Mordeille ignorait que les hostilités eussent éclaté entre la France et la cour de Madrid.",
      "Le capitaine marseillais conçut alors le projet de s'évader et de s'emparer du navire même qui avait interrompu sa croisière. Le capitaine Mordeille et ses intrépides compagnons reçurent les félicitations du corps entier de la Marine.",
      "Je préfère m'arrêter à l'exploit du capitaine Charabot, qui rappelle ce qu'offre de plus merveilleux l'histoire presque incroyable des flibustiers. La Mouraille, brick de douze canons commandé par ce brave officier, fut assailli dans le golfe du Lion par un ouragan terrible.",
      "J'ai voulu surtout, dans ce rapide résumé, faire revivre le souvenir de quelques marins aujourd'hui oubliés qui avaient, à leur heure, maintenu la renommée d'héroïsme de notre flotte.",
      "Il n'est pas un bon Français qui ne connaisse le sublime dévouement des marins républicains qui montaient le vaisseau le Vengeur. La Convention fit donner l'ordre à la flotte de Brest d'aller au-devant d'un convoi de subsistances attendu des États-Unis.",
      "Pendant ce temps, après une lutte semblable, le Vengeur, envahi par les eaux, coulait. Les couleurs nationales et le pavillon bleu sont cloués à ce bâton d'honneur. Alors tous ces braves combattants, blessés, mourants, se raniment dans cet instant suprême et crient : Vive la République !",
      "La Convention vota un décret au terme duquel, une forme du vaisseau de ligne le Vengeur étant suspendue à la voûte du monument national, les noms des braves républicains composant l'équipage seraient inscrits sur les colonnes du Panthéon."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "La mort mystérieuse",
    "summary": "L'enquête sur le décès du duc d'Argile progresse : le juge d'instruction et le commissaire Castéran écartent la thèse du vol, orientant leurs recherches vers les mystérieuses relations étrangères du défunt.",
    "paragraphs": [
      "On envoya chercher le commissaire, qui, au rez-de-chaussée, se livrait de son côté à des enquêtes et à des interrogatoires ; puis l'on pénétra dans la magnifique pièce où, maintenant, le duc d'Argile dormait son dernier sommeil, sous la garde du vieux curé Casta.",
      "Le juge d'instruction examina la table de nuit, où l'on voyait un livre commencé et la montre du mort attachée à une gourmette. M. de Précomtal, maniaque et curieux, pressa sur le ressort d'un médaillon d'or, révélant le portrait d'une femme à la distinction suprême et celui d'un enfant au regard volontaire.",
      "M. Castéran, le commissaire, observa le portefeuille resté sur place et les billets de banque, concluant que le vol n'avait pas été le mobile du crime. On interrogea Gustave, le domestique, sur les habitudes du duc, notamment sur les lettres reçues de New-York et de Lima qui semblaient provoquer chez lui une joie intense."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Faits Divers",
    "title": "L'attentat contre le Prince de Galles",
    "summary": "À Bruxelles, l'inculpé Sipido a reconstitué l'attentat contre le prince de Galles sous le regard des autorités. L'enquête se poursuit concernant le rôle de Meerts, suspecté d'avoir assisté l'accusé.",
    "paragraphs": [
      "On a reconstitué cet après-midi, à la gare du Nord de Bruxelles, la scène de l'attentat contre le prince de Galles. L'inculpé Sipido a fait le simulacre de l'attentat ; il s'est hissé sur le marchepied et a montré comment il avait tiré.",
      "Sipido a déclaré qu'il avait tiré au hasard. La chambre du conseil a confirmé ce matin le mandat d'arrêt décerné contre Meerts, qui avait montré à l'accusé le maniement du revolver."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Social",
    "title": "La grève de Carmaux",
    "summary": "Malgré quelques rixes isolées, la grève de Carmaux montre des signes d'apaisement ce matin. Plus de 1 400 ouvriers ont repris le travail dans le calme, marquant une nette amélioration de la situation.",
    "paragraphs": [
      "Quelques rixes entre grévistes et non-grévistes ont eu lieu, à la suite desquelles la gendarmerie a arrêté un jeune homme et une femme. On signale également quelques mouvements à Monestier.",
      "Ce matin, la rentrée des ouvriers s'est opérée sans incident. La compagnie a enregistré 1 417 entrées. Le calme est complet."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Chronique Politique",
    "title": "La France Républicaine",
    "summary": "Le ministère Waldeck-Rousseau sort consolidé d'une épreuve parlementaire. La France, apaisée, se tourne avec confiance vers l'ouverture prochaine de l'Exposition universelle.",
    "paragraphs": [
      "Les adversaires du ministère ont voulu lui livrer une dernière bataille, et ils n'ont réussi qu'à fournir au président du Conseil un nouveau succès, puisque la Chambre a voté l'affichage de son éloquent discours.",
      "En récapitulant l'œuvre accomplie, M. Waldeck-Rousseau a pu dire, à juste titre, qu'il revendiquait l'héritage de la France libérale et républicaine. La paix morale a été reconquise et l'Exposition va s'ouvrir dans des conditions de tranquillité parfaite."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Une affaire d'espionnage",
    "summary": "Léon Gaget, ancien employé financier, est arrêté pour espionnage après l'interception d'une lettre compromettante venant de Berlin révélant des informations sur la défense nationale.",
    "paragraphs": [
      "Le service de la sûreté a arrêté, sous l'inculpation d'espionnage, un nommé Léon Gaget, ancien employé d'un établissement financier. Les circonstances de la découverte sont singulières : une lettre insuffisamment affranchie provenant de Berlin et refusée par le destinataire a révélé, après ouverture par les services des postes, des faits intéressant la défense nationale.",
      "Lors des perquisitions, les autorités ont découvert de nombreuses lettres émanant de puissances étrangères sollicitant des documents, ainsi qu'un alphabet conventionnel. Gaget prétendait n'avoir agi que par jeu et pour obtenir de l'argent."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Guerre",
    "title": "Le conflit anglo-boer",
    "summary": "Le conflit s'intensifie avec les succès du général de Wet. Lord Roberts reste immobilisé à Bloemfontein, tandis que la mort du comte de Villebois-Mareuil, tué près de Boshof, suscite une vive émotion.",
    "paragraphs": [
      "Depuis la désastreuse surprise de Bushman's-Kop, la série des revers anglais se poursuit sans interruption. Hier, le général de Wet, à la tête de sa colonne volante, a surpris les Britanniques à Meerkatsfontein, leur infligeant des pertes sévères et faisant de nombreux prisonniers.",
      "Le War Office à Londres tente de démentir ces nouvelles malgré l'inquiétude grandissante de l'opinion. Lord Roberts, à Bloemfontein, demeure immobilisé et s'efforce de réorganiser son état-major éprouvé.",
      "Le comte de Villebois-Mareuil est mort au combat, tué près de Boshof, et a été enterré avec les honneurs militaires. Le gouvernement du Transvaal a transmis ses condoléances à sa famille."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Nécrologie et Hommages",
    "title": "Hommages au colonel de Villebois-Mareuil",
    "summary": "Face aux volontés de sobriété du général de Villebois-Mareuil, la Ligue de la Patrie française organise un service solennel à Notre-Dame, soulignant le caractère non politique de cet hommage.",
    "paragraphs": [
      "Le comte de Villebois-Mareuil a fait connaître les dernières volontés de son frère, le général, qui souhaitait une sépulture simple et sans faste. Toutefois, la Ligue de la Patrie française a pris l'initiative d'organiser un service solennel à Notre-Dame.",
      "Le journal La Liberté précise que la souscription ouverte pour élever un monument à la mémoire du colonel n'a aucun caractère politique. M. Christian de Villebois-Mareuil, dans une lettre au directeur du journal, a confirmé que son frère plaçait l'unité morale du pays au-dessus des partis."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Chronique Politique",
    "title": "Séance de la Chambre des Députés du 11 avril",
    "summary": "Lors d'une séance houleuse dédiée au budget, M. Waldeck-Rousseau a défendu la politique du cabinet contre les critiques de M. Denys Cochin, obtenant le soutien de la majorité parlementaire.",
    "paragraphs": [
      "La Chambre a abordé la discussion du budget. M. Denys Cochin a interpellé le gouvernement sur ses allures dictatoriales et son alliance avec les éléments collectivistes. M. Waldeck-Rousseau a défendu son action au nom des principes républicains.",
      "La majorité a marqué sa confiance dans le cabinet par le vote de l'affichage du discours du président du Conseil. La séance a également vu l'adoption d'un crédit pour des travaux au port du Havre."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Questions parlementaires",
    "title": "Question au ministre de la Guerre sur le décès du colonel de Villebois-Mareuil",
    "summary": "Interrogé sur la participation d'officiers aux obsèques de Villebois-Mareuil, le ministre de la Guerre, M. de Galliffet, a autorisé une assistance à titre individuel en hommage au défunt.",
    "paragraphs": [
      "M. Lesles a interrogé le ministre de la Guerre sur l'autorisation accordée aux officiers d'assister au service religieux célébré en l'honneur du colonel de Villebois-Mareuil.",
      "M. de Galliffet, ministre de la Guerre, a rendu hommage à la valeur intellectuelle et morale du défunt et a précisé qu'aucun obstacle ne sera opposé aux officiers souhaitant assister au service, à titre strictement individuel."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Faits Divers",
    "title": "Enquête sur l'incident au 1er Hussards",
    "summary": "M. Chauvin interroge le général de Galliffet sur un incident disciplinaire au sein du 1er Hussards. Une enquête complémentaire est ouverte pour faire toute la lumière sur ces nouveaux faits.",
    "paragraphs": [
      "M. Chauvin a questionné le général de Galliffet au sujet d'un incident survenu au 1er Hussards, où un maréchal des logis aurait frappé un jeune soldat.",
      "Le ministre a expliqué qu'il s'agissait d'un accident involontaire lors d'une correction de position, mais a annoncé qu'une enquête supplémentaire a été ordonnée suite à des faits nouveaux."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Chronique Politique",
    "title": "La neutralité au Mozambique",
    "summary": "La Chambre délibère sur la neutralité française concernant le transport de troupes anglaises par le chemin de fer de Beïra. M. Delcassé clarifie les obligations internationales de la France.",
    "paragraphs": [
      "La Chambre a discuté de la neutralité de la France face au transport de troupes anglaises par le chemin de fer de Beïra. M. Delcassé, ministre des Affaires étrangères, a réaffirmé que la France a proclamé sa neutralité, mais n'est pas tenue de garantir celle d'autrui."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Littérature et Théâtre",
    "title": "Première représentation du Juif polonais",
    "summary": "L'Opéra-Comique présente le drame d'Erckmann-Chatrian, « Le Juif polonais », mis en musique par Camille Erlanger. Une œuvre distinguée malgré des réserves sur le choix du sujet.",
    "paragraphs": [
      "Le Juif polonais, drame d'Erckmann-Chatrian adapté en opéra par MM. Cain et Adenis, sur une musique de M. Erlanger, a été joué pour la première fois à l'Opéra-Comique.",
      "Le compositeur Camille Erlanger a été salué comme un artiste délicat et distingué, bien que la critique émette des réserves sur la répétition des sujets dramatiques déjà connus."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Faits Divers",
    "title": "Le mystère de la villa des Sources",
    "summary": "L'enquête judiciaire sur le duc d'Argile progresse. Le juge Viguier recueille le témoignage crucial d'un bouvier, Pierre Labattut, qui pourrait confondre Michel Gérard.",
    "paragraphs": [
      "L'enquête sur l'affaire impliquant le duc d'Argile et M. Michel Gérard se poursuit. Le juge Viguier interroge Gustave, le valet de chambre, sur les allées et venues nocturnes du suspect.",
      "Le témoignage d'un bouvier nommé Pierre Labattut vient apporter de nouveaux éléments, décrivant un cavalier à l'allure folle qui pourrait être Michel Gérard s'enfuyant au lever du jour."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Social",
    "title": "Bulletin du travail : La durée du travail des femmes",
    "summary": "M. Millerand, ministre du Commerce, rejette la demande d'extension de la journée de travail des ouvrières à treize heures, confirmant la limite légale fixée à douze heures.",
    "paragraphs": [
      "Le ministre du Commerce, M. Millerand, a refusé la demande de la chambre syndicale de la confection d'augmenter la durée du travail des ouvrières à treize heures par jour, rappelant la volonté du législateur de limiter le travail à douze heures."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Faits Divers",
    "title": "Bagarre dans le quartier du Pont-de-Flandre",
    "summary": "Une patrouille de police a été violemment prise à partie par une bande de malfaiteurs dans le XIXe arrondissement. Malgré une fusillade nourrie, les agents ont réussi à appréhender deux individus.",
    "paragraphs": [
      "Une patrouille de police a été attaquée par une bande de malfaiteurs dans le dix-neuvième arrondissement, essuyant plus de vingt coups de revolver. Deux arrestations ont été effectuées à la suite de cet échange de tirs."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Social",
    "title": "L'Armée et l'Exposition",
    "summary": "Pour accélérer les préparatifs de l'Exposition universelle au Champ-de-Mars, des détachements de l'infanterie et du génie ont été réquisitionnés pour les travaux de déblaiement.",
    "paragraphs": [
      "Des soldats de l'infanterie et du génie ont été mis à contribution pour hâter les travaux de déblaiement et de nettoyage nécessaires à l'aménagement des sites de l'Exposition universelle au Champ-de-Mars."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Faits Divers",
    "title": "Accidents divers en banlieue",
    "summary": "Plusieurs accidents ont endeuillé la banlieue parisienne, incluant une collision de tramway à Boulogne, un accident du travail grave à Colombes et un drame mortel à Saint-Denis.",
    "paragraphs": [
      "Plusieurs accidents ont marqué la journée : un tramway a percuté une voiture à Boulogne, un ouvrier a été grièvement blessé lors d'un accident du travail à Colombes, et un drame à Saint-Denis a causé la mort d'un ouvrier à la suite d'une altercation."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Faits Divers",
    "title": "Agressions et arrestations",
    "summary": "Deux agressions violentes ont marqué l'actualité : le sauvetage d'un homme brûlé dans un incendie criminel et une agression au couteau ayant entraîné une mutilation à Mériel.",
    "paragraphs": [
      "Un individu, découvert étendu sur un four en feu, a été ranimé par la douleur que lui causaient diverses brûlures. On lui a immédiatement prodigué les soins nécessaires. Le coupable, gravement impliqué dans cet incendie, a été arrêté et conduit à la prison de la ville.",
      "À la suite d'une discussion, Florentine Chanoine, de passage à Mériel, a porté un coup de couteau au visage d'un nommé Louis, âgé de dix-neuf ans, et lui a tranché l'oreille. L'agresseuse a été arrêtée et conduite à la prison."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Faits Divers",
    "title": "Noyade à Neuilly-sur-Marne",
    "summary": "Un drame singulier s'est déroulé à Neuilly-sur-Marne : le nommé Philibert Joly a tenté de mettre fin à ses jours en s'allongeant volontairement dans les eaux peu profondes de la Marne.",
    "paragraphs": [
      "Le nommé Philibert Joly, manouvrier âgé de vingt-cinq ans et demeurant à Neuilly-sur-Marne, a tenté de se suicider en se jetant dans la Marne, dont la profondeur ne dépasse guère 80 centimètres. Le désespéré, ayant conservé ses facultés, s'est couché à plat ventre dans l'eau pour tenter d'accomplir son dessein funeste."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Faits Divers",
    "title": "Suicides en province",
    "summary": "À Clermont, un homme se suicide après l'annonce de sa faillite. À Chaumont-en-Vexin, une femme s'asphyxie dans sa chambre. Deux drames poignants qui attristent la chronique régionale.",
    "paragraphs": [
      "Clermont : On a repêché, dans la rivière de Breuil-le-Vert, le cadavre de M. Laville, âgé de cinquante-trois ans, domicilié dans cette commune, qui avait disparu le 31 mars dernier. Il s'était donné la mort en apprenant qu'il allait être déclaré en faillite.",
      "Mme Hioi, née Delaporte, âgée de trente-deux ans, ménagère à Chaumont-en-Vexin, s'est asphyxiée dans sa chambre en l'absence de son mari. Elle avait déjà tenté de mettre fin à ses jours il y a cinq ans."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident mortel à Nogent-le-Rotrou",
    "summary": "Un tragique accident domestique à Nogent-le-Rotrou : M. Paul Bretti, un journalier de soixante ans, a trouvé la mort après une chute accidentelle depuis son jardin situé en surplomb d'une route.",
    "paragraphs": [
      "M. Paul Bretti, âgé de soixante ans, journalier, travaillait dans son jardin lorsqu'il fit un faux mouvement et tomba d'une hauteur de plusieurs mètres sur la route située en contrebas. Dans sa chute, il se fractura le crâne. Transporté à son domicile, il expira au bout de quelques instants."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drame à Troyes",
    "summary": "Un différend amoureux tourne au drame à Troyes : après avoir été insultée et frappée par son ancien amant, une femme a abattu son agresseur à l'aide d'un revolver.",
    "paragraphs": [
      "Un scieur de bois nommé Marin, qui avait été délaissé par sa maîtresse, une femme nommée Estien, la rencontra, l'insulta et la frappa au visage. Furieuse, elle s'arma d'un revolver et tua net son agresseur."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Courrier des Théâtres",
    "title": "Activités et changements théâtraux",
    "summary": "Mouvements dans les théâtres parisiens : entre représentations prestigieuses, relâche pour les jours saints et changements de programmes, voici les dernières nouvelles des scènes de la capitale.",
    "paragraphs": [
      "M. et Mme Loubet ont assisté hier, à l'Opéra-Comique, à la représentation du Juif polonais.",
      "Le théâtre Cluny reprend ce soir la Marraine de Charley, comédie burlesque de MM. Ordonneau et Brandon Thomas.",
      "Le théâtre Français, l'Opéra-Comique et l'Opéra font relâche ce soir à l'occasion des jours saints.",
      "La première de « Les 12 », au Royal, annoncée pour ce soir, est renvoyée à samedi.",
      "La troupe du Gymnase va commencer à utiliser ses loisirs en allant jouer à Bruxelles, à partir du 1er mai, la Jeunesse de Louis, sous la direction de M. Guillaumet."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Concerts et divertissements",
    "title": "Programme des fêtes de Pâques",
    "summary": "Les lieux de divertissement parisiens adaptent leurs programmes pour les fêtes de Pâques, entre concerts symphoniques au Moulin-Rouge et soirées dansantes au bal Bullier.",
    "paragraphs": [
      "Le Casino de Paris restera ouvert demain soir. Un orchestre de cent musiciens viendra étoffer le programme.",
      "Au Moulin-Rouge, à l'occasion du vendredi saint, un concert instrumental, avec le concours de cinquante musiciens et dirigé par MM. Mabille et Gauwin, aura lieu dans la grande salle.",
      "Samedi prochain, dernière grande redoute de l'année avec le pimpant cortège de la Fête du Printemps.",
      "La direction de Bullier annonce pour ce soir, jeudi, une grande fête de nuit, et pour les samedi 14, dimanche 15 et lundi 16, des soirées dansantes."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Actualité littéraire",
    "title": "Le Supplément illustré et le journal L'Actualité",
    "summary": "Découvrez les gravures historiques du nouveau Supplément illustré et l'offre diversifiée du journal L'Actualité, alliant romans, portraits et caricatures pour dix centimes.",
    "paragraphs": [
      "Notre Supplément illustré en couleurs contient cette semaine trois magnifiques gravures : « Une victoire française », « La prise d'Ispahan », et divers événements marquants de la semaine.",
      "Le journal L'Actualité propose de nombreuses attractions, des portraits, des caricatures, deux grands romans, dont celui de Pierre Sales, ainsi que des nouvelles, le tout pour dix centimes le numéro."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "La Vie au Grand Air",
    "title": "Match international de Rugby",
    "summary": "Le Racing-Club de France affrontera l'équipe anglaise du Broughton Park F. C., championne de Manchester, le lundi de Pâques à Levallois-Perret.",
    "paragraphs": [
      "Le Racing-Club de France jouera le lundi de Pâques, à deux heures et demie de l'après-midi sur son terrain de la place Collanges, à Levallois-Perret, un grand match international de football-Rugby contre la redoutable équipe anglaise du Broughton Park F. C., championne de Manchester."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Feuilleton",
    "title": "Deux Passions - Vie perdue",
    "summary": "Récit poignant des derniers instants d'un malade, entouré par sa dévouée gardienne et ses amis, après deux mois de vaines espérances.",
    "paragraphs": [
      "Marie distrayait son malade en lui donnant des détails intéressants sur tout ce qui se passait autour de lui. Cependant, tous les soins ne purent empêcher le destin de suivre son cours.",
      "Il expira en tenant entre ses mains les deux mains de sa gardienne. Après deux mois de souffrances, il s'éteignit au milieu de ses amis."
    ]
  },
  {
    "id": 29,
    "page": 4,
    "category": "Éditorial",
    "title": "La marche du progrès humain",
    "summary": "Une réflexion philosophique sur la quête incessante du progrès humain, portée par le sacrifice héroïque de ceux qui explorent l'inconnu pour le bonheur universel.",
    "paragraphs": [
      "Tant d'astres qui naissent à chaque instant viennent scintiller au-dessus de l'humanité et chasser les ténèbres de l'ignorance des hommes ! Chaque heure apporte un complément aux connaissances acquises et, pendant que les uns, cloîtrés dans le recueillement des laboratoires, cherchent, trouvent et perfectionnent, d'autres s'élancent courageusement en ballons ou en traîneaux, à la conquête des promontoires de glace et des déserts brûlants, ces repaires de la Nature inexplorée.",
      "Un vaillant parmi les vaillants tombe foudroyé au champ de gloire, tué par un microbe d'une épouvantable maladie dont il cherchait le remède. Dix le remplacent ! Une caravane est attaquée ; des héros sont égorgés par des lâches, avec une admirable abnégation, une expédition nouvelle reprend la route dangereuse. Devant tous ces courages admirables, devant ces vies nombreuses sacrifiées noblement pour le bien et le bonheur des hommes, on sent au-dessus des querelles humaines passer un souffle formidable de progrès, que rien n'arrêtera désormais, et qui assurera enfin, sans effusions meurtrières, le bonheur idéal universel."
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Chronique scientifique",
    "title": "Le Phonographe, prodige du siècle",
    "summary": "Véritable merveille technologique du siècle, le phonographe se démocratise et permet désormais de conserver les voix chères et les chefs-d'œuvre musicaux au sein même du foyer.",
    "paragraphs": [
      "S'élevant pour ainsi dire au rang d'un créateur, l'homme a pris de la matière : du fer, de la cire, de la terre, et de ces choses inertes il a fait une machine qui parle, qui chante, qui rit, et qui gazouille, une machine qui conserve à jamais les sons qui nous sont chers, depuis les petits cris du bébé joyeux jusqu'aux paroles graves de l'aïeul qui nous quitte ! En un mot, le phonographe est enfin perfectionné, simplifié et passe dans le domaine de la pratique.",
      "Invention merveilleuse, appareil sublime, talisman précieux, peut-on savoir où tu puises ton pouvoir enchanteur ? Demandez donc à une mère ce qu'elle donnerait pour pouvoir entendre encore les premières chansons de son fils chéri, lui qui songe maintenant au mariage ! Ah, qu'il marche donc vite ce temps implacable ; aussi est-il bien doux de lui arracher en passant quelques souvenirs qui rappelleront éternellement les jeunes et belles années.",
      "Et durant les longs soirs d'hiver et durant les jours noirs de pluie, l'été à la campagne ou à la mer, quel plaisir délicat de pouvoir, chez soi, au gré de ses désirs, comme si on possédait les pouvoirs magiques d'une fée toute puissante, donner à sa famille et à ses amis l'audition d'un concert superbe dans lequel se produiront les plus grands artistes de l'époque.",
      "On apporte le nouvel appareil, superbe en sa boîte d'ébénisterie fine, rehaussée de filets d'or ; on dresse le pavillon de cristal fin, aux reflets d'opale précieuse ; un tour de clef, et aussitôt, claironnante et grave, éclate la Marche d'Aïda. Chacun est émerveillé ; on crie : « Bis ! Encore ! ». Voici maintenant la voix chaude de M. Fournets, de l'Opéra, qui chante la Sérénade de Faust, puis nous entendons la charmante romance chantée par M. Mercadier.",
      "Voici encore le grand air des Huguenots, chanté de façon saisissante. Dieu que c'est beau ! On se croirait positivement au Grand Opéra, l'illusion est complète ! Voici la célèbre valse du ballet de Vilia, exécutée par l'orchestre Colonne. Attention, voici un intermède très sérieux. L'appareil redit la voix du bébé à qui on a fait chanter : « Il était une bergère ». Oh ! oh ! bébé s'est trompé au milieu de sa chanson. Mignon chéri, que nous t'aimons ainsi, avec tes gaucheries adorables et charmantes ! Voici encore de bien délicieuses choses.",
      "L'heure s'avance, on écoute et on ne se lasse jamais. Mais que coûte donc cette machine surnaturelle si belle, si riche, si perfectionnée ? Presque rien. Autrefois, il y a quelques mois encore, le phonographe d'un prix inabordable était réservé aux gens riches ; aujourd'hui, grâce aux derniers perfectionnements, l'appareil le plus beau, le plus parfait est accessible à tous."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Santé",
    "title": "Les remèdes phéniqués de Vial",
    "summary": "Le sirop et la pâte phéniqués de Vial constituent des remèdes souverains contre les affections pulmonaires, les toux persistantes, les bronchites et la grippe.",
    "paragraphs": [
      "Le sirop phéniqué de Vial combat avec efficacité les microbes et les germes des maladies de poitrine ; il réussit merveilleusement dans les cas de toux, rhumes, catarrhes, bronchites, grippe, enrouements et influenza. La pâte phéniquée de Vial possède les mêmes propriétés thérapeutiques.",
      "Dépôt : Pharmacie Vial, rue Bourdillon."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "État civil et recherches",
    "title": "Recherches de familles",
    "summary": "Avis de recherche concernant la famille Chopart-Sablé à Paris et une requête adressée à M. Logis, invité à prendre contact avec son notaire en Haute-Saône.",
    "paragraphs": [
      "M. Brosser, demeurant rue Favart à Paris, recherche les enfants ou petits-enfants de Pierre Chopart et de Gertrude Sablé, ayant habité ou habitant actuellement Paris.",
      "M. Logis, ayant autrefois demeuré à Helfaut-le-Marn, est instamment prié de s'adresser à M. Colin, notaire à Faverney (Haute-Saône)."
    ]
  }
];
