// scripts/migrate_sorts_arts_obscurs.js
// Insère tous les sorts de "Les Arts Obscurs.pdf" dans la table sorts.
// Couvre : Druidisme Maître (6), Faëomancie (9), Nécromancie (10),
//          Souffle Combat/Mouvement/Esprit (25), Théurgie (22), Grand Langage (12).
// Usage : node scripts/migrate_sorts_arts_obscurs.js
import 'dotenv/config';
import pg from 'pg';

const { Client } = pg;
const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });

const SORTS = [

  // =========================================================================
  // DRUIDISME — MAÎTRE (amulettes Ovate)
  // =========================================================================

  {
    nom: 'Amulette de métamorphose en aigle',
    magie: 'Druidisme', niveau: 'Maître', cout_xp: null,
    details: {
      test: 'Druidisme+ESP ou PER SD 16',
      duree: '1 semaine',
      reussite_critique: 'Peut parler aux animaux sous forme transformée.',
      ingredients: 'Plume d\'aigle, eau de rosée avalonienne, argile avalonien',
      effets: 'Transforme le mage ou une cible consentante en aigle pour la durée indiquée. La cible conserve son intelligence.',
      resistance: 'physique',
    },
  },
  {
    nom: 'Amulette de cercle de protection',
    magie: 'Druidisme', niveau: 'Maître', cout_xp: null,
    details: {
      test: 'Druidisme+PRES SD 16',
      duree: 'Jusqu\'à destruction de l\'amulette',
      reussite_critique: 'La brisure du cercle est impossible sans déterrer l\'amulette.',
      ingredients: 'Large pierre + feuille de chêne avalonien',
      effets: 'Crée une barrière invisible de rayon max Prestance×100 m autour du point d\'enfouissement. Pour forcer l\'entrée : test Ressort+FOR ou Fortitude+ESP vs SD du sort.',
    },
  },
  {
    nom: 'Amulette d\'orage',
    magie: 'Druidisme', niveau: 'Maître', cout_xp: null,
    details: {
      test: 'Druidisme+PER SD 16',
      duree: 'Jusqu\'à endormissement du druide',
      reussite_critique: 'L\'orage se lève en 1 minute au lieu de 20.',
      ingredients: 'Branche de frêne avalonien + eau de pluie avalonienne',
      effets: 'Convoque un orage en 20 minutes. Le druide peut guider la foudre : test Druidisme+PER SD 15, dégâts [MR+6]. Coût : 3 points d\'Âme par foudre.',
    },
  },
  {
    nom: 'Amulette de renaissance du bras',
    magie: 'Druidisme', niveau: 'Maître', cout_xp: null,
    details: {
      test: 'Druidisme+ESP SD 16',
      duree: 'Définitive',
      reussite_critique: 'Bonus permanent +1 en Force pour le bénéficiaire.',
      ingredients: 'Feuilles de marronnier avalonien + patte d\'ours décédé de mort naturelle',
      effets: 'Fait repousser un bras manquant. Nécessite que le moignon soit frais.',
    },
  },
  {
    nom: 'Communication avec les esprits',
    magie: 'Druidisme', niveau: 'Maître', cout_xp: 0,
    details: {
      test: 'Druidisme+PRES SD 16 (esprits terrestres) ou Druidisme+ESP SD 18 (esprits célestes)',
      frequence: '1 fois par cycle lunaire',
      reussite_critique: 'Invoque une Chimère si le test échoue de façon critique.',
      effets: 'Permet de communiquer avec les esprits terrestres ou célestes. Chaque participant supplémentaire qui connaît le rituel confère un bonus de +1.',
      note: 'Enseigné gratuitement à tous les Ovates lors de leur initiation.',
    },
  },
  {
    nom: 'Rituel de réenchantement',
    magie: 'Druidisme', niveau: 'Maître', cout_xp: 0,
    details: {
      test: 'Druidisme+ESP SD 20',
      ingredients: '300 g de poudre d\'aile de pixie',
      participants: 'Au moins 3 Ovates requis (bonus +1 par collaborateur)',
      effets: 'Restaure 1 rang de Féérie à un Faux-Semblant exorcisé. Seul moyen de contrecarrer un Grand rituel d\'exorcisme.',
      note: 'Enseigné gratuitement à tous les Ovates lors de leur initiation.',
    },
  },

  // =========================================================================
  // FAËOMANCIE
  // =========================================================================

  {
    nom: 'Potion de faiblesse à l\'argent',
    magie: 'Faëomancie', niveau: 'Novice', cout_xp: null,
    details: {
      test: 'Faëomancie+PRÉC ou SAN SD 12',
      ingredients: '5 litres de sang de fée réduit en poudre pulvérulente',
      preparation: 'Faire réduire le sang jusqu\'à obtenir une poudre rouge. Diluer dans un liquide. Peut aussi être inhalée ou injectée.',
      effets: 'Le bénéficiaire devient vulnérable à l\'argent comme une fée : 30 min si bu, 10 tours si inhalé, 2 tours si aspergé. Sans effet sur une fée.',
      points_ame: 1,
    },
  },
  {
    nom: 'Émincé de force d\'ogre',
    magie: 'Faëomancie', niveau: 'Novice', cout_xp: null,
    details: {
      test: 'Faëomancie+PRÉC ou SAN SD 12',
      ingredients: '2 livres de muscle de biceps d\'ogre, 1 livre de saindoux d\'ogre, poivre fort',
      preparation: 'Émincer soigneusement le muscle. Faire frire dans le saindoux avec poivre en fin de cuisson. Consommer chaud.',
      effets: '+1 en Force pour la durée. Peut utiliser d\'autres espèces féériques avec la Capacité naturelle Force accrue en substitution.',
      points_ame: 1,
    },
  },
  {
    nom: 'Masque de fée',
    magie: 'Faëomancie', niveau: 'Adepte', cout_xp: null,
    details: {
      test: 'Faëomancie+PRÉC ou SAN SD 14',
      ingredients: 'Peau du visage d\'un Faux-Semblant démasqué ou d\'une fée vivante, poudre d\'aile de pixie, sang de la victime, graisse de protys',
      preparation: 'Dépecer la peau du visage, saupoudrer de poudre de pixie, appliquer sur le visage du bénéficiaire avec graisse de protys. Boire 3-4 gorgées du sang.',
      effets: 'Modifie le visage et la peau pour donner l\'apparence d\'une fée de l\'espèce dépecée. Bonus MR/2 aux tests de Comédie+PRES pour ne pas être percé à jour. Durée = MR jours.',
      note: 'La taille n\'est pas changée. Pas d\'ailes ni d\'appendices.',
      points_ame: 2,
    },
  },
  {
    nom: 'Cromesquis de Calme angélique',
    magie: 'Faëomancie', niveau: 'Adepte', cout_xp: null,
    details: {
      test: 'Faëomancie+PRÉC ou SAN SD 14',
      ingredients: 'Os de mâchoire d\'ange (réduit en poudre), 7 cheveux d\'ange, 1 cœur d\'ange haché',
      preparation: 'Faire 7 boulettes de cœur avec cheveux incorporés. Paner dans œuf frais + poudre d\'os. Faire revenir. Goût proche de la dinde.',
      effets: 'Le bénéficiaire obtient le Pouvoir Calme pendant au moins 30 min (+ 1 h par MR supplémentaire).',
      points_ame: 2,
    },
  },
  {
    nom: 'Ragoût de ramollissement du métal',
    magie: 'Faëomancie', niveau: 'Maître', cout_xp: null,
    details: {
      test: 'Faëomancie+PRÉC ou SAN SD 16',
      ingredients: '100 g moelle d\'os de gnome profond, 500 ml bile de gnome profond, 1 L vin rouge, 2 kg chair de gnome profond, 10 g poudre d\'aile de pixie',
      preparation: 'Faire revenir la viande, mijoter dans bile et vin 3 h, ajouter moelle + poudre de pixie en fin. Servir chaud. Goût proche du bœuf bourguignon.',
      effets: 'Le bénéficiaire obtient le Pouvoir profond Ramollissement du métal pendant au moins 30 min. Un Maître-queux n\'a pas besoin d\'un gnome profond.',
      points_ame: 3,
    },
  },
  {
    nom: 'Baguette de Main verte',
    magie: 'Faëomancie', niveau: 'Maître', cout_xp: null,
    details: {
      test: 'Faëomancie limitant Habiletés (artisanat)+PRÉC SD 18',
      type: 'Objet faëomantique',
      ingredients: 'Doigts/racines de sylve, sève de hêtre, cendres de cocatrice, poudre d\'aile de pixie, baguette d\'osier creuse',
      cout_activation: '2 points de vie',
      preparation: 'Réduire racines en pâte, mélanger avec sève, cendres et poudre de pixie. Introduire ≥50 g dans baguette d\'osier, sceller avec résine.',
      effets: 'Planter la baguette imbibée de sang dans le sol active le Pouvoir Main verte. Utilisations: 10-12 ; rechargeable avec poudre d\'aile de pixie.',
    },
  },
  {
    nom: 'Canne de Souffle enflammé',
    magie: 'Faëomancie', niveau: 'Maître', cout_xp: null,
    details: {
      test: 'Faëomancie limitant Habiletés (artisanat)+PRÉC SD 18',
      type: 'Objet faëomantique',
      ingredients: 'Gésier de phénix, humeur de basilic, poudre de silex, poudre d\'aile de pixie, canne, tissu, pommeau métallique creux',
      cout_activation: '3 points de vie',
      preparation: 'Imbiber le gésier d\'humeur de basilic, saupoudrer poudres. Insérer dans pommeau métallique. Fixer à la canne, tissu en contact avec gésier. Imbiber le tissu de sang 5 min avant usage.',
      effets: 'Permet d\'utiliser le Pouvoir Souffle enflammé. La main du porteur doit être au contact du tissu imbibé pour déclencher le jet.',
    },
  },
  {
    nom: 'Diadème de Pensées impures',
    magie: 'Faëomancie', niveau: 'Maître', cout_xp: null,
    details: {
      test: 'Faëomancie limitant Habiletés (artisanat)+PRÉC SD 18',
      type: 'Objet faëomantique',
      ingredients: 'Cœur de succube (découpé en 3), humeur de basilic, poudre d\'aile de pixie, diadème, 3 joyaux creux percés de pointes',
      cout_activation: '3 points de vie',
      preparation: 'Mariner et réduire les morceaux de cœur dans humeur de basilic avec poudre de pixie. Insérer dans joyaux creux rouge carmin. Presser le diadème sur le front pour faire perler le sang.',
      effets: 'Le Pouvoir Pensées impures sera utilisable 5 min après activation.',
    },
  },
  {
    nom: 'Lunettes de vision nocturne',
    magie: 'Faëomancie', niveau: 'Maître', cout_xp: null,
    details: {
      test: 'Faëomancie limitant Habiletés (artisanat)+PRÉC SD 18',
      type: 'Objet faëomantique',
      ingredients: '8 iris et cornées de Faux-Semblants ayant la Vision nocturne (4 par verre), salive de troll, poudre d\'aile de pixie, lunettes de cristal très fin',
      cout_activation: '1 point de vie',
      preparation: 'Appliquer iris/cornées sur verres en cristal. Badigeonner salive de troll, saupoudrer poudre de pixie. Laisser sécher 24 h. Verser quelques gouttes de sang sur chaque verre.',
      effets: 'Confère la Capacité naturelle Vision nocturne. Usage possible 5 min après activation. Utilisations: 10-12.',
    },
  },

  // =========================================================================
  // NÉCROMANCIE
  // =========================================================================

  {
    nom: 'Animation hostile',
    magie: 'Nécromancie', niveau: 'Novice', cout_xp: null,
    details: {
      test: 'Nécromancie+ESP ou PER SD 12',
      points_ame: 1,
      duree: 'Vie du construct (environ 1 semaine)',
      portee: 'Infinie une fois l\'animation accomplie',
      effets: 'Anime un construct en lui donnant un instinct agressif primaire : attaque tout être passant à moins de 2 m. Le construct se lève en 3 tours.',
      note: 'Requiert euthocaïne (injection ou inhalation).',
    },
  },
  {
    nom: 'Percevoir la vie et la mort',
    magie: 'Nécromancie', niveau: 'Novice', cout_xp: null,
    details: {
      test: 'Nécromancie+ESP ou PER SD 12',
      points_ame: 1,
      portee: 'Rayon Perception+[MR×3] mètres, y compris à travers les obstacles',
      effets: 'Perçoit la présence de tout être vivant ou mort dans le rayon, même derrière murs, eau, terre.',
      note: 'Requiert euthocaïne.',
    },
  },
  {
    nom: 'Programme simple',
    magie: 'Nécromancie', niveau: 'Novice', cout_xp: null,
    details: {
      test: 'Nécromancie+ESP ou PER SD 12',
      points_ame: 1,
      duree: 'Vie du construct',
      portee: 'Infinie une fois l\'animation accomplie',
      effets: 'En animant un construct, lui donne un ordre simple : se déplacer, attaquer une cible précise, porter une charge, etc. Ne se défend pas si attaqué hors mission. Nécessite un nouveau sort pour changer de cible.',
      note: 'Requiert euthocaïne.',
    },
  },
  {
    nom: 'Lire la mort',
    magie: 'Nécromancie', niveau: 'Adepte', cout_xp: null,
    details: {
      test: 'Nécromancie+ESP ou PER SD 14',
      points_ame: 2,
      duree: '2 minutes',
      effets: 'Après injection d\'euthocaïne dans le cerveau d\'un cadavre, le Discipulus revit les perceptions du défunt pendant les 2 minutes précédant sa mort, comme en direct.',
      note: 'Requiert euthocaïne.',
    },
  },
  {
    nom: 'Programme complexe',
    magie: 'Nécromancie', niveau: 'Adepte', cout_xp: null,
    details: {
      test: 'Nécromancie+ESP ou PER SD 14',
      points_ame: 2,
      duree: 'Vie du construct',
      portee: 'Infinie',
      effets: 'Donne un jeu d\'instructions complexes au construct : suivre une cible, attaquer à endroit précis, surveiller un lieu, etc. Instructions doivent être claires et cohérentes ; événements imprévus perturbent le programme.',
      note: 'Aucune improvisation possible. Requiert euthocaïne.',
    },
  },
  {
    nom: 'Contrôle direct',
    magie: 'Nécromancie', niveau: 'Maître', cout_xp: null,
    details: {
      test: 'Nécromancie+ESP ou PER SD 16',
      points_ame: 3,
      duree: 'Une scène ou 1 h maximum',
      portee: 'Jusqu\'à 1 km',
      effets: 'Contrôle par la pensée l\'une de ses créations. Test à chaque scène ; échec = réessayer 1 min plus tard (3 PA). En transe pendant le contrôle. Échec critique = construct tente de s\'autodétruire.',
      note: 'Requiert euthocaïne.',
    },
  },
  {
    nom: 'Démultiplier sa conscience',
    magie: 'Nécromancie', niveau: 'Maître', cout_xp: null,
    details: {
      test: 'Nécromancie+ESP ou PER SD 16',
      points_ame: 3,
      duree: 'Une scène ou 1 h maximum',
      portee: 'Jusqu\'à 1 km',
      effets: 'Contrôle plusieurs constructs simultanément tout en restant conscient dans son propre corps. Malus -2 à tous les tests impliquant PER, PRÉC et AGI (sur ses propres actions comme sur ceux des constructs).',
      note: 'Requiert Contrôle direct pour chaque construct supplémentaire. Tête supplémentaire = +1 PA. Requiert euthocaïne.',
    },
  },
  {
    nom: 'Légion de constructs',
    magie: 'Nécromancie', niveau: 'Grand Maître', cout_xp: null,
    details: {
      test: 'Nécromancie+ESP ou PER SD 18',
      points_ame: 4,
      duree: 'Une scène ou 1 h maximum',
      portee: 'Jusqu\'à 1 km',
      effets: 'Anime et contrôle alternativement jusqu\'à 7 constructs préalablement fabriqués pour seulement 4 PA. En combinaison avec Démultiplier sa conscience, permet le contrôle simultané de toute une petite armée.',
      note: 'Requiert euthocaïne.',
    },
  },
  {
    nom: 'Substance mort',
    magie: 'Nécromancie', niveau: 'Grand Maître', cout_xp: null,
    details: {
      test: 'Nécromancie+ESP ou PER SD 18',
      points_ame: 4,
      duree: '5 minutes ou tant que vapeur non dissipée',
      portee: 'Jusqu\'à 100 m²',
      resistance: 'psychique',
      effets: 'Diffuse vapeur d\'euthocaïne dans espace clos : lit les pensées des victimes ratant leur résistance. Peut les plonger dans un sommeil hanté. ME ≥ 7 : pulsion de mort (attaque la personne la plus proche ou cherche à se supprimer). Courant d\'air limite à 3 tours.',
      note: 'Requiert euthocaïne.',
    },
  },
  {
    nom: 'Percevoir via un construct',
    magie: 'Nécromancie', niveau: 'Grand Maître', cout_xp: null,
    details: {
      test: 'Nécromancie+ESP ou PER SD 18',
      points_ame: 4,
      duree: 'Jusqu\'à 4 h',
      portee: 'Jusqu\'à 1 km',
      effets: 'Sans contrôler le construct (qui suit son programme), le nécromant perçoit par ses sens. Entre en transe complète : sens propres abolis, métabolisme dramatiquement ralenti. Un médecin l\'hospitaliserait immédiatement.',
      note: 'Requiert euthocaïne.',
    },
  },

  // =========================================================================
  // SOUFFLE DU COMBAT
  // =========================================================================

  {
    nom: 'Casse-brique',
    magie: 'Souffle', branche: 'Combat', niveau: 'Novice', cout_xp: null,
    details: {
      test: 'Souffle+SAN ou FOR SD 12',
      concentration: '1 tour',
      points_vie: 2,
      effets: 'Le poing devient dur comme pierre et génère une onde de choc. Dégâts = MR (minimum 3), projette l\'adversaire à [MR] mètres. Double dégâts sur structures (porte, coffre). L\'attaque est portée au tour suivant.',
    },
  },
  {
    nom: 'Dévier les lames menaçantes',
    magie: 'Souffle', branche: 'Combat', niveau: 'Novice', cout_xp: null,
    details: {
      test: 'Souffle+SAN ou AGI SD 14',
      concentration: '1 tour',
      points_vie: 2,
      effets: 'Se concentre sur les armes de mêlée dans un rayon de 2 m. Au tour suivant, peut dévier autant de coups que son rang de Souffle (1 à 4). Bonus = 3+rang de Souffle pour dévier ou désarmer.',
    },
  },
  {
    nom: 'D\'un coup, mille',
    magie: 'Souffle', branche: 'Combat', niveau: 'Adepte', cout_xp: null,
    details: {
      test: 'Souffle+SAN ou PER SD 14',
      concentration: '1 tour',
      points_vie: 2,
      effets: 'Attaque supplémentaire par tour sans malus au niveau Disciple, deux au niveau Maître, trois au niveau Éminence. Fonctionne pour Mêlée et Tir (cadence de l\'arme à feu limitante). Coût additionnel en PV pour chaque attaque supp.',
    },
  },
  {
    nom: 'Sertir la perle de tonnerre',
    magie: 'Souffle', branche: 'Combat', niveau: 'Adepte', cout_xp: null,
    details: {
      test: 'Souffle+AGI ou SAN SD 14',
      concentration: '1 tour',
      points_vie: 2,
      effets: 'Galvanisé par le Souffle, le mage effectue un unique test d\'Esquive active avec bonus égal à son rang de Souffle contre tous les Tirs reçus en un tour.',
      note: 'Compte aussi comme sort du Souffle du Mouvement pour les prérequis.',
    },
  },
  {
    nom: 'Coup paralysant',
    magie: 'Souffle', branche: 'Combat', niveau: 'Maître', cout_xp: null,
    details: {
      test: 'Souffle limitant Mêlée+AGI ou SAN SD 16 (ou Esquive victime si supérieure)',
      concentration: '1 Bagatelle (utilisable en 1 tour)',
      points_vie: 2,
      resistance: 'physique (active, par tour après le premier)',
      effets: 'Frappe à un point sensible : tétanise l\'adversaire pendant [1+MR] tours. Malus -1 à -3 si armure.',
    },
  },
  {
    nom: 'Dompter la chair',
    magie: 'Souffle', branche: 'Combat', niveau: 'Maître', cout_xp: null,
    details: {
      test: 'Souffle+SAN ou CON SD 16',
      concentration: '1 Bagatelle (utilisable en 1 tour)',
      points_vie: 2,
      effets: 'Ignore toute douleur et malus de blessure pendant la scène. Les effets des dégâts ne s\'appliquent qu\'après. Si (dégâts totaux + coût sort) dépassent les PV du lanceur d\'une valeur supérieure à sa CON, il meurt 1 min après la scène.',
    },
  },
  {
    nom: 'Cri qui fige',
    magie: 'Souffle', branche: 'Combat', niveau: 'Grand Maître', cout_xp: null,
    details: {
      test: 'Souffle+SAN ou PRES SD 18 (ou Résistance psychique de la cible si supérieure)',
      concentration: '2 tours',
      points_vie: 4,
      effets: 'Cri inaudible qui paralyse complètement tout adversaire dans un rayon de 15 m pendant [MR] tours.',
    },
  },
  {
    nom: 'Souffle de la tornade',
    magie: 'Souffle', branche: 'Combat', niveau: 'Grand Maître', cout_xp: null,
    details: {
      test: 'Souffle+AGI ou SAN SD 18',
      concentration: '1 tour',
      points_vie: 4,
      duree: '5 minutes maximum',
      effets: 'Tornade de Souffle protégeant de toute source de dégâts physiques (balles, lames) en déviant les coups et tenant à distance les corps-à-corps (Ressort+FOR SD 16 pour approcher, mais attaques déviées même si réussi). L\'Éminence ne peut faire que des Bagatelles et se déplacer à vitesse normale pendant la tornade.',
    },
  },

  // =========================================================================
  // SOUFFLE DU MOUVEMENT
  // =========================================================================

  {
    nom: 'Puma bondissant',
    magie: 'Souffle', branche: 'Mouvement', niveau: 'Novice', cout_xp: null,
    details: {
      test: 'Souffle+AGI ou SAN SD 12',
      concentration: '1 tour',
      points_vie: 2,
      duree: '5 minutes',
      effets: 'Bond +1 m par rang de Souffle. Cumulable avec le Pouvoir féérique Bond prodigieux.',
    },
  },
  {
    nom: 'Vitesse du vent',
    magie: 'Souffle', branche: 'Mouvement', niveau: 'Novice', cout_xp: null,
    details: {
      test: 'Souffle+AGI ou SAN SD 12',
      concentration: '1 tour',
      points_vie: 2,
      duree: '5 minutes',
      effets: '+1 Mouvement par niveau de maîtrise (+1 Apprenti, +2 Disciple, +3 Maître, +4 Éminence). Modifie la valeur d\'Esquive en conséquence.',
    },
  },
  {
    nom: 'Lévitation',
    magie: 'Souffle', branche: 'Mouvement', niveau: 'Adepte', cout_xp: null,
    details: {
      test: 'Souffle+SAN ou ESP SD 14',
      concentration: '1 minute de méditation',
      points_vie: 2,
      duree: '1 scène',
      effets: 'S\'élève à 1-2 m au-dessus du sol. Déplacement à vitesse de marche assez lente. Traverser un gouffre très profond coûte le double de PV.',
    },
  },
  {
    nom: 'Voir la seconde',
    magie: 'Souffle', branche: 'Mouvement', niveau: 'Adepte', cout_xp: null,
    details: {
      test: 'Souffle+PER ou SAN SD 14',
      concentration: '1 tour',
      points_vie: 2,
      effets: 'Gain de [3+rang de Souffle] points d\'Initiative. Ne fonctionne pas au premier tour d\'une escarmouche (concentration requise).',
    },
  },
  {
    nom: 'Télékinésie',
    magie: 'Souffle', branche: 'Mouvement', niveau: 'Maître', cout_xp: null,
    details: {
      test: 'Souffle+PER ou SAN SD 16',
      concentration: '1 tour',
      points_vie: 2,
      portee: '30 mètres maximum',
      effets: 'Déplace un objet ou personne visible. Si objet <poids du disciple : coût normal. Si entre 1× et 2× : coût doublé. Plus du double : impossible. Peut projeter comme projectile (attaque Souffle+PER, dégâts = MR + valeur fixée par le Docte selon nature/poids). Résistance physique pour cible non consentante.',
    },
  },
  {
    nom: 'Prends ma place',
    magie: 'Souffle', branche: 'Mouvement', niveau: 'Maître', cout_xp: null,
    details: {
      test: 'Souffle+PER ou SAN SD 16 (ou Résistance physique cible non consentante)',
      concentration: '1 tour',
      points_vie: 2,
      portee: '100 mètres maximum',
      effets: 'Échange sa position avec une personne ou un objet visible. Objet ou allié : pas de résistance. Ennemi ou être ne s\'y attendant pas : Résistance physique passive ou active.',
    },
  },
  {
    nom: 'Téléportation',
    magie: 'Souffle', branche: 'Mouvement', niveau: 'Grand Maître', cout_xp: null,
    details: {
      test: 'Souffle+PER ou SAN SD 18',
      concentration: '5 minutes de méditation',
      cout_pv: '2 PV pour ≤10 km, 4 PV pour 11-20 km, 6 PV pour 21-30 km, etc.',
      effets: 'Se téléporte en un lieu très bien connu (étudié ≥15 min). Instantané. Chaque MR permet d\'emmener une personne supplémentaire (contact physique requis, tous perdent les mêmes PV). Le point d\'arrivée ne doit pas être occupé par un solide.',
    },
  },
  {
    nom: 'Souffle du vent',
    magie: 'Souffle', branche: 'Mouvement', niveau: 'Grand Maître', cout_xp: null,
    details: {
      test: 'Souffle+AGI ou SAN SD 18',
      concentration: '5 minutes',
      points_vie: 4,
      effets: 'Perd sa corporéité, devient un souffle de vent. Perçoit l\'environnement (vue, ouïe, odorat, toucher). Vitesse = Mouvement×10 km/h. Peut influer subtilement (courant d\'air, bourrasque, malus -2 aux adversaires, -3 si Mouvement >8). Présence trahissable par odeur (Observation+PER SD 17).',
    },
  },

  // =========================================================================
  // SOUFFLE DE L'ESPRIT
  // =========================================================================

  {
    nom: 'Confusion',
    magie: 'Souffle', branche: 'Esprit', niveau: 'Novice', cout_xp: null,
    details: {
      test: 'Souffle+ESP ou SAN SD 12 (ou Résistance psychique si supérieure)',
      concentration: '1 tour',
      points_vie: 2,
      resistance: 'psychique',
      effets: 'Projette murmures et ombres dans l\'esprit de la cible. MR = nombre de tours où elle perd ses moyens. Non paralysée, peut se défendre. En situation sociale : oubli, trouble, besoin de reprendre ses esprits.',
      echec_critique: 'Le lanceur lui-même devient confus pendant 1 minute.',
    },
  },
  {
    nom: 'Cacher sa nature',
    magie: 'Souffle', branche: 'Esprit', niveau: 'Novice', cout_xp: null,
    details: {
      test: 'Souffle+SAN ou PRES SD 12',
      concentration: '1 minute',
      points_vie: 2,
      duree: '1 scène',
      effets: 'Illusion dans l\'esprit des autres modifiant des éléments physiques : traits, âge, couleur de cheveux/peau. Avec MR de 5, peut apparaître sous les traits d\'une personne de l\'autre sexe.',
    },
  },
  {
    nom: 'Boule de cristal',
    magie: 'Souffle', branche: 'Esprit', niveau: 'Adepte', cout_xp: null,
    details: {
      test: 'Souffle+ESP ou PER SD 14',
      concentration: '3 minutes',
      points_vie: 2,
      prerequis: 'Avoir médité ≥15 min dans le lieu cible',
      effets: 'Projette l\'esprit dans un lieu mémorisé via une boule de cristal. Voit et entend ce qui s\'y passe. Nombre de connexions actives = rang de Souffle de l\'Esprit. Au-delà, perd la plus ancienne. Présence détectable par Sensibilité+PER en opposition.',
    },
  },
  {
    nom: 'Visiteur des rêves',
    magie: 'Souffle', branche: 'Esprit', niveau: 'Adepte', cout_xp: null,
    details: {
      test: 'Souffle+PER ou ESP SD 14',
      concentration: '10 minutes',
      points_vie: 2,
      prerequis: 'Cible endormie, contact préalable ≥15 min, portée <5 km',
      resistance: 'psychique',
      effets: 'Plonge dans les rêves d\'une personne. Expérimente le monde onirique symboliquement (obsessions, traumatismes). Rêveur détecte intrus par Observation+PER vs score du sort. RC : peut modifier le déroulement du rêve et influer sur l\'état d\'esprit.',
    },
  },
  {
    nom: 'Force de l\'esprit',
    magie: 'Souffle', branche: 'Esprit', niveau: 'Adepte', cout_xp: null,
    details: {
      test: 'Souffle+ESP SD 14',
      concentration: '5 minutes de méditation',
      points_vie: 2,
      duree: '[MR×15] minutes + 1 h supplémentaire par PA additionnel',
      effets: 'Neutralise les effets négatifs des désavantages féériques psychologiques (soif de sang du loup-garou, peur de l\'eau du phénix, kleptomanie du korrigan, etc.). Ne peut être utilisé dans l\'urgence. À l\'épuisement, la faiblesse revient très violemment.',
    },
  },
  {
    nom: 'Lire les pensées',
    magie: 'Souffle', branche: 'Esprit', niveau: 'Maître', cout_xp: null,
    details: {
      test: 'Souffle+PER ou ESP SD 16 (ou Résistance psychique si supérieure)',
      concentration: '2 minutes',
      points_vie: 3,
      portee: 'Moins de 30 mètres',
      resistance: 'psychique',
      effets: 'Effleure l\'esprit de la cible et entrevoit ses pensées les plus saillantes. La cible peut être en pleine activité ou en train de parler.',
    },
  },
  {
    nom: 'Télépathie',
    magie: 'Souffle', branche: 'Esprit', niveau: 'Maître', cout_xp: null,
    details: {
      test: 'Souffle+ESP SD 16',
      concentration: '1 minute',
      points_vie: 3,
      portee: 'Moins de 100 mètres',
      resistance: 'psychique',
      effets: 'Parle dans l\'esprit des cibles. MR = nombre de personnes avec lesquelles peut interagir. Communication bidirectionnelle.',
    },
  },
  {
    nom: 'Illusion vraie',
    magie: 'Souffle', branche: 'Esprit', niveau: 'Grand Maître', cout_xp: null,
    details: {
      test: 'Souffle+PER ou ESP SD 18 (ou Résistance psychique si supérieure)',
      concentration: 'Au moins 5 minutes',
      points_vie: 4,
      portee: 'Moins de 100 mètres',
      resistance: 'psychique',
      effets: 'Illusion si parfaite qu\'elle remplace la réalité pendant 1 scène. Les victimes peuvent croire se battre contre un géant alors qu\'il s\'agit d\'un moulin, penser être grièvement blessées alors qu\'elles ont une égratignure. Meilleure et plus durable si des éléments physiques servent de support.',
    },
  },
  {
    nom: 'Métempsycose',
    magie: 'Souffle', branche: 'Esprit', niveau: 'Grand Maître', cout_xp: null,
    details: {
      test: 'Souffle+ESP ou SAN SD 18',
      concentration: '1 heure',
      cout_pv: 'Totalité des PV du corps d\'origine + 8 PV du corps bénéficiaire',
      resistance: 'psychique',
      prerequis: 'Corps cible immobile et endormi',
      effets: 'Transfère l\'esprit dans un autre corps. Conserve : PER, SAN, ESP, PRES du lanceur. Hérite : FOR, CON, PRÉC, AGI du corps cible. La victime décède sans souffrir. Permet l\'immortalité virtuelle.',
    },
  },

  // =========================================================================
  // THÉURGIE
  // =========================================================================

  // Frère (Novice)
  {
    nom: 'Bénédiction',
    magie: 'Théurgie', niveau: 'Novice', cout_xp: null,
    details: {
      test: 'Théurgie+PRES ou ESP SD 12',
      duree: 'Jusqu\'au prochain lever du soleil',
      portee: 'Toucher ou soi-même',
      temps_priere: '1 minute',
      effets: '+1 à toutes les actions liées à l\'objet de la bénédiction (défendre un lieu saint, restaurer une œuvre d\'art sacré, etc.). RC : bonus +2.',
    },
  },
  {
    nom: 'Guérison des maladies courantes',
    magie: 'Théurgie', niveau: 'Novice', cout_xp: null,
    details: {
      test: 'Théurgie+PRES ou ESP SD 12',
      duree: 'Permanente',
      portee: 'Toucher ou soi-même',
      temps_priere: '5 minutes',
      effets: 'Guérit une maladie courante ou blessure légère. PV et Caractéristiques perdus reviennent, symptômes disparaissent dans [8-MR] heures. Immédiatement en cas de RC.',
    },
  },
  {
    nom: 'Purification',
    magie: 'Théurgie', niveau: 'Novice', cout_xp: null,
    details: {
      test: 'Théurgie+PRES ou ESP SD 12',
      duree: 'Permanente',
      temps_priere: '10 minutes à 1 heure selon étendue de la souillure',
      effets: 'Dissipe les effets de Pouvoirs féériques sur un lieu, objet ou personne (Altération structurelle, Chant des sirènes, Charme, Contact fiévreux, Ténèbres, etc.) si le test est ≥ au test du Pouvoir initial. Requiert sel et eau bénite.',
    },
  },
  {
    nom: 'Transformation de l\'eau en vin',
    magie: 'Théurgie', niveau: 'Novice', cout_xp: null,
    details: {
      test: 'Théurgie+PRES ou ESP SD 12',
      duree: 'Jusqu\'au lendemain matin',
      temps_priere: '2 minutes',
      effets: 'Transforme [MR] litres d\'eau en vin (minimum 1 litre).',
    },
  },
  {
    nom: 'Vade Retro Satana',
    magie: 'Théurgie', niveau: 'Novice', cout_xp: null,
    details: {
      test: 'Théurgie+PRES ou ESP SD 12',
      duree: 'Une scène',
      portee: '15 mètres',
      temps_priere: '1 tour',
      resistance: 'psychique',
      effets: 'Provoque malaise chez les Faux-Semblants entendant la prière. Malus -[MR/2] (minimum -1) à toute action contre le théurge ou ses alliés. Hallucinations auditives et visuelles si MR élevée. -5 en cas de RC.',
    },
  },

  // Père (Adepte)
  {
    nom: 'Grand rituel d\'exorcisme',
    magie: 'Théurgie', niveau: 'Adepte', cout_xp: null,
    details: {
      test: 'Théurgie+PRES ou ESP SD 14',
      portee: 'Contact',
      temps_priere: 'Au moins 15 minutes',
      effets: 'Retire [1+MR] points de Féérie à un Faux-Semblant (asperger de pétrole, apposer croix en argent, immolation, prières). Peut être répété. Féérie ainsi perdue définitive, sauf rituel de réenchantement druidique.',
    },
  },
  {
    nom: 'Guérison des handicaps',
    magie: 'Théurgie', niveau: 'Adepte', cout_xp: null,
    details: {
      test: 'Théurgie+PRES ou ESP SD 14',
      duree: 'Permanente',
      temps_priere: '10 minutes',
      effets: 'Guérit handicaps physiques : cécité, surdité, paralysie, membres invalides, épilepsie, etc. Imposition des mains sur l\'organe ou membre souffrant.',
    },
  },
  {
    nom: 'L\'œil de Dieu',
    magie: 'Théurgie', niveau: 'Adepte', cout_xp: null,
    details: {
      test: 'Théurgie+PRES ou ESP SD 14',
      duree: 'Jusqu\'au coucher du soleil',
      portee: 'À vue',
      temps_priere: '2 minutes',
      effets: 'Réussit automatiquement tous les tests de Perception en rapport avec la vue, quels que soient les malus. Tout lui apparaît net et nimbé d\'une aura dorée. Ce qui est caché lui est révélé par une aura éclatante.',
    },
  },
  {
    nom: 'Marche sur l\'eau',
    magie: 'Théurgie', niveau: 'Adepte', cout_xp: null,
    details: {
      test: 'Théurgie+PRES ou ESP SD 14',
      duree: 'Une scène ou 1 heure',
      temps_priere: '1 minute',
      effets: 'Se déplace à la surface d\'une étendue d\'eau comme sur un sol solide. MR 0-1 : jusqu\'aux genoux. MR 7 : peut courir comme sur terre battue.',
    },
  },

  // Saint (Maître)
  {
    nom: 'Ailes divines',
    magie: 'Théurgie', niveau: 'Maître', cout_xp: null,
    details: {
      test: 'Théurgie+PRES ou ESP SD 16',
      duree: 'Une scène',
      portee: 'Le théurge ou une cible à portée de voix et de vue',
      temps_priere: '1 minute',
      effets: 'Fait voler le théurge ou une cible. Même vitesse que les fées ailées (Mouvement+2). Utilise la Compétence Mouvement pour les tests de vol.',
    },
  },
  {
    nom: 'Baiser au lépreux',
    magie: 'Théurgie', niveau: 'Maître', cout_xp: null,
    details: {
      test: 'Théurgie+PRES ou ESP SD 16',
      duree: 'Permanente',
      portee: 'Contact avec la bouche',
      temps_priere: '30 secondes',
      effets: 'Guérit n\'importe quelle maladie (même incurable ou magique), empoisonnement, blessure, et fait repousser membres ou organes manquants.',
    },
  },
  {
    nom: 'Bouclier de la foi',
    magie: 'Théurgie', niveau: 'Maître', cout_xp: null,
    details: {
      test: 'Théurgie+PRES ou ESP SD 16',
      duree: 'Une scène',
      portee: '5 mètres autour du théurge',
      temps_priere: '1 tour',
      effets: 'Toute attaque de Mêlée ou Tir contre le théurge et ses alliés cause la moitié des dégâts. RC : les alliés ne subissent aucune blessure physique.',
    },
  },
  {
    nom: 'Brûle tel le buisson ardent !',
    magie: 'Théurgie', niveau: 'Maître', cout_xp: null,
    details: {
      test: 'Théurgie+PRES ou ESP SD 16',
      duree: 'Jusqu\'à consomption totale ou 1 PV restant si cible vivante',
      portee: 'À vue si sans vrai nom ; nom seul suffit si vrai nom connu',
      temps_priere: '2 tours',
      resistance: 'physique ou psychique (au choix). Active à chaque tour si résistance passive vaincue.',
      effets: 'Embrase la cible nommée : 3 PV perdus par tour jusqu\'à 1 PV restant. Ne tue pas. Affecte les fées normalement insensibles au feu (phénix inclus).',
    },
  },
  {
    nom: 'Eau de vérité',
    magie: 'Théurgie', niveau: 'Maître', cout_xp: null,
    details: {
      test: 'Théurgie+PRES ou ESP SD 16',
      duree: 'Tant que le théurge ne quitte pas le bénitier des yeux',
      temps_priere: '3 minutes',
      effets: 'En contemplant un bénitier, espionne visuellement un lieu connu et déjà visité, sous l\'angle désiré. N\'entend pas les conversations.',
    },
  },
  {
    nom: 'Insensibilité des martyrs',
    magie: 'Théurgie', niveau: 'Maître', cout_xp: null,
    details: {
      test: 'Théurgie+PRES ou ESP SD 16',
      duree: '1 heure (2 en RC)',
      temps_priere: '1 minute',
      effets: 'Ignore les souffrances physiques et malus de blessure. La douleur devient tolérable moyennant Fortitude+SAN SD 12. À la fin de la durée, si la cause persiste, test Fortitude+SAN SD 18 ou évanouissement immédiat.',
    },
  },
  {
    nom: 'Miracle de Lazare',
    magie: 'Théurgie', niveau: 'Maître', cout_xp: null,
    details: {
      test: 'Théurgie+PRES ou ESP SD 16',
      portee: 'À portée de voix et de vue',
      temps_priere: '3 tours',
      effets: 'Ressuscite un mort de moins d\'une semaine (cadavre pur de toute nécromancie). Retrouve toutes ses facultés, légères pertes de mémoire sur les derniers jours pendant 1 semaine. Pour morts anciens (crypte/cimetière sacré) : invoque [MR×2] squelettes rang Larbin pendant 1 scène (se réveillent en 1 tour, test Ressort+SAN SD 13 contre l\'épouvante).',
    },
  },
  {
    nom: 'Multiplication des pains',
    magie: 'Théurgie', niveau: 'Maître', cout_xp: null,
    details: {
      test: 'Théurgie+PRES ou ESP SD 16',
      duree: 'Un repas',
      temps_priere: '3 minutes',
      effets: 'Bénit des pains et en multiplie le nombre par la MR.',
    },
  },
  {
    nom: 'Pêche miraculeuse',
    magie: 'Théurgie', niveau: 'Maître', cout_xp: null,
    details: {
      test: 'Théurgie+PRES ou ESP SD 16',
      duree: 'Une scène ; possible une fois par mois',
      temps_priere: '3 minutes',
      effets: 'Bénit un filet de pêche qui se gorgera de poissons en mer ou en lac. Quantité proportionnelle à la MR.',
    },
  },
  {
    nom: 'Pentacle de protection',
    magie: 'Théurgie', niveau: 'Maître', cout_xp: null,
    details: {
      test: 'Théurgie+PRES ou ESP SD 16',
      duree: 'Tant que les individus sont dans le pentacle',
      temps_priere: '5 minutes ou plus selon taille',
      resistance: 'psychique',
      effets: 'Pentacle de sel consacré (chlorure d\'argent). Sel 10× plus lourd. Faux-Semblants entrant : 4 dégâts + nausées (malus -3, disparaît 1 tour après sortie). Toucher le sel pour briser le pentacle : 8 dégâts. Peut être dissimulé sous tapis. Tout Pouvoir féérique sur personnes à l\'intérieur souffre d\'un malus -2.',
    },
  },
  {
    nom: 'Pentacle d\'emprisonnement',
    magie: 'Théurgie', niveau: 'Maître', cout_xp: null,
    details: {
      test: 'Théurgie+PRES ou ESP SD 16',
      duree: 'Tant que le pentacle est intact',
      temps_priere: '3-5 minutes',
      resistance: 'psychique (à minuit) et physique pour surmonter répulsion du sel',
      effets: 'Emprisonne un Faux-Semblant : ne peut sortir, ne peut se démasquer, ne peut utiliser aucun Pouvoir. S\'approcher du sel : 4 dégâts. Toucher : 8 dégâts. Libération : balayer le sel (8 dégâts + Ressort+FOR SD 18) ou résister psychiquement au renouvellement magique à minuit (SD = score du lanceur, min 18).',
    },
  },

  // Apôtre (Grand Maître)
  {
    nom: 'Invocation de Séraphin',
    magie: 'Théurgie', niveau: 'Grand Maître', cout_xp: null,
    details: {
      test: 'Théurgie+PRES ou ESP SD 18',
      duree: 'Une journée',
      temps_priere: '3 tours',
      effets: 'Invoque un séraphin semi-éthéré (rang Pointure) auréolé de lumière, 3 paires d\'ailes enflammées, arme enflammée causant 6 dégâts combinés. Peut invoquer jusqu\'à 3 simultanément. Bonus +5 contre sorts et Pouvoirs féériques.',
    },
  },
  {
    nom: 'Résurrection christique',
    magie: 'Théurgie', niveau: 'Grand Maître', cout_xp: null,
    details: {
      test: 'Théurgie+PRES ou ESP SD 18',
      duree: 'Protection jusqu\'à la fin de la vie, usage unique',
      temps_priere: 'Longue prière (active la protection de façon permanente)',
      effets: 'Après avoir appris ce Miracle et prononcé la prière, le théurge revient à la vie au bout de deux jours s\'il meurt autrement que de vieillesse. Ne peut y recourir qu\'une seule fois dans son existence.',
    },
  },

  // =========================================================================
  // GRAND LANGAGE — 12 Axiomes (tous niveau Novice, Éveillé = point d'entrée)
  // =========================================================================

  {
    nom: 'Cognition',
    magie: 'Grand Langage', niveau: 'Novice', cout_xp: null,
    details: {
      test: 'Grand Langage+ESP SD 12 (base)',
      cout_pa: 'Double des autres magies',
      axiome: true,
      effets: 'Acquérir la connaissance par lecture des pensées, perception améliorée ou à distance, consultation d\'ouvrages et archives. Puiser dans la mémoire collective.',
    },
  },
  {
    nom: 'Confusion',
    magie: 'Grand Langage', niveau: 'Novice', cout_xp: null,
    details: {
      test: 'Grand Langage+ESP ou PRES SD 12 (base)',
      cout_pa: 'Double des autres magies',
      axiome: true,
      effets: 'Troubler un équilibre existant (physique ou psychologique), semer la zizanie et l\'instabilité, déstabiliser une situation ou un esprit.',
    },
  },
  {
    nom: 'Création',
    magie: 'Grand Langage', niveau: 'Novice', cout_xp: null,
    details: {
      test: 'Grand Langage+ESP SD 12 (base)',
      cout_pa: 'Double des autres magies',
      axiome: true,
      effets: 'Créer de la matière (minérale, végétale, chimique, organique) ou donner la vie à partir de rien. Le Grand Langage est la magie démiurgique de l\'univers.',
    },
  },
  {
    nom: 'Destruction',
    magie: 'Grand Langage', niveau: 'Novice', cout_xp: null,
    details: {
      test: 'Grand Langage+ESP ou FOR SD 12 (base)',
      cout_pa: 'Double des autres magies',
      axiome: true,
      effets: 'Détruire la matière, ce qui est construit, les êtres vivants. Annihiler ce qui existe.',
    },
  },
  {
    nom: 'Fascination',
    magie: 'Grand Langage', niveau: 'Novice', cout_xp: null,
    details: {
      test: 'Grand Langage+PRES SD 12 (base)',
      cout_pa: 'Double des autres magies',
      axiome: true,
      effets: 'Séduire et captiver une ou plusieurs personnes. Capter irresistiblement l\'attention.',
    },
  },
  {
    nom: 'Injonction',
    magie: 'Grand Langage', niveau: 'Novice', cout_xp: null,
    details: {
      test: 'Grand Langage+PRES ou ESP SD 12 (base)',
      cout_pa: 'Double des autres magies',
      axiome: true,
      effets: 'Plier les éléments et les êtres vivants à sa volonté. Commander et contraindre.',
    },
  },
  {
    nom: 'Motion',
    magie: 'Grand Langage', niveau: 'Novice', cout_xp: null,
    details: {
      test: 'Grand Langage+AGI ou ESP SD 12 (base)',
      cout_pa: 'Double des autres magies',
      axiome: true,
      effets: 'Se mouvoir selon des règles inhabituelles, déplacer personnes ou objets dans l\'espace, y compris en l\'air ou à travers la matière.',
    },
  },
  {
    nom: 'Neutralisation',
    magie: 'Grand Langage', niveau: 'Novice', cout_xp: null,
    details: {
      test: 'Grand Langage+ESP SD 12 (base)',
      cout_pa: 'Double des autres magies',
      axiome: true,
      effets: 'Rendre inoffensif ce qui pourrait être une menace : immobiliser, emprisonner, désarmer, éliminer des éléments toxiques.',
    },
  },
  {
    nom: 'Protection',
    magie: 'Grand Langage', niveau: 'Novice', cout_xp: null,
    details: {
      test: 'Grand Langage+ESP SD 12 (base)',
      cout_pa: 'Double des autres magies',
      axiome: true,
      effets: 'Protéger soi-même, autrui ou des objets face aux attaques physiques ou psychiques.',
    },
  },
  {
    nom: 'Restauration',
    magie: 'Grand Langage', niveau: 'Novice', cout_xp: null,
    details: {
      test: 'Grand Langage+ESP SD 12 (base)',
      cout_pa: 'Double des autres magies',
      axiome: true,
      effets: 'Soigner des individus, restituer forces et souvenirs perdus, réparer des objets ou des structures brisés.',
    },
  },
  {
    nom: 'Simulation',
    magie: 'Grand Langage', niveau: 'Novice', cout_xp: null,
    details: {
      test: 'Grand Langage+PRES ou ESP SD 12 (base)',
      cout_pa: 'Double des autres magies',
      axiome: true,
      effets: 'Leurrer au moyen d\'illusions (visuelles, auditives, etc.) individuelles ou collectives.',
    },
  },
  {
    nom: 'Transformation',
    magie: 'Grand Langage', niveau: 'Novice', cout_xp: null,
    details: {
      test: 'Grand Langage+ESP SD 12 (base)',
      cout_pa: 'Double des autres magies',
      axiome: true,
      effets: 'Modifier la matière, changer sa configuration (formes, couleurs, propriétés), métamorphoser des êtres vivants.',
    },
  },
];

