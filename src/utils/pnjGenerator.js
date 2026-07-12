// src/utils/pnjGenerator.js
// Générateur aléatoire de PNJ pour Les Héritiers.
// 100% local — aucun appel réseau.

import {
  TRANCHES_AGE, SEXES, GENRES, NATIONALITES,
  SITUATIONS_MATRIMONIALES, SITUATIONS_FAMILIALES,
  NOMS_PAR_NATIONALITE, METIERS_PAR_TRANCHE_AGE,
  TABLES_REEL, TABLES_MERVEILLEUX, SURCHARGES_TYPE_FEE,
  SECRETS_PAR_CATEGORIE,
  tirage, tiragePondere, tirageCloche, tirageMultiple,
  accordLabel, resolveMetier, resolveText, getPolarity,
} from '../data/pnjTables';
import { genererHistorique } from './pnjGeneratorBio';

const POLARITY_SCORES = { l2: 2, l1: 1, n: 0, d1: -1, d2: -2 };

function computePolariteScore(polarites) {
  const scores = [
    ...(polarites.traits || []).map(p => POLARITY_SCORES[p] ?? 0),
    POLARITY_SCORES[polarites.motivation] ?? 0,
    POLARITY_SCORES[polarites.secret] ?? 0,
    POLARITY_SCORES[polarites.comportement] ?? 0,
  ];
  const sum = scores.reduce((a, b) => a + b, 0);
  const max = scores.length * 2;
  return max > 0 ? Math.max(1, Math.min(10, Math.round(5 + (sum / max) * 4.5))) : 5;
}

// Tables optionnelles (mode Réel seulement)
function getPhobie(mode, db = {})       { return mode === 'reel' ? tiragePondere(merge(TABLES_REEL.phobies,       db, 'phobies'))       : null; }
function getHobby(mode, db = {})        { return mode === 'reel' ? tiragePondere(merge(TABLES_REEL.hobbies,       db, 'hobbies'))       : null; }
function getComportement(mode, db = {}) { return mode === 'reel' ? tiragePondere(merge(TABLES_REEL.comportements, db, 'comportements')) : null; }

// Retourne le pool de secrets adapté au métier (chaînage), ou le pool général en fallback.
// generalPool = TABLES_REEL.secrets + entrées DB approuvées
function getSecret(mode, metier, generalPool) {
  const pool = generalPool || TABLES_REEL.secrets;
  if (mode !== 'reel' || !metier) return tirage(pool);
  const m = metier.toLowerCase();
  for (const cat of Object.values(SECRETS_PAR_CATEGORIE)) {
    if (cat.mots.some(mot => m.includes(mot))) {
      const thematic = Math.random() < 0.6 ? cat.secrets : pool;
      return tirage(thematic);
    }
  }
  return tirage(pool);
}

// ─── MERGE DB + HARDCODÉ ─────────────────────────────────────────────────────

// Concatène les entrées Supabase approuvées au pool hardcodé.
// dbEntries est indexé par 'traits', 'apparences', 'metiers_jeune', etc.
function merge(hardcoded, dbEntries, key) {
  return dbEntries && dbEntries[key] ? [...hardcoded, ...dbEntries[key]] : hardcoded;
}

// ─── HELPERS INTERNES ────────────────────────────────────────────────────────

function tableMerveilleux(typeFee, champ) {
  const surcharge = typeFee ? SURCHARGES_TYPE_FEE[typeFee] : null;
  return (surcharge && surcharge[champ]) || TABLES_MERVEILLEUX[champ];
}

function getPrenom(sexe, mode, nationalite, typeFee) {
  if (mode === 'merveilleux') {
    if (sexe === 'indetermine') return tirage(TABLES_MERVEILLEUX.prenomsNeutres);
    if (sexe === 'feminin')     return tirage(tableMerveilleux(typeFee, 'prenomsFeminins'));
    return tirage(tableMerveilleux(typeFee, 'prenomsMasculins'));
  }
  const tableNat = NOMS_PAR_NATIONALITE[nationalite] || NOMS_PAR_NATIONALITE.francaise;
  if (sexe === 'feminin') return tirage(tableNat.prenomsFeminins);
  return tirage(tableNat.prenomsMasculins);
}

