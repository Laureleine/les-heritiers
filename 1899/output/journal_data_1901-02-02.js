// Date: 1901-02-02
// Restauration Pass: 2
// Base de données complète des articles de presse du 1901-02-02 (Version Restaurée, 48 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Annonce Éditoriale",
    "title": "Publication du roman Miss Tempête",
    "summary": "Le Petit Parisien annonce le début, dès ce dimanche 3 février, de la publication de \"Miss Tempête\", le nouveau roman dramatique de Paul Bertnay, auteur déjà reconnu par nos lecteurs.",
    "paragraphs": [
      "Le Petit Parisien commencera demain, dimanche 3 février, la publication de Miss Tempête, grand roman inédit par Paul Bertnay.",
      "Miss Tempête est l'étude très dramatique des suites d'une faute retombant sur un innocent. Le roman est traversé par des figures de femmes qui y apportent l'amour, la passion, la tendresse et enfin le dévouement héroïque.",
      "Nos lecteurs, et surtout nos lectrices, ont appris à apprécier le vigoureux talent de Paul Bertnay. Ils vont trouver dans Miss Tempête les qualités qui distinguent l'éminent auteur d'Orphelins d'Alsace, Sacrifice d'Amour, Celle qu'on aime, Mariage secret, etc."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Chronique",
    "title": "Vieilles Coutumes Anglaises : Autour du cercueil de la reine Victoria",
    "summary": "Une évocation des rites séculaires et de la pompe officielle qui entourent la monarchie britannique, rappelant combien la reine Victoria, malgré son rang, fut peu à l'aise avec ces lourds cérémoniaux.",
    "paragraphs": [
      "Londres voit revivre en ce moment des coutumes datant de plusieurs siècles. C'est tout un cérémonial dont la description ferait croire que, pour quelques jours, la capitale de l'Angleterre est redevenue une cité du Moyen Âge.",
      "La perruque joue un grand rôle en Angleterre. Ce ne sont pas seulement les évêques qui la portent ; juges et avocats doivent aussi s'en couvrir le chef.",
      "La reine Victoria eut surtout à souffrir du cérémonial le jour de son couronnement. Elle n'avait que dix-sept ans et dut porter un manteau de drap d'or d'un poids extraordinaire sous une accablante chaleur.",
      "Si l'on parcourt la liste des dignitaires de la Cour que Victoria payait sur sa liste civile, on trouve une série de fonctions vraiment stupéfiantes, comme celle de \"chevalier royal\" ou de \"grand fauconnier\".",
      "Le vieux français des Normands est encore parfois employé en Angleterre. Il a fourni la fameuse devise \"Honni soit qui mal y pense\" et \"Dieu et mon droit\".",
      "Tous les biographes de la reine Victoria sont unanimes à déclarer qu'elle ne s'était jamais faite à cette pompe officielle d'un autre âge."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Nouvelles Coloniales",
    "title": "Les mitrailleuses dans l'armée coloniale",
    "summary": "L'armée coloniale française s'apprête à adopter la mitrailleuse Hotchkiss, suite à des essais concluants à Querqueville, pour renforcer la sécurité de nos possessions en Indochine.",
    "paragraphs": [
      "À la suite des expériences comparatives de tirs qui viennent d'avoir lieu au polygone de Querqueville entre la mitrailleuse Hotchkiss et une section de cinquante tireurs de l'infanterie coloniale, nous croyons pouvoir affirmer que l'armée coloniale attend très prochainement la mise en service de cet armement.",
      "La situation inquiétante de nos possessions au nord de l'Indo-Chine prête une importance toute particulière à un armement qui renforce notre corps d'occupation sans grande dépense."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Faits Divers",
    "title": "Les Frères Ennemis à Doué-la-Fontaine",
    "summary": "Un drame familial a éclaté à Doué-la-Fontaine : un journalier a gravement blessé son frère aîné d'un coup de couteau suite à une dispute concernant des questions d'argent.",
    "paragraphs": [
      "À Doué-la-Fontaine, dans l'arrondissement de Saumur, habitent deux frères, les nommés Goupil, journaliers. Le plus jeune, François, âgé de trente-sept ans, s'était installé chez son aîné pour vivre à ses dépens.",
      "Hier, l'aîné réclama au cadet une somme d'argent destinée à des provisions. Rendu furieux, François s'arma d'un couteau et porta un coup terrible à son frère à l'aisselle gauche. Le meurtrier a été arrêté et sa victime admise d'urgence à l'hôpital."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Le drame de Villemaur",
    "summary": "À Villemaur, un homme en état d'ivresse a agressé son beau-père à l'arme blanche. Après une vive résistance opposée aux autorités locales, l'individu a été appréhendé par la force publique.",
    "paragraphs": [
      "Voici des détails complémentaires au sujet du drame qui a jeté l'émoi dans le hameau des Bordes, commune de Villemaur. Odin, un homme s'adonnant depuis longtemps à la boisson, a agressé son beau-père, M. Marnet, qui s'efforçait de l'éviter.",
      "L'alcoolique se rua sur lui, un couteau à la main, et le frappa au centre. La victime a été transportée chez son beau-frère. Après une résistance acharnée contre le maire et le garde-champêtre, le forcené a été arrêté. La blessure de M. Marnet paraît être moins grave qu'on ne l'avait cru tout d'abord."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Politique Étrangère",
    "title": "La mort de Li-Hung-Chang",
    "summary": "Li-Hung-Chang, figure majeure de la Chine contemporaine, s'est éteint à l'âge de soixante-dix-huit ans. Sa disparition, déplorée par les milieux diplomatiques, ne devrait toutefois pas entraver les négociations en cours.",
    "paragraphs": [
      "D'après une dépêche reçue hier, Li-Hung-Chang aurait succombé à la maladie dont il avait été atteint il y a quelques semaines. On ne croit pas que la disparition de cet éminent homme d'État chinois ait une influence défavorable sur les négociations en cours.",
      "Li-Hung-Chang, qui vient de mourir à l'âge de soixante-dix-huit ans, était par excellence l'homme représentatif de la Chine contemporaine. Fonctionnaire et lettré, il avait successivement gravi tous les échelons de la hiérarchie céleste.",
      "D'une perspicacité diplomatique de premier ordre, Li fut également dans son pays un initiateur du progrès, exploitant les premières mines et construisant les premières voies ferrées."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Social",
    "title": "Le Métropolitain",
    "summary": "Au lendemain de la grève, le service du Métropolitain a repris une activité normale. Les employés ont regagné leurs postes dès l'aube, permettant une circulation sans incident pour le plus grand confort des Parisiens.",
    "paragraphs": [
      "Grâce à l'heureuse issue de la grève, les Parisiens ont pu voyager à loisir hier dans le Métropolitain. La Compagnie a pu donner satisfaction complète à sa nombreuse clientèle.",
      "À cinq heures et demie, les employés de toutes catégories étaient présents à leurs postes respectifs. Aucun incident n'a marqué cette première journée de travail."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Actualité",
    "title": "Les funérailles de la reine Victoria",
    "summary": "Les préparatifs des obsèques de la souveraine britannique se précisent, incluant un transfert solennel vers Windsor. Le cercueil royal, orné de ses insignes, sera escorté par un impressionnant convoi militaire et naval.",
    "paragraphs": [
      "Le programme des funérailles comprend quatre parties : à Osborne, la traversée de Cowes à Portsmouth, le convoi ferroviaire, et enfin la cérémonie religieuse à Windsor.",
      "Le Daily Mail rapporte que la reine a été revêtue après sa mort du costume royal avec toutes ses décorations nationales et étrangères.",
      "La flotte allemande a pris place à l'extrémité de la ligne, aux côtés des cuirassés de la flotte de la Manche."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Feuilleton",
    "title": "Les Sans-Familles : Marie Madeleine",
    "summary": "M. Turner, en quête d'une rédemption personnelle, a sollicité un entretien avec la baronne. Malgré la sincérité affichée de son interlocuteur, celle-ci reste hantée par le mystère entourant la disparition de sa fille.",
    "paragraphs": [
      "M. Turner se trouva seul en face de cette femme à qui il avait causé tant de souffrances. Il avait sollicité l'honneur de la voir pour exprimer son repentir.",
      "La baronne, écoutant cet homme qu'elle sentait sincère et grandi par sa fortune, s'interrogeait sur le sort de sa fille disparue, au cœur d'un mystère entretenu par sa tante d'Orvilliers."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Nécrologie",
    "title": "Funérailles de la Reine Victoria : Le départ d'Osborne",
    "summary": "Le cortège funèbre de la reine Victoria a quitté Osborne avec une solennité exemplaire. Le transfert du cercueil, déposé sur un affût de canon, a marqué le début d'un voyage officiel vers sa dernière demeure à Windsor.",
    "paragraphs": [
      "Suivant le programme, les Écossais de la maison de la reine sortent par la porte principale avec un canon attelé de huit chevaux. Une compagnie de grenadiers de la garde rend les honneurs militaires. Tous les assistants se découvrent dans un recueillement profond.",
      "Le roi, l'empereur, les princes et les princesses sortent immédiatement après le cercueil et suivent attentivement sa mise en place sur le canon. Aussitôt que le cortège se met en marche, le cercueil de la reine est recouvert d'un drap de satin blanc, les armes du Royaume-Uni étant brodées sur les coins.",
      "Le cortège s'avance à travers les jardins vers la porte royale, suivi par les domestiques des écuries, les autorités de l'île de Wight et les commandants supérieurs de l'armée et de la marine à Portsmouth.",
      "Le cortège arrive au quai d'embarquement. L'empereur et les princes embarquent rapidement sur un canot à vapeur pour regagner leurs yachts respectifs. À quatre heures vingt-cinq, le cercueil arrive à bord de l'Alberta."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Nécrologie",
    "title": "La phase navale des obsèques royales",
    "summary": "À Cowes, la phase navale des obsèques débute sous un soleil radieux. Le navire-amiral et les yachts royaux, escortés par l'Empereur d'Allemagne, escortent le cortège funèbre vers le port de Portsmouth.",
    "paragraphs": [
      "Cowes, 1er février. À trois heures, la scène change ; la phase navale commence. Aussitôt que le navire-amiral, dans les eaux de Cowes, donne le signal, une salve funèbre éclate et chaque navire répond immédiatement sur toute la ligne.",
      "L'Alberta s'avance majestueusement. Les yachts royaux, à bord desquels se trouvent le Roi et la Reine, l'Empereur d'Allemagne et les princes, prennent place derrière l'Alberta. Le spectacle est magnifique, le soleil radieux illuminant le détroit du Solent.",
      "Le cortège s'éloigne lentement vers Portsmouth où il arrivera avant cinq heures. Gosport, 1er février : Le yacht royal est arrivé à Gosport à 4 heures 15."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Actualités",
    "title": "L'arrivée à Portsmouth",
    "summary": "Le yacht Alberta entre dans l'arsenal de Portsmouth au son du canon et des marches funèbres. Les souverains et les équipages rendent un ultime hommage à la grande Reine.",
    "paragraphs": [
      "Portsmouth, 1er février. On aperçoit à l'horizon les cheminées jaunes et l'étendard en berne du yacht Alberta. La procession, qui dure près de deux heures, est d'un grand effet.",
      "Au moment où le yacht royal approche de chaque cuirassé, le canon tonne, l'équipage se déploie sur le pont et les musiques de bord entonnent une marche funèbre. Le cercueil est entouré de sentinelles. La grande Reine vient d'entrer pour la dernière fois dans son grand arsenal de Portsmouth."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Diplomatie",
    "title": "Arrivée des missions étrangères à Londres",
    "summary": "Les délégations étrangères affluent à Londres pour les obsèques royales. Le Tsarévitch, la mission hollandaise et le roi des Belges sont arrivés, tandis que les membres du Parlement partent pour Southampton.",
    "paragraphs": [
      "Londres, 1er février. Le Tsarévitch est arrivé à Londres par train spécial à neuf heures et demie du matin. Il a été reçu par Lord Suffield au nom du Roi.",
      "La mission représentant la Reine de Hollande a débarqué à Victoria. Le roi des Belges a quitté Douvres ce matin pour Gravesend. Quatre trains ont quitté Londres pour Southampton, emportant les membres du Parlement en grand deuil."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Politique",
    "title": "Ouverture du Parlement",
    "summary": "Selon les informations concordantes, le Roi Édouard VII a pris la décision d'ouvrir personnellement le Parlement le 14 février prochain, une cérémonie qui s'annonce, selon la presse, des plus brillantes.",
    "paragraphs": [
      "Londres, 1er février. On assure que le roi Édouard VII a décidé d'ouvrir en personne le Parlement, le 14 février prochain. Le Daily News précise que la cérémonie sera très brillante."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Religion",
    "title": "Service funèbre à Paris",
    "summary": "Le temple anglican de la rue d'Aguesseau organise deux services religieux aujourd'hui en mémoire de la souveraine défunte, avec une présence officielle marquée lors de la cérémonie matinale.",
    "paragraphs": [
      "Deux cérémonies funèbres auront lieu aujourd'hui au temple anglican de la rue d'Aguesseau. La première, à 11 heures, sera réservée aux personnages officiels. Le Président de la République y sera représenté.",
      "Le second service, public et libre, commencera à deux heures et demie. Un important service d'ordre a été organisé par les autorités pour réguler la circulation dans le quartier."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Faits Divers",
    "title": "L'armurier sauveur : Une tentative de meurtre à Lille",
    "summary": "À Lille, une femme exaltée par la jalousie tente d'abattre son mari. Grâce à la prudence de l'armurier qui avait chargé l'arme à blanc, le drame est évité. L'épouse a été arrêtée et placée sous les verrous.",
    "paragraphs": [
      "Lille, 1er février. Le 31 octobre dernier, Philippe Vandenbrouck épousait Mire Maerle. Le ménage fut rapidement troublé par l'excessive jalousie de la jeune femme. Se croyant trompée, elle acheta un revolver chez l'armurier M. Bonnet.",
      "Celui-ci, voyant l'état de surexcitation de sa cliente, eut la sagesse de ne charger le barillet qu'avec des cartouches à blanc. Hier, alors que son mari dormait, elle tira cinq coups à bout portant. Grâce à la précaution de l'armurier, le mari est sain et sauf. La femme a été arrêtée."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Guerre",
    "title": "Les opérations militaires en Afrique du Sud",
    "summary": "La résistance boër demeure vive malgré la reddition de l'ancien président Prétorius. La colonne Delisle engage de nouveaux combats à Clanwilliam, tandis que l'infanterie accélère sa progression par fourgons.",
    "paragraphs": [
      "Londres, 1er février. On mande de Pretoria qu'un combat a eu lieu près de Belfast dimanche dernier. L'ancien président Prétorius s'est rendu et conseille la paix, mais les Boërs demeurent déterminés à poursuivre la lutte.",
      "À Clanwilliam, la patrouille de la colonne Delisle a rencontré des commandos boërs. Des opérations sur une grande échelle vont être entreprises, avec un transport plus rapide de l'infanterie par des fourgons."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Faits Divers",
    "title": "Épouvantable panique à Elverdinghe",
    "summary": "Une explosion de lampe lors d'un concert à Elverdinghe a provoqué un incendie dévastateur. Une panique effroyable a saisi la foule cherchant à fuir, causant quinze blessés dont plusieurs graves brûlés.",
    "paragraphs": [
      "Bruxelles, 1er février. Lors d'un concert à la salle des Fêtes d'Elverdinghe, une lampe a explosé, propageant le pétrole enflammé et déclenchant un incendie. Une effroyable panique a saisi les spectateurs, qui se sont précipités vers une sortie étroite. Quinze personnes ont été blessées et plusieurs souffrent de graves brûlures."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Politique étrangère",
    "title": "Nouvelles d'Abyssinie",
    "summary": "L'empereur Ménélik s'apprête à quitter sa capitale pour aller au-devant des officiers anglo-égyptiens. Cette rencontre vise à établir officiellement la démarcation des frontières du Soudan.",
    "paragraphs": [
      "Londres, 1er février. Le correspondant du Standard à Berlin annonce que l'empereur Ménélik est sur le point de quitter sa capitale pour aller au-devant des officiers anglo-égyptiens, afin d'établir la démarcation des frontières du Soudan."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Faits Divers",
    "title": "Incendie à New-York",
    "summary": "Un violent incendie, causé par une explosion sur la première avenue à New-York, a ravagé de nombreux ateliers et habitations, causant d'immenses dégâts matériels et un bilan humain lourd.",
    "paragraphs": [
      "New-York, 1er février. Un violent incendie causé par une explosion a détruit plusieurs ateliers et maisons d'habitation dans la première avenue. Les pertes sont estimées à un million et demi de dollars et l'on déplore de nombreuses victimes."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Social",
    "title": "La lutte contre la tuberculose dans les postes",
    "summary": "M. Millerand, ministre du Commerce, impose des mesures sanitaires strictes, incluant l'usage de crachoirs et le lavage humide des locaux, pour endiguer la tuberculose parmi les 71 000 agents des postes et télégraphes.",
    "paragraphs": [
      "M. Millerand, ministre du Commerce, a pris des mesures énergiques pour enrayer les ravages de la tuberculose dans les locaux des postes et télégraphes. Un rapport circonstancié du docteur Mignot souligne, en effet, la fréquence alarmante de cette redoutable maladie parmi les 71 000 agents du service.",
      "Les mesures préconisées incluent l'instruction méthodique des employés sur les risques graves de contagion par les crachats, l'installation obligatoire de crachoirs hygiéniques et le remplacement systématique du balayage à sec par des lavages fréquents à l'eau."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Politique",
    "title": "Conseil des ministres et mouvement judiciaire",
    "summary": "Sous la présidence de M. Loubet à l'Élysée, le Conseil des ministres a examiné les budgets et validé un mouvement judiciaire important concernant les présidents de tribunaux et les conseillers à la cour.",
    "paragraphs": [
      "Les ministres se sont réunis hier matin à l'Élysée, sous la haute présidence de M. Loubet, afin de délibérer sur les questions budgétaires. Au cours de cette séance, le garde des Sceaux a fait signer un important mouvement judiciaire incluant diverses nominations de présidents de tribunaux et de conseillers à la cour."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Politique",
    "title": "Chambre des députés : Débat sur la Société des Prévoyants de l'Avenir",
    "summary": "La Chambre a débattu de la situation de la Société des Prévoyants de l'Avenir. M. Waldeck-Rousseau a sursis à un arrêté ministériel pour permettre une mise en conformité des statuts, malgré les vives contestations.",
    "paragraphs": [
      "La Chambre des députés a consacré une partie de sa séance à la discussion sur la situation de la Société des Prévoyants de l'Avenir. M. Waldeck-Rousseau a accepté de surseoir à l'exécution d'un arrêté ministériel, permettant ainsi à la société de réviser ses statuts afin de les mettre en parfaite conformité avec la loi.",
      "Cette décision a été accueillie favorablement, nonobstant des échanges particulièrement vifs qui ont marqué la tribune au sujet de la gestion financière des associations ouvrières."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "L'affaire Lemeur : Dépositions et enquête",
    "summary": "L'enquête sur l'affaire Lemeur progresse avec des témoignages accablants pour Nédélec. Entre dépositions contradictoires et zones d'ombre sur l'incendie, le mystère des traces suspectes demeure au cœur du débat.",
    "paragraphs": [
      "Le témoin M. Quantin, débitant à Bezons, a été interrogé sur la situation financière des époux Lemeur. Il a formellement réfuté les insinuations de Nédélec, affirmant sa propre innocence et l'absence totale de suspicion envers les victimes.",
      "Mme veuve Bourdelande, voisine des époux Lemeur, a témoigné avoir entendu la victime appeler désespérément au secours avant que le silence ne retombe, soulignant l'inaction manifeste de Nédélec face à ces cris.",
      "Les dépositions de Mlle Jeanne Poupet et de Mlle Louise Lemeur, ainsi que celle de l'huissier Tourneur, mettent sérieusement en doute la version de Nédélec sur les circonstances de l'incendie, notamment sur l'utilisation suspecte d'une pelle pour briser les carreaux.",
      "Une controverse demeure quant à la nature des traces découvertes près de la fenêtre : s'agit-il de gouttes de sang dues à une coupure accidentelle de l'accusé, ou d'empreintes de mains ensanglantées trahissant une intervention criminelle ?",
      "L'audience a été levée et renvoyée à aujourd'hui pour les dernières dépositions, le réquisitoire du ministère public et les plaidoiries de la défense."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Échos et Nouvelles",
    "title": "Mariages et décès",
    "summary": "Annonces de mariage pour M. Paul Deschanel, décès de l'écrivain Louis Noir et obsèques de M. J.-B. Rauber, figure de la propagation des langues étrangères.",
    "paragraphs": [
      "Le mariage de M. Paul Deschanel avec Mlle Brice sera célébré le 13 février à la mairie du sixième arrondissement, et le 16 à l'église de Saint-Germain-des-Prés.",
      "L'écrivain populaire Louis Noir, frère de Victor Noir, est décédé hier à Bois-le-Roi à l'âge de soixante-quatre ans.",
      "Les obsèques civiles de M. J.-B. Rauber, directeur-fondateur de la Société pour la propagation des langues étrangères en France, ont été célébrées au cimetière du Père-Lachaise."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Social",
    "title": "Le déclin de la natalité dans les campagnes anglaises",
    "summary": "Un recensement récent en Angleterre souligne un inquiétant déclin démographique des zones rurales, où l'exode des jeunes vers les centres industriels laisse les villages, tel Tilton, dépeuplés et vieillissants.",
    "paragraphs": [
      "Le récent recensement effectué en Angleterre met en lumière un abaissement significatif du chiffre des mariages dans les campagnes, entraînant une lente mais irrémédiable dépopulation.",
      "Le village de Tilton, autrefois fort peuplé, est cité comme un exemple frappant : ses fermes et ses cottages n'abritent plus désormais que des vieux ménages ou des célibataires, la jeunesse ayant émigré massivement vers les grands centres industriels comme Leicester."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Dernière Heure",
    "title": "Les événements de Chine",
    "summary": "Des nouvelles de Chine indiquent que l'impératrice regretterait les conditions de paix. Parallèlement, des rumeurs sur l'état de santé de Li-Hung-Chang sont formellement démenties par le tao-taï Chang.",
    "paragraphs": [
      "Selon des lettres émanant de mandarins, l'impératrice regretterait amèrement d'avoir accepté les conditions de paix imposées. Pendant ce temps, des rumeurs persistantes circulent sur l'état de santé de Li-Hung-Chang ; ces bruits sont toutefois affirmés comme étant dénués de fondement par le tao-taï Chang, qui assure que l'homme d'État est en parfaite santé."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "Mort mystérieuse à Boulogne-sur-Mer",
    "summary": "Le décès de Mme Hedin demeure une énigme judiciaire. Malgré les conclusions médicales, les circonstances suspectes entourant sa fortune laissent planer de fortes présomptions de crime crapuleux.",
    "paragraphs": [
      "La mort de Mme Hedin à Boulogne-sur-Mer continue de passionner vivement l'opinion publique. En dépit des conclusions rendues par le médecin légiste, les circonstances singulières du décès — notamment la mise en scène d'une bouteille d'eau-de-vie et la réception de titres financiers par un notaire — laissent entrevoir la possibilité d'un crime odieux motivé par la convoitise d'une fortune."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Justice",
    "title": "Procès des Prévoyants de l'Avenir",
    "summary": "La première chambre du tribunal civil de la Seine a été saisie du litige opposant M. Boutteville à la société de retraites des Prévoyants de l'Avenir au sujet de modifications statutaires complexes.",
    "paragraphs": [
      "La première chambre du tribunal civil de la Seine a examiné le procès intenté par M. Boutteville contre la société civile de retraites des Prévoyants de l'Avenir, concernant des modifications statutaires contestées ainsi qu'une demande de régularisation administrative."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Justice",
    "title": "Jugement sur le port de la soutane",
    "summary": "Le tribunal de l'Isle-Adam a annulé un arrêté municipal interdisant le port de la soutane, jugeant qu'il ne relève pas de la compétence des maires de légiférer sur l'habit ecclésiastique.",
    "paragraphs": [
      "Le tribunal de simple police de l'Isle-Adam a rendu un jugement en faveur de cinq prêtres poursuivis pour avoir bravé un arrêté municipal interdisant le port de la soutane. Le tribunal a déclaré cet arrêté illégal, estimant qu'un maire n'a nullement le pouvoir de légiférer sur l'habit ecclésiastique, lequel demeure régi par les lois générales de l'État."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Justice",
    "title": "Condamnation d'un ancien commissaire",
    "summary": "La huitième chambre du tribunal correctionnel a rendu son verdict : M. Caubauc-Marseille, ex-commissaire de police, est condamné à deux ans de prison pour abus de confiance.",
    "paragraphs": [
      "La huitième chambre du tribunal correctionnel a condamné hier M. Caubauc-Marseille, ancien commissaire de police, à deux ans de prison et 2 000 francs d'amende pour abus de confiance."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Littérature",
    "title": "Parutions et revues",
    "summary": "M. Jules Pouchan livre une étude remarquée sur les mœurs cévenoles, tandis que la Revue des Deux-Mondes propose un sommaire éclectique mêlant sujets historiques et enjeux scientifiques.",
    "paragraphs": [
      "M. Jules Pouchan vient de publier une étude fouillée sur les mœurs cévenoles à l'époque des Dragonnades.",
      "Par ailleurs, la Revue des Deux-Mondes propose un sommaire riche, abordant des questions d'ordre historique, religieux et scientifique."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Faits Divers",
    "title": "L'attentat contre M. Deschanel",
    "summary": "L'enquête sur l'attentat visant M. Émile Deschanel se poursuit. Le magistrat a entendu Mlle Alexandrine Zélénine à l'Hôtel-Dieu concernant les agissements suspects de Vera Gelo.",
    "paragraphs": [
      "Le juge d'instruction a procédé à l'interrogatoire de Mlle Alexandrine Zélénine à l'Hôtel-Dieu.",
      "La jeune blessée a pris la défense de son amie Vera Gelo, sans toutefois parvenir à éclaircir les mobiles profonds de l'animosité que cette dernière nourrissait à l'égard de M. Émile Deschanel."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Faits Divers",
    "title": "Disparition de M. Richard de Lavallée",
    "summary": "Le journaliste Richard de Lavallée, souffrant d'une paralysie cérébrale, est porté disparu depuis jeudi dernier. Son domicile est sis au 70, rue de l'Université.",
    "paragraphs": [
      "M. Richard de Lavallée, journaliste atteint d'une paralysie cérébrale, a disparu jeudi de son domicile situé au 70, rue de l'Université.",
      "Toute information relative à sa localisation peut être communiquée directement à cette adresse."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestation de voleurs de coffres-forts",
    "summary": "Deux malfaiteurs ont été appréhendés rue Bréda en possession d'un coffre-fort dérobé avenue du Maine. Paul Helrer figure parmi les suspects interpellés.",
    "paragraphs": [
      "Deux individus ont été arrêtés rue Bréda après avoir été surpris transportant un coffre-fort volé dans un appartement de l'avenue du Maine.",
      "Les malfrats étaient munis d'outils destinés au cambriolage. L'un des suspects, identifié sous le nom de Paul Helrer, a été écroué."
    ]
  },
  {
    "id": 36,
    "page": 3,
    "category": "Faits Divers",
    "title": "Éboulement sur la ligne de Ceinture",
    "summary": "Un affaissement de terrain spectaculaire sur la ligne de Ceinture entre Belleville-Villette et Ménilmontant, causé par l'effondrement d'une ancienne carrière, paralyse totalement le trafic ferroviaire local.",
    "paragraphs": [
      "Un affaissement de sol des plus inquiétants s'est produit sur la ligne de Ceinture, entre les stations de Belleville-Villette et de Ménilmontant. Ce sinistre, probablement dû à l'effondrement d'une ancienne carrière dont les galeries couraient sous l'assiette des voies, a nécessité une interruption immédiate et totale de la circulation ferroviaire sur ce tronçon."
    ]
  },
  {
    "id": 37,
    "page": 3,
    "category": "Actualité",
    "title": "Reprise des tramways à plots",
    "summary": "Après une interruption due au sel municipal et au dégel, le service des tramways à plots reprend normalement ce jour, suite à une intervention rigoureuse de maintenance sur les voies et les mécanismes.",
    "paragraphs": [
      "La circulation des tramways à plots, qui avait été gravement entravée par l'épandage de sel municipal et les dégâts causés par le dégel, reprendra son cours normal dès aujourd'hui. Les équipes techniques ont procédé à des réparations diligentes sur les plots de contact et à un nettoyage complet des voies pour assurer la sécurité des usagers."
    ]
  },
  {
    "id": 38,
    "page": 3,
    "category": "Faits Divers",
    "title": "Faits divers régionaux (Autour de Paris)",
    "summary": "Une sombre journée dans la banlieue parisienne, marquée par une série de drames : arrestations pour folie, découvertes macabres dans la Seine et sur le rail, et accidents tragiques à Suresnes et Saint-Denis.",
    "paragraphs": [
      "La banlieue parisienne a été le théâtre, aujourd'hui, de plusieurs événements tragiques. À Boulogne-sur-Seine, une femme, en proie à une vive folie des grandeurs, a dû être arrêtée. À Neuilly-sur-Seine, le corps sans vie d'un homme a été repêché dans les eaux de la Seine.",
      "À Levallois-Perret, le cadavre d'un nouveau-né a été découvert sur le talus du chemin de fer, jetant l'émoi dans la commune. À Suresnes, un enfant a été grièvement blessé lors d'une chute accidentelle survenue sur un quai. Enfin, à Saint-Denis, une tentative de cambriolage a été déjouée chez un mécanicien, tandis qu'un accident mortel était déploré au sein de l'hôpital de la ville."
    ]
  },
  {
    "id": 39,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incidents en banlieue",
    "summary": "Le bilan des faits divers s'alourdit en banlieue : agressions armées, suicides, décès accidentels sur les voies ferrées et vols en série occupent les rapports de police des communes environnantes.",
    "paragraphs": [
      "À Aubervilliers, une violente rixe entre ouvriers a entraîné une grave blessure à l'arme blanche. À Pantin, une domestique a mis fin à ses jours en se précipitant par une fenêtre. À Livry, un garde particulier a trouvé la mort accidentellement sur la voie ferrée.",
      "À Montreuil-sous-Bois, une bande de jeunes malfaiteurs a été appréhendée par les autorités. À Villejuif, une jeune domestique a été victime de brûlures graves. À Arpajon, un journalier a été retrouvé pendu. À Meudon, un voleur a été arrêté en flagrant délit. À Versailles, un homme d'équipe est décédé à la suite d'un accident survenu en gare. Un début d'incendie a, par ailleurs, été rapidement maîtrisé rue d'Anjou, à Paris."
    ]
  },
  {
    "id": 40,
    "page": 3,
    "category": "Économie",
    "title": "Bulletin du travail et grèves",
    "summary": "L'Office du travail dénombre 37 grèves pour le mois de décembre, principalement liées aux salaires, tout en soulevant la question délicate de la concurrence du travail pénitentiaire sur le marché libre.",
    "paragraphs": [
      "L'Office du travail a enregistré un total de 37 mouvements de grève pour le mois de décembre, des arrêts de travail motivés, dans la grande majorité des cas, par des revendications salariales. Le rapport officiel met également en exergue la question épineuse du travail pénitentiaire et les répercussions de cette main-d'œuvre sur la concurrence avec le travail libre."
    ]
  },
  {
    "id": 41,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incidents dans les départements",
    "summary": "Chroniques provinciales : entre tentatives de cambriolages à Crépy-en-Valois, accident industriel tragique à Roye et menaces armées à Nogent-le-Rotrou, la vie locale est marquée par une série d'événements funestes.",
    "paragraphs": [
      "Plusieurs tentatives de cambriolages ont été signalées à Crépy-en-Valois. Un accident mortel, survenu dans une sucrerie à Roye, a coûté la vie à un ouvrier pris dans les rouages d'une machine.",
      "À Nogent-le-Rotrou, un ecclésiastique a été suivi sur une longue distance par un individu armé d'un fusil, provoquant l'émoi des habitants. À Châteaubourg, les préparatifs vont bon train pour le prochain concours de musique.",
      "Enfin, le bilan s'alourdit avec plusieurs suicides et accidents mortels rapportés aux autorités judiciaires de Blois et de Valence."
    ]
  },
  {
    "id": 42,
    "page": 3,
    "category": "Finance",
    "title": "Bulletin financier",
    "summary": "Le marché financier du 1er février 1899 affiche une tendance ferme. Si le 3% maintient sa progression, les secteurs miniers et industriels connaissent, quant à eux, des fluctuations notables.",
    "paragraphs": [
      "Le marché boursier conserve une tendance ferme malgré quelques faiblesses sporadiques. Le 3% maintient sa position et son avance, tandis que les titres étrangers confirment leur bonne tenue.",
      "À l'inverse, un certain nombre de valeurs minières et industrielles subissent des variations sensibles, reflétant l'incertitude des marchés en ce début de mois."
    ]
  },
  {
    "id": 43,
    "page": 4,
    "category": "Météorologie",
    "title": "Bulletin météorologique du 1er février 1899",
    "summary": "Temps maussade et couvert sur l'Hexagone. Une dépression sur le golfe du Lion entraîne des pluies côtières, tandis que des chutes de neige sont signalées dans l'Est de la France.",
    "paragraphs": [
      "Le ciel est demeuré uniformément couvert durant toute la journée d'hier.",
      "Une zone de faible pression, qui se situait à l'ouest du Portugal, s'est déplacée vers l'est, et un minimum barométrique est localisé ce matin sur le golfe du Lion.",
      "Le vent se renforce dans les régions orientales et les pluies deviennent générales sur nos côtes méditerranéennes. Une aire de haute pression progresse actuellement sur le sud-est du Continent.",
      "Des précipitations pluvieuses ont été observées dans le nord-ouest de l'Europe. En France, les relevés indiquent 9 mm d'eau à Marseille, 5 mm à Brest et 4 mm à Besançon. Des chutes de neige sont signalées dans l'Est.",
      "La température accuse une légère remontée sur l'Allemagne. En France, un temps frais est à prévoir, accompagné de pluies probables dans les régions du Sud."
    ]
  },
  {
    "id": 44,
    "page": 4,
    "category": "Navigation",
    "title": "Navigation fluviale au 1er février",
    "summary": "État des voies navigables au 1er février 1899 : inventaire des écluses et des ponts opérationnels sur les axes de la Haute-Seine, de la Marne, de la Basse-Seine et de l'Oise.",
    "paragraphs": [
      "Haute-Seine : Pont de Seine à Montereau, écluse de Varennes, pont de Melun, pont de Corbeil, écluse de Port-à-l'Anglais.",
      "Marne : Écluse de Cumières, écluse de Chalifert, écluse de Charenton.",
      "Basse-Seine : Écluse du canal Saint-Martin, pont de la Tournelle, pont Royal, écluse de Suresnes, barrage de Bezons, pont de Mantes, écluse de Méricourt.",
      "Oise : Barrage de Venette."
    ]
  },
  {
    "id": 45,
    "page": 4,
    "category": "Théâtres",
    "title": "Courrier des Théâtres",
    "summary": "Le programme des matinées du dimanche 2 février 1899 met à l'honneur les classiques et le vaudeville. M. Silvain organise une noble initiative au bénéfice d'artistes dans le besoin.",
    "paragraphs": [
      "Les matinées de demain dimanche proposeront notamment : Adrienne Lecouvreur à la Comédie-Française, La Basoche et le Chalet à l'Opéra-Comique, ainsi que La Parisienne, Grasse matinée et l'Article au Théâtre-Antoine.",
      "La nouvelle pièce de M. Brieux, Les Remplaçants, sera présentée au public du Théâtre-Antoine dans une huitaine de jours.",
      "Au théâtre du Palais-Royal, le succès de MM. Paul Gavault et Maurice Hennequin est précédé par la représentation du vaudeville de M. Jacques Blanchard intitulé Société anonyme.",
      "M. Silvain, de la Comédie-Française, organise un concert de charité au bénéfice de deux artistes malheureux, MM. Rosembeau et Henri Taillade, le 2 mars prochain."
    ]
  },
  {
    "id": 46,
    "page": 4,
    "category": "Sports",
    "title": "Actualités automobiles et sportives",
    "summary": "L'industrie automobile s'emballe avec une commande record aux États-Unis et des projets de transport à vapeur en Espagne. Parallèlement, la Société de tir du 14e arrondissement prépare son prochain concours.",
    "paragraphs": [
      "Un citoyen américain vient de passer commande d'une automobile de cinquante chevaux, moyennant le prix de quatre-vingt-cinq mille francs, sous la condition formelle que cet appareil surpasse tous les records de vitesse établis jusqu'à ce jour.",
      "Une compagnie vient de se constituer à Séville avec pour objectif la création de services de transport par automobiles à vapeur, utilisant des véhicules d'un poids total de quatre tonnes.",
      "La Société de tir du quatorzième arrondissement organise un concours gratuit de délégations qui se tiendra les dimanches 3, 10 et 19 février prochain."
    ]
  },
  {
    "id": 47,
    "page": 4,
    "category": "Informations Commerciales",
    "title": "Bulletin commercial du 1er février",
    "summary": "Le marché des matières premières reste agité. Les cours du sucre et du coton fluctuent sur les places financières, tandis que les grands vins maintiennent leur fermeté à l'entrepôt de Bercy.",
    "paragraphs": [
      "Les cours du sucre et du coton enregistrent des variations notables sur les places de Paris et du Havre, témoignant d'une activité soutenue dans les échanges.",
      "Sur le marché des vins, les transactions demeurent variables selon les provenances régionales, toutefois le secteur des grands crus affiche une fermeté constante aux entrepôts de Bercy."
    ]
  },
  {
    "id": 48,
    "page": 4,
    "category": "Loterie",
    "title": "Loterie des enfants tuberculeux",
    "summary": "La souscription pour la loterie des enfants tuberculeux touche à sa fin. Les organisateurs rappellent que les prix remportés seront réglés en espèces lors du prochain tirage.",
    "paragraphs": [
      "La vente des derniers billets de la loterie est actuellement en cours. Il est rappelé aux souscripteurs que les lots sont intégralement payables en numéraire et que le tirage s'effectuera sous peu."
    ]
  }
];
