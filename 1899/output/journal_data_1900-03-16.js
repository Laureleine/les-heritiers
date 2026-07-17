// Date: 1900-03-16
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-03-16 (Version Restaurée, 32 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Éditorial",
    "title": "Procédés barbares dans les universités allemandes",
    "summary": "La Chambre des députés de Prusse s'indigne contre les méthodes cruelles de certains professeurs allemands pratiquant des expériences sur leurs malades, contrastant avec l'héroïsme scientifique des savants français.",
    "paragraphs": [
      "Un débat très vif vient d'avoir lieu à la Chambre des députés de Prusse au sujet de pratiques souvent très cruelles et très dangereuses auxquelles se livrent certains professeurs des universités allemandes sur les malades des hôpitaux. On a cité notamment un professeur de Breslau qui, dans le but d'étudier la germination de l'anthrax, a fait toute une série d'expériences sur un enfant.",
      "Il faut ajouter que le professeur de Breslau et plusieurs de ses collègues ont été jusqu'à inoculer à des enfants et à des adultes un mal infectieux dont l'organisme, même après la guérison, reste à jamais contaminé. La Chambre des députés de Prusse a été unanime à flétrir ces procédés barbares.",
      "Le docteur Daremberg énumérait récemment certaines pratiques odieuses d'autrefois. Au seizième siècle, on voyait encore des condamnés à mort livrés aux médecins pour expérimenter les poisons et leurs antidotes. Ce n'est pas atténuer ces cruautés que de dire qu'elles étaient faites sur des condamnés ; mais elles sont d'une époque où la vie humaine était moins respectée qu'aujourd'hui.",
      "Je suis heureux de trouver dans le journal allemand que je citais tout à l'heure, à la suite du compte-rendu des débats, un passage tout à l'honneur des savants français. Ce journal dit qu'on pourrait trouver en France plus d'un médecin qui a choisi sa propre personne comme champ d'étude, citant les disciples de Pasteur, le docteur Hafkine, le docteur Metchnikoff, Louis Thuillier, et tant d'autres qui ont bravé la mort pour la science.",
      "La France a le droit de s'enorgueillir de ces héroïsmes au profit de la science. Mais elle ne se targue pas d'en avoir le monopole. Je veux finir sur cet admirable exemple : le docteur Pestana, de Lisbonne, qui, atteint par la contagion alors qu'il vérifiait les méthodes pasteuriennes, ordonna de noter scrupuleusement ses propres convulsions avant de mourir pour que son dévouement profitât à la science."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Mariage secret",
    "summary": "Henri, fils de la maison d'Aspremont, décide de rompre avec son existence oisive pour gagner sa vie par le travail en Algérie. Soutenu par Rolande, il fait face à son père pour affirmer sa résolution.",
    "paragraphs": [
      "C'était la première fois que le père et le fils se retrouvaient seuls dans la bibliothèque de l'hôtel d'Aspremont. Henri annonce à son père qu'il renonce à sa vie oisive et qu'il part pour l'Algérie pour gagner sa vie par son travail.",
      "Non, je ne cherche pas à solliciter vos confidences. Non, je ne veux pas lutter contre votre résolution. Vous avez vu où était le devoir, suivez ce chemin. Il ne saurait vous égarer.",
      "Mais c'est trop d'orgueil, mon enfant, que de vous croire seul capable d'un tel héroïsme d'amour. Moi aussi, j'ai eu la joie de développer dans une petite âme d'élite les nobles instincts. Pourquoi voulez-vous qu'elle souffre ? Pour qu'elle s'élève encore.",
      "Et dans la stupeur d'Henri, le docteur Lecoutellier alla ouvrir la porte que masquait une lourde tenture. Oui, Rolande était là. Elle avait tout entendu. De la jeune fille, la femme venait de surgir. La compagne d'amour qui réclame, pour elle, la moitié des douleurs comme la moitié des joies."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Colonies",
    "title": "À Madagascar",
    "summary": "Le rapport du député Argeliès souligne la progression financière et commerciale de Madagascar. Parallèlement, des fêtes sont célébrées à Tananarive en l'honneur de la reine Ranavalo.",
    "paragraphs": [
      "Le rapport que M. Argeliès, député, vient de déposer à la Chambre au nom de la commission des Colonies sur l'emprunt malgache contient des détails intéressants relatifs à la situation financière et commerciale de notre nouvelle possession. Les recettes financières se sont accrues d'année en année et le commerce général de l'île a suivi une progression marquée.",
      "Le paquebot Saghalien, arrivé ce soir de Marseille, apporte des nouvelles de l'île. Des grandes fêtes ont été données en l'honneur du séjour à Tananarive de la reine Ranavalo et des princes, chefs importants de la région sakalave. Un phonographe leur a débité des conseils leur recommandant le dévouement à la France."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Politique",
    "title": "M. Loubet à Issy",
    "summary": "Le président Émile Loubet a inauguré les nouveaux bâtiments de l'hospice des vieillards d'Issy-les-Moulineaux, soulignant l'importance vitale des institutions d'assistance communale.",
    "paragraphs": [
      "La ville d'Issy-les-Moulineaux était en fête hier. M. Émile Loubet, président de la République, est venu présider à l'inauguration des nouveaux bâtiments de l'hospice des vieillards. Après avoir visité les lieux, M. Loubet a été accueilli par le maire et a prononcé un discours insistant sur l'importance de la solidarité communale et des institutions d'assistance.",
      "Le président a procédé à la remise de diverses récompenses, dont des nominations d'officiers d'Académie et des médailles d'honneur. La journée s'est poursuivie par une visite à l'asile des Petits-Ménages et s'est clôturée par un grand bal de nuit."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Chronique Parlementaire",
    "title": "Le débat sur l'enseignement",
    "summary": "La commission Ribot appelle à une réforme de l'enseignement secondaire pour sortir de l'uniformité des lycées et favoriser une autonomie accrue, à l'instar des facultés.",
    "paragraphs": [
      "L'enquête sur l'enseignement secondaire poursuivie par la commission que présidait M. Ribot doit avoir une sanction parlementaire. Il convient que la Chambre fasse connaître son opinion sur les réformes préconisées, afin de donner une vitalité nouvelle aux établissements de l'État.",
      "Cette grande enquête a démontré la nécessité d'étendre aux lycées, en partie du moins, l'autonomie accordée aux facultés. L'ancienne conception scolaire, basée sur l'uniformité absolue, a montré ses inconvénients. Toutes ces questions seront mises en lumière par un débat complet à la Chambre."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Tragique accident dans les Alpes",
    "summary": "Lors d'une manœuvre dans le massif du Mangiabo, un chasseur alpin a fait une chute mortelle dans un précipice. Le lieutenant Mensier, en tentant courageusement de lui porter secours, a tragiquement péri à son tour.",
    "paragraphs": [
      "Une compagnie du 27e bataillon de chasseurs alpins, en garnison à Sospel, effectuait une marche-manœuvre lorsque, dans le quartier accidenté du Mangiabo, un chasseur fit un faux pas et tomba dans un précipice. Le lieutenant Mensier, en tentant de lui porter secours, a glissé à son tour et a trouvé la mort dans sa chute.",
      "Le corps de l'officier a été transporté à Sospel puis à Nice. Le soldat, première victime de l'accident, souffre de contusions graves mais ses jours ne semblent pas en danger."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Social",
    "title": "La grève de Carmaux",
    "summary": "Le comité de grève de Carmaux interpelle les autorités et la direction des mines, dénonçant le non-respect de la sentence arbitrale et sollicitant une intervention gouvernementale immédiate.",
    "paragraphs": [
      "Le comité s'occupe d'adresser un appel aux organisations syndicales pour exposer la situation. Il a prié M. le préfet de faire parvenir au président du Conseil le duplicata d'une lettre adressée à la compagnie. Nous sommes en mesure d'affirmer que le comité fait porter ses nouvelles propositions sur des points où la compagnie n'a pas observé la sentence arbitrale."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Un bâtiment s'effondre à Tourcoing",
    "summary": "Un grave effondrement des magasins des frères Lorthiois, place Verte à Tourcoing, a provoqué une catastrophe. Les secours travaillent au déblaiement des décombres où plusieurs victimes, dont une fillette, sont déplorées.",
    "paragraphs": [
      "Un accident grave s'est produit ce matin à Tourcoing : une partie des magasins de laines de MM. Lorthiois frères, situés place Verte, s'est écroulée. Les magasins consistaient en un vaste bâtiment dont une partie des murs s'est effondrée, causant plusieurs victimes.",
      "Les pompiers et de nombreux travailleurs sont occupés au déblaiement. On a retiré deux cadavres, dont celui d'une fillette de huit ans. On craint que d'autres personnes ne soient encore ensevelies sous les décombres."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Guerre du Transvaal",
    "title": "L'occupation de Bloemfontein",
    "summary": "Bloemfontein est tombée aux mains des forces de Lord Roberts. Tandis que le président Steijn se retire vers le nord, les Boërs semblent déterminés à poursuivre une lutte acharnée contre l'occupation britannique.",
    "paragraphs": [
      "Bloemfontein s'est rendue à dix heures du matin et a été occupée à midi. Le président Steijn, avec la majorité des Burghers, s'est retiré vers le nord. Lord Roberts a fait son entrée triomphale dans la ville et s'est rendu à la résidence officielle du président.",
      "Malgré les articles enthousiastes des journaux de Londres, les Anglais pourraient bien avoir sur les champs de bataille de pénibles surprises. Les Boërs ont pris toutes leurs dispositions pour prolonger la lutte, détruisant leurs réserves et les mines plutôt que de les laisser aux mains des Britanniques."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "La position des Républiques sud-africaines",
    "summary": "Les présidents des Républiques boers rejettent fermement toute annexion formelle. Ils ont notifié à sir Alfred Milner leur résolution inébranlable de défendre leur indépendance nationale jusqu'à l'extrémité.",
    "paragraphs": [
      "Une dépêche de Pretoria au Daily Mail annonce que les présidents des deux Républiques ont informé sir Alfred Milner qu'il est impossible d'accepter une annexion formelle du territoire britannique. Ils répètent que l'occupation du territoire anglais a été motivée purement par des considérations stratégiques.",
      "La réponse se terminera en exprimant l'intention des deux Républiques de combattre jusqu'à la dernière extrémité pour leur indépendance et leur existence nationales."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "Message du président Kruger",
    "summary": "Le président Kruger déclare dans une dépêche la détermination des Burghers à lutter jusqu'à la mort pour défendre le Transvaal, affirmant que Pretoria restera inviolée face à l'offensive anglaise.",
    "paragraphs": [
      "La dépêche suivante, émanant du président Kruger, a été reçue par le journal : « Les Burghers combattront jusqu'à la mort. Nos forces sont retournées, en bon ordre, sur notre première ligne de défense dans le Transvaal. Les Anglais n'atteindront jamais Pretoria. Les Burghers, Steijn, Joubert, moi-même et tous les autres sommes unis. Que Dieu nous aide. »"
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "Mouvements militaires au Natal",
    "summary": "Suite aux succès de lord Roberts, le commandement anglais modifie son plan de campagne au Natal. Les troupes sont redéployées vers le nord, tandis que les unités du siège de Ladysmith prennent du repos.",
    "paragraphs": [
      "La Westminster Gazette publie la dépêche suivante : La réussite de lord Roberts dans l'État libre a apparemment causé un changement important dans le plan de campagne anglais, et les troupes du Natal ont reçu des contre-ordres en conséquence.",
      "La division du général Warren a reçu l'ordre de débarquer des transports qui devaient la conduire à East-London et de se diriger vers le nord du Natal, ce qu'elle a fait immédiatement.",
      "Toutes les troupes qui ont subi le siège de Ladysmith sont en repos à Highlands, Pietermaritzburg et Durban."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "Combat sur les bords de l'Orange",
    "summary": "Un vif engagement a opposé les Boërs aux forces britanniques près du fleuve Orange. Après une journée de canonnade, les Boërs ont été contraints de quitter leurs positions fortifiées sur un kopje.",
    "paragraphs": [
      "Un vif engagement a eu lieu aujourd'hui. Le feu a commencé ce matin, à neuf heures, dans la direction d'Aliwal North. Les Boërs, avec deux canons, occupaient une forte position sur un kopje au nord du fleuve Orange.",
      "Les Anglais en occupaient une au sud du fleuve. Le combat continua jusqu'à quatre heures. À cinq heures, les Boërs semblaient avoir été délogés de leurs positions."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "Le sort de Johannesburg",
    "summary": "Selon des sources proches des chefs fédéraux, des mesures radicales ont été prises pour détruire les mines de Johannesburg par la dynamite afin de les rendre inutilisables par l'armée britannique.",
    "paragraphs": [
      "Une personne qui a été, depuis le commencement de la guerre, en relation avec les chefs fédéraux, déclare que la direction des mines du Transvaal a pris des dispositions pour faire sauter les galeries et la machinerie des mines au moyen de dynamite.",
      "Des mines de dynamite ont été placées, en outre, aux environs de Johannesburg, et des travaux de défense y ont été exécutés."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Diplomatie",
    "title": "Le Docteur Leyds et les négociations",
    "summary": "M. Van Boeschoten, suppléant du docteur Leyds à la légation, précise que les négociations entre l'Angleterre et le Transvaal s'effectuent par communication directe, sans intermédiaire diplomatique.",
    "paragraphs": [
      "Nous nous sommes rendus à la légation du Transvaal pour rencontrer le docteur Leyds. M. Van Boeschoten, qui remplace le docteur Leyds, nous a affirmé que le docteur n'a nullement été l'intermédiaire pour les négociations entre l'Angleterre et le Transvaal : les deux gouvernements ont communiqué directement entre eux."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "Un télégramme de Cecil Rhodes",
    "summary": "M. Cecil Rhodes, souffrant au Cap, dément formellement tout retour imminent en Angleterre pour des raisons politiques. Il invoque des nécessités financières pour justifier la poursuite de ses affaires.",
    "paragraphs": [
      "M. Cecil Rhodes, actuellement souffrant au Cap, a adressé à un ami à Londres le télégramme suivant : « Démentez formellement le bruit d'après lequel je retourne en Angleterre pour traiter d'affaires politiques. Les affaires qui m'appellent sont tout simplement celles du pain et du beurre. Je n'ai rien gagné pendant six mois, et il faut bien qu'un homme vive. »"
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Chambre des Communes",
    "title": "Débats sur la paix et les interventions",
    "summary": "Le gouvernement britannique, par la voix de lord Salisbury, refuse toute médiation étrangère concernant le conflit en Afrique australe, maintenant sa position souveraine et son refus de toute intervention tierce.",
    "paragraphs": [
      "M. Balfour annonce que le chargé d'affaires américain a communiqué à lord Salisbury une demande des Républiques sud-africaines, priant M. McKinley d'intervenir pour faire cesser les hostilités.",
      "Lord Salisbury a prié le chargé d'affaires américain de remercier le gouvernement des États-Unis, tout en précisant que le gouvernement anglais ne se propose nullement d'accepter l'intervention d'une puissance quelconque dans le sud de l'Afrique."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Chambre des Députés",
    "title": "Discussion de la loi de finances",
    "summary": "La séance budgétaire a été marquée par une vive opposition sur la limitation du droit d'amendement. La proposition de M. Berthelot, visant à restreindre les dépenses, n'a été rejetée que par une courte majorité.",
    "paragraphs": [
      "La séance, consacrée à la discussion de la loi de finances, a été marquée par la proposition de M. Berthelot visant à supprimer le droit d'amendement au budget entraînant une augmentation de dépenses. La disjonction a été repoussée par 268 voix contre 258."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Sénat",
    "title": "Le rapatriement du lieutenant Tonquedec",
    "summary": "Le ministre des Colonies rend hommage au lieutenant Tonquedec pour ses services éminents au Haut-Oubanghi et au Bahr-el-Ghazal au sein de la mission Marchand, confirmant sa distinction dans la Légion d'honneur.",
    "paragraphs": [
      "M. le comte de Blois interroge le ministre des Colonies sur le rapatriement du lieutenant Tonquedec, de la mission Marchand. Le ministre répond que cet officier a accompli une mission très méritoire au Haut-Oubanghi et au Bahr-el-Ghazal, et qu'il a été décoré de la croix de la Légion d'honneur."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Sénat",
    "title": "Interpellation sur la guerre du Transvaal",
    "summary": "M. Delcassé confirme au Sénat le refus britannique de toute médiation. La France réaffirme sa position de prudence diplomatique et son attachement à ses alliances existantes face au conflit sud-africain.",
    "paragraphs": [
      "M. Delcassé, ministre des Affaires étrangères, répond au Sénat concernant l'intervention des puissances dans la guerre du Transvaal. Il explique que la Grande-Bretagne a d'ores et déjà refusé de consentir à l'indépendance des deux Républiques, rendant toute médiation superflue.",
      "Il souligne que la France maintient un accord étroit avec la Russie et réaffirme que le pays ne peut s'engager inconsidérément, ayant assez sacrifié à la solidarité internationale pour avoir le droit de regarder, sans envie, les initiatives d'autrui."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Littérature",
    "title": "L'Aiglon d'Edmond Rostand",
    "summary": "Le célèbre poète Edmond Rostand consacre son nouveau drame à la figure tragique du duc de Reichstadt, fils de Napoléon Ier, condamné par sa santé fragile et le poids accablant de son nom impérial.",
    "paragraphs": [
      "L'Aiglon, drame en six actes et en vers de M. Edmond Rostand, retrace la vie tragique du fils de Napoléon Ier, le roi de Rome. Personnage malmené par une constitution fragile, il sombre dans l'impuissance et l'ennui, accablé par le poids de son nom qu'il ne parvient pas à incarner.",
      "Edmond Rostand, le poète tant attendu, auteur acclamé de Cyrano de Bergerac, brosse ici le portrait du duc de Reichstadt au crépuscule de son existence, évoluant dans un monde frivole voué aux plaisirs."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Feuilleton",
    "title": "Deux passions",
    "summary": "Au cœur d'une tension familiale, Georges Dufresne s'interroge sur les manœuvres de Gabrielle, soupçonnée de vouloir faire échouer son mariage prochain avec Valentine malgré les apparences.",
    "paragraphs": [
      "Votre mariage est toujours décidé ? Georges Dufresne lui jeta un regard où se lisait une profonde défiance.",
      "Gabrielle a dû vous le dire, puisqu'elle était chez vous tout à l'heure. Elle connaît certainement mieux les intentions de Valentine que je ne les connais moi-même.",
      "Elle m'en a dit quelques mots, en effet. Et c'était ? Que vous êtes d'accord et que la cérémonie doit avoir lieu dans quelques semaines, trois ou quatre, dès que les formalités seront accomplies.",
      "Georges Dufresne demanda lentement, en tentant de pénétrer la pensée de son compagnon : T'a-t-elle dit aussi qu'elle emploie toute son adresse, toute sa diplomatie et toutes ses ruses de femme pour empêcher ce mariage ?"
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Théâtre",
    "title": "Critique de la pièce sur le duc de Reichstadt",
    "summary": "Analyse du succès de L'Aiglon d'Edmond Rostand, portée par l'interprétation magistrale de Sarah Bernhardt dans le rôle du duc et la prestation remarquable de M. Guitry en Flambeau.",
    "paragraphs": [
      "J'ai suivi M. Edmond Rostand dans le développement de sa conception dramatique ; j'ai souligné l'intérêt qui s'y attache au début et l'émotion profonde qui s'en dégage au dénouement.",
      "Il faut se restreindre, et j'ai hâte de proclamer, en saluant le succès final, combien Mme Sarah Bernhardt, interprétant en travesti le rôle du duc de Reichstadt, fut superbe et magnifique. Rôle écrasant que la grande tragédienne porte avec une indomptable énergie.",
      "Flambeau — car Flambeau est également un rôle majeur, tel l'ombre de Napoléon marchant devant son fils — est représenté à souhait par M. Guitry."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Guerre",
    "title": "La guerre au Transvaal",
    "summary": "Le War Office annonce, via une dépêche de lord Roberts, la progression des troupes britanniques avec l'occupation de Béthulie par le général Gatacre et la jonction des forces vers Bethany.",
    "paragraphs": [
      "Le War Office a reçu de lord Roberts la dépêche suivante, datée de Bloemfontein, le 15 mars, à 7 heures 55 du soir :",
      "Le général Gatacre a traversé le fleuve Orange ce matin et a occupé Béthulie.",
      "Le général Pole Carew, à la tête de la brigade de la garde, accompagné d'un détachement d'infanterie montée et de canons, a quitté Bloemfontein ce matin par le chemin de fer pour effectuer sa jonction avec les généraux Gatacre et Cléments. Il est passé cet après-midi, à quatre heures, par Bethany sans rencontrer d'opposition."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Échos et Nouvelles",
    "title": "Inauguration de l'Exposition et Banquet",
    "summary": "En vue de l'Exposition Universelle, le Président Loubet prépare une réception inaugurale, tandis que M. Millerand appelle à une trêve des luttes politiques pour honorer la grandeur de la France.",
    "paragraphs": [
      "À la suite de l'ouverture de l'Exposition, prévue le 15 avril, M. le Président de la République et Mme Loubet donneront le 16 avril une grande fête d'inauguration.",
      "Hier soir a eu lieu, au Champ-de-Mars, le banquet de l'Association générale du commerce et de l'industrie des tissus et des matières textiles, sous la présidence de M. Millerand, ministre du Commerce.",
      "M. Millerand a remercié M. Charles Legrand pour son toast porté au Président de la République. Il a examiné diverses questions douanières et a conclu en appelant tous les partis à faire trêve à leurs luttes durant les mois de l'Exposition, afin d'assurer le rayonnement de la France."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits divers",
    "title": "L'incendie du Théâtre-Français",
    "summary": "La reconstruction du Théâtre-Français s'organise. Après l'étayage des galeries, des experts ont condamné les accès aux sous-sols, tandis qu'un architecte a été nommé pour évaluer la sécurité de l'édifice.",
    "paragraphs": [
      "La reconstruction du théâtre incendié va entrer prochainement dans une phase active. L'étayage des galeries supérieures qui entourent la salle est presque terminé.",
      "Hier matin, deux des experts, MM. Debrie et Mairesse, ont longuement visité les trois sous-sols de la Comédie. Ils en ont fait condamner les portes et en ont formellement interdit l'entrée.",
      "Le juge des référés a nommé M. de Chabrol, architecte du Palais-Royal, expert, à l'effet de rechercher quelles sont les mesures imposées par la situation de l'immeuble du Théâtre-Français."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits divers",
    "title": "Incident à l'hôpital de la Charité",
    "summary": "Un homme souffrant d'aliénation mentale s'est vu refuser l'admission à l'hôpital après la découverte de ses papiers d'identité par le personnel, provoquant l'ouverture d'une enquête administrative.",
    "paragraphs": [
      "Hier matin, vers dix heures, des gardiens de la paix transportaient à la pharmacie Beau, rue de Verneuil, un passant qui venait de s'affaisser quai Voltaire. Le malade délirait et ne pouvait fournir aucun renseignement.",
      "L'employé fouilla dans ses poches et y trouva des papiers au nom d'Émile Oliveau, âgé de quarante-cinq ans, charron. La découverte de ces papiers eut pour résultat immédiat un refus d'admission, le malade étant atteint d'aliénation mentale.",
      "Une enquête administrative a été ouverte pour faire suite à cet incident."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits divers",
    "title": "Malfaiteurs masqués",
    "summary": "Un couple habitant près de Loriol a été victime d'une agression nocturne par deux individus armés et masqués, qui les ont contraints sous la menace à leur remettre argent et objets de valeur.",
    "paragraphs": [
      "Les époux Gente, habitant une maison isolée dans la campagne, aux environs de Loriol (Drôme), dormaient la nuit dernière, lorsque, vers une heure du matin, la porte de leur habitation fut enfoncée.",
      "Réveillés en sursaut, ils virent avec effroi pénétrer dans leur chambre deux hommes armés de fusils et la figure couverte d'un masque de suie. Les bandits les contraignirent à leur remettre tout ce qu'ils possédaient d'argent et d'objets de valeur avant de prendre la fuite."
    ]
  },
  {
    "id": 29,
    "page": 4,
    "category": "Santé",
    "title": "Moyen d'assainir l'eau pour se préserver des maladies épidémiques",
    "summary": "Face à la menace des épidémies propagées par l'eau, cet article vante les vertus du Goudron de Guyot, un antiseptique soluble permettant d'assainir les boissons et de prévenir diverses affections.",
    "paragraphs": [
      "Chacun sait aujourd'hui que les médecins sont tous d'accord pour reconnaître que c'est par l'eau que se communiquent la plupart des maladies épidémiques, telles que la fièvre typhoïde, la dysenterie, le choléra, et aussi la grippe et l'influenza. L'eau contient une infinité d'animalcules que l'on appelle microbes et dont quelques-uns sont les germes des maladies les plus dangereuses.",
      "Quand on n'a pas une eau très pure, et surtout quand il règne des épidémies dans un pays, il sera prudent, pour s'en préserver, d'assainir l'eau que l'on boit. C'est une précaution que l'on fera bien de prendre aussi pendant les grandes chaleurs.",
      "Le moyen le plus simple, le plus sûr et le plus économique d'assainir l'eau est d'y verser un peu de Goudron de Guyot. Le goudron est un antiseptique au premier chef. Il tue les microbes, causes de toutes nos maladies graves, et, de la sorte, nous en préserve.",
      "C'est il y a une trentaine d'années que Guyot, pharmacien distingué de Paris, a réussi à rendre le goudron soluble dans l'eau. Grâce à cette invention, on trouve aujourd'hui chez tous les pharmaciens, sous le nom de Goudron de Guyot, une liqueur très concentrée de goudron qui permet de préparer instantanément une eau de goudron très limpide et très efficace.",
      "Il suffit de verser une ou deux cuillerées à café de Goudron de Guyot par verre d'eau ou du liquide que l'on a coutume de prendre à ses repas pour obtenir une boisson qui préserve des épidémies et guérit les bronchites, vieux rhumes et catarrhes.",
      "Si l'on veut vous vendre tel ou tel produit au lieu du véritable Goudron Guyot, méfiez-vous, c'est par intérêt. Le véritable Goudron de Guyot est obtenu avec du goudron d'un pin maritime spécial, croissant en Norvège. Regardez l'étiquette : elle porte le nom de Guyot en gros caractères et sa signature en trois couleurs (violet, vert, rouge), ainsi que l'adresse : Maison Frère, 19, rue Jacob, Paris."
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Feuilleton",
    "title": "Récit : Les manigances et le projet d'Orvilliers",
    "summary": "Paul Tavernier et Georges Dufresne discutent de projets d'avenir et de rivalités mondaines, tandis qu'une invitation inattendue semble précipiter la mise à exécution des plans de Tavernier.",
    "paragraphs": [
      "« Pour y mener la vie des Glatigny », fit Dufresne d'un ton méprisant. « Je ne vois pas déjà qu'ils soient si mal partagés. J'ai rarement vu une maison qui me plaise autant que la leur. Il y a là-dedans une simplicité qui n'est pas sans grandeur. »",
      "Georges Dufresne lança au plafond un nuage de fumée claire et dit : « Nous aurions déjà sur eux un avantage si nous nous installions à l'Orfraisière, en gentlemen-farmers. »",
      "Paul Tavernier devint grave : « Mon cher Dufresne, je n'ai rien à cacher de mes projets ni à toi ni à personne. Je suis libre comme l'air. Je t'affirme de nouveau que je ne suis pas fixé le moins du monde sur ce que je ferai. Mais notre entretien m'a, grâce à toi, ouvert des horizons nouveaux. Je trouve ton projet excellent. »",
      "La mère Antoine introduisit un vieux domestique qui venait de descendre d'un coupé : c'était Colin, le valet de chambre du marquis d'Angeville défunt. Il remit à Paul Tavernier une carte de son jeune maître qui le priait de venir dîner ce soir chez lui, rue de Lille, sans aucune cérémonie.",
      "À trois heures, ils se quittèrent. Sur le seuil de son vestibule, Paul Tavernier acheva son secret ennemi par cette déclaration : « En vérité, je les remercie de m'avoir donné une idée admirable, et je vais la mettre à exécution. »",
      "Dans la rue, l'expression des traits de Georges Dufresne devint horrible. « Je sais ce que je voulais savoir », pensa-t-il. « Tous ligués contre moi ! Valentine est obsédée de leurs conseils, mais librement elle ne cédera pas. J'ai ma parole. »"
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Chroniques Diverses",
    "title": "Souvenirs de Jean de Vrigny",
    "summary": "Jean de Vrigny et le marquis achèvent le classement de leurs documents d'exploration. Entre deux cigares, Vrigny se laisse aller à la mélancolie du souvenir d'une femme rencontrée à Angeville.",
    "paragraphs": [
      "Le même jour et à la même heure, dans une petite salle à manger de l'hôtel d'Angeville, Jean de Vrigny et le marquis étaient assis en face l'un de l'autre et, leur déjeuner terminé, ils venaient d'allumer des cigares. Ils avaient travaillé toute la matinée à mettre en ordre les documents de leur exploration, et l'œuvre touchait à sa fin.",
      "Jean de Vrigny, renversé sur son fauteuil de vieux lampas rouge, songeait au plafond entouré d'une large corniche, en suivant les spirales de fumée de son cigare. Il n'avait quitté Angeville avec son ami que quelques jours auparavant, emportant dans sa mémoire le souvenir de la femme la plus parfaite qu'il eût rencontrée."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Informations Économiques",
    "title": "Marché aux bestiaux de la Villette",
    "summary": "Rapport du cours des bestiaux à la Villette pour la journée du 15 mars. Le marché est marqué par une vente difficile pour les porcs, tandis que le secteur des moutons affiche une activité plus soutenue.",
    "paragraphs": [
      "Du jeudi 15 mars : Bœufs, 10 à 70 fr. Vaches et taureaux, 21 à 53 fr. Veaux, 1 à 31 fr. Moutons, 1 à 70 fr. Porcs, vente mauvaise. On cote les Limousins, Bourbonnais, Charolais et Vendéens.",
      "Veaux : Vente mauvaise et prix stationnaires. Moutons : Vente plus facile. Porcs : Vente mauvaise, au kilo vif."
    ]
  }
];
