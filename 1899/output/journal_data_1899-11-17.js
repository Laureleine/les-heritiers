// Date: 1899-11-17
// Restauration Pass: 2
// Base de données complète des articles de presse du 1899-11-17 (Version Restaurée, 7 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 4,
    "category": "Sport",
    "title": "Chronique du recordman",
    "summary": "Bertin réalise une performance remarquable en couvrant la distance en 4h55, malgré une crevaison et les rigueurs du trajet reliant Tours, Orléans et Étampes jusqu'à la porte Maillot.",
    "paragraphs": [
      "Le recordman a dû s'arrêter quinze minutes en raison d'une crevaison, mais il a repris sa course sans délai. Il fut signalé à Tours à midi, à Orléans à deux heures de l'après-midi, et a franchi Étampes avant de rallier la porte Maillot.",
      "Bertin a couvert la distance totale en 4h55, une performance remarquable compte tenu des conditions météorologiques et de la saison avancée."
    ]
  },
  {
    "id": 2,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Actualités des scènes parisiennes",
    "summary": "Au programme des théâtres : fin du Vieux Marcheur, préparatifs de la Bête Hélène aux Variétés, début des matinées littéraires au Gymnase et triomphe de Mme Debriège au théâtre Déjaxet.",
    "paragraphs": [
      "Ce soir, aux Variétés, dernière représentation du Vieux Marcheur. La première de la Bête Hélène est fixée à mercredi, avec un luxe inusité, un orchestre renforcé et un ballet réglé par Mme Mariquita.",
      "Le théâtre du Gymnase confie à M. Paul Franck l'organisation de matinées littéraires et artistiques sous le titre « Les Auteurs gais », dont le cycle débutera le 9 décembre.",
      "Au théâtre Déjaxet, le succès de Mme Debriège est complet dans Joli Sport. Dimanche dernier, plus de cinq cents personnes ont été refusées par manque de places."
    ]
  },
  {
    "id": 3,
    "page": 4,
    "category": "Spectacles",
    "title": "Programme des Opéras et Théâtres",
    "summary": "Répertoire dominical à l'Opéra-Comique avec Cendrillon, le Chalet et Fra Diavolo, tandis que les représentations de Tristan et Iseult s'achèvent au Nouveau-Théâtre.",
    "paragraphs": [
      "Spectacles du dimanche prochain à l'Opéra-Comique : en matinée, Cendrillon ; en soirée, le Chalet et Fra Diavolo.",
      "Les quatre dernières représentations de Tristan et Iseult au Nouveau-Théâtre auront lieu les 21, 25 et 28 novembre."
    ]
  },
  {
    "id": 4,
    "page": 4,
    "category": "Faits Divers",
    "title": "Témoignage : Guérison d'un forgeron",
    "summary": "Un témoignage sur les bienfaits du Goudron Guyot contre les affections respiratoires, soulignant son efficacité là où les méthodes traditionnelles échouent, tout en mettant en garde contre les contrefaçons.",
    "paragraphs": [
      "Un forgeron témoigne de sa guérison de bronchite et d'oppression respiratoire grâce au Goudron Guyot, après avoir essayé en vain les tisanes et les emplâtres.",
      "Le Goudron Guyot est recommandé contre le rhume, la bronchite et la phtisie, car il aide à assainir les voies respiratoires. Il est impératif de se méfier des contrefaçons et de vérifier la signature apposée sur l'étiquette."
    ]
  },
  {
    "id": 5,
    "page": 4,
    "category": "Feuilleton",
    "title": "Jacques et Noëla (XXV)",
    "summary": "L'idylle naissante entre Jacques Châtel et Noëla de Montalais se dessine au bois de Boulogne, malgré les tensions sous-jacentes et la présence de M. de Nerval.",
    "paragraphs": [
      "Les feuilles mortes jonchaient le bois de Boulogne sous un ciel sombre, présageant l'hiver. Jacques Châtel, lieutenant autrefois taciturne, s'acheminait vers la villa des Montalais avec une joie nouvelle.",
      "Malgré la gêne secrète de Ben Jefferson envers Jacques, ce dernier se rapprochait de Noëla de Montalais. Une idylle naissait entre les deux jeunes gens, bien que le mot d'amour n'eût pas encore été prononcé.",
      "Leurs entretiens quotidiens et l'intérêt que Noëla portait à l'ami de Jacques, M. de Nerval, laissaient entrevoir des tensions et des non-dits."
    ]
  },
  {
    "id": 6,
    "page": 4,
    "category": "Concerts et Divertissements",
    "title": "Championnats et spectacles",
    "summary": "Le championnat international de lutte se poursuit avec des combats décisifs. En parallèle, les scènes parisiennes, notamment les Folies-Bergère et le Moulin de la Galette, proposent des galas et ballets de premier ordre.",
    "paragraphs": [
      "La série des luttes du championnat international continue ce soir avec des affrontements entre Kara Ahmed et Raymond, Niemann et Edgar Joly, Van den Berg et H. Lorange, et enfin Jean le Marseillais contre Louis Chappe.",
      "Aux Folies-Bergère, le succès du « Prince Désir » est largement salué par la presse, mettant en scène Jane Thylda dans un ballet admiré de tous.",
      "Une soirée de gala est organisée au Moulin de la Galette au profit d'un artiste-auteur blessé, avec le précieux concours de nombreux artistes, dont Mme Anna Thibaud."
    ]
  },
  {
    "id": 7,
    "page": 4,
    "category": "Communications Diverses",
    "title": "Annonces d'assemblées et fêtes",
    "summary": "L'agenda associatif et mondain s'étoffe avec l'assemblée de la Bouchée de pain, le banquet des employés en photographie, les festivités des Briards et la grande fête hivernale des sociétés de gymnastique.",
    "paragraphs": [
      "L'assemblée générale de l'œuvre de la Bouchée de pain aura lieu lundi prochain à neuf heures du soir dans les salons Marguery.",
      "La société des Briards donnera sa fête annuelle ce samedi. Par ailleurs, les employés en photographie tiendront leur banquet samedi aux salons Tavernier.",
      "La deuxième fête d'hiver des sociétés de gymnastique de la Seine se tiendra le dimanche 3 décembre au théâtre de l'Ambigu. L'assemblée constitutive des Orphelins du livre se réunira le 23 novembre au Cercle de la Librairie."
    ]
  }
];
