// src/data/pnjTables.js
// Tables de tirage aléatoire pour le Générateur de PNJ.
// Contexte : Paris Belle Époque (mode Réel) ou monde féérique (mode Merveilleux).

// ─── IDENTITÉ ────────────────────────────────────────────────────────────────

export const TRANCHES_AGE = [
  { id: 'jeune',  label: 'Jeune',  fourchette: '18–30 ans' },
  { id: 'adulte', label: 'Adulte', fourchette: '31–50 ans' },
  { id: 'mur',    label: 'Mûr',    fourchette: '51–70 ans' },
  { id: 'age',    label: 'Âgé',   fourchette: '71 ans et plus' },
];

export const SEXES = [
  { id: 'masculin',    label: 'Masculin' },
  { id: 'feminin',     label: 'Féminin' },
  { id: 'indetermine', label: 'Indéterminé' },
];

export const GENRES = [
  { id: 'conforme',            label: 'Conforme',       description: 'présentation conforme aux usages de l\'époque' },
  { id: 'non_conforme_masc',   label: 'Habit masculin', description: 'femme à l\'habit masculin, dite "vêtue en homme"' },
  { id: 'non_conforme_fem',    label: 'Allure féminine',description: 'homme aux traits et manières délicatement féminins' },
  { id: 'androgyne',           label: 'Androgyne',      description: 'présentation androgyne, indéfinissable au premier regard' },
  { id: 'indetermine',         label: 'Indéterminé',    description: 'les catégories ne s\'appliquent pas (fées)' },
];

export const NATIONALITES = [
  { id: 'francaise',      label: 'Française',       flag: '🇫🇷' },
  { id: 'britannique',    label: 'Britannique',      flag: '🇬🇧' },
  { id: 'russe',          label: 'Russe',            flag: '🇷🇺' },
  { id: 'americaine',     label: 'Américaine',       flag: '🇺🇸' },
  { id: 'italienne',      label: 'Italienne',        flag: '🇮🇹' },
  { id: 'allemande',      label: 'Allemande',        flag: '🇩🇪' },
  { id: 'austro_hongroise', label: 'Austro-Hongroise', flag: '🇦🇹' },
];

export const SITUATIONS_MATRIMONIALES = [
  { id: 'celibataire', label: 'Célibataire' },
  { id: 'marie',       label: 'Marié(e)' },
  { id: 'veuf',        label: 'Veuf / Veuve' },
  { id: 'separe',      label: 'Séparé(e) de fait' },
];

export const SITUATIONS_FAMILIALES = [
  { id: 'sans_enfants',        label: 'Sans enfants' },
  { id: 'enfants_mineurs',     label: 'Parent d\'enfants mineurs' },
  { id: 'enfants_adultes',     label: 'Parent d\'enfants adultes' },
  { id: 'orphelin',            label: 'Orphelin(e)' },
];

// ─── NOMS PAR NATIONALITÉ ────────────────────────────────────────────────────

