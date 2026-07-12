// scripts/seed_indices_verites.js
// Pré-remplit indices_verites depuis "Un Livret pour les Doctes" (Chapitre I).
// Barème XP : indice +1, verite_mineure +2, verite_majeure +4, dit_du_marcheur +5.
import 'dotenv/config';
import pg from 'pg';

const client = new pg.Client({ connectionString: process.env.SUPABASE_DB_URL });
await client.connect();

const IV = (element_nom, element_type, type, ordre, texte) =>
  ({ element_nom, element_type, type, ordre, texte });

const VM  = (n, o, t) => IV(n, n === 'Avalon' || n === 'Ys' ? 'lieu'
  : ['Gwydion Le Marcheur','Héritiers','Merlin','Morgane','Seth le Félon',
     'Shaïtan le Subversif','Viviane la Fée','Yahvé (Jésus)','Docteurs du Grand Langage'].includes(n) ? 'personnage'
  : ['Éveil du Grand Dragon','Malédiction des fées','Pacte des Tricheurs'].includes(n) ? 'événement'
  : 'concept', 'verite_majeure', o, t);
const vm  = (n, o, t) => ({ ...VM(n,o,t), type: 'verite_mineure' });
const ind = (n, o, t) => ({ ...VM(n,o,t), type: 'indice' });
const dit = (n, o, t) => ({ ...VM(n,o,t), type: 'dit_du_marcheur' });

