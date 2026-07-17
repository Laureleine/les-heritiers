// Date: 1900-05-31
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-05-31 (Version Restaurée, 35 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Science",
    "title": "La photographie au service de l'astronomie",
    "summary": "L'astronomie moderne se révolutionne par la photographie, permettant aux savants de fixer et de cataloguer les astres avec une précision inédite, assurant la transmission des secrets célestes aux générations futures.",
    "paragraphs": [
      "Il y a soixante ans, le savant Arago déclarait à l'Académie des sciences qu'un jour viendrait où l'on pourrait, à l'aide de l'œil photographique, pénétrer tous les secrets du ciel. Aujourd'hui, les astronomes observant l'éclipse de soleil du 28 mai ont pu reproduire photographiquement le phénomène, saisissant les spectres des protubérances et la couronne lumineuse.",
      "Ces nouvelles photographies viendront compléter la merveilleuse section de notre Observatoire national à l'Exposition universelle, offrant au grand public une surface murale de dix-huit mètres de longueur sur quatre mètres de hauteur dédiée aux reproductions célestes.",
      "M. Janssen, membre de l'Institut, a obtenu d'admirables photographies de la surface solaire prises en un demi-millième de seconde. Par la suite, l'amiral Mouchez, directeur de l'Observatoire de Paris, a provoqué un Congrès astro-photographique international en 1887 pour obtenir une carte photographique du ciel tout entier.",
      "La lentille de l'appareil photographique représente un œil nouveau qui voit plus vite, plus loin, plus longtemps ; il fixe, imprime et conserve ce qu'il voit, permettant de cataloguer les étoiles de manière irréprochable.",
      "La section de l'Observatoire à l'Exposition contient l'Atlas de la carte du ciel, incluant 177 cartes renfermant les images de 48 000 étoiles. Ces documents impérissables serviront de base à l'astronomie des siècles futurs."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Les tours de Notre-Dame",
    "summary": "Alors qu'un espoir de libération se dessine pour Michel, Gabrielle demeure hantée par l'angoisse et la crainte des manœuvres obscures d'Armand Breuilhet contre son fiancé.",
    "paragraphs": [
      "Madame de Saint-Arnaud, émue, demande à Hélène d'aller annoncer la nouvelle à sa fille Gabrielle. Bien que craignant la réception de celle-ci, elle confie cette mission à Hélène, sa vaillante petite sainte.",
      "Gabrielle, apprenant les détails de l'affaire et les espoirs de liberté pour son fiancé Michel, reste pourtant tourmentée par le départ mystérieux d'Armand Breuilhet pour Paris, craignant qu'il ne trame une nouvelle machination contre Michel.",
      "Malgré les assurances du défenseur Bernard Mole, qui promet que le juge d'instruction rendra une ordonnance de non-lieu, Gabrielle demeure proie à une appréhension mortelle, redoutant la persévérance malveillante de son ennemi."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Politique",
    "title": "Les travaux de la Chambre",
    "summary": "La Chambre des députés s'apprête à débattre de six interpellations cruciales, couvrant la politique coloniale en Afrique, les questions sociales et la démission du général de Galliffet.",
    "paragraphs": [
      "L'ordre du jour de la Chambre prévoit six interpellations. La première concerne une concession accordée par le ministre des Colonies en Afrique occidentale, portée par le député du Sénégal, M. d'Agoult.",
      "Le député socialiste M. Vaillant doit également aborder la question du chômage et les incidents survenus au cimetière du Père-Lachaise. Par ailleurs, M. de Grandmaison interpellera le gouvernement sur la démission du général de Galliffet."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "International",
    "title": "La situation en Chine",
    "summary": "L'insécurité grandit en Chine face à la révolte des Boxers. Tandis que les infrastructures restent menacées, les puissances étrangères renforcent leurs troupes pour assurer la protection de leurs légations.",
    "paragraphs": [
      "Des nouvelles de Pékin indiquent que le chemin de fer vers Tien-Tsin est intact, bien que des ateliers aient été endommagés par des incendies. Des mécaniciens français sont sains et saufs.",
      "Cependant, la situation est préoccupante : les ateliers de Lou-Kou-Shiao sont aux mains des rebelles, et plusieurs soldats impériaux ont fait cause commune avec les Boxers. Les puissances étrangères, dont la France, la Russie et l'Angleterre, renforcent leur présence militaire et prévoient des débarquements pour protéger les légations."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Collision sur la ligne du Nord",
    "summary": "Un tragique accident ferroviaire près de Tergnier a causé la mort du mécanicien Guyart. Une enquête est en cours pour établir les responsabilités lors de ce choc entre deux convois.",
    "paragraphs": [
      "Un grave accident ferroviaire s'est produit hier après-midi près de Tergnier. Un train de voyageurs filant à grande vitesse a percuté un train de marchandises à une bifurcation. La locomotive du convoi de marchandises a été projetée dans le canal par la violence du choc.",
      "Le mécanicien du train de voyageurs, Guyart, a succombé à ses blessures malgré l'intervention rapide des médecins. Une enquête est en cours pour déterminer si l'accident est dû à une inobservation des signaux ou à une défaillance technique."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Un fou assassin",
    "summary": "À Séderon, le nommé Séraphin Dethès a perpétré un double meurtre d'une atrocité inouïe, assassinant à coups de bêche l'épouse du maire, Mme Reynaud-Lacroxe, ainsi que le garde champêtre. Le meurtrier a été appréhendé.",
    "paragraphs": [
      "À Séderon, un drame sanglant a jeté l'émoi dans toute la contrée. Le nommé Séraphin Dethès, dans un accès de démence meurtrière, a assassiné Mme Reynaud-Lacroxe, épouse du maire, ainsi que le garde champêtre, les frappant sauvagement à coups de bêche.",
      "Le forcené, après avoir commis ces odieux attentats, a été promptement appréhendé par les autorités locales et conduit sous bonne garde devant le parquet pour y répondre de ses actes criminels."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Mystérieuse affaire",
    "summary": "Le corps inanimé de Charlotte Tesson a été retiré des eaux de la Seine, près du pont de Billancourt. La justice cherche à établir si ce drame fait suite à la violente altercation survenue avec son ancien amant.",
    "paragraphs": [
      "Le cadavre d'une femme nommée Charlotte Tesson a été retiré des eaux de la Seine, à proximité du pont de Billancourt. La découverte de ce corps, dans des circonstances troubles, a immédiatement mobilisé les agents de la sûreté.",
      "Il appert que la victime avait, ces derniers jours, été au centre d'une violente altercation avec son ancien amant, le sieur Arthur Capdet. Une information judiciaire a été ouverte pour déterminer si l'on se trouve en présence d'un crime passionnel ou d'une issue fatale volontaire."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Exposition Universelle",
    "title": "Chroniques de l'Exposition",
    "summary": "Malgré un refroidissement notable, l'Exposition universelle attire les foules. M. Loubet poursuit ses visites officielles, tandis que les sections coloniales suscitent un vif intérêt chez les visiteurs parisiens.",
    "paragraphs": [
      "Nonobstant un abaissement marqué de la température, l'Exposition universelle continue d'attirer une affluence considérable, composée en grande partie de visiteurs étrangers. M. Loubet a poursuivi ses visites officielles en inspectant avec attention les sections étrangères des palais de l'Esplanade, notamment les remarquables expositions japonaise et suisse.",
      "Le Président de la République doit consacrer sa journée de demain à la visite des sections coloniales installées au Trocadéro. Par ailleurs, les chiffres officiels de fréquentation témoignent de l'intérêt soutenu du public parisien pour cette manifestation, avec plus de 156 000 entrées enregistrées lors de la journée du mardi dernier."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "International",
    "title": "La guerre au Transvaal",
    "summary": "La progression des troupes britanniques vers Johannesburg est entravée par le relief. Dans le Natal, le général Buller tente de rallier les civils en promettant protection aux populations restant neutres.",
    "paragraphs": [
      "Les forces de Lord Roberts poursuivent leur marche vers Johannesburg. Dans la région du Natal, la progression des troupes anglaises se trouve singulièrement ralentie par la nature accidentée du terrain montagneux, âprement défendu par les Boers.",
      "Le général Buller a fait publier une proclamation solennelle affirmant que les hostilités sont dirigées exclusivement contre le gouvernement adverse et non contre la population civile. Il promet protection et indemnisation aux habitants qui observeraient une stricte neutralité."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "Opérations militaires au Natal",
    "summary": "Au Natal, les Britanniques consolident leurs positions sur l'Inkwels, faisant face aux hauteurs fortifiées de Pogwani et Laing's Neck occupées par les Boers, malgré les échanges de canonnade.",
    "paragraphs": [
      "Les forces anglaises maintiennent des positions de première importance. Un détachement de Boers occupe toujours Majuba-Hill, mais la possession de la montagne Inkwels par les troupes anglaises leur assure un avantage tactique indéniable sur le théâtre des opérations.",
      "Hier soir, les batteries boers établies sur la colline de Pogwani ont dirigé quelques obus sur la montagne Inkwels, sans toutefois causer de dommages notables.",
      "Les Boers ont édifié sur le flanc sud de Pogwani des retranchements qui paraissent, de prime abord, inexpugnables. Ce matin, l'artillerie anglaise, armée de ses puissantes pièces de 4 pouces 7, a ouvert un bombardement nourri contre les positions ennemies de Pogwani et de Laing's Neck.",
      "Un nombre important de Boers a été observé en mouvement sur cette dernière position, bien que leur réplique soit restée singulièrement faible face au feu nourri des Anglais."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "L'Annexion de l'État libre d'Orange",
    "summary": "Le général Prettyman a officiellement proclamé l'annexion de l'État libre d'Orange à l'Empire britannique, renommant le territoire Colonie du fleuve Orange lors d'une cérémonie solennelle.",
    "paragraphs": [
      "Hier, à midi, l'annexion de l'État libre d'Orange a été formellement proclamée sur la place du Marché par le gouverneur militaire, le général Prettyman.",
      "La cérémonie a eu lieu en présence d'un grand nombre de résidents anglais et des troupes. Lady Roberts et ses filles y assistaient. La ville était pavoisée et décorée.",
      "Le général Prettyman, accompagné d'une escorte de yeomanry, s'est rendu sur la place un peu avant midi, et, au milieu d'un profond silence, il a lu la proclamation de lord Roberts annexant l'État libre d'Orange aux possessions de la Reine sous le nom de Colonie du fleuve Orange.",
      "Quand le gouverneur eut terminé la lecture, la foule poussa des hourras et l'étendard royal fut déployé pendant que les musiques jouaient le « God Save the Queen ». Une salve de vingt et un coups de canon fut tirée."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "Entrevue avec le Docteur Leyds",
    "summary": "Le représentant des républiques sud-africaines, le docteur Leyds, exprime son amertume face à l'absence d'intervention européenne et redoute une lutte prolongée malgré l'avance britannique.",
    "paragraphs": [
      "Nous venons d'avoir une longue entrevue avec le docteur Leyds, le représentant des républiques sud-africaines en Europe. Le diplomate, qui venait de rentrer de Paris, est apparu très abattu.",
      "« Les dernières nouvelles ne sont pas bonnes, nous dit le docteur Leyds, mais je crois encore que les Anglais ne seront pas victorieux jusqu'au bout. Certes, je suis profondément attristé de ne pas voir les puissances européennes intervenir, mais je crois bien que l'Amérique fera entendre sa voix avant qu'il ne soit trop tard. »",
      "« Par marches forcées, les Anglais peuvent être en deux jours à Pretoria. Mais, en supposant que la capitale succombe, nos ennemis ne seront pas encore au bout de leur tâche. J'estime que la guerre durera encore plus de deux mois. »"
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Politique",
    "title": "Conseil Municipal de Paris",
    "summary": "Lors de la séance du 30 mai, le Conseil municipal de Paris a procédé à l'élection de M. Grébauval à sa présidence et à la répartition des commissions entre les divers groupes politiques.",
    "paragraphs": [
      "La séance du mercredi 30 mai est ouverte à trois heures dix. M. Grébauval est élu président du conseil.",
      "Les élections des bureaux et des six grandes commissions ont eu lieu. La majorité des postes est répartie entre les nationalistes, les socialistes et les radicaux-socialistes."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Politique",
    "title": "Le nouveau ministre de la Guerre",
    "summary": "M. Waldeck-Rousseau a conduit le général André à l'Élysée afin de le présenter au Président de la République en qualité de nouveau ministre de la Guerre.",
    "paragraphs": [
      "M. Waldeck-Rousseau, président du Conseil, accompagné par le général André, s'est rendu hier matin à l'Élysée pour présenter au Président de la République le nouveau ministre de la Guerre.",
      "En quittant l'Élysée, le général André est allé au ministère de la Guerre pour prendre possession des services."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Social",
    "title": "La Loi sur les Associations",
    "summary": "M. Waldeck-Rousseau a défendu devant la commission parlementaire le projet de loi sur les associations, articulé autour de la notion juridique de contrat public.",
    "paragraphs": [
      "M. Waldeck-Rousseau a été entendu hier par la commission qui examine le projet du gouvernement sur les associations.",
      "Il s'est appliqué à établir que ce projet repose sur le principe que l'association est un contrat soumis aux règles d'ordre public."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Faits Divers",
    "title": "Cérémonie sur la tombe de Lafayette",
    "summary": "Membres de la colonie américaine et le général Horace Porter, ambassadeur des États-Unis, ont honoré la mémoire de Lafayette au cimetière de Picpus lors du « Commemoration Day ».",
    "paragraphs": [
      "C'est hier après-midi qu'a eu lieu, dans le cimetière de Picpus, la cérémonie du « Commemoration Day ». Les membres de la colonie américaine de Paris sont venus honorer la tombe du général de Lafayette.",
      "Le général Horace Porter, ambassadeur extraordinaire des États-Unis, a prononcé un discours vibrant rappelant l'abnégation et le dévouement du général de Lafayette pour la cause de l'indépendance américaine."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Faits Divers",
    "title": "Un fou dans l'avenue des Tilleuls (Berlin)",
    "summary": "Un individu nommé Courbert a été arrêté à Berlin sur l'avenue des Tilleuls au passage de l'empereur. Atteint d'aliénation mentale, il a été conduit au poste de police par les autorités.",
    "paragraphs": [
      "Un individu nommé Courbert a été arrêté dans l'avenue des Tilleuls au moment précis où l'empereur passait en voiture. Il a été aussitôt appréhendé et conduit au poste de police, où les autorités ont constaté qu'il était atteint d'aliénation mentale."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Faits Divers",
    "title": "Accident de tramway à Bruxelles",
    "summary": "À Uccle, une collision entre un tombereau et un tram électrique a fait une dizaine de blessés, dont un grièvement atteint au crâne, après que le cheval a pris le mors aux dents.",
    "paragraphs": [
      "Un tombereau a percuté violemment un tram électrique à Uccle. Le cheval, ayant pris le mors aux dents, a brisé les montants de la voiture et déséquilibré le convoi. Une dizaine de voyageurs ont été blessés, dont l'un demeure grièvement atteint au crâne."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Faits Divers",
    "title": "Une meurtrière de quinze ans à Agen",
    "summary": "Agnès Carretey, une jeune fille de quinze ans, a abattu d'un coup de fusil son ancien fiancé, Jean Rigaut, après une rupture. La meurtrière s'est rendue aux autorités avec son père.",
    "paragraphs": [
      "Jean Rigaut, cultivateur de trente-quatre ans, a été tué d'un coup de fusil tiré par Agnès Carretey, une jeune fille de quinze ans avec laquelle il avait récemment rompu ses fiançailles.",
      "La jeune meurtrière, qui s'était embusquée dans le grenier pour attendre le cultivateur, s'est rendue aux autorités en compagnie de son père immédiatement après avoir commis son crime."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Faits Divers",
    "title": "Incendie d'une verrerie à Bordeaux",
    "summary": "Un violent incendie a ravagé la verrerie du Hautoir à Bordeaux, détruisant quatre cent mille bouteilles. Ce sinistre laisse deux cent cinquante ouvriers sans emploi.",
    "paragraphs": [
      "Un incendie a détruit cette nuit une grande partie de la verrerie du Hautoir. Malgré les efforts acharnés des pompiers, le hangar renfermant quatre cent mille bouteilles a été entièrement anéanti.",
      "Deux cent cinquante ouvriers se retrouvent désormais sans travail suite à ce sinistre. Les dégâts matériels, heureusement, sont couverts par des assurances."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Justice",
    "title": "Les amours d'un frotteur",
    "summary": "Félix Malassis a été condamné à dix ans de travaux forcés pour tentative de meurtre sur la personne de Mme Godeau, marchande de journaux, par vengeance contre une femme ayant fait obstacle à son union.",
    "paragraphs": [
      "Félix Malassis a été condamné à dix ans de travaux forcés par la Cour pour avoir tenté de donner la mort à Mme Godeau, marchande de journaux, par un ressentiment féroce contre une autre femme qui avait fait obstacle à ses noces."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Faits Divers",
    "title": "Idylle tragique",
    "summary": "Deux jeunes amants, Eugénie Marchai et Aimé Fischer, ont été retrouvés sans vie dans la Seine, enlacés et liés par une ceinture, après avoir scellé leur destin dans un suicide commun.",
    "paragraphs": [
      "Deux cadavres enlacés, Eugénie Marchai, âgée de seize ans, et Aimé Fischer, âgé de quatorze ans, ont été retirés des eaux de la Seine, à proximité du pont d'Austerlitz. Les infortunés étaient attachés ensemble par une ceinture de cuir.",
      "Ils ont laissé une missive poignante expliquant leur détermination à mettre fin à leurs jours, invoquant le malheur de leur situation familiale respective et l'impossibilité de vivre leur amour au grand jour."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Enquête sur la mort de Mme Goulier",
    "summary": "Le décès de Mme Goulier soulève des interrogations. Entre les témoignages sur son alcoolisme chronique et les aveux de violence de son mari, une autopsie devra déterminer la cause réelle de sa mort.",
    "paragraphs": [
      "Des témoins ont affirmé à M. le commissaire que Mme Goulier s'adonnait à des excès d'absinthe, consacrant à ce funeste penchant la totalité des ressources que son mari lui remettait pour les besoins du ménage.",
      "M. Goulier a reconnu, toutefois, que voyant fréquemment son épouse en état d'ivresse, il s'était laissé aller à lui porter des coups, agissant sous le coup de l'exaspération. Selon lui, l'abus prolongé de l'alcool aurait précipité la fin de la malheureuse.",
      "Au regard de ces déclarations contradictoires, M. le commissaire a ordonné le transfert du corps à la morgue, où une autopsie, pratiquée par un médecin légiste, devra établir les causes précises du décès."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Administration",
    "title": "Mouvements dans les Commissariats",
    "summary": "Plusieurs nominations et permutations sont actées au sein des commissariats parisiens, notamment pour MM. Gilibert-Gueau, Micheau, Moutillier, Hemont-Sin et Bleyais dans leurs nouvelles fonctions.",
    "paragraphs": [
      "M. Gilibert-Gueau, officier de paix du dix-septième arrondissement, est nommé commissaire et affecté au quartier de la Roquette.",
      "M. Micheau, du quartier Saint-Victor, est muté au quartier de la Plaine-Monceau et permute avec M. Moutillier.",
      "M. Hemont-Sin, inspecteur, est nommé officier de paix du dix-septième arrondissement, tandis que M. Bleyais, secrétaire de commissariat, est promu au rang d'inspecteur des gardiens de la paix."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Actualités",
    "title": "Retraite aux flambeaux au dixième arrondissement",
    "summary": "Hier soir, l'Harmonie du dixième arrondissement a organisé une brillante retraite aux flambeaux pour annoncer avec faste le prochain grand concours musical des 3 et 4 juin.",
    "paragraphs": [
      "Les organisateurs et les délégués du grand concours de musique du dixième arrondissement ont orchestré, hier soir, une brillante retraite aux flambeaux afin de proclamer l'ouverture prochaine de la fête musicale des 3 et 4 juin. Cette manifestation, portée par le talent de l'Harmonie du dixième arrondissement, a rencontré un succès éclatant."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Exposition Universelle",
    "title": "Le Grand Globe Céleste",
    "summary": "Inauguré ce samedi, le Grand Globe Céleste s'impose comme une attraction majeure et originale de l'Exposition Universelle, grâce à son emplacement privilégié et la singularité de son mécanisme.",
    "paragraphs": [
      "Enfin, la curiosité du public va être satisfaite. Le Grand Globe Céleste sera inauguré samedi prochain et, certainement, dès le premier jour, les visiteurs iront en nombre l'admirer.",
      "Par sa structure, sa situation entre la Seine et la gare du Champ-de-Mars et l'intérêt de son mécanisme, il se placera d'emblée au premier rang des attractions les plus courues et les plus originales de l'Exposition."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Exposition Universelle",
    "title": "Le Panorama Marchand au Trocadéro",
    "summary": "Le panorama peint par Castellani au Trocadéro offre une représentation saisissante et historiquement fidèle de la mission Marchand, alliant valeur documentaire et véritable prouesse artistique.",
    "paragraphs": [
      "Il n'est pas de spectacle plus intéressant et plus curieux que les superbes toiles du peintre Castellani qui constituent le Panorama Marchand, au Trocadéro. Ce n'est pas seulement, en effet, l'histoire fidèle de la célèbre et glorieuse mission dans toute sa saisissante réalité, c'est également une œuvre d'un haut intérêt artistique et le public ne se lasse pas de l'admirer."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Exposition Universelle",
    "title": "La Grande Roue",
    "summary": "Véritable prouesse technique, la Grande Roue de l'Exposition se distingue par sa sécurité et son accessibilité, offrant désormais dix attractions gratuites pour le prix d'un seul billet d'entrée.",
    "paragraphs": [
      "De toutes les merveilles de l'Exposition, la Grande Roue est la conception la plus hardie, la plus gigantesque, mais aussi la plus sûre. Chose curieuse, elle est pour le public la moins coûteuse. La Grande Roue offre désormais, pour le simple prix d'entrée, dix attractions ou spectacles absolument gratuits ; on peut s'y distraire toute une après-midi, toute une soirée."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Exposition Universelle",
    "title": "Le Martyre des chrétiens au palais de Néron",
    "summary": "Installée au Palais de Glace, l'œuvre monumentale du peintre Jan Styka illustre avec un pathétique saisissant les épisodes tragiques du martyre des premiers chrétiens sous le règne de Néron.",
    "paragraphs": [
      "En plein Paris, dans l'avenue des Champs-Élysées, à l'entrée de l'Exposition, un artiste de grand talent ressuscite l'un des épisodes les plus sublimes de l'histoire de l'humanité : le Martyre des chrétiens au palais de Néron.",
      "Dans l'œuvre du peintre polonais Jan Styka, toute une série de scènes où le pathétique le dispute au pittoresque. Ici, c'est saint Pierre que des soldats romains traînent au supplice ; là, ce sont des vierges, des épouses, des mères que l'on a dévêtues avant de les crucifier. C'est dans le magnifique hall du Palais de Glace que cette gigantesque composition a été somptueusement installée."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Accidents et faits divers",
    "summary": "Chronique des accidents en banlieue parisienne : une jeune fille brûlée à Clichy, un employé blessé par arme à feu à Bois-Colombes, et un incendie de restaurant déclaré à Maisons-Laffitte.",
    "paragraphs": [
      "Clichy : Mathilde Rolland, une jeune bonne de dix-sept ans, a été horriblement brûlée hier soir alors qu'elle allumait sa lampe, après avoir jeté une allumette sur le parquet. Elle a été conduite à l'hôpital Beaujon.",
      "Bois-Colombes : Léon Cousteaux, employé de banque âgé de dix-huit ans, s'est grièvement blessé au bas-ventre hier en maniant un revolver de fort calibre.",
      "Maisons-Laffitte : Un incendie accidentel a éclaté hier matin dans le restaurant tenu par M. Henri Glonec, rue du Mesnil. Les dégâts sont évalués à 3 000 francs."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Cambriolages à Vaux et à Dézy",
    "summary": "Vague de cambriolages à Vaux et Dézy : plusieurs demeures privées ont été dévalisées. Bijoux, objets d'art et linge ont été emportés par des malfaiteurs. La gendarmerie mène l'enquête.",
    "paragraphs": [
      "À Vaux, des malfaiteurs ont fracturé et fouillé la demeure de Mme veuve Le Roux, ainsi que celle de M. Guespin, profitant de leur absence.",
      "À Dézy, des cambrioleurs ont pénétré chez M. Lucien Mouquet et ont dérobé des montres, des bijoux, des objets d'art et du linge pour une valeur importante. La gendarmerie ne dispose pour l'instant d'aucun indice."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Faits Divers",
    "title": "Rixe sanglante à Aulnay-sous-Bois",
    "summary": "Une violente rixe nocturne a opposé des ouvriers agricoles et des soldats à Aulnay-sous-Bois. Le conflit, débuté par des injures, a dégénéré en échanges de coups de feu et de couteau. Plusieurs blessés sont dénombrés.",
    "paragraphs": [
      "La nuit dernière, à la sortie d'un café à Aulnay-sous-Bois, une rixe sanglante a éclaté entre des ouvriers agricoles et des soldats. Un individu d'origine belge a injurié le nommé Auguste Liris, soldat de l'artillerie de marine, déclenchant une mêlée générale au cours de laquelle des coups de feu et de couteau ont été échangés.",
      "Plusieurs blessés sont à déplorer, dont Henri Vander Straeten, dont l'état est jugé grave. Une enquête est ouverte."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Feuilleton",
    "title": "Mariage Secret",
    "summary": "Le docteur Lecoutellier sollicite l'aide de la préfecture de police pour récupérer une pièce officielle dérobée, prouvant le mariage secret de Mme Castéras et liée à une affaire de chantage.",
    "paragraphs": [
      "Cependant il s'était arrêté dans la pièce d'attente où se tenait son vieux secrétaire. « Si on vient me demander, ou bien le jeune homme ou bien la jeune fille que j'avais nier, vous les reconnaîtrez, n'est-ce pas ? » « Oui, parfaitement, monsieur le docteur. » « Dites-leur que je leur donne rendez-vous chez moi, dans la soirée. »",
      "Claude arriva boulevard du Palais. Il entra sous une porte monumentale qu'il connaissait bien, il prit un escalier à droite et, arrivé au second étage, « M. le secrétaire général ? » demanda-t-il à un huissier. Il était dans l'antichambre de la préfecture de police. « M. le secrétaire général ne reçoit pas à cette heure. » « Veuillez lui faire passer ma carte. » Presque aussitôt l'huissier reparaissait : « Si monsieur le docteur Lecoutellier veut prendre la peine d'entrer. »",
      "Le secrétaire général, un gentleman aux façons les plus courtoises, se levait déjà de son bureau. « Pour vous, monsieur le docteur, on y est toujours. Est-ce encore pour vos protégées que vous me faites le plaisir de votre visite ? » « Oui et non. » « Oh, que leur arrive-t-il ? » « À elles, pour le moment, rien. Mais, à cause d'elles, je suis bien embarrassé. »",
      "« Parce que j'ai affaire à un coquin qui leur a volé leur coffre-fort. » « Je sais. » « Non, le coffre-fort, nous y reviendrons tout à l'heure. Je viens vous parler d'autre chose qui leur a été volé, il y a dix-sept ans. » « Alors c'est prescrit, mon cher docteur. Il n'y a plus que l'action civile. »",
      "« Il a volé à celle que vous connaissez sous le nom de madame Castéras, et qui, en réalité, se nomme... » « Je me rappelle, elle se prétend mariée à l'étranger avec feu M. d'Aspremont. » « Elle l'est, mon cher monsieur. Seulement, vous n'en apportez que l'affirmation. L'acte de mariage, par exemple, n'est-ce pas ? » « C'est justement ce que cet homme a volé. »",
      "« Que diable voulait-il en faire ? » « Le vendre. À elle ? Elle n'aurait pas été assez riche pour le payer. Alors il a essayé une combinaison assez ténébreuse qui a échoué d'ailleurs grâce à moi, et il est allé offrir sa marchandise à un autre. Au baron de Lorgerac, parbleu ! M. de Lorgerac, convaincu maintenant de la réalité du mariage de madame Castéras avec son cousin d'Aspremont, n'a plus qu'un désir : celui de faire restituer cette pièce officielle à celle qui est bien vraiment sa cousine. »",
      "« Ah ! voilà, l'autre demande de son papier une somme énorme, folle, des millions. Et nous voudrions avoir cela sans bourse délier. Si l'autre ne veut pas restituer de bonne volonté, je me demande comment on pourra l'y obliger. Je vous ai dit : il est couvert par la prescription. »",
      "« Voici : cet homme a pris rendez-vous avec M. de Lorgerac pour échanger contre une somme, qu'on ne veut ni qu'on ne peut lui donner, la pièce dont je vous parle, plus une lettre autrefois écrite par M. de Lorgerac lui-même. Une lettre intime qui a trait à ces événements, que cet homme a volée aussi et que le baron désire ravoir. »",
      "« L'homme s'appelle Delorme. C'est lui qui a cambriolé, il y a trois mois à peine, le coffre-fort de madame Castéras avec trente mille francs dedans. Bizarre. Comment établissez-vous sa culpabilité ? » « J'en ai eu l'aveu par le complice qui l'a aidé. » « Et ce complice ? » « Je ne vous le livre pas. Je l'ai fait expatrier. Il est en route pour l'autre bout du monde. »"
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Chemin de Fer",
    "title": "Chemin de fer du Nord, Fêtes de la Pentecôte",
    "summary": "Le Chemin de fer du Nord organise des voyages à prix réduits vers Bruxelles pour la Pentecôte. Détails des horaires de départ et de retour, ainsi que les tarifs des classes pour les billets aller-retour.",
    "paragraphs": [
      "Quatre jours à Bruxelles. Train de plaisir express à prix très réduits de Paris à Bruxelles et retour. Départ de Paris dans la nuit du 2 au 3 juin à minuit 10 ; arrivée à Bruxelles le 3 à 6 h 27 du matin. Départ de Bruxelles le 6 juin à 9 h 58 du soir, arrivée à Paris le 7 à 6 h 50 du matin. Prix des billets (aller et retour) : 2e classe, 18 fr. 35 ; 3e classe, 14 fr. 75. Nota : Il ne sera pas admis de bagages à l'enregistrement."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Bulletin Commercial",
    "title": "Bulletin Commercial du mercredi 30 mai",
    "summary": "Compte-rendu du marché des céréales : les cours des blés demeurent fermes malgré la résistance de la minoterie. Les prix des issues restent stables.",
    "paragraphs": [
      "Blés : Par suite de la hausse du marché de Paris et des nouvelles de la récolte, les prix s'étaient fermement tenus, mais la minoterie n'était pas disposée à accorder le surplus ; les affaires, par suite, ont été difficiles. Les détenteurs ont maintenu leurs prix et le blé blanc valait de 20 fr. à 21 fr. et les roux de 19 à 20 fr. les 100 kilos, gare Paris, ou dans les usines.",
      "Issues : On cote le gros son de 13 fr. à 13 fr. 50, les recoupettes de 12 fr. à 12 fr. 50 les 100 kilos, gare Paris."
    ]
  }
];
