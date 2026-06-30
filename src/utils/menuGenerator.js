// src/utils/menuGenerator.js
// Logique pure de génération de menu et de résolution culinaire — sans dépendance Supabase.

export function tirage(tableau) {
  if (!tableau || tableau.length === 0) return null;
  return tableau[Math.floor(Math.random() * tableau.length)];
}

export function tirageMultiple(tableau, n) {
  if (!tableau || tableau.length === 0) return [];
  const pool = [...tableau];
  const resultat = [];
  const count = Math.min(n, pool.length);
  for (let i = 0; i < count; i++) {
    const index = Math.floor(Math.random() * pool.length);
    resultat.push(pool.splice(index, 1)[0]);
  }
  return resultat;
}

export function calculerTranche(typeRepas, nbConvives) {
  if (typeRepas === 'petit_dejeuner' || typeRepas === 'gouter') return 'intime';
  if (typeRepas === 'banquet') return 'banquet';
  if (nbConvives >= 13) return 'banquet';
  if (nbConvives >= 5) return 'tablee';
  return 'intime';
}

export function seuilDifficulte(difficulte) {
  return 6 + difficulte * 2;
}

export function resoudrePlat(difficulte, niveauCuisinier) {
  const de = 1 + Math.floor(Math.random() * 10);
  const total = de + niveauCuisinier;
  const seuil = seuilDifficulte(difficulte);
  let issue;
  if (total >= seuil + 7) issue = 'reussite_critique';
  else if (total >= seuil) issue = 'reussite';
  else if (total <= seuil - 7) issue = 'echec_critique';
  else issue = 'echec';
  return { de, total, seuil, issue };
}

// ─── COHÉRENCE DE STANDING SOCIAL (1899) ──────────────────────────────────
// Au-delà du simple tag `niveaux` en base, certains plats restent déplacés
// à une table de grande bourgeoisie ou d'aristocratie selon le type de repas,
// même quand ils sont historiquement consommés par cette classe en privé.
// Ces règles affinent le tirage par mots-clés sur le nom du plat.

const NIVEAUX_HAUTS = ['grande_bourgeoisie', 'aristocratie'];

function normaliser(texte) {
  return texte
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();
}

function contientMotCle(nom, motsCles) {
  const n = normaliser(nom);
  return motsCles.some((mot) => n.includes(normaliser(mot)));
}

// Règle — Hors-d'œuvre trop simples pour un dîner/banquet de haut rang.
const HORS_DOEUVRE_TROP_SIMPLES = ['jambon', 'rillettes', 'crudités', 'museau', 'harengs', 'anchois marinés'];

// Règle — Légumes/accompagnements trop rustiques ou régionaux pour la grande bourgeoisie/aristocratie.
const LEGUMES_TROP_RUSTIQUES = ['dauphinois', 'pot-au-feu', 'purée de pommes de terre'];

// Règle — Fromages trop typés populaires/régionaux (odeur forte ou alpage/garde rustique),
// exclus pour les hauts niveaux ; classiques des salons parisiens vers lesquels on force la sélection.
const FROMAGES_TROP_RUSTIQUES = ['munster', 'livarot', 'reblochon', 'comté', 'comte', 'beaufort'];
const FROMAGES_SALONS_PARISIENS = ['brie', 'roquefort', 'camembert', "mont-d'or", 'mont d\'or'];

// Règle — Éviter de doubler une grosse pâtisserie en entremets ET en dessert.
const PATISSERIES_LOURDES = [
  "riz a l'imperatrice", 'charlotte', 'souffle', 'pudding', 'paris-brest', 'saint-honore',
  'mille-feuille', 'savarin', 'baba', 'religieuse', 'opera', 'eclair', 'gateau',
];
const DESSERTS_LEGERS = ['sorbet', 'fruits', 'fraises', 'macarons', 'glace', 'compote', 'chocolats fins', 'petits fours'];