const SEED = [
  // ══════════════════════════════════════════════════════════════════════════
  // ALLIANCE
  // ══════════════════════════════════════════════════════════════════════════
  VM ('Alliance', 1, "L'Histoire a connu deux Alliances, la Première Alliance et la Seconde Alliance."),
  VM ('Alliance', 2, "La Première Alliance existe encore dans les mythes et légendes féeriques : par le passé, hommes et fées vivaient en bonne entente."),
  VM ('Alliance', 3, "Elle a été détruite par la Grande Hérésie, Yahvé, les chrétiens et les Pèlerins du mont Ébal."),
  VM ('Alliance', 4, "Les Pèlerins du mont Ébal ont pour mission de faire disparaître toute trace de la Féerie et de l'Alliance."),
  VM ('Alliance', 5, "La Seconde Alliance est le plan mis au point par Viviane pour sauver l'Ordonnancement de l'éveil du Grand Dragon."),
  VM ('Alliance', 6, "Elle devait renverser la Grande Hérésie en construisant un monde magique unissant hommes et fées."),
  VM ('Alliance', 7, "Ce monde magique aurait été à même de déchirer le voile du Fluide."),
  VM ('Alliance', 8, "La Seconde Alliance a échoué à cause de Shaïtan."),
  vm ('Alliance', 1, "L'Alliance est l'un des fondements de l'existence et des croyances des Croisés païens."),
  vm ('Alliance', 2, "De nombreuses organisations ont pour but affiché la fondation d'une Troisième Alliance : la Monarchie, les Communautés, le Clan."),
  ind('Alliance', 1, "Il existe encore, de par le monde, des manuscrits et des représentations non découverts ou non falsifiés par les Pèlerins du mont Ébal, témoignant de l'existence réelle de la Première Alliance."),
  ind('Alliance', 2, "La Première Alliance est une légende et une croyance importante dans la société féerique mais aussi dans bon nombre de cultures humaines."),
  ind('Alliance', 3, "L'existence de druides humains est une résurgence de la Première Alliance."),
  ind('Alliance', 4, "Il existe d'innombrables récits de la Seconde Alliance à travers l'imaginaire arthurien."),
  ind('Alliance', 5, "Merlin et Morgane ont été des acteurs de la Seconde Alliance, sans en connaître les tenants et les aboutissants."),

  // ══════════════════════════════════════════════════════════════════════════
  // AVALON
  // ══════════════════════════════════════════════════════════════════════════
  VM ('Avalon', 1, "L'île était autrefois reliée au monde. Seuls les druides savent désormais s'y rendre grâce à un rituel compliqué."),
  VM ('Avalon', 2, "Elle est le lieu de la Féerie. Il y a identité entre elles. Quand Avalon disparaîtra, la Féerie s'éteindra."),
  VM ('Avalon', 3, "Elle a été condamnée à s'effondrer dans le vide et à disparaître par un sortilège du Grand Langage, à l'instigation de Yahvé, afin de parachever la Grande Hérésie."),
  vm ('Avalon', 1, "Il n'y a que des fées et des animaux mythiques en Avalon, pas d'humains."),
  vm ('Avalon', 2, "Les Faux-Semblants ne peuvent y séjourner longtemps sans semer la discorde."),
  ind('Avalon', 1, "L'inadaptation des Faux-Semblants en Avalon devient évidente s'ils y séjournent trop longtemps."),
  ind('Avalon', 2, "De nombreux récits légendaires racontent l'époque où Avalon était reliée à la Terre."),
  ind('Avalon', 3, "Elle a commencé à s'éloigner de la Terre un peu après la crucifixion."),
  ind('Avalon', 4, "Merlin se souvient s'y être rendu en barque."),
  ind('Avalon', 5, "Chacun peut contempler l'érosion d'Avalon dans le vide."),
  ind('Avalon', 6, "Chacun peut constater qu'il n'y a pas d'humains en Avalon."),
  ind('Avalon', 7, "Lorsqu'une fée moderne naît, un morceau d'Avalon réapparaît."),
  ind('Avalon', 8, "Les fées modernes sont l'incarnation des rêves humains et féeriques à propos de la modernité. Elles sont apparues au moment où l'imaginaire populaire a commencé à intégrer des éléments de la modernité."),
  ind('Avalon', 9, "Les hauts lieux de la modernité sont souvent désertés par les fées. Lorsqu'ils sont récupérés par des fées, leur efficience et leur utilité diminuent au profit d'un réenchantement esthétique, symptôme de la Féerie."),
  ind('Avalon', 10, "La technologie tend à s'enrayer à Avalon."),
  ind('Avalon', 11, "La naissance des fées modernes à Avalon s'est accompagnée de la création d'une langue de terre, comme s'il s'agissait d'une victoire sur la disparition de la Féerie."),
  ind('Avalon', 12, "Il existe des machines merveilleuses dans quelques lieux très secrets d'Avalon. Peu d'Avaloniens savent d'où elles proviennent mais elles semblent fonctionner et sont manifestement féeriques."),
  ind('Avalon', 13, "Merlin étudie en secret les machines merveilleuses et la techno-magie avec le fouinard Elbertus."),

  // ══════════════════════════════════════════════════════════════════════════
  // DOCTEURS DU GRAND LANGAGE
  // ══════════════════════════════════════════════════════════════════════════
  VM ('Docteurs du Grand Langage', 1, "Nés de la dislocation de Ça, les Docteurs du Grand Langage sont les premiers êtres à s'éveiller à la conscience."),
  VM ('Docteurs du Grand Langage', 2, "Maîtres du Grand Langage, ils ont bâti l'Ordonnancement et trompé Ça en lui donnant la forme d'un Grand Dragon et en l'endormant."),
  VM ('Docteurs du Grand Langage', 3, "Ils sont quasi tout-puissants, immortels et invulnérables. Pourtant, ils sont terrorisés à l'idée de voir leur œuvre, l'Ordonnancement, être bouleversée et disparaître."),
  VM ('Docteurs du Grand Langage', 4, "Ce sont les dieux de nombreuses religions humaines."),
  vm ('Docteurs du Grand Langage', 1, "Les Docteurs du Grand Langage ont également une histoire compliquée faite de trahisons et de souffrances."),
  vm ('Docteurs du Grand Langage', 2, "Certains Docteurs se sont suicidés, trompés par Seth le Pernicieux."),
  ind('Docteurs du Grand Langage', 1, "Les religions du monde sont d'innombrables témoignages de l'existence des Docteurs."),
  ind('Docteurs du Grand Langage', 2, "L'existence de la cité d'Ys en est un autre témoignage."),
  ind('Docteurs du Grand Langage', 3, "De nombreuses représentations des Docteurs existent, qui concordent bien souvent, malgré les différences de culture et de modes de représentation."),
  ind('Docteurs du Grand Langage', 4, "Certains Docteurs ne vivent plus à Ys : Viviane, emprisonnée hors du temps et de l'espace par Shaïtan, Shaïtan qui guide les Chasseurs, le Marcheur et Seth dont l'esprit est divisé et le corps enfermé."),

  // ══════════════════════════════════════════════════════════════════════════
  // ÉVEIL DU GRAND DRAGON
  // ══════════════════════════════════════════════════════════════════════════
  VM ('Éveil du Grand Dragon', 1, "Le Grand Dragon est la forme donnée à Ça par les Docteurs du Grand Langage afin de préserver l'Ordonnancement."),
  VM ('Éveil du Grand Dragon', 2, "Ça, et donc le Grand Dragon, a peur de ce qui n'est pas lui. Dans sa terreur, il s'est transformé en un monstre cosmique et glouton qui veut dévorer l'Univers."),
  VM ('Éveil du Grand Dragon', 3, "Le Grand Dragon est endormi sur Terre. Les Docteurs, qui l'ont endormi, sont censés veiller sur son sommeil."),
  VM ('Éveil du Grand Dragon', 4, "Le Grand Dragon est destiné à se réveiller car le sortilège originel des Docteurs du Grand Langage n'était pas assez puissant pour l'endormir à jamais."),
  VM ('Éveil du Grand Dragon', 5, "Les Docteurs du Grand Langage ne sont plus assez nombreux pour l'endormir à nouveau."),
  vm ('Éveil du Grand Dragon', 1, "Le Souffle du Clan est l'une des armes laissées par Viviane aux créatures pour se préparer à l'éveil du Grand Dragon."),
  vm ('Éveil du Grand Dragon', 2, "Le Grand Dragon va s'éveiller en 1914, peu après le déclenchement de la Grande Guerre, et va entreprendre de dévorer l'Univers."),
  ind('Éveil du Grand Dragon', 1, "Les Héritiers font des rêves prémonitoires leur annonçant la fin de l'Univers."),
  ind('Éveil du Grand Dragon', 2, "De nombreux mythes et légendes font mention de dragons et notamment d'un Grand Dragon primordial qui ne serait autre que l'Univers."),
  ind('Éveil du Grand Dragon', 3, "Des secousses sismiques difficilement explicables secouent parfois la Terre."),

  // ══════════════════════════════════════════════════════════════════════════
  // FÉÉRIE
  // ══════════════════════════════════════════════════════════════════════════
  VM ('Féérie', 1, "La Féerie est une partie de l'Ordonnancement qui suit des règles plus souples, plus créatives et moins normées."),
  VM ('Féérie', 2, "Elle est l'expression de l'inconscient et des rêves de Ça, endormi sous la forme du Grand Dragon."),
  VM ('Féérie', 3, "Les créatures étant nées de l'Ordonnancement de Ça, leurs rêves sont aussi l'expression des rêves de Ça. Ainsi, les rêves des humains et des fées influencent la Féerie."),
  VM ('Féérie', 4, "Les fées et Avalon sont l'incarnation du principe de Féerie : si les fées disparaissent, Avalon s'écroule. Inversement, quand Avalon s'écroulera, les fées disparaîtront. Dans les deux cas, la Féerie s'éteindra, et avec elle une partie des rêves humains. Si une nouvelle fée apparaît, Avalon se reconstitue."),
  vm ('Féérie', 1, "Viviane est la créatrice des fées."),
  vm ('Féérie', 2, "La Grande Hérésie est l'ennemie de la Féerie."),
  vm ('Féérie', 3, "Les fées dites modernes sont liées aux rêves humains et féeriques et elles incarnent la Féerie qui naît de la modernité."),
  vm ('Féérie', 4, "Inversement, une partie de la modernité tend à affaiblir la Féerie par le désenchantement du monde qu'elle provoque."),

  // ══════════════════════════════════════════════════════════════════════════
  // FLUIDE
  // ══════════════════════════════════════════════════════════════════════════
  VM ('Fluide', 1, "Le Fluide est un élément central de la Grande Hérésie, inventé par Shaïtan le Subversif."),
  VM ('Fluide', 2, "Il recouvre tout l'Univers hormis les Docteurs du Grand Langage et, exceptionnellement, quelques rares êtres pensants que l'on nomme Survivants."),
  VM ('Fluide', 3, "En Amazonie, il existe une grotte très profondément enfouie qui permettrait de contempler une partie du Grand Dragon à travers le Fluide."),
  vm ('Fluide', 1, "Les spirites le nomment « éther »."),
  vm ('Fluide', 2, "Tous les mages utilisent le Fluide. En revanche, les fées appartiennent à l'Ordonnancement : leurs pouvoirs n'utilisent pas le Fluide, sauf certains Pouvoirs profonds et légendaires, inconsciemment."),
  vm ('Fluide', 3, "Le Fluide est le lieu de vie des esprits des morts que manipulent les spirites."),
  ind('Fluide', 1, "Toute utilisation de magie utilise le Fluide."),
  ind('Fluide', 2, "Les nécromanciens peuvent percevoir le Fluide grâce à leur drogue nommée euthocaïne."),
  ind('Fluide', 3, "Les nécromanciens pensent que la mort provient du Fluide et qu'elle est une panne « mécanique » que l'on doit pouvoir réparer grâce à la magie, en agissant sur le Fluide."),
  ind('Fluide', 4, "Les Survivants échappent au Fluide et donc à la mort et à la magie : ils ne peuvent ni pratiquer celle-ci, ni en être les cibles directes."),

  // ══════════════════════════════════════════════════════════════════════════
  // GRANDE HÉRÉSIE
  // ══════════════════════════════════════════════════════════════════════════
  VM ('Grande Hérésie', 1, "La Grande Hérésie a pour but de protéger l'Ordonnancement des créatures en les coupant du Grand Langage."),
  VM ('Grande Hérésie', 2, "Elle combine le Fluide, la religion, la condamnation de la Féerie et la prohibition de l'usage du Grand Langage garantie par l'œil qui se trouve à Ys."),
  VM ('Grande Hérésie', 3, "Le Fluide empêche les êtres vivants d'utiliser le Grand Langage et les rend mortels. Il forme un écran ou un voile entre les créatures et le Grand Langage, ce qui rend celui-ci très difficile à utiliser."),
  VM ('Grande Hérésie', 4, "La religion est un ensemble de récits mythiques et philosophiques diffusés parmi les mortels par les Docteurs du Grand Langage afin d'adoucir leur angoisse face à la mort et les détourner des questions qui pourraient les conduire à déchirer le voile du Fluide. À partir de ces récits initiaux, les mortels ont forgé leurs propres récits."),
  VM ('Grande Hérésie', 5, "En agissant sur le Fluide, un mortel peut agir par ricochet sur le Grand Langage et obtenir un effet magique mineur."),
  VM ('Grande Hérésie', 6, "La condamnation de la Féerie vise à faire disparaître du monde tout élément semblant trahir les règles habituelles de l'Ordonnancement et ressemblant à de la magie, afin d'éviter que les mortels ne se lancent dans des investigations qui pourraient les conduire à déchirer le voile du Fluide."),
  VM ('Grande Hérésie', 7, "Un de ses buts est de faire disparaître Avalon et les fées."),
  VM ('Grande Hérésie', 8, "La Malédiction des fées prononcée par le Marcheur a renforcé la condamnation de la Féerie."),
  ind('Grande Hérésie', 1, "Le Fluide est perceptible grâce à l'euthocaïne. Les nécromanciens ont grossièrement compris son rôle mortifère, à quelques détails près. Les spirites le perçoivent confusément."),
  ind('Grande Hérésie', 2, "Les ressemblances entre religions vont dans le sens d'une commune origine."),
  ind('Grande Hérésie', 3, "La disparition progressive d'Avalon et la Malédiction des fées sont des manifestations tangibles de la Grande Hérésie."),
  ind('Grande Hérésie', 4, "Les Pèlerins du mont Ébal sont l'aboutissement de la Grande Hérésie, ce que leur évangile confirme."),

  // ══════════════════════════════════════════════════════════════════════════
  // GRAND LANGAGE
  // ══════════════════════════════════════════════════════════════════════════
  VM ('Grand Langage', 1, "Le Grand Langage permet de modeler l'Univers en s'adressant à la conscience de Ça dans des termes auxquels il ne peut qu'obéir."),
  VM ('Grand Langage', 2, "Du fait de sa puissance, il est une menace pour l'Ordonnancement. À cause de cette menace, les Docteurs du Grand Langage se sont enfermés dans la cité d'Ys et ont élaboré la Grande Hérésie."),
  vm ('Grand Langage', 1, "Les sortilèges du Grand Langage sont des événements sans causalité : ils ne peuvent donc être devinés par la Prescience. Seules leurs conséquences peuvent être vues a posteriori."),
  vm ('Grand Langage', 2, "Les Docteurs surveillent l'utilisation du Grand Langage grâce à l'œil, situé dans la cité d'Ys. Toutefois, seuls les sortilèges les plus puissants, et donc les plus visibles, sont détectés."),
  ind('Grand Langage', 1, "De nombreuses cultures érigent le langage en matériau créateur et ordonnateur de l'Univers."),
  ind('Grand Langage', 2, "Toutes les magies humaines utilisent, d'une manière ou d'une autre, le langage."),
  ind('Grand Langage', 3, "Une tribu d'Amérique du Sud abrite des chamans qui maîtrisent un pouvoir thaumaturgique reposant sur le langage. Leurs mythes et légendes sont proches de ceux de la culture celte."),

  // ══════════════════════════════════════════════════════════════════════════
  // GWYDION LE MARCHEUR
  // ══════════════════════════════════════════════════════════════════════════
  VM ('Gwydion Le Marcheur', 1, "C'est un Docteur du Grand Langage."),
  VM ('Gwydion Le Marcheur', 2, "Il fait partie des fondateurs du Pacte des Tricheurs destiné à sauver le monde du Grand Dragon."),
  VM ('Gwydion Le Marcheur', 3, "Il n'est jamais retourné à Ys et a été témoin de toute l'histoire humaine et féerique depuis la fuite de Seth."),
  VM ('Gwydion Le Marcheur', 4, "Il est à l'origine du rassemblement des fées qui a fondé la Monarchie."),
  VM ('Gwydion Le Marcheur', 5, "Il a maudit les fées, contraint par les autres Docteurs du Grand Langage : il est donc à l'origine de l'apparition des Faux-Semblants et de leur allergie à l'argent."),
  vm ('Gwydion Le Marcheur', 1, "Il est amoureux de Viviane."),
  vm ('Gwydion Le Marcheur', 2, "Il a soutenu Viviane dans tous ses projets."),
  vm ('Gwydion Le Marcheur', 3, "Il a contribué avec elle à séparer l'esprit de Seth de son corps."),
  ind('Gwydion Le Marcheur', 1, "Il a été présent lors des grands événements de l'histoire humaine et féerique. Il figure sur de nombreuses représentations et son image est stable à travers le temps. Il est donc possible de le reconnaître."),
  ind('Gwydion Le Marcheur', 2, "Il a un faible pour la littérature : il a souvent fréquenté des auteurs devenus de célèbres classiques et a laissé derrière lui un certain nombre d'œuvres sous divers pseudonymes. Ces œuvres évoquent souvent l'histoire du monde — les fées, le Grand Dragon, les Docteurs — de manière déguisée."),
  dit('Gwydion Le Marcheur', 1, "Au cours de ses pérégrinations, le Marcheur a laissé des traces directes de l'Histoire secrète du monde sur des stèles dont l'ensemble est intitulé « Dit du Marcheur », cachées dans des vestiges archéologiques. Certains druides en connaissent parfois des bribes par cœur, jamais sous forme écrite, transmises oralement depuis des siècles."),

  // ══════════════════════════════════════════════════════════════════════════
  // HÉRITIERS
  // ══════════════════════════════════════════════════════════════════════════
  VM ('Héritiers', 1, "Les Héritiers sont tous des Faux-Semblants."),
  VM ('Héritiers', 2, "Ils sont apparus au cours du XIXe siècle."),
  VM ('Héritiers', 3, "Ils sont désignés aléatoirement par le Pacte des Tricheurs afin de sauver l'Univers de l'éveil du Grand Dragon grâce à un faible pouvoir de Prescience."),
  VM ('Héritiers', 4, "Ils perçoivent notamment différentes issues possibles à l'Apocalypse de 1914."),
  VM ('Héritiers', 5, "Suite à une ultime tricherie de Shaïtan, certains Héritiers sont des Chasseurs, élus afin d'éliminer les autres Héritiers."),
  vm ('Héritiers', 1, "Certains Héritiers sont hantés par leurs rêves prémonitoires et deviennent fous."),
  vm ('Héritiers', 2, "Il y a 333 Héritiers dans le monde. Quand certains meurent, d'autres prennent leur place de manière aléatoire. Ils commencent à avoir des rêves prémonitoires mais n'ont pas accès aux connaissances de l'Héritier qu'ils remplacent."),
  ind('Héritiers', 1, "Les Héritiers ont tous des rêves prémonitoires."),
  ind('Héritiers', 2, "Ce sont tous des Faux-Semblants."),
  ind('Héritiers', 3, "Certains Héritiers sont assassinés, apparemment sans raison (par les Chasseurs Héritiers)."),
  ind('Héritiers', 4, "La Communauté des Métaphysiciens consacre l'un de ses programmes de recherche aux Héritiers et possède un début de base de données solide."),
  ind('Héritiers', 5, "Morgane surveille ses quelques rares disciples Héritiers et essaie de comprendre de quoi il retourne."),

  // ══════════════════════════════════════════════════════════════════════════
  // MALÉDICTION DES FÉES
  // ══════════════════════════════════════════════════════════════════════════
  VM ('Malédiction des fées', 1, "C'est le Marcheur qui a maudit les fées, sous la menace des Docteurs du Grand Langage."),
  VM ('Malédiction des fées', 2, "La Malédiction est la suivante : « Loin les unes des autres, vous oublierez qui vous êtes. Proches, vous serez vos pires ennemies. En cela, l'argent sera votre arme. »"),
  VM ('Malédiction des fées', 3, "Elle est donc la cause unique de l'apparition des Faux-Semblants et de leur allergie à l'argent."),
  vm ('Malédiction des fées', 1, "Le Marcheur a été puni par les Docteurs pour être apparu à toutes les fées après l'échec de la seconde Alliance."),
  ind('Malédiction des fées', 1, "Selon les recherches des érudits, les Faux-Semblants — et leur allergie à l'argent — sont apparus peu après la naissance de la Monarchie."),
  ind('Malédiction des fées', 2, "De nombreuses théories tentent d'expliquer l'allergie à l'argent des fées et l'apparition des Faux-Semblants : don des dieux approuvant la Loi du Silence, vengeance de la Nature, lois de l'évolution, maladie génétique."),
  ind('Malédiction des fées', 3, "Les fées et animaux fabuleux d'Avalon ne sont pas sensibles à l'argent."),
  ind('Malédiction des fées', 4, "Un Faux-Semblant vivant trop longtemps caché parmi les humains perd sa Féerie. Mis au contact des fées, il la retrouve et se révèle."),
  ind('Malédiction des fées', 5, "L'histoire féerique est un tissu de trahisons et de crimes pire que l'histoire humaine."),

  // ══════════════════════════════════════════════════════════════════════════
  // MERLIN
  // ══════════════════════════════════════════════════════════════════════════
  VM ('Merlin', 1, "Il est né un peu avant le règne d'Arthur."),
  VM ('Merlin', 2, "Il a connu Viviane et a œuvré avec elle à la Seconde Alliance."),
  VM ('Merlin', 3, "Viviane lui a fait don de l'immortalité."),
  VM ('Merlin', 4, "Il est la plus haute autorité chez les druides."),
  VM ('Merlin', 5, "Il est l'instrument de l'emprisonnement de Viviane, dont il pense être responsable."),
  vm ('Merlin', 1, "Il est amoureux de Viviane et cherche à la libérer de la prison magique dans laquelle il pense l'avoir enfermée."),
  vm ('Merlin', 2, "Il hait Morgane et le Clan, qu'il continue de traquer."),
  vm ('Merlin', 3, "Il ignore la véritable nature de Viviane mais se doute qu'elle n'était pas qu'une simple fée."),
  vm ('Merlin', 4, "Il possède des connaissances d'autres disciplines magiques (nécromancie, spiritisme, théurgie) et entrevoit la possibilité d'une théorie globale de la magie en lien avec le Fluide."),
  vm ('Merlin', 5, "Il s'intéresse depuis la seconde moitié du XIXe siècle aux machines merveilleuses qui fonctionnent en Avalon dans l'espoir de trouver un moyen de libérer Viviane grâce à elles."),
  ind('Merlin', 1, "Merlin peut être rencontré lors d'une cérémonie de la Monarchie ou dans son esplumeor, à Brocéliande."),
  ind('Merlin', 2, "Tous les récits légendaires ou historiques sur la période arthurienne parlent de lui."),

  // ══════════════════════════════════════════════════════════════════════════
  // MORGANE
  // ══════════════════════════════════════════════════════════════════════════
  VM ('Morgane', 1, "Elle a fondé le Clan."),
  VM ('Morgane', 2, "Elle a créé la discipline du Souffle à partir du Livre de Fer légué par Viviane."),
  VM ('Morgane', 3, "Elle œuvre à l'instauration d'une Troisième Alliance sous la forme d'une Grande-Bretagne féerique."),
  vm ('Morgane', 1, "Elle a été l'instrument de la chute de la Seconde Alliance."),
  vm ('Morgane', 2, "Elle voue toujours une haine mortelle à Merlin et Viviane."),
  vm ('Morgane', 3, "Elle méprise les humains."),
  ind('Morgane', 1, "Les nombreux récits, légendaires ou historiques, de la période arthurienne font tous mention de Morgane et s'approchent plus ou moins de la vérité."),
  ind('Morgane', 2, "Merlin est son ennemi mortel : il a notamment essayé de défaire le Clan lors d'une croisade en Cornouailles autour de l'an Mil."),
  ind('Morgane', 3, "Le Clan a été traqué durant une partie du XIXe siècle par une coalition unissant Monarchie féerique, druides, Communautés, et Croisés paens. Cette période, nommée « les guerres magiques », a laissé de nombreux témoins et témoignages sur le Clan, sa nature et ses activités."),
  ind('Morgane', 4, "Le Clan a noyauté la Grande-Bretagne à des niveaux stratégiques très bien ciblés : son influence touche diverses institutions liées au pouvoir, jusqu'à la famille royale."),

  // ══════════════════════════════════════════════════════════════════════════
  // PACTE DES TRICHEURS
  // ══════════════════════════════════════════════════════════════════════════
  VM ('Pacte des Tricheurs', 1, "Le Pacte des Tricheurs est une alliance conclue entre trois Docteurs du Grand Langage : Viviane la fée, le Marcheur et Shaïtan le Subversif."),
  VM ('Pacte des Tricheurs', 2, "Il est destiné à préserver l'Univers et son Ordonnancement de l'éveil du Grand Dragon."),
  VM ('Pacte des Tricheurs', 3, "Il préserve également la contingence de l'Histoire car Shaïtan l'a rendu hypothétique : certains Héritiers sont des Chasseurs destinés à éliminer les autres Héritiers."),
  vm ('Pacte des Tricheurs', 1, "Le Pacte des Tricheurs est né dans la première moitié du XIXe siècle."),
  ind('Pacte des Tricheurs', 1, "Les Héritiers font des rêves prémonitoires qui leur annoncent le futur, et notamment la fin du monde tel qu'ils le connaissent."),
  ind('Pacte des Tricheurs', 2, "Les Héritiers ont une Némésis : certains Chasseurs, eux-mêmes Héritiers, sont destinés à les éliminer."),

  // ══════════════════════════════════════════════════════════════════════════
  // PRESCIENCE
  // ══════════════════════════════════════════════════════════════════════════
  VM ('Prescience', 1, "La Prescience est une capacité issue du Grand Langage."),
  VM ('Prescience', 2, "Elle consiste à observer un événement présent et à en deviner les innombrables causes et conséquences. La Prescience permet d'imaginer d'infinies chaînes de causalité afin de prédire le futur ou de reconstituer le passé."),
  VM ('Prescience', 3, "L'efficacité de la Prescience est limitée par le Grand Langage car tout sortilège de Grand Langage, Prescience comprise, est par définition un événement sans causalité."),
  VM ('Prescience', 4, "Le passé est nécessaire et figé, mais le futur est contingent. Il est possible de modifier l'enchaînement des événements à venir, et donc le futur, grâce à la connaissance totale ou lacunaire des chaînes de causalité."),
  vm ('Prescience', 1, "La Prescience n'est totalement maîtrisée que par les trois Tricheurs : le Marcheur, Viviane et Shaïtan."),
  vm ('Prescience', 2, "Les Héritiers ont une capacité presciente limitée et incontrôlée, leurs rêves prophétiques."),
  vm ('Prescience', 3, "Morgane, grâce au Livre de Fer, a la capacité d'user à rebours de la Prescience pour comprendre le passé."),
  ind('Prescience', 1, "Les Héritiers font régulièrement l'expérience de la Prescience par leurs rêves."),
  ind('Prescience', 2, "Morgane, et donc le Clan, possèdent des connaissances sur le passé grâce à la Prescience. Elle a déjà repéré des trous dans les chaînes de causalité, dus au Grand Langage, sans parvenir à les expliquer."),
  ind('Prescience', 3, "Certains membres du Clan, très doués, ont pu expérimenter un Souffle particulier, celui du Temps, qui n'est autre que la Prescience dont use Morgane mais que celle-ci n'a encore enseignée à personne."),
  ind('Prescience', 4, "La Communauté technologique travaille en collaboration avec les Métaphysiciens sur la structure du temps et l'hypothétique possibilité de construire une machine à remonter le temps ou à percevoir le passé."),

  // ══════════════════════════════════════════════════════════════════════════
  // SETH LE FÉLON
  // ══════════════════════════════════════════════════════════════════════════
  VM ('Seth le Félon', 1, "C'est un Docteur du Grand Langage."),
  VM ('Seth le Félon', 2, "Il a offert le secret de la mort à d'autres Docteurs qui se sont suicidés."),
  VM ('Seth le Félon', 3, "Il a été puni par Viviane et Gwydion qui ont séparé son esprit en deux parties."),
  VM ('Seth le Félon', 4, "Une moitié de son esprit se trouve avec son corps dans une pyramide inversée non loin des sources du Nil."),
  VM ('Seth le Félon', 5, "L'autre moitié est enfermée dans un poignard se trouvant au fond d'un lac glacé."),
  vm ('Seth le Félon', 1, "Il est l'un des artisans de la Grande Hérésie car il a inventé la religion."),
  vm ('Seth le Félon', 2, "Après sa fuite d'Ys, il a menacé la Grande Hérésie en se faisant adorer comme un dieu par les hommes et les fées."),
  ind('Seth le Félon', 1, "Seth est un personnage important de la religion égyptienne antique, aux côtés d'Osiris et d'Isis."),
  ind('Seth le Félon', 2, "Des témoignages archéologiques impliquant les Docteurs du Grand Langage font mention de lui."),
  ind('Seth le Félon', 3, "Une secte égyptienne, les Serviteurs du Dieu endormi, conserve le souvenir de sa fuite et de sa défaite. Elle cherche à le retrouver et possède des indices sur la localisation de la pyramide inversée située non loin des sources du Nil."),
  ind('Seth le Félon', 4, "La pyramide des sources du Nil a partiellement été visitée par Burton et Speke pendant leur expédition de 1858. Des documents autographes, qui n'ont jamais été divulgués, en font mention. Certains membres de l'expédition font d'étranges cauchemars et quelques-uns sont devenus fous."),

  // ══════════════════════════════════════════════════════════════════════════
  // SHAÏTAN LE SUBVERSIF
  // ══════════════════════════════════════════════════════════════════════════
  VM ('Shaïtan le Subversif', 1, "C'est un Docteur du Grand Langage."),
  VM ('Shaïtan le Subversif', 2, "Il a glissé deux erreurs dans le sortilège du Fluide. L'une permet de pratiquer une magie mineure. L'autre permet aux Survivants d'échapper à la mort."),
  VM ('Shaïtan le Subversif', 3, "Il est à l'origine de l'emprisonnement de Viviane tout en ayant fait croire que Merlin en était l'auteur."),
  VM ('Shaïtan le Subversif', 4, "Il est à l'origine du dévoiement du Pacte des Tricheurs en introduisant des Chasseurs parmi les Héritiers."),
  vm ('Shaïtan le Subversif', 1, "Il aime contourner les règles et tricher et déteste ce qui est figé, certain."),
  vm ('Shaïtan le Subversif', 2, "Il est l'inventeur du Fluide."),
  vm ('Shaïtan le Subversif', 3, "Il a fait échouer la Seconde Alliance."),
  vm ('Shaïtan le Subversif', 4, "Il est à l'origine du Pacte des Tricheurs."),
  vm ('Shaïtan le Subversif', 5, "Il est le guide des Chasseurs Héritiers."),
  vm ('Shaïtan le Subversif', 6, "Les insectes sont ses yeux et ses oreilles. Il peut percevoir ainsi ce que font les Héritiers et les Chasseurs et suivre leurs actions comme le spectateur d'un jeu dont il a fixé les règles."),
  ind('Shaïtan le Subversif', 1, "De nombreux documents archéologiques attestent l'existence d'un dieu nommé Shaïtan et surnommé le Subversif, qui a d'autres noms selon les cultures (Loki par exemple)."),
  ind('Shaïtan le Subversif', 2, "L'étude du Fluide par les nécromanciens permet d'en connaître les propriétés."),
  ind('Shaïtan le Subversif', 3, "Les Survivants existent et peuvent être rencontrés, voire étudiés."),
  ind('Shaïtan le Subversif', 4, "Certains nécromanciens ont étudié le phénomène des Survivants."),
  ind('Shaïtan le Subversif', 5, "Merlin a été l'instrument de l'emprisonnement de Viviane et il sait que quelque chose d'étrange est arrivé au moment où il a voulu jeter son sort."),
  ind('Shaïtan le Subversif', 6, "Tous les Chasseurs Héritiers ont rencontré au moins une fois Shaïtan."),

  // ══════════════════════════════════════════════════════════════════════════
  // UNIVERS
  // ══════════════════════════════════════════════════════════════════════════
  VM ('Univers', 1, "Ça est la matière originelle de l'Univers rassemblée, à l'origine, en une unique masse chaotique qui s'est disloquée lorsqu'elle conçut son existence et, par réciproque, son altérité. De cette dislocation naquirent les Docteurs du Grand Langage."),
  VM ('Univers', 2, "L'Univers est le résultat de la dislocation de Ça organisée par l'Ordonnancement."),
  VM ('Univers', 3, "L'Ordonnancement est l'ensemble des règles édictées par les Docteurs via le Grand Langage, c'est-à-dire les lois de l'Univers."),
  ind('Univers', 1, "Certains mythes cosmogoniques font mention de Ça et d'un Grand Dragon."),
  ind('Univers', 2, "Les Héritiers rêvent du Grand Dragon et peuvent sentir son lien avec l'Univers."),

  // ══════════════════════════════════════════════════════════════════════════
  // VIVIANE LA FÉE
  // ══════════════════════════════════════════════════════════════════════════
  VM ('Viviane la Fée', 1, "C'est une Docteure du Grand Langage."),
  VM ('Viviane la Fée', 2, "Elle a prédit l'éveil du Grand Dragon, il y a bien longtemps."),
  VM ('Viviane la Fée', 3, "Elle a été enfermée et privée de ses pouvoirs par Shaïtan."),
  VM ('Viviane la Fée', 4, "Elle a conçu le Pacte des Tricheurs avec Shaïtan et le Marcheur pour éviter la fin du monde."),
  VM ('Viviane la Fée', 5, "Elle a laissé en héritage à Morgane un Livre de Fer empli de secrets magiques, qui est à l'origine de la magie du Clan, le Souffle."),
  VM ('Viviane la Fée', 6, "Les pixies sont ses yeux et ses oreilles sur Terre et à Avalon."),
  vm ('Viviane la Fée', 1, "Elle fut la créatrice des fées lors de l'Ordonnancement."),
  vm ('Viviane la Fée', 2, "Elle est partie à la recherche de Seth et en a triomphé avec l'aide du Marcheur."),
  vm ('Viviane la Fée', 3, "Elle a séparé la substance de Seth en deux parties."),
  vm ('Viviane la Fée', 4, "Elle a découvert la Prescience."),
  vm ('Viviane la Fée', 5, "Elle a tenté de fonder la Seconde Alliance sous le règne d'Arthur avec Merlin."),
  vm ('Viviane la Fée', 6, "Elle a offert l'immortalité à Merlin."),
  ind('Viviane la Fée', 1, "Certains documents archéologiques la représentent sous la forme d'une fée, en compagnie de dieux d'autres civilisations, et en particulier des dieux égyptiens comme Isis, Osiris ou Seth."),
  ind('Viviane la Fée', 2, "Elle est présente dans les légendes féeriques et dans la littérature arthurienne. Toutefois, ces témoignages brassent le vrai et le faux."),
  ind('Viviane la Fée', 3, "Merlin a connu Viviane, en a été amoureux, se croit responsable de sa disparition et cherche à la libérer."),
  ind('Viviane la Fée', 4, "Morgane et ses plus proches disciples savent que le grand Livre de Fer dont est né le Souffle du Clan a été rédigé par Viviane."),

  // ══════════════════════════════════════════════════════════════════════════
  // YAHVÉ (JÉSUS)
  // ══════════════════════════════════════════════════════════════════════════
  VM ('Yahvé (Jésus)', 1, "C'est un Docteur du Grand Langage."),
  VM ('Yahvé (Jésus)', 2, "Il a créé la religion juive, puis chrétienne, et fondé par l'intermédiaire d'un fidèle, Guillaume de Dalmatie, la secte des Pèlerins du mont Ébal, à qui il est apparu plusieurs fois."),
  VM ('Yahvé (Jésus)', 3, "Il est à l'origine de la condamnation d'Avalon."),
  vm ('Yahvé (Jésus)', 1, "Il est parti à la poursuite de Seth le Félon."),
  ind('Yahvé (Jésus)', 1, "Des documents archéologiques anciens associent Jésus à différents autres dieux, notamment des dieux celtes ou égyptiens."),
  ind('Yahvé (Jésus)', 2, "La secte des Pèlerins du mont Ébal est née des visions de Guillaume de Dalmatie, qui aurait parlé à Jésus, et d'un évangile qui lui est propre et qui est conservé à la bibliothèque du Vatican."),
  ind('Yahvé (Jésus)', 3, "Avalon a commencé à disparaître peu de temps après la crucifixion."),

  // ══════════════════════════════════════════════════════════════════════════
  // YS
  // ══════════════════════════════════════════════════════════════════════════
  VM ('Ys', 1, "C'est la retraite secrète des Docteurs du Grand Langage."),
  VM ('Ys', 2, "Elle a été construite en des temps immémoriaux, pendant la Première Alliance."),
  VM ('Ys', 3, "Elle a été engloutie volontairement par les Docteurs afin de les soustraire à la vue des hommes et des fées à la suite de la Grande Hérésie."),
  VM ('Ys', 4, "L'emprisonnement des Docteurs dans Ys est la cause de leur langueur et du suicide de certains d'entre eux."),
  vm ('Ys', 1, "C'est une cité sous-marine d'or et de plomb."),
  ind('Ys', 1, "Il existe de nombreux mythes et légendes, humains et féeriques, mentionnant la cité d'Ys."),
  ind('Ys', 2, "On peut trouver sa représentation, toujours la même, sur de très anciens sites archéologiques localisés un peu partout sur la planète."),
  ind('Ys', 3, "Il existe une ancienne cité sous-marine, nommée l'Observatrice (Lathanièlle en ancien celte), appartenant manifestement à une civilisation disparue et très avancée, qui avait pour but d'observer Ys et les Docteurs. Cette cité est mentionnée dans quelques légendes celtiques."),
];

// ── Insertion ─────────────────────────────────────────────────────────────────

const { rows: existing } = await client.query(`SELECT COUNT(*) FROM public.indices_verites`);
if (parseInt(existing[0].count) > 0) {
  console.log(`Table déjà peuplée (${existing[0].count} lignes). Abandon.`);
  console.log('Pour re-seeder : DELETE FROM public.indices_verites CASCADE; puis relancer.');
  await client.end();
  process.exit(0);
}

let inserted = 0;
for (const row of SEED) {
  await client.query(
    `INSERT INTO public.indices_verites (element_nom, element_type, type, texte, ordre)
     VALUES ($1, $2, $3, $4, $5)`,
    [row.element_nom, row.element_type, row.type, row.texte, row.ordre]
  );
  inserted++;
}

const counts = {};
for (const row of SEED) counts[row.element_nom] = (counts[row.element_nom] || 0) + 1;
console.log(`\n✓ ${inserted} éléments insérés dans indices_verites`);
for (const [nom, n] of Object.entries(counts).sort()) console.log(`  ${nom}: ${n}`);

await client.end();