function getNom(mode, nationalite, typeFee) {
  if (mode === 'merveilleux') return tirage(tableMerveilleux(typeFee, 'noms')) || tirage(TABLES_MERVEILLEUX.noms);
  const tableNat = NOMS_PAR_NATIONALITE[nationalite] || NOMS_PAR_NATIONALITE.francaise;
  return tirage(tableNat.noms);
}

function getMetier(mode, trancheAge, typeFee, sexe, dbEntries = {}) {
  if (mode === 'merveilleux') return tirage(tableMerveilleux(typeFee, 'metiers'));
  const hardcoded = METIERS_PAR_TRANCHE_AGE[trancheAge] || METIERS_PAR_TRANCHE_AGE.adulte;
  const table = merge(hardcoded, dbEntries, `metiers_${trancheAge}`);
  return resolveMetier(tirage(table), sexe);
}

// ─── RÈGLES DE COHÉRENCE ─────────────────────────────────────────────────────

function corrigerCoherence(pnj) {
  const { trancheAge, situationFamiliale } = pnj;

  // Un jeune (18-30) ne peut pas avoir des enfants adultes
  if (trancheAge === 'jeune' && situationFamiliale === 'enfants_adultes') {
    return { ...pnj, situationFamiliale: 'sans_enfants' };
  }
  // Un très âgé a peu de chances d'avoir des enfants mineurs
  if (trancheAge === 'age' && situationFamiliale === 'enfants_mineurs') {
    return { ...pnj, situationFamiliale: 'enfants_adultes' };
  }
  return pnj;
}

// ─── GÉNÉRATION PRINCIPALE ───────────────────────────────────────────────────

/**
 * Génère un PNJ complet.
 * @param {Object} options - Valeurs fixées par l'utilisateur (null = tirer au sort)
 * @param {'reel'|'merveilleux'} options.mode
 * @param {string|null} options.typeFee  - Clé SURCHARGES_TYPE_FEE (mode merveilleux)
 * @param {string|null} options.sexe
 * @param {string|null} options.genre
 * @param {string|null} options.trancheAge
 * @param {string|null} options.nationalite
 * @param {string|null} options.situationMatrimoniale
 * @param {string|null} options.situationFamiliale
 */
