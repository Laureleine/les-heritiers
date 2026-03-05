// src/data/data.js
// Version: 2.9.0
// Build: 2026-01-31 20:30
// Description: Données du jeu (fées, compétences, profils) - DONNÉES UNIQUEMENT
// Les fonctions utilitaires sont dans dataHelpers.js
// Dernière modification: 2026-01-31

// ============================================================================
// TYPES DE FÉES ET ANCIENNETÉ
// ============================================================================

export const fairyTypesByAge = {
  traditionnelles: [
    'Ange', 'Bastet', 'Elfe', 'Farfadet', 'Gnome', 'Gobelin', 'Korrigan', 'Léporide', 'Loup-Garou', 'Ogre', 'Ondine', 'Orc', 'Phénix', 'Succube/Incube', 'Sylve', 'Troll', 'Vampyr'
  ],
  modernes: ['Fée électricité', 'Fleur de métal', 'Fouinard', 'Gargouille', 'Golem', 'Gremelin', 'Protys', 'Smog'  ]
};

export const fairyTypes = [...fairyTypesByAge.traditionnelles, ...fairyTypesByAge.modernes];

export const fairyData = {
  'Ange': {
    anciennete: 'traditionnelle',
    description: 'Les Anges sont des êtres célestes dotés de grandes ailes blanches. Ils incarnent la pureté et la lumière dans le Paris de la Belle Époque.',
    caracteristiques: {
      agilite: { min: 1, max: 4 },
      constitution: { min: 2, max: 5 },
      force: { min: 1, max: 3 },
      precision: { min: 2, max: 4 },
      esprit: { min: 3, max: 6 },
      perception: { min: 2, max: 5 },
      prestance: { min: 3, max: 6 },
      sangFroid: { min: 2, max: 5 }
    },
    competencesPredilection: [
      { nom: 'Éloquence', specialite: null },
      { nom: 'Médecine', specialite: 'Premiers soins' },
      { nom: 'Culture générale', specialite: null }
    ],
    competencesFutilesPredilection: ['Chant', 'Poésie'],
    capacites: {
      fixe1: { nom: 'Vol', description: 'Capacité à voler grâce à leurs ailes majestueuses.' },
      fixe2: { nom: 'Aura de Lumière', description: 'Émet une douce lumière apaisante dans l\'obscurité.' },
      choix: [
        { nom: 'Guérison mineure', description: 'Peut soigner les blessures légères par imposition des mains.' },
        { nom: 'Vision divine', description: 'Perception accrue des intentions et de la vérité.' },
        { nom: 'Résistance sacrée', description: 'Résistance naturelle aux énergies négatives et malédictions.' }
      ]
    },
    pouvoirs: [
      { nom: 'Bénédiction', description: 'Accorde un bonus temporaire de chance à une personne.' },
      { nom: 'Bouclier de Foi', description: 'Crée une protection magique contre les attaques.' },
      { nom: 'Chant Céleste', description: 'Un chant qui apaise les esprits et calme les conflits.' },
      { nom: 'Purification', description: 'Nettoie un lieu ou un objet des influences négatives.' },
      { nom: 'Inspiration Divine', description: 'Accorde sagesse et clarté d\'esprit temporairement.' }
    ]
  },

  'Bastet': {
    anciennete: 'traditionnelle',
    description: 'Homme-chat rusé, joueur et séducteur, il est aussi capable de prouesses acrobatiques. Le bastet est une créature gracieuse de forme humanoïde mais à tête de chat : il a des oreilles pointues, des moustaches et des yeux de félin. Sa queue est longue et son pelage soyeux. Le bastet est foncièrement joueur et paresseux, incorrigiblement séducteur et indépendant. Traits fréquents : charmeur, joueur, malicieux, paresseux.',
    caracteristiques: {
      agilite: { min: 3, max: 7 },
      constitution: { min: 1, max: 5 },
      force: { min: 1, max: 5 },
      precision: { min: 2, max: 6 },
      esprit: { min: 2, max: 6 },
      perception: { min: 3, max: 7 },
      prestance: { min: 3, max: 7 },
      sangFroid: { min: 1, max: 5 }
    },
    competencesPredilection: [
      { nom: 'Classe', specialite: 'Élégance' },
      { nom: 'Habiletés', specialite: 'Ingéniosité' },
      { nom: 'Larcin', specialite: null },
      { nom: 'Séduction', specialite: null },
      { nom: 'Survie', specialite: 'Chasse' }
    ],
    competencesFutilesPredilection: [
      'Jeux',
      { choix: ['Danse', 'Potins mondains'] }
    ],
    capacites: {
      fixe1: { 
        nom: 'Pattes de velours', 
        description: 'Grâce et discrétion naturelles. Belle mine : bonus de +2 aux tentatives de séduction. Contorsionniste : peut passer à travers n\'importe quel orifice de la taille de sa tête.' 
      },
      fixe2: { 
        nom: 'Vision nocturne', 
        description: 'Voit parfaitement dans l\'obscurité totale.' 
      },
      choix: [
        { nom: 'Crochets d\'escalade', description: 'Griffes rétractiles permettant escalade facilitée et utilisation au combat.' },
        { nom: 'Agilité accrue', description: 'Réflexes surhumains et prouesses acrobatiques exceptionnelles.' },
        { nom: 'Précision accrue', description: 'Coordination œil-main et dextérité améliorées.' }
      ]
    },
    pouvoirs: [
      { nom: 'Charme', description: '(Masqué) Influence subtilement les émotions, séduction naturelle.' },
      { nom: 'Chute indolore', description: '(Masqué) Retombe toujours sur ses pattes sans dommages de chute.' },
      { nom: 'Équilibre du funambule', description: '(Masqué) Marche sur surfaces étroites avec aisance parfaite.' },
      { nom: 'Prédation', description: '(Démasqué) Instincts de chasseur, bonus traque et combat.' },
      { nom: 'Réflexe surhumain', description: '(Démasqué) Réactions instantanées, bonus d\'initiative.' },
      { nom: 'Métamorphose en chat', description: '(Démasqué) Transformation en chat domestique de taille normale.' }
    ],
    avantages: [
      {
        nom: 'Belle mine',
        description: 'Séducteur-né. Bonus de +2 aux tentatives de séduction, quel que soit le sexe ciblé.'
      },
      {
        nom: 'Contorsionniste',
        description: 'Peut passer à travers tout orifice de la taille de sa tête, masqué ou non.'
      }
    ],
    desavantages: [
      {
        nom: 'Joueur',
        description: 'Incorrigiblement joueur. Cherche l\'amusement même si c\'est dangereux ou inutile. Test Fortitude+Sang-froid requis pour résister.'
      },
      {
        nom: 'Paresseux',
        description: 'Refuse activités salissantes/humiliantes/fatigantes sauf urgence. Si résigné, malus de -1.'
      }
    ]
  },

  'Elfe': {
    anciennete: 'traditionnelle',
    description: 'Les Elfes sont réputés pour leur beauté éthérée et leur lien profond avec la nature.',
    caracteristiques: {
      agilite: { min: 3, max: 5 },
      constitution: { min: 1, max: 3 },
      force: { min: 1, max: 3 },
      precision: { min: 3, max: 6 },
      esprit: { min: 2, max: 5 },
      perception: { min: 3, max: 6 },
      prestance: { min: 2, max: 5 },
      sangFroid: { min: 2, max: 4 }
    },
    competencesPredilection: [
      { nom: 'Armes à distance', specialite: 'Arc' },
      { nom: 'Exploration', specialite: 'Orientation' },
      { nom: 'Survie', specialite: 'Forêt' }
    ],
    competencesFutilesPredilection: ['Musique (instrument)', 'Jardinage'],
    capacites: {
      fixe1: { nom: 'Longévité', description: 'Vieillit très lentement et peut vivre plusieurs siècles.' },
      fixe2: { nom: 'Sens aiguisés', description: 'Ouïe et vue exceptionnellement développées.' },
      choix: [
        { nom: 'Affinité végétale', description: 'Communique et influence la croissance des plantes.' },
        { nom: 'Résistance au sommeil', description: 'N\'a besoin que de quelques heures de méditation.' },
        { nom: 'Maîtrise de l\'arc', description: 'Précision naturelle exceptionnelle au tir.' }
      ]
    },
    pouvoirs: [
      { nom: 'Marche forestière', description: 'Se déplace sans laisser de trace dans la nature.' },
      { nom: 'Langue sylvestre', description: 'Comprend et parle avec les créatures de la forêt.' },
      { nom: 'Camouflage naturel', description: 'Se fond dans les environnements naturels.' },
      { nom: 'Enchantement mineur', description: 'Peut enchanter temporairement de petits objets.' },
      { nom: 'Harmonie avec la nature', description: 'Ressent les perturbations dans l\'environnement naturel.' }
    ]
  },

  // Autres fées anciennes (templates à compléter)
  'Farfadet': {
    anciennete: 'traditionnelle',
    description: 'À compléter.',
    caracteristiques: {
      agilite: { min: 2, max: 5 }, constitution: { min: 1, max: 4 }, force: { min: 1, max: 3 },
      precision: { min: 2, max: 5 }, esprit: { min: 2, max: 5 }, perception: { min: 2, max: 5 },
      prestance: { min: 2, max: 4 }, sangFroid: { min: 1, max: 4 }
    },
    competencesPredilection: [],
    competencesFutilesPredilection: [],
    capacites: {
      fixe1: { nom: 'Capacité fixe 1', description: 'À compléter' },
      fixe2: { nom: 'Capacité fixe 2', description: 'À compléter' },
      choix: [
        { nom: 'Option A', description: 'À compléter' },
        { nom: 'Option B', description: 'À compléter' },
        { nom: 'Option C', description: 'À compléter' }
      ]
    },
    pouvoirs: [
      { nom: 'Pouvoir 1', description: 'À compléter' },
      { nom: 'Pouvoir 2', description: 'À compléter' },
      { nom: 'Pouvoir 3', description: 'À compléter' }
    ]
  },

  'Gnome': {
    anciennete: 'traditionnelle',
    description: 'À compléter.',
    caracteristiques: {
      agilite: { min: 2, max: 4 }, constitution: { min: 3, max: 6 }, force: { min: 2, max: 5 },
      precision: { min: 2, max: 5 }, esprit: { min: 2, max: 5 }, perception: { min: 2, max: 5 },
      prestance: { min: 1, max: 3 }, sangFroid: { min: 2, max: 5 }
    },
    competencesPredilection: [],
    competencesFutilesPredilection: [],
    capacites: {
      fixe1: { nom: 'Capacité fixe 1', description: 'À compléter' },
      fixe2: { nom: 'Capacité fixe 2', description: 'À compléter' },
      choix: [
        { nom: 'Option A', description: 'À compléter' },
        { nom: 'Option B', description: 'À compléter' },
        { nom: 'Option C', description: 'À compléter' }
      ]
    },
    pouvoirs: [
      { nom: 'Pouvoir 1', description: 'À compléter' },
      { nom: 'Pouvoir 2', description: 'À compléter' },
      { nom: 'Pouvoir 3', description: 'À compléter' }
    ]
  },

  'Gobelin': {
    anciennete: 'traditionnelle',
    description: 'À compléter.',
    caracteristiques: {
      agilite: { min: 2, max: 5 }, constitution: { min: 2, max: 4 }, force: { min: 1, max: 4 },
      precision: { min: 2, max: 5 }, esprit: { min: 2, max: 5 }, perception: { min: 2, max: 5 },
      prestance: { min: 1, max: 3 }, sangFroid: { min: 2, max: 4 }
    },
    competencesPredilection: [],
    competencesFutilesPredilection: [],
    capacites: {
      fixe1: { nom: 'Capacité fixe 1', description: 'À compléter' },
      fixe2: { nom: 'Capacité fixe 2', description: 'À compléter' },
      choix: [
        { nom: 'Option A', description: 'À compléter' },
        { nom: 'Option B', description: 'À compléter' },
        { nom: 'Option C', description: 'À compléter' }
      ]
    },
    pouvoirs: [
      { nom: 'Pouvoir 1', description: 'À compléter' },
      { nom: 'Pouvoir 2', description: 'À compléter' },
      { nom: 'Pouvoir 3', description: 'À compléter' }
    ]
  },

  'Korrigan': {
    anciennete: 'traditionnelle',
    description: 'À compléter.',
    caracteristiques: {
      agilite: { min: 2, max: 5 }, constitution: { min: 2, max: 5 }, force: { min: 1, max: 4 },
      precision: { min: 2, max: 5 }, esprit: { min: 2, max: 5 }, perception: { min: 2, max: 5 },
      prestance: { min: 1, max: 4 }, sangFroid: { min: 2, max: 5 }
    },
    competencesPredilection: [],
    competencesFutilesPredilection: [],
    capacites: {
      fixe1: { nom: 'Capacité fixe 1', description: 'À compléter' },
      fixe2: { nom: 'Capacité fixe 2', description: 'À compléter' },
      choix: [
        { nom: 'Option A', description: 'À compléter' },
        { nom: 'Option B', description: 'À compléter' },
        { nom: 'Option C', description: 'À compléter' }
      ]
    },
    pouvoirs: [
      { nom: 'Pouvoir 1', description: 'À compléter' },
      { nom: 'Pouvoir 2', description: 'À compléter' },
      { nom: 'Pouvoir 3', description: 'À compléter' }
    ]
  },

  'Léporide': {
    anciennete: 'traditionnelle',
    description: 'À compléter.',
    caracteristiques: {
      agilite: { min: 3, max: 6 }, constitution: { min: 2, max: 4 }, force: { min: 1, max: 3 },
      precision: { min: 2, max: 5 }, esprit: { min: 2, max: 4 }, perception: { min: 3, max: 6 },
      prestance: { min: 2, max: 4 }, sangFroid: { min: 1, max: 3 }
    },
    competencesPredilection: [],
    competencesFutilesPredilection: [],
    capacites: {
      fixe1: { nom: 'Capacité fixe 1', description: 'À compléter' },
      fixe2: { nom: 'Capacité fixe 2', description: 'À compléter' },
      choix: [
        { nom: 'Option A', description: 'À compléter' },
        { nom: 'Option B', description: 'À compléter' },
        { nom: 'Option C', description: 'À compléter' }
      ]
    },
    pouvoirs: [
      { nom: 'Pouvoir 1', description: 'À compléter' },
      { nom: 'Pouvoir 2', description: 'À compléter' },
      { nom: 'Pouvoir 3', description: 'À compléter' }
    ]
  },

  'Loup-Garou': {
    anciennete: 'traditionnelle',
    description: 'À compléter.',
    caracteristiques: {
      agilite: { min: 2, max: 5 }, constitution: { min: 3, max: 6 }, force: { min: 3, max: 6 },
      precision: { min: 2, max: 4 }, esprit: { min: 1, max: 4 }, perception: { min: 3, max: 6 },
      prestance: { min: 1, max: 4 }, sangFroid: { min: 2, max: 5 }
    },
    competencesPredilection: [],
    competencesFutilesPredilection: [],
    capacites: {
      fixe1: { nom: 'Capacité fixe 1', description: 'À compléter' },
      fixe2: { nom: 'Capacité fixe 2', description: 'À compléter' },
      choix: [
        { nom: 'Option A', description: 'À compléter' },
        { nom: 'Option B', description: 'À compléter' },
        { nom: 'Option C', description: 'À compléter' }
      ]
    },
    pouvoirs: [
      { nom: 'Pouvoir 1', description: 'À compléter' },
      { nom: 'Pouvoir 2', description: 'À compléter' },
      { nom: 'Pouvoir 3', description: 'À compléter' }
    ]
  },

  'Ogre': {
    anciennete: 'traditionnelle',
    description: 'À compléter.',
    caracteristiques: {
      agilite: { min: 1, max: 3 }, constitution: { min: 4, max: 6 }, force: { min: 4, max: 6 },
      precision: { min: 1, max: 3 }, esprit: { min: 1, max: 3 }, perception: { min: 2, max: 4 },
      prestance: { min: 1, max: 4 }, sangFroid: { min: 2, max: 5 }
    },
    competencesPredilection: [],
    competencesFutilesPredilection: [],
    capacites: {
      fixe1: { nom: 'Capacité fixe 1', description: 'À compléter' },
      fixe2: { nom: 'Capacité fixe 2', description: 'À compléter' },
      choix: [
        { nom: 'Option A', description: 'À compléter' },
        { nom: 'Option B', description: 'À compléter' },
        { nom: 'Option C', description: 'À compléter' }
      ]
    },
    pouvoirs: [
      { nom: 'Pouvoir 1', description: 'À compléter' },
      { nom: 'Pouvoir 2', description: 'À compléter' },
      { nom: 'Pouvoir 3', description: 'À compléter' }
    ]
  },

  'Ondine': {
    anciennete: 'traditionnelle',
    description: 'À compléter.',
    caracteristiques: {
      agilite: { min: 2, max: 5 }, constitution: { min: 2, max: 5 }, force: { min: 1, max: 4 },
      precision: { min: 2, max: 5 }, esprit: { min: 2, max: 5 }, perception: { min: 2, max: 5 },
      prestance: { min: 2, max: 5 }, sangFroid: { min: 2, max: 5 }
    },
    competencesPredilection: [],
    competencesFutilesPredilection: [],
    capacites: {
      fixe1: { nom: 'Capacité fixe 1', description: 'À compléter' },
      fixe2: { nom: 'Capacité fixe 2', description: 'À compléter' },
      choix: [
        { nom: 'Option A', description: 'À compléter' },
        { nom: 'Option B', description: 'À compléter' },
        { nom: 'Option C', description: 'À compléter' }
      ]
    },
    pouvoirs: [
      { nom: 'Pouvoir 1', description: 'À compléter' },
      { nom: 'Pouvoir 2', description: 'À compléter' },
      { nom: 'Pouvoir 3', description: 'À compléter' }
    ]
  },

  'Orc': {
    anciennete: 'traditionnelle',
    description: 'À compléter.',
    caracteristiques: {
      agilite: { min: 2, max: 4 }, constitution: { min: 3, max: 6 }, force: { min: 3, max: 6 },
      precision: { min: 2, max: 4 }, esprit: { min: 1, max: 4 }, perception: { min: 2, max: 4 },
      prestance: { min: 1, max: 4 }, sangFroid: { min: 2, max: 5 }
    },
    competencesPredilection: [],
    competencesFutilesPredilection: [],
    capacites: {
      fixe1: { nom: 'Capacité fixe 1', description: 'À compléter' },
      fixe2: { nom: 'Capacité fixe 2', description: 'À compléter' },
      choix: [
        { nom: 'Option A', description: 'À compléter' },
        { nom: 'Option B', description: 'À compléter' },
        { nom: 'Option C', description: 'À compléter' }
      ]
    },
    pouvoirs: [
      { nom: 'Pouvoir 1', description: 'À compléter' },
      { nom: 'Pouvoir 2', description: 'À compléter' },
      { nom: 'Pouvoir 3', description: 'À compléter' }
    ]
  },

  'Phénix': {
    anciennete: 'traditionnelle',
    description: 'À compléter.',
    caracteristiques: {
      agilite: { min: 2, max: 5 }, constitution: { min: 2, max: 5 }, force: { min: 1, max: 4 },
      precision: { min: 2, max: 5 }, esprit: { min: 2, max: 5 }, perception: { min: 2, max: 5 },
      prestance: { min: 3, max: 6 }, sangFroid: { min: 2, max: 5 }
    },
    competencesPredilection: [],
    competencesFutilesPredilection: [],
    capacites: {
      fixe1: { nom: 'Capacité fixe 1', description: 'À compléter' },
      fixe2: { nom: 'Capacité fixe 2', description: 'À compléter' },
      choix: [
        { nom: 'Option A', description: 'À compléter' },
        { nom: 'Option B', description: 'À compléter' },
        { nom: 'Option C', description: 'À compléter' }
      ]
    },
    pouvoirs: [
      { nom: 'Pouvoir 1', description: 'À compléter' },
      { nom: 'Pouvoir 2', description: 'À compléter' },
      { nom: 'Pouvoir 3', description: 'À compléter' }
    ]
  },

  'Succube/Incube': {
    anciennete: 'traditionnelle',
    description: 'À compléter.',
    caracteristiques: {
      agilite: { min: 2, max: 5 }, constitution: { min: 2, max: 4 }, force: { min: 1, max: 4 },
      precision: { min: 2, max: 5 }, esprit: { min: 2, max: 5 }, perception: { min: 2, max: 5 },
      prestance: { min: 3, max: 6 }, sangFroid: { min: 2, max: 5 }
    },
    competencesPredilection: [],
    competencesFutilesPredilection: [],
    capacites: {
      fixe1: { nom: 'Capacité fixe 1', description: 'À compléter' },
      fixe2: { nom: 'Capacité fixe 2', description: 'À compléter' },
      choix: [
        { nom: 'Option A', description: 'À compléter' },
        { nom: 'Option B', description: 'À compléter' },
        { nom: 'Option C', description: 'À compléter' }
      ]
    },
    pouvoirs: [
      { nom: 'Pouvoir 1', description: 'À compléter' },
      { nom: 'Pouvoir 2', description: 'À compléter' },
      { nom: 'Pouvoir 3', description: 'À compléter' }
    ]
  },

  'Sylve': {
    anciennete: 'traditionnelle',
    description: 'À compléter.',
    caracteristiques: {
      agilite: { min: 2, max: 5 }, constitution: { min: 1, max: 4 }, force: { min: 1, max: 3 },
      precision: { min: 2, max: 5 }, esprit: { min: 2, max: 5 }, perception: { min: 2, max: 5 },
      prestance: { min: 2, max: 5 }, sangFroid: { min: 2, max: 4 }
    },
    competencesPredilection: [],
    competencesFutilesPredilection: [],
    capacites: {
      fixe1: { nom: 'Capacité fixe 1', description: 'À compléter' },
      fixe2: { nom: 'Capacité fixe 2', description: 'À compléter' },
      choix: [
        { nom: 'Option A', description: 'À compléter' },
        { nom: 'Option B', description: 'À compléter' },
        { nom: 'Option C', description: 'À compléter' }
      ]
    },
    pouvoirs: [
      { nom: 'Pouvoir 1', description: 'À compléter' },
      { nom: 'Pouvoir 2', description: 'À compléter' },
      { nom: 'Pouvoir 3', description: 'À compléter' }
    ]
  },

  'Troll': {
    anciennete: 'traditionnelle',
    description: 'À compléter.',
    caracteristiques: {
      agilite: { min: 1, max: 3 }, constitution: { min: 3, max: 6 }, force: { min: 3, max: 6 },
      precision: { min: 1, max: 4 }, esprit: { min: 1, max: 4 }, perception: { min: 2, max: 4 },
      prestance: { min: 1, max: 3 }, sangFroid: { min: 2, max: 5 }
    },
    competencesPredilection: [],
    competencesFutilesPredilection: [],
    capacites: {
      fixe1: { nom: 'Capacité fixe 1', description: 'À compléter' },
      fixe2: { nom: 'Capacité fixe 2', description: 'À compléter' },
      choix: [
        { nom: 'Option A', description: 'À compléter' },
        { nom: 'Option B', description: 'À compléter' },
        { nom: 'Option C', description: 'À compléter' }
      ]
    },
    pouvoirs: [
      { nom: 'Pouvoir 1', description: 'À compléter' },
      { nom: 'Pouvoir 2', description: 'À compléter' },
      { nom: 'Pouvoir 3', description: 'À compléter' }
    ]
  },

  'Vampyr': {
    anciennete: 'traditionnelle',
    description: 'À compléter.',
    caracteristiques: {
      agilite: { min: 2, max: 5 }, constitution: { min: 2, max: 5 }, force: { min: 2, max: 5 },
      precision: { min: 2, max: 5 }, esprit: { min: 2, max: 5 }, perception: { min: 2, max: 5 },
      prestance: { min: 2, max: 6 }, sangFroid: { min: 2, max: 5 }
    },
    competencesPredilection: [],
    competencesFutilesPredilection: [],
    capacites: {
      fixe1: { nom: 'Capacité fixe 1', description: 'À compléter' },
      fixe2: { nom: 'Capacité fixe 2', description: 'À compléter' },
      choix: [
        { nom: 'Option A', description: 'À compléter' },
        { nom: 'Option B', description: 'À compléter' },
        { nom: 'Option C', description: 'À compléter' }
      ]
    },
    pouvoirs: [
      { nom: 'Pouvoir 1', description: 'À compléter' },
      { nom: 'Pouvoir 2', description: 'À compléter' },
      { nom: 'Pouvoir 3', description: 'À compléter' }
    ]
  },

  // Fées modernes
  'Fée électricité': {
    anciennete: 'moderne',
    description: 'Nées avec l\'avènement de l\'électricité, ces fées maîtrisent les courants et l\'énergie électrique.',
    caracteristiques: {
      agilite: { min: 2, max: 5 }, constitution: { min: 2, max: 4 }, force: { min: 1, max: 4 },
      precision: { min: 2, max: 5 }, esprit: { min: 2, max: 6 }, perception: { min: 2, max: 5 },
      prestance: { min: 2, max: 5 }, sangFroid: { min: 2, max: 5 }
    },
    competencesPredilection: [],
    competencesFutilesPredilection: [],
    capacites: {
      fixe1: { nom: 'Capacité fixe 1', description: 'À compléter' },
      fixe2: { nom: 'Capacité fixe 2', description: 'À compléter' },
      choix: [
        { nom: 'Option A', description: 'À compléter' },
        { nom: 'Option B', description: 'À compléter' },
        { nom: 'Option C', description: 'À compléter' }
      ]
    },
    pouvoirs: [
      { nom: 'Pouvoir 1', description: 'À compléter' },
      { nom: 'Pouvoir 2', description: 'À compléter' },
      { nom: 'Pouvoir 3', description: 'À compléter' }
    ]
  },

  'Fleur de métal': {
    anciennete: 'moderne',
    description: 'Fées nées de l\'industrialisation, elles sont liées au métal et aux machines.',
    caracteristiques: {
      agilite: { min: 2, max: 4 }, constitution: { min: 2, max: 5 }, force: { min: 2, max: 5 },
      precision: { min: 2, max: 6 }, esprit: { min: 2, max: 5 }, perception: { min: 2, max: 5 },
      prestance: { min: 1, max: 4 }, sangFroid: { min: 2, max: 5 }
    },
    competencesPredilection: [],
    competencesFutilesPredilection: [],
    capacites: {
      fixe1: { nom: 'Capacité fixe 1', description: 'À compléter' },
      fixe2: { nom: 'Capacité fixe 2', description: 'À compléter' },
      choix: [
        { nom: 'Option A', description: 'À compléter' },
        { nom: 'Option B', description: 'À compléter' },
        { nom: 'Option C', description: 'À compléter' }
      ]
    },
    pouvoirs: [
      { nom: 'Pouvoir 1', description: 'À compléter' },
      { nom: 'Pouvoir 2', description: 'À compléter' },
      { nom: 'Pouvoir 3', description: 'À compléter' }
    ]
  },

  'Fouinard': {
    anciennete: 'moderne',
    description: 'À compléter.',
    caracteristiques: {
      agilite: { min: 2, max: 5 }, constitution: { min: 2, max: 4 }, force: { min: 1, max: 4 },
      precision: { min: 2, max: 5 }, esprit: { min: 2, max: 5 }, perception: { min: 2, max: 6 },
      prestance: { min: 1, max: 4 }, sangFroid: { min: 2, max: 5 }
    },
    competencesPredilection: [],
    competencesFutilesPredilection: [],
    capacites: {
      fixe1: { nom: 'Capacité fixe 1', description: 'À compléter' },
      fixe2: { nom: 'Capacité fixe 2', description: 'À compléter' },
      choix: [
        { nom: 'Option A', description: 'À compléter' },
        { nom: 'Option B', description: 'À compléter' },
        { nom: 'Option C', description: 'À compléter' }
      ]
    },
    pouvoirs: [
      { nom: 'Pouvoir 1', description: 'À compléter' },
      { nom: 'Pouvoir 2', description: 'À compléter' },
      { nom: 'Pouvoir 3', description: 'À compléter' }
    ]
  },

  'Gargouille': {
    anciennete: 'moderne',
    description: 'À compléter.',
    caracteristiques: {
      agilite: { min: 2, max: 4 }, constitution: { min: 3, max: 6 }, force: { min: 3, max: 6 },
      precision: { min: 2, max: 4 }, esprit: { min: 1, max: 4 }, perception: { min: 2, max: 5 },
      prestance: { min: 1, max: 4 }, sangFroid: { min: 2, max: 5 }
    },
    competencesPredilection: [],
    competencesFutilesPredilection: [],
    capacites: {
      fixe1: { nom: 'Capacité fixe 1', description: 'À compléter' },
      fixe2: { nom: 'Capacité fixe 2', description: 'À compléter' },
      choix: [
        { nom: 'Option A', description: 'À compléter' },
        { nom: 'Option B', description: 'À compléter' },
        { nom: 'Option C', description: 'À compléter' }
      ]
    },
    pouvoirs: [
      { nom: 'Pouvoir 1', description: 'À compléter' },
      { nom: 'Pouvoir 2', description: 'À compléter' },
      { nom: 'Pouvoir 3', description: 'À compléter' }
    ]
  },

  'Golem': {
    anciennete: 'moderne',
    description: 'À compléter.',
    caracteristiques: {
      agilite: { min: 1, max: 3 }, constitution: { min: 4, max: 6 }, force: { min: 4, max: 6 },
      precision: { min: 1, max: 4 }, esprit: { min: 1, max: 4 }, perception: { min: 2, max: 4 },
      prestance: { min: 1, max: 3 }, sangFroid: { min: 2, max: 6 }
    },
    competencesPredilection: [],
    competencesFutilesPredilection: [],
    capacites: {
      fixe1: { nom: 'Capacité fixe 1', description: 'À compléter' },
      fixe2: { nom: 'Capacité fixe 2', description: 'À compléter' },
      choix: [
        { nom: 'Option A', description: 'À compléter' },
        { nom: 'Option B', description: 'À compléter' },
        { nom: 'Option C', description: 'À compléter' }
      ]
    },
    pouvoirs: [
      { nom: 'Pouvoir 1', description: 'À compléter' },
      { nom: 'Pouvoir 2', description: 'À compléter' },
      { nom: 'Pouvoir 3', description: 'À compléter' }
    ]
  },

  'Gremelin': {
    anciennete: 'moderne',
    description: 'À compléter.',
    caracteristiques: {
      agilite: { min: 2, max: 6 }, constitution: { min: 2, max: 4 }, force: { min: 1, max: 3 },
      precision: { min: 2, max: 5 }, esprit: { min: 2, max: 5 }, perception: { min: 2, max: 5 },
      prestance: { min: 1, max: 4 }, sangFroid: { min: 2, max: 5 }
    },
    competencesPredilection: [],
    competencesFutilesPredilection: [],
    capacites: {
      fixe1: { nom: 'Capacité fixe 1', description: 'À compléter' },
      fixe2: { nom: 'Capacité fixe 2', description: 'À compléter' },
      choix: [
        { nom: 'Option A', description: 'À compléter' },
        { nom: 'Option B', description: 'À compléter' },
        { nom: 'Option C', description: 'À compléter' }
      ]
    },
    pouvoirs: [
      { nom: 'Pouvoir 1', description: 'À compléter' },
      { nom: 'Pouvoir 2', description: 'À compléter' },
      { nom: 'Pouvoir 3', description: 'À compléter' }
    ]
  },

  'Protys': {
    anciennete: 'moderne',
    description: 'À compléter.',
    caracteristiques: {
      agilite: { min: 2, max: 5 }, constitution: { min: 2, max: 5 }, force: { min: 2, max: 5 },
      precision: { min: 2, max: 5 }, esprit: { min: 2, max: 5 }, perception: { min: 2, max: 5 },
      prestance: { min: 2, max: 5 }, sangFroid: { min: 2, max: 5 }
    },
    competencesPredilection: [],
    competencesFutilesPredilection: [],
    capacites: {
      fixe1: { nom: 'Capacité fixe 1', description: 'À compléter' },
      fixe2: { nom: 'Capacité fixe 2', description: 'À compléter' },
      choix: [
        { nom: 'Option A', description: 'À compléter' },
        { nom: 'Option B', description: 'À compléter' },
        { nom: 'Option C', description: 'À compléter' }
      ]
    },
    pouvoirs: [
      { nom: 'Pouvoir 1', description: 'À compléter' },
      { nom: 'Pouvoir 2', description: 'À compléter' },
      { nom: 'Pouvoir 3', description: 'À compléter' }
    ]
  },

  'Smog': {
    anciennete: 'moderne',
    description: 'Nées de la pollution industrielle du Paris moderne.',
    caracteristiques: {
      agilite: { min: 2, max: 5 }, constitution: { min: 2, max: 5 }, force: { min: 1, max: 4 },
      precision: { min: 2, max: 5 }, esprit: { min: 2, max: 5 }, perception: { min: 2, max: 5 },
      prestance: { min: 1, max: 4 }, sangFroid: { min: 2, max: 5 }
    },
    competencesPredilection: [],
    competencesFutilesPredilection: [],
    capacites: {
      fixe1: { nom: 'Capacité fixe 1', description: 'À compléter' },
      fixe2: { nom: 'Capacité fixe 2', description: 'À compléter' },
      choix: [
        { nom: 'Option A', description: 'À compléter' },
        { nom: 'Option B', description: 'À compléter' },
        { nom: 'Option C', description: 'À compléter' }
      ]
    },
    pouvoirs: [
      { nom: 'Pouvoir 1', description: 'À compléter' },
      { nom: 'Pouvoir 2', description: 'À compléter' },
      { nom: 'Pouvoir 3', description: 'À compléter' }
    ]
  }
};
export const competences = {
  'Conduite': {    description: 'Cette compétence mesure la capacité à conduire des véhicules ou monter à cheval.',
    specialites: ['Équitation*', 'Conduite d’attelage*', 'Conduite d’automobile*', 'Navigation*', 'Pilotage d’aéronefs*']
  },
  'Ressort': {    description: 'C’est l’aptitude à surmonter des épreuves physiques mais aussi à affronter la peur.',
    specialites: ['Courage', 'Endurer', 'Épreuves de force', 'Escalader', 'Lancer']
  },
  'Mouvement': {    description: 'Le score dans cette Compétence évalue l’aisance à réaliser tous types de mouvements rapides, à sauter et à esquiver les coups.',
    specialites: ['Acrobatie*', 'Course', 'Esquive', 'Nage*', 'Vol']
  },
  'Survie': {    description: 'Cette Compétence mesure l’instinct du danger et la capacité à se débrouiller dans la nature. Elle intervient dans certains tests relatifs à la perception.',
    specialites: ['Chasse', 'Vigilance', 'Faune et flore', 'Orientation', 'Premiers soins']
  },
  'Art de la guerre': {    description: 'Cette Compétence mesure la faculté à obtenir l’avantage lors d’un conflit armé mais aussi politique ou stratégique. C’est également la Compétence utilisée pour déterminer l’Initiative.',
    specialites: ['Embuscade', 'Évaluer forces et faiblesses', 'Initiative', 'Stratégie']
  },
  'Autorité': {    description: 'C’est la faculté à imposer sa volonté et ainsi obtenir ce qu’on veut (information, autorisation, éviter un combat, etc.).',
    specialites: ['Commander', 'Hiérarchie', 'Intimider']
  },
  'Mêlée': {    description: 'Cette Compétence évalue l’aptitude à savoir se battre en combat rapproché.',
    specialites: ['Armes blanches légères', 'Armes blanches lourdes*', 'Armes naturelles', 'Fouet', 'Mauvaise main*']
  },
  'Tir': {    description: 'On utilise Tir pour se servir des armes de tir à distance.',
    specialites: ['Armes d’épaule', 'Armes de poing', 'Armes à feu lourdes*', 'Armes de trait*', 'Mauvaise main*']
  },
  'Culture': {    description: 'À cette Compétence correspond la culture d’un individu (générale ou plus spécialisée), ainsi que les langues parlées',
    specialites: ['Archéologie', 'Connaissance d’Avalon*', 'Folklore féérique', 'Culture générale', 'Langues']
  },
  'Fortitude': {    description: 'La Fortitude est la force d’âme du moine ou du sage stoïcien. Cette Compétence mesure également la résistance à la magie et aux manipulations mentales.',
    specialites: ['Concentration', 'Contrer la magie', 'Maîtrise de soi ', 'Résistance psychique']
  },  
  'Occultisme': {    description: 'L’Occultisme est la connaissance des pratiques religieuses ou profanes occultes.',
    specialites: ['Connaissance des magies', 'Sciences occultes', 'Sixième sens', 'Spiritisme*']  
  },
  'Rhétorique': {    description: 'L’art de convaincre, de trouver les bons mots et arguments.',
    specialites: ['Conversation', 'Diplomatie', 'Droit*', 'Orateur', 'Pédagogie', 'Persuader']  
  },
  'Classe': {    description: 'Cette Compétence évalue l’élégance, le savoir-vivre, l’urbanité mais aussi les prérogatives de la classe supérieure.',
    specialites: ['Aplomb', 'Argent', 'Élégance', 'Étiquette', 'Flegme']
  },
  'Entregent': {    description: 'C’est la capacité à se forger un réseau de contacts dans des milieux variés. Cette Compétence mesure également la connaissance de la réputation des gens notables',
    specialites: ['Beau monde', 'Bourgeoisie', 'Prolétariat', 'Campagne', 'Ville', 'Crédit', 'Politique']  
  },
  'Séduction': {    description: 'L’art de charmer autrui, d’apparaître amical et de capter l’attention.',
    specialites: ['Charmer', 'Appâts', 'Sympathie']
  },
  'Sensibilité': {    description: 'Cette Compétence mesure la capacité à sentir le véritable état d’esprit d’autrui, mais aussi à évaluer la beauté, ce que dégage une personne, un lieu ou un objet',
    specialites: ['Intuition', 'Inspiration', 'Psychologie']
  },
  'Comédie': {    description: 'C’est la capacité à abuser autrui par ses paroles et ses manières.',
    specialites: ['Déguisement', 'Jouer un rôle', 'Marchandage', 'Mentir']
  },  
  'Discrétion': {    description: 'C’est l’aptitude à passer inaperçu dans tous les sens du terme.',
    specialites: ['Anonymat', 'Camouflage', 'Déplacement silencieux', 'Dissimulation d’objets et d’armes sur soi', 'Furtivité']
  },  
  'Larcin': {    description: 'Cette Compétence évalue la faculté à s’approprier les biens d’autrui par divers talents.',
    specialites: ['Crochetage', 'Trouver ce qui est caché ', 'Pièges*', 'Pickpocket', 'Triche']  
  },  
  'Monde du crime': {    description: 'Cette Compétence correspond au niveau de familiarité avec les milieux et activités interlopes.',
    specialites: ['Assassinat*', 'Connaissance de la pègre', 'Corruption', 'Faussaire*']
  },  
  'Habiletés': {    description: 'À travers cette Compétence est évaluée la capacité à trouver des moyens astucieux pour parvenir à des solutions pratiques en tous genres ainsi que la capacité à fabriquer des objets.',
    specialites: ['Artisanat*', 'Ingéniosité', 'Explosifs*', 'Mécanique', 'Moyen improvisé']
  },  
  'Médecine': {    description: 'Cette Compétence mesure les connaissances et savoir-faire liés à la santé.',
    specialites: ['Autopsie*', 'Chirurgie*', 'Pharmacopée*', 'Premiers soins']
  },  
  'Observation': {    description: 'Capacité à analyser l’environnement et à repérer des éléments sortant de l’ordinaire.',
    specialites: ['Examen', 'Investigation', 'Sociologie']
  },    
  'Sciences': {    description: 'Cette Compétence recouvre la compréhension, les connaissances et savoir-faire scientifiques, biologiques et technologiques (elle est plus théorique que pratique).',
    specialites: ['Analyse et déduction', 'Biologie', 'Faëologie', 'Finance*', 'Invention*', 'Physique-chimie']
  }
};
export const competencesFutilesBase = [
  { nom: 'Agriculture', description: 'Connaissance des cultures, élevage et travaux agricoles' },
  { nom: 'Architecture', description: 'Connaissance des styles architecturaux et de la construction' },
  { nom: 'Arts plastiques', description: 'Connaissance et pratique des arts visuels' },
  { nom: 'Astronomie', description: 'Connaissance des astres, constellations et phénomènes célestes' },
  { nom: 'Aviation', description: 'Connaissance des aéronefs et des principes du vol' },
  { nom: 'Botanique', description: 'Connaissance des plantes, fleurs et végétaux' },
  { nom: 'Chant', description: 'Art vocal, chant lyrique et technique vocale' },
  { nom: 'Chasse à courre', description: 'Pratique de la chasse traditionnelle à cheval avec meute' },
  { nom: 'Cinématographe', description: 'Connaissance du cinéma naissant et des techniques filmiques' },
  { nom: 'Cirque', description: 'Arts du cirque, acrobaties et numéros de spectacle' },
  { nom: 'Croquet', description: 'Pratique du jeu de croquet' },
  { nom: 'Cuisine', description: 'Art culinaire, gastronomie et préparation de mets' },
  { nom: 'Cyclisme', description: 'Pratique de la bicyclette et connaissance du cyclisme' },
  { nom: 'Danse', description: 'Danses de salon : valse, polka, quadrille, tango' },
  { nom: 'Divination', description: 'Arts divinatoires : tarots, chiromancie, astrologie' },
  { nom: 'Fauconnerie', description: 'Art de dresser et chasser avec des rapaces' },
  { nom: 'Géologie', description: 'Connaissance des roches, minéraux et formations géologiques' },
  { nom: 'Golf', description: 'Pratique du golf' },
  { nom: 'Gourmet', description: 'Appréciation fine de la gastronomie et des mets raffinés' },
  { nom: 'Héraldique', description: 'Connaissance des blasons, armoiries et symboles nobiliaires' },
  { nom: 'Jeux', description: 'Jeux de hasard, jeux de société, paris et stratégie ludique' },
  { nom: 'Joaillerie', description: 'Connaissance des pierres précieuses et bijoux' },
  { nom: 'Kama sutra', description: 'Connaissance de l\'art amoureux et des pratiques sensuelles' },
  { nom: 'Littérature', description: 'Connaissance des œuvres littéraires et des auteurs' },
  { nom: 'Météorologie', description: 'Connaissance du climat, temps et prévisions météorologiques' },
  { nom: 'Mode', description: 'Connaissance de la mode, des tendances et de l\'élégance vestimentaire' },
  { nom: 'Modélisme', description: 'Construction de modèles réduits et maquettes' },
  { nom: 'Musique', description: 'Maîtrise d\'un ou plusieurs instruments de musique' },
  { nom: 'Œnologie', description: 'Connaissance des vins, cépages et art de la dégustation' },
  { nom: 'Opéra', description: 'Connaissance de l\'opéra, des compositeurs et des représentations' },
  { nom: 'Orfèvrerie', description: 'Connaissance du travail des métaux précieux et objets d\'art' },
  { nom: 'Paris sportif', description: 'Pratique des paris sur les courses et événements sportifs' },
  { nom: 'Peinture (et dessin)', description: 'Pratique de la peinture et du dessin artistique' },
  { nom: 'Photographie', description: 'Art photographique et techniques de développement' },
  { nom: 'Poésie', description: 'Composition et récitation poétique' },
  { nom: 'Potins mondains', description: 'Collecte et diffusion de ragots, commérages de la haute société' },
  { nom: 'Prestidigitation', description: 'Tours de magie, illusions et escamotage' },
  { nom: 'Psychanalyse', description: 'Connaissance des théories psychanalytiques et de l\'inconscient' },
  { nom: 'Puériculture', description: 'Soins et éducation des jeunes enfants' },
  { nom: 'Sculpture', description: 'Modelage et sculpture de différents matériaux' },
  { nom: 'Spéléologie', description: 'Exploration et connaissance des grottes et cavités souterraines' },
  { nom: 'Tennis', description: 'Pratique du tennis' },
  { nom: 'Théâtre', description: 'Art dramatique, comédie et jeu d\'acteur' },
  { nom: 'Zoologie', description: 'Connaissance des animaux, de leur comportement et classification' }
];
export const profils = {
  'Aventurier / Aventurière': {
    competences: ['Conduite', 'Ressort', 'Mouvement', 'Survie'],
    traits: ['Audacieux', 'Curieux', 'Intrépide', 'Rebelle', 'Tenace'],
    description: 'L\'aventurier brave les dangers et explore l\'inconnu avec passion.',
    icon: '🗺️'
  },
  'Combattant / Combattante': {
    competences: ['Art de la guerre', 'Autorité', 'Mêlée', 'Tir'],
    traits: ['Combatif', 'Endurci', 'Martial', 'Protecteur', 'Sanguin'],
    description: 'Le combattant maîtrise l\'art de la guerre et du combat.',
    icon: '⚔️'
  },
  'Érudit / Érudite': {
    competences: ['Culture', 'Fortitude', 'Occultisme', 'Rhétorique'],
    traits: ['Austère', 'Inspiré', 'Libre-penseur', 'Spirituel', 'Traditionaliste'],
    description: 'L\'érudit possède une vaste culture et une soif de connaissances.',
    icon: '📚'
  },
  'Gentleman / Lady': {
    competences: ['Classe', 'Entregent', 'Séduction', 'Sensibilité'],
    traits: ['Causeur', 'Courtois', 'Esthète', 'Flegmatique', 'Hautain'],
    description: 'Le gentleman ou la lady maîtrise les codes de la haute société.',
    icon: '🎩'
  },
  'Roublard / Roublarde': {
    competences: ['Comédie', 'Discrétion', 'Larcin', 'Monde du crime'],
    traits: ['Boute-en-train', 'Intéressé', 'Malin', 'Narquois', 'Patibulaire'],
    description: 'Le roublard use de ruse et de discrétion pour parvenir à ses fins.',
    icon: '🎭'
  },
  'Savant / Savante': {
    competences: ['Habiletés', 'Médecine', 'Observation', 'Sciences'],
    traits: ['Cérébral', 'Critique', 'Ingénieux', 'Méthodique', 'Pragmatique'],
    description: 'Le savant explore les mystères de la science et de la technique.',
    icon: '🔬'
  }
};