export const NOMS_PAR_NATIONALITE = {
  francaise: {
    prenomsMasculins: [
      'Ernest', 'Gaston', 'Édouard', 'Marcel', 'Léon', 'Théophile', 'Hippolyte',
      'Prosper', 'Arsène', 'Victor', 'Auguste', 'Émile', 'Octave', 'Fernand',
      'Hector', 'Raoul', 'Achille', 'Adrien', 'Alphonse', 'Anatole', 'Armand',
      'Barthélemy', 'Casimir', 'Clément', 'Désiré', 'Edmond', 'Eugène', 'Félix',
      'Florentin', 'François', 'Gustave', 'Henri', 'Honoré', 'Isidore', 'Jules',
      'Laurent', 'Lucien', 'Maurice', 'Narcisse', 'Pascal', 'Philippe', 'Pierre',
      'René', 'Roland', 'Sébastien', 'Sylvain', 'Théodore', 'Ulysse', 'Valentin',
    ],
    prenomsFeminins: [
      'Mathilde', 'Colette', 'Marguerite', 'Hortense', 'Blanche', 'Céleste',
      'Adèle', 'Violette', 'Louise', 'Suzanne', 'Pauline', 'Clémentine',
      'Valentine', 'Eugénie', 'Honorine', 'Joséphine', 'Léonie', 'Madeleine',
      'Octavie', 'Rosalie', 'Séraphine', 'Thérèse', 'Victorine', 'Berthe',
      'Clotilde', 'Éléonore', 'Félicie', 'Germaine', 'Irène', 'Laure',
      'Lucienne', 'Marthe', 'Noémie', 'Odette', 'Régine', 'Renée', 'Sidonie',
    ],
    noms: [
      'Beaumont', 'Lacroix', 'Charpentier', 'Dufresne', 'Giraud', 'Moreau',
      'Lecomte', 'Rousseau', 'Vidal', 'Flamant', 'Bertrand', 'Jourdain',
      'Marchand', 'Aubert', 'Garnier', 'Bonnet', 'Chevalier', 'Colin',
      'Dupuis', 'Faure', 'Gaillard', 'Guérin', 'Lambert', 'Lefèvre',
      'Legrand', 'Lemaire', 'Mercier', 'Michel', 'Morin', 'Perrot',
      'Picard', 'Renaud', 'Richard', 'Robin', 'Thibault', 'Thomas',
      'Turpin', 'Valois', 'Vasseur', 'Verdier', 'Delacroix', 'Beauchamp',
      'Montfort', 'Villeneuve', 'Sauvage',
    ],
    raisonsPresence: null,
  },
  britannique: {
    prenomsMasculins: [
      'Arthur', 'Charles', 'Edward', 'Frederick', 'George', 'Harold', 'Herbert',
      'James', 'John', 'Leonard', 'Oliver', 'Percy', 'Reginald', 'Thomas', 'William',
    ],
    prenomsFeminins: [
      'Agnes', 'Alice', 'Beatrice', 'Clara', 'Dorothy', 'Eleanor', 'Florence',
      'Gertrude', 'Harriet', 'Irene', 'Mabel', 'Margaret', 'Mary', 'Violet', 'Victoria',
    ],
    noms: [
      'Anderson', 'Brown', 'Campbell', 'Clark', 'Davies', 'Evans', 'Hamilton',
      'Harris', 'Hughes', 'Jones', 'Mackenzie', 'Morgan', 'Morris', 'Richardson',
      'Roberts', 'Robertson', 'Robinson', 'Scott', 'Smith', 'Stewart', 'Taylor',
      'Thompson', 'Walker', 'White', 'Williams', 'Wilson', 'Wright',
    ],
    raisonsPresence: [
      'de passage pour l\'Exposition', 'établi(e) à Paris depuis dix ans',
      'en voyage de noces', 'correspondant(e) du Times à Paris',
      'venu(e) étudier les Beaux-Arts', 'résidant(e) permanent(e) du VIIIe',
      'en mission diplomatique officieuse',
    ],
  },
  russe: {
    prenomsMasculins: [
      'Alexei', 'Boris', 'Dmitri', 'Fyodor', 'Igor', 'Ivan', 'Konstantin',
      'Mikhail', 'Nikolai', 'Pavel', 'Sergei', 'Vladimir', 'Yuri',
    ],
    prenomsFeminins: [
      'Alexandra', 'Anna', 'Elena', 'Irina', 'Katarina', 'Natasha', 'Olga',
      'Sofia', 'Tatiana', 'Vera', 'Xenia',
    ],
    noms: [
      'Borisov', 'Fedorov', 'Golitsyn', 'Ivanov', 'Kozlov', 'Morozov',
      'Petrov', 'Romanov', 'Smirnov', 'Sokolov', 'Volkov', 'Yaskov', 'Zhukov',
    ],
    raisonsPresence: [
      'exilé(e) politique, installé(e) à Montparnasse',
      'artiste en résidence à Paris',
      'aristocrate en villégiature indéfinie',
      'révolutionnaire sous couverture bourgeoise',
      'étudiant(e) à la Sorbonne',
      'représentant(e) d\'intérêts commerciaux',
    ],
  },
  americaine: {
    prenomsMasculins: [
      'Benjamin', 'Calvin', 'Chester', 'Elmer', 'Frank', 'Howard', 'James',
      'Leonard', 'Robert', 'Theodore', 'Walter', 'Woodrow',
    ],
    prenomsFeminins: [
      'Clara', 'Daisy', 'Edith', 'Ethel', 'Grace', 'Harriet', 'Helen',
      'Ida', 'Lillian', 'Mabel', 'Mary', 'Ruth',
    ],
    noms: [
      'Adams', 'Baker', 'Carter', 'Collins', 'Cooper', 'Davis', 'Edwards',
      'Gibson', 'Grant', 'Harrison', 'Henderson', 'Hill', 'Holmes', 'Jackson',
      'King', 'Lewis', 'Morgan', 'Parker', 'Patterson', 'Russell', 'Warren',
    ],
    raisonsPresence: [
      'journaliste en reportage pour un grand quotidien de New York',
      'héritier(ère) en grand tour européen',
      'artiste venu(e) fuir le puritanisme américain',
      'médecin venu étudier les méthodes françaises',
      'homme / femme d\'affaires en négociation',
      'philantrope finançant des projets parisiens',
    ],
  },
  italienne: {
    prenomsMasculins: [
      'Antonio', 'Carlo', 'Enrico', 'Ettore', 'Filippo', 'Giovanni', 'Giuseppe',
      'Lorenzo', 'Luigi', 'Marco', 'Raffaele', 'Silvio', 'Umberto',
    ],
    prenomsFeminins: [
      'Anna', 'Carmela', 'Concetta', 'Eleonora', 'Giuseppina', 'Lucia',
      'Maria', 'Margherita', 'Rosa', 'Sofia', 'Teresa', 'Vittoria',
    ],
    noms: [
      'Barone', 'Bianchi', 'Bruno', 'Caruso', 'Costa', 'De Luca', 'Esposito',
      'Ferrari', 'Fontana', 'Gallo', 'Leone', 'Lombardi', 'Marchetti',
      'Marino', 'Martini', 'Moretti', 'Rizzi', 'Romano', 'Rossi', 'Russo',
      'Santoro', 'Sorrentino', 'Viola',
    ],
    raisonsPresence: [
      'musicien(ne) à l\'Opéra de Paris',
      'commerçant(e) dans le quartier des étrangers',
      'peintre de l\'école italienne en séjour d\'études',
      'réfugié(e) politique du Risorgimento tardif',
      'membre d\'une société secrète franco-italienne',
    ],
  },
  allemande: {
    prenomsMasculins: [
      'Adolf', 'Bernhard', 'Ernst', 'Friedrich', 'Hans', 'Heinrich', 'Hermann',
      'Karl', 'Klaus', 'Ludwig', 'Max', 'Otto', 'Rudolf', 'Walter', 'Wilhelm',
    ],
    prenomsFeminins: [
      'Anna', 'Berta', 'Clara', 'Elsa', 'Emma', 'Frieda', 'Greta', 'Helga',
      'Ida', 'Käthe', 'Lotte', 'Luise', 'Maria', 'Martha', 'Wilhelmine',
    ],
    noms: [
      'Bauer', 'Beck', 'Fischer', 'Fuchs', 'Hoffmann', 'Klein', 'Koch',
      'König', 'Meyer', 'Müller', 'Richter', 'Schmidt', 'Schneider',
      'Schreiber', 'Schulz', 'Vogel', 'Wagner', 'Weber', 'Wolf', 'Zimmermann',
    ],
    raisonsPresence: [
      'chimiste ou ingénieur en poste à Paris',
      'musicologue venu étudier la scène musicale française',
      'agent commercial dans une maison d\'import-export',
      'universitaire en échange avec la Sorbonne',
      'suspect d\'espionnage industriel — mais c\'est injuste',
      'réfugié(e) du Kulturkampf bismarckien',
    ],
  },
  austro_hongroise: {
    prenomsMasculins: [
      'Franz', 'Karl', 'Leopold', 'Maximilian', 'Rudolf', 'Siegfried', 'Viktor',
      'Johann', 'Friedrich', 'Alois', 'Béla', 'László', 'Miklós',
    ],
    prenomsFeminins: [
      'Franziska', 'Josephine', 'Katharina', 'Maria', 'Sophie', 'Therese',
      'Erzsébet', 'Ilona', 'Katalin', 'Margit', 'Zsófia',
    ],
    noms: [
      'von Habsburg', 'Schwarzenberg', 'Esterhazy', 'Liechtenstein', 'Kinsky',
      'Hofer', 'Mayr', 'Steiner', 'Gruber', 'Huber', 'Bauer', 'Wagner',
      'Horvath', 'Kovacs', 'Nagy', 'Szabo', 'Toth', 'Varga',
    ],
    raisonsPresence: [
      'diplomate à l\'ambassade austro-hongroise',
      'aristocrate venu(e) aux eaux de Paris',
      'compositeur(rice) en résidence',
      'militaire retraité(e) installé(e) sur la rive droite',
      'émigré(e) fuyant les tensions de l\'Empire',
    ],
  },
};

// ─── MÉTIERS PAR TRANCHE D'ÂGE ────────────────────────────────────────────────

