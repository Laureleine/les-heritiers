// Date: 1900-10-13
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-10-13 (Version Restaurée, 25 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 2,
    "category": "International",
    "title": "Collision entre torpilleurs russes",
    "summary": "Au large de Port-Arthur, une collision entre les torpilleurs russes n° 7 et n° 104 a entraîné le naufrage du premier. L'équipage a pu être sauvé, malgré trois blessés signalés lors de l'accident maritime.",
    "paragraphs": [
      "Le Messager du Gouvernement publie la dépêche suivante, expédiée de Port-Arthur le 2 octobre par le vice-amiral Alexéief : Le Koréiet, commandé par le capitaine de vaisseau Loismann, est parti le 2 octobre de Chan-Haï-Kouan avec des torpilleurs.",
      "Le 2, à quatre heures du matin, le torpilleur n° 7, commandé par le lieutenant de vaisseau Efthimiétief, a dû s'arrêter à cause d'une avarie à la machine survenue suite à une collision avec le torpilleur n° 104, commandé par le lieutenant de vaisseau Richter.",
      "La chambre de chauffe du torpilleur n° 7 étant remplie d'eau, l'avarie fut constatée. Comme la mer était très houleuse, les officiers et l'équipage furent transbordés sur le torpilleur n° 104.",
      "Le Koréiet a pris le torpilleur n° 7 à la remorque ; le n° 7 a sombré à une profondeur de 16 brasses, à un mille de la côte. Le torpilleur n° 104 a été légèrement avarié par le choc. Il n'y a pas eu de pertes humaines, mais trois marins ont été blessés."
    ]
  },
  {
    "id": 2,
    "page": 2,
    "category": "Social",
    "title": "Une Circulaire de M. Baudin sur les bagages",
    "summary": "Le ministre des Travaux publics, M. Pierre Baudin, rappelle aux compagnies de chemins de fer leurs obligations. Il conteste leurs excuses sur le retard des trains et exige une meilleure gestion du service des bagages.",
    "paragraphs": [
      "M. Pierre Baudin, ministre des Travaux publics, vient d'adresser aux compagnies de chemins de fer une circulaire dans laquelle il qualifie de peu sérieuses les raisons invoquées par ces dernières concernant les retards des trains, notamment l'argument tiré de la dimension des colis.",
      "La quantité des bagages enregistrés n'a pas suivi une progression proportionnelle à celle du nombre des voyageurs. Sur cent voyageurs, il y a eu moins d'enregistrements en 1898 qu'en 1888, et le poids moyen des bagages par enregistrement a diminué.",
      "Le remède à l'encombrement réside, selon le ministre, dans la création de trains supplémentaires et dans le renforcement temporaire du personnel des gares. M. Baudin estime que toute tentative de restreindre le service provoquerait des réclamations violentes de la part du public.",
      "Il est désormais démontré que la proportion des colis volumineux dans les express est inférieure à celle des autres trains. C'est principalement par les articles de messageries et par les colis postaux que les convois se trouvent encombrés.",
      "Bien que le ministre ne se croie pas en droit de déterminer lui-même les objets admis comme bagages, il estime que les compagnies doivent, avant toute réforme, exécuter scrupuleusement les prescriptions du cahier des charges et corriger les défectuosités de leur administration."
    ]
  },
  {
    "id": 3,
    "page": 2,
    "category": "Échos et Anniversaires",
    "title": "L'Anniversaire du Combat d'Orléans",
    "summary": "À Fleury-aux-Choux, une cérémonie solennelle a commémoré hier le combat du 11 octobre 1870. Vétérans et représentants ont rendu hommage aux braves inhumés à la Sablière.",
    "paragraphs": [
      "Hier, à onze heures, a eu lieu à l'église de Fleury-aux-Choux la célébration de l'anniversaire du combat du 11 octobre 1870. Assistaient à cette touchante cérémonie les vétérans des armées de terre et de mer, les médaillés coloniaux, les sauveteurs français, les combattants de 1870, les sapeurs-pompiers et la musique d'Orléans.",
      "À l'issue de la cérémonie, le cortège s'est rendu au monument de la Sablière, où ont été inhumés les braves soldats morts sur le champ de bataille lors du combat du 11 octobre. De superbes couronnes ont été déposées sur le monument."
    ]
  },
  {
    "id": 4,
    "page": 2,
    "category": "Échos et Anniversaires",
    "title": "L'Anniversaire de Brouvelieures",
    "summary": "Les survivants du corps franc des Vosges se sont réunis au Cercle militaire pour commémorer le combat de Brouvelieures. Un grand rassemblement national est prévu l'an prochain au pied du monument aux morts.",
    "paragraphs": [
      "Une vingtaine de survivants du corps franc des Vosges se sont réunis jeudi, au Cercle militaire, pour célébrer par un banquet l'anniversaire du combat de Brouvelieures, où le corps franc a reçu le baptême du feu.",
      "Il a été décidé de faire appel à tous les survivants pour les grouper l'an prochain à Brouvelieures, au pied du monument élevé à la mémoire des camarades tombés dans ce combat. Des circulaires seront envoyées à tous les membres connus des compagnies et les anciens volontaires à qui cette circulaire ne parviendrait pas sont priés de faire connaître leur adresse à M. Mansuy, ancien lieutenant, boulevard Magenta, à Paris."
    ]
  },
  {
    "id": 5,
    "page": 2,
    "category": "Mouvement Consulaire",
    "title": "Nominations consulaires récentes",
    "summary": "Le ministère des Affaires étrangères procède à une réorganisation de plusieurs postes consulaires, incluant des transformations de statuts et de nombreuses nominations diplomatiques et administratives.",
    "paragraphs": [
      "Par décision du ministre des Affaires étrangères, plusieurs changements ont été effectués dans les consulats. Le consulat général à Melbourne est transformé en vice-consulat et rattaché à Sydney.",
      "Le consulat de France à Mogador est transformé en vice-consulat. Le vice-consulat à Larache est transféré à Rabat.",
      "Sont nommés : M. Hippeau, consul à Larnaca ; M. Dupas, vice-consul à Santiago de Cuba ; M. Moet, vice-consul à Galveston ; M. Robin, vice-consul à Syra ; M. Gaillardet, vice-consul à Tunis ; M. Le Brun, consul à Jersey ; M. Pinard, consul à Malte ; M. Malpertuy, consul à Casablanca ; M. Jeannier, vice-consul à Mogador ; M. Leriche, vice-consul à Rabat ; M. Gaillard, drogman à Fès ; M. Nettement, consul à Porto-Rico ; M. Jouve, vice-consul à New-York ; M. Pigonneau, chancelier à Newcastle ; M. Barthélémy, chancelier à Londres."
    ]
  },
  {
    "id": 6,
    "page": 2,
    "category": "Guerre au Transvaal",
    "title": "Nouvelles de la guerre au Transvaal",
    "summary": "Le général Buller prépare son retour en Angleterre, tandis que l'arrivée de Lord Roberts est attendue. Des mouvements de commandos Boers sont signalés près de Vryburg et le président Kruger s'embarque pour l'Europe.",
    "paragraphs": [
      "On fait les préparatifs nécessaires pour recevoir le général Buller, qui retourne en Angleterre. Lord Roberts est attendu pour mardi.",
      "À Vryburg, le 12 octobre, les Boers ont enlevé des bestiaux dans des fermes isolées à l'est. On signale plusieurs détachements d'entre eux à Marikam-Road. Le général Delarey est annoncé à 11 milles de Kraan-Pan avec un commando.",
      "Le cuirassé hollandais, à bord duquel le président Kruger s'embarque pour l'Europe, est arrivé."
    ]
  },
  {
    "id": 7,
    "page": 2,
    "category": "Faits Divers",
    "title": "Incendies en Belgique",
    "summary": "De violents incendies ont dévasté des propriétés à Vilvorde-lez-Bruxelles et à Boves. Malgré l'intervention des secours, les dégâts matériels sont considérables et on déplore un pompier blessé.",
    "paragraphs": [
      "Bruxelles, 12 octobre : Un terrible incendie a éclaté à Vilvorde-lez-Bruxelles, chez Mme veuve Muylders, détruisant l'immeuble ainsi que la maison voisine. Le pompier Faes a été blessé lors de l'intervention.",
      "À Boves, une ferme exploitée par M. Sevrin, bourgmestre, a été détruite par un incendie, causant pour 200 000 francs de dégâts."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Faits Divers",
    "title": "Accident de chemin de fer",
    "summary": "Le Sud-Express à destination de Paris a percuté hier une locomotive immobilisée en gare de Miranda. Si les chauffeurs ont été blessés, aucun passager n'est à déplorer dans cet accident ferroviaire.",
    "paragraphs": [
      "Madrid, 12 octobre : Le Sud-Express, allant à Paris, a tamponné hier une locomotive arrêtée en gare de Miranda. Les chauffeurs ont été blessés, mais les voyageurs sont indemnes."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Faits Divers",
    "title": "Terrible accident de voiture à Guérande",
    "summary": "Un break a été renversé sur la route de Saint-Lyphard, causant la mort d'un passager et blessant grièvement plusieurs autres personnes, faute au comportement fautif de charretiers qui ont pris la fuite.",
    "paragraphs": [
      "Un break conduit par Armand Bellon, 19 ans, a été pris en étau entre deux charrettes et un tas de pierres sur la route de Saint-Lyphard à Guérande. La voiture a versé et les neuf voyageurs ont été projetés au sol.",
      "François Tamis, du Pouliguen, est décédé de ses blessures, et M. Émile Bellorge est dans un état désespéré. Deux autres femmes sont blessées. Les charretiers n'ont porté aucun secours aux victimes."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Le Ministre du Commerce visite l'Exposition",
    "summary": "M. Millerand, ministre du Commerce, a inspecté les installations du palais de l'Électricité, s'intéressant aux avancées de la télégraphie sans fil et aux travaux de recherche en électro-chimie.",
    "paragraphs": [
      "M. Millerand, ministre du Commerce, a visité le palais de l'Électricité en compagnie de M. Mascart. Il a étudié les productions de l'industrie française, assisté à des expériences de télégraphie sans fil et visité la section d'électro-chimie avec les fours de M. Moissan."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Faits Divers",
    "title": "Empoisonnés par des aliments",
    "summary": "Mme Elisa Clay est décédée après un repas suspect partagé avec M. Victor Berthet. Les autorités ont saisi des échantillons du gâteau incriminé pour analyse afin de déterminer la nature de ce drame mystérieux.",
    "paragraphs": [
      "M. Guicheteau, commissaire de police, enquête sur le décès suspect de Mme Elisa Clay qui, après un repas composé d'escargots et d'un Saint-Honoré partagé avec M. Victor Berthet, a succombé suite à de violentes souffrances.",
      "M. Berthet est, pour sa part, hors de danger ; toutefois, l'autopsie a été jugée nécessaire par les médecins. Une partie du gâteau a été saisie pour analyse au laboratoire municipal afin de lever toute équivoque sur l'origine du mal."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Faits Divers",
    "title": "Un forcené à l'Exposition",
    "summary": "Un individu nommé Henri Pourmenty a violemment agressé une dame, Marie Barnet, au Champ-de-Mars. La victime, grièvement blessée, a été transportée à l'hôpital Necker tandis que l'agresseur a été placé sous escorte.",
    "paragraphs": [
      "Un individu, Henri Pourmenty, a poignardé une dame, Marie Barnet, dans l'enceinte du Champ-de-Mars alors qu'il divaguait. La victime a été transportée d'urgence à l'hôpital Necker dans un état grave.",
      "Le forcené, après avoir tenté de fuir, a été aussitôt appréhendé par les agents de surveillance et dirigé sur l'infirmerie du dépôt pour y être interrogé."
    ]
  },
  {
    "id": 13,
    "page": 3,
    "category": "Faits divers",
    "title": "Arrestation d'un voleur armé",
    "summary": "Un ouvrier maçon, M. Ferret, a fait preuve d'un grand courage en désarmant un repris de justice, Georges Guerard, qui tentait de l'attaquer avec un revolver. Le malfaiteur est désormais entre les mains de la police.",
    "paragraphs": [
      "M. Ferret a appréhendé un voleur qui tentait de faire usage d'un revolver, dont les balles se révélèrent toutefois inutilisables. Avant qu'il n'ait pu presser la détente, l'ouvrier maçon a su désarmer et terrasser son agresseur.",
      "Le prisonnier, un nommé Georges Guerard, âgé de dix-huit ans et déjà connu comme repris de justice, a été conduit devant M. Brunet, commissaire de police, avant d'être écroué au dépôt."
    ]
  },
  {
    "id": 14,
    "page": 3,
    "category": "Faits divers",
    "title": "Le cas de Philippe Garrau, bouquiniste illuminé",
    "summary": "Philippe Garrau, ancien bouquiniste égaré dans un mysticisme délirant, a été arrêté pour avoir blessé une femme à l'aide d'un couteau-poignard lors d'une altercation près du square Saint-Médard.",
    "paragraphs": [
      "Philippe Garrau, un ancien bouquiniste âgé de soixante-huit ans, prêchait des théories étranges fondées sur de vieux livres achetés sur les quais, qu'il qualifiait pompeusement de son « Nouvel Évangile ».",
      "Lors d'une conférence tenue près du square Saint-Médard, il tenta de dérober un pain à une porteuse. Cette dernière lui administra une vigoureuse correction, ce qui poussa le vieil homme à la blesser légèrement avec un couteau-poignard qu'il portait sur lui.",
      "Arrêté, il fut conduit chez M. Carpin, commissaire de police, où il persista dans ses discours confus, pleurant sur ses ouvrages avant d'être dirigé vers l'infirmerie du dépôt."
    ]
  },
  {
    "id": 15,
    "page": 3,
    "category": "Faits divers",
    "title": "Suicide d'un miséreux",
    "summary": "M. Louis Mencolini, courtier en assurances, a mis fin à ses jours en se tirant une balle dans la poitrine chez Mme Collet, rue Blanche, après s'être vu refuser un secours financier.",
    "paragraphs": [
      "Hier après-midi, un courtier en assurances, M. Louis Mencolini, âgé de vingt-cinq ans, s'est présenté chez Mme Collet, rue Blanche, afin de solliciter un secours financier.",
      "Essuyant un refus catégorique, il a tiré un revolver de sa poche et s'est tiré une balle dans la poitrine. Il est mort sur le coup.",
      "M. Cornette, commissaire de police, a fait procéder aux constatations d'usage et ordonné le transport du corps au domicile du défunt."
    ]
  },
  {
    "id": 16,
    "page": 3,
    "category": "Faits divers",
    "title": "Incendie causé par l'explosion d'une lampe à pétrole",
    "summary": "Rue Duguet-Thouars, l'explosion d'une lampe à pétrole renversée par une domestique a provoqué un incendie dans l'atelier de M. Bénard, faisant une blessée grave et deux blessés légers.",
    "paragraphs": [
      "Hier soir, dans l'atelier de M. Bénard, fabricant de bronzes, rue Duguet-Thouars, l'explosion d'une lampe à pétrole, renversée par une domestique, Mlle Céline Cellier, a causé un début d'incendie.",
      "La jeune femme a été grièvement brûlée. M. Bénard et un ami, M. Ruche, ont été légèrement atteints. Les pompiers de la caserne Sévigné ont maîtrisé le feu après une demi-heure d'efforts."
    ]
  },
  {
    "id": 17,
    "page": 3,
    "category": "Faits divers",
    "title": "Double arrestation pour vol",
    "summary": "M. Carpin, commissaire de police de Clignancourt, a arrêté Charles Lemarchand et sa maîtresse, Émilie Lefranc, auteurs d'un vol de 2 000 francs et de bijoux commis l'an dernier boulevard Ornano.",
    "paragraphs": [
      "M. Carpin, commissaire de police du quartier Clignancourt, a arrêté Charles Lemarchand et sa maîtresse, Émilie Lefranc, coupables d'un vol de 2 000 francs et de bijoux commis l'an dernier boulevard Ornano."
    ]
  },
  {
    "id": 18,
    "page": 3,
    "category": "Social",
    "title": "Statistiques hebdomadaires de la Ville de Paris",
    "summary": "Le bilan hebdomadaire de la Ville de Paris fait état de 846 décès, 605 mariages et 1 170 naissances, un chiffre conforme aux moyennes statistiques du mois d'octobre.",
    "paragraphs": [
      "Le service de la statistique municipale a enregistré 846 décès pendant la semaine, un chiffre voisin de la moyenne d'octobre.",
      "La mortalité se décompose notamment par la fièvre typhoïde (18 décès), la diarrhée infantile (61 décès) et les maladies respiratoires.",
      "On a célébré 605 mariages et enregistré la naissance de 1 170 enfants vivants."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Faits divers",
    "title": "Accidents divers autour de Paris",
    "summary": "Une série de tragédies frappe la banlieue parisienne : incendies domestiques, accidents mortels de la circulation et drames familiaux endeuillent plusieurs communes.",
    "paragraphs": [
      "À Gennevilliers, un livreur, Alexis Monay, a été horriblement brûlé au visage par de l'acide sulfurique.",
      "À La Garenne-Colombes, le garçon maraîcher Jules Escard a été tué instantanément après que son cheval s'est abattu, le projetant violemment contre un mur.",
      "À Bezons, un journalier, Joseph Lefèvre, a gravement blessé sa maîtresse lors d'une dispute.",
      "À Argenteuil, des malfaiteurs ont cambriolé deux maisons, emportant bijoux et argenterie.",
      "À Vincennes, la dame Guyon a été grièvement brûlée par une lampe à alcool ; son mari est mort de choc émotionnel quelques heures plus tard.",
      "À Luzarches, Mme Célina Lefèvre est morte carbonisée après avoir laissé tomber une lampe à pétrole.",
      "À Versailles, une affaire d'empoisonnement dans une famille a été élucidée : la plaignante avait elle-même empoisonné les gâteaux destinés à ses enfants."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Faits divers",
    "title": "Incendie à Vercel",
    "summary": "Un violent incendie a dévasté treize maisons à Vercel, dans le Doubs. Le sinistre a entraîné des pertes matérielles considérables, la mort de bétail et a jeté soixante-dix personnes à la rue.",
    "paragraphs": [
      "Un violent incendie a ravagé treize maisons à Vercel, dans l'arrondissement de Baume-les-Dames, hier matin.",
      "Malgré les efforts des secours, les dégâts matériels sont importants, de nombreuses têtes de bétail ont péri et soixante-dix personnes sont désormais sans abri."
    ]
  },
  {
    "id": 21,
    "page": 4,
    "category": "Agriculture",
    "title": "Rapport sur les vendanges de 1899",
    "summary": "État des lieux des vendanges 1899 : récolte abondante mais prix mitigés. Si la qualité est au rendez-vous dans la plupart des régions, la forte production pèse sur les cours.",
    "paragraphs": [
      "Le Petit Parisien note de bonnes conditions ; la récolte est très abondante et promet un vin de grande qualité.",
      "En Champagne, on a terminé les vendanges. On est satisfait de la quantité et de la qualité, mais on se plaint des prix offerts, jugés trop bas en raison de l'importance de la production.",
      "Dans le Toulousain, on a traité quelques affaires en vins gris bourrus de 12 à 14 francs la charge de 100 litres.",
      "En Bourgogne, la vendange se poursuit par un beau temps ; à Nuits-Saint-Georges, la pourriture du raisin est enrayée et la qualité est satisfaisante. Les raisins sains de côte se paient 15 francs ; dans les vignes situées en plaine, on paie 10 et 11 francs les 100 kilos.",
      "Dans le Beaujolais-Mâconnais et le Lyonnais, la cueillette est terminée sur quelques points et bat son plein ailleurs ; malgré les prix élevés, une pénurie de vendangeurs se fait sentir. On estime que les Beaujolais de mi-coteaux, de qualité assez bonne, se paieront de 10 à 12 francs la pièce.",
      "On vendange dans l'Allier. Si la qualité reste encore à déterminer, la quantité est assurée. Quant aux prix, on parle de 30 à 40 francs les 200 litres pour les vins blancs bourrus.",
      "À Bercy-Entrepôt, on offre des vins du Midi à 14 francs et des vins d'Algérie de 17 à 19 francs le degré."
    ]
  },
  {
    "id": 22,
    "page": 4,
    "category": "Eaux-de-vie",
    "title": "Marché d'Eauze",
    "summary": "Compte-rendu du marché d'Eauze : les excédents d'eaux-de-vie de l'année 1899 se négocient actuellement à 100 francs la pièce de deux hectolitres.",
    "paragraphs": [
      "En Armagnac, au marché d'Eauze, on a traité des eaux-de-vie de 1899, provenant des excédents, à 100 francs la pièce de 2 hectolitres nu."
    ]
  },
  {
    "id": 23,
    "page": 4,
    "category": "Roman-feuilleton",
    "title": "Les Miettes du Bonheur (Quatrième partie)",
    "summary": "Un homme lutte avec ses sentiments et sa conscience alors qu'il se demande si la femme qu'il protège se donnera à lui par pure reconnaissance. Il s'interroge sur la moralité d'un tel sacrifice sans amour.",
    "paragraphs": [
      "Une fièvre ardente l'envahissait, jetant un émoi délicieux dans son âme. Il lui semblait qu'un paradis s'ouvrait devant lui, un paradis mystérieux et troublant où d'ineffables joies allaient lui être révélées.",
      "Ses tempes battaient. Son cœur avait des sautes brusques sous l'afflux du sang. Il eut peur qu'il ne se rompît.",
      "Mais, tout à coup, une pensée le traversa, chassa cette fièvre d'espérance qui l'exaltait : pour le payer de ce qu'il avait fait pour son enfant, Jeannine se donnerait, s'abandonnerait à lui. Oui, cela était certain. Mais ne serait-ce pas infâme d'abuser ainsi d'elle, de profiter de son sacrifice ?",
      "Oui, certes. Un homme délicat pouvait-il accepter un abandon du corps sans l'amour ? Ce serait presque un crime.",
      "Son cœur se gonfla. Ses yeux reflétèrent une douleur immense et un pli amer, un pli navrant, crispa le coin de ses lèvres. Oui, oui, il était fou tout à l'heure d'espérer. Était-il de ceux-là à qui la joie et l'amour sourient ?"
    ]
  },
  {
    "id": 24,
    "page": 4,
    "category": "Roman-feuilleton",
    "title": "Le Bigame (Huitième partie)",
    "summary": "Récit d'aventures : entre projets de chasse et tour du monde, l'espoir renaît quant à l'innocence de Raymond, dont l'affaire semble enfin s'éclaircir grâce à de nouvelles preuves.",
    "paragraphs": [
      "« Je ferai un saut jusqu'à Pontsevrin, grand-mère, pour aller vous embrasser et tirer quelques coups de fusil, abattre au moins un sanglier, puis je rentrerai à Paris où je bouclerai ma malle pour le tour du monde. Oui, je suis décidé. Je vous ai raconté l'histoire et mes espérances.",
      "Ce qu'il y a de mieux, c'est que je me suis épris de miss Héléna, femme énigmatique, jolie, belle même, avec son air de reine. Nous verrons bien. Sinon, je retourne dans l'Illinois, et pour le coup, je me fais éleveur. C'est ainsi que Master Janck a commencé. »",
      "« Grand fou, interrompit l'aïeule, il tournera toujours tout en plaisanterie. » Sans avoir relevé la tête, Solange poursuivit : « Quant à Raymond, il se porte bien, il est un peu moins sombre, il a espoir en l'avenir. Nous croyons tenir les traces du mystère qui amena l'erreur de son arrestation, et il est probable qu'à notre retour en France, la lumière se fera éclatante sur une affaire embrouillée, dont il veut sortir sans qu'il puisse rester une arrière-pensée à personne. »",
      "Solange s'arrêta d'elle-même. « Ah ! mon Dieu, quel bonheur ! Pauvre Raymond. Quelle trace ont-ils bien pu découvrir de là-bas ? » grommela madame de Pontsevrin."
    ]
  },
  {
    "id": 25,
    "page": 4,
    "category": "Marché agricole",
    "title": "Marché aux Veaux à La Villette",
    "summary": "Compte-rendu du marché aux veaux du vendredi 12 octobre à La Villette. La tendance est à la baisse avec une vente difficile et des prix peu soutenus.",
    "paragraphs": [
      "La Villette, vendredi 12 octobre. Veaux amenés, vendus. Vente mauvaise et prix difficilement soutenus.",
      "Les veaux de choix de Seine-et-Marne, de l'Eure, de Seine-et-Oise, d'Eure-et-Loir et du Loiret se sont détaillés de 0,90 à 0,95, et en bande ont obtenu de 0,85 à 0,90.",
      "Les chamois se sont vendus de 0,75 à 0,85 en bande et jusqu'à 0,90 au détail ; les flamands de 0,75 à 0,85 ; les gourmands et les mauceaux de 0,60 à 0,80 ; les autres provenances de 0,55 à 0,70. Le tout par demi-kilo de viande nette."
    ]
  }
];
