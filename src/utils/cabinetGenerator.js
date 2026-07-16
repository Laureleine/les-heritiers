import { supabase } from '../config/supabase';

const POIDS_RARETE = { tres_frequent: 100, frequent: 70, peu_frequent: 40, rare: 15, extremement_rare: 2 };

function tirerParPoids(liste) {
  const total = liste.reduce((s, x) => s + (POIDS_RARETE[x.rarete] || 50), 0);
  let r = Math.random() * total;
  for (const x of liste) {
    r -= POIDS_RARETE[x.rarete] || 50;
    if (r <= 0) return x;
  }
  return liste[0];
}

function tirerAuHasard(liste) {
  return liste[Math.floor(Math.random() * liste.length)];
}

async function fetchNom(genre) {
  const { data: prenoms } = await supabase.from('cabinet_noms').select('prenom').eq('genre', genre);
  const { data: noms } = await supabase.from('cabinet_noms').select('nom');
  return `${tirerAuHasard(prenoms).prenom} ${tirerAuHasard(noms).nom}`;
}

async function fetchBackground(genre) {
  const { data } = await supabase.from('cabinet_backgrounds').select('*').in('genre', [genre, 'Mixte']);
  return tirerParPoids(data || []);
}

async function fetchPathologie(groupeCible, genre) {
  const { data } = await supabase.from('cabinet_pathologies').select('*')
    .in('groupe_cible', [groupeCible, 'Tous'])
    .in('genre_autorise', [genre, 'Tous']);
  return tirerParPoids(data || []);
}

export async function genererConsultation(genreMedecin = 'M') {
  const typesConsult = [
    { type: 'Homme Seul',                      poids: genreMedecin === 'F' ? 5 : 40 },
    { type: 'Femme Seule',                      poids: genreMedecin === 'F' ? 70 : 30 },
    { type: 'Homme accompagnant sa femme',      poids: 20 },
    { type: 'Homme accompagnant un parent âgé', poids: 10 },
  ];
  const totalType = typesConsult.reduce((s, t) => s + t.poids, 0);
  let r = Math.random() * totalType;
  let typeConsult = typesConsult[0].type;
  for (const t of typesConsult) {
    r -= t.poids;
    if (r <= 0) { typeConsult = t.type; break; }
  }

  const genrePrincipal = typeConsult.startsWith('Homme') ? 'M' : 'F';
  const bg = await fetchBackground(genrePrincipal);
  const nomPrincipal = await fetchNom(genrePrincipal);
  const agePrincipal = Math.floor(Math.random() * (bg.age_max - bg.age_min + 1)) + bg.age_min;

  const principal = { nom: nomPrincipal, age: agePrincipal, classe: bg.classe_sociale, profession: bg.profession };

  if (typeConsult === 'Homme Seul' || typeConsult === 'Femme Seule') {
    const groupeCible = agePrincipal > 65 ? 'Vieillard' : 'Adulte';
    const patho = await fetchPathologie(groupeCible, genrePrincipal);
    return {
      type: typeConsult,
      principal,
      diagnostic: { malade: 'Le consultant lui-même', ...patho },
      psychologie: {
        perception: 'Le patient gère son mal seul.',
        comportement: genrePrincipal === 'M'
          ? "L'homme dissimule sa douleur par fierté virile, il refuse d'enlever sa chemise pour l'auscultation."
          : "La femme s'excuse de déranger le médecin pour si peu.",
      },
    };
  }

  if (typeConsult === 'Homme accompagnant sa femme') {
    const nomEpouse = await fetchNom('F');
    const ageEpouse = Math.max(18, agePrincipal - Math.floor(Math.random() * 8));
    const patho = await fetchPathologie('Adulte', 'F');
    return {
      type: typeConsult,
      principal,
      secondaire: { nom: `${nomEpouse.split(' ')[0]} ${nomPrincipal.split(' ')[1]}`, age: ageEpouse, statut: 'Épouse' },
      diagnostic: { malade: "L'épouse", ...patho },
      psychologie: {
        perceptionMari: "L'homme monopolise la parole et répond à la place de sa femme. Il soupçonne une simulation ou exige une guérison rapide pour qu'elle reprenne ses devoirs.",
        perceptionEpouse: "La femme reste totalement prostrée, fuyant le regard du médecin. Elle feint de minimiser pour ne pas contrarier son époux ou par honte d'exposer son corps.",
        dynamique: "L'homme se comporte en propriétaire autoritaire. Si le médecin est un homme, le mari surveille nerveusement chaque contact physique de l'auscultation.",
      },
    };
  }

  // Homme accompagnant un parent âgé
  const genreParent = Math.random() < 0.5 ? 'M' : 'F';
  const nomParent = await fetchNom(genreParent);
  const ageParent = agePrincipal + Math.floor(Math.random() * 25) + 20;
  const patho = await fetchPathologie('Vieillard', genreParent);
  return {
    type: typeConsult,
    principal,
    secondaire: { nom: `${nomParent.split(' ')[0]} ${nomPrincipal.split(' ')[1]}`, age: ageParent, statut: genreParent === 'M' ? 'Père' : 'Mère' },
    diagnostic: { malade: 'Le parent âgé', ...patho },
    psychologie: {
      perceptionFils: "Le fils montre des signes flagrants d'agacement ou d'épuisement. Il considère son parent comme un fardeau financier et logistique, et cherche surtout un moyen de le calmer ou de le placer.",
      perceptionParent: "Le vieillard est terrifié d'être abandonné à l'hospice. Il alterne entre phases de lucidité suppliante et mutisme sénile.",
    },
  };
}