export const METIERS_PAR_TRANCHE_AGE = {
  jeune: [
    'étudiant en droit', 'étudiant en médecine', 'étudiante aux Beaux-Arts',
    'apprenti relieur', 'apprentie modiste', 'commis de notaire',
    'secrétaire de rédaction', 'jeune journaliste', 'vendeur en librairie',
    'infirmier stagiaire', 'assistante de laboratoire', 'garçon de café',
    'petite main en atelier de couture', 'aide-pharmacien', 'jeune poète sans le sou',
    'facteur de la poste', 'commis en épicerie fine', 'précepteur',
    'dactylo dans une étude', 'sous-bibliothécaire',
  ],
  adulte: [
    'rentier', 'journaliste', 'médecin de quartier', 'photographe',
    'fleuriste', 'relieur de livres anciens', 'chapelier', 'cocher de fiacre',
    'modiste établie', 'apothicaire', 'bouquiniste des quais', 'détective privé',
    'surnuméraire des Postes', 'antiquaire', 'herboriste', 'dessinateur de presse',
    'avocat', 'notaire', 'instituteur', 'libraire', 'imprimeur', 'horloger',
    'bijoutier', 'brocanteur', 'médium en vogue', 'magnétiseur', 'occultiste amateur',
    'agent de change', 'ingénieur des Ponts', 'architecte', 'peintre de salon',
    'compositeur', 'actrice de boulevard', 'chanteuse de café-concert',
    'prestidigitateur', 'professeur de langues mortes', 'explorateur',
  ],
  mur: [
    'médecin établi de longue date', 'avocat de renom', 'directeur de journal',
    'professeur de lycée en fin de carrière', 'propriétaire rentier', 'notaire associé',
    'ancien officier reconverti', 'commissaire de police', 'inspecteur des Postes',
    'ancien pharmacien retraité', 'collectionneur', 'académicien local',
    'ancien explorateur en retraite', 'grand-mère de salon', 'veuve de haut rang',
    'relieur maître', 'diplomate en semi-retraite', 'abbé de paroisse',
  ],
  age: [
    'rentier', 'rentière de vieille famille', 'vieille dame de la haute société',
    'académicien honoraire', 'médecin honoraire', 'militaire en retraite',
    'ancien magistrat', 'ancien ambassadeur', 'mémorialiste', 'ermite de salon',
    'grand-père botaniste', 'archiprêtre', 'sage-femme de quartier à la retraite',
    'doyen d\'une loge maçonnique', 'antiquaire légendaire du Marais',
  ],
};

// ─── TABLES RÉEL ─────────────────────────────────────────────────────────────