export function genererPnj(options = {}, dbEntries = {}) {
  const {
    mode = 'reel',
    typeFee = null,
  } = options;

  if (mode === 'biographique') {
    const { sexeId, nationaliteId, historique } = genererHistorique();
    const pnjReel = genererPnj(
      { ...options, mode: 'reel', sexe: sexeId, nationalite: nationaliteId },
      dbEntries
    );
    return { ...pnjReel, mode: 'biographique', historique,
             raisonPresence: historique.origines.raisonPresence ?? null };
  }

  // Tirer les champs d'identité si non fixés (tirage pondéré)
  const sexe              = options.sexe              || tiragePondere(merge(SEXES, dbEntries, 'sexes')).id;
  const genre             = options.genre             || tiragePondere(merge(
    GENRES.filter(g => mode === 'merveilleux' ? true : g.id !== 'indetermine'),
    dbEntries, 'genres'
  )).id;
  const trancheAge        = options.trancheAge        || tiragePondere(merge(TRANCHES_AGE, dbEntries, 'tranches_age')).id;
  const nationalite       = options.nationalite       || (mode === 'merveilleux' ? null : tiragePondere(merge(NATIONALITES, dbEntries, 'nationalites')).id);
  const situationMatrimoniale = options.situationMatrimoniale || tiragePondere(merge(SITUATIONS_MATRIMONIALES, dbEntries, 'situations_matrimoniales')).id;
  const situationFamiliale    = options.situationFamiliale    || tiragePondere(merge(SITUATIONS_FAMILIALES, dbEntries, 'situations_familiales')).id;

  const tables = mode === 'merveilleux' ? TABLES_MERVEILLEUX : TABLES_REEL;

  // Motivation : pool enrichi pour les veufs + entrées DB
  const baseMotivations = (situationMatrimoniale === 'veuf' && mode === 'reel')
    ? [...TABLES_REEL.motivations, ...TABLES_REEL.motivationsVeuf]
    : tables.motivations;
  const poolMotivations = merge(baseMotivations, dbEntries, 'motivations');

  const prenom  = getPrenom(sexe, mode, nationalite, typeFee);
  const nom     = getNom(mode, nationalite, typeFee);
  const titre   = tirage(mode === 'merveilleux' ? tableMerveilleux(typeFee, 'titres') : TABLES_REEL.titres);
  const metier  = getMetier(mode, trancheAge, typeFee, sexe, dbEntries);
  // Distribution en cloche sur les traits (neutre > extrêmes), comme le d4+d10 de CC
  const traitPool = merge(tableMerveilleux(typeFee, 'traits') || tables.traits, dbEntries, 'traits');
  const rawTraits = [tirageCloche(traitPool), tirageCloche(traitPool)]
    .filter((v, i, a) => a.findIndex(t => resolveText(t, sexe) === resolveText(v, sexe)) === i);
  const traits = rawTraits.map(t => resolveText(t, sexe) || resolveText(t, 'masculin') || '');

  const rawApparence  = tiragePondere(merge(tableMerveilleux(typeFee, 'apparences') || tables.apparences, dbEntries, 'apparences'));
  const rawMotivation = tiragePondere(poolMotivations);
  const apparence     = resolveText(rawApparence,  sexe) ?? rawApparence;
  const motivation    = resolveText(rawMotivation, sexe) ?? rawMotivation;
  const relation   = tiragePondere(tables.relations);
  const lieu       = tiragePondere(tableMerveilleux(typeFee, 'lieux') || tables.lieux);
  const baseSecrets  = merge(TABLES_REEL.secrets, dbEntries, 'secrets');
  const rawSecret    = mode === 'reel' ? getSecret(mode, metier, baseSecrets) : tiragePondere(tables.secrets);
  const secret       = resolveText(rawSecret, sexe) ?? rawSecret;

  const rawComportement = getComportement(mode, dbEntries);
  const comportement    = resolveText(rawComportement, sexe) ?? rawComportement;

  // Score de polarité (1 = très sombre → 10 = très lumineux)
  const polarites = {
    traits:       rawTraits.map(t => getPolarity(t)),
    motivation:   getPolarity(rawMotivation),
    secret:       getPolarity(rawSecret),
    comportement: getPolarity(rawComportement),
  };
  const polariteScore = computePolariteScore(polarites);

  // Champs spécifiques au mode merveilleux
  const apparenceMasquee   = mode === 'merveilleux' ? tirage(TABLES_MERVEILLEUX.apparencesMasquees) : null;
  const apparenceDemasquee = mode === 'merveilleux' ? tirage(tableMerveilleux(typeFee, 'apparencesDemasquees') || TABLES_MERVEILLEUX.apparencesDemasquees) : null;

  // Raison de présence à Paris si nationalité étrangère
  const raisonPresence = (mode === 'reel' && nationalite && nationalite !== 'francaise')
    ? tirage(NOMS_PAR_NATIONALITE[nationalite]?.raisonsPresence || [])
    : null;

  const pnj = {
    mode,
    typeFee,
    prenom,
    nom,
    titre,
    metier,
    traits,
    apparence,
    motivation,
    relation,
    lieu,
    secret,
    phobie:       getPhobie(mode, dbEntries),
    hobby:        getHobby(mode, dbEntries),
    comportement,
    polarites,
    polariteScore,
    apparenceMasquee,
    apparenceDemasquee,
    sexe,
    genre,
    trancheAge,
    nationalite,
    raisonPresence,
    situationMatrimoniale,
    situationFamiliale,
  };

  return corrigerCoherence(pnj);
}