// Règle — Une introduction narrative évoquant la haute noblesse/l'ancienneté de la maison
// verrouille le niveau financier utilisé pour le choix des plats sur 'aristocratie',
// même si la structure de repas tirée était cataloguée à un niveau financier inférieur.
const MOTS_HAUTE_NOBLESSE = ['armoiries', 'ancestral', 'ancestrale', 'ancienneté', 'lignée', 'blason'];

export function determinerNiveauEffectif(texteIntro, niveauFinancier) {
  if (texteIntro && contientMotCle(texteIntro, MOTS_HAUTE_NOBLESSE)) return 'aristocratie';
  return niveauFinancier;
}

function exclureMotsCles(candidats, motsClesExclus) {
  const filtres = candidats.filter((p) => !contientMotCle(p.nom, motsClesExclus));
  // Garde-fou : si l'exclusion vide le pool, on revient au pool d'origine plutôt que de bloquer le tirage.
  return filtres.length > 0 ? filtres : candidats;
}

/**
 * Applique les règles de cohérence sociale (1899) à un pool de candidats déjà
 * filtré par `filtrerPlatsPourService`. N'agit que pour les niveaux financiers
 * élevés (grande bourgeoisie / aristocratie) ; ne touche pas aux autres niveaux.
 */
export function appliquerStandingSocial(candidats, plats, service, { niveauFinancier, typeRepas, saison }) {
  if (!NIVEAUX_HAUTS.includes(niveauFinancier)) return candidats;

  if (service.categorie === 'hors_d_oeuvre' && (typeRepas === 'diner' || typeRepas === 'banquet')) {
    return exclureMotsCles(candidats, HORS_DOEUVRE_TROP_SIMPLES);
  }

  if (service.categorie === 'legume') {
    return exclureMotsCles(candidats, LEGUMES_TROP_RUSTIQUES);
  }

  if (service.categorie === 'fromage') {
    const sansRustiques = candidats.filter((p) => !contientMotCle(p.nom, FROMAGES_TROP_RUSTIQUES));
    // On force l'entrée des classiques des salons parisiens, même si leur tag `niveaux`
    // ne couvre pas (encore) ce niveau financier en base.
    const dejaPresents = new Set(sansRustiques.map((p) => p.id));
    const classiquesSalons = plats.filter((p) => (
      p.categorie === 'fromage'
      && p.saisons.includes(saison)
      && contientMotCle(p.nom, FROMAGES_SALONS_PARISIENS)
      && !dejaPresents.has(p.id)
    ));
    const resultat = [...sansRustiques, ...classiquesSalons];
    return resultat.length > 0 ? resultat : candidats;
  }

  return candidats;
}

/**
 * Règle 4 — Si un entremets déjà tiré est une pâtisserie lourde, restreint le
 * service "dessert" à des propositions légères (fruits, sorbets, macarons...).
 */
function appliquerReglesDoublonDessert(candidats, service, servicesDejaTires) {
  if (service.categorie !== 'dessert') return candidats;
  const entremets = servicesDejaTires.find((s) => s.categorie === 'entremets');
  if (!entremets) return candidats;
  const entremetsLourd = entremets.plats.some((p) => contientMotCle(p.nom, PATISSERIES_LOURDES));
  if (!entremetsLourd) return candidats;
  const legers = candidats.filter((p) => contientMotCle(p.nom, DESSERTS_LEGERS));
  return legers.length > 0 ? legers : candidats;
}

/**
 * Garde-fou — la case "Légume" d'une structure ne doit jamais sortir vide.
 * Si le tirage normal (niveau + saison + convives, puis règles sociales) ne
 * trouve rien, on relâche d'abord la saison et les bornes de convives en
 * gardant le niveau financier ; en tout dernier recours, n'importe quel
 * légume du corpus est accepté plutôt que de laisser le service vide.
 */
function garantirLegumeNonVide(candidats, plats, service, { niveauFinancier }) {
  if (service.categorie !== 'legume' || candidats.length > 0) return candidats;
  const repliNiveau = plats.filter((p) => p.categorie === 'legume' && p.niveaux.includes(niveauFinancier));
  if (repliNiveau.length > 0) return repliNiveau;
  return plats.filter((p) => p.categorie === 'legume');
}

