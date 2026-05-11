// src/data/FairyLore.js
// Fiches complètes des types de fées — extraites du Manuel du Joueur (280 p.)
// Réservé aux Initiés — ne pas exposer aux joueurs non initiés.

const FAIRY_LORE = {

  // ─────────────────────────────────────────────
  // FAUX-SEMBLANT ENFOUI
  // ─────────────────────────────────────────────
  'faux_semblant_enfoui': {
    apparence: "Rien ne distingue un Faux-Semblant enfoui d'un humain. S'il est de taille moyenne, il peut être n'importe quelle fée. S'il est clairement plus petit que la moyenne (1,55 m et moins), la probabilité que sa nature féérique soit celle d'une fée de petite taille est plus grande. Inversement, s'il est nettement plus grand que la moyenne (1,75 m et plus), il est probable qu'il soit une fée de taille moyenne, grande ou très grande.",
    taille: "Variable",
    modeReproduction: "Mammifère",
    habitat: "Les Faux-Semblants enfouis peuvent vivre n'importe où mais peut-être instinctivement ont-ils choisi de vivre dans un endroit affectionné par la fée qui sommeille en eux.",
    caractere: "Le caractère d'un Faux-Semblant enfoui est totalement libre. Cependant, les traits de personnalité dominants reflètent souvent des tempéraments fréquents chez le type de fée enfoui en lui. Le Faux-Semblant enfoui peut soupçonner être une fée pour diverses raisons : son ascendance, un statut de Féal, ou s'il fait des rêves prémonitoires avec des fées.",
    personnagesCelebres: [],
    capacites: [
      "Insensibilité à l'argent : tant que le Faux-Semblant enfoui a moins de 3 en Féérie, l'argent n'a sur lui que des effets bénins (quelques rougeurs). Il ne subit pas les dégâts supplémentaires liés à l'argent dont souffrent les Faux-Semblants révélés.",
      "Tricherie accrue : lorsqu'il est Héritier, bénéficie d'1 point de Tricherie supplémentaire par rapport à son score normal. Cet avantage disparaît au moment de la révélation de sa nature féérique.",
    ],
    pouvoirs: {
      masques: [],
      demasques: [],
      profond: "Se révèleront quand la Féérie atteindra 3",
      legendaire: "Se révèleront quand la Féérie atteindra 3",
    },
    atouts: [
      { nom: "Féal", texte: "Vous êtes le Féal d'une fée noble ayant le titre de Chevalier d'une petite ville. Cette fée vous protège et garantit que vous respectez la Loi du Silence." },
      { nom: "Vilain petit canard de la noblesse féérique", texte: "Vous êtes le rejeton d'une grande famille (Frédon, Aldébard, Carwent, Baudemagu, Bermellon, Glaucos, Golderon, Gwendelon, Gwestiniog) mais avez été la déception de vos parents. Vous portez un nom féérique noble gratuitement, réduisant votre malus d'Infériorité politique à -1 au lieu de -2. Spécialité gratuite Politique pour Entregent et rang gratuit en Héraldique." },
      { nom: "Marginal innocent", texte: "Votre marginalité est un atout : vous pouvez jouer la neutralité et la candeur. Bonus de +1 aux tests de Classe ou Séduction quand un comportement est attendu, et aux tests de Comédie pour jouer les naïfs auprès d'une fée." },
      { nom: "Ancrage humain fort", texte: "Vous avez passé la plupart de votre vie parmi les humains. Spécialité gratuite en Entregent pour un type de milieu humain au choix, plus 3 Points de Personnage supplémentaires pour des Contacts humains." },
      { nom: "Spécialités supplémentaires", texte: "2 au choix à la création de personnage." },
    ],
    competencesUtiles: ["Inconnues (révélées lors de la révélation) — remplacées par 10 points libres et 2 Spécialités au choix"],
    competencesFutiles: ["Inconnues (révélées lors de la révélation) — remplacées par 4 points libres"],
    noteDocte: "Les pouvoirs féériques du Faux-Semblant enfoui se révèleront uniquement quand la note de Féérie atteindra 3. Avant cela, il est mécaniquement un humain amélioré.",
  },

  // ─────────────────────────────────────────────
  // L'ANGE
  // ─────────────────────────────────────────────
  'ange': {
    apparence: "L'ange est un être humanoïde à la peau laiteuse, légèrement luminescente. Il possède une paire d'ailes souvent blanches comme la neige mais parfois grises ou noires, aux plumes douces comme la soie. Son apparence est tantôt douce, tantôt farouche, mais toujours majestueuse.",
    taille: "Moyenne",
    modeReproduction: "Mammifère",
    habitat: "Aucun habitat privilégié.",
    caractere: "Sous son apparence de douceur, l'ange cache bien souvent un tempérament de feu. Il déteste l'injustice et s'applique, où qu'il se trouve, à la corriger. Bien entendu, il possède de la justice une idée qui lui est souvent très personnelle et répond rarement aux canons de la société à laquelle il appartient, qu'elle soit féérique ou humaine. Les aristocrates féériques ont tendance à penser que les anges sont des créatures dangereuses car bien peu malléables.",
    personnagesCelebres: ["Jeanne d'Arc", "Maximilien de Robespierre", "Harriet Tubman", "Emmeline Pankhurst"],
    capacites: [
      "Ailes",
      "Luminescence",
      "Au choix (définitif) : Agilité accrue / Précision accrue / Prestance accrue",
    ],
    pouvoirs: {
      masques: ["Calme", "Feu sacré", "Imposition des mains", "Sens de la vérité"],
      demasques: ["Berserker", "Éblouissement"],
      profond: "Bénédiction (masqué)",
      legendaire: "Aura de sainteté (démasqué)",
    },
    atouts: [
      { nom: "Ami des opprimés", texte: "Une fois par scénario, l'ange peut s'inventer parmi ses connaissances un Contact prêt à lui rendre service, parmi des personnes qu'il a aidées dans le passé." },
      { nom: "Arme fétiche", texte: "Une arme améliorée par un fouinard ou gnome et ornée par un joaillier, qui procure +1 point de dégâts et +1 aux interactions sociales où elle est visible." },
      { nom: "Domestique dévoué", texte: "Un domestique humain traité particulièrement bien, Allié et Féal. Caractéristiques d'un Larbin (4 Carac et Compétences au rang 3, 4 au rang 2)." },
      { nom: "Enthousiasme des foules", texte: "Lorsqu'il s'exprime en public sur une grande cause, bonus de +2 à tous ses tests de Rhétorique." },
      { nom: "Spécialités typiques", texte: "Premiers soins dans Médecine et Persuader dans Rhétorique." },
    ],
    competencesUtiles: ["Fortitude", "Médecine", "Mêlée ou Tir (au choix)", "Rhétorique", "Sensibilité", "+ Spécialité gratuite Vol dans Mouvement"],
    competencesFutiles: ["Chant ou Musique (au choix)", "Une Compétence artistique au choix"],
    noteDocte: "Sous forme démasquée, l'ange ressemble à s'y méprendre aux anges de l'iconographie religieuse. Tout croyant sincère le prendra pour un ange divin s'il ne connaît pas l'existence des fées. Sa Luminescence persistante le trahit dans l'obscurité : toute action de discrétion visuelle est automatiquement un échec.",
  },

  // ─────────────────────────────────────────────
  // LE BASTET
  // ─────────────────────────────────────────────
  'bastet': {
    apparence: "Le bastet est une créature gracieuse de forme humanoïde mais à tête de chat : il a des oreilles pointues, des moustaches et des yeux de félin ; sa queue est longue et son pelage soyeux.",
    taille: "Moyenne",
    modeReproduction: "Mammifère",
    habitat: "Du fait de sa fréquente inclination pour le confort et le luxe, le bastet apprécie peu la campagne. Il préfère les commodités que lui procure la vie moderne : électricité, eau courante, chauffage et calèches moelleuses.",
    caractere: "Le bastet est une créature foncièrement joueuse et paresseuse. Point trop d'efforts, s'il vous plaît, et dans le plaisir, si possible. En outre, le bastet est incorrigiblement séducteur et indépendant. Il a beau séduire, il ne recherche que son propre plaisir et n'hésitera pas à abandonner l'être qui l'aime si ce dernier est incommodant ou ennuyeux. Le bastet aime ce qui est brillant et superficiel. Il ne tombe que rarement amoureux.",
    personnagesCelebres: ["Arsène Lupin", "Oscar Wilde", "le Chat botté", "Liane de Pougy"],
    capacites: [
      "Pattes de velours",
      "Vision nocturne",
      "Au choix (définitif) : Agilité accrue / Crochets d'escalade / Perception accrue",
    ],
    pouvoirs: {
      masques: ["Charme", "Chute indolore", "Équilibre du funambule", "Métamorphose en chat"],
      demasques: ["Prédation", "Réflexe surhumain"],
      profond: "Ruse du chat botté (masqué)",
      legendaire: "9 vies (masqué)",
    },
    atouts: [
      { nom: "Ami des chats", texte: "Le bastet peut communiquer avec les chats comme s'il possédait le Pouvoir Communication animale. Dans un quartier, il peut organiser un réseau d'espions félins." },
      { nom: "Contacts mondains", texte: "Un Contact mondain appartenant à la noblesse ou à la grande bourgeoisie humaine dans la plupart des régions de France et les capitales européennes. Spécialité Beau monde pour Entregent." },
      { nom: "Grâce féline", texte: "Sa Spécialité Élégance lui confère +2 au lieu de +1 (non cumulatif avec la séduction). Il trouve d'instinct le lieu le plus confortable des environs sans test." },
      { nom: "Malice", texte: "Bonus de +1 pour tous ses tests d'Habiletés (Ingéniosité)." },
      { nom: "Spécialités typiques", texte: "Chasse dans Survie ; Moyen improvisé dans Habiletés." },
    ],
    competencesUtiles: ["Classe + Spécialité Élégance", "Habiletés + Spécialité Ingéniosité", "Larcin", "Séduction", "Survie"],
    competencesFutiles: ["Danse ou Potins mondains (au choix)", "Jeux"],
  },

  // ─────────────────────────────────────────────
  // L'ELFE
  // ─────────────────────────────────────────────
  'elfe': {
    apparence: "L'elfe est un être humanoïde de taille légèrement inférieure à la moyenne humaine aux oreilles fines et pointues, au teint pâle et aux yeux clairs et irisés. Il se meut avec une grâce surnaturelle et semble toujours élégant grâce à sa silhouette mince et gracile. L'elfe est la finesse faite fée.",
    taille: "Moyenne",
    modeReproduction: "Mammifère",
    habitat: "Traditionnellement et naturellement, les elfes sont les rois de la forêt. Pourtant, les elfes sont aussi les princes de la société féérique grâce à leurs talents sociaux, au pouvoir accumulé par la famille Aldébard et à la préférence elfique. Ils hantent toutes les cours d'Europe, conciliant leur aspect sociable avec leur tendance forestière en possédant des manoirs à la campagne.",
    caractere: "Les elfes dominent toute une partie de la société féérique et sont très au fait de leur suprématie. C'est pourquoi leur orgueil est souvent sans bornes et leur ambition jamais assouvie. Sous leurs airs fragiles, les elfes peuvent se transformer en tueurs froids, sans scrupules et sans pitié, afin de raffermir leur pouvoir. Ainsi, toute fée se méfie des elfes, sans jamais le montrer.",
    personnagesCelebres: ["le peintre Raphaël", "Aliénor d'Aquitaine", "Aramis"],
    capacites: [
      "Dissimulation végétale",
      "Vision nocturne",
      "Au choix (définitif) : Agilité accrue / Prestance accrue / Vision décuplée",
    ],
    pouvoirs: {
      masques: ["Coup d'œil", "Communication animale et végétale", "Équilibre du funambule", "Noblesse oblige"],
      demasques: ["Botte secrète", "Réflexe surhumain"],
      profond: "Grâce sublime (démasqué)",
      legendaire: "Majesté royale (démasqué)",
    },
    atouts: [
      { nom: "Ami des druides", texte: "Bonus de +2 dans toutes les interactions sociales avec les druides." },
      { nom: "Déplacement silencieux", texte: "Bonus de +1 à ses tests de Discrétion faisant intervenir la détection du bruit." },
      { nom: "Fragilité trompeuse", texte: "Bonus de +1 supplémentaire à ses tests d'Initiative quand il s'attend à attaquer (ne fonctionne pas quand surpris ou attaqué lui-même)." },
      { nom: "Propriété somptueuse", texte: "Un superbe hôtel particulier tenu par une nuée de domestiques, rempli de meubles magnifiques. Bonus de +2 en Fortune." },
      { nom: "Spécialités typiques", texte: "Culture générale dans Culture ; Beau monde dans Entregent." },
    ],
    competencesUtiles: ["Classe + Spécialité Élégance", "Culture", "Entregent", "Mêlée ou Tir (au choix)", "Sensibilité"],
    competencesFutiles: ["Arts plastiques + Spécialité Critique ou Création", "Musique ou Héraldique (au choix)"],
  },

  // ─────────────────────────────────────────────
  // LE FARFADET
  // ─────────────────────────────────────────────
  'farfadet': {
    apparence: "Le farfadet mesure environ un mètre quarante. Joyeux et rigolard, son agilité n'en est pas moins déconcertante et il est plus costaud que sa petite taille ne le laisserait supposer. Ses mains sont assez larges, carrées et calleuses. Depuis quelques dizaines d'années, certains farfadets subissent des mutations : leur peau prend une teinte verte (farfadets verts, affinité absinthe) ou grise (farfadets gris, affinité morphine).",
    taille: "Petite (+1 Esquive, +1 SD Tir adverse)",
    modeReproduction: "Mammifère",
    habitat: "Les lieux de sociabilité où l'on boit, où l'on joue et où l'on fait la fête, mais aussi les endroits où l'on s'occupe des chevaux.",
    caractere: "Les farfadets aiment la fête, le rire et la joie. On ne s'ennuie jamais avec eux, et ils sont de redoutables convives. Rares sont ceux qui peuvent se targuer de conserver tous leurs souvenirs d'une nuit passée avec des farfadets. Mais sous cet aspect fêtard, ce sont aussi d'agiles cavaliers et de sacrés roublards, beaucoup plus malins que ce que leur jovialité ne laisse paraître.",
    personnagesCelebres: ["Francis Drake", "Cartouche", "Gavroche"],
    capacites: [
      "Dissimulation végétale",
      "Odorat décuplé",
      "Au choix (définitif) : Agilité accrue / Constitution accrue / Force accrue",
    ],
    pouvoirs: {
      masques: ["Équilibre du funambule", "Fou rire", "Paroles enivrantes", "Passe-partout"],
      demasques: ["Réflexe surhumain", "Métamorphose en cheval"],
      profond: "Griserie chanceuse (masqué)",
      legendaire: "Chance du trèfle à 4 feuilles (masqué)",
    },
    atouts: [
      { nom: "Prince des ivrognes", texte: "Dans n'importe quel débit de boisson, le farfadet y trouve toujours un Contact. Bonus de +2 aux tests de Comédie pour feindre l'ivresse et aux tests de Ressort + Constitution pour résister à l'alcool." },
      { nom: "Bonimenteur", texte: "Bonus de +1 pour convaincre de sa bonne foi (même en mentant) et de +2 pour inciter quelqu'un à boire." },
      { nom: "Murmure à l'oreille des chevaux", texte: "Communication animale avec les chevaux uniquement. Bonus de +1 à tous ses tests de Conduite (Équitation et Conduite d'attelage)." },
      { nom: "Chaudron de pièces d'or", texte: "Une réserve de pièces d'or dans un petit chaudron, qui octroie +1 en Fortune." },
      { nom: "Spécialités typiques", texte: "Connaissance de la pègre dans Monde du crime ; Mensonge dans Comédie." },
    ],
    competencesUtiles: ["Comédie", "Conduite (Équitation + Conduite d'attelage)", "Habiletés", "Monde du crime", "Ressort + Spécialité Endurer"],
    competencesFutiles: ["Jeux ou Œnologie (au choix)", "Production de liqueur de berthaniel / d'absinthe / de morphine"],
    noteDocte: "Le farfadet peut produire en une nuit une quantité en litres de liqueur de berthaniel égale à ses rangs de Féérie + Production. Les farfadets gris produisent des doses de morphine, les verts de l'absinthe.",
  },

  // ─────────────────────────────────────────────
  // LE GNOME
  // ─────────────────────────────────────────────
  'gnome': {
    apparence: "Le gnome est un individu humanoïde d'environ un mètre quarante, aux traits grossiers, aux membres un peu trop courts et souvent affublé de malformations (pied bot, bosse, verrue, taches de vin, pilosité disgracieuse, etc.).",
    taille: "Petite (+1 Esquive, +1 SD Tir adverse)",
    modeReproduction: "Mammifère",
    habitat: "Le gnome vit souvent en marginal, parfois en ermite, le plus souvent dans des endroits souterrains. Il est aujourd'hui passionné par les constructions souterraines humaines et modernes : tunnels, métropolitain, égouts…",
    caractere: "Qu'il soit alchimiste, ingénieur, philosophe ou artiste, le gnome est un esprit fort, souvent un original, avec un goût prononcé pour les profondeurs. Pourtant, le gnome est profondément créatif et parfois visionnaire, toujours en quête d'une idée qui paraît absurde, ou d'un mystère qu'il s'ingénie à creuser. Car le gnome est par nature entêté et brillant.",
    personnagesCelebres: ["Socrate", "Paracelse", "Comte de Cagliostro", "Hypatie", "Émilie du Châtelet"],
    capacites: [
      "Mort différée",
      "Vision nocturne",
      "Au choix (définitif) : Doigts de fée / Esprit accru / Sang-froid accru",
    ],
    pouvoirs: {
      masques: ["Altération structurelle", "Conte à dormir debout", "Sens de la vérité", "Simili-mort"],
      demasques: ["Secousse tellurique", "Régénération souterraine"],
      profond: "Ramollissement du métal (démasqué)",
      legendaire: "Omniscience (masqué)",
    },
    atouts: [
      { nom: "Affinité occulte", texte: "Sensibilité particulière avec les esprits et ce qui est secret. Bonus de +1 à tous ses tests d'Occultisme." },
      { nom: "Aisance souterraine", texte: "Bonus de +2 aux tests de Survie ou de Spéléologie pour s'orienter et se nourrir sous terre." },
      { nom: "Repaire souterrain", texte: "Un terrain de modestes dimensions abritant une grotte ou grande cave immense, dont il est le seul à connaître l'entrée. Y stocke livres, outils, œuvres et inventions de toutes sortes." },
      { nom: "Santé de fer", texte: "Le gnome n'est jamais malade, y compris lorsque la maladie est de nature féérique (comme le pouvoir Contagion)." },
      { nom: "Spécialités typiques", texte: "Maîtrise de soi dans Fortitude et Explosifs dans Habiletés." },
    ],
    competencesUtiles: ["Culture + Spécialité Folklore féérique", "Habiletés + Spécialité Artisanat", "Fortitude", "Occultisme", "Sciences"],
    competencesFutiles: ["Divination ou Compétence artistique au choix + Spécialité Création", "Spéléologie ou Géologie (au choix)"],
    noteDocte: "Les gnomides ont souvent été qualifiées de sorcières à cause de leur aspect difforme et leur goût pour les lieux sombres. Insensibilité totale aux poisons et drogues normaux — seules les préparations des druides ou nécromanciens les affectent.",
  },

  // ─────────────────────────────────────────────
  // LE GOBELIN
  // ─────────────────────────────────────────────
  'gobelin': {
    apparence: "Le gobelin est un petit être verdâtre mesurant environ un mètre quarante, couvert de pustules, possédant de gros yeux jaunes et des crocs peu engageants.",
    taille: "Petite (+1 Esquive, +1 SD Tir adverse)",
    modeReproduction: "Ovipare. Les femelles pondent d'un à quatre œufs, les couvent et les protègent pendant quinze semaines, délai au-delà duquel les œufs éclosent en laissant échapper un liquide verdâtre répugnant.",
    habitat: "Les gobelins ne vivent jamais loin d'une communauté humaine ou féérique et sont devenus urbains car ils ne peuvent rien produire de leurs mains. Ils ont tendance à vivre en communautés d'au moins quatre individus.",
    caractere: "Les gobelins sont à la fois parasites, nuisibles et, souvent, lâches. Ils aiment bien le désordre et casser des choses. Ils ont besoin des autres pour survivre mais ne supportent pas d'être subordonnés à quiconque. Leurs activités principales sont le larcin et les trafics en tous genres. Les gobelins sont de parfaits truands qui adorent terroriser les bonnes gens.",
    personnagesCelebres: ["Mandrin", "Ravachol", "Billy le Kid", "Calamity Jane"],
    capacites: [
      "Crocs et griffes",
      "Vision thermique",
      "Au choix (définitif) : Agilité accrue / Perception accrue / Précision accrue",
    ],
    pouvoirs: {
      masques: ["Cri de guerre", "Haleine fétide", "Passe-partout", "Regard dissuasif"],
      demasques: ["Berserker", "Mue"],
      profond: "Enfant du chaos (démasqué)",
      legendaire: "Esprit de la ruche (démasqué)",
    },
    atouts: [
      { nom: "Argot gobelin", texte: "Maîtrise d'un argot que seuls les gobelins parlent. Peut l'enseigner à ses compagnons. Non comptabilisé dans les langues de Culture." },
      { nom: "Contacts dans la pègre", texte: "Une fois par scénario, peut faire appel à un nouveau Contact appartenant au milieu de la pègre." },
      { nom: "Contacts nobles", texte: "Travaille pour la Monarchie et ravitaille quelques nobles. Commence avec trois Contacts possédant un titre (Chevalier, Marquis ou Comte)." },
      { nom: "Ami(e) anarchiste", texte: "Un(e) ami(e) humain(e) anarchiste, Contact dans ce milieu, qui confectionne des bombes ou grenades d'allumage facile sans trop poser de questions." },
      { nom: "Spécialités typiques", texte: "Embuscade dans Art de la Guerre et Pièges dans Larcin." },
    ],
    competencesUtiles: ["Art de la guerre", "Conduite + Spécialité Automobiles ou Attelages", "Larcin", "Mêlée ou Tir (au choix)", "Monde du crime + Spécialité Connaissance de la pègre"],
    competencesFutiles: ["Cyclisme ou Tennis (au choix)", "Paris sportifs"],
    noteDocte: "La langue râpeuse du gobelin peut limer n'importe quoi, du bois à l'acier — cela prend du temps. La Camaraderie gobeline (+1 à Ressort, Survie, Autorité, et aux deux Résistances) nécessite au moins 3 frères présents ou des personnes parlant l'argot gobelin.",
  },

  // ─────────────────────────────────────────────
  // LE KORRIGAN
  // ─────────────────────────────────────────────
  'korrigan': {
    apparence: "Le korrigan est un être de petite taille d'environ un mètre trente, à la peau pâle et verdâtre, aux cheveux vert sombre et aux yeux dorés dans lesquels on peut facilement se perdre. Doté de petites cornes et de puissants pieds caprins qui lui permettent de faire des bonds impressionnants et ne l'empêchent pas de nager à merveille.",
    taille: "Petite (+1 Esquive, +1 SD Tir adverse)",
    modeReproduction: "Mammifère",
    habitat: "On peut le rencontrer un peu partout, mais il fréquente assidûment les cours féériques. Il aime séjourner non loin de la mer et possède souvent une maison en bord de mer, un peu retirée, où il peut jouir des embruns et de son trésor sans être inquiété. Note : de simples petits morceaux de feutre suffisent à atténuer le bruit de ses pieds caprins sur un parquet.",
    caractere: "Le korrigan est attiré par ce qui est précieux. Il possède un trésor qu'il n'a de cesse de faire croître en l'augmentant régulièrement du fruit de ses rapines. Il a un penchant kleptomane et profite souvent de ses séjours dans les cours féériques pour ramener un petit souvenir. Il aime ce qui brille, au sens propre comme au figuré.",
    personnagesCelebres: ["les corsaires Surcouf et Olivier Levasseur", "Benvenuto Cellini"],
    capacites: [
      "Apnée",
      "Capricorne (pieds caprins permettant bonds et nage excellente)",
      "Au choix (définitif) : Agilité accrue / Doigts de fée / Prestance accrue",
    ],
    pouvoirs: {
      masques: ["Communication animale", "Paroles de l'oubli", "Passe-partout", "Régénération aquatique"],
      demasques: ["Caméléon", "Regard paralysant"],
      profond: "Alchimie de l'or (démasqué)",
      legendaire: "Toucher de Midas (démasqué)",
    },
    atouts: [
      { nom: "Ami d'un(e) ondin(e)", texte: "Un(e) ondin(e) Allié(e) (5 en Esprit et Prestance, Compétences de Gentleman au rang 4 et d'Érudit au rang 3, 2 Compétences futiles au rang 5)." },
      { nom: "Beau parleur", texte: "Bonus de +1 à toute action visant à briller en société." },
      { nom: "Cadeau approprié", texte: "Don pour trouver l'objet qui fera plaisir. Bonus de +2 à toute interaction sociale avec la personne après le cadeau (dure une journée)." },
      { nom: "Gardien du trésor", texte: "Bonus de +2 à toutes ses actions visant à protéger ou récupérer son trésor." },
      { nom: "Spécialités typiques", texte: "Crochetage dans Larcin et Argent dans Classe." },
    ],
    competencesUtiles: ["Classe", "Discrétion", "Larcin + Spécialité Pickpocket", "Mouvement", "Rhétorique + Spécialité gratuite Nage dans Mouvement"],
    competencesFutiles: ["Joaillerie ou Orfèvrerie (au choix)", "Danse ou Musique (au choix)"],
    noteDocte: "La Maladie du trésor impose un malus cumulatif de -1 par jour (max -3) si le trésor est écorné. Le korrigan peut cependant volontairement céder une pièce de son trésor pour pister la personne qui la détient.",
  },

  // ─────────────────────────────────────────────
  // LE LÉPORIDE
  // ─────────────────────────────────────────────
  'leporide': {
    apparence: "Le léporide ressemble à un être mi-lièvre, mi-homme, couvert d'un pelage soyeux, avec de grandes pattes qui lui servent de jambes, des moustaches et de grandes oreilles. Certaines autres fées affublent parfois les léporides du sobriquet de « lapinets » afin de les discréditer, alors qu'ils sont souvent de redoutables courtisans et bretteurs.",
    taille: "Moyenne",
    modeReproduction: "Mammifère",
    habitat: "Le léporide vit aussi bien en environnement urbain que rural. Étant de nature particulièrement sociable, il apprécie les endroits où il peut faire de nouvelles rencontres… et de nouvelles conquêtes !",
    caractere: "Le léporide est la plupart du temps très affable et bon vivant. Véritable Don Juan, il rate rarement une occasion de séduire. C'est un être souriant qui a toujours l'air très sûr de lui, bien qu'il ne soit pas particulièrement courageux. Attention à ne pas le sous-estimer : sous ses dehors avenants, son agilité naturelle en fait un redoutable combattant.",
    personnagesCelebres: ["Messaline", "Giacomo Casanova", "Mirabeau"],
    capacites: [
      "Dents dures",
      "Ouïe décuplée",
      "Au choix (définitif) : Agilité accrue / Constitution accrue / Perception accrue",
    ],
    pouvoirs: {
      masques: ["Calme", "Contact envoûtant", "Course fulgurante", "Fou rire"],
      demasques: ["Bond prodigieux", "Botte secrète"],
      profond: "Vivacité du lièvre (masqué)",
      legendaire: "Lièvre vorpalin (démasqué)",
    },
    atouts: [
      { nom: "Air désinvolte", texte: "Un observateur tentant de discerner son véritable état mental subit un malus de -2 à son test de Sensibilité." },
      { nom: "Fourrure soyeuse", texte: "Démasqué, bonus de +2 à toute tentative de Séduction." },
      { nom: "Prouesses sexuelles", texte: "Toute personne y ayant goûté ne demande qu'à recommencer et est prête à lui rendre service pour ce faire." },
      { nom: "Une conquête dans chaque port", texte: "Au moins une conquête dans chaque grande ville d'Europe prête à lui rendre service ou à partager des informations." },
      { nom: "Spécialités typiques", texte: "Diplomatie dans Rhétorique et Crédit dans Entregent." },
    ],
    competencesUtiles: ["Comédie", "Entregent", "Mouvement + Spécialité Acrobatie", "Rhétorique", "Séduction + Spécialité Appâts"],
    competencesFutiles: ["Croquet", "Kama Sutra"],
    noteDocte: "Phobie des fusils : ne peut s'en servir, doit tester Ressort/Fortitude + Sang-froid SD (7 + Féérie) pour ne pas paniquer. Porté sur la chose : au-delà de 48h d'abstinence, malus cumulatif ; après 4 jours, malus de -2 à Précision, Perception, Esprit, Sang-froid. Peut creuser des galeries (6 m/h en sol meuble) grâce à ses petites griffes.",
  },

  // ─────────────────────────────────────────────
  // LE LOUP-GAROU
  // ─────────────────────────────────────────────
  'loup_garou': {
    apparence: "Le loup-garou est une créature mi-loup, mi-homme, d'environ deux mètres de haut, bipède, dont les yeux peuvent être bleu clair, jaune orangé ou rouges. Sa gueule est munie de crocs impressionnants et il est couvert d'un pelage de loup.",
    taille: "Grande (-1 Esquive, -1 SD Tir adverse)",
    modeReproduction: "Mammifère",
    habitat: "Du fait de leur instinct sauvage, les loups-garous ont tendance à vivre dans les forêts. Pourtant, à travers les âges de la Monarchie, ils se sont révélés être de bons dirigeants et vivent aujourd'hui souvent en ville, ce qui ne les empêche pas de faire quelques escapades à la campagne, les nuits de pleine lune.",
    caractere: "Les loups-garous ont la réputation d'être redoutables — et ils le sont de fait. Pourtant, sous leurs airs sauvages, leur caractère bien trempé et juste en fait de bons meneurs. Parfois, ils souffrent de leur nature, qu'ils considèrent comme une malédiction.",
    personnagesCelebres: ["Bertrand du Guesclin, surnommé le dogue noir de Brocéliande", "la Bête du Gévaudan", "Ysengrin"],
    capacites: [
      "Crocs et griffes rétractiles",
      "Vision nocturne",
      "Au choix (définitif) : Agilité accrue / Constitution accrue / Force accrue",
    ],
    pouvoirs: {
      masques: ["Course infinie", "Métamorphose en loup", "Terreur", "Vigilance instinctive"],
      demasques: ["Berserker", "Prédation"],
      profond: "Souffle du loup (masqué)",
      legendaire: "Le Grand Méchant Loup (démasqué)",
    },
    atouts: [
      { nom: "Ami des loups", texte: "Communication animale avec les loups uniquement. Dans les espaces sauvages, peut s'entourer de 1 + Prestance loups pour une chasse de plusieurs jours (ne risqueront pas leur vie)." },
      { nom: "Camarade ogre", texte: "Un ogre Contact qui fait disparaître les cadavres gênants en les mangeant, en échange de services." },
      { nom: "Féal dévoué", texte: "Un domestique humain Féal et Allié qui veille à sa sécurité, particulièrement les nuits de pleine lune. Carac d'un Larbin." },
      { nom: "Grand seigneur", texte: "Un grand domaine avec une forêt, procurant +1 en Fortune. Les habitants savent se barricader les nuits de pleine lune." },
      { nom: "Spécialités typiques", texte: "Course dans Mouvement ; Sciences occultes dans Occultisme." },
    ],
    competencesUtiles: ["Mêlée", "Mouvement", "Occultisme", "Ressort", "Survie + Spécialité Chasse"],
    competencesFutiles: ["Agriculture", "Une activité de plein air au choix"],
    noteDocte: "Transformation lunaire : chaque pleine lune (tous les 30 jours environ), perd son Masque pour toute la nuit et est soumis à la Soif de sang. Se nourrir calmera le loup-garou mais la forme Masquée n'est retrouvée qu'au lever du soleil. Pour savoir quand : lancer 1D8 + 1D10 + 1D12 en début de scénario (résultat = jours depuis la dernière pleine lune).",
  },

  // ─────────────────────────────────────────────
  // L'OGRE
  // ─────────────────────────────────────────────
  'ogre': {
    apparence: "L'ogre est une créature humanoïde d'environ deux mètres trente, souvent chauve, munie d'une musculature impressionnante et d'une dentition effrayante. Cet aspect peu rassurant est renforcé par son regard parfois rougeâtre, dans lequel sa proie peut lire une détermination froide et cruelle.",
    taille: "Très Grande (-2 Esquive)",
    modeReproduction: "Mammifère",
    habitat: "Il vit partout où il peut assouvir sa faim inextinguible, c'est-à-dire aujourd'hui prioritairement dans les villes.",
    caractere: "L'ogre mange de tout, même de l'ogre. C'est un prédateur capable de tenir tête à un troll, qui se départit rarement de son sang-froid et n'abandonne jamais sa proie. Pourtant, l'ogre sait faire preuve d'une relative intelligence et d'un utilitarisme qui font froid dans le dos : il ne mangera jamais son employeur et saura rester maître de lui-même face à une proie tant qu'elle lui sera utile.",
    personnagesCelebres: ["Trimalcion", "Gargantua", "Gilles de Rais", "l'Ogre du Chat botté", "l'Ogresse d'Hänsel et Gretel"],
    capacites: [
      "Crocs inaltérables",
      "Jet corrosif",
      "Au choix (définitif) : Constitution accrue / Force accrue / Sang-froid accru",
    ],
    pouvoirs: {
      masques: ["Coup d'œil", "Métamorphose en rat", "Regard dissuasif", "Terreur"],
      demasques: ["Prédation", "Régénération sanglante"],
      profond: "Organomancie (démasqué)",
      legendaire: "Dévoration abyssale (démasqué)",
    },
    atouts: [
      { nom: "Ami des bouchers", texte: "Meilleur client de tous les bouchers de sa ville. Ils sont bienveillants envers lui et ne refuseront pas un petit service." },
      { nom: "Ami des tueurs à gages", texte: "Trois tueurs à gages féériques pour Contacts, qui font appel à lui pour faire disparaître les cadavres. Se nourrit à l'œil en toute discrétion." },
      { nom: "Propriétaire terrien", texte: "Une propriété agricole avec divers troupeaux abondants. Bonus de +1 en Fortune." },
      { nom: "Sang-froid surnaturel", texte: "Bonus de +2 à ses tests de Fortitude (Maîtrise de soi) + Sang-froid pour éviter la panique ou la fureur sanguinaire." },
      { nom: "Spécialités typiques", texte: "Intimider dans Autorité ; Connaissance de la Pègre dans Monde du Crime." },
    ],
    competencesUtiles: ["Autorité", "Mêlée + Spécialité Armes blanches lourdes", "Monde du Crime", "Occultisme", "Ressort"],
    competencesFutiles: ["Cuisine", "Œnologie ou Divination (au choix)"],
    noteDocte: "Système digestif d'acier : peut manger bois, os, argile, terre, papier — même de l'ogre. Seuls les pierres et métaux (marbre, granit, acier) l'arrêtent. Régime carné : doit manger (Féérie) kg de viande/jour, sinon malus cumulatif -1/jour (max -3). Méfiance instinctive des femmes et des enfants même féériques (-2 en social). La métamorphose en rat provient selon un faëologue de la parution du Chat Botté.",
  },

  // ─────────────────────────────────────────────
  // L'ONDINE
  // ─────────────────────────────────────────────
  'ondine': {
    apparence: "L'ondine ressemble à une femme d'une beauté souvent irrésistible, aux grands yeux verts, aux longs cheveux, dont la peau se couvre de petites écailles scintillantes et d'élégants ailerons dans sa partie inférieure. Lorsqu'elle plonge dans l'eau, elle peut adopter sa forme de sirène et changer ses jambes en une gracieuse queue de poisson. Certaines ont une peau légèrement bleutée et une chevelure rappelant des éléments marins.",
    taille: "Moyenne",
    modeReproduction: "Ovovivipare. Après une gestation de sept mois, l'ondine doit trouver un gros coquillage nommé Aëlafundyl, pondre son œuf et chanter devant ce coquillage pendant toute une nuit. Lorsque point le jour, le coquillage se brise et laisse s'échapper un(e) petit(e) ondin(e).",
    habitat: "L'ondine revient toujours se ressourcer dans son domaine et affectionne les milieux aquatiques (mer, rivières, lacs) mais vit généralement en ville, où ses qualités musicales et esthétiques sont les plus appréciées. Il y a presque trois fois plus d'ondines que d'ondins.",
    caractere: "Le caractère de l'ondine est presque toujours fluide et changeant comme l'eau. Son goût pour la beauté et le luxe est tout à fait stable. Pour l'assouvir, elle sait user et abuser des qualités dont la nature l'a gratifiée. Elle se laisse cependant rarement prendre à son propre jeu de séduction à cause d'une méfiance naturelle. Mais lorsque c'est le cas, l'ondine est une créature d'une fidélité et d'une passion sans pareilles.",
    personnagesCelebres: ["les Sirènes de l'Odyssée", "Irène Adler", "Orphée", "Enrico Caruso"],
    capacites: [
      "Cheveux préhensiles",
      "Respiration aquatique",
      "Au choix (définitif) : Agilité accrue / Précision accrue / Prestance accrue",
    ],
    pouvoirs: {
      masques: ["Chant des sirènes", "Charme", "Égarement", "Régénération aquatique"],
      demasques: ["Berceuse", "Liquéfaction"],
      profond: "Vibrato déchirant (masqué)",
      legendaire: "Chant de contrôle mental (masqué)",
    },
    atouts: [
      { nom: "Amie des mélomanes", texte: "Un admirateur mélomane Contact dans chaque grande ville d'Europe." },
      { nom: "Idole des cours elfiques", texte: "Toujours bien reçue dans les cours elfiques, jouit d'un traitement de faveur (sans bénéficier de la préférence elfique)." },
      { nom: "Méfiance naturelle", texte: "Bonus de +1 aux tests de Fortitude pour résister aux séductions/manipulations et aux tests de Sensibilité pour détecter le mensonge." },
      { nom: "Voix enjôleuse", texte: "Bonus de +2 pour toutes les tentatives de séduction utilisant la voix." },
      { nom: "Spécialités typiques", texte: "Appâts dans Séduction et Intuition dans Sensibilité." },
    ],
    competencesUtiles: ["Culture", "Mêlée ou Tir (au choix)", "Séduction", "Sensibilité", "Survie + Spécialité gratuite Nage dans Mouvement"],
    competencesFutiles: ["Chant", "Opéra ou Théâtre (au choix)"],
    noteDocte: "Sous forme de sirène (démasquée dans l'eau), elle bénéficie d'un bonus de +2 à toutes ses actions physiques dans l'eau (contre +1 sous forme masquée). Paranoïa : peut être persuadée que quelqu'un cherche à la trahir même si ce n'est pas le cas. En cas d'échec critique, peut chercher à noyer la « menace certaine ».",
  },

  // ─────────────────────────────────────────────
  // L'ORC
  // ─────────────────────────────────────────────
  'orc': {
    apparence: "L'orc est une créature humanoïde de grande taille (environ deux mètres), à la carrure impressionnante. Ses crocs effilés et ses yeux perçants témoignent de sa nature prédatrice. Sous sa forme masquée, il ressemble à un humain imposant au regard acéré.",
    taille: "Grande (-1 Esquive, -1 SD Tir adverse)",
    modeReproduction: "Mammifère",
    habitat: "L'orc est avant tout un chef de guerre. Il vit là où ses compétences militaires sont requises, souvent dans des villes-garnisons ou des cités où la Monarchie maintient des forces armées.",
    caractere: "L'orc est un stratège né, un meneur d'hommes qui sait instinctivement comment mener une bataille. Son sens de la loyauté envers ses compagnons d'armes est absolu et peut être sa plus grande force comme sa plus grande faiblesse. Les orcs se détestent entre eux : il ne peut y avoir qu'un seul meneur.",
    personnagesCelebres: [],
    capacites: [
      "Crocs effilés",
      "Vision thermique",
      "Au choix (définitif) : Force accrue / Précision accrue / Sang-froid accru",
    ],
    pouvoirs: {
      masques: ["Course infinie", "Cri de guerre", "Exemple martial", "Regard dissuasif"],
      demasques: ["Botte secrète", "Vision tactique"],
      profond: "Sixième sens martial (masqué, amélioré en démasqué)",
      legendaire: "Âme de chef (masqué)",
    },
    atouts: [
      { nom: "Accointance gobeline", texte: "Un gang de gobelins Contact qui ravitaille en matériel lourd et munitions à prix raisonnable." },
      { nom: "Argot gobelin", texte: "Maîtrise de l'argot gobelin, enseignable aux compagnons. Non comptabilisé dans les langues de Culture." },
      { nom: "Arme fétiche", texte: "Une arme favorite nommée et améliorée : +1 point de dégâts et +1 aux tests de Sang-froid quand il l'a en main." },
      { nom: "Connaissance de l'armée", texte: "A servi dans l'armée. Spécialité Grande muette pour Autorité, utilisable à la place d'Entregent pour des réseaux militaires. (Nécessite au moins 25 ans.)" },
      { nom: "Spécialités typiques", texte: "Un type d'armes au choix dans Mêlée ou Tir ; Courage dans Ressort." },
    ],
    competencesUtiles: ["Art de la guerre", "Autorité + Spécialité Commander", "Observation", "Ressort", "Mêlée ou Tir (au choix)"],
    competencesFutiles: ["Compétence futile de plein air au choix", "Jeux de stratégie (échecs, etc.)"],
    noteDocte: "Frère d'armes : l'orc est incapable d'abandonner un compagnon d'armes, même au péril de sa vie. Haine orcquesque : les orcs se détestent entre eux et ne peuvent pas travailler ensemble. Science du combat : au premier tour de combat (sans surprise), le Docte doit révéler au joueur orc ce que vont faire ses assaillants lors de ce premier tour.",
  },

  // ─────────────────────────────────────────────
  // LE PHÉNIX
  // ─────────────────────────────────────────────
  'phenix': {
    apparence: "Le phénix est un oiseau humanoïde de taille moyenne, couleur de feu, aux yeux rougeoyants, aux griffes acérées et à l'air noble. Ses membres supérieurs sont à la fois ses bras et ses ailes, qui se prolongent un peu au-delà de ses mains. Un phénix sans son masque rayonne de puissance et de majesté.",
    taille: "Moyenne",
    modeReproduction: "Ovipare. Le phénix tend à construire ses nids au plus profond des montagnes, dans la roche nue qu'il peut brûler à son aise.",
    habitat: "Il vit principalement dans les montagnes, loin de la mer et de l'eau en général. Le phénix a des tendances solitaires. Pourtant, beaucoup de Faux-Semblants phénix sont devenus de grands aristocrates titrés vivant dans les cours féériques.",
    caractere: "Le phénix est un être de solitude, mal compris et très fier à la fois des siens et de sa lignée qui remonte bien souvent aux débuts de la Monarchie. Il a effectivement beaucoup de mal à s'adapter au monde moderne. D'un caractère ombrageux, il est toujours au centre de quelque duel, bien qu'il méprise tous ces courtisans avides de rumeurs.",
    personnagesCelebres: ["le Cid Campéador", "Hernan Cortez", "Cyrano de Bergerac", "le Grand Condé", "le Chevalier de Saint-Georges"],
    capacites: [
      "Ailes",
      "Griffes rétractiles",
      "Au choix (définitif) : Vue décuplée / Agilité accrue / Prestance accrue",
    ],
    pouvoirs: {
      masques: ["Feu sacré", "Noblesse oblige", "Régénération ardente", "Souffle enflammé"],
      demasques: ["Éblouissement", "Halo de flammèches"],
      profond: "Contrôle du feu (masqué)",
      legendaire: "Résurrection (démasqué)",
    },
    atouts: [
      { nom: "Bel hidalgo", texte: "Bonus de +1 à ses tests de Séduction et de Classe." },
      { nom: "Rapière ancestrale", texte: "Une rapière d'exception portant les armoiries de ses ancêtres : +1 Initiative, +1 point de dégâts, prestige social. La perdre ou briser n'est pas bon pour son Sang-froid…" },
      { nom: "Serviteur débrouillard", texte: "Un serviteur humain Allié et Féal qui l'aide à interagir avec le monde moderne. Carac d'un Larbin." },
      { nom: "Titre de noblesse", texte: "Fait partie d'une ancienne famille aristocratique : Chevalier sans terre lié à un Baron. Cumulable avec un autre titre acheté à la création." },
      { nom: "Spécialités typiques", texte: "Armes blanches légères dans Mêlée ; Histoire dans Culture." },
    ],
    competencesUtiles: ["Art de la guerre", "Autorité", "Culture", "Mêlée", "Rhétorique + Spécialité gratuite Vol dans Mouvement"],
    competencesFutiles: ["Fauconnerie", "Héraldique"],
    noteDocte: "Insensible à tous les dommages dus au feu (masqué ou démasqué). Hydrophobe : malus de -1 les jours de pluie (même à l'intérieur) et -2 lors de voyages sur une étendue d'eau. Code de l'honneur : provoque en duel quiconque lui manque de respect, refuse d'attaquer dans le dos.",
  },

  // ─────────────────────────────────────────────
  // LA SUCCUBE / L'INCUBE
  // ─────────────────────────────────────────────
  'succube': {
    apparence: "La succube est une créature généralement associée aux démons de la nuit, dotée de grandes ailes rétractiles rappelant celles d'une chauve-souris. Malgré cet aspect démoniaque, sa beauté est souvent qualifiée d'indescriptible. Ses traits, son teint, sa silhouette, ses mouvements, sa voix sont parfaits. Cette perfection irradie d'un charme sauvage qui a généralement pour effet de provoquer la naissance d'un désir charnel quasiment irrésistible sur ceux qui la contemplent.",
    taille: "Moyenne",
    modeReproduction: "Mammifère",
    habitat: "Elle ne vit qu'en société, et de préférence dans la haute société. Rares sont les succubes à finir dans le ruisseau, et même lorsque cela leur arrive, elles finissent toujours par s'attirer les faveurs d'un riche humain.",
    caractere: "Aimant absorber l'énergie sexuelle de ses proies, la succube est aussi manipulatrice que belle. Son cœur de glace, son esprit d'acier et son âme de marbre contrastent avec la chaleur des désirs qu'elle suscite. Rien ne peut la toucher si elle ne l'a pas décidé. Certaines éprouvent une profonde mélancolie devant le manque de beauté du monde et se désennuient en explorant leurs perversions. Parfois, une succube rencontre un incube et tous deux décident de vivre un amour fou en acceptant de tomber dans les rets l'un de l'autre.",
    personnagesCelebres: ["Lilith", "Salomé", "Cléopâtre", "Don Juan", "la Marquise de Merteuil", "le Vicomte de Valmont"],
    capacites: [
      "Ailes rétractiles",
      "Griffes rétractiles",
      "Au choix (définitif) : Esprit accru / Prestance accrue / Vision thermique",
    ],
    pouvoirs: {
      masques: ["Absorption sexuelle", "Charme", "Pensées impures", "Sujet qui fâche"],
      demasques: ["Berceuse", "Contact fiévreux"],
      profond: "Danse de Salomé (masqué)",
      legendaire: "Domination sexuelle et mentale (démasqué)",
    },
    atouts: [
      { nom: "Admirateurs", texte: "Partout où elle passe, rassemble toujours autour d'elle un groupe d'admirateurs serviables (à la discrétion du Docte)." },
      { nom: "Amant(e) indéfectible", texte: "Un(e) amant(e) humain(e) fou/folle d'elle, fortuné(e) (Fortune 6), connaissant sa vraie nature, prêt(e) à tout. Allié(e) de rang Larbin. La succube devra donner de sa personne." },
      { nom: "Impeccable", texte: "Toujours parfaite, quel que soit le traitement subi. Jamais couverte de poussière, jamais en sueur, jamais écarlate." },
      { nom: "Odeur irrésistible", texte: "Son odeur naturelle est un parfum inimitable. Bonus de +1 à toutes ses tentatives de Séduction." },
      { nom: "Spécialités typiques", texte: "Beau Monde dans Entregent ; Élégance dans Classe." },
    ],
    competencesUtiles: ["Classe", "Entregent", "Monde du crime", "Occultisme", "Séduction + Spécialité Appâts + Spécialité gratuite Vol dans Mouvement"],
    competencesFutiles: ["Danse", "Kama Sutra"],
    noteDocte: "Obsession onirique : un simple regard peut provoquer un désir qui hante les rêves de la cible pendant quelques nuits (-1 à toute tâche nécessitant de la concentration). Beauté inoubliable : tout témoin peut donner une description très reconnaissable. Immunité à la séduction : toute tentative sur sa personne échoue automatiquement, sauf si elle décide de se laisser séduire.",
  },

  // ─────────────────────────────────────────────
  // LE SYLVE (DRYADE)
  // ─────────────────────────────────────────────
  'sylve': {
    apparence: "Le sylve ressemble à un humain aux proportions harmonieuses, dont les cheveux sont constitués de feuilles et de fleurs, dont la peau est légèrement verdâtre et couverte, çà et là, de petites écorces, et dont les pieds ont tendance à se ramifier en racines.",
    taille: "Moyenne",
    modeReproduction: "Végétal. Au printemps, il danse dans une prairie en secouant ses cheveux qui laissent tomber des parcelles de pollen, fécondant les fleurs. En été, l'une de ces fleurs abritera un petit sylve pas plus grand qu'une main, que son père ou sa mère viendra chercher.",
    habitat: "Le sylve aime par-dessus tous les espaces paisibles et vierges de l'influence humaine. Pourtant, il vit bien souvent en ville où il tente de sauvegarder les quelques parcs et jardins qui continuent d'y subsister.",
    caractere: "Le sylve est à la fois maladivement timide et très volontaire lorsqu'il pense que quelqu'un ou quelque chose a besoin de lui. Il est plutôt non-violent et supporte mal les mœurs de ses congénères féériques. Pourtant, le sylve est la force de la nature incarnée et sait également déchaîner cette dernière, uniquement pour poursuivre un but élevé ou sauver des innocents.",
    personnagesCelebres: ["Eurydice", "Iseut", "Rousseau", "Goethe"],
    capacites: [
      "Cheveux préhensiles",
      "Dissimulation végétale",
      "Au choix (définitif) : Agilité accrue / Armure naturelle / Précision accrue",
    ],
    pouvoirs: {
      masques: ["Calme", "Communication animale et végétale", "Égarement", "Main verte"],
      demasques: ["Membres-lianes", "Régénération végétale"],
      profond: "Contrôle végétal (masqué)",
      legendaire: "Métamorphose en dendrite — homme-arbre (démasqué)",
    },
    atouts: [
      { nom: "Ami des animaux", texte: "Recueille des animaux et les soigne. En échange, ils peuvent lui rendre service. Nécessite le Pouvoir Communication animale. Jusqu'à trois animaux par scénario (dans la limite du vraisemblable)." },
      { nom: "Domaine naturel", texte: "Un vaste domaine naturel (colline, bois, vallon…) procurant +1 en Fortune. Abrite une petite habitation discrète." },
      { nom: "Empathique", texte: "Sent instinctivement l'état d'esprit des gens. Bonus naturel de +1 aux tests de Sensibilité pour déterminer les sentiments." },
      { nom: "Quartier bienveillant", texte: "Ses voisins le considèrent comme un saint homme après qu'il les a aidés. Ils sont bienveillants et rendent service." },
      { nom: "Spécialités typiques", texte: "Psychologie dans Sensibilité ; Premiers soins dans Médecine." },
    ],
    competencesUtiles: ["Discrétion + Spécialité Camouflage", "Médecine", "Rhétorique", "Sensibilité", "Survie + Spécialité Orientation"],
    competencesFutiles: ["Botanique", "Zoologie ou Agriculture"],
    noteDocte: "Régime alimentaire : pour se nourrir, doit enfoncer ses pieds dans le sol (transformation en racines) puis s'exposer une heure au soleil. Toute autre alimentation : malus de -1 jusqu'au lendemain. Peut absorber de l'eau. Ochlophobie : doit tester Fortitude + Sang-froid SD 10+ en présence d'une foule dense pour ne pas fuir.",
  },

  // ─────────────────────────────────────────────
  // LE TROLL
  // ─────────────────────────────────────────────
  'troll': {
    apparence: "Le troll est une fée humanoïde de grande taille (environ deux mètres) à la carrure imposante et la laideur légendaire. Ses traits grossiers et sa corpulence massive en font une présence intimidante, même sous forme masquée.",
    taille: "Grande (-1 Esquive, -1 SD Tir adverse)",
    modeReproduction: "Mammifère",
    habitat: "Le troll vit là où il peut trouver de quoi manger. Il fréquente volontiers les abattoirs, les boucheries et les arrière-cours des restaurants.",
    caractere: "Simple d'esprit et glouton, le troll possède une corpulence, une puissance et une robustesse qui forcent le respect. Sous ses dehors brutaux, certains trolls montrent une étrange tendresse envers les petits animaux et les enfants. Leur loyauté, une fois gagnée, est à toute épreuve.",
    personnagesCelebres: [],
    capacites: [
      "Mains battoirs",
      "Odorat décuplé",
      "Au choix (définitif) : Constitution accrue / Force accrue / Sang-froid accru",
    ],
    pouvoirs: {
      masques: ["Communication animale", "Course infinie", "Haleine fétide", "Regard dissuasif"],
      demasques: ["Berserker", "Salive régénératrice"],
      profond: "Régénération surnaturelle (démasqué)",
      legendaire: "Sa Majesté des trolls (masqué)",
    },
    atouts: [
      { nom: "Ami des petits animaux", texte: "Sous réserve qu'il ne soit pas affamé, aime les petits animaux avec une douceur étonnante. En échange, ils peuvent lui rendre service (nécessite Communication animale). Jusqu'à trois animaux par scénario." },
      { nom: "Ami ogre gourmet", texte: "Un ogre ventripotent ami (Contact) qui tient un restaurant, fait des prix et rend service sans combattre." },
      { nom: "Contact armurier", texte: "Un armurier qui fournit et répare des armes blanches lourdes à moitié prix, voire à l'œil, en échange de services." },
      { nom: "Homme de main", texte: "A travaillé pour une faction (Monarchie/Gardiens du Silence, Métaphysiciens, Technologues, Sicaires, Druides, Monarchomaques). Un Contact dans cette faction dans chaque grande ville." },
      { nom: "Spécialités typiques", texte: "Épreuves de force dans Ressort et Chasse dans Survie." },
    ],
    competencesUtiles: ["Conduite (type de véhicule au choix)", "Mêlée + Spécialité Armes blanches lourdes", "Monde du crime", "Ressort", "Survie"],
    competencesFutiles: ["Cuisine ou Agriculture", "Gourmet"],
    noteDocte: "En raison de sa stupidité proverbiale, le troll est un personnage délicat à jouer. Laideur terrifiante (démasqué) : test Ressort/Fortitude + Sang-froid SD (7 + Féérie) pour ne pas être terrorisé. Peur du feu : SD 12 minimum pour ne pas paniquer. En cas d'échec critique, devient berserk et se démasque automatiquement. Le Docte peut permettre à un joueur motivé de créer un troll surdoué (Esprit max 3, Constitution max 8).",
  },

  // ─────────────────────────────────────────────
  // LE VAMPYR
  // ─────────────────────────────────────────────
  'vampyr': {
    apparence: "Le vampyr se différencierait assez peu d'un humain si ce n'était son teint blafard, sillonné de veines bleuâtres, ses lèvres rouges comme le sang et les deux longues canines qui agrémentent son froid sourire. Malgré ces quelques détails, un vampyr peut rester démasqué parmi les humains sans trop se faire remarquer, surtout s'il prend garde à fermer la bouche.",
    taille: "Moyenne",
    modeReproduction: "Mammifère. Lorsque deux vampyrs font l'amour, ils adorent se mordre et s'échanger de leur sang. Ce type d'ébats est généralement traumatisant pour un témoin profane.",
    habitat: "Le vampyr a besoin de la société féérique pour survivre, non pas parce qu'il doit se nourrir de sang, mais parce qu'il a besoin de spectateurs à éblouir et manipuler pour se sentir exister. Le vampyr est une créature fondamentalement urbaine.",
    caractere: "Beaucoup de qualificatifs peu favorables sont attachés au nom de vampyr : manipulateur, cruel, opportuniste, menteur, vaniteux. Ils sont tous en dessous de la vérité, les vampyrs vous le diront eux-mêmes. Car ils sont dévorés par une flamme inextinguible : l'amour du pouvoir. Rien ne saurait les arrêter, ni l'amitié, ni l'amour. Tout vient à point à qui sait attendre est leur devise préférée.",
    personnagesCelebres: ["la Comtesse Bathory", "Dracula", "le Comte de Saint-Germain", "Moriarty"],
    capacites: [
      "Crocs effilés",
      "Vision nocturne",
      "Au choix (définitif) : Force accrue / Mort différée / Sang-froid accru",
    ],
    pouvoirs: {
      masques: ["Coup d'œil", "Hypnose", "Métamorphose en noctule (chauve-souris)", "Terreur"],
      demasques: ["Absorption par morsure", "Ténèbres"],
      profond: "Ombre mouvante (démasqué)",
      legendaire: "Absorption de pouvoirs (démasqué)",
    },
    atouts: [
      { nom: "Âme damnée", texte: "Un serviteur féérique (espèce à choisir) qui le sert presque aveuglément, allant jusqu'à mettre sa vie en danger. Fidélité totale. Carac de Larbin." },
      { nom: "Faciès aristocratique", texte: "Difficile à arrêter par la police, toujours une table au restaurant, impressionne les gens du peuple. Spécialité gratuite Crédit pour Entregent avec bonus de +2 (au lieu de +1) avec les humains." },
      { nom: "Fortune immobilière", texte: "Rentes confortables et au moins un pied-à-terre dans la plupart des grandes villes d'Europe. Bonus de +2 en Fortune." },
      { nom: "Visage impassible", texte: "Toute personne tentant un test de Sensibilité + Perception sur lui subit un malus de -2." },
      { nom: "Spécialités typiques", texte: "Étiquette dans Classe ; Commander dans Autorité." },
    ],
    competencesUtiles: ["Autorité", "Classe", "Entregent + Spécialité Politique", "Fortitude + Spécialité Maîtrise de soi", "Observation"],
    competencesFutiles: ["Héraldique", "Œnologie ou Psychanalyse (au choix)"],
    noteDocte: "Inodore et athermique : indétectable à la vision thermique. Goût du sang : quelques rasades regagnent 3 PV et effacent la fatigue. Créature nocturne : -2 à la Perception visuelle le jour (sauf pièce aux fenêtres fermées) et -2 pour utiliser ses Pouvoirs. Froideur cadavérique : -2 aux tests sociaux basés sur la sympathie (peau froide, pas de buée, pas de sueur).",
  },

  // ─────────────────────────────────────────────
  // LA FÉE ÉLECTRICITÉ
  // ─────────────────────────────────────────────
  'fee_electricite': {
    apparence: "La fée électricité est une créature humanoïde vive et nerveuse, dont la peau est parcourue d'imperceptibles courants sous forme masquée. Démasquée, elle émet une luminescence blanche persistante qu'elle ne peut atténuer. Sa présence fait parfois grésiller les appareils électriques à proximité.",
    taille: "Moyenne",
    modeReproduction: "Inconnue (fée moderne récente)",
    habitat: "La fée électricité vit dans les villes les plus avancées technologiquement, proche des centrales et des installations électriques. Elle est attirée par les nouvelles technologies comme un aimant.",
    caractere: "Vive, nerveuse, technophile et moderne, la fée électricité est l'incarnation de l'énergie nouvelle qui traverse l'Europe industrielle. Elle est souvent incomprise par les fées traditionnelles et cherche du soutien parmi les autres fées modernes. Sa colère peut être littéralement électrique.",
    personnagesCelebres: ["Nikola Tesla (implicite)"],
    capacites: [
      "Luminescence",
      "Vision électrique",
      "Au choix (définitif) : Agilité accrue / Perception accrue / Précision accrue",
    ],
    pouvoirs: {
      masques: ["Course fulgurante", "Maîtrise de la foudre", "Peau électrique", "Régénération électrique"],
      demasques: ["Déplacement électrique", "Éblouissement"],
      profond: "Chaîne d'éclairs (démasqué)",
      legendaire: "Effet Frankenstein (démasqué)",
    },
    atouts: [
      { nom: "Amie des fées modernes", texte: "Au moins une fée moderne Contact dans chaque grande cour féérique." },
      { nom: "Identité discrète", texte: "Possède une identité féérique fictive pour éviter les ennuis dans les cours traditionalistes. Peut fournir des preuves de sa fausse nature." },
      { nom: "Manipulation électrique", texte: "Peut décharger ou recharger à volonté n'importe quelle pile ou batterie de taille raisonnable en un tour." },
      { nom: "Muse des technophiles", texte: "Toute fée ou humain initié technophile la considère comme une merveille de la nature. Toujours bien reçue chez eux, ils lui rendent spontanément service." },
      { nom: "Spécialités typiques", texte: "Investigation dans Observation ; Esquive dans Mouvement." },
    ],
    competencesUtiles: ["Conduite (Automobiles)", "Mouvement", "Observation", "Sciences + Spécialité Physique-chimie", "Tir"],
    competencesFutiles: ["Cinématographe ou Photographie (au choix)", "Météorologie ou Astronomie"],
    noteDocte: "Immunité électrique et thermique démasquée : insensible aux très hautes et très basses températures (mais pas à ce qui fondrait du métal). Vivacité : +1 à son rang d'Initiative en toutes circonstances. Émotions électriques : en situation contrariante, peau parcourue d'étincelles si test de Fortitude + Sang-froid SD (7 + Féérie) échoue. Luminescence démasquée fait automatiquement échouer toute Discrétion visuelle.",
  },

  // ─────────────────────────────────────────────
  // LA FLEUR DE MÉTAL
  // ─────────────────────────────────────────────
  'fleur_de_metal': {
    apparence: "La fleur de métal ressemble à une femme au teint pâle, aux lèvres semblables à des pétales de rose, et aux longs cheveux noirs. Son corps est couvert de petites écailles de métal argenté. Dans son dos poussent deux ailes de métal noir et brillant. Note : quelques rares cas de fleurs de métal de sexe masculin sous forme masquée et féminin sous forme démasquée ont été répertoriés — double identité sexuelle possible.",
    taille: "Moyenne",
    modeReproduction: "Ovovivipare. Après fécondation, garde un œuf métallique en elle pendant neuf mois, dont naîtra une petite fleur de métal.",
    habitat: "La fleur de métal vit principalement dans les villes, où elle peut exercer ses talents de séductrice, comédienne et espionne. Parfois aussi magnétiseuse ou médecin.",
    caractere: "Tout comme leurs parents vampyrs, les fleurs de métal excellent à manipuler, plutôt grâce à la séduction que la corruption. Femmes fatales par excellence, leur plus grand plaisir serait de séduire une personne, de l'asservir psychologiquement puis de la briser en l'abandonnant sans un regard. Cet écart entre désir de plaire et rejets fréquents explique parfois des personnalités tourmentées, qui s'expriment et se subliment à travers l'art. Elles trouvent consolation dans la protection qu'elles reçoivent des vampyrs qui les considèrent comme un avenir possible pour leur espèce.",
    personnagesCelebres: ["Lou Andreas-Salomé", "Mata Hari", "Milady de Winter"],
    capacites: [
      "Ailes",
      "Armure naturelle",
      "Au choix (définitif) : Vision électrique / Prestance accrue / Sang-froid accru",
    ],
    pouvoirs: {
      masques: ["Absorption vitale", "Contact envoûtant", "Hypnose", "Imposition des mains"],
      demasques: ["Dureté de l'acier", "Regard paralysant"],
      profond: "Regard magnétique (masqué)",
      legendaire: "Aura magnétique (démasqué)",
    },
    atouts: [
      { nom: "Protecteur vampyrique", texte: "Un Comte ou Comtesse vampyrique Allié(e) qui la protégera socialement (enverra un serviteur de rang Acolyte combattre à sa place)." },
      { nom: "Amant éperdu", texte: "Un jeune homme de Fortune modeste (rang 4), fou d'elle, prêt à mourir pour elle. Allié manipulable." },
      { nom: "Amie des artistes", texte: "Fascine les artistes féériques et humains. Bonus de +2 pour toute interaction sociale avec eux." },
      { nom: "Garde-robe variée", texte: "Peut se déguiser en n'importe quel membre de n'importe quelle classe sociale. Bonus de +1 aux tests de Comédie (Déguisement), Séduction et Classe." },
      { nom: "Spécialités typiques", texte: "Appâts dans Séduction ; Mentir dans Comédie." },
    ],
    competencesUtiles: ["Comédie", "Discrétion", "Médecine", "Mêlée", "Séduction + Spécialité gratuite Vol dans Mouvement"],
    competencesFutiles: ["Danse ou Théâtre (au choix)", "Mode"],
    noteDocte: "Femme fatale : bonus de +2 à la séduction sur la gent masculine uniquement. Inodore et athermique (ascendance vampyrique). Froideur métallique : peau froide au toucher même en été, trahie par un contact tactile ou une Vision thermique. Méfiance féérique : -2 dans les cours non vampyriques et en Avalon.",
  },

  // ─────────────────────────────────────────────
  // LE FOUINARD
  // ─────────────────────────────────────────────
  'fouinard': {
    apparence: "Le fouinard mesure en moyenne un mètre vingt-cinq. Il a le visage triangulaire, avec de gros yeux noirs et globuleux, et deux petits trous en guise de nez. Son corps est malingre, sa peau est de couleur gris-rose et couverte de duvet brun, blanc ou gris. La peau du fouinard peut se durcir comme un cuir assez résistant sous l'effet du danger. Ses mains sont très adroites et ses ongles résistants au point de faire office de tournevis.",
    taille: "Petite (+1 Esquive, +1 SD Tir adverse)",
    modeReproduction: "Les fouinards sont rares et il est difficile de déterminer leur mode de reproduction. Il semble qu'un jour, le fouinard tousse violemment, et quelques mois plus tard, à l'endroit où il a toussé, apparaît un petit fouinard.",
    habitat: "Les fouinards vivent en ville, là où le niveau technologique est le plus élevé et où ils peuvent mettre au point les prototypes les plus extravagants.",
    caractere: "Les fouinards sont des fées attirées par la technologie de pointe. Ils passent leur temps à élaborer les machines les plus folles et à les réaliser. Le fouinard est curieux et très inventif, souvent socialement décalé (certains psychologues parleront plus tard d'autisme pour désigner leur manière d'être particulière). Ils ont de très bonnes relations avec les gnomes.",
    personnagesCelebres: ["Thomas Edison", "Albert Einstein", "le Capitaine Nemo", "le Dr. Moreau"],
    capacites: [
      "Armure naturelle",
      "Doigts de fée",
      "Au choix (définitif) : Esprit accru / Perception accrue / Précision accrue",
    ],
    pouvoirs: {
      masques: ["Altération structurelle", "Feu sacré", "Intrapsychométrie", "Surmimétisme"],
      demasques: ["Salive régénératrice", "Vision tactique"],
      profond: "Vision mathématique (masqué)",
      legendaire: "Inventeur révolutionnaire (démasqué)",
    },
    atouts: [
      { nom: "Ami des pixies", texte: "A toujours un objet scientifique « rigolo » sur lui. En forêt, trouve une pixie en 5 minutes. Elles sont toujours bien disposées envers lui." },
      { nom: "Ami des scientifiques", texte: "Un scientifique de haut vol Contact dans chaque capitale d'Europe, qui aide volontiers mais pas pour combattre." },
      { nom: "Brevets", texte: "A vendu quelques brevets. Bonus de +2 en Fortune. Reconnu dans la communauté scientifique humaine comme inventeur génial." },
      { nom: "Laboratoire secret", texte: "Un laboratoire vaste mais discret (cave, grenier…) près de chez lui, consacré à ses inventions les plus folles." },
      { nom: "Spécialités typiques", texte: "Mécanique dans Habiletés ; Investigation dans Observation." },
    ],
    competencesUtiles: ["Conduite + Spécialité gratuite tous véhicules à moteur", "Habiletés", "Observation", "Sciences + Spécialité Invention", "Tir"],
    competencesFutiles: ["Modélisme ou Astronomie (au choix)", "Musique ou Photographie + Spécialité Création"],
    noteDocte: "À la page : au courant de toute découverte majeure en sciences et technique. Insomniaque : n'a besoin que de 3h de sommeil par nuit. « Bizarre » (syndrome d'Asperger) : -2 à tous les tests de Sensibilité pour comprendre les sentiments d'autrui et détecter les mensonges, et -2 pour mentir ou déroger à ce qu'il pense être juste. Distrait : -1 pour repérer ou sentir le danger.",
  },

  // ─────────────────────────────────────────────
  // LA GARGOUILLE
  // ─────────────────────────────────────────────
  'gargouille': {
    apparence: "La gargouille a la peau gris foncé, un visage aux traits grossiers parfois grimaçants et lorsqu'elle a des ailes, ce qui n'est pas toujours le cas, celles-ci sont membraneuses et rétractiles. Elle est totalement imberbe et possède une stature imposante (environ deux mètres), bien qu'humanoïde.",
    taille: "Grande (-1 Esquive, -1 SD Tir adverse)",
    modeReproduction: "Mammifère",
    habitat: "Les gargouilles sont des gardiennes. Le lieu qu'elles gardent n'a pas de secret pour elles et revêt une importance capitale. S'il disparaît, la gargouille devient folle et finit par se suicider, à moins qu'elle ne se sente appelée par un autre lieu. Elles habitent toujours dans le lieu qu'elles gardent : église, manoir, château, immeuble… La gargouille est la première des fées modernes, née au Moyen Âge au temps des cathédrales.",
    caractere: "La gargouille est non seulement sédentaire et routinière, mais également très traditionaliste. Elle est la première à se battre pour la conservation ou la réfection des monuments historiques. Assez calme, elle peut se montrer extrêmement violente ou cruelle si l'on touche à son lieu. À cause de son attachement à ce dernier, elle est souvent solitaire.",
    personnagesCelebres: ["Nostradamus", "Michelet", "Viollet-Le-Duc"],
    capacites: [
      "Crochets d'escalade et cornes",
      "Vision nocturne",
      "Au choix (définitif) : Ailes rétractiles / Force accrue / Sang-froid accru",
    ],
    pouvoirs: {
      masques: ["Psychotopie", "Régénération pierreuse", "Terreur", "Vigilance instinctive"],
      demasques: ["Peau de pierre", "Ténèbres"],
      profond: "Maître des lieux (démasqué)",
      legendaire: "Maître de tous les lieux (démasqué)",
    },
    atouts: [
      { nom: "Ami des lettrés", texte: "Entretient une correspondance avec des érudits spécialistes d'histoire, légendes, sociétés secrètes. Trois Contacts gratuits correspondants lettrés en France ou Europe." },
      { nom: "Empathie avec les chauves-souris", texte: "Communication animale avec les chauves-souris uniquement." },
      { nom: "Familier chauve-souris", texte: "Une chauve-souris particulièrement liée qui la suit partout, espione pour elle (la nuit uniquement). Nécessite Empathie avec les chauves-souris." },
      { nom: "Sixième sens architectural", texte: "Bonus de +2 aux tests d'Observation + Perception pour repérer passages secrets ou cachettes dans les murs." },
      { nom: "Spécialités typiques", texte: "Furtivité dans Discrétion ; Spiritisme dans Occultisme." },
    ],
    competencesUtiles: ["Art de la guerre", "Culture + Spécialité Histoire", "Discrétion", "Observation", "Occultisme + Spécialité Sciences occultes"],
    competencesFutiles: ["Architecture", "Divination"],
    noteDocte: "Apparence statuesque : immobile sous forme démasquée, ressemble à une statue (Perception odorat SD 14 pour la repérer, ou Vision thermique/électrique). Si elle bouge, +2 pour faire peur. Syndrome du chien de garde : -1 cumulatif par semaine loin de son lieu (max -3), de plus en plus irritable et mélancolique. Lien astral : chaque pleine lune, peut établir un lien spirituel avec son lieu en méditant 3h (Occultisme + Esprit SD 10).",
  },

  // ─────────────────────────────────────────────
  // LE GOLEM
  // ─────────────────────────────────────────────
  'golem': {
    apparence: "Le golem ressemble à un immense tas d'argile ou de pierre boueuse possédant deux bras et deux jambes massives, une tête arrondie et grossière d'où émergent deux yeux rouges et une bouche qui est en fait un simple orifice lui permettant de parler et de manger. Le golem est assez impressionnant du haut de ses deux mètres.",
    taille: "Grande (-1 Esquive, -1 SD Tir adverse)",
    modeReproduction: "Aucun moyen de reproduction. Régulièrement, tous les cent ans environ, le golem se sent fatigué et peut être « réinitialisé » — il oublie tout et redevient l'équivalent mental d'un nourrisson, reprenant la forme d'un enfant de 2 à 3 ans. Ce phénomène est très mal vécu par son entourage. Certains golems réinitialisés, abandonnés par leur famille, ont été recueillis par un druide ou ont grandi comme des enfants trouvés.",
    habitat: "Le golem vit plutôt en ville, non loin des siens, mais il connaît des refuges montagneux et des grottes dans lesquels il aime se ressourcer.",
    caractere: "Le golem a un penchant mélancolique. Certaines légendes racontent que les golems ont été créés par des médecins juifs à Prague pendant le Moyen Âge, pour se défendre des pogroms ; d'autres qu'un puissant magicien les a créés pour défendre les fées de l'Inquisition. Cette origine explique leur culture et leurs talents naturels pour la guerre. Les golems sont en quête de l'explication de leurs origines, ce qui en fait des guerriers mélancoliques et méditatifs.",
    personnagesCelebres: ["le golem de Rabi Loew", "la créature de Frankenstein"],
    capacites: [
      "Apnée",
      "Mains battoirs",
      "Au choix (définitif) : Constitution accrue / Esprit accru / Force accrue",
    ],
    pouvoirs: {
      masques: ["Communication animale", "Course infinie", "Régénération pierreuse", "Sens de la vérité"],
      demasques: ["Peau de pierre", "Secousse tellurique"],
      profond: "Passe-muraille (démasqué)",
      legendaire: "Maître de la roche (démasqué)",
    },
    atouts: [
      { nom: "Ami des médecins juifs", texte: "Dans sa quête des origines, au moins un médecin juif Contact dans chaque grande ville d'Europe." },
      { nom: "Ami gargouille ou gnome", texte: "Du fait de leur passion commune pour les vieilles pierres. Un Contact prêt à lui rendre service, pas au point de se battre pour lui." },
      { nom: "Caverne secrète", texte: "Un lopin de terre abritant une gigantesque caverne aménagée en une dizaine de pièces très confortablement meublées. Existence connue de lui seul." },
      { nom: "Collection d'armes anciennes", texte: "Au moins un exemplaire de chaque arme blanche et arme de trait, plus des armes exotiques du monde entier." },
      { nom: "Spécialités typiques", texte: "Maîtrise de soi dans Fortitude ; Stratégie dans Art de la guerre." },
    ],
    competencesUtiles: ["Art de la guerre", "Fortitude", "Médecine", "Mêlée + Spécialité Armes blanches lourdes", "Occultisme + Spécialité Langue et culture juive"],
    competencesFutiles: ["Géologie", "Littérature + Spécialité Conteur"],
    noteDocte: "Poids lourd : même masqué, pèse environ (Constitution × 30) kg — peut le trahir. Inébranlable : -2 à toute tentative pour le renverser, projeter ou effrayer. Insensibilité à la douleur : aucun malus en cas de blessure, ne connaît pas la torture physique. Timidité : -1 à toutes ses interactions sociales avec quiconque il considère comme son supérieur.",
  },

  // ─────────────────────────────────────────────
  // LE GREMELIN
  // ─────────────────────────────────────────────
  'gremelin': {
    apparence: "Le gremelin est un petit être d'un mètre trente en moyenne, humanoïde, couvert d'une peau de lézard variant entre le vert, le gris et le brun, doté d'une tête triangulaire où luisent deux yeux ronds de couleur jaune-orange à l'aspect reptilien et d'où ressort une gueule munie de crocs irréguliers et ornée de deux grandes oreilles évoquant celles des chauves-souris. Ses doigts, rappelant ceux du gecko, adhèrent aux parois les plus abruptes et même aux plafonds. À première vue, le gremelin a l'air inoffensif et sympathique, jusqu'à ce qu'il vous trahisse.",
    taille: "Petite (+1 Esquive, +1 SD Tir adverse)",
    modeReproduction: "Ovovivipare. La femelle garde son ou ses deux œufs dans son ventre pendant sept mois, puis accouche des œufs qui éclosent peu après.",
    habitat: "Les gremelins vivent en ville, dans les endroits les plus inattendus : recoins, greniers, pièces condamnées… Pour les Métaphysiciens, leur apparition au début du XIXe siècle semble avoir coïncidé avec l'essor des machines chez les humains.",
    caractere: "Les gremelins ne sont pas méchants, mais ce sont des saboteurs nés. Ils tendent à être sournois et à déclencher des dysfonctionnements tant mécaniques que relationnels. Ils adorent se cacher, faire des plaisanteries douteuses, espionner les gens et leur faire peur, bricoler ou mieux : enrayer les machines. Ils s'entendent à merveille avec les enfants auxquels ils ne sauraient faire de mal. Certains gremelins souffrent de leur réputation désastreuse et tentent de la compenser en agissant de manière plus responsable ; d'autres se laissent aller à des comportements sadiques.",
    personnagesCelebres: ["John Ludd", "Émile Pouget", "Joseph Pujol"],
    capacites: [
      "Crocs effilés",
      "Doigts adhésifs",
      "Au choix (définitif) : Agilité accrue / Ouïe décuplée / Vision thermique",
    ],
    pouvoirs: {
      masques: ["Altération structurelle", "Chute indolore", "Sujet qui fâche", "Surmimétisme"],
      demasques: ["Bond prodigieux", "Mue"],
      profond: "Chant qui rend fou (masqué)",
      legendaire: "Triche avec le destin (démasqué)",
    },
    atouts: [
      { nom: "Ami des saltimbanques", texte: "Au moins un Contact bienveillant dans le milieu du spectacle de rue dans chaque ville d'Europe." },
      { nom: "Empoisonneur", texte: "Bonus de +1 à tout test pour repérer et dissimuler l'usage du poison." },
      { nom: "Imitateur génial", texte: "Capable d'imiter toutes sortes de cris d'animaux à la perfection." },
      { nom: "Sens de la surprise", texte: "Bonus de +1 à ses tests pour surprendre quelqu'un (approche discrète, attaque surprise, cri inattendu, sujet déconcertant)." },
      { nom: "Spécialités typiques", texte: "Déguisement dans Comédie ; Déplacement silencieux dans Discrétion." },
    ],
    competencesUtiles: ["Comédie", "Discrétion", "Habiletés + Spécialité Mécanique", "Larcin", "Mouvement + Spécialité Acrobatie"],
    competencesFutiles: ["Cirque ou Puériculture (au choix)", "Prestidigitation ou Sculpture (au choix)"],
    noteDocte: "Contorsionniste : peut passer à travers n'importe quel orifice faisant au moins la taille de sa tête (masqué ou non). Saboteur né : +1 à tous ses tests et Pouvoirs visant à saboter les mécanismes. Phéromones de la méfiance : d'instinct, quiconque ne le connaît pas bien lui refuse toute confiance et répugne à lui confier une tâche. Apparence frivole : -2 aux tests sociaux lorsqu'il tente de paraître sérieux.",
  },

  // ─────────────────────────────────────────────
  // LE PROTYS
  // ─────────────────────────────────────────────
  'protys': {
    apparence: "Le protys est une créature humanoïde sans identité clairement définie ni stable, dont le visage gris est lisse comme un mannequin sans traits autres que des fentes horizontales pour les yeux et la bouche. Sa chevelure ondule en permanence autour de son crâne comme si elle était dotée d'une vie propre. Sous forme démasquée, son sexe est indéfini ; sous forme masquée, c'est un homme ou une femme, qui peut imiter un humain de l'autre sexe grâce à son Pouvoir Mille visages. Sa corpulence peut varier dans la minute, son expression se modifie sans cesse.",
    taille: "Moyenne",
    modeReproduction: "Mammifère. Lorsque deux protys décident de faire un enfant, ils suivent une antique coutume (certains parlent de rituel) : ils usent de leurs pouvoirs pour être les plus beaux possibles, puis dans une explosion de beauté et de faiblesse, ils se livrent à l'acte d'amour. Certains racontent que c'est un spectacle si beau qu'il en devient insoutenable.",
    habitat: "Le protys a fondamentalement besoin de la société des fées et des humains car c'est la créature de l'adaptation, du changement et de la sociabilité. Il est donc profondément urbain.",
    caractere: "Le protys regarde la vie comme une grande comédie dans laquelle il aime à changer de rôle. Il considère que chacun porte un masque qu'il peut, lui, reproduire. C'est pourquoi beaucoup pensent que le protys est un être creux, une coquille vide. En réalité, il se cherche une identité et il n'est jamais plus dangereux que lorsqu'il l'a trouvée car, à partir de cet instant, il va consacrer sa vie à la réaliser.",
    personnagesCelebres: ["le Chevalier d'Éon de Beaumont", "Anne Bonny", "le Comte de Monte-Cristo"],
    capacites: [
      "Cheveux préhensiles",
      "Fugacité",
      "Au choix (définitif) : Constitution accrue / Esprit accru / Perception accrue",
    ],
    pouvoirs: {
      masques: ["Mille visages", "Paroles de l'oubli", "Prestance malléable", "Surmimétisme"],
      demasques: ["Caméléon", "Métamorphose en petit animal courant", "Mille visages (pour apprendre un visage)"],
      profond: "Membres malléables (démasqué)",
      legendaire: "Doppelgänger universel (masqué)",
    },
    atouts: [
      { nom: "Ami des comédiens", texte: "Au moins un comédien Contact dans la plupart des grandes villes d'Europe." },
      { nom: "Don des langues", texte: "Parle deux langues de plus que celles octroyées par son rang de Culture. De plus, acheter une langue en Spécialité ne coûte que 4 XP au lieu de 8." },
      { nom: "Miroir de Narcisse", texte: "En passant un quart d'heure seul à contempler son reflet démasqué, peut regagner un point d'Esprit ou de Sang-froid temporaire, ou un point d'usage de Pouvoir." },
      { nom: "Parfum idoine", texte: "Sait toujours choisir un parfum adapté à ses interlocuteurs. Bonus de +2 en Séduction si il a pris le temps de choisir parmi son stock personnel." },
      { nom: "Spécialités typiques", texte: "Persuader dans Rhétorique ; Déguisement dans Comédie." },
    ],
    competencesUtiles: ["Comédie + Spécialité Jouer un rôle", "Culture", "Entregent", "Rhétorique", "Sensibilité + Spécialité Psychologie"],
    competencesFutiles: ["Théâtre ou Opéra (au choix)", "Mode ou Potins mondains (au choix)"],
    noteDocte: "Imitateur génial : imite à la perfection n'importe quelle voix après 10 minutes d'écoute. Peut imiter une langue étrangère après une heure pour une courte conversation. Langue de bois : peut soutenir n'importe quelle conversation sur n'importe quel sujet pendant 10 minutes avant de ne plus faire illusion. Mythomane : même avec ses proches, ressent le besoin de mentir — ses amis auront du mal à le croire même quand il dit la vérité.",
  },

  // ─────────────────────────────────────────────
  // LE SMOG
  // ─────────────────────────────────────────────
  'smog': {
    apparence: "Le smog possède une forme humanoïde. Ses cheveux sont noirâtres et graisseux, sa peau verdâtre et tendant sur le noir, couverte de sécrétions diverses et odoriférantes, ses yeux sont jaunes et son haleine difficile à supporter. En un mot, le smog est un être disgracieux.",
    taille: "Moyenne",
    modeReproduction: "Mammifère",
    habitat: "Le smog adore les nouvelles villes industrielles enfumées, les machines à charbon, les locomotives noirâtres et les fleuves nauséabonds. Il ne supporte pas la nature verdoyante et gaie que célèbrent continuellement les fées traditionnelles.",
    caractere: "Le smog est l'une des fées les plus modernes et les plus décalées. Il déteste ce qui lui rappelle sa condition et la façon dont les fées traditionnelles le prennent de haut. Il se sent bien dans la société humaine ainsi que chez les Technologues, bien qu'on l'y considère davantage comme une bête curieuse. Trop souvent considéré comme nuisible, il décide généralement de correspondre à l'image qu'on se fait de lui. Pourtant, il n'est pas foncièrement méchant ; il attend juste qu'on l'accepte, avec ses bons et ses mauvais côtés.",
    personnagesCelebres: ["M. Hyde", "Frederick Winslow Taylor"],
    capacites: [
      "Griffes empoisonnées",
      "Jet corrosif",
      "Au choix (définitif) : Constitution accrue / Sang-froid accru / Vision thermique",
    ],
    pouvoirs: {
      masques: ["Contagion", "Haleine fétide", "Regard dissuasif", "Régénération toxique"],
      demasques: ["Écran de fumée", "Métamorphose en nuage de pollution"],
      profond: "Gaz neurotoxique (masqué)",
      legendaire: "Brouillard de pollution cauchemardesque (démasqué)",
    },
    atouts: [
      { nom: "Amis dans la pègre", texte: "Lié à un petit gang de quatre malfaiteurs qui sont ses amis (un peu plus que des Contacts, un peu moins qu'Alliés). Peuvent aider en combat s'ils y trouvent leur compte. Rang Larbin." },
      { nom: "Capitaine d'industrie", texte: "Riche industriel avec usines dans son pays d'origine et Fortune initiale de 9 pour seulement 4 PP au lieu de 8. Nécessite le Profil Savant (majeur ou mineur)." },
      { nom: "Contacts aristocratiques", texte: "Doué avec les poisons, a été recruté par des aristocrates féériques. Trois Contacts aristocratiques supplémentaires (Chevalier, Baron, Comte ou Marquis)." },
      { nom: "Laboratoire secret", texte: "Un vaste laboratoire secret avec produits chimiques divers pour utiliser correctement ses talents." },
      { nom: "Spécialités typiques", texte: "Faëologie dans Sciences ; Connaissance de la Pègre dans Monde du crime." },
    ],
    competencesUtiles: ["Conduite (Automobile)", "Fortitude", "Médecine + Spécialité Pharmacopée", "Monde du crime", "Sciences + Spécialité Physique-chimie"],
    competencesFutiles: ["Météorologie", "Psychanalyse ou Astronomie (au choix)"],
    noteDocte: "Immunité aux maladies et à tous les produits toxiques, poisons et drogues (sauf préparations magiques des druides/nécromanciens). Orduromancie : en inspectant les ordures de quelqu'un, peut reconstituer son portrait approximatif (nature, sexe, habitudes, corpulence, état de santé). Test Sciences + Esprit pour identifier l'espèce. Odeur pénible : -3 à toutes les interactions sociales basées sur la séduction. Inimitié des druides : refus a priori d'aide de leur part. Les Pouvoirs masqués du smog sous forme de nuage de pollution subissent un malus de -1.",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// TABLE DE CORRESPONDANCE : nom affiché → clé dans FAIRY_LORE
// ─────────────────────────────────────────────────────────────────────────────
const NAME_MAP = {
  // Faux-Semblant enfoui
  "le faux-semblant enfoui": "faux_semblant_enfoui",
  "faux-semblant enfoui": "faux_semblant_enfoui",
  // Fées traditionnelles
  "l'ange": "ange",
  "ange": "ange",
  "une ange": "ange",
  "le bastet": "bastet",
  "bastet": "bastet",
  "l'elfe": "elfe",
  "elfe": "elfe",
  "une elfe": "elfe",
  "le farfadet": "farfadet",
  "farfadet": "farfadet",
  "une farfadette": "farfadet",
  "le gnome": "gnome",
  "gnome": "gnome",
  "une gnomide": "gnome",
  "le gobelin": "gobelin",
  "gobelin": "gobelin",
  "une gobeline": "gobelin",
  "le korrigan": "korrigan",
  "korrigan": "korrigan",
  "une korrigane": "korrigan",
  "le léporide": "leporide",
  "léporide": "leporide",
  "leporide": "leporide",
  "le loup-garou": "loup_garou",
  "loup-garou": "loup_garou",
  "une louve-garou": "loup_garou",
  "l'ogre": "ogre",
  "ogre": "ogre",
  "une ogresse": "ogresse",
  "l'ondine": "ondine",
  "ondine": "ondine",
  "sirène": "ondine",
  "sirene": "ondine",
  "l'orc": "orc",
  "orc": "orc",
  "le phénix": "phenix",
  "phénix": "phenix",
  "phenix": "phenix",
  "une phénix": "phenix",
  "la succube": "succube",
  "succube": "succube",
  "l'incube": "succube",
  "incube": "succube",
  "le sylve": "sylve",
  "sylve": "sylve",
  "dryade": "sylve",
  "une dryade": "sylve",
  "le troll": "troll",
  "troll": "troll",
  "une trollesse": "troll",
  "le vampyr": "vampyr",
  "vampyr": "vampyr",
  "une vampyre": "vampyr",
  // Fées modernes
  "la fée électricité": "fee_electricite",
  "fée électricité": "fee_electricite",
  "fee electricite": "fee_electricite",
  "la fleur de métal": "fleur_de_metal",
  "fleur de métal": "fleur_de_metal",
  "fleur de metal": "fleur_de_metal",
  "le fouinard": "fouinard",
  "fouinard": "fouinard",
  "une fouinarde": "fouinard",
  "la gargouille": "gargouille",
  "gargouille": "gargouille",
  "le golem": "golem",
  "golem": "golem",
  "le gremelin": "gremelin",
  "gremelin": "gremelin",
  "une gremeline": "gremelin",
  "le protys": "protys",
  "protys": "protys",
  "le smog": "smog",
  "smog": "smog",
  "une smog": "smog",
};

/**
 * Récupère le lore complet d'un type de fée à partir de son nom d'affichage.
 * @param {string} fairyName - Le nom tel qu'affiché dans l'app (ex: "L'ange", "Le bastet")
 * @returns {object|null} - Le lore de la fée, ou null si non trouvé
 */
export function getFairyLore(fairyName) {
  if (!fairyName) return null;
  const key = NAME_MAP[fairyName.toLowerCase().trim()];
  return key ? FAIRY_LORE[key] : null;
}

export default FAIRY_LORE;