/**
 * Reroll un seul champ du PNJ, en respectant les contraintes existantes.
 * @param {Object} pnj - PNJ actuel
 * @param {string} champ - Nom du champ à retirer
 */
export function rerollChamp(pnj, champ, dbEntries = {}) {
  if (pnj.mode === 'biographique' && (champ === 'sexe' || champ === 'nationalite')) {
    const { sexeId, nationaliteId, historique } = genererHistorique();
    const newPrenom = getPrenom(sexeId, 'reel', nationaliteId, null);
    const newNom    = getNom('reel', nationaliteId, null);
    const newMetier = getMetier('reel', pnj.trancheAge, null, sexeId, dbEntries);
    return { ...pnj, sexe: sexeId, nationalite: nationaliteId,
             prenom: newPrenom, nom: newNom, metier: newMetier, historique,
             raisonPresence: historique.origines.raisonPresence ?? null };
  }

  const { mode, typeFee, trancheAge, situationMatrimoniale, nationalite } = pnj;
  const tables = mode === 'merveilleux' ? TABLES_MERVEILLEUX : TABLES_REEL;

  let valeur;
  switch (champ) {
    case 'prenom':
      valeur = getPrenom(pnj.sexe, mode, nationalite, typeFee);
      break;
    case 'nom':
      valeur = getNom(mode, nationalite, typeFee);
      break;
    case 'titre':
      valeur = tirage(mode === 'merveilleux' ? tableMerveilleux(typeFee, 'titres') : TABLES_REEL.titres);
      break;
    case 'metier':
      valeur = getMetier(mode, trancheAge, typeFee, pnj.sexe, dbEntries);
      break;
    case 'traits': {
      const pool = merge(tableMerveilleux(typeFee, 'traits') || tables.traits, dbEntries, 'traits');
      valeur = [tirageCloche(pool), tirageCloche(pool)].filter((v, i, a) => a.indexOf(v) === i);
      break;
    }
    case 'apparence':
      valeur = tiragePondere(merge(tableMerveilleux(typeFee, 'apparences') || tables.apparences, dbEntries, 'apparences'));
      break;
    case 'motivation': {
      const base = (situationMatrimoniale === 'veuf' && mode === 'reel')
        ? [...TABLES_REEL.motivations, ...TABLES_REEL.motivationsVeuf]
        : tables.motivations;
      valeur = tiragePondere(merge(base, dbEntries, 'motivations'));
      break;
    }
    case 'relation':
      valeur = tiragePondere(tables.relations);
      break;
    case 'lieu':
      valeur = tiragePondere(tableMerveilleux(typeFee, 'lieux') || tables.lieux);
      break;
    case 'secret':
      valeur = getSecret(mode, pnj.metier, merge(TABLES_REEL.secrets, dbEntries, 'secrets'));
      break;
    case 'phobie':
      valeur = getPhobie(mode, dbEntries);
      break;
    case 'hobby':
      valeur = getHobby(mode, dbEntries);
      break;
    case 'comportement':
      valeur = getComportement(mode, dbEntries);
      break;
    case 'apparenceMasquee':
      valeur = tirage(TABLES_MERVEILLEUX.apparencesMasquees);
      break;
    case 'apparenceDemasquee':
      valeur = tirage(tableMerveilleux(typeFee, 'apparencesDemasquees') || TABLES_MERVEILLEUX.apparencesDemasquees);
      break;
    case 'sexe': {
      const newSexe = tiragePondere(merge(SEXES, dbEntries, 'sexes')).id;
      const newPrenom = getPrenom(newSexe, mode, nationalite, typeFee);
      const newMetier = getMetier(mode, pnj.trancheAge, typeFee, newSexe, dbEntries);
      return corrigerCoherence({ ...pnj, sexe: newSexe, prenom: newPrenom, metier: newMetier });
    }
    case 'genre':
      valeur = tiragePondere(merge(
        GENRES.filter(g => mode === 'merveilleux' ? true : g.id !== 'indetermine'),
        dbEntries, 'genres'
      )).id;
      break;
    case 'trancheAge':
      valeur = tiragePondere(merge(TRANCHES_AGE, dbEntries, 'tranches_age')).id;
      return corrigerCoherence({ ...pnj, trancheAge: valeur, metier: getMetier(mode, valeur, typeFee, pnj.sexe, dbEntries) });
    case 'nationalite': {
      const newNat = tiragePondere(merge(NATIONALITES, dbEntries, 'nationalites')).id;
      const newPrenom2 = getPrenom(pnj.sexe, mode, newNat, typeFee);
      const newNom = getNom(mode, newNat, typeFee);
      const newRaison = (newNat && newNat !== 'francaise') ? tirage(NOMS_PAR_NATIONALITE[newNat]?.raisonsPresence || []) : null;
      return corrigerCoherence({ ...pnj, nationalite: newNat, prenom: newPrenom2, nom: newNom, raisonPresence: newRaison });
    }
    case 'situationMatrimoniale':
      valeur = tiragePondere(merge(SITUATIONS_MATRIMONIALES, dbEntries, 'situations_matrimoniales')).id;
      break;
    case 'situationFamiliale':
      valeur = tiragePondere(merge(SITUATIONS_FAMILIALES, dbEntries, 'situations_familiales')).id;
      return corrigerCoherence({ ...pnj, situationFamiliale: valeur });
    default:
      return pnj;
  }

  return { ...pnj, [champ]: valeur };
}

