// src/utils/pnjGeneratorBio.js
import {
  DEMOGRAPHIE_PARIS_1899, NATIONALITES_EXOTIQUES_1899,
  bonusNiveauTech, NIVEAUX_TECH, techLevelFromMod,
  typeCultureFromScore, statutSocialFromScore, TITRES_NOBLESSE,
  configFoyerFromDe, LIEUX_NAISSANCE_INHABITUELS,
  evenementNaissanceFromScore,
  configParentsFromDe, TRAITS_NOTABLES_PARENTS,
  chronologieJeunesseFromScore, TABLE_EVENEMENTS_SPECIAL_JEUNESSE,
} from '../data/pnjTablesBio';
import { tirage, tiragePondere, NOMS_PAR_NATIONALITE } from '../data/pnjTables';

const ANNEE_JEU = 99;
const BONUS_GENRE_HORREUR = 5;  // Les Héritiers est un univers de genre horreur/merveilleux
const BONUS_NAISSANCE_HORREUR = 20;

function d(n) { return Math.floor(Math.random() * n) + 1; }

// ─── ÉTAPE 1 : ORIGINES ───────────────────────────────────────────────────────

function _resolveOrigines(state) {
  state.sexeId = Math.random() < 0.5 ? 'masculin' : 'feminin';

  const categorie = tiragePondere(DEMOGRAPHIE_PARIS_1899);
  state.nationalite = categorie.id === 'autre'
    ? tirage(NATIONALITES_EXOTIQUES_1899)
    : categorie;

  state.modificateurs.TekMod = state.nationalite.TekMod ?? 3;
  state.flags.estImmigre = state.nationalite.id !== 'francaise';

  if (!state.flags.estImmigre) {
    state.langues = ['Français'];
    state.maitriseFrancais = 'natif';
    state.raisonPresence = null;
  } else {
    state.langues = [state.nationalite.langue].filter(Boolean);
    state.maitriseFrancais = 'en_attente_evaluation';
    const poolRaisons = NOMS_PAR_NATIONALITE[state.nationalite.id]?.raisonsPresence;
    state.raisonPresence = poolRaisons
      ? tirage(poolRaisons)
      : "Visiteur pour l'Exposition Universelle de 1900";
  }
  return state;
}

// ─── ÉTAPE 2 : CULTURE & TECH LEVEL ──────────────────────────────────────────

function _resolveCulture(state) {
  const rollTech = d(100) + ANNEE_JEU;
  state.modificateurs.TekMod += bonusNiveauTech(rollTech);
  const techId = techLevelFromMod(state.modificateurs.TekMod);
  const tech = NIVEAUX_TECH[techId];
  state.techLevelId = techId;
  state.education.pointsDeBase = tech.pointsDeBase;
  state.literacyBase = tech.literacy;

  const rollCulture = d(100) + state.modificateurs.TekMod;
  const culture = typeCultureFromScore(rollCulture);
  state.cultureId = culture.id;
  state.cultureLabel = culture.label;
  state.modificateurs.CuMod = culture.cuMod;
  state.education.pointsBonus = culture.edDice();
  state.education.totalPoints = state.education.pointsDeBase + state.education.pointsBonus;

  const total = culture.survieTotal;
  if (state.flags.estImmigre && ['primitive', 'nomadic'].includes(culture.id)) {
    state.competences.survieWilderness = Math.floor(total * 0.6);
    state.competences.survieRural = total - state.competences.survieWilderness;
  } else {
    state.competences.survieUrban = Math.floor(total * 0.7);
    state.competences.survieRural = total - state.competences.survieUrban;
  }
  return state;
}

// ─── ÉTAPE 3 : STATUT SOCIAL ──────────────────────────────────────────────────

