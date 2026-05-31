// scripts/seed_all_holidays.js
// Seed toutes les fêtes de 1899 à 1914 inclus (chrétiennes fixes, mobiles, celtiques, saints)
const { Client } = require('pg');
require('dotenv').config();
const { saints, saintsFeb29 } = require('./saints_data');

const connectionString = process.env.SUPABASE_DB_URL;
if (!connectionString) {
  console.error("❌ SUPABASE_DB_URL manquante");
  process.exit(1);
}

const client = new Client({ connectionString });

// ─── Algorithme de Pâques (méthode de Gauss / Anonymous Gregorian) ───
function easterDate(year) {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day);
}

function formatDate(y, m, d) {
  const mm = String(m).padStart(2, '0');
  const dd = String(d).padStart(2, '0');
  return `${y}-${mm}-${dd}`;
}

// ─── Modèles de fêtes ───

// Fêtes chrétiennes fixes (MM-DD)
const fixedChristian = [
  { mmdd: '01-01', name: 'Circoncision de Jésus — Nouvel An', type: 'chrétien',
    desc: 'Huitième jour après Noël, la Circoncision de Jésus est une fête liturgique majeure. Dans la France de la Belle Époque, le 1er janvier est aussi le jour des étrennes et des vœux.',
    trad: 'Échange de vœux et d\'étrennes, messe solennelle, repas de famille, ouverture des calendriers de l\'année nouvelle.' },
  { mmdd: '01-06', name: 'Épiphanie', type: 'chrétien',
    desc: 'Fête des Rois Mages commémorant la venue de Gaspard, Melchior et Balthazar auprès de l\'Enfant Jésus.',
    trad: 'Galette des Rois et partage de la fève, couronne en papier, messe de l\'Épiphanie, bénédiction des maisons à la craie.' },
  { mmdd: '02-02', name: 'Chandeleur', type: 'chrétien',
    desc: 'Présentation de Jésus au Temple et purification de la Vierge Marie. Fête de la Lumière, quarante jours après Noël.',
    trad: 'Bénédiction des cierges à l\'église, procession aux flambeaux, confection de crêpes, dicton : "À la Chandeleur, l\'hiver se meurt ou prend vigueur".' },
  { mmdd: '02-14', name: 'Saint-Valentin', type: 'chrétien',
    desc: 'Fête des amoureux en l\'honneur de saint Valentin, prêtre romain martyrisé au IIIe siècle. La tradition romantique est déjà bien implantée dans la société bourgeoise de la Belle Époque.',
    trad: 'Échange de cartes illustrées, offrandes de fleurs et de douceurs, déclarations d\'amour, bals et soirées dansantes.' },
  { mmdd: '03-19', name: 'Saint-Joseph', type: 'chrétien',
    desc: 'Fête de saint Joseph, époux de la Vierge Marie et père nourricier de Jésus. Patron des artisans et des travailleurs.',
    trad: 'Messe solennelle, bénédiction des outils de travail, processions de corps de métier, repas de fête dans les corporations.' },
  { mmdd: '03-25', name: 'Annonciation', type: 'chrétien',
    desc: 'L\'Ange Gabriel annonce à la Vierge Marie qu\'elle concevra Jésus. Exactement neuf mois avant Noël.',
    trad: 'Messe de l\'Annonciation, processions mariales, dans certaines régions plantation de l\'"arbre de l\'Annonciation".' },
  { mmdd: '04-23', name: 'Saint-Georges', type: 'chrétien',
    desc: 'Fête de saint Georges, martyr et soldat romain, célèbre pour avoir terrassé le dragon. Patron de l\'Angleterre et de la Catalogne.',
    trad: 'Processions, foires, port de la rose rouge, défilés et célébrations chevaleresques.' },
  { mmdd: '04-25', name: 'Saint-Marc', type: 'chrétien',
    desc: 'Fête de saint Marc l\'Évangéliste, auteur du second Évangile et fondateur de l\'Église d\'Alexandrie.',
    trad: 'Messe solennelle, processions des Rogations débutant à la Saint-Marc pour bénir les cultures, litanies des saints.' },
  { mmdd: '06-24', name: 'Nativité de saint Jean-Baptiste', type: 'chrétien',
    desc: 'Fête de la naissance de Jean-Baptiste, exactement six mois avant Noël. Coïncide avec le solstice d\'été et les traditions païennes du feu.',
    trad: 'Grands feux de la Saint-Jean, sauts par-dessus le feu, bals populaires, récolte des herbes de saint Jean, messe solennelle.' },
  { mmdd: '06-29', name: 'Saint-Pierre et Saint-Paul', type: 'chrétien',
    desc: 'Fête des deux plus grands apôtres : Pierre, le premier pape, et Paul, l\'apôtre des nations.',
    trad: 'Messe papale à Rome, bénédiction des palliums, processions, foires et kermesses, bénédiction des bateaux de pêche.' },
  { mmdd: '07-14', name: 'Fête nationale française', type: 'chrétien',
    desc: 'Anniversaire de la prise de la Bastille (1789) et de la Fête de la Fédération (1790). La IIIe République en fait une fête nationale depuis 1880.',
    trad: 'Défilés militaires, feux d\'artifice, bals populaires, guinguettes, discours républicains, drapeaux tricolores aux fenêtres.' },
  { mmdd: '07-22', name: 'Sainte-Marie-Madeleine', type: 'chrétien',
    desc: 'Fête de Marie de Magdala, disciple de Jésus, présente au pied de la Croix et première témoin de la Résurrection.',
    trad: 'Pèlerinage en Provence à Saint-Maximin-la-Sainte-Baume, processions, messes solennelles, dévotion des parfumeurs.' },
  { mmdd: '08-15', name: 'Assomption de la Vierge Marie', type: 'chrétien',
    desc: 'La Vierge Marie est élevée corps et âme au ciel au terme de sa vie terrestre. Dogme proclamé en 1850. Jour férié dans la France de la Belle Époque.',
    trad: 'Messe solennelle, processions mariales, pèlerinage à Lourdes, décorations florales, feu d\'artifice dans les villages.' },
  { mmdd: '09-08', name: 'Nativité de la Vierge Marie', type: 'chrétien',
    desc: 'Fête de la naissance de la Vierge Marie, neuf mois après l\'Immaculée Conception (8 décembre).',
    trad: 'Messes, processions, foires et fêtes de village, bénédiction des semences d\'automne.' },
  { mmdd: '09-29', name: 'Saint-Michel', type: 'chrétien',
    desc: 'Fête de l\'archange Michel, vainqueur de Satan et gardien du Paradis. Patron de la France et des guerriers.',
    trad: 'Pèlerinage au Mont-Saint-Michel, messes solennelles, foires de la Saint-Michel, dicton : "À la Saint-Michel, on sème le blé nouveau".' },
  { mmdd: '10-18', name: 'Saint-Luc', type: 'chrétien',
    desc: 'Fête de saint Luc l\'Évangéliste, médecin et compagnon de Paul, patron des peintres et des médecins.',
    trad: 'Messe des artistes, bénédiction des instruments de médecine, vénération des icônes.' },
  { mmdd: '11-01', name: 'Toussaint', type: 'chrétien',
    desc: 'Fête de tous les saints, connus et inconnus. Instituée au VIIIe siècle, c\'est l\'une des fêtes les plus importantes du calendrier chrétien. Jour férié.',
    trad: 'Messe solennelle, procession aux flambeaux, crucifix ornés de feuillage et de fleurs.' },
  { mmdd: '11-02', name: 'Commémoration des fidèles défunts', type: 'chrétien',
    desc: 'Jour de prière pour tous les morts, institué par Odon de Cluny au Xe siècle. Grand jour de visite des cimetières.',
    trad: 'Visite des cimetières, dépôt de chrysanthèmes et de couronnes mortuaires, prières pour les défunts, bénédiction des tombes.' },
  { mmdd: '12-08', name: 'Immaculée Conception', type: 'chrétien',
    desc: 'La Vierge Marie est conçue sans le péché originel. Dogme proclamé par Pie IX en 1854.',
    trad: 'Messe solennelle, processions mariales, illumination des maisons (tradition lyonnaise depuis 1643), allumage des lumières de Noël.' },
  { mmdd: '12-25', name: 'Noël', type: 'chrétien',
    desc: 'Nativité de Jésus-Christ, la plus grande fête chrétienne après Pâques. Dans la France de la Belle Époque, Noël est avant tout une fête religieuse et familiale.',
    trad: 'Messe de minuit, crèche de Noël, sapin décoré, réveillon en famille, bûche de Noël, échange de cadeaux, treize desserts en Provence.' },
  { mmdd: '12-26', name: 'Saint-Étienne', type: 'chrétien',
    desc: 'Fête du premier martyr chrétien, Étienne, l\'un des sept diacres choisis par les Apôtres. Très célébrée en Alsace-Lorraine.',
    trad: 'Messe en l\'honneur du protonartyr, promenades et visites familiales, aumône aux pauvres.' },
];

