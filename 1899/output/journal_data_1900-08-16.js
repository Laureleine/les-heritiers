// Date: 1900-08-16
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-08-16 (Version Restaurée, 40 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Éditorial",
    "title": "Nos fils",
    "summary": "Une réflexion sur le système éducatif de 1899, pesant les mérites de l'enseignement classique face à l'enseignement moderne pour former les hommes d'action et les élites de la France de demain.",
    "paragraphs": [
      "À l'heure où les derniers examens se terminent, faisant de nouveaux saint-cyriens, de nouveaux polytechniciens, de nouveaux centraux, ouvrant à d'autres la carrière du droit, de la médecine ou du professorat, il est permis de se demander si nos fils sont aussi bien instruits et aussi fortement éduqués que l'ont été leurs pères.",
      "L'enseignement dit moderne a pour but précisément de nous mettre au courant des découvertes modernes. Il ne remplacera jamais, au point de vue d'une culture complète, littéraire et artistique, l'enseignement classique, mais il peut former des hommes d'action et d'énergie.",
      "J'ai sous les yeux deux devoirs couronnés au grand concours général de tous les lycées et départements. On y voit que les élèves de l'enseignement moderne soutiennent la comparaison avec les prix d'honneur de l'enseignement classique.",
      "Il est vraiment réconfortant de savoir que nous avons des fils capables de penser et d'écrire aussi noblement.",
      "Ce qui me plaît dans ces devoirs, c'est qu'ils sont bien conformes à la tradition française. Je suis partisan du maintien de l'enseignement classique, mais je crois qu'il faut développer l'enseignement français moderne à côté de lui. Il peut vraiment faire des Français modernes."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "L'Immolée",
    "summary": "Le maître de forges, M. de Courtial, découvre avec stupeur que l'officier qu'il a sauvé par humanité est l'homme responsable de son malheur, alors qu'une révélation douloureuse sur Jeannine éclate.",
    "paragraphs": [
      "Pénible devoir : ses yeux s'injectent. Il lui semble que des griffes s'enfoncent dans sa chair et la déchirent. Une flamme implacable passe dans ses yeux.",
      "L'officier ne semble pas prêter attention à l'interrogation du maître de forges. Il monologue sur un soir d'orage où il aurait croisé un inconnu blessé qu'il a secouru par humanité sans savoir qui il était.",
      "M. de Courtial s'écria : « Tu ne sais pas, André, ce qui est arrivé ? Eh bien, cet homme, ce misérable qui m'a ravi tout le bonheur de mon existence, cet homme, c'est moi qui l'ai sauvé. »",
      "Le maître de forges finit par avouer : « Jeannine est enceinte. » M. de Courtial, bouleversé, demande à retourner à Larignies pour confondre celle qu'il aimait."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Faits Divers",
    "title": "Grave collision de tramways",
    "summary": "Un grave accident de tramway s'est produit place Clichy hier soir lorsqu'une défaillance de freins a causé une collision frontale, blessant une vingtaine de passagers.",
    "paragraphs": [
      "Un accident, dû à la rencontre de deux tramways, s'est produit hier soir vers sept heures et demie sur la place Clichy.",
      "Le tramway électrique, faisant le trajet de Gennevilliers à la Madeleine, a pris en écharpe le tramway de la ligne de la Villette à l'Étoile, le renversant sur le côté.",
      "Si le mécanicien et les cochers n'ont pas eu de mal, une vingtaine de passagers ont été retirés de la voiture couchée, dont quinze blessés sérieusement conduits à l'hôpital ou soignés sur place par les docteurs Grimbert et Edmond Barré.",
      "M. Lapine et le commissaire Belouino ont ouvert une enquête. Le mécanicien Maynard a déclaré que ses freins n'avaient pas fonctionné sur la pente."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Informations",
    "title": "La Revue de Vincennes",
    "summary": "Le Président Émile Loubet a présidé une grande revue militaire à l'hippodrome de Vincennes en présence de délégations étrangères, célébrant les soldats-citoyens français.",
    "paragraphs": [
      "Dès l'aube, Vincennes, Charenton et Joinville-le-Pont ont vibré au son des fanfares des sapeurs-pompiers venus pour la grande revue devant le Président de la République.",
      "À deux heures, sur l'hippodrome de Vincennes, six mille hommes étaient rassemblés. De nombreuses délégations étrangères, notamment russes, espagnoles et hollandaises, étaient présentes aux côtés du Président Loubet.",
      "Après la revue, M. Loubet a remis des décorations, dont la croix de la Légion d'honneur, à plusieurs officiers méritants, saluant le dévouement de ces « soldats-citoyens ».",
      "La cérémonie s'est poursuivie à l'Hôtel de Ville de Paris où les compagnies ont défilé devant une foule nombreuse."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Nouvelles Coloniales",
    "title": "Dans le Touat",
    "summary": "Le général Servière, commandant la division d'Alger, a pris possession d'Adrar dans le Touat, confirmant l'occupation d'une région riche et stratégique pour la France.",
    "paragraphs": [
      "On annonce d'Alger que le général Servière, commandant la division d'Alger, a occupé sans coup férir Adrar, ville principale du Timmi, région importante du Touat. La région est décrite comme saine, peuplée et riche en ressources."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Étranger",
    "title": "Les événements de Chine",
    "summary": "Les troupes alliées progressent vers Pékin. Une dépêche de M. Pichon confirme que la légation de France est réduite à une ration de siège pour quinze jours, tandis que le calme règne à Canton malgré quelques agitations.",
    "paragraphs": [
      "Les rapides succès des troupes alliées laissent supposer que la colonne du général Linevitch est entrée à Pékin. Une dépêche de M. Pichon, datée du 9 août, confirme que la légation de France est réduite à une ration de siège pour quinze jours.",
      "À Canton, tout reste calme malgré une agitation croissante contre les missionnaires dans le district de Swatow."
    ]
  },
  {
    "id": 7,
    "page": 2,
    "category": "Extrême-Orient",
    "title": "La situation à Canton",
    "summary": "Les autorités chinoises renforcent les défenses de Canton, installant de nouveaux canons et menaçant les navires étrangers. La situation demeure tendue et sous surveillance étroite des forces alliées.",
    "paragraphs": [
      "Le vice-roi est en parfait accord avec le consulat ; il a été convenu que M. Guillien et le mandarin délégué par le vice-roi s'embarqueraient sur le Comète. Ils partiront demain matin.",
      "Hong-Kong, 15 août. Les Chinois redoublent d'activité dans la construction et l'installation des défenses de Canton. Les vieux forts ont été pourvus de nouveaux canons.",
      "Les Chinois déclarent que les forts ouvriront certainement le feu si de nouveaux navires de guerre sont envoyés à Canton. Les autorités anglaises de Canton se préparent à une éventualité de ce genre et l'artillerie est tenue prête à être employée. On annonce le prochain départ du monitor."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Extrême-Orient",
    "title": "Le sort des légations à Pékin",
    "summary": "Les nouvelles de Pékin restent alarmantes. Les attaques contre la légation britannique se poursuivent et un exode des officiels chinois est constaté. La situation diplomatique demeure incertaine.",
    "paragraphs": [
      "Londres, 15 août. Les journaux publient une dépêche de Shanghai, en date du 14 août, disant que, d'après des nouvelles de différentes sources datées de Pékin du 8 août, les Chinois avaient recommencé à attaquer vigoureusement la légation britannique, où il n'y avait que très peu de défenseurs.",
      "On dit aussi que le prince Tuan et cent autres hauts fonctionnaires ont quitté Pékin et qu'à la nouvelle du combat de Pei-Tsang, un vaste exode a commencé.",
      "On croit que Yu-Lu, ancien vice-roi du Tche-Li, a été tué à la bataille de Yang-Tsun.",
      "Rome, 15 août. Une dépêche du marquis de Salvago Raggi, ambassadeur d'Italie à Pékin, en date du 9 août, dit que les Chinois continuaient le feu contre la légation anglaise.",
      "Washington, 15 août. Le ministre de Chine vient de remettre au gouvernement un nouveau télégramme de M. Conger. Ce télégramme confidentiel ne sera pas publié. La date en est incertaine. Il n'indique pas que la position des légations ait empiré."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Extrême-Orient",
    "title": "Les Boxers chez le marquis Tseng",
    "summary": "À Pékin, les Boxers ont pillé la résidence du marquis Tseng. La marquise a dû fuir vers le nord tandis que le marquis a trouvé refuge au Tsung-li-Yamen face à l'insurrection populaire.",
    "paragraphs": [
      "Shanghai, août. Un rapport officiel chinois annonce que les Boxers ont dévalisé l'habitation que le marquis Tseng, fils de l'ancien ambassadeur, occupait à Pékin.",
      "La marquise s'est enfuie et se trouve à mille milles au nord de Pékin, tandis que le marquis est réfugié au Tsung-li-Yamen. Depuis qu'on a annoncé l'arrivée prochaine des troupes anglaises à Shanghai, l'exode des indigènes a cessé."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Extrême-Orient",
    "title": "Le combat de Nantsoï-Toun",
    "summary": "Après une victoire à Nantsoï-Toun où un détachement chinois a été mis en fuite, les troupes alliées ont repris leur marche vers Pékin, avançant en trois colonnes coordonnées.",
    "paragraphs": [
      "Saint-Pétersbourg, 15 août. Le ministre de la Guerre vient de recevoir la nouvelle dépêche que voici du général Linevitch : Colonne expéditionnaire, 7 août. Après avoir pris un jour de repos, les troupes alliées ont recommencé leur marche sur Pékin.",
      "Ce matin, à six heures, une avant-garde, composée d'un régiment sibérien, d'une sotnia de cosaques, de trois bataillons d'infanterie japonaise et d'une batterie américaine, a quitté Yang-Tsun.",
      "Malgré l'état presque impraticable des routes, elle a pu avancer de neuf milles dans la direction de Pékin, et à Nantsoï-Toun, un petit village situé à trente milles de la capitale chinoise, elle a rencontré un détachement chinois qu'elle a mis ignominieusement en fuite après un engagement d'une heure et demie. L'ennemi a jeté ses armes et s'est enfui dans la direction de Pékin.",
      "Aussitôt que j'ai reçu ces nouvelles de l'avant-garde, toutes les troupes alliées ont commencé à avancer en trois colonnes, les éclaireurs cosaques se tenant sur les flancs."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Extrême-Orient",
    "title": "La marche sur Pékin",
    "summary": "Les forces alliées ont pris Ho-Si-Wou et progressent rapidement vers Pékin. La cavalerie manœuvre pour couper la retraite chinoise, tandis que l'espoir grandit de libérer les ministres assiégés d'ici le début de la semaine.",
    "paragraphs": [
      "Tien-Tsin, 13 août. Ho-Si-Wou a été pris par les troupes alliées après un combat acharné avec les forces de Tung, qui avait pris en personne le commandement en chef.",
      "Afin d'éviter que les Chinois ne construisent de nouveaux retranchements, les alliés se sont mis immédiatement à leur poursuite et ils arriveront aujourd'hui, selon toutes prévisions, à vingt-six kilomètres de Pékin. Pour couper la ligne de retraite des Chinois sur Paou-Ting-Fou, la cavalerie s'avance vers le sud.",
      "Washington, 15 août. L'avance rapide des alliés a dépassé toutes les prévisions et l'on recommence à espérer. Au War-Office, on pense que Pékin sera attaqué simultanément à l'est et au sud samedi ou dimanche et que les ministres pourront être secourus au plus tard lundi.",
      "Londres, 15 août. Les journaux publient la dépêche suivante : Shanghai, 14 août. On estime que les alliés seront à proximité de Pékin ce soir. Les vice-rois Li-Hung-Chang, Lin-Kun-Yi et Chang-Chi-Tung ont envoyé une pétition à l'impératrice douairière, la suppliant de rester dans la capitale et de se garder de s'enfuir à l'approche des alliés."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Extrême-Orient",
    "title": "La prochaine bataille",
    "summary": "Après l'occupation de Ho-Si-Wou, les troupes alliées marchent sur Mu-Chang. Malgré les difficultés logistiques, les forces japonaises réparent les routes tandis qu'une bataille décisive se prépare à Hsiang-Ho-Hsien.",
    "paragraphs": [
      "Saint-Pétersbourg, 15 août. Il résulte d'une dernière dépêche du général Linevitch que les troupes alliées, après avoir occupé Ho-Si-Wou le 14 août, se sont portées sur Mu-Chang sans rencontrer grande opposition. L'artillerie a pu se mouvoir de façon satisfaisante malgré le mauvais état des routes, que les Japonais sont en train de réparer.",
      "Les troupes chinoises se concentrent à Hsiang-Ho-Hsien, où l'on s'attend à une grande bataille."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Extrême-Orient",
    "title": "Le maréchal de Waldersee et la position russe",
    "summary": "La presse russe précise que le maréchal de Waldersee exercera un commandement militaire sans prérogatives diplomatiques. La Russie réaffirme sa volonté de maintenir son programme politique en accord avec la France.",
    "paragraphs": [
      "Saint-Pétersbourg, 15 août. La Rossia, le Svet et la Gazette de la Bourse condamnent les prétentions de la presse allemande au sujet du rôle du maréchal de Waldersee. Il sera, disent-ils, un commandant en chef mais nullement un négociateur diplomatique ni un dictateur.",
      "Le Messager de l'Empire publie un communiqué officiel concernant l'adhésion du gouvernement russe à la nomination du maréchal de Waldersee en qualité de généralissime. Il ne faut pas oublier cependant que, tout en permettant que le détachement russe soit placé sous le commandement d'un feld-maréchal allemand, l'empereur de Russie ne songe nullement à s'écarter du programme politique arrêté en parfait accord avec la France ainsi qu'avec les autres puissances.",
      "La Russie, ne poursuivant pas un but égoïste, désire rétablir l'ordre le plus tôt possible et tient à conserver les meilleures relations avec l'empire voisin de Chine."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Extrême-Orient",
    "title": "L'attitude des États-Unis",
    "summary": "Washington rejette toute velléité d'annexion territoriale en Chine, tout en exigeant le châtiment exemplaire des responsables des attentats et des garanties de sécurité durables pour les citoyens américains.",
    "paragraphs": [
      "Washington, 14 août. Suivant un haut fonctionnaire, les États-Unis ne demanderont pas un seul pouce de territoire chinois.",
      "Ils exigeront la punition des coupables, quel que soit leur rang, la déposition de l'empereur ou de l'impératrice au cas où il serait établi que l'un ou l'autre aurait ordonné les hostilités, et les punitions les plus sévères contre le prince Tuan si c'est lui qui a commandé les attentats. Ils exigent aussi des indemnités suffisantes pour les familles des victimes américaines et des assurances satisfaisantes que l'état de choses actuel ne se reproduira pas."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Faits Divers",
    "title": "Déraillement à Persan-Beaumont",
    "summary": "Le bilan du récent déraillement ferroviaire près de Persan-Beaumont s'établit à un blessé grave, M. Lerdusseaux, et cinq autres personnes hors de danger. L'enquête judiciaire sur les causes du sinistre est ouverte.",
    "paragraphs": [
      "Nous avons raconté hier matin le grave accident de chemin de fer qui s'est produit avant-hier après-midi, à peu de distance de la station de Persan-Beaumont.",
      "À l'hôpital de Beaumont, le plus gravement atteint, M. Émile Lerdusseaux, est soigné pour une fracture à la hanche. Les cinq autres blessés, MM. Auguste Despessoville, Armand Vaignedroge, Henri Dubreux, Victor Deluprue et Hubert Hatin, sont considérés comme étant hors de danger.",
      "Le sous-préfet de Pontoise et les autorités locales se sont rendus sur place pour visiter les blessés. Les travaux de déblaiement ont été achevés vers quatre heures du matin et la circulation a pu être rétablie sur les deux voies vers six heures.",
      "L'enquête, menée par le procureur de la République et le juge d'instruction de Pontoise, cherche à déterminer les causes exactes du déraillement."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Accident aux manœuvres à Dinan",
    "summary": "Lors d'exercices militaires près du camp de Coëtquidan, un escadron du 24e dragons a subi un grave accident après avoir chuté dans une fondrière dissimulée, occasionnant des blessures et la perte de plusieurs chevaux.",
    "paragraphs": [
      "La 10e brigade de cavalerie, en garnison à Dinan, se rendait au camp de Coëtquidan. Au cours d'une manœuvre, un escadron du 24e dragons a rencontré une fondrière dissimulée par des branchages.",
      "Plusieurs chevaux se sont abattus dans la cavité, occasionnant des blessures aux dragons. Les blessés ont été dirigés sur Rennes ou Dinan. Beaucoup de chevaux ont dû être abattus."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Nouvelles Maritimes",
    "title": "Réformes et changements dans la Marine",
    "summary": "Face aux nécessités coloniales en Chine, le ministre de la Marine réorganise ses effectifs, autorise le port de la barbe et remplace les manœuvres d'automne par des exercices de croisière côtière.",
    "paragraphs": [
      "Les événements de Chine ayant nécessité des prélèvements de troupes, le ministre de la Marine a décidé de remplacer les manœuvres d'automne par des exercices de croisière aux environs des ports.",
      "Le ministre a également étendu l'autorisation du port libre de la barbe aux officiers-mariniers, quartiers-maîtres et marins.",
      "Des décrets réorganisent le Conseil supérieur de la Marine et remplacent le comité des inspecteurs généraux par un comité consultatif pour plus d'efficacité."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Guerre au Transvaal",
    "title": "Dépêches du front sud-africain",
    "summary": "Dernières nouvelles du Transvaal : le colonel Hoar tient Elands-River malgré les troubles, des accrochages sont signalés près de Mafeking, et les lignes télégraphiques sabotées au nord de Newcastle sont réparées.",
    "paragraphs": [
      "Pretoria, 15 août. Le colonel Hoar, qui commande la garnison d'Elands-River, tient toujours. Le commandant Grobler se dirige sur Mafeking. La colonne dite capturée est saine et sauve.",
      "Le Cap, 15 août. Un parti de Boërs a endommagé la ligne de chemin de fer et coupé les fils télégraphiques au nord de Newcastle. Les dégâts ont été réparés.",
      "Londres, 15 août. Une escarmouche a eu lieu près de Mafeking entre une patrouille anglaise et les Boërs."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Dépêches de l'Étranger",
    "title": "Nouvelles diverses",
    "summary": "Chroniques internationales du 15 août : séjour du shah de Perse à Ostende, collision ferroviaire meurtrière dans le Michigan, apparition d'un bolide en Espagne et incident diplomatique entre Kurdes et Anglais.",
    "paragraphs": [
      "Bruxelles, 15 août. Le shah de Perse mène une vie méthodique à Ostende.",
      "New-York, 15 août. Deux trains de voyageurs se sont tamponnés à Pierson (Michigan) à cause du brouillard, faisant neuf tués et de nombreux blessés.",
      "Madrid, 15 août. Un bolide a été observé au-dessus de la ville de Baylen, causant une vive alarme.",
      "Londres, 15 août. Les Kurdes ont fait feu sur un groupe accompagnant le vice-consul d'Angleterre de Van dans les environs d'Elk. L'ambassadeur britannique a fait de vives représentations à la Porte."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Conférences et réceptions",
    "summary": "L'Exposition Universelle poursuit ses activités : conférences coloniales au Trocadéro, banquets associatifs et publication des listes officielles de récompenses artistiques et éducatives.",
    "paragraphs": [
      "La sixième conférence coloniale aura lieu demain vendredi, au Trocadéro. M. Houssarie y fera une causerie sur les jeux floraux annamites.",
      "L'Union des employés du commerce et de l'industrie de Lyon a organisé un banquet fraternel à l'occasion d'un voyage à l'Exposition, en présence de M. de Lanessan.",
      "Les listes de récompenses aux exposants sont publiées, notamment pour les Beaux-Arts, l'enseignement secondaire et supérieur."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drame sanglant à Puteaux",
    "summary": "Une rixe violente à Puteaux entre trois personnes a tourné au drame. L'agresseur, armé d'un couteau, a été neutralisé par l'intervention héroïque du chien de l'une des victimes. Le pronostic vital est engagé.",
    "paragraphs": [
      "Une scène affreuse s'est déroulée hier soir, à Puteaux, et il est à craindre que les trois personnes impliquées ne survivent difficilement à leurs blessures.",
      "Un terrassier, François Gondé, âgé de cinquante-quatre ans, rentrait chez lui accompagné de son voisin, Auguste Belloin, âgé de quarante-huit ans. Arrivés au rond-point, ils aperçurent Jeanne Lhérault, la maîtresse de Belloin, conversant avec une autre femme, Mme Prevel.",
      "Belloin, furieux, injuria Mme Prevel. François Gondé voulut intervenir, mais Belloin sortit un long couteau et le poignarda. Il se tourna ensuite vers Mme Prevel pour l'agresser à son tour.",
      "Le chien de montagne de Mme Prevel, nommé Porthos, s'interposa brusquement. Le molosse attaqua Jeanne Lhérault, la mordant grièvement, puis se jeta sur Belloin, le terrassant et lui infligeant des blessures atroces.",
      "La police et un médecin sont intervenus rapidement. L'état des trois protagonistes est jugé très grave et ils ont été transportés d'urgence à l'hôpital Laennec."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Social",
    "title": "La grève des cochers",
    "summary": "Les cochers de la Compagnie générale, en grève, ont été reçus au ministère de l'Intérieur par M. Waldeck-Rousseau. Le mouvement se poursuit dans l'attente d'une décision officielle.",
    "paragraphs": [
      "Les cochers grévistes de la Compagnie générale ont été reçus par M. René Waldeck-Rousseau au ministère de l'Intérieur pour exposer leurs revendications. Aucune réponse précise n'a pu être donnée en l'absence du ministre, mais une décision est attendue pour le soir même.",
      "Malgré le jour férié, les grévistes se sont réunis à la Bourse du travail. Le secrétaire général du syndicat, M. Carnets, a fait part de l'accueil bienveillant reçu au ministère.",
      "Les cochers de la Compagnie de l'Urbaine ont obtenu une amélioration de leurs conditions de travail et versent désormais une partie de leurs gains pour soutenir financièrement leurs camarades en grève."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Social",
    "title": "Congrès des secrétaires et employés de mairie",
    "summary": "Réunis à l'Hôtel de Ville sous la présidence de M. Théodore Tissier, les secrétaires et employés de mairie ont débattu de leur statut, réclamant des garanties contre les révocations arbitraires.",
    "paragraphs": [
      "Le congrès national des secrétaires et employés de mairie s'est tenu hier à l'Hôtel de Ville, sous la présidence de M. Théodore Tissier.",
      "Divers conférenciers ont traité de l'histoire, de la situation actuelle et des questions relatives aux retraites des employés municipaux.",
      "Les membres ont émis des vœux pour que les secrétaires de mairie ne puissent être révoqués ou suspendus par les maires sans un arrêté dûment motivé et l'agrément préalable du préfet."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Social",
    "title": "Grèves de chauffeurs et marins à Marseille, Bordeaux et Le Havre",
    "summary": "Une vague de grèves paralyse les ports français. À Marseille, Bordeaux et Le Havre, dockers, marins et chauffeurs exigent une hausse des salaires et l'instauration de la journée de huit heures.",
    "paragraphs": [
      "À Marseille, le mouvement gréviste s'étend. Les ouvriers des docks réclament une augmentation de salaire. Des gendarmes protègent activement l'embarquement sur les paquebots.",
      "À Bordeaux, les premiers chauffeurs et soutiers inscrits maritimes ont voté la grève générale.",
      "Au Havre, les ouvriers voiliers et les ouvriers du port se sont mis en grève, réclamant l'application de la journée de huit heures ainsi qu'une revalorisation de leur salaire horaire."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Chronique",
    "title": "Couronnement d'une rosière à Saint-Chéron",
    "summary": "La commune de Saint-Chéron a honoré Mlle Juliette Delarue, couronnée rosière en reconnaissance de son dévouement exemplaire au sein de sa famille lors d'une cérémonie officielle.",
    "paragraphs": [
      "La petite localité de Saint-Chéron était en fête hier pour le couronnement de la rosière, Mlle Juliette Delarue, distinguée pour son dévouement exemplaire envers sa mère et sa famille.",
      "Une cérémonie solennelle a eu lieu à la mairie, où un livret de caisse d'épargne lui a été officiellement remis par le maire, M. Gagnière."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Tentative de suicide place de la Concorde",
    "summary": "Un instituteur de cinquante ans, Antoine Delrien, a tenté de mettre fin à ses jours en se poignardant devant la statue de Strasbourg, place de la Concorde. Transporté à l'hôpital, son état demeure critique.",
    "paragraphs": [
      "Un homme de cinquante ans, Antoine Delrien, instituteur, s'est poignardé devant la statue de Strasbourg, place de la Concorde, dans un accès de surexcitation mentale.",
      "Il a été transporté d'urgence à l'hôpital de la Charité par les soins de M. Murat, officier de paix. Les médecins conservent fort peu d'espoir quant à sa survie."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accidents divers à Paris",
    "summary": "Paris est le théâtre de divers drames : un jeune ferblantier est mort renversé par un camion, un incident technique est survenu à l'usine du métropolitain et un citoyen a été secouru après une agression.",
    "paragraphs": [
      "Henri Ragois, un jeune ferblantier de seize ans, est décédé après avoir été renversé par un camion rue de Lourmel.",
      "Un énorme treuil s'est rompu à l'usine du métropolitain, rue Philidor, provoquant une vive émotion parmi les ouvriers sans toutefois faire de victimes.",
      "Michel Lagorcey a été sauvé de la noyade dans la Seine après avoir été agressé par trois individus qui tentaient de le dévaliser."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "International",
    "title": "Événements de Chine",
    "summary": "La région du Si-Kiang demeure sous surveillance malgré des mouvements de troupes. La marine anglaise maintient une présence active à Wu-Chau et Swa-Tau pour assurer la sécurité.",
    "paragraphs": [
      "La région du Si-Kiang reste calme, bien que des mouvements de soldats chinois aient été observés. Une canonnière anglaise est stationnée à Wu-Chau et un croiseur surveille attentivement la zone de Swa-Tau."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Sports",
    "title": "Championnats du monde de cyclisme",
    "summary": "Le champion cycliste Jacquelin a remporté une brillante victoire lors des championnats du monde à Vincennes, devançant Meyers et Arend devant une foule nombreuse.",
    "paragraphs": [
      "Une grande foule a assisté hier aux championnats du monde à Vincennes. Le champion Jacquelin a brillamment remporté l'épreuve des professionnels devant Meyers et Arend.",
      "Le programme des festivités au vélodrome se poursuit avec des matches de tandems et des épreuves de vitesse très attendues."
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Actualités",
    "title": "Concours national de tir",
    "summary": "Le Petit Parisien soutient activement le concours national de tir, marqué par l'arrivée à Paris des délégations de Poitiers et de Lyon pour les épreuves d'honneur.",
    "paragraphs": [
      "Le Petit Parisien a déclaré qu'il contribuerait au succès du concours national.",
      "Des délégations des sociétés de tir au canon de Poitiers et de Lyon sont arrivées à Paris pour prendre part aux épreuves de catégories ainsi qu'aux tirs d'honneur.",
      "Les journées du samedi 18 et du dimanche sont officiellement réservées aux concours d'honneur."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Aéronautique",
    "title": "Le concours de ballons",
    "summary": "À la suite du concours de distance horizontale, les aéronautes de la Vaulx, Faure et Castillon de Saint-Victor ont dû interrompre leur vol, craignant d'être entraînés au-dessus de l'océan.",
    "paragraphs": [
      "Derniers résultats du concours de distance horizontale (1re série).",
      "L'Horizon, 1200 mètres cubes : le capitaine de la Vaulx a atterri à Colpo (Morbihan), à deux kilomètres de l'océan, lundi à cinq heures du matin.",
      "L'Aéro-Club, 1600 mètres cubes : le capitaine J. Faure a atterri à Tiriac (Loire-Inférieure), à quinze kilomètres de Nantes.",
      "MM. Castillon de Saint-Victor, de la Vaulx et J. Faure ont donc été arrêtés par la crainte d'être entraînés au-dessus de la mer."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Météorologie",
    "title": "La température",
    "summary": "Le temps demeure beau et chaud sur l'ensemble de la France. Une baisse des pressions et de la température est toutefois constatée dans le sud de l'Europe ainsi qu'en Allemagne.",
    "paragraphs": [
      "Le temps s'est maintenu très beau hier pendant toute la journée.",
      "Le baromètre baisse dans le sud et l'ouest de l'Europe et les pressions supérieures à 770 mm s'éloignent vers le nord. La péninsule des Balkans à Naples est à 758 mm.",
      "Le vent est faible ou modéré de l'est sur toutes nos côtes; la mer reste belle.",
      "Quelques pluies sont tombées dans le sud de l'Italie; on n'en signale pas en France.",
      "La température a baissé en Allemagne et en Italie; elle était hier matin de 11 à 12 degrés à Paris, à Madrid et à Monaco.",
      "On notait au mont Aigoual 9 degrés, au Puy-de-Dôme 9 degrés et 3 degrés au mont Mounier.",
      "En France, un temps beau et chaud reste probable. Situation particulière aux ports français : la mer est généralement belle."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Navigation",
    "title": "Navigation fluviale",
    "summary": "État des niveaux d'eau relevés sur les bassins de la Seine, de la Marne et de l'Oise pour le suivi de la navigation fluviale.",
    "paragraphs": [
      "Hautes-Seine : pont de Seine à Montereau, écluse de Varennes, 2m 24; pont de Melun, pont de Corbeil, 1m 57; écluse de Port-à-l'Anglais.",
      "Marne : écluse de Gumières, écluse de Chalifert, écluse de Charenton, 1m 09.",
      "Basse-Seine : écluse du canal Saint-Martin, pont de la Tournelle, pont Royal, écluse de Suresnes, barrage de Bezons, pont de Mantes, écluse de Méricourt, 3m.",
      "Oise : Barrage de Vinette."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Tribunaux",
    "title": "Le poinçonnage des billets de train",
    "summary": "Le tribunal correctionnel confirme le droit des compagnies de chemins de fer à contrôler et poinçonner les billets après l'affaire d'un voyageur ayant refusé ce contrôle à la gare du Nord.",
    "paragraphs": [
      "Beaucoup de personnes s'imaginent encore que les compagnies de chemins de fer n'ont pas le droit de faire poinçonner et contrôler les billets.",
      "Le 31 janvier dernier, le juge de paix du dixième arrondissement de Paris condamnait la Compagnie de l'Est à un franc de dommages-intérêts au profit d'un voyageur qui s'était plaint de la manière dont son billet avait été poinçonné. Mais cette décision, loin de dénier aux compagnies de chemins de fer leurs droits de contrôle, statuait uniquement sur le fait d'un poinçonnage défectueux.",
      "Le tribunal correctionnel a dû juger samedi le cas de M. G., monteur en bronze, qui avait refusé à la gare du Nord de laisser poinçonner son billet. Le tribunal a réduit la peine à 16 francs d'amende et a autorisé la Compagnie à publier l'affiche de condamnation, à condition que le nom de M. G. soit remplacé par l'initiale X."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Tribunaux",
    "title": "Une jeune fille violente",
    "summary": "Alexandrine Gaguaire, dix-neuf ans, est condamnée pour avoir tiré sur son beau-frère. Le tribunal lui accorde le bénéfice de la loi Bérenger compte tenu de ses antécédents.",
    "paragraphs": [
      "Une jeune fille de dix-neuf ans, Alexandrine Gaguaire, a comparu devant la onzième chambre du tribunal correctionnel de la Seine.",
      "Elle avait été condamnée par défaut à six mois de prison pour avoir tiré deux coups de revolver sur son beau-frère qu'elle avait atteint au cou.",
      "Les juges, tenant compte de son jeune âge et de ses antécédents, ont maintenu la peine mais ont accordé à la prévenue le bénéfice de la loi Bérenger."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Tribunaux",
    "title": "Nouvelles judiciaires : Le drame de Saint-Yaguen",
    "summary": "Le jeune Adrien Deraillans, berger de treize ans, a comparu devant le tribunal correctionnel de Saint-Sever-sur-l'Adour pour avoir tué accidentellement sa compagne lors d'un tragique accident de fusil.",
    "paragraphs": [
      "Le 7 juillet dernier, le jeune Adrien Deraillans, berger âgé de treize ans, demeurant à Saint-Yaguen, avait tué accidentellement, en jouant avec un fusil, sa petite compagne Marylis Castets, âgée de six ans.",
      "Cette affaire, qui émut vivement toute la contrée, vient de connaître son dénouement devant le tribunal correctionnel de Saint-Sever-sur-l'Adour. Le jeune Deraillans a été condamné à une amende pour homicide par imprudence."
    ]
  },
  {
    "id": 37,
    "page": 4,
    "category": "Sports",
    "title": "Les courses de Deauville",
    "summary": "Le 15 août, les courses de Deauville ont attiré une assistance élégante et nombreuse. Les prix furent remportés par Alpacha, Aigle Royal, Go On, Magistrat, Eperon et Victoire.",
    "paragraphs": [
      "Les résultats du mercredi 15 août témoignent d'une assistance élégante et nombreuse. Alpacha s'adjuge le prix de Lonray, tandis que le prix de la Plage revient à Aigle Royal.",
      "Le prix des Apprentis est remporté par Go On et le prix du Salon de Trouville par Magistrat.",
      "Dans le prix de Deux Ans, Eperon a fait preuve d'une écrasante supériorité. Le handicap final a été remporté par Victoire."
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Social",
    "title": "Statistiques de la Ville de Paris",
    "summary": "La statistique municipale enregistre une mortalité en baisse pour la 32e semaine avec 847 décès, tout en insistant sur l'importance de l'hygiène du lait pour prévenir la mortalité infantile.",
    "paragraphs": [
      "Le service de la statistique municipale a compté, durant la 32e semaine, 847 décès, un chiffre inférieur à la moyenne habituelle du mois d'août qui s'établit à 907.",
      "La fièvre typhoïde a causé 16 décès, la rougeole 18, la scarlatine 5, la coqueluche 7, la diphtérie 2 et la variole 2.",
      "La diarrhée infantile est responsable de 164 décès chez les enfants de moins d'un an ; il est vivement conseillé aux familles de veiller avec le plus grand soin à la propreté du lait.",
      "On a célébré, durant cette période à Paris, 516 mariages et enregistré la naissance de 1 308 enfants vivants."
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "Théâtre",
    "title": "Courrier des théâtres",
    "summary": "L'actualité des scènes parisiennes : succès soutenu aux Variétés, reprises au Gymnase et à la République, longévité de Feydeau et préparation des matinées littéraires.",
    "paragraphs": [
      "Les Variétés ont repris 'La Belle Hélène' avec un succès constant, portée par l'interprétation de Mme Simon-Girard et de M. Dastrez.",
      "Le théâtre de la République a repris 'Madame la Maréchale', une pièce qui demeure vivante malgré ses ressemblances avec 'Madame Sans-Gêne'.",
      "Le théâtre du Gymnase propose actuellement des places à tarif réduit pour 'Le Chemineau' de Jean Richepin.",
      "La pièce 'Le Dindon' de Georges Feydeau approche sa 300e représentation au Palais-Royal.",
      "La Comédie-Française prépare activement sa matinée littéraire au Trocadéro, avec un programme incluant des œuvres de Marivaux, Voltaire et Diderot."
    ]
  },
  {
    "id": 40,
    "page": 4,
    "category": "Concerts",
    "title": "Concerts et orphéons du jeudi 16 août",
    "summary": "La journée du 16 août est animée par de nombreux concerts et aubades donnés par des musiques militaires dans les squares parisiens et sur le site de l'Exposition.",
    "paragraphs": [
      "De nombreux concerts sont prévus dans l'enceinte de l'Exposition ainsi que dans les squares parisiens, notamment au Trocadéro, au Champ-de-Mars et aux Invalides, interprétés par les régiments de ligne et diverses formations de musiques militaires."
    ]
  }
];
