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

export function filtrerPlatsPourService(plats, service, { niveauFinancier, saison, nbConvives }) {
  return plats.filter((p) => (
    p.categorie === service.categorie
    && p.niveaux.includes(niveauFinancier)
    && p.saisons.includes(saison)
    && (p.nb_convives_min == null || nbConvives >= p.nb_convives_min)
    && (p.nb_convives_max == null || nbConvives <= p.nb_convives_max)
  ));
}

export function genererMenu({ structure, plats, niveauFinancier, saison, nbConvives }) {
  const texteIntro = tirage(structure.textes_intro);
  const services = structure.services.map((service) => {
    const candidats = filtrerPlatsPourService(plats, service, { niveauFinancier, saison, nbConvives });
    return {
      ...service,
      plats: tirageMultiple(candidats, service.nb_plats),
    };
  });
  return { texteIntro, services };
}

export function rerollService(menu, plats, structure, serviceId, { niveauFinancier, saison, nbConvives }) {
  const serviceDef = structure.services.find((s) => s.id === serviceId);
  if (!serviceDef) return menu;
  const candidats = filtrerPlatsPourService(plats, serviceDef, { niveauFinancier, saison, nbConvives });
  return {
    ...menu,
    services: menu.services.map((s) => (
      s.id === serviceId ? { ...s, plats: tirageMultiple(candidats, serviceDef.nb_plats) } : s
    )),
  };
}

export function rerollPlat(menu, plats, structure, serviceId, platIndex, { niveauFinancier, saison, nbConvives }) {
  const serviceDef = structure.services.find((s) => s.id === serviceId);
  if (!serviceDef) return menu;
  const service = menu.services.find((s) => s.id === serviceId);
  const platActuelId = service.plats[platIndex]?.id;
  const autresChoisis = new Set(service.plats.filter((_, i) => i !== platIndex).map((p) => p.id));
  const candidats = filtrerPlatsPourService(plats, serviceDef, { niveauFinancier, saison, nbConvives })
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