// Fêtes chrétiennes mobiles (relatives à Pâques)
function generateMobileFeasts(easter, year) {
  const p = new Date(easter);
  const addDays = (d, n) => { const r = new Date(d); r.setDate(r.getDate() + n); return r; };
  return [
    { date: addDays(p, -47), name: 'Mardi Gras', type: 'chrétien',
      desc: 'Dernier jour de ripaille avant le Carême. L\'occasion de festoyer avant quarante jours de privations.',
      trad: 'Carnavals, déguisements, beignets, bugnes, gaufres, masques, confettis, chars décorés.' },
    { date: addDays(p, -46), name: 'Mercredi des Cendres', type: 'chrétien',
      desc: 'Entrée en Carême. Le prêtre marque le front des fidèles d\'une croix de cendres. Jeûne et abstinence obligatoires.',
      trad: 'Messe des Cendres, imposition des cendres, jeûne, abstinence de viande, début des 40 jours de privations.' },
    { date: addDays(p, -7), name: 'Dimanche des Rameaux', type: 'chrétien',
      desc: 'Entrée triomphale de Jésus à Jérusalem. Début de la Semaine Sainte.',
      trad: 'Bénédiction et procession des rameaux (buis, laurier, olivier), messe de la Passion, chants de l\'Hosanna.' },
    { date: addDays(p, -3), name: 'Jeudi Saint', type: 'chrétien',
      desc: 'Institution de l\'Eucharistie et du Sacerdoce lors de la Dernière Cène.',
      trad: 'Messe du soir (In Cena Domini), lavement des pieds, visite des reposoirs, adoration eucharistique nocturne.' },
    { date: addDays(p, -2), name: 'Vendredi Saint', type: 'chrétien',
      desc: 'Jour de la Passion et de la mort de Jésus sur la Croix. Jour de jeûne, de silence et de recueillement.',
      trad: 'Chemin de Croix, office de la Passion, vénération de la Croix, silence des cloches, processions de Pénitents.' },
    { date: p, name: 'Dimanche de Pâques', type: 'chrétien',
      desc: 'Résurrection de Jésus-Christ, la plus grande fête chrétienne. Victoire de la vie sur la mort, sommet de l\'année liturgique.',
      trad: 'Messe solennelle de la Résurrection, bénédiction des œufs et du pain pascal, chasse aux œufs, agneau pascal, repas de fête.' },
    { date: addDays(p, 1), name: 'Lundi de Pâques', type: 'chrétien',
      desc: 'Second jour de la fête de Pâques, jour férié.',
      trad: 'Repas de famille prolongé, jeux de plein air, promenades printanières, distribution d\'œufs décorés.' },
    { date: addDays(p, 39), name: 'Ascension', type: 'chrétien',
      desc: 'Quarante jours après Pâques, Jésus monte au ciel. Fête d\'obligation et jour férié.',
      trad: 'Messe solennelle, procession autour de l\'église, bénédiction des champs, dicton : "À l\'Ascension, l\'hiver prend son baston".' },
    { date: addDays(p, 49), name: 'Pentecôte', type: 'chrétien',
      desc: 'Descente du Saint-Esprit sur les Apôtres sous forme de langues de feu, cinquante jours après Pâques. Naissance de l\'Église.',
      trad: 'Messe de la Pentecôte, décorations rouges, veillée de prière, confirmation des baptisés.' },
    { date: addDays(p, 50), name: 'Lundi de Pentecôte', type: 'chrétien',
      desc: 'Second jour de la Pentecôte, jour férié. Souvent l\'occasion de pèlerinages et de fêtes de village.',
      trad: 'Pèlerinages, processions, kermesses paroissiales, bals, confréries du Saint-Esprit.' },
    { date: addDays(p, 56), name: 'Fête de la Sainte-Trinité', type: 'chrétien',
      desc: 'Premier dimanche après la Pentecôte, célébration du mystère de la Trinité.',
      trad: 'Messe de la Trinité, offices solennels dans les abbayes, bénédiction des enfants.' },
    { date: addDays(p, 60), name: 'Fête-Dieu (Corpus Christi)', type: 'chrétien',
      desc: 'Fête du Saint-Sacrement. Le Saint-Sacrement est porté en procession dans les rues décorées de branchages et de fleurs.',
      trad: 'Procession du Saint-Sacrement, reposoirs décorés, tapis de fleurs et de sciure colorée, fillettes en robe blanche semant des pétales.' },
    { date: addDays(p, 68), name: 'Fête du Sacré-Cœur', type: 'chrétien',
      desc: 'Dévotion au Cœur de Jésus, symbole de son amour infini. La basilique du Sacré-Cœur à Montmartre est en construction depuis 1875.',
      trad: 'Messe du Sacré-Cœur, consécration des familles, neuvaine, pèlerinage à Montmartre, bénédiction du foyer.' },
  ].map(f => ({
    ...f,
    date: formatDate(f.date.getFullYear(), f.date.getMonth() + 1, f.date.getDate())
  }));
}