export const TABLES_REEL = {
  titres: [
    null, null, null, null, null, null,
    'Docteur', 'Maître', 'Professeur', 'Commissaire', 'Capitaine',
    'Commandant', 'Inspecteur', 'Abbé', 'Père', 'Sœur',
    'Comte', 'Vicomte', 'Baron', 'Comtesse', 'Baronne',
  ],

  traits: [
    // ── Caractère positif ──────────────────────────────────────────────────
    'optimiste à toute épreuve — voit le meilleur en toute situation',
    'altruiste sincère — le bien d\'autrui avant le sien propre',
    'serviable sans calcul, tend la main avant qu\'on la lui tende',
    'bienveillant naturellement, chaleur de cœur impossible à feindre',
    'prudent et réfléchi — ne décide rien sans mesurer les conséquences',
    'prévenant, pense toujours aux sentiments de l\'autre avant les siens',
    'sobre de mœurs et de langage, droit comme une barre',
    'abstème — n\'a jamais touché à l\'alcool, question de principe',
    'confiant par nature — part du principe que les gens sont honnêtes',
    'médiateur né — calme les esprits avant l\'esclandre',
    'pieux sincèrement, sans ostentation ni bigoterie',
    'honnête absolument — rend toujours son dû, même au détriment de ses intérêts',
    'aimant — tendresse sincère pour ceux qui l\'entourent',
    'courageux sans vantardise, agit quand les autres hésitent',
    'respectueux de chacun selon son rang et sa dignité',
    'patient comme le temps, jamais brusqué',
    'sage — comprend ce qui est vrai et juste avant les autres',
    'imaginatif, ingénieux, toujours une solution de rechange',
    'indulgent — pardonne facilement, même les fautes graves',
    'loyal, tient ses engagements quoi qu\'il en coûte',
    'ponctuel à la minute — question d\'honneur personnel',
    // ── Caractère neutre / ambigu ──────────────────────────────────────────
    'curieux compulsif', 'bavard incontrôlable',
    'taciturne — parle peu, observe beaucoup',
    'mélomane impénitent', 'mordu du surnaturel',
    'pragmatique désenchanté, aucune illusion sur le monde',
    'méfiant chronique sans raison apparente',
    'sarcastique bienveillant — on ne sait jamais s\'il plaisante',
    'obsédé par l\'étiquette et les convenances',
    'romantique incurable, attend l\'aventure et se lamente que le monde soit si banal',
    'collectionneur frénétique, obsédé par un objet précis',
    'franc-maçon discret ou membre d\'une société secrète',
    'joueur invétéré, perd et gagne avec la même indifférence apparente',
    'hypocondriaque distingué — s\'imagine souffrir de toute maladie entendue',
    'patriote exalté, prêt à mourir pour la France — ou du moins à en parler',
    'anarchiste en chambre — théories radicales, vie bourgeoise',
    'spiritualiste convaincu, fréquente les séances de spiritisme',
    'rationaliste acharné, nie l\'existence du surnaturel avec véhémence',
    'nostalgique de l\'Empire, de l\'Ancien Régime, ou d\'un âge d\'or imaginaire',
    'dreyfusard militant', 'antidreyfusard virulent',
    'amateur de sciences occultes, thèses et grimoires',
    'flambeur mondain, dépense sans compter en bonne compagnie',
    'économe jusqu\'à l\'avarice, n\'achète rien dont il peut se passer',
    'perfectionniste névrosé, refait jusqu\'à la satisfaction absolue',
    'insomniaque bibliophile, lit toute la nuit puis somnole le jour',
    'épicurien sans remords, philosophie du plaisir assumée',
    'précis dans les détails, exigeant avec lui-même avant les autres',
    'studieux, apprend en permanence, attentif aux détails',
    'mystérieux, aura difficile à percer',
    'vaniteux, préoccupé par son apparence en permanence',
    'sceptique — ne croit que ce qui est démontré',
    'impulsif — agit avant de réfléchir, regrette parfois',
    'extraverti — s\'épanouit en société, aime le monde',
    'introverti — la vie intérieure prime sur les mondanités',
    'matérialiste — attache de la valeur aux possessions',
    'rêveur, regard toujours légèrement lointain',
    'créatif — fait quelque chose de rien, solutions inattendues',
    'émotif — les sentiments le gouvernent plus qu\'il ne l\'admet',
    'impassible — maîtrise parfaite, même dans la tempête',
    'frivole, léger, rarement sérieux sans y être forcé',
    'distant avec les inconnus, froid en apparence seulement',
    'athée militant — nie le surnaturel avec véhémence',
    'dissident en tout — contre l\'opinion majoritaire par principe',
    'fanatique d\'une cause — prêt à tout pour la défendre',
    // ── Caractère difficile ────────────────────────────────────────────────
    'pessimiste incurable — attend le pire et ne le reçoit jamais sans une certaine satisfaction',
    'égoïste, préoccupé de lui-même avant tout',
    'cruel par indifférence — blesse sans le vouloir, sans remords',
    'négligent — rarement conscient des conséquences de ses actes',
    'désinvolte absolu — incapable de prendre quoi que ce soit au sérieux',
    'ivrogne dissimulé — respectable en apparence, moins en réalité',
    'suspicieux chronique — surveille tout le monde, ne fait confiance à personne',
    'querelleur — cherche la dispute même sans motif apparent',
    'malhonnête par réflexe — triche sans en avoir conscience',
    'haineux à l\'égard d\'un groupe précis — nationalisme, antisémitisme, misanthropie',
    'ladre absolu — refuse de partager la moindre chose',
    'lâche patenté — abandonne sous pression, trouve toujours une bonne raison',
    'colérique — s\'emporte à la moindre contrariété',
    'imprudent — ne mesure jamais les risques avant d\'agir',
    'avare, thésaurise tout pour lui seul',
    'revanchard patient — garde rancune et attend son heure, des années si nécessaire',
    'dissolu — mœurs dissolues, sans scrupule et sans honte',
    'menteur par réflexe, même sans nécessité',
    'irresponsable, laisse toujours les autres gérer les conséquences',
    'arrogant, méprise sincèrement ceux qu\'il juge inférieurs',
  ],

  apparences: [
    'grand et voûté, regard perçant sous des sourcils broussailleux',
    'petite silhouette vive, toujours en mouvement, gestes précis',
    'corpulente et imposante, voix de stentor, rires tonitruants',
    'élégante à l\'excès, vêtements d\'un autre siècle, maintien parfait',
    'mains perpétuellement tachées d\'encre, ongles en deuil',
    'cicatrice discrète sur la tempe gauche, sujet jamais abordé',
    'cheveux blancs prématurés, sourire d\'enfant, regard trop vieux',
    'moustache en guidon de vélocipède, lorgnon d\'écaille',
    'yeux de couleurs différentes, l\'un vert, l\'autre gris',
    'toujours vêtue de noir, deuil perpétuel d\'un inconnu dont elle ne parle jamais',
    'corpulence de lutteur, manières de salon — contraste saisissant',
    'voix douce et posée, regard qui pèse tout en silence',
    'teint pâle de qui ne sort guère, doigts de pianiste',
    'épaisse chevelure rousse, taches de rousseur, énergie débordante',
    'silhouette fine, vêtements trop grands, air absent mais rien ne lui échappe',
    'dos très droit, mâchoire serrée, parfaite maîtrise de soi en toutes circonstances',
    // ── Silhouettes et gabarits ────────────────────────────────────────────
    'extrêmement grand, tête au-dessus des foules, s\'excuse perpétuellement de sa taille',
    'très petite stature, obligé de lever les yeux sur tous, regard d\'autant plus intense',
    'silhouette massive, vêtements toujours trop serrés, rires fréquents et chaleureux',
    'maigre à l\'excès, presque translucide — mais les yeux brillent d\'une vitalité étrange',
    'dos voûté, regard du sol plutôt que des gens, sauf quand on l\'y invite',
    // ── Mise et habillement ───────────────────────────────────────────────
    'mise excessivement soignée, vêtements coûteux, gants changeant selon l\'heure',
    'mise extrêmement simple, sans aucun ornement, ce qui en dit long',
    'vêtements d\'une autre décennie, coupe et tissus démodés portés avec fierté',
    'allure militaire même en civil — tenue, port de tête, façon de s\'asseoir',
    'mise débraillée, col ouvert, chapeau de travers, cigarette perpétuelle',
    'abondance de bijoux, canne à pommeau d\'ivoire, gants de chevreau',
    'métier lisible dans la tenue : mains tachées, vêtements marqués par le travail',
    // ── Traits et voix ───────────────────────────────────────────────────
    'voix forte qui porte loin, parle sans se rendre compte du volume',
    'voix grave et lente, presque murmurée — on se penche pour écouter',
    'accent étranger très marqué qui colore chaque mot',
    'voix zézayante qui contraste avec l\'autorité du regard',
    'discret au point d\'être invisible dans une foule — don troublant',
    'charisme naturel inexpliqué — on se retourne sur son passage sans savoir pourquoi',
    // ── Traits physiques particuliers ────────────────────────────────────
    'tatouage visible — poignet, cou ou main — rarement expliqué',
    'teint gris de maladie chronique, toux que l\'on tait pudiquement',
    'blessure ancienne visible : boite légèrement, ou porte une attelle',
    'androgyne — pourrait passer pour l\'autre sexe sans effort apparent',
    'visage d\'enfant sur un corps d\'adulte — déconcertant au premier abord',
    'visage bien plus vieux que le corps ne le laissait supposer',
  ],

  motivations: [
    'retrouver un objet perdu depuis des années — peut-être volé',
    'prouver l\'existence du surnaturel à la communauté scientifique',
    'venger un affront subi il y a une décennie, jamais oublié',
    'accumuler une fortune suffisante avant ses cinquante ans',
    'décrocher un titre de noblesse pour sa famille',
    'protéger un secret de famille honteux de la lumière',
    'fuir une promesse faite à un mourant — et l\'honorer quand même',
    'retrouver un être cher disparu dans des circonstances obscures',
    'publier un ouvrage qui changera le monde — ou le détruira',
    'réhabiliter la mémoire d\'un ancêtre injustement condamné',
    'survivre à une maladie dont les médecins ignorent la cause',
    'racheter une faute ancienne dont personne d\'autre ne sait rien',
    'décoder un manuscrit transmis de génération en génération',
    'conserver une maison familiale menacée de saisie imminente',
    // ── D'après Central Casting ────────────────────────────────────────────
    'découvrir la vérité sur quelque chose dissimulé depuis des décennies',
    'régler un événement du passé qui n\'a jamais été résolu — cela ronge chaque jour',
    'dévotion absolue à une cause ou une foi — les fins justifient les moyens',
    'avancer les frontières de la science, de la médecine, de la métapsychique',
    'chercher la sagesse, se perfectionner par la connaissance des autres',
    'savoir plus — tout savoir — pour l\'amour de la connaissance elle-même',
    'vivre seulement pour le bien-être d\'un être aimé, son bonheur prime',
    'jouir de l\'existence — ventre plein, lit chaud, désirs assouvis sans remords',
    'tenir le monde sous sa coupe — jamais honorable, toujours tentant',
    'rester en vie contre des forces qui voudraient le contraire',
    'être le meilleur dans son domaine — reconnu ou non, peu importe',
    'accomplir une mission précise — trouver ou faire quelque chose qui compte',
    'se mettre au service de l\'humanité, des plus faibles, des sans-voix',
  ],

  motivationsVeuf: [
    'honorer la mémoire du conjoint disparu par une action décisive',
    'trouver la vérité sur la mort du conjoint — accident ou meurtre ?',
    'protéger les enfants d\'une menace liée au passé du conjoint',
    'se reconstruire après une perte qui a tout changé',
    'exécuter les dernières volontés du conjoint, coûte que coûte',
  ],

  relations: [
    'allié de cœur, loyal sans conditions',
    'observateur froid, neutre et calculateur',
    'rival discret qui vous surveille depuis les coulisses',
    'informateur intéressé — tout a un prix, même l\'amitié',
    'hostile dissimulé, sourire de façade impeccable',
    'ambigu : allié ou ennemi selon les circonstances et la saison',
  ],

  lieux: [
    'Café de la Paix, boulevard des Capucines',
    'les quais de la Seine au crépuscule',
    'le cimetière du Père-Lachaise, allée des Célébrités',
    'le marché aux puces de Saint-Ouen, le dimanche',
    'les jardins des Tuileries, banc face à la grande allée',
    'un salon de la rive gauche, le jeudi soir',
    'la Bibliothèque nationale, salle de lecture B',
    'les coulisses de l\'Opéra Garnier',
    'le Grand Palais, lors des vernissages',
    'la gare de Lyon, buffet de première classe',
    'un cabinet de curiosités du Marais',
    'la Brasserie Lipp, boulevard Saint-Germain',
    'le Moulin Rouge, table du fond',
    'le jardin du Palais-Royal, galerie de droite',
    'une crypte désaffectée sous Montmartre',
  ],

  secrets: [
    'cache la ruine de sa famille derrière un train de vie fastueux',
    'est en réalité un agent double pour une puissance étrangère',
    'a vendu quelque chose d\'impalpable à une créature qu\'il n\'a pas pu identifier',
    'dissimule une guérison miraculeuse dont il ne comprend pas la cause',
    'a été témoin d\'un meurtre et se tait depuis vingt ans',
    'protège l\'identité d\'un enfant illégitime de sang noble',
    'possède un document compromettant pour une personnalité publique',
    'a emprunté une identité à un mort — par nécessité, dit-il',
    'souffre d\'une addiction que le monde ne doit jamais savoir',
    'est convaincu d\'être suivi, observé — et il a peut-être raison',
    'doit une somme colossale à quelqu\'un qui n\'est pas humain',
    'a participé à une expérience scientifique interdite sur des sujets humains',
    'a rencontré une chose dans les catacombes et n\'en parle à personne',
    'possède un don qu\'il considère comme une malédiction',
    // ── D'après Central Casting ────────────────────────────────────────────
    'a été emprisonné pour un crime qu\'il n\'a pas commis — et sait qui a',
    'sa famille a perdu titres et terres par la faute d\'un ennemi encore vivant',
    'a trouvé dans les effets d\'un mort un journal révélant un trésor caché',
    'était fiancé(e) le jour où une tragédie a tout brisé — n\'en parle jamais',
    'le défunt de la famille serait réapparu vivant — mais quelque chose cloche',
    'est l\'escroc ou la dupe d\'une affaire qui pourrait tout faire s\'effondrer',
    'a failli mourir et n\'est pas sûr de s\'en être pleinement remis',
    'a tenté de mettre fin à sa vie — personne ne doit le savoir',
    's\'est construit une identité de toutes pièces après la mort de qui il était',
    'cache une noblesse de sang sous des habits d\'humble — ou l\'inverse',
    'mourait lentement d\'une maladie que les médecins ne reconnaissent plus depuis sa guérison inexplicable',
    'a signé un pacte sans bien en lire les termes — et commence à comprendre ce qu\'il a cédé',
    'a hérité d\'un siège dans une société secrète dont il ne comprend pas encore les règles',
  ],

  phobies: [
    'la peur d\'être seul en tout lieu désert (monophobie)',
    'la peur morbide des chats — même les plus inoffensifs',
    'la vue du sang ou des blessures ouvertes',
    'le froid extrême, les nuits sans feu, les hivers sans fin',
    'les cadavres et tout ce qui ressemble à la mort',
    'l\'obscurité totale, l\'absence de lumière',
    'les espaces fermés, les caves, les couloirs sans issue',
    'le feu — sa beauté même le terrifie',
    'les hauteurs — vertige panique au-dessus du premier étage',
    'les insectes sous toutes leurs formes',
    'les araignées en particulier',
    'le bruit et la présence des machines à vapeur',
    'la nuit et ses bruits inconnus',
    'les grandes places et les espaces ouverts sans limite',
    'les reptiles et les serpents',
    'la douleur physique, même minime',
    'les étrangers, les visages inconnus',
    'l\'eau profonde, les rivières, la mer',
    'les tempêtes, la foudre, le tonnerre',
    'les blessures qui ne guérissent pas correctement',
    'les foules compactes et leur bruit',
    'le jugement divin et la damnation',
    'les plantes en masse — forêts, taillis, végétation envahissante',
    'le poison — dans la nourriture, dans l\'air, dans les vêtements',
    'les créatures monstrueuses, l\'anormal et le difforme',
    'l\'amour physique (érotophobie)',
    'le regard des poupées, des mannequins, des portraits peints',
    'les miroirs — surtout dans l\'obscurité',
    'les animaux en général — n\'importe lesquels',
    'la folie — devenir fou, reconnaître la folie autour de soi',
  ],

  hobbies: [
    'la collection — timbres, monnaies anciennes, boîtes à tabac, cartes postales',
    'la collection de livres rares ou d\'éditions originales',
    'la danse — valse, polka, quadrille, tango naissant',
    'la chasse au grand gibier en province',
    'la pêche à la ligne, activité méditative',
    'la randonnée et l\'alpinisme, membre d\'un club d\'excursionnistes',
    'l\'écriture — poésie, chroniques, feuilletons de presse',
    'la peinture à l\'huile ou l\'aquarelle',
    'la sculpture — atelier dans l\'arrière-cour',
    'la broderie, la dentelle, ou le tricot fin',
    'la musique — piano, violon, flûte, mandoline, chant',
    'l\'astronomie — observateur nocturne avec lunette personnelle',
    'l\'archéologie de salon — fouilles amateurs en province',
    'l\'escrime, la boxe, ou la lutte gréco-romaine',
    'la natation, le canotage sur la Seine',
    'le tir à la cible au stand ou à la campagne',
    'les jeux de cartes, le billard, les échecs',
    'le jardinage — potager, roseraie, serres',
    'l\'élevage de chiens ou de chevaux',
    'la photographie — chambre noire, plaques de verre, tirages à l\'albumine',
    'le cinéma — depuis les Lumières, une passion neuve',
    'l\'étude des langues étrangères',
    'la prestidigitation amateur, tours de cartes et illusions',
    'l\'étude de l\'occultisme, des runes, du tarot',
    'les sports nautiques — aviron, voile sur les lacs',
  ],

  comportements: [
    'mène une double vie parfaitement cloisonnée',
    'flirte avec tous ceux de l\'autre sexe, innocemment — ou presque',
    'dépendance visible à l\'alcool, au tabac, au laudanum, ou au café fort',
    'se recoiffe ou réajuste sa tenue en permanence, même en pleine conversation',
    'distrait chronique — perd ses effets, oublie les rendez-vous importants',
    'maladroit avec les objets — renverse ou casse régulièrement quelque chose',
    'collectionne compulsivement, lié à une obsession précise',
    'possession distinctive — montre de gousset rare, canne à épée, médaillon',
    'incapable d\'agir anonymement — laisse toujours une trace, une signature',
    'hoquet nerveux déclenché par le stress ou certains aliments',
    'complexe assumé vis-à-vis de son apparence — y compense ou s\'y accroche',
    'sait tout sur tout et ne rate pas une occasion de le faire savoir',
    'perfectionniste pathologique — refait jusqu\'à la satisfaction totale',
    'caractère sensible au sang, aux odeurs fortes — se retrouve mal aisément',
    'bégaiement modéré qui s\'accentue sous pression',
    'charme naturel inexpliqué qui attire les inconnus sans effort visible',
    'appétit démesuré — mange deux fois plus que la normale',
    'pacifiste absolu — jamais, sous aucun prétexte, même pour se défendre',
    'fanatique d\'une cause — politique, religieuse ou sociale',
    'amoureux des animaux — ramène toujours un nouveau pensionnaire à la maison',
    'militant discret d\'une cause sociale ou politique scandaleuse',
    'affectionne les tours pratiques — canulars, paris, plaisanteries élaborées',
    'maniaque de l\'ordre — les effets dérangés par autrui lui coûtent physiquement',
    'amasse tout, ne jette rien — mais retrouve toujours ce qu\'il cherche',
    'tic physique distinctif : clignements, manipulation de ses propres doigts, haussements',
  ],
};

