// Date: 1901-01-20
// Restauration Pass: 2
// Base de données complète des articles de presse du 1901-01-20 (Version Restaurée, 42 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Économie",
    "title": "Le charbon et la vitesse",
    "summary": "Au Palais-Bourbon, la hausse du prix du charbon inquiète. L'abus de vitesse dans les marines de guerre et de commerce engendre un gaspillage colossal de combustible, posant un défi majeur pour l'avenir des approvisionnements.",
    "paragraphs": [
      "Le ministre du Commerce a été interrogé au Palais-Bourbon sur la majoration des transports postaux entre la France et l'Algérie. Cette question a fait apparaître devant la Chambre les préoccupations que cause le renchérissement du prix du charbon, envisagé au point de vue de l'avenir plus encore que du présent.",
      "Il semble que cette force ne soit pas suffisamment ménagée et que, pour des résultats secondaires, on brûle des quantités de charbon qui ne sont nullement en rapport avec les effets produits. C'est surtout sur mer que cet abus peut être constaté. Pour augmenter la vitesse des navires, les marines de guerre et de commerce se livrent à de véritables débauches de combustible.",
      "Au-delà d'une vitesse de 14 nœuds à l'heure, on ne peut plus dire que l'on travaille et navigue d'une façon rémunératrice et productive. La question du combustible est plus grave encore pour les flottes militaires ; car elles ont à envisager la difficulté de renouveler leurs approvisionnements, le charbon étant considéré comme de la contrebande de guerre.",
      "Un grand problème est à résoudre, au point de vue de l'utilisation du charbon dans la marine. En ce moment, les arbres de couche des hélices recueillent environ le dixième de la puissance donnée aux machines par le combustible. Que de trésors d'énergie, accumulés par les siècles, et s'en allant en fumée."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Les Sans Famille - Deuxième Partie",
    "summary": "Le mystérieux M. Turner, au comportement étrange, tente de soudoyer un employé par une somme importante afin d'obtenir des informations sur une sage-femme, laissant l'ancien professeur dans un trouble profond.",
    "paragraphs": [
      "Le vieil employé rabaissa ses lunettes sur ses yeux et examina curieusement la face de cet homme au visage glabre comme celui d'un curé, au chapeau à larges bords, qui parlait si aisément de donner des dix et des vingt mille francs, rien que pour connaître le nom d'une sage-femme.",
      "Le révérend M. Turner prit un billet de cinq cents francs en disant : « Je vous prie de l'accepter pour votre complaisance. Vous me ferez plaisir. » — « C'est trop, c'est beaucoup trop. » — « Acceptez, je vous en serai obligé. »",
      "L'Anglais s'était déjà engagé dans le corridor au fond duquel il disparut. L'ancien professeur, en se promenant dans la rue, se demanda s'il rêvait. N'était-il pas le jouet d'une hallucination ?"
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Actualité Internationale",
    "title": "Maladie de la reine Victoria",
    "summary": "L'état de santé de la reine Victoria suscite une vive inquiétude en Europe. Tandis que la famille royale converge vers le château d'Osborne, l'empereur d'Allemagne a quitté Berlin pour se rendre à son chevet.",
    "paragraphs": [
      "Les nouvelles de la santé de la reine Victoria, publiées dans la journée d'hier, sont fort graves. La famille royale se rend en toute hâte au chevet de la malade, et l'empereur d'Allemagne lui-même a quitté Berlin hier soir pour se rendre au château d'Osborne.",
      "Le Liverpool Post annonce aujourd'hui de nouveau que la reine a perdu la vue. Le Manchester Guardian dit que la reine a eu une légère attaque de paralysie pendant la semaine de Noël.",
      "L'empereur vient de partir pour Londres de la gare de Potsdam, en compagnie du duc de Connaught. On télégraphie de Londres que les nouvelles concernant l'état de santé de la reine Victoria sont très inquiétantes."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Faits Divers",
    "title": "Attentat contre M. Emile Deschanel",
    "summary": "Une tentative d'assassinat contre M. Emile Deschanel au Collège de France a été déjouée hier. Une femme, en se jetant entre le professeur et l'assaillante, a reçu la balle destinée à l'homme de lettres.",
    "paragraphs": [
      "L'incartade d'une jeune fille inconsciente a mis, hier après-midi, tout Paris en émoi. Obéissant à une funeste impulsion, cette femme a tenté d'assassiner M. Emile Deschanel, sénateur et professeur au Collège de France, père du président actuel de la Chambre des députés.",
      "Soudain, avec bruit, une jeune femme entra dans la salle du cours. Elle vint jusqu'à la chaire, examina presque effrontément le visage de M. Emile Deschanel, puis sortit.",
      "Tout à coup, on entendit un cri d'effroi. La farouche visiteuse venait de brandir un revolver et le bruit sec d'une détonation avait retenti. En même temps, on aperçut, entre le professeur et la meurtrière, un corps de femme qui s'effondrait comme une masse.",
      "La victime avait sauvé la vie de M. Emile Deschanel en se jetant entre lui et la meurtrière. La balle de Vera Gelo avait atteint son amie au côté droit de la poitrine, perforant dangereusement le poumon."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Crime et suicide à Pantin",
    "summary": "Un drame passionnel a endeuillé Pantin. Après avoir laissé une lettre testamentaire annonçant leur dégoût de la vie, un homme a abattu sa maîtresse avant de mettre fin à ses jours avec la même arme.",
    "paragraphs": [
      "M. Gerain, demeurant rue du Débarcadère, à Pantin, recevait hier matin une lettre de son fils qui était ainsi libellée : « Mon cher père, quand tu liras cette lettre, j'aurai cessé de vivre. Ma maîtresse, Maria Hevier, et moi étions tellement dégoûtés de la vie que nous avons résolu de mourir ensemble. »",
      "Le corps de la demoiselle Maria Hevier était étendu sur le lit, la tête reposant sur un oreiller taché de sang. La malheureuse avait la tête fracassée par une balle. Léon Gerain était accroupi sur le parquet. Il tenait dans sa main droite crispée le revolver avec lequel il s'était fait sauter la cervelle."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Actualité Industrielle",
    "title": "Incendie aux mines d'Aniche",
    "summary": "Un grave incendie, causé par la chute accidentelle d'une lampe, a entièrement ravagé les installations de triage et de moulinage de la Compagnie des mines d'Aniche situées à Waziers.",
    "paragraphs": [
      "La Compagnie des mines d'Aniche a été éprouvée par la catastrophe d'un incendie qui a détruit une installation construite en 1875 sur le territoire de Waziers, à deux kilomètres de Douai.",
      "Une ouvrière, occupée à trier du charbon, laissa tomber une lampe sur un bidon de pétrole en vidange dans la salle du triage. En un clin d'œil, cette salle et le moulinage y attenant furent en proie aux flammes, ainsi que la cage du puits.",
      "Lorsque les secours arrivèrent, le triage et le moulinage ne formaient plus qu'un ardent brasier. Au cours du sinistre, un ouvrier mineur, dont on ignore le nom, a été blessé dans le dos par la chute d'une poutrelle."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Nécrologie",
    "title": "Mort du Duc de Broglie",
    "summary": "Le duc de Broglie, figure éminente de la politique conservatrice et adversaire notoire de la République, est décédé hier soir à Paris à l'âge de soixante-dix-huit ans.",
    "paragraphs": [
      "Le duc de Broglie est mort hier soir, à Paris, à neuf heures et quart, à l'âge de soixante-dix-huit ans. Avec lui disparaît l'une des figures les plus marquantes de la politique contemporaine.",
      "Il avait été le brillant porte-parole d'un grand monarque ; il ne fut du maréchal de Mac-Mahon qu'un ministre malheureux malgré sa perspicacité. La République eut en lui un redoutable adversaire."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Politique",
    "title": "La carrière politique du Duc de Broglie",
    "summary": "Acteur central de la crise du 16 mai, le duc de Broglie, ancien président du Conseil, s'était retiré de la vie politique pour se consacrer à ses travaux historiques après une carrière marquée par de nombreuses défaites.",
    "paragraphs": [
      "Le duc de Broglie, après avoir siégé à l'Assemblée nationale, a joué un rôle politique majeur, notamment lors du 16 mai et de la chute de M. Thiers, devenant président du Conseil et ministre des Affaires étrangères.",
      "Malgré son éloquence, le duc était davantage reconnu pour ses travaux historiques et ses écrits impeccables. Il a fini par se retirer de la vie publique, terrain sur lequel il a essuyé de cuisantes défaites, pour se consacrer à ses études sur Frédéric II et d'autres sujets historiques."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Actualité Militaire",
    "title": "Le programme des manœuvres d'automne",
    "summary": "Le ministre de la Guerre, M. le général André, a fixé le programme des grandes manœuvres d'automne. Celles-ci seront dirigées par le général Brugère et se déploieront sur plusieurs régions stratégiques du territoire.",
    "paragraphs": [
      "Le ministre de la Guerre a arrêté le programme des manœuvres d'automne, qui comprendront deux manœuvres d'armées dirigées par le général Brugère, vice-président du Conseil supérieur de la Guerre.",
      "La première armée évoluera dans la région de l'Est et la seconde dans la région de l'Ouest. Les instructions prévoient également des manœuvres de divisions de cavalerie ainsi que des exercices en pays de montagne dans les Alpes et les Vosges.",
      "Le général André a ordonné que les régiments de cuirassiers ne fournissent aucune escorte, afin de se concentrer exclusivement sur leur rôle en temps de guerre."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Social",
    "title": "Déménagement au ministère de la Guerre",
    "summary": "Dans le cadre d'une réorganisation administrative, la direction des troupes coloniales quitte les locaux du ministère de la Marine pour rejoindre ceux du ministère de la Guerre, rue Saint-Dominique.",
    "paragraphs": [
      "La direction des troupes coloniales, qui était installée dans les locaux du ministère de la Marine depuis le 1er janvier, déménage vers le ministère de la Guerre, rue Saint-Dominique."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Faits Divers",
    "title": "Cérémonie patriotique à Saint-Cloud",
    "summary": "Malgré une pluie persistante, les élus et les sapeurs-pompiers de Saint-Cloud ont rendu un hommage solennel aux disparus de la bataille de Montretout en déposant des couronnes au monument commémoratif.",
    "paragraphs": [
      "La cérémonie commémorative de la bataille de Montretout a eu lieu hier, malgré la pluie persistante. Le conseil municipal de Saint-Cloud, accompagné par des représentants des sapeurs-pompiers, a procédé au dépôt de couronnes au pied du monument commémoratif."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Faits Divers",
    "title": "Enquêtes et expériences navales",
    "summary": "L'Amirauté britannique étudie l'influence des quilles de roulis sur ses torpilleurs, tandis qu'à Brest, l'amiral Bienaimé supervise les progrès de la télégraphie sans fil sur le cuirassé Henri IV.",
    "paragraphs": [
      "Des expériences cruciales sont actuellement menées à Portsmouth par l'Amirauté britannique, visant à étudier l'influence déterminante des quilles de roulis sur la vitesse et la manœuvrabilité des torpilleurs.",
      "À Brest, l'amiral Bienaimé a assisté personnellement à des tests de télégraphie sans fil effectués sur le cuirassé Henri IV. Par ailleurs, on signale à Bizerte qu'une rupture de tube de chaudière a causé de graves blessures à bord du torpilleur Turco."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "Situation au Transvaal et au Cap",
    "summary": "Les tensions politiques s'intensifient au Parlement du Cap, tandis que les mouvements militaires se poursuivent : les forces du général Botha se concentrent entre Pretoria et Middelburg.",
    "paragraphs": [
      "Des tensions politiques vives agitent le Parlement du Cap au sujet des nouveaux crédits militaires. Parallèlement, les opérations sur le terrain se poursuivent sans répit, les forces du général Botha étant désormais concentrées dans la région située entre Pretoria et Middelburg.",
      "La colonne Methuen a quitté Vryburg afin d'entamer de nouvelles manœuvres, tandis que le général Tucker a été officiellement nommé commandant de la place de Bloemfontein."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Faits Divers",
    "title": "Incendie dans une meunerie à Bruxelles",
    "summary": "Un terrible incendie a ravagé la meunerie Van Manderen à Bruxelles. La violence des flammes a contraint l'armée à prêter main-forte aux pompiers. Les dégâts sont estimés à près d'un million de francs.",
    "paragraphs": [
      "Un violent incendie a totalement détruit la meunerie Van Manderen à Bruxelles. La violence exceptionnelle du sinistre a nécessité l'intervention de l'armée en renfort des secours. Le montant des dégâts est estimé à près d'un million de francs."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Faits Divers",
    "title": "Accident maritime à Ostende",
    "summary": "La malle Princesse-Clémentine s'est échouée près d'Ostende à cause d'un épais brouillard. Grâce à l'intervention rapide des secours, l'ensemble des passagers et de l'équipage a pu être sauvé.",
    "paragraphs": [
      "La malle Princesse-Clémentine s'est échouée aux abords d'Ostende, le navire ayant été pris dans un épais brouillard. Fort heureusement, l'ensemble des passagers et de l'équipage sont sains et saufs grâce à une intervention rapide des secours maritimes."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Faits Divers",
    "title": "Sauvetage périlleux à Schaerbeek",
    "summary": "À Schaerbeek, deux enfants ont été arrachés aux eaux glacées d'un étang grâce à l'héroïsme de M. Jean Knaepen, qui a dû être secouru à son tour après avoir épuisé toutes ses forces.",
    "paragraphs": [
      "Un accident d'une effrayante gravité a failli endeuiller la commune de Schaerbeek. Deux enfants, en jouant imprudemment sur la glace d'un étang, ont brusquement sombré dans les eaux glaciales.",
      "Un passant, M. Jean Knaepen, témoin de la scène, s'est précipité sans hésiter pour porter secours aux malheureux. Après des efforts surhumains, il parvint à les extraire de leur périlleuse situation, non sans avoir épuisé ses propres forces au point de nécessiter lui-même l'assistance urgente d'un garde champêtre accouru sur les lieux."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Faits Divers",
    "title": "Drame de la vendetta en Corse",
    "summary": "Le meurtre de Jean Alerini à San-Giuliano est l'épilogue sanglant d'une vendetta tenace. Les autorités traquent activement le bandit Ferrali et ses complices en fuite.",
    "paragraphs": [
      "Le sang a coulé à San-Giuliano. Le meurtre de Jean Alerini est désormais considéré par les autorités comme l'épilogue tragique d'une vendetta tenace, trouvant ses racines dans un procès antérieur.",
      "Les auteurs de ce forfait, au nombre desquels figure le tristement célèbre bandit Ferrali, ont pris la fuite. La gendarmerie a immédiatement engagé des recherches actives pour appréhender ces individus dangereux et rétablir l'ordre dans la contrée."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Faits Divers",
    "title": "Cas d'asphyxie à Pringy",
    "summary": "Une famille de Pringy a échappé de justesse à la mort après une asphyxie collective causée par les émanations nocives d'un four de boulangerie mitoyen.",
    "paragraphs": [
      "Un drame familial a été évité de peu à Pringy. Cinq personnes ont été retrouvées en proie à une asphyxie sévère dans leur domicile.",
      "L'enquête a rapidement établi que l'intoxication provenait d'émanations d'oxyde de carbone s'échappant du four d'une boulangerie mitoyenne. La communication défectueuse entre l'atelier et les pièces d'habitation a failli transformer cette demeure en tombeau pour toute la famille."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Faits Divers",
    "title": "Crime odieux à Saint-Symphorien",
    "summary": "La veuve Jacob, octogénaire, a été retrouvée assassinée et bâillonnée dans un champ. L'enquête privilégie la piste d'un crime crapuleux commis pour le vol.",
    "paragraphs": [
      "La localité de Saint-Symphorien est sous le choc après la découverte macabre du corps de la veuve Jacob. Cette dame, âgée de quatre-vingts ans, a été retrouvée étendue dans un champ, le visage marqué par les traces d'un bâillonnement cruel.",
      "Tout porte à croire qu'il s'agit d'un crime crapuleux. Les premiers éléments recueillis par les enquêteurs suggèrent que l'agression avait pour but unique le vol, l'infortunée femme ayant été dépouillée après sa mort violente."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Faits Divers",
    "title": "L'énigme du cadavre en morceaux",
    "summary": "L'enquête sur le cadavre découvert à Paris avance : une famille d'Angoulême a identifié son fils disparu, Gaston Brive, sur photographie, permettant une avancée capitale pour les autorités.",
    "paragraphs": [
      "L'identification du cadavre en morceaux, dont la macabre découverte avait jeté l'effroi sur la capitale, semble enfin toucher à son terme. Une famille d'Angoulême, alertée par la presse, a pris contact avec les autorités.",
      "Après avoir examiné une photographie des restes retrouvés, les parents ont reconnu avec une douleur poignante leur fils, Gaston Brive, dont la disparition demeurait jusqu'ici inexpliquée. Les investigations se poursuivent désormais pour retracer les dernières heures de la victime."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Faits Divers",
    "title": "Meurtre à Vitré",
    "summary": "Un drame conjugal a ensanglanté la cité de Vitré : un époux, sous l'emprise de l'alcool, a étranglé sa femme avant de se rendre aux autorités pour confesser son crime.",
    "paragraphs": [
      "Un drame atroce vient de se dérouler à Vitré. Dans un accès de fureur alcoolique, un individu a étranglé son épouse, mettant fin à ses jours avec une brutalité sauvage.",
      "Après avoir commis cet acte irrémédiable, le meurtrier, saisi soudain par le remords ou conscient de l'inutilité de sa fuite, s'est présenté de lui-même à la gendarmerie locale afin d'avouer son crime et de se constituer prisonnier."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Faits Divers",
    "title": "Drame familial à Saint-Maur",
    "summary": "À Saint-Maur, une mère en proie à une profonde mélancolie a tenté de noyer ses trois enfants dans la Marne avant de tenter de se suicider. Un seul enfant a pu être sauvé par miracle.",
    "paragraphs": [
      "Un drame épouvantable vient d'endeuiller la commune de Saint-Maur. Mme Verner, dont l'esprit semblait depuis quelque temps assombri par une mélancolie profonde, a commis l'irréparable.",
      "Après avoir entraîné ses trois enfants vers les rives de la Marne, la malheureuse a tenté de les précipiter dans les eaux froides du fleuve, avant de s'y jeter elle-même pour mettre fin à ses jours.",
      "Par un miracle de l'instinct de conservation, l'un des enfants a réussi à se cramponner à une branche surplombant la berge, échappant ainsi à une mort certaine. Les secours, alertés, ont repêché le petit survivant, mais les recherches se poursuivent activement, bien que sans espoir, pour retrouver les corps des deux autres infortunés."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Faits Divers",
    "title": "Vols à la gare de Vaugirard",
    "summary": "La police a démantelé un réseau de voleurs opérant à la gare de Vaugirard. Des employés véreux dérobaient les marchandises et brûlaient les emballages dans les foyers des locomotives pour effacer leurs traces.",
    "paragraphs": [
      "Un réseau de voleurs opérant à la gare de Vaugirard, composé de plusieurs employés de la compagnie, vient d'être démantelé par la police. Ces individus s'adonnaient à un trafic systématique des marchandises dont ils avaient la charge.",
      "Leur méthode était singulièrement ingénieuse : afin de dissimuler leurs forfaits et de faire disparaître toute preuve compromettante, ils faisaient brûler les emballages des colis dérobés directement dans les foyers des locomotives stationnées au dépôt."
    ]
  },
  {
    "id": 24,
    "page": 2,
    "category": "Actualité Parisienne",
    "title": "Faits divers à Paris",
    "summary": "La chronique judiciaire parisienne est marquée par plusieurs incidents : accident de la voie publique aux Halles, malversations d'un concierge, tentative de suicide et une macabre découverte à Notre-Dame.",
    "paragraphs": [
      "La journée fut marquée par divers incidents qui ont mobilisé les autorités. Dans le quartier des Halles, un cheval de laitier, pris d'un accès de terreur, a défoncé la devanture d'une teinturerie, occasionnant des dégâts matériels considérables sans toutefois faire de victimes parmi les passants.",
      "Plus sombre est l'affaire survenue rue de Rivoli, où un concierge indélicat a été arrêté par les agents de la paix ; il lui est reproché d'avoir détourné à son profit les loyers des locataires de l'immeuble dont il avait la garde.",
      "Un ouvrier, en proie au désespoir, a tenté de mettre fin à ses jours en absorbant de l'ammoniaque dans un atelier du faubourg Saint-Antoine. Transporté d'urgence à l'hôpital, son état demeure des plus préoccupants.",
      "Enfin, le corps d'un nouveau-né a été découvert ce matin, dissimulé dans une nef latérale de la cathédrale Notre-Dame, plongeant les fidèles dans une vive émotion. Une enquête a été immédiatement ouverte pour identifier les auteurs de cet abandon."
    ]
  },
  {
    "id": 25,
    "page": 2,
    "category": "Autour de Paris",
    "title": "Faits divers dans les communes limitrophes",
    "summary": "Une série de tragédies frappe la banlieue : un accident mortel à Clichy, deux suicides aux Lilas et à Bécon-les-Bruyères, et le sauvetage miraculeux d'un nourrisson abandonné à Fontenay-sous-Bois.",
    "paragraphs": [
      "À Clichy, une fillette a été tragiquement écrasée par une tapissière. Les secours n'ont pu que constater le décès de l'enfant, renversée sur la voie publique.",
      "À Bécon-les-Bruyères ainsi qu'aux Lilas-Saint-Gervais, deux cas de suicides par arme à feu ont été signalés aux autorités locales dans la même journée, plongeant ces communes dans une profonde émotion.",
      "Enfin, à Fontenay-sous-Bois, un bébé abandonné dans un état de dénuement complet a été découvert par un chien de Terre-Neuve. L'animal, par ses aboiements incessants, a permis de sauver le nouveau-né."
    ]
  },
  {
    "id": 26,
    "page": 2,
    "category": "Faits Divers",
    "title": "Accusations de meurtre à Maël-Pestivien",
    "summary": "L'arrestation de Pierre Thomas pour le meurtre d'une voisine à Maël-Pestivien soulève une vive controverse. Tandis que l'inculpé a avoué, l'opinion publique s'interroge sur la solidité réelle des preuves à charge.",
    "paragraphs": [
      "L'opinion publique est vivement divisée concernant l'arrestation de Pierre Thomas pour le meurtre d'une voisine. Les preuves recueillies sont jugées insuffisantes par certains observateurs, malgré les aveux initiaux formulés par l'inculpé lors de son interpellation."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Courrier des Théâtres",
    "title": "Visite des Écoles Polytechnique et de Saint-Cyr à l'Ambigu",
    "summary": "Par autorisation du ministre de la Guerre, les élèves de Polytechnique et de Saint-Cyr assisteront, ce soir, à la 42e représentation de « L'Autre France » de MM. Decourcelle et Hugues Le Roux, à l'Ambigu.",
    "paragraphs": [
      "C'est ce soir que, par autorisation spéciale de M. le ministre de la Guerre, les officiers et les élèves des écoles polytechnique et de Saint-Cyr assisteront en corps à la 42e représentation du grand succès de l'Ambigu, « L'Autre France », le beau drame de MM. Decourcelle et Hugues Le Roux."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Courrier des Théâtres",
    "title": "Améliorations à l'Opéra",
    "summary": "L'Opéra a inauguré une rotonde faisant office de fumoir. Orné d'un plafond de Clairin et de tapisseries des Gobelins, cet espace marque les réformes entreprises par M. Gailhard.",
    "paragraphs": [
      "On a inauguré à l'Opéra une salle en rotonde destinée à servir de fumoir. Cette vaste salle, ornée d'un magnifique plafond peint par Clairin et de superbes tapisseries des Gobelins, a suscité l'admiration générale.",
      "Son ouverture s'inscrit dans le cadre des améliorations que nous annoncions depuis quelque temps et que M. Gailhard préparait à l'occasion du renouvellement de son privilège."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Courrier des Théâtres",
    "title": "Programme de l'Opéra-Comique",
    "summary": "La matinée de bienfaisance du jeudi 7 février à l'Opéra-Comique s'enrichit du 3e acte de « Werther » de Massenet, avec le concours de Mme Marie Delna et de M. Maréchal.",
    "paragraphs": [
      "Il convient d'ajouter au programme de la matinée que l'Opéra-Comique donnera, le jeudi 7 février, au bénéfice de la caisse des pensions viagères des artistes de l'orchestre, des chœurs et du personnel de la scène, le 3e acte du « Werther » de Massenet, avec le concours de Mme Marie Delna et de M. Maréchal."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Courrier des Théâtres",
    "title": "Représentations au Nouveau-Théâtre",
    "summary": "Le Nouveau-Théâtre annonce pour les jours prochains la représentation des deux parties de l'œuvre dramatique « Au-delà des forces humaines » du dramaturge norvégien Bjornstiern Bjornson.",
    "paragraphs": [
      "Deux représentations comprenant la première et la deuxième partie de « Au-delà des forces humaines », œuvre de Bjornstiern Bjornson, seront données prochainement sur la scène du Nouveau-Théâtre."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Théâtres",
    "title": "Succès de la revue 'Enfin seuls!' à la Scala",
    "summary": "La revue 'Enfin seuls!' triomphe à la Scala, attirant un public mondain et nombreux grâce à ses actualités spirituelles et une mise en scène d'une somptuosité remarquable.",
    "paragraphs": [
      "Si l'on veut rencontrer le Tout-Paris le plus intact et le plus mondain, il faut se rendre à la Scala, où la brillante revue « Enfin seuls ! » attire en ce moment une foule énorme, grâce à ses actualités spirituelles, ses scènes finement menées et le somptueux déploiement de sa mise en scène."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Théâtres",
    "title": "Succès de la revue de l'Eldorado",
    "summary": "La nouvelle revue de l'Eldorado, intitulée 'As-tu vu la ferme', connaît un immense succès, portée par les numéros comiques de Dranem et l'élégance du ballet des Rubans.",
    "paragraphs": [
      "La revue de l'Eldorado est en passe de devenir fort populaire. Son titre, plein d'actualité, « As-tu vu la ferme », est devenu la question par laquelle s'interpellent tous ceux qui ont applaudi les étourdissantes créations de Dranem ainsi que le merveilleux défilé du ballet des Rubans."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Théâtres",
    "title": "Débuts de Mlle Adèle Verly à la Cigale",
    "summary": "Mlle Adèle Verly a fait des débuts remarqués à la Cigale. Dotée d'une voix au timbre exquis, elle a conquis le public avec l'interprétation de la mélodie 'L'Amour tient à peu de chose!'.",
    "paragraphs": [
      "Excellent début, hier, de Mlle Adèle Verly, que M. Marchand vient d'engager. Dès son apparition sur la scène de la Cigale, Mlle Adèle Verly a immédiatement conquis les faveurs du public.",
      "Mûre et capiteuse, possédant une voix d'un timbre et d'un charme exquis, elle a égrené avec beaucoup d'art de langoureuses mélodies, parmi lesquelles « L'Amour tient à peu de chose ! », qui ont suscité bravos et rappels de toute la salle.",
      "Elle se fera entendre aujourd'hui en matinée dans la partie concert qui précède la revue « T'y viens-t'y »."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Les Courses",
    "title": "Pronostics pour les courses à Nice",
    "summary": "Retrouvez les pronostics pour les épreuves hippiques de ce samedi 19 janvier à Nice, incluant le Prix d'Ouverture, le Grand Prix de la Ville et le prix Masséna.",
    "paragraphs": [
      "Aujourd'hui, samedi 19 janvier. Nos pronostics :",
      "Prix d'Ouverture. Haies, 3 000 francs, 2 800 mètres : Orignac, Axiom.",
      "Grand Prix de la Ville de Nice. Steeple-chase, 20 000 francs, 4 000 mètres : Haut-Linon, Cartito.",
      "Prix Masséna. Haies, 5 000 francs, 3 000 mètres : Famine, Governor."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Faits Divers",
    "title": "Les yeux du Président Kruger",
    "summary": "Des médecins délégués par la Cour de La Haye ont consulté un oculiste parisien pour traiter les troubles oculaires du Président Kruger, évitant ainsi tout recours à la chirurgie.",
    "paragraphs": [
      "Deux docteurs, délégués par la Cour de La Haye, sont venus rendre visite à un célèbre oculiste, au 56, rue de Londres, dans le but d'appliquer son mode de traitement aux troubles oculaires dont souffre le Président Kruger.",
      "Convaincus par de nombreux cas de guérison, ils se sont retirés enchantés des résultats d'une méthode qui permet d'éviter toutes les interventions chirurgicales."
    ]
  },
  {
    "id": 36,
    "page": 3,
    "category": "Feuilleton",
    "title": "La Revanche de Rose-Manon",
    "summary": "Dans ce nouveau chapitre du roman de Jules Mary, Guillaume et Régine sont en proie au doute. Déchirée par la trahison, Régine choisit de sceller le sort de Villaurier par son silence vengeur.",
    "paragraphs": [
      "Dans cette suite du roman de Jules Mary, Guillaume et Régine attendent nerveusement de nouvelles informations sur l'affaire judiciaire liée à leur entourage, tout en gérant le poids de leurs secrets et la menace du déshonneur.",
      "Le dialogue entre les deux protagonistes révèle une résolution sombre : Régine, se sentant trahie, refuse d'innocenter Villaurier malgré les preuves qu'elle détient, affirmant qu'elle se venge en le laissant en prison, convaincue de la culpabilité morale de cet homme."
    ]
  },
  {
    "id": 37,
    "page": 4,
    "category": "Publicité Médicale",
    "title": "Revalescière du Barry",
    "summary": "La Revalescière du Barry est présentée comme l'aliment fortifiant souverain contre les troubles digestifs et respiratoires. Disponible chez Du Barry et Cie, rue de Castiglione.",
    "paragraphs": [
      "La Revalescière du Barry guérit les constipations habituelles les plus rebelles, les dyspepsies, gastrites, gastralgies, dysenteries, glaires, aigreurs, acidités, nausées, manque d'appétit, renvois, vomissements, diarrhées, coliques, toux, asthme, catarrhes, influenza, grippes, bronchites, pneumonies, oppressions, congestions, faiblesses, épuisements, anémies, chloroses, ainsi que tous les désordres de la vessie, du foie, des reins et des intestins.",
      "M. le Dr Elmslie écrit : « Votre Revalescière vaut son pesant d'or, après des années d'invariable succès. »",
      "Pour les convalescents, c'est la nourriture par excellence, l'aliment indispensable pour réparer les forces. Elle est également le meilleur aliment pour élever les enfants et rétablit les constitutions les plus épuisées par l'âge, le travail ou les excès.",
      "Vente en boîtes : 1/2 kil., 4 fr. 50 ; 1 kil., 7 fr. 75 ; 2 1/2 kil., 17 fr. 50. La Revalescière chocolatée est offerte aux mêmes prix. Envoi franco contre mandat-poste par Du Barry et Cie, 14, rue de Castiglione, Paris, chez Yotin ainsi que chez tous les pharmaciens et épiciers."
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Annonces",
    "title": "Loteries des Œuvres Ouvrières",
    "summary": "Annonce des Loteries des Œuvres Ouvrières proposant des lots jusqu'à 250 000 francs. Tirage prévu le 31 janvier. Billets en vente au 16, boulevard de Strasbourg.",
    "paragraphs": [
      "Loteries des Œuvres Ouvrières. Lots de 250 000, 100 000, 50 000 francs, etc. Tirage le 31 janvier. Prix du billet : 50 centimes. Ville de Paris : 19 600 francs. Billets en vente chez L. Staude, 16, boulevard de Strasbourg, Paris."
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "Publicité Commerciale",
    "title": "La Belle Jardinière",
    "summary": "La maison La Belle Jardinière annonce des occasions exceptionnelles sur les chemises et le linge confectionné pour les journées du 28, 29 et 30 janvier.",
    "paragraphs": [
      "La Belle Jardinière, rue du Pont-Neuf, Paris. Les 28, 29 et 30 janvier, ainsi que les jours suivants : occasions exceptionnelles sur les chemises et le linge confectionné."
    ]
  },
  {
    "id": 40,
    "page": 4,
    "category": "Publicité Médicale",
    "title": "Traitement de l'Asthme et Sage-femme",
    "summary": "Promotion du traitement contre l'asthme du Dr Cléry avec boîte d'essai offerte, et annonce des services d'une sage-femme au Faubourg Saint-Martin.",
    "paragraphs": [
      "Ordonnance du corps médical : Traitement efficace de l'asthme, poudre du Dr Cléry, de Marseille. Envoi gratuit d'une boîte d'essai.",
      "Sage-femme, Paris. Soins attentifs et discrets. Maison Bazincourt, 66, Faubourg Saint-Martin."
    ]
  },
  {
    "id": 41,
    "page": 4,
    "category": "Publicité Médicale",
    "title": "Traitement Dépuratif Végétal",
    "summary": "Le nouveau traitement Dépuratif Végétal-Antiseptique offre une guérison rapide pour les affections de la peau, du sang, du foie et des reins. Disponible au laboratoire, 5, rue Lamé, à Paris.",
    "paragraphs": [
      "Des milliers de guérisons rapides et radicales ont été obtenues dans les cas les plus rebelles grâce au nouveau traitement Dépuratif Végétal-Antiseptique et Digestif. Il est indiqué pour le traitement des maladies de peau, du sang, du foie, des reins, etc. Laboratoire : 5, rue Lamé, Paris."
    ]
  },
  {
    "id": 42,
    "page": 4,
    "category": "Publicité Commerciale",
    "title": "Grands Magasins de la Samaritaine",
    "summary": "La Samaritaine propose une vente exceptionnelle de linge de maison et d'articles de confection. Retrouvez un grand choix de blanc, toiles, trousseaux, stores, flanelles et chemises aux adresses habituelles.",
    "paragraphs": [
      "La Samaritaine, située rues de Rivoli, au 15, rue du Pont-Neuf et de la Monnaie, à Paris, organise une vente exceptionnelle. Retrouvez un large choix de blanc, toiles, trousseaux, stores, flanelles et chemises."
    ]
  }
];
