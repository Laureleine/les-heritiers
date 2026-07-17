// Date: 1900-11-26
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-11-26 (Version Restaurée, 51 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Éditorial",
    "title": "Le droit de la femme",
    "summary": "Après l'accès des femmes au barreau, cet éditorial souligne l'urgence de réformer le Code civil pour garantir aux épouses la pleine gestion de leur salaire contre les abus de la puissance maritale.",
    "paragraphs": [
      "Le vote par le Sénat de la proposition de loi tendant à ouvrir aux femmes l'accès à la profession d'avocat a remis à l'ordre du jour toutes les questions féministes, et certaines personnes ont pensé que celle qui venait ainsi de recevoir une solution n'était peut-être pas la plus pressante.",
      "Il est incontestable que des millions de femmes, femmes d'ouvriers, femmes d'employés, attendent qu'on apporte à la loi certaines modifications qui intéressent directement leur bonheur, leur vie et celle de leurs enfants. Il s'agit de leur assurer la libre disposition de leur salaire personnel et de soustraire le fruit de leur travail propre aux abus de la puissance que le Code reconnaît à leur mari.",
      "La condition économique de la femme a subi en effet une transformation totale sans que sa condition juridique se modifiât d'une façon correspondante. Le travail de la femme reste trop souvent la propriété d'un autre, et ce protecteur est trop souvent un exploiteur.",
      "D'autres pays ont déjà compris la nécessité de protéger le salaire de la femme. En France, différents projets ont été déposés, mais aucun n'a été définitivement adopté. La Chambre a voté en 1896 une loi qui consacre un progrès, mais celle-ci exigerait quelques amendements pour être vraiment efficace.",
      "Ce qui est essentiel, c'est qu'on s'occupe de la question, c'est qu'on ne l'ajourne pas. Le Sénat tiendra à honneur de la faire sortir du silence et le Parlement, en votant le projet, pourra se flatter d'avoir démocratisé la loi, fortifié la famille et diminué la misère."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Les Sans Famille - Marie-Madeleine",
    "summary": "Mathilde manœuvre pour obtenir le titre de comtesse de Rambert. Tandis que les préparatifs de la chasse vont bon train, les secrets de famille et les intrigues sentimentales pèsent sur l'aristocratie.",
    "paragraphs": [
      "Les deux sœurs formaient, après le déjeuner, un groupe charmant lorsque, sur la terrasse devant laquelle on amenait les chevaux des cavaliers et des dames qui prenaient part à la chasse, la plus jeune s'appuyait à l'épaule de son aînée.",
      "La plus jeune, Mathilde, avait atteint son but : elle aurait ce qu'elle désirait, le titre de comtesse de Rambert et l'amour de Maurice. Sa sœur aînée, devenue baronne, lui conseilla la prudence.",
      "Le marquis de Rambert, au moment de monter à cheval, s'était approché de sa fille pour exiger le silence sur un secret qu'elle partageait avec Georges de Prayssac. Georges, quant à lui, cherchait à se détacher de la chasse pour retrouver une amie à l'étang des Aulnes."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "International",
    "title": "La maladie du tsar",
    "summary": "Le dernier bulletin de santé de l'empereur de Russie annonce une amélioration. Le souverain, dont l'état ne suscite plus d'inquiétude, a recouvré ses facultés et s'enquiert des affaires de l'État.",
    "paragraphs": [
      "Voici le dernier bulletin concernant l'état de santé de l'empereur de Russie : à neuf heures du matin, la température du corps était de 37°5.",
      "D'après un renseignement fourni par un personnage de l'entourage du souverain, la santé de celui-ci n'inspire plus aucune inquiétude après un état critique au début de novembre. L'impératrice veille constamment à son chevet.",
      "Le tsar a conservé toute sa connaissance et demande des nouvelles des affaires de l'État."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Colonies",
    "title": "À Madagascar",
    "summary": "Le paquebot Iraouaddy est arrivé à Marseille. À Madagascar, la situation demeure stationnaire malgré une reprise des échanges commerciaux dans la région de Tamatave et un calme relatif dans l'ouest.",
    "paragraphs": [
      "Le paquebot Iraouaddy est arrivé à Marseille avec 157 passagers, dont le gouverneur de la Réunion, M. de Beauchamp, admis à la retraite.",
      "À Madagascar, la situation est stationnaire. Si l'apaisement est long à se faire, le calme règne dans l'ouest. Les anciens chefs rebelles rappelés de la Réunion ont été fort mal accueillis par la population locale.",
      "Le commerce va croissant et les statistiques laissent prévoir une augmentation sensible des échanges pour Tamatave."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Politique",
    "title": "Lot-et-Garonne : Premier tour de scrutin",
    "summary": "Le scrutin dans le Lot-et-Garonne pour remplacer le regretté M. Faye a abouti à l'élection de M. Sira, mettant fin à la période de ballottage qui opposait notamment MM. Gibesse et Belhomme.",
    "paragraphs": [
      "Les résultats du scrutin dans le Lot-et-Garonne montrent un ballottage persistant entre les différents candidats, dont MM. Gibesse, Belhomme et Deluns-Montaud. M. Sira a finalement été élu en remplacement de M. Faye, décédé en septembre dernier."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Politique étrangère",
    "title": "La situation en Chine et dépêche du général Voyron",
    "summary": "Le général Voyron informe que les troupes françaises occupent le triangle Tien-Tsin, Pékin et Pao-Ting-Fou, tandis que les puissances s'unissent pour stabiliser la situation en Chine sous l'égide du comte de Waldersee.",
    "paragraphs": [
      "Le général Voyron télégraphie de Tien-Tsin que nos troupes ont pris leurs quartiers d'hiver dans le triangle compris entre Tien-Tsin, Pékin et Pao-Ting-Fou. La capitale est désormais reliée à la côte par une ligne télégraphique française.",
      "Les puissances, incluant la Russie, l'Allemagne et la France, cherchent à agir de concert pour régler la question chinoise. Pendant ce temps, le comte de Waldersee annonce des succès militaires contre les Boxers."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Actualité",
    "title": "Le président Krüger à Paris",
    "summary": "Le président Krüger a consacré son dimanche à la prière et à sa famille, tout en exprimant sa vive reconnaissance face aux chaleureuses manifestations de sympathie du public parisien devant l'hôtel Scribe.",
    "paragraphs": [
      "Le président Krüger a passé sa journée de dimanche dans le calme familial, fidèle à ses habitudes religieuses. Il a travaillé avec son petit-fils et a manifesté son bonheur face à la sympathie témoignée par les Français.",
      "En l'absence d'église hollandaise à Paris, il a célébré lui-même l'office religieux. Il a également reçu la visite de son petit-fils et de son épouse, un moment empreint d'émotion.",
      "La foule a manifesté son enthousiasme devant l'hôtel Scribe à plusieurs reprises, acclamant le président lors de ses apparitions au balcon."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Politique",
    "title": "Manifestations pour le président Krüger",
    "summary": "Des manifestations de sympathie envers le président Krüger ont animé la capitale, nécessitant l'intervention de la police pour dissiper quelques attroupements bruyants sur les boulevards et place de la Bourse.",
    "paragraphs": [
      "Des promeneurs, perchés sur les impériales, portaient sur leurs genoux des lettres géantes dont l'ensemble formait un « Vive Krüger » des plus réussis.",
      "Dans la soirée, les manifestations nocturnes se sont reproduites, sans gravité. Une soixantaine de tapageurs trop bruyants furent conduits au poste de l'Opéra ; dix de ces arrestations ont été maintenues.",
      "Dans l'après-midi, des bandes de jeunes gens, un peu trop expansifs, avaient été successivement dispersées place de la Bourse et boulevard Montmartre."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Politique",
    "title": "En vue des réceptions du président Krüger",
    "summary": "Le protocole et le Conseil municipal s'activent pour organiser la réception officielle du président Krüger. M. Mollard et le docteur Leyds collaborent pour fixer le calendrier des prochaines visites diplomatiques.",
    "paragraphs": [
      "Hier après-midi, une nouvelle délégation du Conseil municipal s'est présentée à l'hôtel Scribe pour prendre date avec le président, en vue de la réception à l'Hôtel de Ville.",
      "Les conseillers ont appris, par l'organe du docteur Leyds, que rien n'était encore décidé à cet égard, mais que, ce soir même, le président du Conseil municipal serait fixé par télégramme sur les intentions du président.",
      "M. Mollard, sous-directeur du protocole, est ensuite venu conférer avec le docteur Leyds au sujet des visites que feront M. Delcassé, ministre des Affaires étrangères, et le président. La date exacte de ces démarches n'est point encore choisie."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Politique",
    "title": "Programme du président Krüger",
    "summary": "Le président Krüger poursuit ses travaux diplomatiques avant de prévoir une visite de l'Exposition universelle, suivant l'exemple de ses proches qui ont visité le Trocadéro et le Champ-de-Mars.",
    "paragraphs": [
      "Aujourd'hui, M. Krüger, après avoir travaillé dans la matinée avec M. Leyds, recevra les rares personnalités auxquelles il a accordé des audiences.",
      "Vers midi, si le temps est favorable, le président se rendra, avec sa famille, à l'Exposition dont il veut voir les édifices avant leur disparition.",
      "Dans l'après-midi d'hier, M. et Mme Eloff, leurs enfants et miss Guttmann ont visité les palais du Trocadéro et du Champ-de-Mars. Ils sont rentrés à cinq heures à l'hôtel Scribe."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Faits Divers",
    "title": "Les cadeaux offerts au président Krüger",
    "summary": "Le président Krüger, peu sensible au luxe des fleurs officielles, a été profondément touché par un modeste bouquet de violettes offert par une humble ouvrière parisienne.",
    "paragraphs": [
      "D'innombrables gerbes de fleurs, d'orchidées aux teintes rares, de chrysanthèmes, de roses, de lilas et de mimosas ont été envoyées depuis trois jours au président Krüger. De larges rubans aux couleurs du Transvaal et de l'État libre d'Orange les nouent toutes.",
      "C'est mal connaître le président Krüger que de croire lui faire plaisir par ces présents. Sa simplicité native s'offense du luxe dont ils témoignent et tant de cadeaux l'étonnent un peu ; il a néanmoins consenti à les accepter pour ne pas désobliger ses amis inconnus.",
      "Un cadeau extrêmement simple l'a cependant profondément touché, celui d'un modeste bouquet de violettes de trois ou quatre sous, noué d'une faveur verte à laquelle on avait épinglé un carré de bristol sans aucune autre inscription que celle-ci, tracée d'une main malhabile : « Au président Krüger, une petite ouvrière de Paris ».",
      "L'excellent homme qu'est notre hôte a pris le bouquet et en a détaché quelques violettes qu'il a offertes à Mme Eloff. Puis, il a mis les humbles fleurs dans un verre d'eau et a emporté le tout dans sa chambre, après avoir soigneusement serré dans son portefeuille la faveur verte et le carré de bristol."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Politique",
    "title": "Modalités des audiences du président",
    "summary": "Le président Krüger informe le public que, faute de temps suffisant, seules les demandes d'audience formulées par lettre motivée seront désormais prises en considération.",
    "paragraphs": [
      "On nous prie d'annoncer que le président Krüger n'accordera une audience qu'aux personnes qui en auront fait la demande par lettre motivée, le temps restreint dont il dispose ne lui permettant pas, à son grand regret, de recevoir tous ceux qui ont le désir de lui présenter leurs hommages."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Politique",
    "title": "Nouveaux hommages rendus au président",
    "summary": "Une série de personnalités politiques, militaires et représentants d'associations diverses se sont succédé pour s'inscrire sur le registre des visiteurs du président Krüger.",
    "paragraphs": [
      "Après le ministre des Affaires étrangères et son chef de cabinet, M. Beau, les ministres du Commerce, des Travaux publics, de la Justice et de la Guerre, MM. Millerand, Baudin, Monis, le général André, ainsi que M. Mougeot, sont venus s'inscrire sur le registre des visiteurs.",
      "Une délégation de la Ligue des femmes pour le désarmement, un groupe d'adhérents aux sociétés régimentaires, les délégués de l'association des anciens chasseurs d'Afrique, se sont présentés sans pouvoir être reçus et en ont exprimé leurs regrets.",
      "On remarquait en outre, sur le registre, les noms de M. Scheurer-Kestner, président de la Fédération des sociétés alsaciennes et lorraines, du général Brugère, des membres de la chambre de commerce italienne de Paris, etc.",
      "Le chef d'état-major de l'armée et tous les officiers d'ordonnance du ministre de la Guerre étaient, en outre, inscrits à côté du général André."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Politique",
    "title": "La Reine Wilhelmine et le président Krüger",
    "summary": "En échange de messages cordiaux avec la reine Wilhelmine, le président Krüger prépare son départ pour la Hollande, tout en prolongeant son séjour parisien de quelques jours.",
    "paragraphs": [
      "Nous avons publié le message chevaleresque de la petite reine de Hollande au président. Celui-ci a répondu à la gracieuse souveraine en la mettant au courant de son état de santé et en la remerciant d'avoir mis à sa disposition le croiseur Gelderland.",
      "Par l'intermédiaire du petit-fils du président, M. P.-O.-W. Krüger, la reine a adressé un nouveau message le priant, cette fois, de hâter sa venue en Hollande, où il sera reçu par elle et ses sujets avec joie.",
      "Le président Krüger n'entend point quitter Paris avant trois jours, au moins. Nul doute qu'ici-là, il fasse parvenir ses remerciements anticipés à la reine Wilhelmine."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Politique",
    "title": "M. Krüger à Bruxelles",
    "summary": "Le comité bruxellois pour le Transvaal sollicite vivement une visite du président Krüger, dont l'itinéraire post-parisien inclura probablement la Belgique.",
    "paragraphs": [
      "Bruxelles, 25 novembre. M. Reinhard, président du comité pour le Transvaal, dont le siège est à Bruxelles, est à Paris à l'effet d'insister auprès du docteur Leyds pour obtenir que le président Krüger ne cherche pas à se soustraire à la grandiose manifestation que le peuple belge lui prépare à Bruxelles.",
      "Six cents sociétés ont jusqu'à présent adhéré à l'action du comité pour le Transvaal. L'adresse de sympathie, préparée par le même comité et à être remise au président Krüger, est appuyée par des milliers de signatures.",
      "Le comité pour le Transvaal a reçu des dépêches sur l'entretien du président Krüger en personne aujourd'hui. Aucune décision n'a encore été prise quant à sa destination après son départ de Paris. Ce départ aura probablement lieu mercredi ou jeudi. Le président Krüger s'arrêtera en Belgique et en Hollande. Une décision sera prise ultérieurement fixant la date de cette visite en Belgique."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Faits Divers",
    "title": "Récompense pour l'agent Meunier",
    "summary": "Le préfet de police propose l'octroi d'une médaille d'or de première classe à l'agent Meunier, grièvement blessé lors de l'arrêt courageux de deux chevaux emportés.",
    "paragraphs": [
      "Nous avons relaté hier la belle conduite de l'agent Meunier qui a reçu, avant-hier, de sérieuses blessures en arrêtant deux chevaux emportés. Le préfet de police vient de proposer l'agent Meunier pour une médaille d'or de première classe."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Politique Internationale",
    "title": "L'impression à l'étranger concernant le président Krüger",
    "summary": "L'accueil triomphal du président Krüger en France éveille une sympathie européenne marquée pour les Boërs, contrastant avec l'indifférence britannique et l'hésitation diplomatique allemande.",
    "paragraphs": [
      "Berlin, 25 novembre. Les journaux d'ici enregistrent, avec un soin qui dénote une vraie sympathie pour les Boërs, les manifestations enthousiastes que provoque l'arrivée du président Krüger en France. On peut affirmer que l'accueil ne sera pas moins chaleureux à Berlin, si le président Krüger y vient durant son séjour en Europe.",
      "Dans un article de fond, la Gazette de Francfort met en regard l'attitude vaillante de la République et du gouvernement français avec l'attitude pitoyable du gouvernement allemand qui encourageait les Boërs avant-guerre et leur ferma la porte lorsqu'ils vinrent implorer son secours.",
      "Quoi qu'il en soit, continue la Gazette de Francfort, l'Europe s'est délivré un témoignage peu flatteur en permettant à la puissance gigantesque de l'Angleterre d'écraser un vaillant petit peuple.",
      "Londres, 25 novembre. Le Journal de Reynolds publie un article déclarant que la réception offerte au président Krüger devrait donner aux jingoes de ce pays la conviction que le monde n'est pas avec eux. M. Krüger vient en Europe, non comme le chef humilié d'un État vaincu, mais comme le représentant indompté de l'indépendance de son pays."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Nouvelles Coloniales",
    "title": "Le général Archinard",
    "summary": "Le général Archinard est promu général de division. Figure marquante des campagnes d'Afrique, il s'est illustré notamment par la prise de Ségou et la chute de l'empire d'Ahmadou.",
    "paragraphs": [
      "Sont promus dans l'artillerie de marine au grade de général de division, le général de brigade Archinard ; au grade de généraux de brigade, les colonels Boyer et Lasserre.",
      "Le nouveau divisionnaire était général de brigade depuis avril 1896 et commandait depuis deux ans à ce titre quand il fut nommé inspecteur-adjoint des troupes de l'artillerie de marine, poste dans lequel il est remplacé par le général Lasserre.",
      "Il a servi successivement en France, où il s'est particulièrement distingué en 1870, au Bourget, puis en Cochinchine, au Cambodge et au Siam. C'est surtout en Afrique que s'est passée la plus longue partie de la carrière du général Archinard. Rappelons surtout que ce fut lui qui dirigea la colonne qui s'empara de Ségou après une lutte acharnée et brisa ainsi l'empire d'Ahmadou."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Nouvelles Coloniales",
    "title": "La Côte française des Somalis",
    "summary": "M. Bonhoure, gouverneur de la Côte française des Somalis, a rejoint son poste. La colonie, dont la prospérité croît, s'apprête à inaugurer sa première saison théâtrale à Djibouti.",
    "paragraphs": [
      "M. Bonhoure, gouverneur de la Côte française des Somalis, est parti hier de Marseille pour rejoindre son poste. La situation de la colonie, dont le gouvernement intérimaire a été habilement exercé par M. Angouivant, secrétaire général, devient de jour en jour plus florissante.",
      "Les conditions de séjour dans la colonie tendent également à s'améliorer. Djibouti aura même un théâtre cet hiver. Le conseil d'administration de la colonie vient, en effet, d'accueillir favorablement la proposition d'organiser une série de représentations au cours de cette saison."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Nouvelles Coloniales",
    "title": "Le capitaine Joalland",
    "summary": "Le capitaine Joalland, rescapé de la mission Voulet-Chanoine, a regagné Say via le Tchad et Zinder, avant de poursuivre son itinéraire par le haut Sénégal.",
    "paragraphs": [
      "Le capitaine Joalland, de l'ancienne mission Voulet-Chanoine, est arrivé à Say le 17 novembre dernier. Au lieu de rentrer en France par le Congo, à l'exemple d'un certain nombre d'officiers de la mission Foureau, il a effectué son retour par le Tchad et Zinder. De Say, le capitaine Joalland a continué sa route par le haut Sénégal."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Nouvelles Coloniales",
    "title": "Changements à la Côte-d'Ivoire",
    "summary": "M. Roberdeau, gouverneur de la Côte-d'Ivoire, et M. Cor, secrétaire général du Congo, sont autorisés à regagner la France pour raisons de santé.",
    "paragraphs": [
      "M. Roberdeau, gouverneur de la Côte-d'Ivoire, dont la santé est quelque peu ébranlée par un long séjour dans les colonies, vient d'être autorisé à rentrer en France par le courrier du 5 décembre prochain. M. Cor, secrétaire général du Congo, rentre également en France pour raison de santé."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "À propos de La Flèche",
    "summary": "La suppression du Prytanée militaire de La Flèche ne saurait être décidée par voie budgétaire ; elle requiert impérativement un acte législatif spécial après examen en commission.",
    "paragraphs": [
      "On nous fait remarquer que la suppression de l'école de La Flèche ne saurait être accomplie par voie budgétaire. Créé par une loi, maintenu dans son existence d'école militaire par une autre loi, le Prytanée ne peut être supprimé que par acte législatif spécial, après l'examen ordinaire d'une commission."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Nouvelles Maritimes",
    "title": "L'Escadre de la Méditerranée et du Nord",
    "summary": "L'escadre de la Méditerranée débute des exercices intensifs à Toulon, tandis qu'une division légère a été formée au sein de l'escadre du Nord sous les ordres du contre-amiral Gourdon.",
    "paragraphs": [
      "On mande de Toulon que les bâtiments de l'escadre appareilleront demain mardi pour exécuter différents exercices : attaque de torpilleurs, tirs, dragages, etc., répartis en six journées.",
      "L'escadre du Nord a été l'objet d'une nouvelle répartition de ses unités et une division légère a été formée sous le commandement du contre-amiral Gourdon."
    ]
  },
  {
    "id": 24,
    "page": 2,
    "category": "Nouvelles Maritimes",
    "title": "La question des sous-marins",
    "summary": "Face au développement de la flotte sous-marine, la Marine rationalise ses types de bâtiments, distinguant les unités de côte électriques des submersibles de haute mer pour optimiser la formation du personnel.",
    "paragraphs": [
      "La consultation adressée par le ministre de la Marine au Conseil supérieur au sujet du choix d'un type de sous-marin ne peut que produire d'excellents résultats. L'instrument est créé, il faut qu'il serve dans les meilleures conditions.",
      "Notre collaborateur Jean Prollo indiquait, il y a quelques jours, les divers types de sous-marins que nous possédons. Quatre sont déjà en service : le Gymnote, le Gustave-Zédé, le Morse et le Narval. Nous en avons dix en chantier ou en achèvement à flot et huit autres vont être mis en chantier.",
      "Multiplier indéfiniment les types de sous-marins est un obstacle à la création d'un personnel habile. Cependant, il ne peut être question d'unifier complètement le sous-marin. Nous possédons deux classes bien distinctes : le sous-marin de côte (électrique, faible rayon) et le sous-marin de haute mer (submersible à double moteur)."
    ]
  },
  {
    "id": 25,
    "page": 2,
    "category": "Dépêches de l'Étranger",
    "title": "Congrès international contre la grêle",
    "summary": "Le congrès international contre la grêle s'est ouvert à Rome devant un millier de délégués. L'Italie annonce la création d'un observatoire météorologique sur le mont Rosa.",
    "paragraphs": [
      "Rome, 25 novembre. Aujourd'hui s'est ouvert le congrès international pour l'emploi du canon contre la grêle. Un millier de congressistes étaient présents. Le sous-secrétaire d'État à l'agriculture a annoncé que le gouvernement instituera un observatoire météorologique sur le mont Rosa."
    ]
  },
  {
    "id": 26,
    "page": 2,
    "category": "Dépêches de l'Étranger",
    "title": "Meurtre à Belgrade",
    "summary": "M. Miodrag Protitsch, ancien préfet de district, a été assassiné hier à Krusevac. Les autorités privilégient la thèse d'une vengeance personnelle, l'auteur du crime restant pour l'heure introuvable.",
    "paragraphs": [
      "Belgrade, 25 novembre. L'ancien préfet de district, M. Miodrag Protitsch, a été assassiné hier à Krusevac. L'identité de l'auteur de ce forfait demeure inconnue et l'on attribue ce crime à une vengeance personnelle."
    ]
  },
  {
    "id": 27,
    "page": 2,
    "category": "Dépêches de l'Étranger",
    "title": "La trichinose",
    "summary": "Une épidémie de trichinose sévit à Murcie. Le bilan s'établit à quatorze victimes décédées, tandis que six autres malades luttent actuellement contre la mort.",
    "paragraphs": [
      "Murcie, 25 novembre. Une épidémie de trichinose frappe la région : quatorze personnes sont déjà décédées des suites de la maladie et six autres patients se trouvent dans un état désespéré."
    ]
  },
  {
    "id": 28,
    "page": 2,
    "category": "Dépêches de l'Étranger",
    "title": "Le canal de Nicaragua",
    "summary": "La commission du canal transocéanique préconise le tracé nicaraguayen. Le projet prévoit une profondeur de trente pieds pour un coût estimé à 120 millions de dollars.",
    "paragraphs": [
      "New-York, 25 novembre. Le rapport préliminaire de la commission du canal transocéanique donne la préférence à la route du Nicaragua. Il suggère la construction d'un canal d'une profondeur de trente pieds, dont le coût s'élèverait à 120 millions de dollars."
    ]
  },
  {
    "id": 29,
    "page": 2,
    "category": "Guerre au Transvaal",
    "title": "Inquiétude sur la situation des Uitlanders",
    "summary": "Le retour des délégués des Uitlanders confirme l'impossibilité d'un retour à Johannesburg pour les exploitants miniers, ravivant les craintes britanniques sur la situation locale.",
    "paragraphs": [
      "Londres, 25 novembre. L'inquiétude renaît à la suite d'une dépêche en provenance de Durban, annonçant que les représentants du comité des Uitlanders, autorisés par lord Roberts à se rendre à Johannesburg, sont revenus en proclamant qu'il est impossible pour les Uitlanders d'envisager un retour dans la région des mines."
    ]
  },
  {
    "id": 30,
    "page": 2,
    "category": "Social",
    "title": "Agitation au marché du Temple",
    "summary": "Menacés par des projets de démolition, les fripiers du Temple réclament le maintien d'une surface d'exploitation suffisante pour assurer la pérennité de leur corporation.",
    "paragraphs": [
      "Le commerce de la friperie ambulante proteste au carreau du Temple, car sur l'immense marché couvert dont les deux tiers sont voués à la démolition, il ne lui restera qu'un local très restreint. La corporation des chineurs, regrattiers, revendeurs, brocanteurs et fripiers de Paris exprime ainsi sa vive inquiétude pour l'avenir de la profession.",
      "Le président du syndicat de la brocante, M. Gérard, sollicite une surface équivalente à celle dont ils disposent actuellement, soit environ 2 500 mètres carrés. Il redoute que l'espace proposé ne soit insuffisant pour accueillir dignement la clientèle et les casiers indispensables à l'exercice du métier.",
      "Ces fripiers sont, en majeure partie, des gagne-petit dont la situation mérite toute l'attention. Paris compte 4 750 fripiers. Le métier attire des individus d'origines diverses, allant d'anciennes danseuses à d'ex-chanteuses de café-concert, et certains y font fortune en exportant leurs marchandises vers l'Afrique."
    ]
  },
  {
    "id": 31,
    "page": 2,
    "category": "Faits Divers",
    "title": "Terrible explosion à Aix-en-Othe",
    "summary": "Un effroyable accident est survenu à Aix-en-Othe : l'explosion d'un appareil à acétylène à l'hôtel du Commerce a causé la mort de quatre personnes et fait vingt blessés.",
    "paragraphs": [
      "Troyes, 25 novembre. Un effroyable accident s'est produit hier soir, à six heures, dans la petite commune d'Aix-en-Othe. Un appareil contenant de l'acétylène, destiné à l'éclairage de l'hôtel du Commerce, a éclaté. Quatre cadavres ont été retirés des décombres et vingt personnes ont été blessées."
    ]
  },
  {
    "id": 32,
    "page": 2,
    "category": "Faits Divers",
    "title": "La catastrophe du Sud-Express",
    "summary": "Les réparations de la voie ferrée suite au déraillement du Sud-Express sont achevées. L'enquête judiciaire se poursuit par des perquisitions tandis que les blessés se rétablissent.",
    "paragraphs": [
      "Mont-de-Marsan, 25 novembre. Les dégâts causés à la voie ferrée par le déraillement du Sud-Express sont à peu près réparés. Des essais de vitesse sur la voie des trains pairs ont été effectués. M. Clément, commissaire spécial, a procédé à des perquisitions dans les bureaux de la compagnie. Les blessés, MM. Dardé, Caron et Petitbon, sont en voie de guérison."
    ]
  },
  {
    "id": 33,
    "page": 2,
    "category": "Social",
    "title": "La tuberculose en Seine-et-Oise",
    "summary": "À Versailles, la lutte contre la tuberculose s'organise. Le docteur Fleury préconise la création d'un sanatorium populaire sur le modèle allemand pour soigner la classe ouvrière.",
    "paragraphs": [
      "Un groupe d'électeurs versaillais a obtenu des candidats l'engagement de créer un sanatorium populaire pour tuberculeux. La municipalité de Versailles pourrait ainsi donner un exemple à suivre pour la classe ouvrière, décimée par cette maladie.",
      "Le docteur Fleury a exposé, devant un nombreux auditoire au Grand-Théâtre de Versailles, les avantages des sanatoria sur le modèle de ceux existant en Allemagne, où le repos, l'aération et l'alimentation abondante permettent des résultats de guérison importants."
    ]
  },
  {
    "id": 34,
    "page": 2,
    "category": "Social",
    "title": "Fête scolaire dans la Marne",
    "summary": "Le canton de Givry-en-Argonne a célébré l'inauguration de sa Mutuelle lors d'une fête réunissant les autorités locales, marquée par une conférence sur l'enseignement et un banquet convivial.",
    "paragraphs": [
      "Givry-en-Argonne, 25 novembre. La fête d'inauguration de la Mutuelle du canton a réuni les personnalités locales pour un banquet et une conférence sur l'enseignement.",
      "Un punch, offert par le comité démocratique du canton, a terminé la fête."
    ]
  },
  {
    "id": 35,
    "page": 2,
    "category": "Faits Divers",
    "title": "Bulletin du travail à Saint-Étienne",
    "summary": "Une explosion d'origine criminelle près du dépôt des tramways de Saint-Étienne a provoqué une enquête policière, suivie le lendemain par une manifestation entravant la circulation.",
    "paragraphs": [
      "La police enquête sur l'explosion d'une cartouche, probablement à la dynamite, près du dépôt des tramways électriques. Aucun accident de personne n'est à déplorer. Le lendemain, des manifestants ont obstrué la voie devant un car, nécessitant l'intervention de la police."
    ]
  },
  {
    "id": 36,
    "page": 2,
    "category": "Échos",
    "title": "Nouvelles diverses",
    "summary": "Chronique mondaine et curieuse : activités présidentielles à Rambouillet, distinctions honorifiques, hommages patriotiques et faits insolites glanés à travers le monde.",
    "paragraphs": [
      "Le Président de la République a chassé à Rambouillet.",
      "La Société de géographie recevra la mission saharienne le 5 décembre prochain.",
      "Une croix fleurie a été déposée, place de la Concorde, en un pieux hommage aux villes de Lille et de Valenciennes.",
      "M. Hamard vient d'être nommé officier de la couronne de Roumanie.",
      "Un fermier américain, en proie à de vifs différends avec son propriétaire, a fait construire sa maison au sommet même d'un arbre.",
      "Le Musée Britannique s'est récemment enrichi d'un billet de banque chinois d'une antiquité remarquable, datant du règne de l'empereur Hung-Wu."
    ]
  },
  {
    "id": 37,
    "page": 2,
    "category": "Faits Divers",
    "title": "L'accident du boulevard Saint-Michel",
    "summary": "Un drame effroyable s'est déroulé boulevard Saint-Michel : un vieillard a été mortellement écrasé par trois camions successifs, soulevant l'indignation violente de la foule.",
    "paragraphs": [
      "Un vieillard, M. Médier, a été renversé et écrasé par trois camions successifs sur le boulevard Saint-Michel. L'état de la victime est jugé désespéré par les médecins. La foule, saisie d'indignation devant ce spectacle tragique, a voulu lyncher les charretiers, lesquels ont dû être conduits d'urgence au poste de police pour échapper à la vindicte populaire."
    ]
  },
  {
    "id": 38,
    "page": 2,
    "category": "Faits Divers",
    "title": "Un dangereux monomane",
    "summary": "Terreur rue Bolivar : un individu armé a ouvert le feu sur deux passants, MM. Leber et Edile. L'agresseur, en fuite, est activement recherché par les forces de l'ordre.",
    "paragraphs": [
      "Un inconnu a fait usage d'un revolver, blessant grièvement deux personnes, M. Leber et un nommé Edile, alors qu'ils circulaient rue Bolivar. Le coupable, dont les mobiles demeurent obscurs, est activement recherché par les autorités."
    ]
  },
  {
    "id": 39,
    "page": 2,
    "category": "Faits Divers",
    "title": "Mystérieuse affaire",
    "summary": "Double agression par arme à feu à Paris : une femme blessée garde le silence sur l'identité de ses assaillants, tandis qu'un homme est hospitalisé dans un état grave après une rixe.",
    "paragraphs": [
      "Noémie Dilly a été atteinte par un coup de revolver. Interrogée sur les circonstances, elle se refuse obstinément à nommer ses visiteurs. Dans une bagarre séparée, un nommé Antoine Berrier a été grièvement blessé par balle et transporté d'urgence à l'hôpital Cochin."
    ]
  },
  {
    "id": 40,
    "page": 3,
    "category": "Faits Divers",
    "title": "Mystérieuse découverte dans un égout",
    "summary": "D'étranges liasses de lettres intactes et des récépissés ont été retrouvés dans les égouts parisiens. La police enquête sur l'origine de cette curieuse trouvaille.",
    "paragraphs": [
      "Alors qu'ils procédaient au curage d'un égout du boulevard, des ouvriers ont fait, hier après-midi, une découverte pour le moins curieuse.",
      "Au milieu de la vase, ils ont mis au jour des liasses de lettres affranchies et plusieurs récépissés. Aucune enveloppe ne semblait avoir été déchirée, et aucun vol n'a été constaté. M. Rocher, commissaire de police, est chargé de l'enquête pour éclaircir ce mystère."
    ]
  },
  {
    "id": 41,
    "page": 3,
    "category": "Faits Divers",
    "title": "Agression violente contre M. Jean H.",
    "summary": "M. Jean H., jardinier de vingt-quatre ans, a été agressé par trois individus rue Damesme. Frappé et blessé à coups de couteau, il a dû être transporté en urgence à l'hôpital Cochin.",
    "paragraphs": [
      "M. Jean H., un jardinier de vingt-quatre ans, regagnait son domicile rue Damesme, hier soir. En face du numéro 32 de l'avenue d'Italie, trois individus l'ont assailli et roué de coups sans mot dire.",
      "L'infortuné a tenté de se défendre, mais il a reçu un violent coup de pied dans le ventre, suivi de plusieurs coups de couteau portés à la cuisse. Les agresseurs ont aussitôt pris la fuite.",
      "Transporté d'urgence à l'hôpital Cochin, M. H. a déclaré au commissaire de police qu'il ne connaissait nullement ses agresseurs."
    ]
  },
  {
    "id": 42,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestation de malfaiteurs après une agression",
    "summary": "M. Marc-L. a été agressé et dépouillé par deux individus rue de la Fidélité. Grâce à la vigilance des gardiens de la paix, les malfaiteurs, pris en flagrant délit, ont été conduits au Dépôt.",
    "paragraphs": [
      "Un nommé M. Marc-L., domicilié rue de la Fidélité, a été agressé hier matin par deux individus qui l'ont grièvement blessé à coups de casse-tête avant de le dépouiller de ses effets personnels.",
      "L'alerte donnée, quatre gardiens de la paix ont pris les malfaiteurs en chasse à travers les rues adjacentes et ont fini par les capturer. Ils ont été identifiés comme étant Marcel Denioux, trente-quatre ans, et Joseph Leluc, dix-neuf ans.",
      "Surpris en flagrant délit, ils ont été trouvés en possession d'une somme importante en numéraire et de divers objets volés à M. Marc-L. Les deux individus ont été aussitôt conduits au Dépôt pour y être interrogés."
    ]
  },
  {
    "id": 43,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Divers faits divers en banlieue",
    "summary": "Une série d'incidents tragiques en banlieue parisienne : accidents de la voie publique à Courbevoie et Levallois, un enfant brûlé à Bois-Colombes, une agression à Bezons et une macabre découverte au Bourget.",
    "paragraphs": [
      "Courbevoie : Mme Leplois, en traversant la voie publique, a eu les deux jambes broyées par une voiture de passage.",
      "Levallois-Perret : Mme Marie Balland a été grièvement blessée après avoir été renversée par un cheval qui s'était échappé de son écurie.",
      "Bois-Colombes : Le jeune Adrien Grassi, âgé de quatre ans, est dans un état désespéré après avoir mis le feu à ses vêtements en s'approchant trop près d'un poêle.",
      "Bezons : Un maçon, Alfred Tergan, a été victime d'une tentative de meurtre par trois individus dans la chambre de sûreté de la mairie. L'un des agresseurs, Eugène Perrachon, a été arrêté.",
      "Le Bourget : Le cadavre d'un homme horriblement mutilé a été découvert sur la ligne de Soissons, entre Aubervilliers et Le Bourget."
    ]
  },
  {
    "id": 44,
    "page": 3,
    "category": "Feuilleton",
    "title": "Le Fruit Défendu : La revanche de Rose-Manon",
    "summary": "L'instruction se poursuit sur la double vie de M. Villaurier. Face aux questions du juge, le domestique Philippe révèle les absences nocturnes récurrentes de son maître, alimentant le mystère entourant le suicide de Rose-Manon.",
    "paragraphs": [
      "Le juge d’instruction, par un interrogatoire serré, pressait Philippe de questions concernant les habitudes nocturnes de son maître, cherchant à percer le secret des sorties clandestines de ce dernier.",
      "Avec une hésitation contenue, le domestique finit par révéler que M. Villaurier menait effectivement une existence double ; il avait pris l'habitude, voici deux ans et demi, de s'absenter chaque nuit durant une période de six mois.",
      "Le juge, poursuivant ses investigations avec opiniâtreté, cherchait à établir la nature exacte des liens unissant Villaurier à Rose-Manon, espérant ainsi mettre en lumière le mobile occulte ayant poussé cette dernière au suicide."
    ]
  },
  {
    "id": 45,
    "page": 3,
    "category": "Chronique des départements",
    "title": "Faits divers en province",
    "summary": "La chronique judiciaire rapporte un tragique suicide à Angers, le meurtre odieux d'une veuve à Craponne près de Lyon, ainsi qu'un accident périlleux survenu dans les montagnes surplombant Luchon.",
    "paragraphs": [
      "Angers : Une femme nommée Alix, âgée de cinquante et un ans, s'est donné la mort en se jetant dans les eaux du Layon.",
      "Lyon : Madame veuve Blein a été découverte étranglée à son domicile de Craponne. Tout porte à croire que le mobile de ce crime odieux est le vol.",
      "Toulouse : Un jardinier, M. Narcisse, a fait une chute dans un précipice sur la montagne surplombant Luchon ; il a dû être secouru par six jeunes gens portés à son secours."
    ]
  },
  {
    "id": 46,
    "page": 3,
    "category": "Chronique Financière",
    "title": "État du marché financier et boursier",
    "summary": "Le marché financier témoigne d'une reprise encourageante malgré les tensions internationales. Tandis que les fonds ottomans et russes progressent, la Banque de France recule légèrement face à la clôture de l'Exposition.",
    "paragraphs": [
      "Le marché montre une excellente allure de reprise dans les places européennes, malgré les craintes légitimes liées aux événements extérieurs.",
      "Les fonds ottomans et les emprunts russes ont regagné en valeur. Les actions de la Banque de France ont cependant fléchi lors de la séance.",
      "Les titres des chemins de fer ont bénéficié d'une plus-value sensible grâce au fort trafic de la dernière semaine de l'Exposition."
    ]
  },
  {
    "id": 47,
    "page": 3,
    "category": "Sports",
    "title": "Résultats des courses et sports",
    "summary": "Fin de saison pour le championnat de lutte parisien. À Auteuil, Gratin triomphe lors du Grand Prix de l'élevage, tandis que les pronostics et résultats du trot monté animent les courses de Vincennes.",
    "paragraphs": [
      "Le championnat de lutte de Paris touche à sa fin avec des rencontres d'une vive intensité.",
      "Auteuil : Compte-rendu des épreuves hippiques incluant le prix de la Banquette et le Grand Prix de l'élevage, brillamment remporté par Gratin.",
      "Courses de Vincennes : Détails complets des pronostics et résultats officiels du trot monté."
    ]
  },
  {
    "id": 48,
    "page": 4,
    "category": "Feuilleton",
    "title": "Les Miettes du bonheur",
    "summary": "Rappelé d'urgence à Paris pour un congrès médical, Henri Lipray, tourmenté par l'absence de son père et l'angoisse concernant l'innocence de sa mère, se voit contraint de laisser des directives pour son retour.",
    "paragraphs": [
      "Parti sans laisser d'adresse à la poste, on apprit confidentiellement qu'aucune personne n'avait encore réclamé de lettres au nom de Lipray.",
      "Puis, voici que ses attributions le forçaient à rentrer à Paris. Il avait dû prévenir son domestique, le vieux Jean, de l'endroit où il se trouvait au cas où on dût le rappeler immédiatement à la capitale.",
      "Un matin, il reçut un télégramme du docteur Lorillot : « Congrès sur la tuberculose a lieu après-demain. Il faut absolument que vous y assistiez. Revenez d'urgence. Nous comptons sur vous pour y prendre la parole. »",
      "Il devait partir, s'éloigner avec sa tristesse, son anxiété. S'éloigner sans rien savoir, le cœur toujours rongé par l'incertitude. Il était venu avec un peu d'espoir, et il se demandait s'il devait le conserver.",
      "La Fatalité continuerait donc à peser sur sa vie ? Il écrivit alors une lettre ainsi formulée : « Mon père, je vous en supplie, écoutez-moi. J'ai les preuves, les preuves matérielles de l'innocence de ma mère. Venez vite à Paris. Ne perdez pas une minute ; j'ai tant de hâte à tomber dans vos bras, tant de joie à la pensée de vous entendre prononcer enfin ce mot qui me sera si doux : Mon fils ! »",
      "« Je suis venu pour vous dire cela, pour vous prier de m'accompagner à Paris où les ténèbres qui jusqu'alors ont enveloppé le passé se dissiperont, où le plus léger doute s'évanouira de votre âme. Mais la Fatalité veut que vous soyez absent. Elle veut aussi, cette Fatalité, que je ne puisse vous rencontrer. »",
      "« Mais je pense que ces lignes ne tarderont pas à être entre vos mains. Mon père, je vous attends les bras ouverts, des mots de tendresse et de respect aux lèvres. »",
      "Il signa ces lignes, mit la feuille de papier dans une enveloppe qu'il cacheta. Puis, il jeta cette lettre au bureau de poste après en avoir ainsi libellé la suscription : « Monsieur le docteur Lipray, Poste restante, à Saint-Maurice. » De cette façon, dès que le vieillard arriverait, cette lettre lui serait remise.",
      "Une pensée vint encore à Henri : « Et si mon père était rentré à Larignies ? » Il y retourna avant de repartir. Mais le docteur n'était pas encore de retour. Gertrude se montrait de plus en plus angoissée. Où était passé son maître ? Pourquoi ne donnait-il plus signe de vie ? Son voyage, décidément, devenait bien inquiétant."
    ]
  },
  {
    "id": 49,
    "page": 4,
    "category": "Chronique",
    "title": "Avec une plume et de l'encre",
    "summary": "Réflexion humoristique sur la difficulté de la correspondance épistolaire. L'auteur souligne le mérite de ceux qui, sans gain personnel, consacrent temps et peine à la rédaction de longues lettres.",
    "paragraphs": [
      "Écrire des lettres n'est pas chose facile. Du moins pour moi. S'il y a au monde une chose que je déteste, c'est d'avoir à écrire à quelqu'un, surtout une longue missive pleine de thèmes et d'arguments. Cela me fatigue la tête et me donne des crampes dans les doigts.",
      "Toutefois, il y a des gens que cela amuse, principalement les femmes, si je ne me trompe. Sans doute, cela leur est facile ; elles sont créées pour cela, comme il y a des individus créés pour peindre des tableaux fameux ou pour jouer du violon.",
      "Cependant, de telles personnes composent la minorité et servent à confirmer la règle. Par conséquent, lorsque nous recevons une lettre bien rédigée et suffisamment longue d'une personne qui n'avait rien à gagner en l'écrivant, et pour laquelle elle a sacrifié son temps et sa peine, que devons-nous en conclure ?",
      "Vous répondrez que cela dépend du contenu, soit que la lettre offre la probabilité de nous faire quelque bien, ou qu'elle écarte de nous un danger quelconque. Vous avez raison."
    ]
  },
  {
    "id": 50,
    "page": 4,
    "category": "Faits Divers",
    "title": "Hélène guérira-t-elle ?",
    "summary": "Le docteur Berniatte enquête sur le passé de madame Vernier. En interrogeant Jeannine, il espère lever le voile sur les secrets tragiques nécessaires à la guérison de sa patiente.",
    "paragraphs": [
      "Après le départ d'Henri Lipray, le docteur Berniatte s'était fait cette réflexion : « Vais-je enfin découvrir ceux que je cherche vainement ? Je sais déjà où habite la cousine. C'est là quelque chose, certes. Malheureusement, l'essentiel est de mettre la main sur l'amant ou l'ami toujours introuvable. De lui surtout dépend la réussite de ma tentative. »",
      "Dès le lendemain, il s'était rendu à l'adresse que lui avait indiquée Lipray pour questionner la jeune fille, et apprendre si le travail de reconstitution qu'il avait effectué sur l'origine de la folie de madame Vernier était exact.",
      "Il demanda madame Berget. La concierge le renseigna. Il gravit l'escalier, et bientôt, il fut introduit par Jeannine elle-même dans le petit salon de l'appartement qu'elle n'allait pas tarder à quitter. La jeune fille parut assez surprise à la vue de ce visiteur élégant qu'elle ne connaissait pas.",
      "Tout de suite, avec aisance, il s'excusa de sa démarche : « Je vous demande pardon, mademoiselle, de venir vous importuner. Mais je crois devoir faire appel à votre bonté, à votre dévouement, à votre cœur, pour une œuvre d'humanité. » « Je vous écoute, monsieur. »",
      "Réfugié dans un coin du salon, Armand, un peu intimidé, à demi caché derrière les rideaux d'une fenêtre, regardait ce monsieur dont il n'avait pas encore vu le visage, ce monsieur qui avait quelque chose d'étrange dans la physionomie et dans l'éclat fauve des prunelles, et qui disait à présent : « Voici, mademoiselle, il s'agit de la guérison d'une personne qui vous fut, du moins j'ai tout lieu de le croire, chère autrefois. »",
      "Un nom vint instinctivement à la bouche de Jeannine : « Hélène. » Elle se reprit : « Madame Vernier. » « Justement. » Elle demanda, toute troublée : « Vous êtes sans doute le célèbre médecin auquel elle a été confiée ? » Berniatte sourit : « Célèbre, mademoiselle, est peut-être un peu excessif. Je suis, en tout cas, dévoué à mes malades. »",
      "« Alors, monsieur, votre opinion est que madame Vernier est susceptible de recouvrer la raison ? » « Parfaitement. » « Mais que puis-je, moi, pour cela ? » « Beaucoup, mademoiselle. » Alors l'aliéniste expliqua à la jeune fille le plan qu'il avait conçu depuis longtemps et pour lequel certains concours lui étaient indispensables.",
      "Quand il eut bien développé ce plan, il ajouta : « Maintenant, mademoiselle, vous devez comprendre l'importance de ma démarche. D'après les renseignements précis que j'ai pu prendre, je suis persuadé que ce drame a été précédé d'un autre, où vous avez joué, vous, un rôle admirable. »",
      "« N'est-il pas vrai qu'avant le jour où la folie frappa madame Vernier, une scène s'était passée une nuit, une scène où vous vous substituâtes à votre cousine, coupable d'avoir reçu un homme pendant l'absence de son mari ? » « C'est vrai. » « Voulez-vous avoir l'amabilité de me dire ce qui eut lieu par la suite ? »",
      "Jeannine n'avait plus aucune raison de se taire. Elle conta à l'aliéniste tout ce qui s'était produit à la suite de la nuit fatale jusqu'au moment où Hélène, le bras levé, ayant sur les lèvres les mots par lesquels elle allait s'accuser, était tombée, évanouie.",
      "Quand elle eut achevé, il dit : « Je vous remercie, mademoiselle. Tout ce que vous venez de me dire me sera extrêmement précieux. Mes déductions étaient justes. À présent, je vais agir à parfaite connaissance de cause. »",
      "Il expliqua enfin comment il avait trouvé son adresse grâce au docteur Lipray. « Maintenant, mademoiselle, je vous serai reconnaissant de bien vouloir vous tenir à ma disposition. Il est possible que j'aie besoin de vous, de votre assistance même, à Saint-Mandé. »"
    ]
  },
  {
    "id": 51,
    "page": 4,
    "category": "Presse spécialisée",
    "title": "L'Agriculture Nouvelle",
    "summary": "Le nouveau numéro de L'Agriculture Nouvelle détaille les enjeux du concours agricole, l'acclimatation des poissons, la culture fruitière et le rôle crucial des femmes dans l'organisation des écoles agricoles.",
    "paragraphs": [
      "L'Agriculture Nouvelle contient seize pages de texte et des gravures. Ce numéro est vendu au prix de dix centimes.",
      "Au sommaire : Le Concours général agricole par Marcel Vacher, Acclimatation des Poissons par P. Zipcy, et les Tourteaux alimentaires par J. Troude.",
      "Citons en outre un article illustré, par Louis Bréchemin, consacré au Lièvre belge. Les lecteurs suivront également avec un grand intérêt les études de MM. J. Nanot et Troude sur la dessiccation des fruits et la culture fruitière.",
      "M. Lucien Cornet, député, dans un article d'une haute actualité, étudie l'organisation des écoles agricoles de filles. Cet article doit être lu par tous ceux qu'intéresse le rôle si important de la femme dans les fermes."
    ]
  }
];