function _resolveStatutSocial(state) {
  const rollSocial = d(100) + state.modificateurs.CuMod;
  const statut = statutSocialFromScore(rollSocial);

  if (statut.id === 'wealthy' && d(100) <= 15) {
    state.statutId = 'extremely_wealthy';
    state.statutLabel = 'Extrêmement riche';
    state.modificateurs.SolMod = 10;
    state.education.totalPoints = Math.max(0, state.education.totalPoints + 12);
    state.moneyMod = 20;
  } else if (statut.id === 'nobility') {
    const titre = tirage(TITRES_NOBLESSE);
    state.titreNoble = state.sexeId === 'feminin' ? titre.labelF : titre.labelM;
    const rollFortune = d(100) + titre.TiMod;
    const fortuneLabel = rollFortune <= 20 ? 'Titre ruiné' : rollFortune <= 70 ? 'Confortable' : 'Fortune immense';
    const solBonus   = rollFortune <= 20 ? 2 : rollFortune <= 70 ? 5 : 10;
    state.statutId = 'nobility';
    state.statutLabel = `Noblesse (${state.titreNoble} — ${fortuneLabel})`;
    state.modificateurs.SolMod = Math.min(15, statut.solMod + solBonus);
    state.education.totalPoints = Math.max(0, state.education.totalPoints + statut.edMod);
    state.moneyMod = statut.moneyMod;
  } else {
    state.statutId = statut.id;
    state.statutLabel = statut.label;
    state.modificateurs.SolMod = statut.solMod;
    state.education.totalPoints = Math.max(0, state.education.totalPoints + statut.edMod);
    state.moneyMod = statut.moneyMod;
  }

  let chanceAlpha = state.literacyBase ?? 40;
  if (state.statutId === 'destitute') chanceAlpha -= 30;
  else if (state.statutId === 'poor') chanceAlpha -= 15;
  else if (state.statutId === 'well_to_do') chanceAlpha += 30;
  else if (['wealthy', 'extremely_wealthy', 'nobility'].includes(state.statutId)) chanceAlpha += 50;
  state.estAlphabete = d(100) <= Math.min(95, Math.max(5, chanceAlpha));

  if (state.flags.estImmigre && state.maitriseFrancais === 'en_attente_evaluation') {
    const aise = ['well_to_do', 'wealthy', 'extremely_wealthy', 'nobility'].includes(state.statutId);
    if (aise || state.titreNoble) {
      state.maitriseFrancais = 'parfait';
      if (!state.langues.includes('Français')) state.langues.push('Français');
    } else {
      state.maitriseFrancais = Math.random() < 0.6 ? 'baragouine' : 'aucun';
    }
  }
  return state;
}

// ─── ÉTAPE 4 : FAMILLE & LÉGITIMITÉ ──────────────────────────────────────────

function _resolveFamille(state) {
  state.legitime = d(20) < 19;
  if (!state.legitime) {
    state.modificateurs.SolMod = Math.max(0, state.modificateurs.SolMod - d(4));
  }

  const config = configFoyerFromDe(d(20));
  state.structureFoyer = config.resoudre();
  if (config.flagRue) {
    state.statutId = 'destitute';
    state.statutLabel = 'Misérable';
    state.modificateurs.SolMod = 0;
    state.competences.survieUrban += 3;
  }
  if (config.flagOrphelinat) {
    state.modificateurs.SolMod = Math.min(state.modificateurs.SolMod, 2);
  }

  const nSiblings = Math.max(0, d(6) - 1);
  state.nombreFreresSoeurs = nSiblings;
  if (nSiblings === 0 || config.flagRue) {
    state.rangNaissance = nSiblings === 0 ? 'Enfant unique' : 'Inconnu';
  } else {
    const deRang = d(6);
    if (deRang < nSiblings) {
      state.rangNaissance = 'Enfant du milieu';
    } else if (Math.random() < 0.5) {
      state.rangNaissance = 'Premier-né (Aîné)';
    } else {
      state.rangNaissance = 'Dernier-né (Cadet)';
    }
  }
  return state;
}

// ─── ÉTAPE 5 : LIEU DE NAISSANCE ─────────────────────────────────────────────

