// Date: 1900-01-29
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-01-29 (Version Restaurée, 56 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Éditorial",
    "title": "La situation de notre commerce national",
    "summary": "Analysant les craintes de décadence économique, cet éditorial souligne l'urgence d'une réforme de l'éducation commerciale et d'une meilleure gestion des sociétés par actions pour assurer la croissance industrielle française.",
    "paragraphs": [
      "Chaque année, le budget du Commerce rouvre le débat périodique engagé depuis quelques années déjà sur la situation de notre commerce national. Le mot de décadence a été répété.",
      "Au contraire, les pessimistes s'opiniâtrent à prétendre que nous sommes voués à une faiblesse irrémédiable parce que nous n'avons plus l'âpre ardeur au travail et à la fortune que possédaient nos pères.",
      "Le secret de ce relèvement est en nous, et en nous seuls. Il est nécessaire de modifier notre éducation commerciale, à l'instar de ce qui se pratiquait en Angleterre et en Allemagne.",
      "La guerre lamentable de 1870 avait diminué notre prestige. Nous devions redoubler d'énergie pour conserver notre prépondérance par la paix.",
      "Les chiffres parlent haut : en 1891, nos importations et exportations atteignaient 7 milliards 500 millions. En 1897, elles se montaient à 9 milliards 940 millions, une progression notable.",
      "Nos enfants ne sont pas élevés, comme ceux d'Angleterre et d'Allemagne, pour participer à la grande lutte commerciale et industrielle.",
      "Nos établissements de crédit sont la meilleure preuve de l'inapplication des capitaux aux affaires industrielles et commerciales.",
      "Le régime des sociétés par actions est déplorable en France et les entrave. Il serait plus expédient d'exercer sur elles une surveillance rigoureuse.",
      "Ne prétendons pas rejeter sur l'État la responsabilité de cette situation. Ni la protection, ni le libre-échange ne les satisfont complètement.",
      "C'est à nous de savoir ce que nous voulons, et d'abord de concevoir la résolution d'agir. La France commerciale et industrielle ne demande qu'à grandir."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Guerre du Transvaal",
    "title": "Les Anglais en retraite",
    "summary": "Le général Buller entame sa retraite après l'échec de la tentative de déblocage de Ladysmith. La journée de Spion-Kop constitue un revers majeur pour l'armée britannique en Afrique du Sud.",
    "paragraphs": [
      "Le général Buller est en pleine retraite. Sa tentative pour débloquer Ladysmith a complètement échoué.",
      "Le rapport que le général Buller a adressé à son gouvernement ne fait que relater à grands traits l'action qui s'est engagée autour de Spion-Kop, et insiste sur la façon remarquable dont le mouvement de retraite de l'armée anglaise a été opéré.",
      "D'après le télégramme officiel, les Anglais n'ont perdu dans cette retraite ni un homme ni une livre de vivres. Cependant, une dépêche provenant du camp des Boërs annonce que ces derniers ont trouvé de nombreux morts sur le champ de bataille.",
      "La journée de Spion-Kop a donc été marquée par le plus grand désastre que l'armée anglaise ait encore subi dans l'Afrique du Sud."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Guerre du Transvaal",
    "title": "Dépêches et rapports sur le front",
    "summary": "Confirmant la retraite britannique au sud de la Tugela, les dépêches soulignent la détermination des Boërs à ne négocier aucune paix qui ne restaurerait pas leur pleine souveraineté.",
    "paragraphs": [
      "Londres, 28 janvier : Le général Buller a adressé au War Office la dépêche confirmant la retraite des forces de sir Charles Warren au sud de la Tugela.",
      "Camp boër de Modder-Spruit : La journée du 24 janvier a été marquée par une bataille acharnée où les Boërs ont repris Spion-Kop.",
      "Londres, 28 janvier : Le général boër Lucas Meyer a surpris et cerné un fort détachement d'infanterie montée irrégulière.",
      "Berlin, 28 janvier : Le docteur Leyds a fait observer que la guerre durerait certainement très longtemps et que le Transvaal n'accepterait aucune proposition de paix sur la base du statu quo ante bellum."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Social",
    "title": "Fête du Ramadan à Alger",
    "summary": "En présence du gouverneur général Laferrière, la communauté musulmane d'Alger a célébré avec ferveur le 27e jour du Ramadan, illustrant un climat de concorde locale.",
    "paragraphs": [
      "Hier soir a eu lieu, à la mosquée d'Alger, la fête célébrée le 27e jour du mois du Ramadan. Le gouverneur général et Mme Laferrière y assistaient.",
      "Le mufti a remercié le gouverneur général de sa présence et a souligné que l'occupation d'In-Salah a été saluée comme un événement heureux par les musulmans."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Vol dans un château près de Nîmes",
    "summary": "Le château de Sabatier a été le théâtre d'un vol audacieux : deux malfaiteurs ont séquestré M. Philippe Rivet avant de piller son coffre et de se restaurer paisiblement sur les lieux.",
    "paragraphs": [
      "Deux malfaiteurs se sont introduits hier soir chez M. Philippe Rivet, au château de Sabatier, près de Quissac. Après l'avoir malmené et lié, ils l'ont contraint à leur remettre les clefs de son coffre-fort.",
      "Les bandits se sont emparés d'une somme importante en or et billets de banque avant de manger et boire tranquillement au rez-de-chaussée avant de prendre la fuite."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Chronique Politique",
    "title": "L'affirmation républicaine aux élections sénatoriales",
    "summary": "Le bilan des élections sénatoriales confirme la solidité de la majorité républicaine. Malgré les manœuvres de l'opposition, le corps électoral a maintenu sa confiance, garantissant la stabilité du Luxembourg.",
    "paragraphs": [
      "Pour apprécier à leur juste valeur les résultats des élections sénatoriales, il convient de procéder à l'addition des succès remportés par les divers groupes républicains. Il n'y aura, en l'état actuel des choses, rien de changé au palais du Luxembourg.",
      "Nulle part, un candidat n'a osé se présenter aux suffrages sans se proclamer républicain. La volonté nationale demeure donc fermement attachée à nos institutions démocratiques.",
      "Un grand effort avait été tenté par les adversaires déclarés de la République, mais le pays, faisant preuve de discernement, n'a point été abusé par leurs promesses."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Feuilleton",
    "title": "Mariage Secret - Père et Fille",
    "summary": "Dans le huis clos de son étude, don Pablo Castéras exige des explications de Miguel Arribio et de sa fille Manuela concernant l'union clandestine de cette dernière avec Roland d'Aspremont.",
    "paragraphs": [
      "Dans la salle basse du rez-de-chaussée, don Pablo Castéras travaillait depuis de longues heures sur ses registres, le visage empreint d'une sombre gravité.",
      "Il fit mander Miguel Arribio et sa fille Manuela pour une explication solennelle. Face à la détresse de la jeune femme qui clame haut et fort la légitimité de son union avec Roland d'Aspremont, don Pablo demeure inflexible, doutant de la véracité de ses dires, d'autant que le curé ayant célébré le mariage a depuis lors trépassé."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Politique",
    "title": "Résultats des élections sénatoriales - Loire-Inférieure",
    "summary": "Le département de la Loire-Inférieure a tranché le remplacement de M. Chesnelong. Le général Mercier l'emporte face au candidat républicain Alfred Riom en recueillant 261 suffrages.",
    "paragraphs": [
      "Le département de la Loire-Inférieure a été appelé à élire un sénateur en remplacement de M. Chesnelong, sénateur inamovible de tendance réactionnaire, décédé. M. le général Mercier et M. Alfred Riom, candidat républicain, étaient en lice pour ce siège.",
      "Au terme du dépouillement, le général Mercier a été proclamé élu avec un total de 261 voix."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Politique",
    "title": "Résultats des élections sénatoriales - Nièvre",
    "summary": "À l'issue d'un scrutin disputé en trois tours, le Dr Petitjean, candidat radical-socialiste, est élu sénateur de la Nièvre avec 371 voix, succédant ainsi à M. Scheurer-Kestner.",
    "paragraphs": [
      "Le département de la Nièvre a été appelé aux urnes pour élire un sénateur en remplacement de M. Scheurer-Kestner. Après trois tours de scrutin particulièrement disputés, M. le Dr Petitjean, radical-socialiste, a été élu avec 371 voix."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Politique",
    "title": "Résultats des élections sénatoriales - Orne",
    "summary": "Les élections sénatoriales dans l'Orne voient la reconduction de MM. Léon Labbé et Poriquet, ainsi que l'élection de M. Fauré, pour siéger au palais du Luxembourg.",
    "paragraphs": [
      "Les sénateurs sortants étaient MM. Léon Labbé, Henry, républicains, et Poriquet, réactionnaire. Après le dépouillement, MM. Fauré, Léon Labbé et Poriquet ont été élus pour siéger au Luxembourg."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Politique",
    "title": "Résultats des élections sénatoriales - Pas-de-Calais",
    "summary": "Le scrutin sénatorial dans le Pas-de-Calais a livré ses résultats. MM. Bouilliez, Viseur, Binot, Huguet et Déprez ont été proclamés sénateurs du département.",
    "paragraphs": [
      "Les résultats du scrutin sénatorial dans le département du Pas-de-Calais sont désormais connus. Les candidats élus à la haute assemblée sont MM. Bouilliez, Viseur, Binot, Huguet et Déprez."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Politique",
    "title": "Résultats des élections sénatoriales - Puy-de-Dôme",
    "summary": "À l'issue des opérations électorales dans le Puy-de-Dôme, MM. Chantagrel, Barrayre et Gomot ont été élus. Le Dr Bataille a obtenu son siège après un second tour.",
    "paragraphs": [
      "Au terme des opérations électorales dans le département du Puy-de-Dôme, les électeurs ont porté leur choix sur MM. Chantagrel, Barrayre et Gomot. Le Dr Bataille, quant à lui, a été élu après un deuxième tour de scrutin."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Politique",
    "title": "Résultats des élections sénatoriales - Basses-Pyrénées",
    "summary": "Le département des Basses-Pyrénées a conclu ses élections sénatoriales avec l'élection de MM. Lacabanne, Quintaa et Berdoly.",
    "paragraphs": [
      "Les opérations électorales pour le renouvellement du Sénat dans le département des Basses-Pyrénées ont abouti à l'élection de MM. Lacabanne, Quintaa et Berdoly."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Politique",
    "title": "Résultats des élections sénatoriales - Hautes-Pyrénées",
    "summary": "MM. Jean Dupuy, ministre de l'Agriculture, et Pédebidou ont été triomphalement réélus au Sénat pour représenter le département des Hautes-Pyrénées.",
    "paragraphs": [
      "Dans le département des Hautes-Pyrénées, les électeurs ont renouvelé leur confiance en M. Jean Dupuy, ministre de l'Agriculture, ainsi qu'en M. Pédebidou, qui siègeront désormais au Sénat."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Politique",
    "title": "Résultats des élections sénatoriales - Pyrénées-Orientales",
    "summary": "Le département des Pyrénées-Orientales a élu ses sénateurs. MM. Ed. Vilar et Delcros, sous l'étiquette radicale, remportent les suffrages.",
    "paragraphs": [
      "Le dépouillement des votes pour les élections sénatoriales dans le département des Pyrénées-Orientales a confirmé l'élection de MM. Ed. Vilar et Delcros, tous deux issus des rangs radicaux."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Politique",
    "title": "Résultats des élections sénatoriales - Haut-Rhin",
    "summary": "Au terme du second tour des opérations électorales, le général Japy a été brillamment reconduit dans son mandat de sénateur du département du Haut-Rhin.",
    "paragraphs": [
      "Le général Japy a été réélu au deuxième tour de scrutin, confirmant ainsi la confiance renouvelée de ses électeurs dans la circonscription du Haut-Rhin."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Politique",
    "title": "Résultats des élections sénatoriales - Rhône",
    "summary": "À l'issue d'un scrutin particulièrement disputé et après trois tours de suffrages, M. Guyot a été proclamé sénateur du département du Rhône.",
    "paragraphs": [
      "M. Guyot a été élu sénateur au terme d'un troisième tour de scrutin qui a marqué l'épilogue d'une journée électorale fort animée dans le département du Rhône."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Politique",
    "title": "Résultats des élections sénatoriales - Saône-et-Loire",
    "summary": "Les opérations électorales en Saône-et-Loire ont abouti à l'élection de M. Félix Martin au siège de sénateur.",
    "paragraphs": [
      "M. Félix Martin a été élu sénateur par le corps électoral de la Saône-et-Loire, lors des récentes consultations qui se sont déroulées dans le calme."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Politique",
    "title": "Résultats des élections sénatoriales - Haute-Saône",
    "summary": "Après une procédure électorale s'étendant sur trois tours, M. le docteur Signard a été élu sénateur de la Haute-Saône.",
    "paragraphs": [
      "Après trois tours de scrutin, M. le docteur Signard a été proclamé élu sénateur de la Haute-Saône, recueillant la majorité des suffrages exprimés par les grands électeurs du département."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Politique",
    "title": "Résultats des élections sénatoriales - Sarthe",
    "summary": "Les électeurs sénatoriaux de la Sarthe ont porté leur choix sur MM. Legludic et Leporché, qui siégeront désormais au Sénat.",
    "paragraphs": [
      "MM. Legludic et Leporché ont été élus sénateurs du département de la Sarthe à l'issue du scrutin, confirmant les pronostics établis lors des opérations de dépouillement."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Politique",
    "title": "Résultats des élections sénatoriales - Savoie",
    "summary": "Le département de la Savoie a renouvelé son mandat sénatorial. M. de La Porte et M. Montfort ont été brillamment élus pour siéger à la Haute Assemblée.",
    "paragraphs": [
      "Le département de la Savoie a procédé hier au renouvellement de sa représentation sénatoriale. À l'issue d'un scrutin calme et régulier, MM. de La Porte et Montfort ont été élus sénateurs de la Savoie, recueillant la majorité des suffrages exprimés par le collège électoral."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Politique",
    "title": "Résultats des élections sénatoriales - Haute-Savoie",
    "summary": "Le scrutin sénatorial en Haute-Savoie a vu la victoire de M. César, qui siégera désormais au Sénat pour représenter son département.",
    "paragraphs": [
      "Les opérations électorales en Haute-Savoie ont abouti à un résultat clair. M. César, fort de la confiance des grands électeurs, a été élu sénateur de la Haute-Savoie, confirmant ainsi sa position dans la vie politique locale."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Politique",
    "title": "Résultats des élections sénatoriales - Seine-et-Oise",
    "summary": "Dans le département de Seine-et-Oise, les électeurs ont désigné MM. de Courcel, Bonnefille et Legrand pour porter leurs intérêts au Sénat.",
    "paragraphs": [
      "Le département de Seine-et-Oise a choisi ses représentants pour la législature à venir. MM. de Courcel, Bonnefille et Legrand ont obtenu les suffrages nécessaires et ont été proclamés élus au Sénat par l'assemblée des délégués cantonaux."
    ]
  },
  {
    "id": 24,
    "page": 2,
    "category": "Politique",
    "title": "Résultats des élections sénatoriales - Deux-Sèvres",
    "summary": "Le scrutin sénatorial des Deux-Sèvres s'est achevé par l'élection de MM. Girard, Jouffrault et Garran de Balzan, nouveaux sénateurs du département.",
    "paragraphs": [
      "À la suite du scrutin sénatorial qui s'est tenu dans les Deux-Sèvres, MM. Girard, Jouffrault et Garran de Balzan ont été élus sénateurs. Ce choix du corps électoral marque une étape importante dans la représentation politique de ce département."
    ]
  },
  {
    "id": 25,
    "page": 2,
    "category": "Politique",
    "title": "Résultats des élections sénatoriales - Somme",
    "summary": "Le département de la Somme a désigné ses nouveaux parlementaires. MM. Berisot, Templier et Froment ont été élus sénateurs par le collège électoral.",
    "paragraphs": [
      "Le département de la Somme a désigné ses nouveaux mandataires pour la Chambre haute. Après le dépouillement du scrutin, il est apparu que MM. Berisot, Templier et Froment ont été élus sénateurs de la Somme par le collège électoral réuni à cet effet."
    ]
  },
  {
    "id": 26,
    "page": 2,
    "category": "Politique",
    "title": "Résultats des élections sénatoriales - Tarn",
    "summary": "Le département du Tarn a fait connaître ses résultats pour le renouvellement sénatorial. MM. Barbey, Savary et Boularan ont été proclamés élus par le corps électoral.",
    "paragraphs": [
      "Les opérations électorales dans le Tarn sont closes. MM. Barbey, Savary et Boularan ont été élus sénateurs."
    ]
  },
  {
    "id": 27,
    "page": 2,
    "category": "Politique",
    "title": "Résultats des élections sénatoriales - Tarn-et-Garonne",
    "summary": "Le dépouillement du scrutin dans le Tarn-et-Garonne a abouti à la désignation de Messieurs Bourgeat et Rolland, qui siégeront désormais au Sénat.",
    "paragraphs": [
      "Dans le département de Tarn-et-Garonne, le dépouillement du scrutin a confirmé l'élection de MM. Bourgeat et Rolland au mandat de sénateurs."
    ]
  },
  {
    "id": 28,
    "page": 2,
    "category": "Politique",
    "title": "Résultats des élections sénatoriales - Var",
    "summary": "Au terme des élections sénatoriales dans le Var, M. Méric a été officiellement élu par les grands électeurs du département.",
    "paragraphs": [
      "Les résultats du scrutin dans le Var sont parvenus : M. Méric a été élu sénateur."
    ]
  },
  {
    "id": 29,
    "page": 2,
    "category": "Politique",
    "title": "Résultats des élections sénatoriales - Vaucluse",
    "summary": "Le verdict des urnes dans le Vaucluse est tombé : Messieurs Guérin et Béraud ont été portés à la charge de sénateurs lors du scrutin de ce jour.",
    "paragraphs": [
      "Le corps électoral du Vaucluse a procédé au renouvellement de ses représentants. MM. Guérin et Béraud ont été élus sénateurs."
    ]
  },
  {
    "id": 30,
    "page": 2,
    "category": "Politique",
    "title": "Résultats des élections sénatoriales - Vendée",
    "summary": "Le département de la Vendée a achevé ses élections sénatoriales. MM. Paul Le Roux et Halgan ont recueilli les suffrages nécessaires pour leur élection.",
    "paragraphs": [
      "Le scrutin en Vendée a rendu son verdict. MM. Paul Le Roux et Halgan ont été dûment élus sénateurs."
    ]
  },
  {
    "id": 31,
    "page": 2,
    "category": "Politique",
    "title": "Résultats des élections sénatoriales - Vienne",
    "summary": "À l'issue du dépouillement dans le département de la Vienne, MM. les docteurs Demars et Tribot ont été proclamés élus au Sénat.",
    "paragraphs": [
      "Le scrutin pour les élections sénatoriales dans le département de la Vienne a rendu son verdict : MM. les docteurs Demars et Tribot ont été proclamés sénateurs."
    ]
  },
  {
    "id": 32,
    "page": 2,
    "category": "Politique",
    "title": "Résultats des élections sénatoriales - Hautes-Pyrénées",
    "summary": "Au terme de deux tours de scrutin, M. de Bort a été officiellement proclamé sénateur des Hautes-Pyrénées.",
    "paragraphs": [
      "Dans les Hautes-Pyrénées, après deux tours de scrutin, M. de Bort a été officiellement élu au siège de sénateur."
    ]
  },
  {
    "id": 33,
    "page": 2,
    "category": "Politique",
    "title": "Résultats des élections sénatoriales - Yonne",
    "summary": "La consultation électorale dans le département de l'Yonne a abouti à l'élection de M. Quairel au poste de sénateur.",
    "paragraphs": [
      "La consultation électorale dans le département de l'Yonne a donné ses résultats : M. Quairel est désormais sénateur."
    ]
  },
  {
    "id": 34,
    "page": 2,
    "category": "Politique",
    "title": "Démission de M. Cavaignac",
    "summary": "En désaccord avec ses collègues du conseil général au sujet des dernières élections sénatoriales, M. Cavaignac a remis sa démission de la présidence.",
    "paragraphs": [
      "En raison d'un profond dissentiment avec certains de ses collègues du conseil général à l'occasion des élections sénatoriales, M. Cavaignac a formellement remis sa démission de la présidence de l'assemblée départementale."
    ]
  },
  {
    "id": 35,
    "page": 2,
    "category": "Social",
    "title": "La grève des charpentiers",
    "summary": "L'issue du conflit des charpentiers de l'Exposition semble proche, le comité ayant accepté de soumettre le litige des salaires à un arbitrage.",
    "paragraphs": [
      "Le conflit qui oppose les charpentiers de l'Exposition semble tendre vers une solution heureuse. Le comité a consenti à accepter le principe d'un arbitrage afin de régler définitivement la question des salaires."
    ]
  },
  {
    "id": 36,
    "page": 2,
    "category": "Faits Divers",
    "title": "Digue emportée en Belgique",
    "summary": "À Houffalize, la rupture d'une digue sous la pression des eaux a provoqué une inondation majeure, isolant totalement la commune et interrompant les communications terrestres vers Gouvy.",
    "paragraphs": [
      "Une digue située à Houffalize, dans la province de Luxembourg, a cédé sous la pression des eaux ; cet accident a provoqué une inondation importante et interrompu, de façon complète, les communications entre Houffalize et Gouvy."
    ]
  },
  {
    "id": 37,
    "page": 2,
    "category": "Faits Divers",
    "title": "Mouvement carliste",
    "summary": "Les autorités espagnoles ont procédé à la saisie d'un important arsenal destiné au mouvement carliste dans la région de Placencia, sur ordre du préfet du Guipuzcoa.",
    "paragraphs": [
      "Le préfet du Guipuzcoa annonce la saisie d'une importante quantité de munitions et d'armes, lesquelles étaient destinées au mouvement carliste dans la région de Placencia."
    ]
  },
  {
    "id": 38,
    "page": 2,
    "category": "Santé",
    "title": "L'influenza en Italie",
    "summary": "À Rome, l'épidémie d'influenza s'aggrave, touchant désormais plus de 30 000 citoyens. Face à cette calamité, le Souverain Pontife a ordonné la tenue de prières publiques.",
    "paragraphs": [
      "L'influenza prend des proportions inquiétantes à Rome, où l'on dénombre plus de 30 000 personnes atteintes. Devant l'ampleur du mal, des prières spéciales ont été ordonnées par le pape."
    ]
  },
  {
    "id": 39,
    "page": 2,
    "category": "International",
    "title": "La situation politique britannique",
    "summary": "Le Parlement anglais rouvre ses portes dans un climat de vive tension. Les revers militaires en Afrique du Sud et l'humiliation nationale pèsent lourdement sur les débats parlementaires.",
    "paragraphs": [
      "Le Parlement anglais rouvre ses séances dans une atmosphère de vive tension en raison de la situation en Afrique du Sud. L'irritation est à son comble suite aux déceptions militaires et aux humiliations subies sur le front."
    ]
  },
  {
    "id": 40,
    "page": 3,
    "category": "Faits Divers",
    "title": "Interdiction d'embrasser dans le Connecticut",
    "summary": "L'État du Connecticut légifère contre l'effusion publique. À Bridgeport, les épanchements amoureux sont désormais prohibés sous peine d'amende, officiellement pour endiguer la propagation des microbes.",
    "paragraphs": [
      "Défense expresse de s'embrasser avec la crainte salutaire du microbe soi-disant infectieux ; ou bien les autorités américaines ont-elles tout simplement trouvé que l'on s'embrassait trop dans les rues ? Toujours est-il que, depuis le 1er janvier, ce genre de geste est absolument interdit en public par les législateurs de l'État du Connecticut.",
      "Pour ne pas aller trop vite en besogne, on a décidé de n'appliquer cette sévère loi que progressivement, en commençant par les villes les plus importantes. Bridgeport, chef-lieu du comté de Fairfield, a été choisi comme champ d'expériences. Il faut ajouter aussi qu'on s'y embrassait beaucoup, paraît-il, comme, d'ailleurs, à Newhaven, où les étudiants de Yale College avaient pris l'habitude d'embrasser, dans la rue, toutes les jolies misses qu'ils rencontraient.",
      "La loi en question proscrit une amende de 5 dollars pour les messieurs et de seulement 2 pour les dames qui se laisseraient aller en public à ces sortes d'épanchements."
    ]
  },
  {
    "id": 41,
    "page": 3,
    "category": "Faits Divers",
    "title": "Une leçon à la caserne",
    "summary": "Lors d'une instruction militaire, un sergent interroge ses recrues sur la marche à suivre en cas d'incendie. La réponse spontanée de l'un des soldats provoque une scène aussi cocasse qu'imprévue au sein de la caserne.",
    "paragraphs": [
      "Le sergent expliquait aux recrues la conduite à tenir en cas d'incendie : « Voyons, questionne-t-il, vous êtes de sentinelle. Vous apercevez le feu qui prend à une maison. Que faites-vous ? Hein ? Vous criez ? »",
      "Le soldat, interloqué, répond avec aplomb : « Que dis-je ? » reprend le gradé, « Vous criez : Au feu ! »"
    ]
  },
  {
    "id": 42,
    "page": 3,
    "category": "Société",
    "title": "Société de topographie de France",
    "summary": "La Société de topographie de France a tenu sa séance annuelle à la Sorbonne sous la présidence de M. Janssen, récompensant de nombreux lauréats et entendant des conférences sur Madagascar et la conquête du Tonkin.",
    "paragraphs": [
      "La Société de topographie de France a tenu hier sa séance annuelle à la Sorbonne, sous la présidence de M. Janssen, membre de l'Institut, assisté des représentants de la plupart des ministres, du gouverneur de Paris, des professeurs de la Société, ainsi que des délégations d'élèves des écoles Polytechnique, Saint-Cyr, de l'Artillerie et du Génie de Versailles.",
      "M. Louis Triboulet, vice-président, a résumé d'abord les travaux de la Société pendant l'année écoulée et a rendu un hommage mérité au dévouement des professeurs. Il a ensuite remercié chaleureusement, au nom de la Société, le Président de la République, les ministres, les conseils général et municipal, qui ont bien voulu mettre à la disposition de la Société de nombreux prix pour récompenser les lauréats les plus méritants.",
      "M. Ludovic Drapeyron, secrétaire général de la Société, a fait ensuite une communication très intéressante sur son voyage en Allemagne à l'occasion du congrès géographique de Berlin.",
      "MM. Triboulet et L. Caauré, vice-présidents, ont proclamé les récompenses dont les principales ont été attribuées comme suit : prix du Président de la République, M. E. Choquenet, directeur de l'école primaire supérieure de Chauny (Aisne) ; grande médaille d'honneur de la Société, M. Bordy, adjoint de classe du génie à Bizerte (Tunisie) ; médaille hors classe, M. de Bas, colonel, directeur des archives historiques de l'état-major néerlandais.",
      "Les prix des ministres de l'Agriculture, de l'Instruction publique, des Travaux publics, des Colonies, du conseil général de la Seine et du préfet de la Seine ont été remis à MM. Trézel, Battot, Dauptain, Rouler, lieutenant, Senoboe, Testart, Dugué, Friedman, Bourilly, etc.",
      "Après cette proclamation, M. le capitaine Mirienne-Lucas, ancien chef du bureau topographique du corps d'occupation à Madagascar, a fait une conférence sur Madagascar, les ressources et le parti qu'on peut en tirer au point de vue de la colonisation, instructive au plus haut point.",
      "Puis, M. Camille Groy, du service géographique du ministère des Colonies, a clôturé cette séance par une patriotique causerie sur La conquête du Tonkin par Francis Garnier.",
      "L'excellente musique du 4e de ligne, dirigée par M. Barthès, s'est fait entendre au cours de cette séance."
    ]
  },
  {
    "id": 43,
    "page": 3,
    "category": "International",
    "title": "La situation en Chine et l'impératrice Tsou-Hi",
    "summary": "À soixante-quatre ans, l'impératrice douairière Tsou-Hi assoit son pouvoir absolu en Chine. Après avoir contraint son neveu Kouang-Su à l'abdication, elle place le jeune prince Fou-Tsing sur le trône pour régner en son nom.",
    "paragraphs": [
      "Kouang-Su est le nom de l'empereur de Chine. Il signifie « Lumière Brillante », un nom étrange quand on songe aux actes violents de la souveraine Tsou-Hi, qui exerce le pouvoir suprême depuis quarante ans et qui vient de faire encore parler d'elle. Les dépêches nous ont appris qu'elle avait forcé son neveu, l'empereur Kouang-Su, à abdiquer et qu'elle l'avait remplacé sur le trône par un enfant de neuf ans, le prince Fou-Tsing.",
      "S'en est-elle même contentée de l'abdication de Kouang-Su ? Plus d'une fois, elle a montré que, pour être maîtresse absolue de l'Empire, elle ne reculait pas devant le crime. À soixante-quatre ans, après avoir réussi quatre grands coups d'État — dont l'abdication de Kouang-Su est le dernier —, maté d'innombrables révoltes, brisé tous ses ennemis et connu les plus terribles péripéties de la tragédie du pouvoir, elle se trouve enfin l'unique puissance en Chine.",
      "Le nouvel empereur, en effet, ne sera qu'un jouet en ses mains. Il est le fils du prince Tuan, qui appartient au parti de l'impératrice, le parti mandchou. C'est Tsou-Hi qui, derrière cet enfant, va régner réellement."
    ]
  },
  {
    "id": 44,
    "page": 3,
    "category": "Faits Divers",
    "title": "Triple Asphyxie accidentelle",
    "summary": "M. Chéleskof, horloger rue Saint-Denis, a retrouvé sa nourrice asphyxiée par les émanations d'un fourneau en rentrant du théâtre. Ses deux enfants, retrouvés souffrants dans une autre pièce, sont hors de danger.",
    "paragraphs": [
      "M. Chéleskof, horloger-bijoutier au 152, rue Saint-Denis, sortait hier soir avec sa femme pour se rendre au théâtre, laissant sous la garde d'une nourrice ses deux enfants, une fillette de deux ans et un garçonnet de cinq ans.",
      "Vers six heures, un voisin, entendant des appels provenant de l'appartement de M. Chéleskof, avertit quatre gardiens de la paix. Ces derniers, à l'aide d'une échelle, escaladèrent la fenêtre et pénétrèrent dans la pièce ; ils y trouvèrent les enfants du bijoutier, qui paraissaient tous deux un peu souffrants.",
      "Dans la salle à manger, les agents découvrirent le cadavre de la nourrice, Mlle Pauline Leroy, âgée de vingt-sept ans. La malheureuse, agenouillée près d'une lessiveuse, avait été asphyxiée par les émanations délétères du fourneau.",
      "L'état des enfants n'inspire actuellement aucune inquiétude. Une enquête est ouverte pour établir les circonstances précises de cet accident qui a failli faire trois victimes."
    ]
  },
  {
    "id": 45,
    "page": 3,
    "category": "Faits Divers",
    "title": "Enseveli dans un éboulement",
    "summary": "Un terrassier, M. Meuplat, a été victime d'un grave accident lors d'un éboulement survenu hier avenue de Versailles. Grièvement blessé, il a été transporté dans un état désespéré à l'hôpital Boucicaut.",
    "paragraphs": [
      "Un éboulement s'est produit hier, vers deux heures de l'après-midi, dans une tranchée avenue de Versailles, à la hauteur du pont Mirabeau.",
      "Un terrassier nommé Meuplat, habitant boulevard Bineau à Levallois-Perret, qui travaillait à cet endroit, a été enseveli sous les terres.",
      "Les pompiers, accourus aussitôt, ont procédé au sauvetage de ce malheureux. Meuplat, qui a la poitrine écrasée, a été transporté dans un état absolument désespéré à l'hôpital Boucicaut."
    ]
  },
  {
    "id": 46,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un faux agent de la Sûreté",
    "summary": "Un escroc nommé Constant Vernon a été arrêté pour avoir extorqué des bijoux à une femme en instance de divorce, en se faisant passer pour un agent de la Sûreté chargé de la protéger.",
    "paragraphs": [
      "Il y a quelques jours, un individu se nommant Constant Vernon se présentait chez Mme T., âgée de trente-cinq ans, demeurant rue Simart et actuellement en instance de divorce. Il lui déclarait être envoyé par la préfecture de police en qualité d'agent du service secret pour assurer sa protection.",
      "Mme T. exposa alors sa situation financière à ce faux agent. Ce dernier commit une escroquerie en se faisant remettre des bijoux et divers objets, sous le fallacieux prétexte de les protéger contre un complot d'assassinat fomenté par son mari.",
      "Mme T., ayant eu des soupçons, prévint la police. Constant Vernon fut arrêté au moment où il tentait une nouvelle extorsion de fonds auprès de la concierge de l'immeuble. Interrogé par M. Carpin, il avoua ses méfaits et son passé de multirécidiviste."
    ]
  },
  {
    "id": 47,
    "page": 3,
    "category": "Faits Divers",
    "title": "Entre voisins",
    "summary": "Une violente dispute de voisinage rue Ramponneau a conduit la dame Bonvallet à agresser violemment ses voisins, M. et Mme Weber, à coups de fer à repasser et de couteau.",
    "paragraphs": [
      "Une blanchisseuse, Mme Maria Weber, âgée de vingt-deux ans, et son mari Pierre, âgé de trente-quatre ans, demeurant 11, rue Ramponneau, vivaient en mauvaise intelligence avec une de leurs voisines, Mme Bonvallet.",
      "Hier après-midi, une discussion plus violente que de coutume éclata entre les deux femmes. M. Weber, attiré par le bruit, intervint pour secourir son épouse. Furieuse, Mme Bonvallet s'arma d'un énorme fer à repasser et d'un couteau, et en frappa ses adversaires, qui tombèrent tous deux grièvement blessés à la tête.",
      "M. et Mme Weber ont été transportés à l'hôpital Tenon. Mme Bonvallet a été arrêtée par la police."
    ]
  },
  {
    "id": 48,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident de fiacre",
    "summary": "Un cheval emballé a provoqué un accident de fiacre avenue Montaigne. Le cocher, M. Chagot, a été grièvement blessé après avoir été violemment projeté contre un réverbère.",
    "paragraphs": [
      "Hier matin, à neuf heures, la voiture de place n° 4004, dont le cheval s'était emporté, est venue se briser contre un réverbère, à l'angle de l'avenue Montaigne et de la rue Clément-Marot.",
      "Le cocher, M. Chagot, âgé de soixante-quatre ans, a été précipité sur le trottoir où il s'est fracturé trois côtes et brisé le bras gauche. Son état est jugé grave. Deux voyageurs ont également été légèrement blessés."
    ]
  },
  {
    "id": 49,
    "page": 3,
    "category": "Faits Divers",
    "title": "Suicide par arme à feu",
    "summary": "Désespéré par des chagrins d'amour, Eugène Poulard, un ouvrier électricien de vingt-cinq ans, a tenté de mettre fin à ses jours en se tirant une balle dans la poitrine.",
    "paragraphs": [
      "Dans la soirée d'hier, vers neuf heures et demie, un ouvrier électricien nommé Eugène Poulard, âgé de vingt-cinq ans et demeurant rue Poinnceau, s'est tiré une balle dans la région du cœur. C'est dans un état désespéré que le malheureux a été transporté à l'hôpital Lariboisière. Des chagrins d'amour seraient le mobile de cet acte tragique."
    ]
  },
  {
    "id": 50,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Faits divers en banlieue",
    "summary": "Un panorama des événements en banlieue parisienne : accidents, incendies, rixes et drames domestiques marquent la chronique quotidienne des communes environnantes.",
    "paragraphs": [
      "Buzenval : Les vétérans ont rendu hommage au monument commémoratif. Un jeune homme, M. Guillaume Windham, a été grièvement blessé après une chute de cheval.",
      "Levallois-Perret : Des médailles d'honneur du ministère du Commerce ont été décernées à plusieurs employés méritants.",
      "Épinay : Deux enfants, Alfred Leroquet et Lucien Lalitte, ont été grièvement blessés suite à l'effondrement d'un tas de bois.",
      "Bois-Colombes : Mlle Marcelle Hyenon a été gravement brûlée lors de l'explosion d'une lampe à essence.",
      "Saint-Denis : Un ouvrier, M. Maurice Thévenot, est mort après une chute dans un escalier. Par ailleurs, un incendie criminel a éclaté à l'usine Charles.",
      "Enghien : Des malfaiteurs ont tenté de forcer trois coffres-forts dans des bureaux sans succès, mais ont dérobé des timbres et des espèces.",
      "Bobigny : Un maître charpentier, M. Henri Miérand, a eu la jambe brisée lors d'une rixe avec un ouvrier.",
      "Ivry : Obsèques de Mme Anselme, tragiquement assassinée par son mari.",
      "Choisy-le-Roi : M. Jules Girond a été agressé par trois repris de justice qui lui ont dérobé son argent.",
      "Coulommiers : Des ossements humains ont été découverts dans les décombres de l'incendie d'une meule de paille."
    ]
  },
  {
    "id": 51,
    "page": 3,
    "category": "Économie / Causerie Financière",
    "title": "Le mouvement de détente monétaire",
    "summary": "La détente monétaire se confirme : les Banques d'Angleterre, de Belgique et de France réduisent leurs taux d'escompte, malgré les incertitudes persistantes liées aux événements en Afrique australe.",
    "paragraphs": [
      "Le mouvement de détente monétaire va s'accentuant. Jeudi dernier, la Banque d'Angleterre a abaissé le taux de son escompte de 5 à 4 1/2 pour 100, et la Banque de Belgique de 4 à 3 1/2 pour 100.",
      "Le même jour, la Banque de France a réduit le taux de son escompte de 4 à 3 1/2 et le taux de ses avances de 4 1/2 à 4 pour 100.",
      "La situation s'améliorerait sensiblement si les événements dans le sud de l'Afrique n'étaient pas de nature à imposer une très grande réserve aux capitaux."
    ]
  },
  {
    "id": 52,
    "page": 3,
    "category": "Spectacles",
    "title": "Programmes des théâtres de la semaine",
    "summary": "Le point sur l'actualité théâtrale parisienne : l'Opéra, la Comédie-Française et le théâtre Sarah-Bernhardt proposent un répertoire classique de renom pour la semaine.",
    "paragraphs": [
      "À l'Opéra : Aïda, Lohengrin, Faust, Guillaume Tell.",
      "À la Comédie-Française : La Conscience de l'enfant, L'Aventurière, L'Épreuve.",
      "Au Théâtre Sarah-Bernhardt : Hamlet, La Dame aux Camélias."
    ]
  },
  {
    "id": 53,
    "page": 4,
    "category": "Feuilleton",
    "title": "DEUX PASSIONS - UN DRAME DU MARIAGE",
    "summary": "Dans une lettre fiévreuse, un homme exprime son obsession pour Valentine, menaçant d'abréger les délais fixés pour retrouver celle dont il ne supporte plus l'absence.",
    "paragraphs": [
      "Il savait par quelles phrases perfides il fallait attiser le feu des veines de ce rustre aux emportements soudains, souffler sur sa passion pour en faire un brasier.",
      "Brusquement, il prit une feuille de papier et jeta dessus, dans une minute de rage, toutes sortes de folies et de prières.",
      "Il disait à Valentine : Je suis de retour depuis quelques jours à peine et je ne peux supporter la pensée d'être séparé de toi. Que fais-tu ? J'ai peur et il me semble que je te vois courir à un rendez-vous. Et pourtant, je ne peux quitter ce pays. Pas même un instant. Je dois y rester pour l'exécution de mes projets, je suis cloué dans cette maison que je hais parce que tu n'y es pas. Aussi j'abrégerai les délais que tu m'as donnés. Dans quelques jours je serai libre. Je le veux."
    ]
  },
  {
    "id": 54,
    "page": 4,
    "category": "Feuilleton",
    "title": "CE QUE LE DESTIN NOUS RÉSERVE",
    "summary": "Récit d'une tournée dans la campagne auboise, où le facteur rural parcourt les plaines et les routes blanches, tout entier dévoué à son labeur quotidien.",
    "paragraphs": [
      "Un jour d'automne de l'année dernière, le facteur rural était en train de faire sa tournée habituelle dans le petit village d'Assenay (Aube). Ceux qui ont visité cette région ne manqueront pas d'en avoir le souvenir présent à la mémoire. C'est la vieille Champagne avec ses vastes plaines, traversées par de longues routes blanches sur lesquelles circulent cahin-caha des charrettes chargées de fruits et de volailles qu'elles transportent au marché.",
      "Mais le facteur était loin de penser à tout cela au moment de sa tournée. Son unique but était d'accomplir son travail."
    ]
  },
  {
    "id": 55,
    "page": 4,
    "category": "Feuilleton",
    "title": "LES TRAGÉDIES DE L'AMOUR - LE DÉPART",
    "summary": "Alors qu'elle s'apprête à partir pour Paris, Colette est rattrapée à la gare par Horace, messager du château, qui la supplie de revenir auprès des frères Girodias pour une réconciliation inattendue.",
    "paragraphs": [
      "Bientôt la gare fut visible au bout de la grande rue. Elle consulta sa montre. Elle était en avance de vingt minutes au moins. En vingt minutes il pouvait se passer tant de choses. Au château, on allait s'apercevoir qu'elle était enfin partie.",
      "Elle arriva, entra. Pour quelle station faut-il enregistrer ? demanda l'homme. Paris. Bon. Vous avez votre billet ? Je vais vous le prendre. Pas encore. Ah ! Puisqu'il restait vingt minutes, rien ne pressait.",
      "Les minutes s'écoulèrent. Colette resta seule dans la gare, sa malle attendant sur la bascule. Dehors, sur le seuil, les yeux fixés au loin sur la route poussiéreuse, elle regardait dans la direction de Villefort.",
      "Le facteur revint auprès d'elle. Faut-il peser la malle ? Oui. Alors, prenez votre billet. Une troisième pour Paris. Elle paya et sortit sur le quai. Les cinq minutes passèrent. Le chef de gare se promenait près d'elle.",
      "Une colonne de fumée mobile et rapide s'éleva dans le lointain. Voilà le train, mademoiselle. Elle s'approcha de la barrière et pour la dernière fois consulta la route blanche qui traversait Clisson.",
      "Une victoria à deux chevaux venait de surgir là. Le cœur de Colette battit. C'était une voiture du château. Elle la reconnaissait aux deux chevaux noirs lancés à fond de train. Horace, c'était lui qui venait. Le train entra en gare.",
      "Allons, mademoiselle, il faut monter. Horace se précipita sur le quai. Il était pâle, dans une agitation extraordinaire. Le chef de gare se mit à rire. Il était temps, monsieur de Villefort. Pour quelle station ? Horace ne fit pas attention à ce qu'on lui disait. Il ne voyait, il ne regardait que Colette.",
      "Ne partez pas. Tous, nous vous en prions. Pierre et Gaston Girodias viennent d'arriver au château. Ils vous demandent. Ils ont des choses importantes à vous dire. Revenez, au moins pour une journée. Vous partirez demain si vous le voulez toujours. Le chef de train accourut. Montez-vous, mademoiselle ? Elle n'eut pas la force de répondre.",
      "Et lorsqu'elle retrouva un peu de présence d'esprit, elle était dans la Victoria, près d'Horace silencieux, et les deux chevaux l'emportaient de leur trot relevé du côté de Villefort.",
      "Mon Dieu, mon Dieu ! murmura-t-elle. Qu'ai-je fait ? La route se fit rapidement. Le duc ne lui adressa pas une seule fois la parole. Ce silence pesait sur le cœur de Colette.",
      "Ce fut elle qui le rompit. Monsieur, expliquez-moi. Je ne puis rien vous expliquer, mademoiselle, je ne sais rien. Cependant, vous m'avez dit que les frères Girodias... Les frères Girodias se sont présentés au château et vous ont demandée. Ils ont dit qu'il s'agissait de votre bonheur, de votre vie.",
      "Ce fut ainsi qu'ils arrivèrent à la grille. Ils descendirent, entrèrent au château, se dirigèrent vers le salon. Le cœur de Colette battait de plus en plus fort. C'était toujours un rêve qui continuait. Au salon, le marquis de Vivarez, encore très faible, se leva péniblement pour venir au devant d'elle. Roland et Louise la saluèrent. Seule, la duchesse de Villefort parut ne point la remarquer.",
      "Gaston et Pierre Girodias étaient debout attendant anxieusement son arrivée. D'un premier regard, Colette comprit qu'elle n'avait plus en eux des ennemis. Gaston s'avança. Mademoiselle, dit-il, j'étais sur le point de commettre une mauvaise action dont vous alliez être victime. Je vous en demande pardon. Je suis venu pour vous rendre votre parole et je ne veux pas que ce sacrifice de vous-même s'accomplisse."
    ]
  },
  {
    "id": 56,
    "page": 4,
    "category": "Fait Divers",
    "title": "LE MASCARET SUR LA SEINE",
    "summary": "À Villequier, le mascaret oppose violemment les eaux du fleuve à la marée montante. Ce phénomène périlleux rappelle le tragique naufrage de 1843, où Léopold Hugo et son épouse perdirent la vie malgré d'héroïques efforts.",
    "paragraphs": [
      "La lutte commençait entre l'eau du fleuve qui voulait suivre son cours et le flot qui la refoulait. C'était comme deux armées qui s'attaquent et essaient de se repousser. Là, aux jours de grande marée, le combat devient effrayant à voir. Les deux masses se heurtent, se dressent, s'entrechoquent. Et, finalement, la mer est plus forte que le fleuve : elle passe. C'est le mascaret.",
      "L'histoire de Villequier est pleine de naufrages, de barques chavirées, de noyades et de morts célèbres. En 1843, un jeune homme et une jeune femme d'une grande beauté périrent avec un enfant et le batelier qui les conduisait. En vain, le mari plongea dix fois pour arracher son adorée au flot. Il plongea une dernière fois pour ne plus revenir."
    ]
  }
];