// ─── SECRETS PAR CATÉGORIE DE MÉTIER ─────────────────────────────────────────
// Clé = mots-clés présents dans le métier (minuscules). Valeur = pool de secrets thématiques.
// Si le métier ne correspond à aucune catégorie, on retombe sur TABLES_REEL.secrets.

export const SECRETS_PAR_CATEGORIE = {
  medical: {
    mots: ['médecin', 'pharmacien', 'apothicaire', 'chirurgien', 'infirmier', 'sage-femme', 'dentiste', 'aliéniste'],
    secrets: [
      'a participé à une expérience sur des patients sans leur consentement — et les résultats ont été publiés sous son nom',
      'prescrit des substances addictives à des patients vulnérables, en échange de leur silence sur autre chose',
      'a maquillé en cause naturelle la mort d\'un patient due à une erreur de sa main',
      'est lui-même dépendant à une substance qu\'il prescrit — laudanum, morphine, chloral',
      'exerce sous des diplômes qui ne lui appartiennent pas entièrement',
      'a vendu des informations médicales confidentielles à une compagnie d\'assurances',
      'a réalisé des expériences sur des cadavres qui ne lui avaient pas été officiellement cédés',
    ],
  },
  juridique: {
    mots: ['avocat', 'notaire', 'juge', 'magistrat', 'commissaire', 'inspecteur', 'huissier', 'procureur'],
    secrets: [
      'détient dans ses archives des documents compromettants pour plusieurs de ses clients — et s\'en sert',
      'a fait condamner un innocent et n\'a jamais eu le courage de le révéler',
      'travaille secrètement pour une faction criminelle en leur transmettant les décisions à venir',
      'a accepté un pot-de-vin qui a changé le cours d\'une affaire célèbre',
      'connaît l\'identité du vrai coupable d\'un crime non résolu et se tait depuis dix ans',
      'a détruit des pièces à conviction sur ordre d\'un supérieur — sans en comprendre encore la raison',
    ],
  },
  presse: {
    mots: ['journaliste', 'rédacteur', 'reporter', 'chroniqueur', 'critique', 'secrétaire de rédaction'],
    secrets: [
      'a fabriqué des témoignages pour étoffer un article qui lui a valu la célébrité — et le sait',
      'est payé secrètement pour orienter sa plume dans un sens politique précis',
      'a plagié l\'œuvre d\'un mort dont nul ne réclame plus les droits',
      'possède des photographies compromettantes d\'une personnalité publique, sous clé depuis des années',
      'son pseudonyme le plus connu cache une double vie que son entourage ne soupçonne pas',
      'a tenu sous silence un scandale qui aurait changé le cours d\'une élection',
    ],
  },
  arts: {
    mots: ['peintre', 'sculpteur', 'compositeur', 'acteur', 'actrice', 'musicien', 'dessinateur', 'photographe', 'graveur'],
    secrets: [
      'l\'œuvre qui a fondé sa réputation n\'est pas de sa main',
      'vend en secret des copies de maîtres comme des originaux, à des collectionneurs trop pressés',
      'son mécène exige une contrepartie dont personne ne doit savoir la nature',
      'a détruit délibérément l\'œuvre d\'un rival pour s\'assurer d\'une commande',
      'son style "personnel" est une imitation consciente d\'un artiste mort dans l\'obscurité',
    ],
  },
  occultisme: {
    mots: ['médium', 'magnétiseur', 'occultiste', 'spiritiste', 'cartomancien', 'astrologue', 'alchimiste'],
    secrets: [
      'a réellement contacté quelque chose lors d\'une séance — et ça répond encore quand il ne le cherche pas',
      'est un charlatan qui commence sincèrement à douter de l\'être',
      'a signé un accord avec une entité dont il n\'a plus lu les clauses depuis',
      'détient un objet qui ne devrait pas exister dans le monde matériel — et qui se déplace',
      'sa voyance est réelle et il en a une terreur absolue',
      'a fait du mal à quelqu\'un par une expérience dont il n\'a pas su mesurer les conséquences',
    ],
  },
  commerce: {
    mots: ['agent de change', 'banquier', 'commerçant', 'rentier', 'négociant', 'courtier', 'marchand', 'propriétaire', 'industriel'],
    secrets: [
      'a ruiné délibérément une famille concurrente pour racheter ses actifs au prix de la détresse',
      'cache la faillite imminente de son affaire derrière une façade de prospérité intacte',
      'blanchit discrètement de l\'argent pour une organisation dont il préfère ignorer la nature',
      'a détourné des fonds en fiducie confiés par un client maintenant mort',
      'sa fortune initiale vient d\'une source qu\'il ne pourra jamais révéler sans tout perdre',
    ],
  },
  militaire: {
    mots: ['capitaine', 'commandant', 'officier', 'général', 'lieutenant', 'sergent', 'soldat', 'militaire', 'gendarme'],
    secrets: [
      'a donné un ordre qui a causé des morts civils lors d\'une campagne coloniale — enterré dans les archives',
      'travaille secrètement pour un cabinet de renseignement étranger depuis la guerre de 70',
      'a simulé sa mort lors d\'une campagne et pris une nouvelle identité — l\'ancienne réclame',
      'a couvert des exactions commises par ses hommes en échange de leur loyauté absolue',
      'possède des documents militaires classifiés qui pourraient faire tomber un général',
    ],
  },
  religion: {
    mots: ['abbé', 'père', 'sœur', 'prêtre', 'pasteur', 'rabbin', 'imam', 'archiprêtre', 'diacre', 'novice'],
    secrets: [
      'a perdu la foi il y a des années et continue par inertie, habitude, et peur du vide',
      'protège un membre de sa congrégation coupable d\'un crime grave',
      'a entendu en confession quelque chose qui le ronge — et ne peut pas le dire',
      'entretient une relation interdite par ses vœux, soigneusement dissimulée',
      'correspond avec une organisation que sa hiérarchie condamnerait immédiatement',
    ],
  },
};