function _resolveNaissance(state) {
  const roll = d(20);
  if (roll <= 4) {
    state.lieuNaissance = 'En plein champ, à découvert';
    state.biModTotal = 5;
  } else if (roll <= 7) {
    state.lieuNaissance = 'Au domicile de la famille';
    state.biModTotal = 0;
  } else if (roll <= 9) {
    state.lieuNaissance = "Dans un établissement hospitalier ordinaire";
    state.biModTotal = 0;
  } else if (roll <= 11) {
    state.lieuNaissance = `En terre étrangère (${state.nationalite.label})`;
    state.biModTotal = 5;
  } else if (roll <= 13) {
    const vehicule = tirage(['une calèche ou un fiacre', 'un omnibus', 'un navire ou une péniche', 'un ballon dirigeable']);
    state.lieuNaissance = `Dans un véhicule en mouvement — ${vehicule}`;
    state.biModTotal = 5;
  } else {
    const exotique = tirage(LIEUX_NAISSANCE_INHABITUELS);
    state.lieuNaissance = exotique.label;
    state.biModTotal = exotique.biMod;
  }
  return state;
}

// ─── ÉTAPE 6 : ÉVÉNEMENTS DE NAISSANCE ───────────────────────────────────────

function _resolveEvenementsNaissance(state) {
  state.evenementsNaissance = [];
  const score106 = d(100) + state.biModTotal + BONUS_NAISSANCE_HORREUR;
  let nombre = 0;
  let forcePlus20 = false;
  if      (score106 <= 50)  { nombre = 0; }
  else if (score106 <= 75)  { nombre = 1; }
  else if (score106 === 76) { nombre = 1; forcePlus20 = true; }
  else if (score106 <= 94)  { nombre = 2; }
  else if (score106 <= 100) { nombre = 3; forcePlus20 = true; }
  else if (score106 <= 124) { nombre = 4; forcePlus20 = true; }
  else                      { nombre = 5; forcePlus20 = true; }

  for (let i = 0; i < nombre; i++) {
    const roll = d(100) + state.biModTotal + BONUS_NAISSANCE_HORREUR + (forcePlus20 ? 20 : 0);
    const entree = evenementNaissanceFromScore(roll);
    const texte = entree.pool ? tirage(entree.pool) : entree.texte;
    if (entree.flagCurse) state.flags.aCurse = true;
    if (entree.flagGmSecret) state.flags.gmSecret = true;
    if (texte && !state.evenementsNaissance.includes(texte)) {
      state.evenementsNaissance.push(texte);
    }
  }
  return state;
}

// ─── ÉTAPE 7 : PARENTS ───────────────────────────────────────────────────────

function _resolveParents(state) {
  state.configParents = configParentsFromDe(d(20)).label;
  state.traitsNotablesParents = [];
  const n = d(3);
  for (let i = 0; i < n; i++) {
    const trait = tirage(TRAITS_NOTABLES_PARENTS);
    if (!state.traitsNotablesParents.includes(trait)) state.traitsNotablesParents.push(trait);
  }
  return state;
}

// ─── ÉTAPES 8 & 9 : JEUNESSE ─────────────────────────────────────────────────

function _texteEvenementJeunesse(score, periode, state) {
  const entree = chronologieJeunesseFromScore(score);
  if (entree.fn === 'drame_ou_miracle') {
    return Math.random() < 0.5
      ? "Tragédie familiale — un accident ou incendie frappe un proche."
      : "Événement merveilleux — un coup de chance inattendu change son regard sur le monde.";
  }
  if (entree.fn === 'table_speciale') {
    const pool = TABLE_EVENEMENTS_SPECIAL_JEUNESSE[periode] ?? TABLE_EVENEMENTS_SPECIAL_JEUNESSE.enfance;
    return tirage(pool);
  }
  if (entree.penaliteEd) {
    state.education.totalPoints = Math.max(0, state.education.totalPoints - entree.penaliteEd);
  }
  return entree.texte ?? '';
}