// ─── FORMATAGE POUR SAUVEGARDE ───────────────────────────────────────────────

/**
 * Convertit un PNJ généré en payload pour la table Supabase `figures`.
 */
export function pnjVersPayloadFigure(pnj) {
  const nomComplet = pnj.titre
    ? `${pnj.titre} ${pnj.prenom} ${pnj.nom}`
    : `${pnj.prenom} ${pnj.nom}`;

  const trancheLabel = TRANCHES_AGE.find(t => t.id === pnj.trancheAge)?.fourchette || '';
  const natLabel     = NATIONALITES.find(n => n.id === pnj.nationalite)?.label || '';
  const genreLabel   = GENRES.find(g => g.id === pnj.genre)?.description || '';
  const maritalLabel = accordLabel(SITUATIONS_MATRIMONIALES.find(s => s.id === pnj.situationMatrimoniale), pnj.sexe);
  const familleLabel = accordLabel(SITUATIONS_FAMILIALES.find(s => s.id === pnj.situationFamiliale), pnj.sexe);

  const lignes = [];

  if (pnj.historique) {
    const h = pnj.historique;
    const maitrise = {
      natif: 'natif', parfait: 'parfait',
      baragouine: 'baragouine', aucun: 'aucun',
    }[h.origines.maitriseFrancais] ?? h.origines.maitriseFrancais;

    lignes.push('── Historique ──');
    lignes.push(`Origines : ${h.origines.nationalite} — ${h.formation.culture} — ${h.formation.techLevel}`);
    if (h.origines.estImmigre) {
      lignes.push(`Français : ${maitrise}${h.origines.raisonPresence ? ` — ${h.origines.raisonPresence}` : ''}`);
    }
    lignes.push(`Milieu : ${h.milieu.statutSocial} — ${h.milieu.structureFoyer} — ${h.milieu.rangNaissance}`);
    if (!h.milieu.legitime) lignes.push('Naissance illégitime.');
    lignes.push(`Naissance : ${h.naissance.lieuPrecis}`);
    h.naissance.evenements.forEach(e => lignes.push(`  → ${e}`));
    lignes.push(`Parents : ${h.parents.configurationMetier}`);
    h.parents.faitsNotables.forEach(f => lignes.push(`  → ${f}`));
    if (h.jeunesse.enfance.length > 0) {
      lignes.push('Enfance :');
      h.jeunesse.enfance.forEach(e => lignes.push(`  ${e}`));
    }
    if (h.jeunesse.adolescence.length > 0) {
      lignes.push('Adolescence :');
      h.jeunesse.adolescence.forEach(e => lignes.push(`  ${e}`));
    }
    lignes.push('');
  }

  lignes.push(`Métier : ${pnj.metier}${trancheLabel ? ` (${trancheLabel})` : ''}`);
  if (pnj.typeFee) lignes.push(`Type de fée : ${pnj.typeFee}`);
  if (natLabel && natLabel !== 'Française') {
    lignes.push(`Nationalité : ${natLabel}${pnj.raisonPresence ? ` — ${pnj.raisonPresence}` : ''}`);
  }
  if (genreLabel !== 'présentation conforme aux usages de l\'époque') {
    lignes.push(`Présentation : ${genreLabel}`);
  }
  lignes.push(`Situation : ${maritalLabel}${familleLabel ? `, ${familleLabel}` : ''}`);
  lignes.push('');

  lignes.push(`Traits : ${pnj.traits.join(', ')}.`);
  lignes.push(`Apparence : ${pnj.apparence}.`);
  lignes.push(`Motivation : ${pnj.motivation}.`);
  lignes.push(`Relation aux joueurs : ${pnj.relation}.`);
  lignes.push(`Lieu de rencontre : ${pnj.lieu}.`);
  lignes.push('');

  if (pnj.phobie) lignes.push(`Peur / Phobie : ${pnj.phobie}.`);
  if (pnj.hobby) lignes.push(`Passion / Passe-temps : ${pnj.hobby}.`);
  if (pnj.comportement) lignes.push(`Comportement distinctif : ${pnj.comportement}.`);

  if (pnj.apparenceMasquee) lignes.push(`Apparence masquée : ${pnj.apparenceMasquee}.`);
  if (pnj.apparenceDemasquee) lignes.push(`Apparence démasquée : ${pnj.apparenceDemasquee}.`);

  lignes.push('');
  lignes.push(`Secret : ${pnj.secret}.`);

  return {
    name: nomComplet,
    titre: pnj.titre || null,
    faux_semblant: pnj.mode === 'merveilleux',
    faux_semblant_type_fee: pnj.typeFee || null,
    apparence_masquee: pnj.apparenceMasquee || pnj.apparence,
    apparence_demasquee: pnj.apparenceDemasquee || null,
    description: lignes.join('\n'),
    is_official: false,
    data: {
      metier:                 pnj.metier,
      tranche_age:            pnj.trancheAge,
      sexe:                   pnj.sexe,
      genre:                  pnj.genre,
      nationalite:            pnj.nationalite,
      raison_presence:        pnj.raisonPresence,
      traits:                 pnj.traits,
      secret:                 pnj.secret,
      apparence:              pnj.apparence,
      motivation:             pnj.motivation,
      relation:               pnj.relation,
      lieu:                   pnj.lieu,
      situation_matrimoniale: pnj.situationMatrimoniale,
      situation_familiale:    pnj.situationFamiliale,
      phobie:                 pnj.phobie,
      hobby:                  pnj.hobby,
      comportement:           pnj.comportement,
      apparence_masquee:      pnj.apparenceMasquee,
      apparence_demasquee:    pnj.apparenceDemasquee,
      polarite_score:         pnj.polariteScore,
      mode:                   pnj.mode,
      type_fee:               pnj.typeFee,
      generated_by:           'random',
      historique:             pnj.historique ?? null,
    },
  };
}