function selectionnerCandidats(plats, service, criteres, servicesDejaTires) {
  let candidats = filtrerPlatsPourService(plats, service, criteres);
  candidats = appliquerStandingSocial(candidats, plats, service, criteres);
  candidats = appliquerReglesDoublonDessert(candidats, service, servicesDejaTires);
  candidats = garantirLegumeNonVide(candidats, plats, service, criteres);
  return candidats;
}

export function filtrerPlatsPourService(plats, service, { niveauFinancier, saison, nbConvives }) {
  return plats.filter((p) => (
    p.categorie === service.categorie
    && p.niveaux.includes(niveauFinancier)
    && p.saisons.includes(saison)
    && (p.nb_convives_min == null || nbConvives >= p.nb_convives_min)
    && (p.nb_convives_max == null || nbConvives <= p.nb_convives_max)
  ));
}

export function genererMenu({ structure, plats, niveauFinancier, saison, nbConvives, typeRepas }) {
  const texteIntro = tirage(structure.textes_intro);
  const niveauFinancierEffectif = determinerNiveauEffectif(texteIntro, niveauFinancier);
  const criteres = { niveauFinancier: niveauFinancierEffectif, saison, nbConvives, typeRepas };
  const services = [];
  for (const service of structure.services) {
    const candidats = selectionnerCandidats(plats, service, criteres, services);
    services.push({ ...service, plats: tirageMultiple(candidats, service.nb_plats) });
  }
  return { texteIntro, services, niveauFinancierEffectif };
}

export function rerollService(menu, plats, structure, serviceId, { niveauFinancier, saison, nbConvives, typeRepas }) {
  const serviceDef = structure.services.find((s) => s.id === serviceId);
  if (!serviceDef) return menu;
  const niveauFinancierEffectif = menu.niveauFinancierEffectif ?? niveauFinancier;
  const criteres = { niveauFinancier: niveauFinancierEffectif, saison, nbConvives, typeRepas };
  const autresServicesDejaTires = menu.services.filter((s) => s.id !== serviceId);
  const candidats = selectionnerCandidats(plats, serviceDef, criteres, autresServicesDejaTires);
  return {
    ...menu,
    services: menu.services.map((s) => (
      s.id === serviceId ? { ...s, plats: tirageMultiple(candidats, serviceDef.nb_plats) } : s
    )),
  };
}

export function rerollPlat(menu, plats, structure, serviceId, platIndex, { niveauFinancier, saison, nbConvives, typeRepas }) {
  const serviceDef = structure.services.find((s) => s.id === serviceId);
  if (!serviceDef) return menu;
  const service = menu.services.find((s) => s.id === serviceId);
  const platActuelId = service.plats[platIndex]?.id;
  const autresChoisis = new Set(service.plats.filter((_, i) => i !== platIndex).map((p) => p.id));
  const niveauFinancierEffectif = menu.niveauFinancierEffectif ?? niveauFinancier;
  const criteres = { niveauFinancier: niveauFinancierEffectif, saison, nbConvives, typeRepas };
  const autresServicesDejaTires = menu.services.filter((s) => s.id !== serviceId);
  const candidats = selectionnerCandidats(plats, serviceDef, criteres, autresServicesDejaTires)
    .filter((p) => !autresChoisis.has(p.id));
  // On préfère un plat différent du précédent ; à défaut (aucune alternative), on autorise le même.
  const sansActuel = candidats.filter((p) => p.id !== platActuelId);
  const nouveauPlat = tirage(sansActuel.length > 0 ? sansActuel : candidats);
  if (!nouveauPlat) return menu;
  return {
    ...menu,
    services: menu.services.map((s) => (
      s.id === serviceId
        ? { ...s, plats: s.plats.map((p, i) => (i === platIndex ? nouveauPlat : p)) }
        : s
    )),
  };
}