// ─── TABLES MERVEILLEUX ───────────────────────────────────────────────────────

export const TABLES_MERVEILLEUX = {
  prenomsMasculins: [
    'Obéron', 'Méliandre', 'Corax', 'Théniel', 'Ærindal', 'Solvane',
    'Éidolon', 'Vesperin', 'Noirval', 'Argéal', 'Zéphyrin', 'Mirail',
    'Ondral', 'Ferral', 'Lyndar', 'Quiral', 'Sylven', 'Thalion',
  ],
  prenomsFeminins: [
    'Sylvane', 'Iriell', 'Nocturne', 'Vespéra', 'Mælys', 'Aëlis',
    'Corindelle', 'Néveil', 'Sélénis', 'Orlane', 'Yvane', 'Maëllys',
    'Arwel', 'Brenaël', 'Clarisiel', 'Elsiane', 'Fenwyl',
  ],
  prenomsNeutres: [
    'Aurore', 'Brume', 'Crépuscule', 'Éclat', 'Givre', 'Halo',
    'Méandre', 'Orage', 'Reflet', 'Sillon', 'Toile', 'Lilas',
  ],
  noms: [
    'du Voile', 'de Brume', 'des Cendres', 'des Étoiles', 'de la Nuit',
    'du Sang', 'd\'Argent', 'des Rêves', 'd\'Ébène', 'du Chaos',
    'de Fer', 'des Ombres', 'du Givre', 'de Feu', 'du Silence',
    'des Profondeurs', 'du Crépuscule', 'de l\'Aube', 'du Vide',
  ],
  titres: [
    'Gardien du Voile', 'Tisserand de Rêves', 'Messager des Cours',
    'Juge des Pactes', 'Collecteur d\'Âmes', 'Héraut de la Reine',
    'Veilleur des Oubliés', 'Assesseur du Tribunal Nocturne',
    null, null, null,
  ],
  metiers: [
    'gardien du Voile entre les deux mondes', 'tisserand de rêves pour les dormeurs',
    'messager entre les Cours féeriques', 'juge des pactes et contrats surnaturels',
    'collectionneur d\'émotions humaines rares', 'cartographe des lieux impossibles',
    'archiviste des noms oubliés', 'passeur de frontières entre les règnes',
    'forgeron d\'impossibles', 'souffleur de destins', 'apothicaire des poisons de l\'âme',
    'accordeur de pactes rompus', 'tailleur de miroirs brisés',
  ],
  traits: [
    'éternel curieux des choses mortelles', 'nostalgie profonde d\'une chose perdue avant sa naissance',
    'mépris poli mais absolu des conventions humaines', 'fascination pour les contradictions humaines',
    'incapacité sincère à mentir sur l\'essentiel', 'incapacité totale à dire la vérité sur le superficiel',
    'amour immodéré des promesses — les siennes comme celles des autres',
    'regard qui traverse les gens plutôt que de les voir',
    'calme déconcertant dans les situations impossibles',
    'nostalgie d\'une époque dont personne d\'autre ne se souvient',
    'douceur avec les enfants et les mourants', 'violence froide quand un pacte est rompu',
    'obsession pour les noms — les vrais, les cachés',
  ],
  apparences: [
    'peau qui reflète la lumière à l\'envers selon l\'heure',
    'ombre qui ne correspond jamais tout à fait à la silhouette',
    'yeux qui changent de couleur selon ce qu\'ils regardent',
    'voix qui résonne une demi-seconde avant la parole',
    'vêtements qui semblent toujours neufs, jamais froissés',
    'sourire trop parfait, symétrique au millimètre',
    'empreintes de pas qui ne coïncident pas avec la direction marchée',
    'parfum qui change selon l\'interlocuteur',
    'cheveux qui bougent légèrement même sans vent',
    'mains froides en permanence',
  ],
  motivations: [
    'recouvrer quelque chose qui lui a été volé il y a plusieurs siècles',
    'trouver un humain assez remarquable pour mériter un pacte sincère',
    'comprendre pourquoi les mortels s\'attachent à des choses si périssables',
    'réparer une trahison ancienne dont il est à la fois victime et coupable',
    'retrouver un équilibre rompu entre les deux mondes',
    'observer l\'espèce humaine jusqu\'à en percer le dernier mystère',
    'honorer une dette contractée avant la naissance de ses interlocuteurs',
    'empêcher quelque chose que l\'avenir montre comme inévitable',
  ],
  relations: [
    'allié sincère — mais les intérêts féeriques passent avant tout',
    'observateur indéchiffrable : ni ami, ni ennemi, quelque chose d\'autre',
    'protecteur désintéressé — pour l\'instant',
    'débiteur ou créancier d\'un pacte inconnu des joueurs',
    'hostile par principe : les mortels qui voient trop posent problème',
    'ambigu : sa loyauté dépend d\'un accord dont personne ne connaît les termes',
  ],
  lieux: [
    'le bois de Boulogne après la fermeture, dans la partie sans allées',
    'les catacombes, couloir dit "du Voile mince"',
    'une galerie de tableaux dont les portraits changent la nuit',
    'le dernier wagon du métro après minuit',
    'un jardin d\'hôtel particulier inaccessible depuis la rue',
    'les sous-sols de l\'Opéra que les plans n\'indiquent pas',
    'un cabinet de curiosités dont l\'adresse change',
    'un salon de thé qui n\'existe que par temps de brouillard',
  ],
  secrets: [
    'n\'a pas dormi depuis un siècle et commence à l\'oublier',
    'porte un nom volé à quelqu\'un qui n\'est plus en état de le réclamer',
    'est lié par un pacte qu\'il ne comprend plus entièrement lui-même',
    'a aidé un humain à faire quelque chose d\'irréparable et le regrette sincèrement',
    'cherche à mourir de façon permanente — chose impossible pour ce qu\'il est',
    'connaît la vraie nature de quelqu\'un d\'important pour les joueurs',
    'a perdu la mémoire d\'une partie de son existence et cela lui fait peur',
    'doit se nourrir de quelque chose que les mortels considèrent précieux',
  ],
  apparencesMasquees: [
    'silhouette élégante d\'un bourgeois ordinaire de la Belle Époque',
    'vieille dame en grand deuil, discrète et bienveillante',
    'employé municipal quelconque, toujours à la même place',
    'étudiant en médecine, perpétuellement en retard',
    'commerçante du quartier que l\'on croise sans la voir',
    'notaire de province monté à Paris pour affaires',
  ],
  apparencesDemasquees: [
    'lumière qui n\'éclaire rien autour d\'elle',
    'forme humaine mais les proportions ne sont pas tout à fait justes',
    'visage qui ressemble à celui du dernier interlocuteur, en négatif',
    'silhouette qui existe entre deux instants plutôt que dans l\'un d\'eux',
    'éclat d\'une beauté qui blesse légèrement les yeux',
    'absence de reflet, d\'ombre, de trace — l\'espace se referme derrière',
  ],
};