async function run() {
  await client.connect();
  console.log('Connecté à la base.\n');

  let inserted = 0;
  let skipped = 0;

  for (const sort of SORTS) {
    const existing = await client.query(
      `SELECT id FROM public.sorts WHERE nom = $1 AND magie = $2`,
      [sort.nom, sort.magie]
    );
    if (existing.rows.length > 0) {
      console.log(`  ↩ "${sort.nom}" déjà présent, ignoré.`);
      skipped++;
    } else {
      const branche = sort.branche || null;
      const cout_xp = sort.cout_xp !== undefined ? sort.cout_xp : null;
      await client.query(`
        INSERT INTO public.sorts (nom, magie, niveau, branche, details, is_official, cout_xp)
        VALUES ($1, $2, $3, $4, $5, true, $6)
      `, [sort.nom, sort.magie, sort.niveau, branche, JSON.stringify(sort.details), cout_xp]);
      console.log(`  ✓ "${sort.nom}" (${sort.magie}${branche ? ' / ' + branche : ''} — ${sort.niveau}) inséré.`);
      inserted++;
    }
  }

  await client.end();
  console.log(`\nMigration terminée. ${inserted} sort(s) inséré(s), ${skipped} ignoré(s).`);
}

run().catch(err => { console.error(err); process.exit(1); });