function _resolveJeunesse(state) {
  state.evenementsEnfance = [];
  state.evenementsAdolescence = [];
  state.bracketsPersonality = [];

  const nEnfance = d(3);
  for (let i = 0; i < nEnfance; i++) {
    const age = d(12);
    const score = d(20) + state.modificateurs.SolMod;
    const entree = chronologieJeunesseFromScore(score);
    const texte = _texteEvenementJeunesse(score, 'enfance', state);
    if (texte) state.evenementsEnfance.push(`[Âge ${age}] ${texte}`);
    if (entree.bracket) state.bracketsPersonality.push(entree.bracket);
  }

  const nAdolescence = d(3);
  for (let i = 0; i < nAdolescence; i++) {
    const age = d(6) + 12;
    const score = d(20) + state.modificateurs.SolMod;
    const entree = chronologieJeunesseFromScore(score);
    const texte = _texteEvenementJeunesse(score, 'adolescence', state);
    if (texte) state.evenementsAdolescence.push(`[Âge ${age}] ${texte}`);
    if (entree.bracket) state.bracketsPersonality.push(entree.bracket);
  }
  return state;
}

// ─── GÉNÉRATION PRINCIPALE ────────────────────────────────────────────────────

export function genererHistorique() {
  let state = {
    sexeId: null,
    nationalite: null,
    modificateurs: { TekMod: 3, CuMod: 0, SolMod: 0 },
    flags: { estImmigre: false, aCurse: false, gmSecret: false },
    education: { pointsDeBase: 0, pointsBonus: 0, totalPoints: 0 },
    competences: { survieWilderness: 0, survieRural: 0, survieUrban: 0 },
    langues: [], maitriseFrancais: 'natif', raisonPresence: null,
    techLevelId: 'industrial', cultureId: 'dynamic', cultureLabel: 'Dynamique',
    statutId: 'comfortable', statutLabel: 'Confortable', titreNoble: null,
    legitime: true, structureFoyer: '', nombreFreresSoeurs: 0, rangNaissance: 'Enfant unique',
    moneyMod: 1.0, literacyBase: 40, estAlphabete: true,
    lieuNaissance: '', biModTotal: 0, evenementsNaissance: [],
    configParents: '', traitsNotablesParents: [],
    evenementsEnfance: [], evenementsAdolescence: [], bracketsPersonality: [],
  };

  state = _resolveOrigines(state);
  state = _resolveCulture(state);
  state = _resolveStatutSocial(state);
  state = _resolveFamille(state);
  state = _resolveNaissance(state);
  state = _resolveEvenementsNaissance(state);
  state = _resolveParents(state);
  state = _resolveJeunesse(state);

  const historique = {
    origines: {
      nationalite:      state.nationalite.label,
      langue:           state.nationalite.langue ?? 'Français',
      maitriseFrancais: state.maitriseFrancais,
      languesParlees:   state.langues,
      raisonPresence:   state.raisonPresence,
      estImmigre:       state.flags.estImmigre,
    },
    formation: {
      techLevel:       NIVEAUX_TECH[state.techLevelId]?.label ?? state.techLevelId,
      culture:         state.cultureLabel,
      estAlphabete:    state.estAlphabete,
      educationPoints: state.education.totalPoints,
      survie:          { ...state.competences },
    },
    milieu: {
      statutSocial:       state.statutLabel,
      titreNoble:         state.titreNoble,
      legitime:           state.legitime,
      structureFoyer:     state.structureFoyer,
      nombreFreresSoeurs: state.nombreFreresSoeurs,
      rangNaissance:      state.rangNaissance,
    },
    naissance: {
      lieuPrecis: state.lieuNaissance,
      evenements: state.evenementsNaissance,
    },
    parents: {
      configurationMetier: state.configParents,
      faitsNotables:       state.traitsNotablesParents,
    },
    jeunesse: {
      enfance:     state.evenementsEnfance,
      adolescence: state.evenementsAdolescence,
    },
    flags: { ...state.flags },
  };

  return { sexeId: state.sexeId, nationaliteId: state.nationalite.id, historique };
}