// Fêtes celtiques fixes (MM-DD)
const fixedCeltic = [
  { mmdd: '02-01', name: 'Imbolc', type: 'celtique',
    desc: 'L\'une des quatre grandes fêtes celtiques. Imbolc marque le début du printemps, l\'éveil de la terre après l\'hiver. La déesse Brigid veille sur le foyer et la fertilité.',
    trad: 'Allumage de bougies dans chaque foyer, confection de la croix de Brigid, purification des maisons, visite des sources sacrées, divination.' },
  { mmdd: '03-20', name: 'Équinoxe de Printemps — Ostara', type: 'celtique',
    desc: 'Jour et nuit d\'égale durée. Dans la tradition celtique, Alban Eilir marque le réveil définitif de la terre.',
    trad: 'Allumage de feux rituels, cueillette des premières herbes sauvages, décoration des maisons de rameaux fleuris, purification.' },
  { mmdd: '05-01', name: 'Beltaine', type: 'celtique',
    desc: 'L\'une des quatre grandes fêtes celtiques. Beltaine marque le début de l\'été, la saison de la lumière et de l\'abondance. Le voile entre les mondes s\'amincit.',
    trad: 'Grands feux de Beltaine, saut par-dessus le feu, danse autour du mât de mai, cueillette des fleurs, couronnes de fleurs.' },
  { mmdd: '05-01', name: 'Fête du Muguet', type: 'celtique',
    desc: 'Dans les traditions populaires, le 1er mai est le jour du muguet. Les druides cueillaient le gui à cette période.',
    trad: 'Offrande de brins de muguet porte-bonheur, cueillette des simples avant le lever du soleil, danses folkloriques.' },
  { mmdd: '06-21', name: 'Solstice d\'Été — Litha', type: 'celtique',
    desc: 'Le jour le plus long de l\'année. Dans la tradition celtique, Alban Hefin est le triomphe de la lumière.',
    trad: 'Veillée du solstice, grands feux sur les collines, cueillette des herbes magiques, couronnes de fleurs sauvages, baignade rituelle.' },
  { mmdd: '08-01', name: 'Lugnasad', type: 'celtique',
    desc: 'L\'une des quatre grandes fêtes celtiques. Lugnasad est la fête du dieu Lug, maître de tous les arts. Temps des premières moissons.',
    trad: 'Offrandes des premiers grains, confection du pain de la moisson, grands rassemblements, jeux d\'adresse, mariages traditionnels.' },
  { mmdd: '09-23', name: 'Équinoxe d\'Automne — Mabon', type: 'celtique',
    desc: 'Second équilibre de l\'année entre jour et nuit. Temps de la seconde récolte, des fruits et des baies.',
    trad: 'Fête des récoltes, cueillette des pommes et des noix, actions de grâce, constitution des réserves pour l\'hiver.' },
  { mmdd: '10-31', name: 'Samhain — Veille', type: 'celtique',
    desc: 'La plus importante des fêtes celtiques. Samhain marque la fin de l\'année celtique. Le voile entre les mondes est au plus mince.',
    trad: 'Grand feu de Samhain, offrandes aux ancêtres, déguisements, creusage de betteraves, silence rituel, divination.' },
  { mmdd: '11-01', name: 'Samhain — Nouvel An celtique', type: 'celtique',
    desc: 'Premier jour de la nouvelle année celtique. Temps de l\'introspection et des rêves.',
    trad: 'Visite aux tombes des ancêtres, partage du gâteau de Samhain, contes au coin du feu, purification de la maison.' },
  { mmdd: '12-21', name: 'Solstice d\'Hiver — Yule', type: 'celtique',
    desc: 'La nuit la plus longue de l\'année. Dans la tradition celtique, Alban Arthan est le moment où le Soleil renaît des ténèbres.',
    trad: 'Veillée du solstice toute la nuit, bûche de Yule, décorations de houx, gui et sapin, offrandes aux esprits de la nature.' },
];

