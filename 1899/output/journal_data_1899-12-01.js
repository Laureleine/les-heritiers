// Date: 1899-12-01
// Restauration Pass: 2
// Base de données complète des articles de presse du 1899-12-01 (Version Restaurée, 36 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Feuilleton",
    "title": "Deux Passions",
    "summary": "Charles Mérouvel nous livre avec « Deux Passions » une fresque dramatique opposant un amour noble à une passion farouche et malsaine, portée par le talent d'un maître du roman populaire.",
    "paragraphs": [
      "« DEUX PASSIONS » pourraient s'intituler « DEUX AMOURS ». C'est un épisode de la vie réelle, une histoire poignante et vraie.",
      "De ces deux passions, l'une est noble et généreuse, l'autre violente, emportée, malsaine et farouche.",
      "Elles s'agitent autour d'une femme aussi pure qu'elle est belle et malheureuse, et aboutissent à un dénouement d'un intérêt dramatique et grandiose.",
      "Jamais le grand romancier populaire n'avait été mieux inspiré. Nos lecteurs retrouveront dans la nouvelle œuvre de Charles Mérouvel toutes les qualités qui distinguent l'auteur de Ville sans Nom, Damné, Chaste et Flétri, Mortel Amour, la Mouche Sanglante, etc."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Science",
    "title": "Les Vibrations du sol",
    "summary": "M. Bigourdan, astronome à l'Observatoire de Paris, explique les causes des trépidations du sol parisien, oscillant entre simples vibrations superficielles et ondulations dues au passage des trains.",
    "paragraphs": [
      "Dans une réunion d'astronomes qui s'est tenue l'autre jour pour examiner l'ensemble des observations faites à propos de la dernière pluie d'étoiles filantes, on a incidemment agité la question de savoir si l'établissement du chemin de fer métropolitain ne rendrait pas nécessaire le transfert hors Paris de notre Observatoire national.",
      "Il est réel que l'ébranlement continu du sol parisien nuisait autrefois à l'exactitude des observations, mais aujourd'hui, on a pu obtenir, grâce à un perfectionnement mécanique de l'appareil, un bain de mercure d'une stabilité absolue.",
      "L'écorce terrestre elle-même est instable. Il se passe dans ses profondeurs des réactions continuelles. M. Bigourdan, l'un des professeurs de l'Observatoire de Paris, vient d'étudier ces vibrations de notre sol.",
      "Le fait principal qu'il a constaté, c'est que, dans le sol parisien, les trépidations sont de deux natures : les unes sont des vibrations proprement dites, les autres ont le caractère d'ondulations. Les ondulations ont pour origine des déplacements de poids considérables, tels que ceux que produisent des trains. Les vibrations, au contraire, sont superficielles.",
      "Le sol n'est donc, je le répète, jamais en repos. Nous naviguons sur un volcan. Il y a sous nos pieds des éruptions constantes, des soulèvements du sol, un remue-ménage profond."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Politique",
    "title": "Informations Politiques : Les Ministres et le Conseil de l'Agriculture",
    "summary": "Les ministres se réuniront ce matin à l'Élysée sous la présidence de M. Loubet. Parallèlement, le Conseil supérieur de l'agriculture rejette les projets de réforme des droits de douane.",
    "paragraphs": [
      "Les ministres n'ont pas tenu hier matin leur conseil de cabinet habituel. Ils se réuniront ce matin à l'Élysée, sous la présidence de M. Loubet.",
      "La commission permanente du conseil supérieur de l'agriculture s'est réunie hier sous la présidence de M. Jean Dupuy, ministre de l'Agriculture. Cette commission a émis l'avis qu'il y avait lieu de repousser les diverses propositions de loi tendant à substituer l'échelle mobile aux droits fixes de douane."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Économie",
    "title": "Au Ministère du Commerce",
    "summary": "M. Millerand, ministre du Commerce, a reçu hier des délégations professionnelles. Au cœur des discussions : les demandes de subventions et l'impératif de relever les droits de douane sur la soie.",
    "paragraphs": [
      "M. Millerand, ministre du Commerce, a reçu hier après-midi deux délégations.",
      "La première a demandé au gouvernement d'appuyer la demande de subvention annuelle, tout en ajoutant qu'elle n'était pas hostile au relèvement des droits sur la soie.",
      "La deuxième délégation, composée de conseillers prud'hommes de Lyon, a insisté en faveur du relèvement des droits de douane sur la soie."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Vie Publique",
    "title": "Un Banquet d'Union",
    "summary": "Le banquet du comité républicain du commerce et de l'industrie au Grand-Hôtel a scellé l'union des forces démocratiques, sous l'égide d'un discours remarqué de M. Millerand pour la République.",
    "paragraphs": [
      "Le banquet qui vient d'avoir lieu au Grand-Hôtel, pour l'inauguration du comité républicain du commerce et de l'industrie, constitue une grande manifestation d'union entre tous les serviteurs de la cause démocratique.",
      "Ce qu'il faut souligner, c'est l'affirmation si nette faite par M. Millerand des devoirs de tous les groupes républicains, serrant les rangs pour la défense de la République."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Événement",
    "title": "L'Alliance Française",
    "summary": "Le général Galliéni, gouverneur de Madagascar, a exposé à la Sorbonne les succès de sa politique scolaire et le développement agricole entrepris sous son commandement au sein de la colonie.",
    "paragraphs": [
      "Le général Galliéni, gouverneur de Madagascar, a présidé hier après-midi, à la Sorbonne, une conférence de l'Alliance française.",
      "M. Gautier, directeur de l'enseignement, a fait l'éloge des travaux entrepris par le général à Madagascar, soulignant les bienfaits de l'instruction ainsi que l'apport des notions de commerce et d'agriculture modernes pour les populations locales.",
      "Le général Galliéni a pris la parole : « Je n'ai fait que mon devoir. Dès qu'un village était occupé par nos troupes, une école s'ouvrait pour ses habitants. Deux mille établissements scolaires fonctionnèrent bientôt. »"
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Violent Incendie à Villefranche",
    "summary": "Un incendie dévastateur frappe la commune de Villefranche. Le maire a sollicité d'urgence l'appui des secours d'Albi afin de contenir la propagation des flammes dans le centre-ville.",
    "paragraphs": [
      "Un violent incendie vient d'éclater à Villefranche. Une dizaine de maisons seraient en proie aux flammes. Le maire de la localité a demandé des secours immédiats à Albi. Les pompiers partent à l'instant."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Colonial",
    "title": "Nouvelles Coloniales : Affaire à Madagascar",
    "summary": "Un lieutenant d'infanterie de marine a été arrêté à Djibouti par ordre du général Pennequin pour des actes de cruauté et des abus de pouvoir commis envers les populations indigènes de Madagascar.",
    "paragraphs": [
      "Un jeune lieutenant d'infanterie de marine, appartenant au corps d'occupation de Madagascar, a été arrêté à Djibouti sur l'ordre du général Pennequin. Il est accusé d'avoir fait pendre arbitrairement un gouverneur indigène, ordonné des supplices et confisqué des troupeaux pour son profit personnel."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Justice",
    "title": "L'Affaire de l'Hôpital Beaujon",
    "summary": "L'enquête sur le sabotage des copies du concours d'internat de l'hôpital Beaujon se poursuit. L'Assistance publique envisage désormais de faire repasser les épreuves aux candidats concernés.",
    "paragraphs": [
      "Le commissaire de police continue son enquête sur la détérioration des copies du concours d'internat à l'hôpital Beaujon. Les recherches n'ont amené aucun résultat probant pour le moment.",
      "Le directeur de l'Assistance publique a déclaré avoir fait remise complète de l'affaire entre les mains de la justice. Le concours devra être recommencé pour les épreuves touchées par ce sabotage."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "International",
    "title": "La Guerre au Transvaal",
    "summary": "Londres dément la capitulation de Ladysmith tandis que M. Chamberlain réaffirme sa confiance dans la victoire britannique face à la résistance acharnée des combattants du Transvaal.",
    "paragraphs": [
      "La nouvelle de la capitulation de Ladysmith est démentie par le War Office. Le 9 novembre, les Boers ont été repoussés en subissant de grosses pertes.",
      "Dans un discours prononcé hier, M. Chamberlain affirme sa foi absolue dans le triomphe des armes britanniques, tandis que, de leur côté, les soldats du Transvaal ont le ferme espoir de sortir victorieux de cette lutte."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "Nouvelles de Ladysmith et Estcourt",
    "summary": "À Ladysmith, le bombardement des Boers a causé une victime. À Estcourt, les lanciers britanniques ont infligé des pertes sensibles aux troupes du général Joubert lors de l'attaque de nuit à Willow Grange.",
    "paragraphs": [
      "Le correspondant du Standard à Ladysmith télégraphie, à la date du 28, que les Boers ont bombardé la ville samedi dernier. Une personne a été tuée.",
      "À Estcourt, des nouvelles annoncent que les lanciers ont attaqué le commando de Piet Retief, envoyé par le général Joubert, lui infligeant des pertes sensibles.",
      "Les pertes des Boers, lors de l'attaque de nuit à Willow Grange, sont estimées par leurs propres docteurs à trente tués et dix blessés."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "Les Femmes Soldats",
    "summary": "Après une avancée vers la gare d'Enslin, une patrouille du 9e lanciers a subi une vive fusillade émanant de femmes embusquées dans une ferme, déplorant la perte d'un soldat.",
    "paragraphs": [
      "Après le combat d'hier, nous nous sommes avancés sur la gare d'Enslin en suivant la ligne du chemin de fer. Notre cavalerie a poursuivi les Boers.",
      "Ce matin, une patrouille du 9e lanciers s'étant approchée d'une ferme, des femmes ont dirigé sur elle une vive fusillade qui a tué un homme."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "Bataille de Modder-River",
    "summary": "La presse britannique demeure divisée sur la bataille de Modder-River : tandis que certains journaux célèbrent la victoire, d'autres s'inquiètent des pertes et réclament des renforts.",
    "paragraphs": [
      "La dépêche par laquelle lord Methuen relate la bataille de Modder-River est longuement commentée par la presse.",
      "Tandis que les journaux jingoïstes parlent de victoire, les journaux modérés dissimulent mal leur inquiétude face aux pertes terribles subies par l'armée anglaise.",
      "Le Times estime qu'une sixième division d'infanterie est nécessaire pour renforcer l'effectif des troupes."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "Pertes anglaises",
    "summary": "Le bilan humain à Modder-River, au 30 novembre, est lourd pour l'état-major britannique : deux colonels et un capitaine sont tués, et huit officiers, dont le général Methuen, sont blessés.",
    "paragraphs": [
      "Une première liste des pertes anglaises est donnée sous la date de Modder-River, 30 novembre : deux colonels et un capitaine ont été tués, huit officiers blessés, dont le comte Gleichen et le général Methuen."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Politique étrangère",
    "title": "Discours de M. Chamberlain à Leicester",
    "summary": "M. Chamberlain a défendu l'administration britannique dans le Transvaal et prôné une entente stratégique entre les races anglo-saxonne et teutonique pour garantir la paix mondiale.",
    "paragraphs": [
      "M. Chamberlain a prononcé un grand discours sur la guerre du Transvaal, la qualifiant de grande guerre tant par les principes que par les intérêts en jeu.",
      "Il a défendu l'administration britannique et rejeté les critiques étrangères sur l'avidité de l'Angleterre, affirmant que la métropole n'exige aucun bénéfice pécuniaire de ses colonies.",
      "Il a insisté sur les bonnes relations avec les États-Unis et l'Allemagne, soulignant qu'une entente entre les races anglo-saxonne et teutonique est une garantie pour la paix du monde."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Faits divers",
    "title": "Le Général Cléry",
    "summary": "Le général Cléry, commandant l'armée de secours, est issu d'une lignée irlandaise de Cork dont la branche française contracta des alliances illustres, notamment avec la famille Bonaparte et la royauté suédoise.",
    "paragraphs": [
      "Le général Cléry, qui commande l'armée de secours, appartient à une vieille famille de Cork liée aux maisons royales d'Europe. Son grand-oncle, Henry Cléry, émigra en France ; l'une de ses filles épousa Joseph Bonaparte et l'autre devint reine de Suède."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "Soldats anglais et blessés boers",
    "summary": "Des allégations de cruauté commises par des lanciers anglais contre des blessés boers à Elandslaagte provoquent l'indignation et des menaces de représailles sans merci de la part des troupes adverses.",
    "paragraphs": [
      "Une lettre publiée par le Haarlemsche Courant dénonce des actes de cruauté perpétrés par des lanciers anglais envers des blessés boers lors de la bataille d'Elandslaagte.",
      "Les Boers, exaspérés par ces agissements, auraient juré de ne faire aucun quartier aux lanciers."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Éditorial",
    "title": "Susceptibilités anglaises",
    "summary": "L'opinion publique britannique s'offusque des caricatures visant la reine Victoria. L'auteur rappelle aux Anglais le précédent de Fachoda et le traitement subi par M. Loubet pour souligner leur excès de courroux.",
    "paragraphs": [
      "L'opinion anglaise accepte mal les critiques et les caricatures visant la reine Victoria. Si le manque de courtoisie peut nuire au prestige, il est bon de rappeler que la presse anglaise fut fort peu clémente lors de l'incident de Fachoda.",
      "Face à la colère britannique, l'auteur compare le traitement infligé à la reine Victoria avec celui que subit quotidiennement M. Loubet en France, suggérant aux Anglais de méditer sur cette comparaison."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Politique intérieure",
    "title": "Chambre des députés : Séance du 30 novembre",
    "summary": "Clôture de la discussion sur le budget de l'Intérieur à la Chambre, marquée par les interpellations de M. Fournière et les annonces de M. Waldeck-Rousseau concernant le contrôle des établissements privés.",
    "paragraphs": [
      "La Chambre a terminé la discussion sur le budget du ministère de l'Intérieur après une interpellation de M. Fournière sur les conditions de travail et la nature des établissements religieux.",
      "M. Waldeck-Rousseau a annoncé l'ouverture d'instructions judiciaires et le dépôt prochain d'un projet de loi visant à réguler le fonctionnement des établissements d'assistance privée."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Dépêches de l'étranger",
    "title": "Morts et découvertes insolites",
    "summary": "Décès du prince Ruspoli, ancien maire de Rome, et découverte spectaculaire par des pêcheurs new-yorkais d'un navire russe, préservé par les glaces depuis février 1850.",
    "paragraphs": [
      "On annonce la mort du prince Ruspoli, ancien maire de Rome.",
      "Un bateau de pêche new-yorkais rapporte avoir découvert, dans les régions polaires, un navire russe abandonné depuis février 1850. La cargaison de fourrures et les vivres retrouvés à bord étaient en parfait état de conservation grâce à la rigueur du froid."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Économie",
    "title": "Chemins de fer d'Anatolie",
    "summary": "La Turquie concède officiellement à la Compagnie des chemins de fer d'Anatolie la construction stratégique de la voie ferrée reliant Konia à Bagdad et Bassora, un projet d'envergure internationale.",
    "paragraphs": [
      "La Turquie a accordé à la Compagnie des chemins de fer d'Anatolie la concession définitive pour la construction de la ligne reliant Konia à Bagdad et Bassora."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Justice",
    "title": "La Haute Cour : Dix-huitième audience",
    "summary": "La dix-huitième audience de la Haute Cour se poursuit. Les témoignages des agents de police sur l'affaire du fort Chabrol mettent en lumière les tensions persistantes et les contradictions concernant les tirs de M. Guérin.",
    "paragraphs": [
      "La Haute Cour poursuit l'audition des témoins concernant le fort Chabrol. Les agents de police relatent les agressions perpétrées par M. Guérin ainsi que les incidents survenus lors des tentatives de ravitaillement.",
      "Le débat se concentre désormais sur la présence de balles sur les lieux et sur les témoignages contradictoires concernant les tirs de M. Guérin."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Reportage",
    "title": "L'œuvre de la France en Égypte et sur le canal de Suez",
    "summary": "Trente ans après les débuts du canal de Suez, le génie français a transformé le désert en une terre prospère. Entre progrès industriel, œuvre sociale et dispensaires, le rayonnement de la France en Orient est total.",
    "paragraphs": [
      "Il y a trente ans, ce n'était que le désert dans toute sa tragique horreur. Aujourd'hui, près de dix hectares sont couverts d'arbres de haute futaie, presque tous originaires des pays rhénans. Voitures, piétons et cyclistes circulent sous les ombrages, tandis que dans les jardins, pruniers, pommiers et rosiers de France poussent vigoureusement sur cette terre redevenue fertile.",
      "L'œuvre sociale, portée par l'amélioration de l'éducation intellectuelle et morale, complète chaque jour la grandeur matérielle de l'effort consenti par le génie français sur cette terre. Les promoteurs de l'entreprise s'efforcent, dès l'origine, d'appliquer les principes de mutualité, de participation aux bénéfices et d'association du capital et du travail.",
      "Il convient également de rendre hommage aux Français qui, sur cette terre lointaine, se sont voués au soin des malades et à l'instruction des enfants. À Port-Saïd comme à Ismaïlia, les écoles accueillent les visiteurs par des chœurs d'enfants de toutes origines, souhaitant la bienvenue aux touristes.",
      "Enfin, une mention particulière est due aux dispensaires établis à Ismaïlia et à Port-Thewfik. Le nombre des consultations y est considérable, et de partout, les Arabes se hâtent vers ces asiles où la science rivalise avec la charité."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Théâtre",
    "title": "Théâtre du Palais-Royal : Le vaudeville Coralie et Cie",
    "summary": "Le Théâtre du Palais-Royal renoue avec le succès grâce au vaudeville « Coralie et Cie », une pièce rythmée par des quiproquos irrésistibles et une mise en scène pleine de fantaisie.",
    "paragraphs": [
      "Le Palais-Royal, qui n'avait pas été très heureux jusqu'ici, a mis la main sur un vaudeville contenant un acte absolument drôle et d'une fantaisie fort originale. L'histoire tourne autour d'un ménage, les Dufouret, et de leur tante, Mlle Laure, vieille fille renfrognée. La femme, Mme Dufouret, amoureuse de belles toilettes, se fait habiller chez Coralie et Cie, une maison qui cache en réalité des salons pour rendez-vous galants.",
      "L'intrigue se noue autour de quiproquos, de petits billets compromettants et d'une vieille fille qui mène sa vengeance contre les hommes. Le deuxième acte est une merveille de drôlerie, avec une transformation inattendue du décor où le salon de repos devient un salon d'essayage, laissant les commissaires de police dans l'ignorance totale.",
      "La pièce est interprétée avec brio par MM. Naimond, Boisselot, Hamilton, Lamy, et par Mmes Cheirel, Marcelle Bordo, Leriche et Mérial."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Théâtre",
    "title": "Opéra-Comique : Reprise de Proserpine",
    "summary": "L'Opéra-Comique remet à l'affiche « Proserpine » de Camille Saint-Saëns, un drame lyrique au romantisme échevelé, soutenu par une distribution de grande qualité.",
    "paragraphs": [
      "Le théâtre de l'Opéra-Comique vient de remettre à son répertoire une œuvre intéressante de M. Camille Saint-Saëns : Proserpine. Le compositeur y a apporté quelques remaniements et il en appelle, du jugement du public d'il y a douze ans, à celui d'aujourd'hui.",
      "Le livret, tiré par Gallet d'un poème d'Auguste Vacquerie, offre un drame lyrique au romantisme échevelé. L'œuvre, bien conduite par M. Luigini et suffisamment interprétée par Mme de Nuovina, Mlle Mastio et MM. Clément, Isnardon et Vieulle, méritait assurément de reparaître sur l'affiche."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Échos et Nouvelles",
    "title": "Activités officielles et faits divers",
    "summary": "Le Président reçoit les autorités, un duel entre journalistes se solde par une blessure, et une découverte archéologique romaine est faite lors de travaux à Angicourt.",
    "paragraphs": [
      "Le Président de la République a reçu hier matin M. Catuat, ministre de France à Stockholm, le vice-amiral Barrera, ainsi que plusieurs généraux et préfets.",
      "À la suite d'une polémique de presse, une rencontre à l'épée a eu lieu hier entre nos confrères MM. Raphaël Viau et Jules Huiv. M. Raphaël Viau a été atteint à l'épaule droite d'une blessure pénétrante, ce qui a mis fin au combat.",
      "Les ouvriers pratiquant des fouilles pour le sanatorium d'Angicourt, dans l'Oise, ont découvert un pot de grès contenant environ cent quarante pièces de monnaie anciennes à l'effigie d'empereurs romains."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Bulletin du Travail",
    "title": "Grève des ouvriers maréchaux",
    "summary": "Les ouvriers maréchaux, en grève, protestent contre l'emploi de militaires pour assurer les services publics et contestent les déclarations du préfet Lépine.",
    "paragraphs": [
      "À la suite de la démarche effectuée par les grévistes auprès de M. Waldeck-Rousseau, président du Conseil, les maréchaux militaires mis à la disposition de certaines compagnies ou de loueurs de voitures ont suspendu le travail. Seuls les services publics continuent à être assurés.",
      "Les ouvriers, au nombre de deux mille, ont vivement protesté contre le discours prononcé par M. Lépine, préfet de police. Ils affirment que les services publics ne sont pas uniquement assurés par les militaires et se félicitent du succès de leur mouvement."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "Agression contre des gardiens de la paix",
    "summary": "Deux gardiens de la paix ont été violemment agressés rue de Rambuteau alors qu'ils tentaient d'interpeller une femme. Les deux agresseurs ont été arrêtés.",
    "paragraphs": [
      "Les gardiens de la paix Chastan et Chambon, en service rue de Rambuteau, ont été violemment agressés par des individus alors qu'ils tentaient d'arrêter une femme causant un scandale. Roués de coups et piétinés, ils ont été transportés à l'Hôtel-Dieu dans un état pitoyable. Les deux agresseurs ont pu être appréhendés."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident mortel à l'imprimerie",
    "summary": "Un apprenti de treize ans, le jeune Jean-Louis March, a trouvé la mort dans un tragique accident du travail à l'imprimerie des sourds et muets, rue d'Alésia.",
    "paragraphs": [
      "Dans l'après-midi d'hier, un apprenti de treize ans, le jeune Jean-Louis March, a été tué à l'imprimerie des sourds et muets, rue d'Alésia, par une courroie de transmission qu'il tentait de replacer sur une poulie en marche."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits Divers",
    "title": "Enlèvement d'enfant à Lens",
    "summary": "Le jeune Louis Plouvier, disparu de Beaurains, a été retrouvé à Lens. Il était retenu par des saltimbanques qui exploitaient des enfants pour le travail.",
    "paragraphs": [
      "Le jeune Louis Plouvier, âgé de douze ans, avait disparu de Beaurains. Il a été retrouvé après avoir été retenu par des saltimbanques qui forçaient les enfants à travailler à Lens. L'enfant a réussi à s'échapper à pied, accompagné d'un chien de garde."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Justice",
    "title": "Procès pour contrefaçon pharmaceutique",
    "summary": "Le Tribunal de la Seine a condamné M. Michel-Louis Robin, pharmacien à Clermont, pour avoir usurpé le nom de M. Maurice Robin dans la commercialisation de ses produits pharmaceutiques.",
    "paragraphs": [
      "Le Tribunal de la Seine vient de mettre fin à une affaire de contrefaçon concernant le Peptonate de Fer de M. Maurice Robin. Un pharmacien de Clermont, M. Michel-Louis Robin, utilisait le nom « Robin » de manière trompeuse pour vendre ses propres produits. Le tribunal a condamné ce dernier à changer la dénomination de ses spécialités et à verser des dommages-intérêts à M. Maurice Robin."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Courses Hippiques",
    "title": "Compte-rendu des épreuves hippiques",
    "summary": "Récit des épreuves hippiques où Cloîtrée, Irisée et V'lau se sont illustrés par des victoires remarquées, malgré une concurrence disputée et quelques fautes de parcours notables.",
    "paragraphs": [
      "Après le saut du mur en terre, Mathias avait une dizaine de longueurs d'avance et paraissait maître de la situation ; mais Cloîtrée se mit à sa poursuite, le rejoignit à la dernière haie et gagna d'une longueur et demie.",
      "Irisée n'a pas eu de peine à s'adjuger le prix du Merlerault. Elle s'est tenue en tête jusqu'à la rivière du huit où L'Aurore, qui avait fait une grosse faute à la rivière des tribunes, la dépassa. Dans la ligne droite, Irisée revint et garda le meilleur jusqu'au bout, malgré une vive attaque de Sommeil qui prit la seconde place à L'Aurore.",
      "Master Binka a enlevé d'une tête le prix La Risle, aux dépens de Collet qui avait fait le jeu avec Rhodogune, troisième. Lorient et Baléare ont mal tourné.",
      "Dans le prix des Allées, V'lau a fait des débuts prometteurs pour un hurdle-racer. Après s'être tenu au premier rang pendant le parcours, il a gagné de quatre longueurs très aisément. Clodomir II, second, précédait Saint-Séraphin d'une encolure."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Santé Publique",
    "title": "Statistique hebdomadaire de la ville de Paris",
    "summary": "La statistique municipale enregistre 886 décès pour la 47e semaine. La fièvre typhoïde est en nette décroissance, tandis que les naissances et mariages parisiens maintiennent leurs niveaux habituels.",
    "paragraphs": [
      "Le service de la statistique municipale a compté, pendant la 47e semaine, 886 décès, chiffre qui s'éloigne peu de la moyenne ordinaire de la saison.",
      "La fièvre typhoïde a causé 13 décès (au lieu de 18 pendant la semaine précédente). Le nombre des cas nouveaux signalés par les médecins est en très notable décroissance : 55 cas nouveaux, au lieu de 91 pendant la semaine précédente et au lieu d'une centaine pendant les semaines antérieures.",
      "La rougeole, toujours rare en cette saison, n'a causé que 2 décès. La scarlatine (3 décès) et la coqueluche (2) présentent des chiffres voisins de la moyenne. Il n'y a pas eu un seul décès par variole depuis cinq mois.",
      "La diarrhée infantile, qui avait été très rare pendant les deux dernières semaines, s'élève subitement au-dessus de la moyenne (38 décès de 0 à 1 an). Les maladies inflammatoires des organes de la respiration ont causé 108 décès. La phtisie a causé 172 décès. Il y a eu 10 suicides et 6 autres morts violentes.",
      "On a célébré à Paris 486 mariages. On a enregistré la naissance de 1030 enfants vivants (520 garçons et 510 filles), dont 954 légitimes et 76 illégitimes. On a déclaré la naissance de 83 mort-nés."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Littérature et Agriculture",
    "title": "Revue de la presse agricole",
    "summary": "Sommaire de l'Agriculture Nouvelle proposant des études variées sur la viticulture, l'horticulture, la fabrication du cidre et les questions de législation rurale pour les cultivateurs.",
    "paragraphs": [
      "Lire cette semaine dans L'Agriculture Nouvelle, numéro de la semaine, 120 pages de texte et de gravures : Nos Expositions agricoles, par J. de Beauce ; En faveur de la Fouilleuse, par G. Battanchon ; La Culture rationnelle de la Vigne, par Devillers ; Les Engrais organiques et la Question de l'Azote, par J. Dumont.",
      "Signalons aussi la suite de l'intéressante étude illustrée sur la fabrication du cidre par J. Troude. Le docteur H. George traite également la question du cidre dans ce même numéro, mais au point de vue purement alimentaire.",
      "Parmi les articles illustrés, il y a lieu de noter également le curieux article de M. J. de Loverdo sur les serres, au point de vue horticole et industriel. Citons en outre, dans les articles d'horticulture, celui consacré au choix des porte-graines de quelques légumes par le savant professeur A. Magnien et celui de S. Mottet sur les plantes grimpantes ornementales. Les cultivateurs liront encore avec profit l'article consacré aux labours profonds par S. Renaud.",
      "Les questions de législation rurale, très développées par M. Léon Lesage, seront un précieux enseignement pour les lecteurs."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Actualités des scènes parisiennes",
    "summary": "Panorama des théâtres parisiens : Robinson Crusoé au Châtelet, succès persistant de Cartouche, et annonces des prochaines représentations à la Comédie-Française et au Théâtre Déjazet.",
    "paragraphs": [
      "Ce soir, au théâtre du Châtelet, cinquantième représentation de Robinson Crusoé.",
      "Neuf cent quatorze représentations à Paris n'ont pas épuisé le succès de Cartouche, qui fait salle comble tous les soirs à l'Ambigu. La Comédie-Française remet définitivement au lundi 11 décembre la première représentation de La Conscience de l'enfant, de M. Gaston Devore.",
      "Au théâtre lyrique de la Renaissance, on remarquera qu'Iphigénie en Tauride n'est pas intitulée opéra, mais bien tragédie lyrique. La première représentation remonte au 18 mai.",
      "Au Théâtre Déjazet, les employés et les ouvriers de la section russe de l'Exposition de 1900 assisteront, ce soir, à la représentation de Joli Sport, pour applaudir leur divette Debriège dans ses chansons et ses danses de l'Oural."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Sports",
    "title": "Championnat de lutte et activités sportives",
    "summary": "La rencontre de lutte entre Constant le Boucher et Laurent le Beaucairois est reportée à ce soir. Par ailleurs, la course cycliste de New-York est limitée à douze heures par jour, et un assaut d'armes aura lieu dimanche.",
    "paragraphs": [
      "Pour terminer le championnat des poids lourds, Constant le Boucher et Laurent le Beaucairois devaient se rencontrer hier soir au Casino de Paris ; mais, vu l'état de fatigue de Constant, cette rencontre est remise à ce soir, vendredi.",
      "C'est après-demain, dimanche, que commencera à New-York la course de six jours annuelle. Cette épreuve n'aura pas toutefois, cette année, le caractère barbare que nous lui reprochions. Les concurrents, en effet, ne pédaleront que douze heures sur vingt-quatre, une loi récente interdisant les courses cyclistes de longue haleine dans l'État de New-York.",
      "MM. Gamoty frères et leurs élèves donneront dimanche prochain, à trois heures, 11 bis, rue Balzac, un grand assaut d'armes."
    ]
  }
];