// ─── SURCHARGES PAR TYPE DE FÉE ──────────────────────────────────────────────

export const SURCHARGES_TYPE_FEE = {
  'ange': {
    prenomsMasculins: ['Gabriel', 'Raphaël', 'Uriel', 'Samael', 'Azrael', 'Michaël', 'Nathaniel'],
    prenomsFeminins: ['Séraphine', 'Ariel', 'Cassiel', 'Laïlah', 'Muriel', 'Zadkiel'],
    traits: ['défenseur obstiné des faibles', 'justice inflexible même contre les siens', 'douceur de façade sur une rage contenue', 'incapable de mentir par omission'],
    apparencesDemasquees: ['ailes blanches ou grises déployées, lumière laiteuse sur la peau', 'halo discret, visible seulement dans l\'obscurité totale'],
  },
  'vampyr': {
    prenomsMasculins: ['Lazare', 'Vladislav', 'Cravan', 'Aldric', 'Séraphin'],
    prenomsFeminins: ['Élisaveta', 'Narcissa', 'Morvane', 'Séverine', 'Vlaska'],
    traits: ['calme de prédateur', 'mémoire photographique des humains rencontrés', 'dégoût sincère de la précipitation', 'attachement inexplicable à certains mortels'],
    apparencesDemasquees: ['peau qui absorbe la lumière ambiante', 'canines légèrement allongées, yeux rouges sous l\'effort', 'froid perceptible dans un rayon d\'un mètre'],
  },
  'loup_garou': {
    prenomsMasculins: ['Galdric', 'Fenrik', 'Aldous', 'Wolfram', 'Sigurd'],
    prenomsFeminins: ['Lurka', 'Valkine', 'Sigrid', 'Frieda', 'Morwenna'],
    traits: ['loyauté absolue à sa meute, suspicion envers les autres', 'énergie physique difficile à contenir en société'],
    apparencesDemasquees: ['musculature surdéveloppée, poils aux poignets', 'pupilles qui se contractent en verticale sous le stress'],
  },
  'ondine': {
    prenomsMasculins: ['Morvael', 'Océan', 'Nérée', 'Triton', 'Aquilon'],
    prenomsFeminins: ['Ondine', 'Sélénis', 'Mélusine', 'Naïade', 'Sirène'],
    traits: ['attachement imprévisible à certains humains', 'mélancolie qui vient et repart comme la marée'],
    lieux: ['les bords de la Seine à marée basse', 'les bassins des jardins publics après la fermeture'],
  },
  'elfe': {
    prenomsMasculins: ['Galadhon', 'Erindal', 'Finwë', 'Celeborn', 'Thranduil'],
    prenomsFeminins: ['Arweniel', 'Galadrielle', 'Nimrodel', 'Silmariel', 'Varda'],
    traits: ['mémoire parfaite, incapacité totale à oublier', 'esthétisme douloureux — tout ce qui est laid lui coûte'],
  },
  'gobelin': {
    prenomsMasculins: ['Grix', 'Korrob', 'Snark', 'Twich', 'Braz'],
    prenomsFeminins: ['Nixe', 'Grixi', 'Flick', 'Morka', 'Twig'],
    traits: ['génie du recyclage et du bricolage', 'cupidité philosophique — non morale', 'rancune tenace, gratitude encore plus tenace'],
  },
  'sylve': {
    prenomsMasculins: ['Rameau', 'Écorce', 'Racine', 'Cèdre', 'Chêne', 'Frênal'],
    prenomsFeminins: ['Feuille', 'Flore', 'Fougère', 'Lierre', 'Mousse', 'Pivoine'],
    traits: ['patience géologique', 'incompréhension sincère des urgences humaines'],
    lieux: ['le Bois de Vincennes, zone interdite aux promeneurs', 'les serres du Jardin des Plantes'],
  },
  'farfadet': {
    prenomsMasculins: ['Lutin', 'Follet', 'Espiègle', 'Caprice', 'Grig'],
    prenomsFeminins: ['Malice', 'Fantaisie', 'Folette', 'Capricieuse'],
    traits: ['incapacité quasi-clinique à rester sérieux', 'génie pratique du chaos non-destructeur'],
  },
  'korrigan': {
    prenomsMasculins: ['Korrigan', 'Dremorgant', 'Teuz', 'Barz', 'Névez'],
    prenomsFeminins: ['Korriganed', 'Noz', 'Steren', 'Roz', 'Bleunven'],
    traits: ['attachement obsessionnel aux lieux hantés', 'don pour la prophétie en vers', 'rancoeur millénaire contre les cloches d\'église'],
  },
  'bastet': {
    prenomsMasculins: ['Bastet', 'Rê-Kha', 'Anubis', 'Khepri', 'Sethos'],
    prenomsFeminins: ['Sekhmet', 'Nefertiti', 'Isis', 'Hathor', 'Ankh'],
    traits: ['fierté souveraine, jamais blessée en apparence', 'affection donnée une seule fois — et retirée de même', 'curiosité sans scrupule pour ce qui appartient aux autres'],
  },
  'gnome': {
    prenomsMasculins: ['Silico', 'Terrus', 'Profond', 'Granit', 'Schist'],
    prenomsFeminins: ['Gemma', 'Cristal', 'Argile', 'Silex', 'Calcite'],
    traits: ['avarice non assumée', 'sens aigu de la propriété souterraine', 'méfiance instinctive envers tout ce qui pousse'],
  },
};

// ─── UTILITAIRE ──────────────────────────────────────────────────────────────

/** Tire un élément aléatoire dans un tableau. */
export function tirage(tableau) {
  if (!tableau || tableau.length === 0) return null;
  return tableau[Math.floor(Math.random() * tableau.length)];
}

/**
 * Tirage en cloche (distribution gaussienne approximée par somme de deux aléatoires).
 * Les entrées au milieu du tableau sont ~2-3× plus probables que les extrêmes.
 * Imite le d4+d10 de Central Casting.
 */
export function tirageCloche(tableau) {
  if (!tableau || tableau.length === 0) return null;
  const n = tableau.length;
  // Somme de deux tirages uniformes → distribution triangulaire centrée
  const i = Math.floor(((Math.random() + Math.random()) / 2) * n);
  return tableau[Math.min(i, n - 1)];
}

/** Tire N éléments distincts dans un tableau (sans remise). */
export function tirageMultiple(tableau, n) {
  if (!tableau || tableau.length === 0) return [];
  const shuffled = [...tableau].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(n, shuffled.length));
}