// Fêtes gauloises fixes (Calendrier de Coligny)
const fixedGaulish = [
  { mmdd: '03-18', name: 'Equos', type: 'celtique',
    desc: 'Fête gauloise du cheval et de la purification équestre, tirée du calendrier de Coligny.',
    trad: 'Purification des chevaux par le feu et l\'eau, processions équestres, offrandes à Épona, compétitions hippiques.' },
  { mmdd: '05-15', name: 'Ambiuales', type: 'celtique',
    desc: 'Fête gauloise de la procession autour des champs pour bénir les cultures et repousser les mauvais esprits.',
    trad: 'Procession autour des champs, offrandes aux divinités locales, libations de bière et d\'hydromel, danses pour la fertilité.' },
  { mmdd: '08-17', name: 'Cantlos', type: 'celtique',
    desc: 'Fête gauloise du chant et de la poésie. Les bardes entraient en compétition pour célébrer les dieux et les héros.',
    trad: 'Concours de bardes, récitation des légendes, chants à la harpe, fabrication de talismans sonores, veillées de contes.' },
];

function generateFixedFeasts(templates, year) {
  return templates.map(t => ({
    date: `${year}-${t.mmdd}`,
    name: t.name,
    type: t.type,
    desc: t.desc,
    trad: t.trad,
  }));
}

