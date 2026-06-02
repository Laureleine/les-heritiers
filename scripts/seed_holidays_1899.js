// scripts/seed_holidays_1899.js
const { Client } = require('pg');
require('dotenv').config();

const connectionString = process.env.SUPABASE_DB_URL;

if (!connectionString) {
  console.error("❌ SUPABASE_DB_URL manquante");
  process.exit(1);
}

const client = new Client({ connectionString });

// Toutes les fêtes de l'année 1899
const holidays = [
  // ═══════════════════════════════════════
  // FÊTES CHRÉTIENNES FIXES
  // ═══════════════════════════════════════
  { date: '1899-01-01', name: 'Circoncision de Jésus — Nouvel An', type: 'chrétien',
    description: 'Huitième jour après Noël, la Circoncision de Jésus est une fête liturgique majeure. Dans la France de 1899, le 1er janvier est aussi le jour des étrennes et des vœux.',
    traditions: 'Échange de vœux et d\'étrennes, messe solennelle, repas de famille, ouverture des calendriers de l\'année nouvelle.' },

  { date: '1899-01-06', name: 'Épiphanie', type: 'chrétien',
    description: 'Fête des Rois Mages commémorant la venue des mages Gaspard, Melchior et Balthazar auprès de l\'Enfant Jésus. Dans la France de 1899, c\'est aussi une fête populaire.',
    traditions: 'Galette des Rois et partage de la fève, couronne en papier, messe de l\'Épiphanie, bénédiction des maisons à la craie.' },

  { date: '1899-02-02', name: 'Chandeleur', type: 'chrétien',
    description: 'Présentation de Jésus au Temple et purification de la Vierge Marie. Fête de la Lumière, quarante jours après Noël.',
    traditions: 'Bénédiction des cierges à l\'église, procession aux flambeaux, confection de crêpes (tradition païenne du retour du soleil), dicton : "À la Chandeleur, l\'hiver se meurt ou prend vigueur".' },

  { date: '1899-02-14', name: 'Saint-Valentin', type: 'chrétien',
    description: 'Fête des amoureux en l\'honneur de saint Valentin, prêtre romain martyrisé au IIIe siècle. La tradition romantique est déjà bien implantée dans la société bourgeoise de 1899.',
    traditions: 'Échange de cartes illustrées (cartes de Saint-Valentin), offrandes de fleurs et de douceurs, déclarations d\'amour, bals et soirées dansantes.' },

  { date: '1899-03-19', name: 'Saint-Joseph', type: 'chrétien',
    description: 'Fête de saint Joseph, époux de la Vierge Marie et père nourricier de Jésus. Patron des artisans, des charpentiers et des travailleurs.',
    traditions: 'Messe solennelle, bénédiction des outils de travail, processions de corps de métier, repas de fête dans les corporations.' },

  { date: '1899-03-25', name: 'Annonciation', type: 'chrétien',
    description: 'L\'Ange Gabriel annonce à la Vierge Marie qu\'elle concevra Jésus. Exactement neuf mois avant Noël. Fête d\'obligation dans la France de 1899.',
    traditions: 'Messe de l\'Annonciation, processions mariales, dans certaines régions plantation de l\'"arbre de l\'Annonciation".' },

  { date: '1899-04-23', name: 'Saint-Georges', type: 'chrétien',
    description: 'Fête de saint Georges, martyr et soldat romain, célèbre pour avoir terrassé le dragon. Patron de l\'Angleterre, de la Catalogne et de nombreux corps de métier.',
    traditions: 'Processions, foires, dans les pays anglo-saxons : port de la rose rouge, défilés et célébrations chevaleresques.' },

  { date: '1899-04-25', name: 'Saint-Marc', type: 'chrétien',
    description: 'Fête de saint Marc l\'Évangéliste, auteur du second Évangile et fondateur de l\'Église d\'Alexandrie. Patron de Venise.',
    traditions: 'Messe solennelle, processions des Rogations (trois jours avant l\'Ascension) débutant à la Saint-Marc pour bénir les cultures, litanies des saints.' },

  { date: '1899-06-24', name: 'Nativité de saint Jean-Baptiste', type: 'chrétien',
    description: 'Fête de la naissance de Jean-Baptiste, exactement six mois avant Noël (selon Luc 1). L\'une des plus anciennes fêtes chrétiennes, coïncidant avec le solstice d\'été et les traditions païennes du feu.',
    traditions: 'Grands feux de la Saint-Jean, sauts par-dessus le feu (protection et fertilité), bals populaires, récolte des herbes de saint Jean (millepertuis, verveine), messe solennelle.' },

  { date: '1899-06-29', name: 'Saint-Pierre et Saint-Paul', type: 'chrétien',
    description: 'Fête des deux plus grands apôtres : Pierre, le premier pape, et Paul, l\'apôtre des nations. Fête d\'obligation dans la France de 1899 et jour férié.',
    traditions: 'Messe papale à Rome, bénédiction des palliums, processions, foires et kermesses, pêcheurs bénissant leurs bateaux (saint Pierre étant leur patron).' },

  { date: '1899-07-14', name: 'Fête nationale française', type: 'chrétien',
    description: 'Anniversaire de la prise de la Bastille (1789) et de la Fête de la Fédération (1790). La IIIe République en fait une fête nationale depuis 1880, suscitant des tensions entre républicains et catholiques traditionalistes.',
    traditions: 'Défilés militaires, feux d\'artifice, bals populaires (bal des pompiers), guinguettes, discours républicains, drapeaux tricolores aux fenêtres.' },

  { date: '1899-07-22', name: 'Sainte-Marie-Madeleine', type: 'chrétien',
    description: 'Fête de Marie de Magdala, disciple de Jésus, présente au pied de la Croix et première témoin de la Résurrection. Selon la tradition provençale, elle aurait débarqué aux Saintes-Maries-de-la-Mer.',
    traditions: 'Pèlerinage en Provence (Saint-Maximin-la-Sainte-Baume), processions, messes solennelles, dévotion des parfumeurs (le vase d\'albâtre).' },

  { date: '1899-08-15', name: 'Assomption de la Vierge Marie', type: 'chrétien',
    description: 'La Vierge Marie est élevée corps et âme au ciel au terme de sa vie terrestre. Dogme proclamé en 1850, c\'est l\'une des plus grandes fêtes mariales. Jour férié dans la France de 1899.',
    traditions: 'Messe solennelle, processions mariales dans toute la France, pèlerinage à Lourdes (qui bat son plein), décorations florales, feu d\'artifice dans les villages.' },

  { date: '1899-09-08', name: 'Nativité de la Vierge Marie', type: 'chrétien',
    description: 'Fête de la naissance de la Vierge Marie, neuf mois après l\'Immaculée Conception (8 décembre). Fête très populaire dans la France rurale de 1899.',
    traditions: 'Messes, processions, foires et fêtes de village, bénédiction des semences d\'automne, dicton : "À la Nativité, la chaleur est de courte durée".' },

  { date: '1899-09-29', name: 'Saint-Michel', type: 'chrétien',
    description: 'Fête de l\'archange Michel, vainqueur de Satan et gardien du Paradis. Patron de la France (depuis saint Louis), des guerriers et des marchands. Le Mont-Saint-Michel est le grand centre de pèlerinage.',
    traditions: 'Pèlerinage au Mont-Saint-Michel, messes solennelles, foires de la Saint-Michel (importantes dans le calendrier agricole pour les travaux d\'automne), dicton : "À la Saint-Michel, on sème le blé nouveau".' },

  { date: '1899-10-18', name: 'Saint-Luc', type: 'chrétien',
    description: 'Fête de saint Luc l\'Évangéliste, médecin et compagnon de Paul, auteur du troisième Évangile et des Actes des Apôtres. Patron des peintres, des médecins et des chirurgiens.',
    traditions: 'Messe des artistes, bénédiction des instruments de médecine, vénération des icônes (Luc aurait peint la première icône de la Vierge).' },

  { date: '1899-11-01', name: 'Toussaint', type: 'chrétien',
    description: 'Fête de tous les saints, connus et inconnus. Instituée au VIIIe siècle, c\'est l\'une des fêtes les plus importantes du calendrier chrétien. Jour férié dans la France de 1899, elle marque le début du mois des morts.',
    traditions: 'Messe solennelle, procession aux flambeaux, veillée de prière, dans les campagnes : crucifix ornés de feuillage et de fleurs.' },

  { date: '1899-11-02', name: 'Commémoration des fidèles défunts', type: 'chrétien',
    description: 'Jour de prière pour tous les morts, institué par Odon de Cluny au Xe siècle. Dans la France de 1899, c\'est le grand jour de visite des cimetières, plus encore que la Toussaint.',
    traditions: 'Visite des cimetières, dépôt de chrysanthèmes et de couronnes mortuaires, prières pour les défunts, bénédiction des tombes, messe de Requiem.' },

  { date: '1899-12-08', name: 'Immaculée Conception', type: 'chrétien',
    description: 'La Vierge Marie est conçue sans le péché originel. Dogme proclamé par Pie IX en 1854. Fête très populaire, notamment à Lyon et en Provence. Dans la France de 1899, c\'est jour férié dans plusieurs diocèses.',
    traditions: 'Messe solennelle, processions mariales, vœu des Lyon (depuis 1643 : illumination des maisons), allumage des lumières de Noël, grande fête des corporations mariales.' },

  { date: '1899-12-25', name: 'Noël', type: 'chrétien',
    description: 'Nativité de Jésus-Christ, la plus grande fête chrétienne après Pâques. Dans la France de 1899, Noël est avant tout une fête religieuse et familiale, avec la messe de minuit comme grand moment.',
    traditions: 'Messe de minuit, crèche de Noël, sapin décoré (tradition allemande popularisée en France après 1870), réveillon en famille, bûche de Noël, échange de cadeaux, treize desserts en Provence.' },

  { date: '1899-12-26', name: 'Saint-Étienne', type: 'chrétien',
    description: 'Fête du premier martyr chrétien, Étienne, l\'un des sept diacres choisis par les Apôtres. Très célébrée dans les pays germaniques et en Alsace-Lorraine.',
    traditions: 'Messe en l\'honneur du protonartyr, dans les régions germaniques : second jour de Noël, promenades et visites familiales, aumône aux pauvres.' },

  // ═══════════════════════════════════════
  // FÊTES CHRÉTIENNES MOBILES (Pâques 1899 = 2 avril)
  // ═══════════════════════════════════════
  { date: '1899-02-14', name: 'Mardi Gras', type: 'chrétien',
    description: 'Dernier jour de ripaille avant le Carême. Dans le calendrier de 1899, Mardi Gras tombe le 14 février, Saint-Valentin — confluence exceptionnelle des fêtes.',
    traditions: 'Carnavals, déguisements, beignets, bugnes, gaufres, masques, confettis, chars décorés. Le carnaval de Nice et de Paris battent leur plein.' },

  { date: '1899-02-15', name: 'Mercredi des Cendres', type: 'chrétien',
    description: 'Entrée en Carême. Le prêtre marque le front des fidèles d\'une croix de cendres en disant : "Souviens-toi que tu es poussière et que tu retourneras en poussière". Jeûne et abstinence obligatoires.',
    traditions: 'Messe des Cendres, imposition des cendres, jeûne, abstinence de viande le mercredi et le vendredi, début des 40 jours de privations, pèlerinages de Carême.' },

  { date: '1899-03-26', name: 'Dimanche des Rameaux', type: 'chrétien',
    description: 'Entrée triomphale de Jésus à Jérusalem. Début de la Semaine Sainte. Les fidèles portent des rameaux bénits (buis, laurier, olivier) qui serviront de "palmes" protectrices.',
    traditions: 'Bénédiction et procession des rameaux, messe de la Passion, rameaux de buis ramenés à la maison et placés derrière les crucifix, chants de l\'Hosanna.' },

  { date: '1899-03-30', name: 'Jeudi Saint', type: 'chrétien',
    description: 'Institution de l\'Eucharistie et du Sacerdoce lors de la Dernière Cène. L\'église reste sans ornements après la messe. Cérémonie du lavement des pieds.',
    traditions: 'Messe du soir (In Cena Domini), lavement des pieds de douze pauvres (imité par les rois de France), visite des "reposoirs", adoration eucharistique nocturne.' },

  { date: '1899-03-31', name: 'Vendredi Saint', type: 'chrétien',
    description: 'Jour de la Passion et de la mort de Jésus sur la Croix. Jour de jeûne, de silence et de recueillement. Pas de messe : célébration de la Passion du Seigneur.',
    traditions: 'Chemin de Croix, office de la Passion, vénération de la Croix, silence des cloches (elles "partent à Rome"), jeûne strict, processions de Pénitents dans le Midi.' },

  { date: '1899-04-02', name: 'Dimanche de Pâques', type: 'chrétien',
    description: 'Résurrection de Jésus-Christ, la plus grande fête chrétienne. Victoire de la vie sur la mort, sommet de l\'année liturgique. En 1899, Pâques tombe le 2 avril, un dimanche dans la douceur du printemps.',
    traditions: 'Messe solennelle de la Résurrection, bénédiction des œufs et du pain pascal, cloches carillonnantes, chasse aux œufs dans les jardins, agneau pascal, repas de fête en famille.' },

  { date: '1899-04-03', name: 'Lundi de Pâques', type: 'chrétien',
    description: 'Second jour de la fête de Pâques, jour férié dans la France de 1899. Permet de prolonger en famille la joie pascale.',
    traditions: 'Repas de famille prolongé, jeux de plein air, promenades printanières, visite aux parents éloignés, distribution d\'œufs décorés aux enfants.' },

  { date: '1899-05-11', name: 'Ascension', type: 'chrétien',
    description: 'Quarante jours après Pâques, Jésus monte au ciel et s\'assoit à la droite du Père. Fête d\'obligation et jour férié dans la France de 1899.',
    traditions: 'Messe solennelle, procession autour de l\'église, bénédiction des champs et des cultures (processions des Rogations), dicton : "À l\'Ascension, l\'hiver prend son baston".' },

  { date: '1899-05-21', name: 'Pentecôte', type: 'chrétien',
    description: 'Descente du Saint-Esprit sur les Apôtres sous forme de langues de feu, cinquante jours après Pâques. Naissance de l\'Église. Fête d\'obligation dans la France de 1899.',
    traditions: 'Messe de la Pentecôte, décorations rouges dans les églises (couleur du Saint-Esprit), veillée de prière, confirmation des baptisés, dicton : "À la Pentecôte, la moisson est haute ou basse".' },

  { date: '1899-05-22', name: 'Lundi de Pentecôte', type: 'chrétien',
    description: 'Second jour de la Pentecôte, jour férié. Dans la France de 1899, c\'est souvent l\'occasion de pèlerinages et de fêtes de village.',
    traditions: 'Pèlerinages, processions, kermesses paroissiales, bals, confréries du Saint-Esprit, courses de chevaux et jeux traditionnels.' },

  { date: '1899-05-28', name: 'Fête de la Sainte-Trinité', type: 'chrétien',
    description: 'Premier dimanche après la Pentecôte, célébration du mystère central de la foi chrétienne : un Dieu unique en trois personnes (Père, Fils et Saint-Esprit).',
    traditions: 'Messe de la Trinité, offices solennels dans les abbayes, bénédiction des enfants, repos dominical.' },

  { date: '1899-06-01', name: 'Fête-Dieu (Corpus Christi)', type: 'chrétien',
    description: 'Fête du Saint-Sacrement, instituée au XIIIe siècle. Le Saint-Sacrement est porté en procession solennelle dans les rues décorées de branchages et de fleurs. Très grand fête dans la France de 1899.',
    traditions: 'Procession du Saint-Sacrement, reposoirs décorés dans les rues (autels de verdure et de fleurs), tapis de fleurs et de sciure colorée, fillettes en robe blanche semant des pétales, encensoirs.' },

  { date: '1899-06-09', name: 'Fête du Sacré-Cœur', type: 'chrétien',
    description: 'Dévotion au Cœur de Jésus, symbole de son amour infini pour les hommes. Très populaire dans la France de la IIIe République, en réaction à la laïcisation. La basilique du Sacré-Cœur à Montmartre est en construction depuis 1875.',
    traditions: 'Messe du Sacré-Cœur, consécration des familles, neuvaine, pèlerinage à Montmartre, bénédiction du foyer, dévotion réparatrice.' },

  // ═══════════════════════════════════════
  // FÊTES CELTIQUES (Roue de l'An & Gauloises)
  // ═══════════════════════════════════════
  { date: '1899-02-01', name: 'Imbolc', type: 'celtique',
    description: 'L\'une des quatre grandes fêtes celtiques (avec Beltaine, Lugnasad et Samhain). Imbolc marque le début du printemps, l\'éveil de la terre après l\'hiver. La déesse Brigid (Sainte Brigitte) veille sur le foyer et la fertilité.',
    traditions: 'Allumage de bougies dans chaque foyer (fête de la Lumière), confection de la croix de Brigid (croix de paille), purification des maisons et des étables, visite des sources sacrées, divination sur le temps à venir : "Si le serpent sort de son trou à Imbolc, le printemps est proche".' },

  { date: '1899-03-20', name: 'Équinoxe de Printemps', type: 'celtique',
    description: 'Jour et nuit d\'égale durée. Dans la tradition celtique, Ostara ou Alban Eilir marque le réveil définitif de la terre, l\'équilibre entre lumière et ténèbres avant que la lumière ne prenne définitivement le dessus.',
    traditions: 'Allumage de feux rituels, cueillette des premières herbes sauvages, décoration des maisons de rameaux fleuris, temps d\'équilibre et de purification, préparation des champs pour les semailles de printemps.' },

  { date: '1899-05-01', name: 'Beltaine', type: 'celtique',
    description: 'L\'une des quatre grandes fêtes celtiques. Beltaine (ou Calan Mai) marque le début de l\'été, la saison de la lumière et de l\'abondance. Le voile entre les mondes s\'amincit, les fées et les esprits de la nature sont particulièrement actifs.',
    traditions: 'Grands feux de Beltaine (feux purificateurs), saut par-dessus le feu pour attirer chance et fertilité, danse autour du mât de mai (arbre de mai), cueillette des fleurs sauvages, décoration des portes de rameaux verts, couronnes de fleurs, union des couples sous les arbres en fleurs.' },

  { date: '1899-05-01', name: 'Fête du Muguet', type: 'celtique',
    description: 'Dans les traditions celtiques et populaires, le 1er mai est le jour du muguet et des fleurs sauvages. Les druides cueillaient le gui à cette période. La tradition d\'offrir du muguet se répand dans la France de 1899.',
    traditions: 'Offrande de brins de muguet porte-bonheur, cueillette des simples (plantes médicinales) avant le lever du soleil, danses folkloriques autour de l\'arbre de mai.' },

  { date: '1899-06-21', name: 'Solstice d\'Été', type: 'celtique',
    description: 'Le jour le plus long de l\'année. Dans la tradition celtique, Litha (ou Alban Hefin) est le triomphe de la lumière. C\'est le moment où le Soleil est à son apogée, juste avant que les jours ne commencent à décroître.',
    traditions: 'Veillée du solstice, grands feux sur les collines, cueillette des herbes magiques (elles sont à leur puissance maximale), couronnes de fleurs sauvages, baignade rituelle dans les rivières, saut par-dessus le feu pour honorer le soleil.' },

  { date: '1899-08-01', name: 'Lugnasad', type: 'celtique',
    description: 'L\'une des quatre grandes fêtes celtiques. Lugnasad (ou Lammas) est la fête du dieu Lug, maître de tous les arts. C\'est le temps des premières moissons, de l\'abondance et des rassemblements tribaux.',
    traditions: 'Offrandes des premiers grains et fruits, confection du pain de la moisson, grands rassemblements et foires, jeux d\'adresse et compétitions (à l\'image des Jeux de Lug), mariages traditionnels (mariages de la moisson), danses et festins.' },

  { date: '1899-09-23', name: 'Équinoxe d\'Automne', type: 'celtique',
    description: 'Second équilibre de l\'année entre jour et nuit. Dans la tradition celtique, Mabon (ou Alban Elfed) est le temps de la seconde récolte, des fruits et des baies. La nature prépare son repos hivernal.',
    traditions: 'Fête des récoltes et des fruits, cueillette des pommes et des noix, actions de grâce pour l\'abondance de l\'été, constitution des réserves pour l\'hiver, équilibre et introspection.' },

  { date: '1899-10-31', name: 'Samhain — Veille', type: 'celtique',
    description: 'La plus importante des fêtes celtiques. Samhain marque la fin de l\'année celtique et le début de l\'hiver. Le voile entre le monde des vivants et celui des morts est au plus mince : les esprits, les ancêtres et les êtres de l\'Autre Monde peuvent traverser.',
    traditions: 'Grand feu de Samhain sur les collines, offrandes aux ancêtres (nourriture laissée sur le pas de la porte), déguisements pour tromper les esprits malfaisants, creusage de betteraves (ancêtres des lanternes), silence rituel, divination pour l\'année à venir.' },

  { date: '1899-11-01', name: 'Samhain — Nouvel An celtique', type: 'celtique',
    description: 'Premier jour de la nouvelle année celtique. Le monde est dans l\'obscurité et le froid, mais c\'est aussi le moment où les graines reposent dans la terre avant de germer. Temps de l\'introspection et des rêves.',
    traditions: 'Visite aux tombes des ancêtres, partage du gâteau de Samhain, contes et légendes au coin du feu, silence et méditation, purification de la maison pour l\'année nouvelle, tirage des sorts pour l\'année à venir.' },

  { date: '1899-12-21', name: 'Solstice d\'Hiver', type: 'celtique',
    description: 'La nuit la plus longue de l\'année. Dans la tradition celtique, Yule (ou Alban Arthan) est le moment où le Soleil renaît des ténèbres. C\'est la fête de la lumière renaissante, de l\'espoir et du renouveau.',
    traditions: 'Veillée du solstice toute la nuit autour du feu, bûche de Yule (brûlée dans l\'âtre pour symboliser le Soleil renaissant), décorations de houx, gui et sapin (symboles d\'éternité et de fertilité), offrandes aux esprits de la nature, chants et contes, renaissance du Soleil au matin.' },

  // ═══════════════════════════════════════
  // FÊTES GAULOISES (Calendrier de Coligny)
  // ═══════════════════════════════════════
  { date: '1899-03-18', name: 'Equos', type: 'celtique',
    description: 'Fête gauloise du cheval et de la purification équestre, tirée du calendrier de Coligny (le plus ancien calendrier celtique retrouvé). Les chevaux étaient bénis et purifiés avant la saison des guerres et des déplacements.',
    traditions: 'Purification des chevaux par le feu et l\'eau, processions équestres, offrandes à Épona (déesse des chevaux), compétitions hippiques, bénédiction des étables et des écuries.' },

  { date: '1899-05-15', name: 'Ambiuales', type: 'celtique',
    description: 'Fête gauloise de la procession autour des champs. Les druides et les paysans parcouraient les limites des territoires pour bénir les cultures et repousser les mauvais esprits.',
    traditions: 'Procession autour des champs et des villages, offrandes aux divinités locales, libations de bière et d\'hydromel sur les sillons, danses et chants pour appeler la fertilité des terres.' },

  { date: '1899-08-17', name: 'Cantlos', type: 'celtique',
    description: 'Fête gauloise du chant et de la poésie. Les bardes entraient en compétition pour célébrer les hauts faits des héros et des dieux. Le chant était considéré comme une force magique capable d\'agir sur le monde.',
    traditions: 'Concours de bardes et de poètes, récitation des généalogies et des légendes, chants à la harpe, fabrication de talismans sonores, veillées de contes et de légendes autour du feu.' },
];

async function main() {
  try {
    console.log("🔌 Connexion...");
    await client.connect();

    // Vider la table pour éviter les doublons
    console.log("🧹 Nettoyage de la table...");
    await client.query("DELETE FROM public.journal_holidays");

    // Insertion par lots
    console.log(`📅 Insertion de ${holidays.length} fêtes...`);
    for (const h of holidays) {
      await client.query(
        `INSERT INTO public.journal_holidays (date, name, type, description, traditions)
         VALUES ($1, $2, $3, $4, $5)`,
        [h.date, h.name, h.type, h.description, h.traditions]
      );
    }

    console.log(`🎉 ${holidays.length} fêtes insérées avec succès !`);
  } catch (err) {
    console.error("❌ Erreur :", err);
  } finally {
    await client.end();
  }
}

main();
