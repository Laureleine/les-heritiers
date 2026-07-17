// Date: 1900-03-31
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-03-31 (Version Restaurée, 42 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Feuilleton",
    "title": "L'Honneur du Fiancé",
    "summary": "Le Petit Parisien annonce la parution prochaine de \"L'Honneur du Fiancé\", un roman inédit de Paul d'Aigremont, promettant une intrigue intense où les passions les plus violentes se disputent l'attention du lecteur.",
    "paragraphs": [
      "Le Petit Parisien publiera prochainement \"L'Honneur du Fiancé\", un grand roman inédit de Paul d'Aigremont.",
      "Ce roman, tout de passion et d'amour, est une dramatique et émouvante histoire dans laquelle les passions humaines les plus violentes et les sentiments les plus élevés se disputent l'attention.",
      "L'intérêt poignant qui commence à la première ligne va sans cesse en grandissant jusqu'à la dernière."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Chronique",
    "title": "Les Arbres des Villes",
    "summary": "Une réflexion sur l'utilité des arbres dans le milieu urbain, alliant esthétique et salubrité publique, tout en abordant les causes de leur mortalité prématurée dans la capitale française.",
    "paragraphs": [
      "Les arbres sont la coquetterie des villes. Pas une grande cité qui ne soit fière de se parer d'un peu de feuillage, d'égayer la monotonie de ses pavés et de ses murs par des bouquets de verdure.",
      "Il n'y a pas seulement, d'ailleurs, dans cet emprunt fait par les villes grises aux clairs et frais trésors des campagnes, une question d'ornementation pour les promenades et de bien-être pour les promeneurs. Il y a aussi là un facteur certain d'assainissement.",
      "La mortalité des arbres est, en effet, considérable dans les villes. Prenons un exemple d'importance : voici Paris avec sa riche collection végétale qui possède pour quinze millions d'arbres, sans compter ceux qui s'élèvent dans ses parcs, couvrent ses cimetières et ombragent les cours des écoles.",
      "Cherchons les causes de cette mortalité excessive : poussières industrielles, réverbération solaire sur les façades, présence de gaz toxiques, manque d'aération du sol ou encore usage de sel sur la voie publique.",
      "Toute la population saura gré aux services publics d'avoir des égards pour les arbres. Les arbres ne sont que des choses, mais ce sont des choses qu'on admire et qu'on aime."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Feuilleton",
    "title": "Mariage Secret - Troisième Partie : La Toile de l'Araignée",
    "summary": "Ludovic et Delorme, transformés en cambrioleurs, planifient de dérober les millions d'Aspremont contenus dans un coffre-fort, malgré les risques de captivité et l'imminence d'une découverte par la mère Guichardon.",
    "paragraphs": [
      "Ludovic regardait, en hochant la tête, cette boîte de fer, cette boîte carrée. « Nous voilà bien, tout de même. Nous voilà passés cambrioleurs ».",
      "Delorme répondit avec un ricanement : « Oui, nous échappons maintenant au régime de la Centrale. Il y en a là pour vingt ans de bagne. Allons, poule mouillée, dites-vous, comme moi, qu'il s'agit des millions d'Aspremont ».",
      "Ils discutent du plan pour ouvrir le coffre-fort sans la clé, en utilisant de l'acide pour le faire fondre, malgré les risques de se faire surprendre par la mère Guichardon."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Politique",
    "title": "Conseil des Ministres",
    "summary": "Sous la présidence de M. Loubet, le Conseil des Ministres a examiné hier les dernières nouvelles du corps expéditionnaire en Afrique et les avancées budgétaires au Sénat.",
    "paragraphs": [
      "Les ministres se sont réunis hier matin à l'Élysée sous la présidence de M. Loubet.",
      "Le ministre de la Guerre a communiqué la dépêche qu'il a reçue hier du commandant du corps, rendant compte de l'occupation d'In-Rahr.",
      "Le Conseil s'est ensuite occupé de la discussion du Budget au Sénat et des projets de loi sur l'armée coloniale."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Guerre",
    "title": "La Victoire d'In-Rahr",
    "summary": "Un succès militaire majeur dans le Tidikelt : nos troupes ont conquis In-Rahr le 19 mars, infligeant de lourdes pertes à l'ennemi et capturant le pacha de Timmi.",
    "paragraphs": [
      "Un second et glorieux succès vient d'être remporté par nos troupes dans la région du Tidikelt, aux environs d'In-Salah.",
      "In-Rahr a été pris le 19 mars, après un combat acharné et sanglant. Nos pertes sont de neuf tués et plusieurs blessés, tandis que les pertes de l'ennemi sont estimées à environ six cents tués.",
      "Le pacha de Timmi, El-Driss-Ben-Naïmi, gouverneur du Touat, est prisonnier."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Le Crime d'Aïn-Cachain",
    "summary": "Mme Templier a été assassinée au 22 de la rue du Pont. Le coupable présumé, le nommé Chaquart, est actuellement écroué à la prison de la Santé, en attendant les conclusions du juge d'instruction sur ce drame atroce.",
    "paragraphs": [
      "Mme Templier, la victime, a trouvé une mort affreuse au numéro 22 de la rue du Pont. Le juge d'instruction a recueilli les éléments sur l'assassinat commis par le nommé Chaquart.",
      "M. Gilbert Faucheux a témoigné avoir vu un jeune homme suspect devant le domicile de la victime peu avant le crime.",
      "L'assassin, incarcéré à la prison de la Santé, ne paraît nullement se rendre compte de son forfait et s'inquiète surtout de son ordinaire carcéral."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Social",
    "title": "Inauguration de l'École J.-B. Say",
    "summary": "M. Georges Leygues, ministre de l'Instruction publique, a présidé l'inauguration de l'école primaire supérieure Jean-Baptiste Say, soulignant l'importance d'une culture générale solide pour la jeunesse.",
    "paragraphs": [
      "M. Georges Leygues, ministre de l'Instruction publique, a présidé hier après-midi l'inauguration de l'école primaire supérieure Jean-Baptiste Say.",
      "M. Bellan, président du comité de l'école, a souligné la volonté de ne pas spécialiser les élèves trop tôt, afin de favoriser une culture générale de l'esprit.",
      "La cérémonie a été marquée par la remise de plusieurs distinctions honorifiques aux professeurs et membres du personnel."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Tragiques Amours",
    "summary": "Après le suicide par noyade de M. de B., ruiné, sa compagne Juliette d'Ivry, inconsolable, a mis fin à ses jours en se jetant dans les eaux du barrage de Suresnes.",
    "paragraphs": [
      "Il y a un mois, des mariniers retiraient de la Seine le corps d'un homme qui fut reconnu pour M. de B., un habitué du monde élégant.",
      "Dans une lettre, il expliquait être ruiné et préférait mourir plutôt que de vivre séparé de Juliette d'Ivry.",
      "La jeune femme, inconsolable, a été retrouvée morte hier matin, accrochée aux aiguilles du barrage de Suresnes, après avoir multiplié les visites sur la tombe de son amant."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Guerre",
    "title": "Guerre au Transvaal : La Mort du général Joubert",
    "summary": "Le décès du général Joubert, survenu mardi soir à Pretoria, marque un tournant dans le conflit boer. Les manœuvres militaires s'intensifient dans le Natal et aux abords de Kroonstad.",
    "paragraphs": [
      "Le général Joubert est décédé mardi soir à Pretoria après une courte maladie.",
      "Des détails sont donnés sur la concentration des troupes boers autour de Kroonstad et les récents mouvements militaires dans le Natal et à Ladybrand."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Guerre des Boërs",
    "title": "Situation au Transvaal",
    "summary": "Sur le front, l'artillerie britannique a repris l'avantage. Après un repli tactique, les canons anglais ont réussi à neutraliser les positions ennemies qui harcelaient leurs lignes.",
    "paragraphs": [
      "Comme les Anglais se trouvaient trop faibles pour attaquer, ils se sont retirés.",
      "Le camp anglais ayant été transporté durant la nuit hors de la portée des canons, les Boers n'ont lancé aujourd'hui aucun assaut. Ce matin, les Boers ont ouvert sur les kopjes dominant la ville une violente fusillade. Mais les canons anglais ont été envoyés dans une position prenant les tranchées boers en enfilade et ont fait cesser la fusillade."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Informations politiques",
    "title": "L'inauguration de l'Exposition",
    "summary": "La commission parlementaire a rejeté la proposition de M. Berteaux de faire du samedi 14 avril un jour férié pour l'inauguration de l'Exposition, privilégiant le calendrier des fêtes de Pâques.",
    "paragraphs": [
      "La proposition de M. Berteaux, ayant pour but de déclarer jour férié le samedi 14 avril, date fixée pour l'inauguration de l'Exposition, a été repoussée hier par la commission parlementaire en raison des nombreuses protestations dont elle faisait l'objet.",
      "La commission a estimé qu'il était préférable de ne pas décréter de jour férié supplémentaire, le dimanche de Pâques tombant le 15 avril et le lundi suivant étant déjà un jour férié."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Informations politiques",
    "title": "Les décorations de l'Exposition",
    "summary": "La commission parlementaire a statué sur les décorations de l'Exposition, restreignant leur distribution aux remises officielles et écartant les clauses d'exclusion liées aux infractions du travail.",
    "paragraphs": [
      "Sur la demande de M. Millerand, ministre du Commerce, la commission parlementaire a entendu hier M. Muzet concernant son rapport sur les décorations sollicitées pour l'Exposition.",
      "Avant de se prononcer définitivement sur le projet, la commission a maintenu sa résolution stipulant que les croix ne devront être distribuées qu'à l'occasion de la remise générale des récompenses.",
      "En revanche, elle a écarté, après discussion, la disposition visant à exclure de cette répartition les industriels ou commerçants ayant été condamnés pour des infractions aux lois sur les conditions du travail."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Informations politiques",
    "title": "L'impôt sur le revenu",
    "summary": "La commission de l'impôt sur le revenu a décidé d'ajourner ses travaux, attendant le dépôt officiel du projet de loi promis par le ministre des Finances avant les vacances de Pâques.",
    "paragraphs": [
      "Lors de sa séance d'hier, la commission de l'impôt sur le revenu a décidé, sur la proposition de M. Doumer, d'attendre le dépôt du projet de loi que le ministre des Finances s'est engagé à présenter avant les vacances de Pâques."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Élections",
    "title": "Élection sénatoriale des Alpes-Maritimes",
    "summary": "Le général Bérenger, républicain, brigue le siège de sénateur des Alpes-Maritimes laissé vacant par le décès de M. Chiris, en prônant une politique d'apaisement républicain.",
    "paragraphs": [
      "Le général Bérenger, général de division et grand officier de la Légion d'honneur, se présente aux élections des Alpes-Maritimes pour le siège devenu vacant à la suite du décès de M. Chiris.",
      "La profession de foi qu'il a adressée à ses électeurs témoigne d'une volonté d'apaisement. Républicain de longue date, il a affirmé son soutien résolu au gouvernement de défense républicaine.",
      "Selon les informations reçues des Alpes-Maritimes, le succès de cette candidature semble assuré. Le scrutin aura lieu le 8 avril prochain."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Chambre des députés",
    "title": "Séance du vendredi 30 mars",
    "summary": "La Chambre des députés a voté la loi sur le travail des mineurs et des femmes, validé des élections locales et approuvé des travaux d'extension pour la gare de Nantes-État.",
    "paragraphs": [
      "La Chambre a adopté la loi relative au travail des enfants, des filles mineures et des femmes dans les établissements industriels.",
      "M. Charles Ferry a été élu membre du conseil supérieur du travail.",
      "La Chambre a procédé à la validation de l'élection de M. de Gontaut-Biron, député de Pau.",
      "Enfin, elle a adopté plusieurs projets de loi concernant l'agrandissement de la gare de Nantes-État et la construction d'un quai maritime sur la rive gauche de la Loire."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Chambre des députés",
    "title": "Discussion sur l'armée coloniale",
    "summary": "Débat parlementaire à la Chambre : M. Lannes de Montebello prône le rattachement de l'armée coloniale au ministère de la Guerre, tandis que M. Honoré Leygue défend son maintien sous l'autorité de la Marine.",
    "paragraphs": [
      "M. Lannes de Montebello soutient la thèse du rattachement de l'armée coloniale au ministère de la Guerre, arguant qu'il faut confier au département de la Guerre tout ce qui combat sur terre.",
      "M. Honoré Leygue soutient, au contraire, le maintien de l'armée coloniale sous l'autorité de la Marine, craignant qu'elle ne soit absorbée et noyée dans l'armée métropolitaine si elle est rattachée à la Guerre.",
      "La suite de la discussion est renvoyée à lundi."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Sénat",
    "title": "Séance du vendredi 30 mars",
    "summary": "Le Sénat valide l'élection de M. de Juigné, vote des crédits pour l'artillerie et débat de la situation budgétaire lors d'échanges entre M. Le Cour-Grandmaison et le ministre des Finances, M. Caillaux.",
    "paragraphs": [
      "Le Sénat valide l'élection de M. de Juigné, sénateur de la Seine-Inférieure.",
      "Il adopte des crédits destinés à la réfection du matériel d'artillerie et aborde la discussion du budget.",
      "M. Le Cour-Grandmaison critique la diminution du contrôle financier exercé par le Sénat. M. Caillaux, ministre des Finances, défend la situation financière actuelle et appelle les assemblées à la plus grande vigilance."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Nouvelles maritimes",
    "title": "Le ministre de la Marine à Nantes",
    "summary": "M. de Lanessan, ministre de la Marine, en visite officielle à Nantes, a inspecté la chaloupe à vapeur La Souris avant son prochain départ pour Saint-Nazaire.",
    "paragraphs": [
      "M. de Lanessan, ministre de la Marine, est arrivé à Nantes ce matin. Après un déjeuner pris à la préfecture, il s'est rendu à bord de la chaloupe à vapeur La Souris. Il repartira demain matin pour Saint-Nazaire."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Nouvelles coloniales",
    "title": "Le capitaine Joalland et le lac Tchad",
    "summary": "Nouvelles de la mission Joalland-Meynier : le lac Tchad fut atteint le 23 octobre. La jonction avec la mission Foureau-Lamy paraît entravée par la présence des bandes de Rabah.",
    "paragraphs": [
      "Un câblogramme nous apprend que le capitaine Joalland et le lieutenant Meynier ont atteint le lac Tchad le 23 octobre dernier et ont contourné la rive orientale jusqu'au fleuve Chari.",
      "Ils sont ensuite repartis en direction du Soudan. Il semble désormais acquis que la jonction avec la mission Foureau-Lamy ne s'est pas effectuée, en raison de la présence menaçante des bandes de Rabah."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Nouvelles militaires",
    "title": "L'épidémie d'Arras",
    "summary": "Malgré les précautions sanitaires, la méningite cérébro-spinale continue de frapper la garnison d'Arras, touchant particulièrement le 3e régiment du génie et le 33e de ligne.",
    "paragraphs": [
      "Malgré les mesures sanitaires prises, la méningite cérébro-spinale continue à sévir dans la garnison d'Arras, accompagnée de nombreux cas d'angine au sein du 3e régiment du génie et du 33e de ligne."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Nouvelles militaires",
    "title": "Les Zouaves à Lyon",
    "summary": "Le camp de Sathonay a vu ses bataillons de zouaves quitter leurs cantonnements pour prendre part à la grande revue militaire présidée par le général Zédé sur la place Bellecour à Lyon.",
    "paragraphs": [
      "Les bataillons de zouaves, stationnés au camp de Sathonay, ont pris part aujourd'hui à la revue du général Zédé, gouverneur militaire, qui s'est déroulée avec éclat sur la place Bellecour à Lyon."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Dépêches de l'étranger",
    "title": "Agitation en Italie, Russie et Autriche",
    "summary": "L'actualité internationale est marquée par une vive agitation parlementaire en Italie, des manœuvres diplomatiques russes en Corée et de fortes perturbations hivernales dans la capitale autrichienne.",
    "paragraphs": [
      "En Italie, la situation politique demeure préoccupante ; une obstruction parlementaire persistante alimente une agitation qui gagne désormais les rues.",
      "À Yokohama, M. Pavlov, ministre de Russie, accentue ses pressions auprès du gouvernement coréen afin d'obtenir de nouvelles concessions territoriales.",
      "À Vienne, une chute de neige exceptionnelle et soudaine a contraint les autorités à interrompre le service des tramways."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Conseil municipal de Paris",
    "title": "Séance du vendredi 30 mars",
    "summary": "Le Conseil municipal de Paris a examiné divers projets, notamment l'hommage à la Tour d'Auvergne, l'hygiène dans les écoles et l'organisation de l'Exposition universelle.",
    "paragraphs": [
      "Le Conseil a délibéré sur l'érection d'un monument à la mémoire de la Tour d'Auvergne, a examiné les questions d'hygiène dans les écoles primaires et a approuvé la création de nouveaux postes de poids publics aux Halles centrales.",
      "Par ailleurs, un crédit a été voté pour l'attribution d'un prix international d'hygiène dans le cadre des festivités de l'Exposition."
    ]
  },
  {
    "id": 24,
    "page": 2,
    "category": "Faits divers",
    "title": "Incendie d'une filature",
    "summary": "Un violent sinistre a ravagé ce matin la filature de MM. Gros et Bourcart, située près de Remiremont. Les pertes matérielles, estimées à 300 000 francs, sont couvertes par les assurances.",
    "paragraphs": [
      "Un incendie s'est déclaré ce matin dans les ateliers de la filature appartenant à MM. Gros et Bourcart, près de Remiremont. Les dommages, évalués à 300 000 francs, sont heureusement intégralement couverts par les polices d'assurance."
    ]
  },
  {
    "id": 25,
    "page": 2,
    "category": "Faits divers",
    "title": "Assassinat d'une femme",
    "summary": "Le corps d'une femme, Mme Jacquet, a été découvert à Euremont-Léage. Son époux, suspecté d'être l'auteur de cet acte criminel, a été interpellé et écroué à la prison de Beauvais.",
    "paragraphs": [
      "Le cadavre d'une femme nommée Jacquet a été découvert à Euremont-Léage, portant les traces d'un crime odieux. Le mari, fortement soupçonné d'avoir perpétré cet assassinat, a été arrêté et aussitôt transféré à la prison de Beauvais."
    ]
  },
  {
    "id": 26,
    "page": 2,
    "category": "Faits divers",
    "title": "Tentative de meurtre",
    "summary": "L'enquête sur l'agression du soldat Dufossé, du 12e régiment d'artillerie, suit son cours. La suspecte, Céline Ammaillant, nie toute préméditation et invoque une bousculade accidentelle lors d'une lutte pour le désarmer.",
    "paragraphs": [
      "L'instruction judiciaire concernant la tentative de meurtre perpétrée à l'encontre du soldat Dufossé, du 12e régiment d'artillerie, se poursuit activement. La suspecte, la nommée Céline Ammaillant, soutient mordicus qu'il ne s'agissait nullement d'une agression préméditée, mais d'une bousculade fortuite survenue alors qu'elle tentait de le désarmer."
    ]
  },
  {
    "id": 27,
    "page": 2,
    "category": "Social",
    "title": "Grèves à Carmaux et Bruxelles",
    "summary": "Les mineurs de Carmaux reprennent le travail sous la protection du préfet. À Bruxelles, les typographes cessent toute activité, protestant contre l'introduction des machines à composer qui menacent leurs emplois.",
    "paragraphs": [
      "Les mineurs de Carmaux ont officiellement pris la résolution de reprendre leurs travaux et réclament désormais la protection constante du préfet afin de garantir la sérénité du service.",
      "Concomitamment, à Bruxelles, les ouvriers typographes ont décrété la grève générale. Ils revendiquent une diminution de la durée de leur labeur quotidien, vivement inquiétés par la concurrence déloyale que leur imposent les nouvelles machines à composer."
    ]
  },
  {
    "id": 28,
    "page": 2,
    "category": "Justice",
    "title": "Questions juridiques et succession",
    "summary": "Le tribunal civil de la Seine examine le litige successoral des époux Dupuy, victimes d'un double suicide. Une action est également intentée contre un bureau de bienfaisance par une indigente refusée.",
    "paragraphs": [
      "Le tribunal civil de la Seine est saisi d'une délicate instance relative à la succession des époux Dupuy, disparus lors d'un double suicide. Il incombe désormais aux magistrats de fixer avec précision l'ordre des décès afin d'établir les droits de succession conformément à la loi.",
      "Dans une autre affaire, une indigente a intenté une action judiciaire contre un bureau de bienfaisance, lui reprochant un refus d'assistance illégitime envers les plus déshérités."
    ]
  },
  {
    "id": 29,
    "page": 2,
    "category": "Faits divers",
    "title": "Incendie du Théâtre-Français",
    "summary": "L'enquête sur l'incendie du Théâtre-Français se concentre sur le respect des consignes de sécurité. Les témoignages confirment la rapidité foudroyante de la propagation des flammes dans l'édifice.",
    "paragraphs": [
      "L'enquête relative à l'incendie du Théâtre-Français se poursuit afin d'établir si les règlements de sécurité en vigueur avaient été scrupuleusement observés. Les dépositions recueillies auprès des témoins oculaires confirment la rapidité foudroyante avec laquelle le sinistre a embrasé l'édifice."
    ]
  },
  {
    "id": 30,
    "page": 2,
    "category": "Faits divers",
    "title": "Le crime de la rue de Malte",
    "summary": "Émile Lévy, dit Milo, chef présumé d'une bande de malfaiteurs du 11e arrondissement, a été entendu par le magistrat instructeur sur ses activités criminelles, en attendant des preuves irréfutables.",
    "paragraphs": [
      "Émile Lévy, dit Milo, dénoncé comme le chef d'une redoutable bande de malfaiteurs, a été entendu longuement par le magistrat instructeur au sujet de ses activités illicites dans le 11e arrondissement, bien que les preuves formelles de sa culpabilité demeurent encore à constituer."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Faits Divers",
    "title": "Suicide d'un soldat",
    "summary": "Identifié grâce à un ancien compagnon, le brigadier Louis Clause, du 30e d'artillerie, s'est suicidé après avoir commis des actes d'indélicatesse au régiment. Son corps fut repêché dans la Seine.",
    "paragraphs": [
      "Le 24 mars dernier, des mariniers repêchaient, au pont de la Concorde, le cadavre d'un soldat d'artillerie paraissant avoir séjourné assez longtemps dans l'eau. Une forte corde enserrait le torse et le bras droit. Les numéros matricules du régiment avaient été arrachés de l'uniforme. Le corps fut dirigé vers l'hôpital militaire du Val-de-Grâce.",
      "L'autorité militaire a fini par identifier le soldat grâce à un ancien compagnon : il s'agit de Louis Clause, brigadier maréchal-ferrant au 30e d'artillerie, à Orléans. Sa mère, Mme Clause, a reconnu le cadavre.",
      "L'enquête menée par M. Cochefert a établi que la mort était la conséquence d'un suicide. Louis Clause avait commis des actes d'indélicatesse au régiment et savait qu'il ne pourrait pas se rengager, contrairement à ce qu'il avait affirmé à sa famille."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Justice",
    "title": "À l'Instruction",
    "summary": "Le juge de Cosnac poursuit l'instruction sur le magistrat Multier inculpé de faux. Par ailleurs, M. de Valles a interrogé le pharmacien Claude Bardin, auteur de coups de feu contre le président Mirard des Glajeux.",
    "paragraphs": [
      "Nous avons annoncé que M. de Cosnac, juge d'instruction, avait repris son enquête au sujet de M. Multier, le magistrat lillois inculpé de faux. M. et Mme Multier ont été interrogés.",
      "M. de Valles, juge d'instruction, a interrogé de nouveau M. Claude Bardin, le pharmacien de l'avenue Daumesnil, qui avait tiré deux coups de revolver dans la direction de M. Mirard des Glajeux, président de chambre à la Cour. L'inculpé a répété qu'il ne voulait que se livrer à une manifestation à la suite de la perte de son procès."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Asnières : Tentative de suicide",
    "summary": "Marie Legellec, 23 ans, arrêtée pour scandale sur la voie publique, a tenté de se pendre dans sa cellule du commissariat. Sauvée par un agent, elle a été conduite à l'infirmerie spéciale.",
    "paragraphs": [
      "La nommée Marie Legellec, âgée de vingt-trois ans, arrêtée pour scandale sur la voie publique, a tenté de se suicider hier matin dans le violon du commissariat en se pendant aux barreaux d'une lucarne avec des lambeaux d'étoffe. Un agent a pu la sauver à temps. Son état a nécessité son transfert à l'infirmerie spéciale. C'est la troisième fois qu'elle tente de mettre fin à ses jours."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Clichy : Arrestation d'un couple de voleurs",
    "summary": "Le commissaire de police Rogeaux a procédé à l'arrestation d'Henri Delphy et d'Alice Mantel. Le couple est accusé d'avoir dévalisé plusieurs magasins, où une importante quantité de marchandises volées a été retrouvée.",
    "paragraphs": [
      "M. Rogeaux, commissaire de police, a arrêté hier matin Henri Delphy, vingt-quatre ans, et sa maîtresse Alice Mantel, dix-neuf ans. Ils sont accusés d'avoir dévalisé plusieurs bazars et magasins. Une perquisition a permis de découvrir une quantité considérable de marchandises volées."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Plaine-Saint-Denis : Rixe sanglante",
    "summary": "Une dispute a éclaté entre le journalier Henri Dubois et le cultivateur Baptiste Cloquant. Ce dernier a blessé grièvement son adversaire d'un coup de binette au crâne. La victime est hospitalisée.",
    "paragraphs": [
      "Avant-hier soir, un journalier, M. Henri Dubois, vingt-neuf ans, s'est pris de querelle avec un jeune cultivateur, Baptiste Cloquant, âgé de vingt ans. Ce dernier lui a porté un coup de binette sur le crâne. La victime a été admise à l'hôpital de Saint-Denis ; son état inspire de vives inquiétudes."
    ]
  },
  {
    "id": 36,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Villetaneuse : Arrestation d'un pillard",
    "summary": "Cette nuit à Villetaneuse, le garde champêtre a surpris deux individus escaladant le mur d'une propriété. Après un coup de semonce, il a capturé l'un des malfaiteurs, Edmond Caliac, âgé de trente ans.",
    "paragraphs": [
      "Au cours de la nuit, le garde champêtre de Villetaneuse a surpris deux individus franchissant le mur d'une propriété privée. Après avoir fait usage de son arme en tirant un coup en l'air, il a réussi à capturer l'un des malfaiteurs, nommé Edmond Caliac, âgé de trente ans."
    ]
  },
  {
    "id": 37,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Herblay : Courage d'un jeune garçon",
    "summary": "À Herblay, le jeune Gaston Lansjard, quinze ans, a fait preuve d'une bravoure remarquable en tentant d'arrêter un cheval emballé, mais a été grièvement blessé au ventre par un brancard lors de l'accident.",
    "paragraphs": [
      "Un cheval emballé descendait à vive allure la côte de Conflans, attelé à une voiture laissée sans conducteur. Le jeune Gaston Lansjard, âgé de quinze ans, a courageusement sauté à la bride pour tenter de maîtriser l'animal.",
      "Malheureusement, au cours de cette périlleuse intervention, il a été grièvement blessé au ventre par l'un des brancards du véhicule."
    ]
  },
  {
    "id": 38,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Nogent-sur-Marne : Accident mortel",
    "summary": "Tragique accident à Nogent-sur-Marne : le jeune couvreur Auguste Lepreux, âgé de dix-sept ans, a fait une chute mortelle depuis un toit de la Grande-Rue et a succombé avant son arrivée à l'hôpital.",
    "paragraphs": [
      "Auguste Lepreux, âgé de dix-sept ans et exerçant la profession de garçon couvreur, a fait une chute mortelle d'un toit situé dans la Grande-Rue.",
      "Immédiatement pris en charge pour être transporté à l'hôpital Saint-Antoine, le jeune homme a malheureusement expiré en cours de route."
    ]
  },
  {
    "id": 39,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Malakoff : Vol d'un coffret",
    "summary": "Louis Guérard a été interpellé à Malakoff par le commissaire Hocquet après avoir dérobé un coffret contenant dix mille francs au domicile de M. Théodore Philippe. Le coupable a reconnu son forfait.",
    "paragraphs": [
      "Louis Guérard, âgé de vingt et un ans, s'est introduit au domicile de M. Théodore Philippe, maraîcher, afin de lui dérober un petit coffret renfermant une somme d'environ dix mille francs.",
      "Interpellé peu après par le commissaire Hocquet, le malfaiteur a reconnu les faits et a avoué son larcin."
    ]
  },
  {
    "id": 40,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Issy-les-Moulineaux : Vols dans un chantier",
    "summary": "Le commissaire Hocquet a mis fin aux agissements de trois voleurs, Barthélemy Chamberon, Saturnin Audic et Louis Billy, qui multipliaient les larcins rue Jean-Jacques-Rousseau. Ils ont été conduits au dépôt.",
    "paragraphs": [
      "À la suite de nombreuses plaintes concernant des vols répétés commis rue Jean-Jacques-Rousseau, le commissaire Hocquet a procédé à l'arrestation de trois individus : Barthélemy Chamberon, Saturnin Audic et Louis Billy.",
      "Les suspects ont été immédiatement conduits au dépôt en attendant les suites de l'enquête."
    ]
  },
  {
    "id": 41,
    "page": 3,
    "category": "Faits Divers",
    "title": "Mort d'une avare à Bordeaux",
    "summary": "Le décès de Mme Lydie Mondes à Bordeaux révèle une existence de privations cachant une fortune inattendue de plus de 50 000 francs, léguée à son unique héritier.",
    "paragraphs": [
      "Mme Lydie Mondes, âgée de 58 ans, est décédée rue Castillon, à Bordeaux. Bien qu'elle vécût dans une misère apparente, le commissaire de police, lors de la levée des scellés, a découvert dans un tiroir une somme supérieure à 50 000 francs en billets et en or, ainsi que plusieurs titres de rente. La succession échoit à un parent unique."
    ]
  },
  {
    "id": 42,
    "page": 3,
    "category": "Départements",
    "title": "Faits divers en province",
    "summary": "Une série de drames endeuille les provinces : suicides, accidents mortels sur les voies ferrées et sabotages ferroviaires font l'objet d'enquêtes des autorités locales.",
    "paragraphs": [
      "À Compiègne, Mme veuve Bochand s'est pendue dans son étable, désespérée par la mort récente de son fils.",
      "À Nogent-le-Rotrou, une carrière s'est effondrée sur des ouvriers ; le jeune Alphonse Monivelle, âgé de 14 ans, a succombé à ses blessures malgré les prompts secours prodigués.",
      "À Lille, le sieur Louis Catillon a été happé et tué par un train alors qu'il tentait de traverser la voie ferrée.",
      "À Loos, une tentative de déraillement a été découverte par un cantonnier lors de sa ronde ; une enquête criminelle a été immédiatement ouverte pour identifier les auteurs de cet acte."
    ]
  }
];
