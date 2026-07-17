// Date: 1899-10-09
// Restauration Pass: 2
// Base de données complète des articles de presse du 1899-10-09 (Version Restaurée, 44 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Économie",
    "title": "La Navigation Intérieure",
    "summary": "Face à l'essor spectaculaire du réseau fluvial allemand, la France s'interroge sur la modernisation nécessaire de ses propres voies navigables pour soutenir son activité nationale et limiter la dépendance ferroviaire.",
    "paragraphs": [
      "La question de la navigation intérieure, qui intéresse à peu près toutes les branches de notre activité nationale, est plus que jamais à l'ordre du jour de l'actualité.",
      "C'est ainsi que l'intérêt du public et la sollicitude des économistes se trouvent spécialement éveillés par l'extension considérable que prend le réseau des voies navigables en Allemagne.",
      "L'Allemagne est en train d'acquérir le système de canaux le plus complet et le plus pratique qui existe en Europe. La statistique de l'Empire pour 1893 accuse 13 025 kilomètres de voies navigables, portés à 15 199 en 1899.",
      "En présence de résultats de cette importance, il est certain qu'il y a lieu de déplorer le mouvement presque stationnaire des canaux français. Les autorités signalent des lacunes, notamment sur la Loire et le Rhône.",
      "Différents moyens ont été proposés pour enrayer cette décadence, qu'il s'agisse de créer de nouveaux réseaux ou d'améliorer les jonctions avec les chemins de fer et la navigation maritime.",
      "D'autres experts, comme M. Hélot, suggèrent une utilisation plus rationnelle du réseau existant afin d'éviter de nouvelles charges aux contribuables.",
      "En définitive, la supériorité de nos voisins ne doit pas nous décourager, mais allumer notre émulation."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Une haine vieille d'un siècle",
    "summary": "La libération du duc Horace, acquitté à une voix près, provoque un immense soulagement au sein de sa famille, marquant un tournant décisif dans le drame qui les accable.",
    "paragraphs": [
      "La dépêche disait : « J'ai le bonheur de vous apprendre que le duc Horace vient d'être déclaré non coupable, à la majorité d'une voix ».",
      "Sous le coup de cette joie, la duchesse s'évanouit tandis que Roland, en proie à une crise de nerfs, s'abattait dans un fauteuil. Les gens accoururent et, par méprise, crurent à une condamnation capitale avant que le marquis ne montre la dépêche.",
      "La duchesse, après avoir assisté à la scène, se retira dans sa chambre où elle apprit par une domestique que le duc serait bientôt libéré.",
      "Elle consulta son indicateur pour voir quand l'officier pourrait revenir au château, impatiente de découvrir l'homme au cœur de ce drame."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Informations Politiques",
    "title": "Les Ministres",
    "summary": "M. Waldeck-Rousseau se prépare pour le Conseil des Ministres, tandis que M. de Lanessan poursuit sa tournée officielle dans le Sud de la France, recevant de nombreux hommages à travers plusieurs communes.",
    "paragraphs": [
      "M. Waldeck-Rousseau, président du Conseil, a quitté Paris pour Pontchartrain et sera de retour mercredi pour le Conseil des Ministres.",
      "M. de Lanessan, ministre de la Marine, a visité l'étang de Berre et a reçu de nombreux hommages à travers plusieurs communes de la région, avant de poursuivre son voyage vers La Ciotat."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Informations Politiques",
    "title": "Le Drame du Soudan",
    "summary": "M. Vigne d'Octon, député de l'Hérault, demande officiellement au président de la Chambre l'inscription à l'ordre du jour d'une interpellation sur les récents événements tragiques au Soudan.",
    "paragraphs": [
      "M. Vigne d'Octon, député de l'Hérault, a sollicité le président de la Chambre pour inscrire son interpellation concernant le drame du Soudan à l'ordre du jour des prochaines séances."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Social",
    "title": "L'Arbitrage au Creusot",
    "summary": "L'arbitrage de M. Waldeck-Rousseau dans le conflit du Creusot établit un précédent législatif majeur, favorisant la reprise du travail dans le respect des droits des ouvriers.",
    "paragraphs": [
      "L'arbitrage de M. Waldeck-Rousseau entre les ouvriers du Creusot et M. Schneider marque une date historique dans les rapports entre le capital et le travail.",
      "Cette décision, fondée sur la loi de 1884, évite la controverse en protégeant la liberté des travailleurs tout en actant la fin de la grève sans mesures de représailles.",
      "La reprise du travail s'organise progressivement, bien que des raisons matérielles imposent un court délai."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Incendie à Bordeaux",
    "summary": "Un incendie dévastateur a détruit des chais et hangars à la Bastide. Malgré la mobilisation de quinze mille personnes sur les quais, aucun accident corporel n'est à déplorer, bien que les pertes matérielles soient graves.",
    "paragraphs": [
      "Un formidable incendie a éclaté la nuit dernière à la Bastide, à Bordeaux, détruisant des chais et des hangars remplis de bois.",
      "Malgré l'ampleur du sinistre qui a mobilisé une foule de quinze mille personnes sur les quais, aucun accident corporel n'est à déplorer, bien que les pertes matérielles soient très importantes."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "International",
    "title": "Le Transvaal",
    "summary": "La tension demeure vive au Transvaal. Tandis que les nouvelles militaires restent contradictoires, Washington a officiellement annoncé que les États-Unis ne participeraient pas à ce conflit aux enjeux financiers.",
    "paragraphs": [
      "La tension reste vive au Transvaal. Si les nouvelles sur les mouvements de troupes anglaises et boers demeurent contradictoires, les mineurs fuyant Johannesburg confirment que cette guerre est perçue par beaucoup comme un conflit d'intérêts financiers.",
      "Parallèlement, Washington a annoncé que les États-Unis refuseraient d'intervenir dans ce conflit."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Le crime de la rue Saint-Denis",
    "summary": "Mme veuve Boudon a été assassinée par sa belle-fille, Thérèse Coutan, une femme aux antécédents psychiatriques notoires. L'accusée, malgré ses dénégations, est désormais entre les mains du Parquet.",
    "paragraphs": [
      "Mme veuve Boudon a été tuée par sa belle-fille, Thérèse Coutan, connue pour des antécédents psychiatriques et des accès de folie.",
      "La coupable a été mise à la disposition du Parquet, niant les faits malgré les éléments accumulés contre elle."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Faits Divers",
    "title": "Assassinat de sa maîtresse",
    "summary": "Henri Jean Julien, propriétaire dans le Tarn, a été arrêté sous l'inculpation d'assassinat sur la personne de son ancienne maîtresse, Félicie Ducousseau, dont la disparition suspecte a alerté la Sûreté.",
    "paragraphs": [
      "Henri Jean Julien, propriétaire dans le Tarn, a été arrêté pour l'assassinat de son ancienne maîtresse, Félicie Ducousseau.",
      "Les perquisitions menées par la Sûreté confirment la disparition suspecte de la victime et les soupçons pesant sur Julien, qui lui avait prêté de l'argent avant le drame."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Social",
    "title": "La reprise du travail au Creusot",
    "summary": "Le préfet de Saône-et-Loire, M. de Jolly, annonce une reprise progressive du travail au Creusot. Les mineurs devraient regagner les puits dès mardi, suivis par les autres corps de métier selon les besoins.",
    "paragraphs": [
      "M. de Jolly, préfet de Saône-et-Loire, a reçu ce soir, à onze heures, deux ingénieurs des usines qui lui ont rendu compte que, dès demain, des mesures seront prises pour que la reprise du travail puisse avoir lieu le plus tôt possible.",
      "Il est probable que les ouvriers de la mine pourront rentrer mardi. Les autres ouvriers rentreront au fur et à mesure que leurs services seront mis en état de fonctionner régulièrement."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Nouvelles militaires",
    "title": "Nominations militaires",
    "summary": "Par décrets du Président de la République, plusieurs officiers supérieurs, généraux de brigade et de division, ainsi que des intendants militaires ont été promus au sein de l'armée française.",
    "paragraphs": [
      "Par décret du Président de la République, rendu sur la proposition du ministre de la Guerre : au grade de général de division, MM. les généraux de brigade Rau, Maillu, Lallouet, Mathis, de Torcy, Julliard et Joly.",
      "Au grade de général de brigade, MM. les colonels Rouvray, Llanas, Lacoste, Rochas, Malafosse, de France, Basaine-Hayter, de Laborde, Labatut, Vilar, Bernard, Quillet, Méert et Nicolas.",
      "Au grade d'intendant général, M. l'intendant militaire Simon, directeur du service de l'intendance du 20e corps d'armée. Au grade d'intendant militaire de 1re classe, MM. Joffroy et Dufour, sous-intendants militaires de 1re classe.",
      "Au grade de colonel, MM. Lemoine, Gondot, Graeff, Lajus, Julien, de Courson, Uelchandy, Vermeil de Conchard, de Valoéy, de Malet, Perruchon, Dupontavice de Heumey, Harang de Fry, Billet, de la Boulinière, Petit, Débordes."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Faits divers",
    "title": "Une affaire d'espionnage à Belley",
    "summary": "Tellerin de Tadini, ingénieur agronome, a été arrêté à Belley par la gendarmerie. Recherché depuis deux ans, il est soupçonné d'espionnage en raison de la détention de documents compromettants.",
    "paragraphs": [
      "Un nommé Tellerin de Tadini, ingénieur agronome, âgé de trente-quatre ans, qui venait passer quelques jours chez son beau-père, officier de douanes en retraite à Anglefort, a été arrêté par la gendarmerie de Seyssel à sa descente de wagon et conduit à Belley.",
      "Dans sa malle, on a trouvé une enveloppe provenant de la Sûreté générale sur laquelle était mentionné un envoi de 200 francs. Tellerin de Tadini s'occupait d'espionnage et avait fait arrêter l'espion Decrio. On a trouvé sur lui de nombreuses lettres écrites en allemand.",
      "Son arrestation a été opérée en vertu d'un mandat d'arrêt lancé par la Sûreté générale il y a déjà deux ans."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Technologie militaire",
    "title": "La nouvelle mitrailleuse",
    "summary": "Les ateliers de Puteaux conçoivent actuellement une nouvelle mitrailleuse destinée à l'infanterie alpine, annoncée comme supérieure au modèle Maxim.",
    "paragraphs": [
      "Notre infanterie alpine va être prochainement dotée d'une nouvelle mitrailleuse que l'on fabrique en ce moment dans les ateliers de Puteaux et qui laissera, paraît-il, loin derrière elle la mitrailleuse Maxim, pourtant fort perfectionnée."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Manifestations patriotiques",
    "title": "Le drapeau des vétérans à Montreuil-sous-Bois",
    "summary": "Une cérémonie patriotique s'est tenue à Montreuil-sous-Bois pour la remise du drapeau à la 293e section des Vétérans, en présence du général Lambert, du sénateur Lefèvre et du député Pierre Richard.",
    "paragraphs": [
      "Une imposante manifestation patriotique a eu lieu hier à Montreuil-sous-Bois, à l'occasion de la remise du drapeau à la 293e section des Vétérans des armées de terre et de mer.",
      "La cérémonie a été présidée par le général Lambert, en présence de nombreuses personnalités dont MM. Lefèvre, sénateur de la Seine, et Pierre Richard, député. La journée s'est terminée par un concert et un magnifique assaut d'armes."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Manifestations patriotiques",
    "title": "Hommage aux soldats à l'Hay et Chevilly",
    "summary": "La 306e section des Vétérans a commémoré à l'Hay et Chevilly les combats de 1870, déposant des couronnes sur les monuments en hommage aux soldats morts pour la France.",
    "paragraphs": [
      "À l'occasion de l'anniversaire des combats livrés à l'Hay et à Chevilly en 1870, la 306e section des Vétérans des armées de terre et de mer s'est rendue hier sur les lieux des monuments commémoratifs pour déposer des couronnes.",
      "Plusieurs orateurs, notamment M. Tournier, ont célébré l'héroïsme de ceux qui succombèrent en défendant la patrie. À Chevilly, la délégation a été reçue par le maire, M. Crotté."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Manifestations patriotiques",
    "title": "Manifestation patriotique à Bagneux",
    "summary": "À Bagneux, une émouvante manifestation patriotique a rendu hommage aux soldats tombés durant l'Année terrible, marquée par le discours du député M. Gervais sur le lieu de la mort du commandant Picot de Dampierre.",
    "paragraphs": [
      "Les habitants de Bagneux et des communes voisines ont tenu, hier, une manifestation patriotique en l'honneur des soldats tués pendant l'Année terrible.",
      "Le cortège s'est rendu à l'endroit où tomba l'héroïque commandant Picot de Dampierre. M. Gervais, député de la première circonscription de Sceaux, a prononcé un discours empreint du plus pur patriotisme."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Manifestations patriotiques",
    "title": "Cérémonie au cimetière de Lagny",
    "summary": "La Société des Anciens Combattants de 1870-1871 a honoré la mémoire des soldats morts pour la patrie lors d'une cérémonie solennelle au cimetière de Lagny, ponctuée par les allocutions des commandants Blot et Apte.",
    "paragraphs": [
      "La Société des Anciens Combattants de 1870-1871 s'est rendue, hier, au cimetière de Lagny pour déposer une couronne au pied du monument élevé à la mémoire des frères d'armes morts pour la patrie.",
      "Plusieurs discours ont été prononcés, notamment par le président de la Société des Combattants et les commandants Blot et Apte."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Manifestations patriotiques",
    "title": "Inauguration d'un monument à Chevreuse",
    "summary": "À Chevreuse, les sociétés locales et le Souvenir français ont inauguré un monument en hommage aux soldats tombés face aux Prussiens, avec les discours de M. Bonneterie, sénateur, et de M. Cadou, le maire.",
    "paragraphs": [
      "Les différentes sociétés locales de Chevreuse et des environs se sont jointes au Souvenir français pour inaugurer, dans le cimetière de Chevreuse, un monument destiné à perpétuer la mémoire des soldats tombés sous les balles prussiennes.",
      "Des discours patriotiques ont été prononcés par MM. Niessen, Bonneterie, sénateur de Seine-et-Oise, et Cadou, maire de Chevreuse."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Santé",
    "title": "La guérison de la hernie",
    "summary": "Suite à la publication d'un article de Jean Frollo, le public s'informe massivement sur l'appareil de guérison des hernies conçu par M. Auguste Claverie, sis au 234, faubourg Saint-Martin à Paris.",
    "paragraphs": [
      "Le récent article de Jean Frollo sur certaines affections d'un caractère réputé incurable a provoqué de nombreuses lettres demandant le moyen de se procurer l'appareil inventé par M. Auguste Claverie pour la guérison de la hernie.",
      "Le public est invité à s'adresser directement à M. Claverie, 234, faubourg Saint-Martin, à Paris, pour obtenir son traité sur la hernie."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Faits divers",
    "title": "Les mésaventures d'une statue à Lesneven",
    "summary": "La statue du général Le Flô, abîmée par un nettoyage à l'émeri décidé par le maire de Lesneven, sera restaurée grâce à l'intervention du sculpteur Godebski, qui préconise un simple lavage à l'ammoniaque.",
    "paragraphs": [
      "On a mené grand bruit ces temps derniers de la mésaventure arrivée à la statue du général Le Flô, que le maire de Lesneven, M. Quirin, avait fait frotter à l'émeri par pure initiative esthétique, altérant sa patine.",
      "Le sculpteur Godebski, auteur de l'œuvre, a rassuré le public en expliquant qu'un simple nettoyage à l'ammoniaque suffirait à restaurer le bronze, une opération peu coûteuse dont le maire assumera la charge."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Chronique parisienne",
    "title": "Les transports de nuit et l'horaire des théâtres",
    "summary": "Le débat sur l'extension des transports nocturnes parisiens ravive la controverse sur l'horaire des théâtres. Faut-il avancer les représentations au détriment des usages du dîner, alors que la vie urbaine s'allonge ?",
    "paragraphs": [
      "Les habitants des quartiers excentrés et des communes de la banlieue réclament avec insistance l'organisation de transports de nuit leur permettant de profiter pleinement des spectacles parisiens sans risquer de rester bloqués loin de leurs foyers.",
      "Une campagne est actuellement menée pour avancer l'heure des représentations théâtrales. Toutefois, ce projet se heurte à la question des usages du dîner et aux habitudes des Parisiens dont la journée de travail se prolonge toujours davantage.",
      "L'auteur rappelle avec pertinence l'évolution historique des horaires des repas en France, soulignant que les convenances sociales ont de tout temps été soumises aux mutations des conditions de vie urbaine."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Étranger",
    "title": "Les travaux du tunnel du Simplon",
    "summary": "Le percement du tunnel du Simplon progresse sous la conduite des ingénieurs suisses et italiens, avec plus de deux kilomètres de galerie déjà creusés sur les vingt prévus pour cette voie de communication majeure.",
    "paragraphs": [
      "Les travaux du tunnel du Simplon sont activement poursuivis par les ingénieurs suisses et italiens. À la date de fin septembre, la galerie d'avancement atteignait une longueur totale de 2 245 mètres.",
      "La perforation du tunnel devant atteindre un développement de près de 20 kilomètres, il reste encore à creuser environ 17 kilomètres à travers le massif rocheux."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Santé publique",
    "title": "La peste à Oporto",
    "summary": "La situation sanitaire à Oporto demeure préoccupante, avec un bilan s'élevant désormais à 104 cas de peste et 43 décès. En conséquence, les autorités ont ordonné l'interdiction de tout spectacle ou bal public.",
    "paragraphs": [
      "Selon la statistique officielle, il s'est produit 104 cas de peste et 43 décès à Oporto. Face à cette situation, la Commission sanitaire a pris la décision d'interdire les spectacles et les bals publics afin d'enrayer la contagion."
    ]
  },
  {
    "id": 24,
    "page": 2,
    "category": "Faits divers",
    "title": "Assassinat à Constantinople",
    "summary": "Djavid-bey, fils du grand-vizir, a été assassiné au revolver sur le pont de Galata à Constantinople. L'auteur du crime, un officier albanais, a été immédiatement appréhendé par les autorités.",
    "paragraphs": [
      "Djavid-bey, fils du grand-vizir, a été assassiné aujourd'hui à coups de revolver sur le pont de Galata, à Constantinople. Le criminel, un officier albanais, a été arrêté immédiatement après son forfait."
    ]
  },
  {
    "id": 25,
    "page": 2,
    "category": "Échos",
    "title": "Nouvelles diverses",
    "summary": "Visites diplomatiques, célébration du soixantième anniversaire de l'École municipale Turgot et préparation de la fête du onzième arrondissement marquent l'actualité parisienne du jour.",
    "paragraphs": [
      "L'archiduc Louis-Victor d'Autriche est arrivé à Paris, tandis que M. Goremykine, ministre de l'Intérieur de Russie, est reparti pour Saint-Pétersbourg.",
      "L'École municipale Turgot a célébré le soixantième anniversaire de sa fondation par une double solennité, incluant l'apposition d'une plaque commémorative et une cérémonie de distribution de prix au Trocadéro.",
      "La fête du onzième arrondissement, organisée au profit de la Caisse des écoles, s'ouvrira officiellement le 15 octobre sur le boulevard Richard-Lenoir."
    ]
  },
  {
    "id": 26,
    "page": 2,
    "category": "Faits divers",
    "title": "Une corrida interrompue à Enghien",
    "summary": "Une course de taureaux à Enghien a provoqué un grave incident lorsqu'un animal s'est échappé. Le sous-préfet, M. Marty, a ordonné l'intervention immédiate de la gendarmerie pour faire cesser les festivités.",
    "paragraphs": [
      "Une course de taureaux, organisée hier près d'Enghien, a tourné au drame lorsque l'animal, nommé Romita, a sauté la barrière et a fui dans la campagne, semant l'effroi parmi les spectateurs.",
      "Plusieurs personnes ont été blessées, dont une femme piétinée qui fut transportée à l'ambulance. Le sous-préfet, M. Marty, a fait occuper l'arène par la gendarmerie et a formellement interdit la poursuite des courses."
    ]
  },
  {
    "id": 27,
    "page": 2,
    "category": "Actualité régionale",
    "title": "Le centenaire de Marseille",
    "summary": "La cité phocéenne célèbre avec faste le vingt-sixième centenaire de sa fondation. Au programme : fêtes historiques, galères reconstituées et illuminations pour honorer l'héritage des Phocéens.",
    "paragraphs": [
      "Dimanche prochain, la population marseillaise fêtera le vingt-sixième centenaire de la cité phocéenne. Un vaste programme de fêtes historiques, de galères reconstituées et de défilés est prévu pour l'occasion.",
      "La municipalité a déployé de grands moyens pour commémorer l'arrivée des Phocéens, incluant des concerts, des illuminations et une grande cavalcade prévue pour le 22 octobre."
    ]
  },
  {
    "id": 28,
    "page": 2,
    "category": "Sports",
    "title": "Résultats des courses à Vincennes et au bois de Boulogne",
    "summary": "Le Prix du Conseil municipal au bois de Boulogne a vu la victoire de Libaros dans une lutte disputée. Malgré l'attente du public, le jockey américain Sloan n'a pas réussi à s'imposer.",
    "paragraphs": [
      "Le Prix du Conseil municipal au bois de Boulogne a été particulièrement animé. Libaros a remporté la victoire dans une lutte acharnée contre Fourire.",
      "Le jockey américain Sloan, très attendu, n'a pas réussi à s'imposer. Le poulain de M. Fasquel, Fourire, a toutefois impressionné le public par sa courageuse performance."
    ]
  },
  {
    "id": 29,
    "page": 2,
    "category": "Littérature",
    "title": "Un drame sur un balcon (feuilleton)",
    "summary": "La tension monte alors que les fils Girodias somment le duc Horace de Villefort de répondre de ses actes, contestant la décision de justice qui a acquitté le duc après la mort de leur père.",
    "paragraphs": [
      "Les fils Girodias se sont présentés devant le duc Horace de Villefort pour lui annoncer qu'ils le condamnaient à mort, estimant que la justice des hommes, par son acquittement, avait commis une insulte envers la mémoire de leur père."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Sports",
    "title": "Résultats des courses hippiques",
    "summary": "Une journée intense sur les hippodromes marquée par les victoires de Barbanègre II, Little Monarque et Washington. Les épreuves du Prix des Gravilliers et de l'Aqueduc furent particulièrement disputées.",
    "paragraphs": [
      "Le Prix de la Cascade, dans lequel Cravan était très favori, a été gagné d'un bout à l'autre par Barbanègre II, qui a vaillamment résisté à l'attaque du poulain du baron de Rothschild.",
      "Le Prix Saint-Roman a vu la victoire de Little Monarque face à Baba, après une lutte acharnée. Le Prix de Newmarket a été une victoire aisée pour Washington, battant Souris II.",
      "Les deux dernières courses ont donné lieu à des luttes splendides. Dans le Prix des Gravilliers, Isménie a battu d'une tête Harrar ; dans le Prix de l'Aqueduc, Hervé et Apex ont fait dead-heat sur le poteau."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Social",
    "title": "Inauguration d'un monument à Argenteuil",
    "summary": "La ville d'Argenteuil a inauguré hier un monument dédié à la République. Le ministre du Commerce, M. Millerand, a présidé la cérémonie, réaffirmant son engagement pour les réformes sociales devant une foule dense.",
    "paragraphs": [
      "La fête démocratique organisée hier à Argenteuil par le Comité radical-socialiste, à l'occasion de l'inauguration du monument élevé à la gloire de la République, a été une réussite éclatante.",
      "M. Millerand, ministre du Commerce, a été accueilli avec ferveur par M. Labrière, maire d'Argenteuil. Le monument, une œuvre remarquable des sculpteurs MM. Carillon, se dresse fièrement dans le square du nouvel Hôtel de Ville.",
      "Lors de son allocution, M. Millerand a rappelé les grandes étapes de l'histoire républicaine et a pris l'engagement formel de poursuivre les réformes en faveur des travailleurs. Les festivités se sont clôturées dans une ambiance solennelle par un banquet, un concert et des illuminations."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incendie rue Planchât",
    "summary": "Un violent incendie a ravagé hier les ateliers des industriels Lefebvre, Pichon et Thomassin, situés rue Planchât. Malgré l'intervention des pompiers, les dégâts matériels sont considérables ; aucune victime n'est signalée.",
    "paragraphs": [
      "Un incendie d'une violence extrême s'est déclaré hier après-midi dans un immeuble situé au 14, rue Planchât, appartenant à M. Drouin et occupé par trois industriels : MM. Lefebvre, Pichon et Thomassin.",
      "Les ateliers en bois ont été totalement ravagés par les flammes. Malgré les efforts énergiques des sapeurs-pompiers, rien n'a pu être sauvé des ateliers sinistrés. Fort heureusement, aucune victime n'est à déplorer, mais les dégâts matériels sont considérables."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident des pompiers",
    "summary": "Le caporal de pompiers Louis Combes a été grièvement blessé au bras lors d'une délicate opération de sauvetage rue Baudelicque, à la suite de la chute inopinée d'une chèvre mécanique.",
    "paragraphs": [
      "En procédant au sauvetage de deux chevaux tombés dans une tranchée ouverte rue Baudelicque, le caporal de pompiers, M. Louis Combes, a été grièvement blessé au bras gauche par la chute d'une chèvre mécanique.",
      "Il a été transporté et admis d'urgence à l'hôpital Saint-Martin."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drame passionnel à Paris",
    "summary": "Une violente altercation a éclaté hier rue Valadon. Le journalier Gustave Sénat a été poignardé par sa maîtresse après une scène de jalousie. L'agresseuse a été arrêtée et le blessé conduit au Val-de-Grâce.",
    "paragraphs": [
      "Gustave Sénat, un journalier, a surpris sa maîtresse, la nommée Margot, dans un restaurant situé rue Valadon. Une altercation éclata immédiatement entre les deux amants et, après lui avoir adressé de vifs reproches, le malheureux lui asséna deux gifles.",
      "Exaspérée par ces violences, la femme tira un couteau et en porta deux coups successifs au journalier. Le blessé fut aussitôt transporté d'urgence à l'hôpital militaire du Val-de-Grâce, tandis que l'agresseuse était appréhendée et conduite au Dépôt."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Faits Divers",
    "title": "Tentative de cambriolage rue Vieille-du-Temple",
    "summary": "Une tentative de cambriolage chez un bijoutier de la rue Vieille-du-Temple a échoué cette nuit. Un suspect a été appréhendé par les gardiens de la paix, mais refuse obstinément de livrer son complice.",
    "paragraphs": [
      "Une tentative de cambriolage a été perpétrée cette nuit à la bijouterie de M. Berner, sise rue Vieille-du-Temple. Aperçus par des gardiens de la paix en patrouille, les malfaiteurs ont aussitôt pris la fuite par les toits de l'immeuble pour échapper aux agents.",
      "L'un des individus, identifié sous le nom d'Aristide Poncet, a été intercepté et arrêté par la police. Conduit au poste, le prévenu s'est muré dans un silence obstiné, refusant catégoriquement de dénoncer son complice toujours en cavale."
    ]
  },
  {
    "id": 36,
    "page": 3,
    "category": "Faits Divers",
    "title": "Suicide en wagon",
    "summary": "Un homme d'identité inconnue a été découvert grièvement blessé par balle dans un wagon en gare de la Bastille. Le malheureux, ayant fait usage d'un revolver sur sa personne, est dans un état jugé désespéré.",
    "paragraphs": [
      "Un drame du désespoir a été découvert en gare de la Bastille. Un homme, dont l'identité demeure pour l'heure inconnue, a été trouvé étendu sur la banquette d'un wagon, ayant fait usage d'un revolver sur sa propre personne.",
      "Transporté d'urgence, son état est jugé désespéré par les médecins, qui ne se prononcent pas sur ses chances de survie."
    ]
  },
  {
    "id": 37,
    "page": 3,
    "category": "Faits Divers",
    "title": "Crime à Vaucresson",
    "summary": "L'ouvrier serrurier Georges Kipp a été violemment agressé par une bande à Vaucresson, puis défenestré. Découvert ensanglanté par des maraîchers, il a été transporté à l'hôpital de Saint-Cloud dans un état critique.",
    "paragraphs": [
      "L'ouvrier serrurier Georges Kipp a été assommé par une bande d'individus à Vaucresson, avant d'être précipité par la fenêtre du premier étage. Il a été découvert, baignant dans son sang, par des maraîchers qui passaient par là.",
      "Transporté à l'hôpital de Saint-Cloud, son état est jugé désespéré. Le parquet de Versailles a immédiatement ouvert une enquête sur cette affaire criminelle."
    ]
  },
  {
    "id": 38,
    "page": 3,
    "category": "Faits Divers",
    "title": "Faits divers en banlieue",
    "summary": "Une série d'agressions et de drames a frappé la banlieue parisienne : vols aux Lilas, découverte macabre à Bagnolet, arrestation à Montreuil et le tragique décès d'un enfant mordu par un chien enragé à Saint-Maur.",
    "paragraphs": [
      "Aux Lilas, M. Jacques Pichnaud a été agressé et dépouillé de ses effets par trois individus. À Bagnolet, un inconnu a été retrouvé inanimé, gisant au fond d'une carrière.",
      "À Montreuil, un nommé Pallat a été arrêté après avoir violemment agressé un boulanger. À Saint-Maur, un drame affreux s'est produit : un chien enragé a causé la mort d'un enfant de six ans."
    ]
  },
  {
    "id": 39,
    "page": 3,
    "category": "Revue Commerciale",
    "title": "État du marché des grains, huiles et sucres",
    "summary": "Les conditions météorologiques sont favorables aux semailles. Le marché des farines fléchit, les blés restent fermes et les cours du sucre subissent un repli général sur les prochaines livraisons.",
    "paragraphs": [
      "Les pluies récentes favorisent activement les semailles. Le marché des farines est en baisse. Les prix des blés restent soutenus malgré une récolte annoncée comme excellente.",
      "Les huiles de colza et de lin montrent des fluctuations à la hausse. Les alcools connaissent un marché animé. Le sucre subit un repli des prix sur toutes les époques de livraison."
    ]
  },
  {
    "id": 40,
    "page": 4,
    "category": "Causerie Financière",
    "title": "Le marché financier et les mines d'or",
    "summary": "Malgré les tensions au Transvaal, les mines d'or clôturent en reprise. La hausse des taux à Londres et Berlin pèse sur les rentes, tandis que le secteur bancaire demeure calme et orienté à la hausse.",
    "paragraphs": [
      "Après avoir été fortement mouvementées toute la semaine, et bien que les chances du maintien de la paix au Transvaal aient plutôt diminué qu'augmenté, les mines d'or clôturent en vive reprise sur leurs plus bas cours.",
      "L'élévation du taux de l'escompte à Londres et à Berlin, ainsi que les craintes d'un renchérissement prochain de l'argent à Paris, ont quelque peu pesé sur nos rentes françaises.",
      "La Banque de France ne s'est pas ressentie, jusqu'ici, des besoins monétaires qui se manifestent sur les autres places.",
      "Le compartiment des établissements de crédit est retombé dans le calme. Les variations de cours n'ont pas dépassé quelques points, s'inscrivant d'ailleurs dans une tendance à la hausse."
    ]
  },
  {
    "id": 41,
    "page": 4,
    "category": "Chemins de Fer",
    "title": "Recettes des grands réseaux",
    "summary": "Une progression notable des recettes ferroviaires de 1 130 000 francs est enregistrée pour la période du 17 au 23 septembre, portée par la contribution du réseau du Midi, malgré un marché boursier toujours atone.",
    "paragraphs": [
      "Nouvelle augmentation de 1 130 000 francs dans les recettes de nos grands réseaux de chemins de fer, entre le 17 et le 23 septembre ; le Midi participe pour 155 000 francs dans cette plus-value.",
      "Malgré ces brillantes recettes et la perspective de l'Exposition, le marché des actions des grandes Compagnies est toujours négligé et les transactions, même au comptant, demeurent singulièrement restreintes."
    ]
  },
  {
    "id": 42,
    "page": 4,
    "category": "Feuilleton",
    "title": "Le Revenant - Troisième partie",
    "summary": "Bareste et le Rougeaud, en quête de papiers dérobés, gagnent le domaine de Kergomeur. Sous le couvert de la nuit, ils se dissimulent dans un taillis alors qu'ils aperçoivent le garde Jean-Marie patrouiller près du mur.",
    "paragraphs": [
      "Le Rougeaud demanda à Bareste où ils iraient déjeuner. L'artiste, songeant au bandit et à la nécessité de le tenir à distance tout en espérant retrouver ses papiers volés, lui remit vingt francs pour déjeuner seul et lui donna rendez-vous à la gare d'Orléans.",
      "Le Rougeaud, ravi de pouvoir s'offrir un repas avant son voyage, s'habilla avec les vêtements que Bareste lui avait procurés, se trouvant méconnaissable, puis partit en promettant d'être à l'heure.",
      "Bareste, après avoir récupéré la somme nécessaire chez son banquier, retrouva le Rougeaud à la gare. Ils prirent le train pour la station de Clefs qui dessert Volandry. À leur arrivée, il faisait nuit noire.",
      "Sur la route déserte, ils se dirigèrent vers le domaine de Kergomeur. Le Rougeaud se rappelait précisément l'endroit où, dix-neuf ans plus tôt, ils avaient enfoui leur trouvaille, derrière un mur du château des Lilas.",
      "Alors qu'ils s'approchaient, Bareste aperçut le garde Jean-Marie. Ils se cachèrent vivement dans un épais taillis pour éviter d'être vus."
    ]
  },
  {
    "id": 43,
    "page": 4,
    "category": "Faits Divers - Santé",
    "title": "Témoignage de M. Yvain Bordeau sur la santé",
    "summary": "M. Yvain Bordeau, ancien manufacturier, atteste de sa guérison complète de troubles digestifs et de dyspepsie grâce à la Tisane américaine des Shakers, diffusée par le pharmacien Oscar Fanyau.",
    "paragraphs": [
      "M. Yvain Bordeau, ancien manufacturier à Mayenne, âgé de près de soixante-quinze ans, témoigne des bienfaits de la Tisane américaine des Shakers introduite par M. Oscar Fanyau, pharmacien à Lille.",
      "Il souffrait de dyspepsie, d'une grande faiblesse et de troubles digestifs sévères. Après avoir consommé quatre flacons de cette tisane, il se déclare radicalement guéri et jouit désormais d'une excellente santé.",
      "Le texte souligne que la dyspepsie est la source de nombreux maux et que ce remède permet de contrôler et de réparer efficacement l'appareil digestif."
    ]
  },
  {
    "id": 44,
    "page": 4,
    "category": "Économie",
    "title": "La Société des houillères d'Ahun",
    "summary": "La Société des houillères d'Ahun, restructurée avec un apport de capital de 3 millions de francs après une période difficile, affiche aujourd'hui des perspectives prometteuses pour l'industrie minière.",
    "paragraphs": [
      "La Société des houillères d'Ahun, formée en 1863 au capital de 4 millions, paraît appelée à prendre un rapide essor. Après des débuts difficiles, la société a assaini sa situation financière, remboursant ses dettes et restructurant son capital.",
      "La reconstitution de la Compagnie a permis l'entrée d'un capital nouveau de 3 millions de francs. Bien que les résultats du dernier exercice ne soient pas encore officiellement connus, les perspectives sont favorables pour l'industrie houillère."
    ]
  }
];