async function main() {
  try {
    console.log("🔌 Connexion...");
    await client.connect();

    // Vider la table
    console.log("🧹 Nettoyage de la table...");
    await client.query("DELETE FROM public.journal_holidays");

    const allHolidays = [];

    for (let year = 1899; year <= 1914; year++) {
      const easter = easterDate(year);
      console.log(`  ${year} : Pâques = ${formatDate(year, easter.getMonth() + 1, easter.getDate())}`);

      // Fêtes fixes chrétiennes
      allHolidays.push(...generateFixedFeasts(fixedChristian, year));
      // Fêtes mobiles chrétiennes
      allHolidays.push(...generateMobileFeasts(easter, year));
      // Fêtes celtiques fixes
      allHolidays.push(...generateFixedFeasts(fixedCeltic, year));
      // Fêtes gauloises fixes
      allHolidays.push(...generateFixedFeasts(fixedGaulish, year));
      // Saints du calendrier romain
      // Saints du calendrier romain
      saints.forEach(s => {
        const saintName = s.name.split(' — ')[0].trim();
        allHolidays.push({
          date: `${year}-${s.mmdd}`,
          name: s.name,
          type: 'chrétien',
          desc: `${s.name} — ${s.domain}. ${s.desc}`,
          trad: `Fête traditionnelle de ${saintName}. Messes et dévotions au saint du jour.`
        });
      });
      // 29 février bissextile
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        allHolidays.push({
          date: `${year}-02-29`,
          name: saintsFeb29.name,
          type: 'chrétien',
          desc: `${saintsFeb29.name} — ${saintsFeb29.domain}. ${saintsFeb29.desc}`,
          trad: `Fête traditionnelle de ${saintsFeb29.name}.`
        });
      }
    }

    console.log(`📅 Insertion de ${allHolidays.length} fêtes...`);

    // Insertion par lots de 100
    const batchSize = 100;
    for (let i = 0; i < allHolidays.length; i += batchSize) {
      const batch = allHolidays.slice(i, i + batchSize);
      const values = batch.map((_, j) =>
        `($${j * 5 + 1}, $${j * 5 + 2}, $${j * 5 + 3}, $${j * 5 + 4}, $${j * 5 + 5})`
      ).join(', ');

      const params = batch.flatMap(h => [h.date, h.name, h.type, h.desc, h.trad]);

      await client.query(
        `INSERT INTO public.journal_holidays (date, name, type, description, traditions) VALUES ${values}`,
        params
      );
    }

    console.log(`🎉 ${allHolidays.length} fêtes insérées avec succès (1899-1914) !`);
  } catch (err) {
    console.error("❌ Erreur :", err);
  } finally {
    await client.end();
  }
}

main();
