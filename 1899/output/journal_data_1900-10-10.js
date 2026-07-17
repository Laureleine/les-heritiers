// Date: 1900-10-10
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-10-10 (Version Restaurée, 33 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Politique",
    "title": "Distinction honorifique pour Lille et Valenciennes",
    "summary": "Le gouvernement étend aux villes de Lille et Valenciennes le privilège de porter la croix de la Légion d'honneur sur leurs armoiries, en reconnaissance de leur résistance héroïque lors de la Révolution.",
    "paragraphs": [
      "Le décret du gouvernement qui autorise Paris et Bazeilles, pour leur vaillante conduite pendant la guerre de 1870-1871, à placer la croix de la Légion d'honneur dans leurs armoiries, a été complété. Deux autres villes, Lille et Valenciennes, jouiront également de ce glorieux privilège. C'est pour leur résistance à l'invasion de 1792 à 1795 que ces cités reçoivent la récompense nationale.",
      "Ainsi, le décret rapproche la troisième République de la première ; il honore d'un même hommage le patriotisme de l'une et de l'autre, et confond dans un unique sentiment d'admiration la France militaire de la Révolution et la France militaire de nos jours."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Histoire",
    "title": "La résistance historique de Valenciennes",
    "summary": "Retour sur les sièges historiques de Valenciennes, de la lutte contre l'occupation espagnole aux combats acharnés des armées de la République contre les troupes coalisées en 1793 et 1794.",
    "paragraphs": [
      "Valenciennes avait subi deux sièges avant celui de 1793 : l'un en 1656, l'autre en 1677. Mais il s'agissait alors de reprendre la ville aux Espagnols, qui en étaient possesseurs depuis 1536.",
      "En 1793, la place, défendue par les Français, était attaquée par les armées coalisées. Le siège dura quarante-et-un jours. Les Autrichiens s'en rendirent maîtres, malgré une défense désespérée. Mais leur succès ne devait pas être de longue durée. Huit mois après, le 10 mars 1794, une armée de la République, commandée par le général Scherer, forçait l'ennemi à rendre Valenciennes à la France."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Histoire",
    "title": "Le siège de Lille en 1792",
    "summary": "En 1792, Lille subit un siège mémorable sous les bombes autrichiennes. La fermeté de ses habitants face à l'ennemi valut à la cité l'hommage de la Convention nationale.",
    "paragraphs": [
      "Quant au siège de Lille en 1792, qui vaut aujourd'hui à la grande ville la croix de la Légion d'honneur, il constitue l'une des plus belles pages de notre histoire nationale. Le général autrichien, le duc Albert de Saxe-Teschen, espérait effrayer Lille pour qu'elle ouvre ses portes, mais derrière ces murs, toute une population était prête à lutter jusqu'à la mort.",
      "Le 29 septembre, un parlementaire du général autrichien se présentait aux portes de Lille pour sommer la ville de se rendre. La réponse du général Ruault et de la municipalité fut catégorique : ils étaient résolus à mourir plutôt que de capituler.",
      "Le bombardement dura, entraînant sept cents maisons brûlées et cinq mille endommagées. La Convention nationale déclara plus tard que les habitants de Lille avaient bien mérité de la patrie."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Feuilleton",
    "title": "Le Fruit défendu",
    "summary": "Dans ce récit dramatique, une mère découvre avec effroi le secret de sa fille Rose-Manon, dont la confession de sa liaison avec Jean Clairjean vient briser les espoirs d'une vie tranquille.",
    "paragraphs": [
      "La mère reste atterrée. Déjà deux fois un soupçon était venu, mais elle l'avait éloigné avec horreur. Aujourd'hui, devant ce désespoir et ces paroles entrecoupées, quelque chose dans le cœur maternel se déchire avec une effroyable douleur.",
      "Rose-Manon cache dans le giron de Marianne sa figure terrifiée : « Mère, pardon, j'ai été trompée, je voudrais mourir ». La pauvre femme reste silencieuse, tandis que son esprit voyage vers Jérôme, l'homme simple et droit qui, lui aussi, en mourrait peut-être.",
      "Rose-Manon finit par avouer sa liaison avec un certain Jean Clairjean, et la terrible nouvelle que sa mère attendait : elle va être mère."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Politique",
    "title": "Conseil des ministres du 9 octobre",
    "summary": "Réunion du conseil des ministres sous la présidence de M. Loubet : au programme, situation en Chine, organisation du voyage présidentiel à Lyon et préparation du calendrier parlementaire pour les réformes.",
    "paragraphs": [
      "Les ministres se sont réunis, hier matin, à l'Élysée, sous la présidence de M. Loubet. Le ministre des Affaires étrangères a donné connaissance au conseil des télégrammes reçus de nos agents en Chine.",
      "Le conseil a réglé les détails du voyage que le Président de la République doit faire à Lyon. Il a également désigné le général André pour assister à Brest à l'inauguration du monument élevé à la mémoire des soldats et marins morts pendant la guerre.",
      "Le conseil s'est ensuite occupé de l'ordre des travaux qu'il demandera au Parlement en vue d'assurer, à bref délai, le vote d'un minimum de réformes économiques et politiques."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Social",
    "title": "La question du vin du soldat",
    "summary": "L'alimentation du soldat fait débat : si le vin est la norme, les soldats bretons, normands et du Nord réclament l'intégration du cidre et de la bière dans les rations pour varier les plaisirs sans alourdir le budget.",
    "paragraphs": [
      "L'article du Petit Parisien concernant le vin du soldat nous a valu plusieurs courriers dignes d'intérêt. S'il est vrai que le vin est fréquemment réclamé, les Bretons, les Normands et les hommes venus du Nord préfèrent très largement le cidre ou la bière.",
      "Il conviendrait donc de prendre en compte ces goûts régionaux si nous souhaitons offrir au soldat un breuvage autre que l'eau. Les commissions des ordinaires, en s'inspirant des us et coutumes locaux et en profitant des années d'abondance, pourraient aisément intégrer le cidre et la bière dans l'alimentation réglementaire, sans accroître sensiblement les charges budgétaires de l'État."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Drame de la jalousie rue du Faubourg-Montmartre",
    "summary": "Un drame passionnel a secoué le 9 rue du Faubourg-Montmartre. Louise Lancteau a tiré sur son ancien amant, l'ouvrier cordonnier Firmin Decoly, avant de retourner son arme contre elle. Les deux protagonistes sont hospitalisés.",
    "paragraphs": [
      "Un drame, dont le mobile semble devoir être attribué à la jalousie, s'est déroulé hier matin au numéro 9 de la rue du Faubourg-Montmartre. Un ouvrier cordonnier, Firmin Decoly, a été victime d'une tentative de meurtre par son ancienne maîtresse, Louise Lancteau, qui s'est ensuite tiré une balle dans la tempe.",
      "Firmin Decoly, grièvement blessé, a déclaré au commissaire Archer qu'il soupçonnait la femme d'avoir drogué son vin durant le dîner. Les deux protagonistes ont été transportés d'urgence à l'hôpital Lariboisière."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Accident lors de l'érection d'un monument à Brest",
    "summary": "À Brest, lors de la pose du monument du sculpteur Maillard, la rupture d'une corde a fait chuter une statue en bronze de quatre tonnes, réduisant l'œuvre en morceaux et consternant l'artiste.",
    "paragraphs": [
      "Un déplorable accident s'est produit ce soir à Brest, sur la place des Portes, au moment précis où l'on procédait à la mise en place du monument en bronze du sculpteur Maillard, destiné à symboliser les Morts pour la patrie.",
      "La corde qui retenait le bronze de quatre mille kilos a soudainement cédé. La masse est tombée lourdement au sol, et tout laisse craindre que le monument ne soit irréparablement brisé. Le sculpteur Maillard, auteur du groupe Icare, est décidément bien malchanceux."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Faits Divers",
    "title": "Enquête sur l'assassinat de la rue Fontaine",
    "summary": "Le meurtre d'Augustine Durand occupe la sûreté. Un suspect a été interpellé à Hendaye avec un mouchoir taché de sang, mais le commissaire Cochefert reste prudent sur son identification réelle.",
    "paragraphs": [
      "Le service de la sûreté continue de vérifier les pistes concernant l'assassinat commis rue Fontaine, dont Augustine Durand fut la malheureuse victime. Un individu suspect a été arrêté à Hendaye, trouvé porteur d'un mouchoir taché de sang, mais son signalement ne semble pas correspondre avec certitude à celui de l'assassin recherché.",
      "Le commissaire Cochefert fait poursuivre activement l'enquête, notamment sur l'emploi du temps du suspect et l'audition des divers témoins de son entourage."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "Faits Divers",
    "title": "Un meurtre à l'Hermitage",
    "summary": "À l'Hermitage, une veuve de soixante-trois ans, Mme Prudhomme, a été mortellement blessée par un caillou lancé par un nommé Blanchard. Les deux agresseurs, en état d'ivresse, ont été écroués par la gendarmerie.",
    "paragraphs": [
      "Un meurtre odieux a été commis hier soir à l'Hermitage, près de Rennes. Deux jeunes gens, Delalande et Blanchard, pris de boisson, ont importuné les habitants d'une maison. Une veuve de soixante-trois ans, Mme Prudhomme, a été mortellement frappée à la tempe par un caillou lancé par Blanchard alors qu'elle tentait de les chasser. Les deux coupables ont été arrêtés par la gendarmerie."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Événements et Fêtes",
    "title": "La fête des Vendanges",
    "summary": "Mardi prochain, 10 octobre, se tiendra la grande fête des Vendanges. Un cortège somptueux composé de chars décorés et de centaines de figurants célébrera le vin, de Bacchus aux crus des provinces et colonies.",
    "paragraphs": [
      "La fête des Vendanges demeure fixée, comme nous l'avons annoncé dès les premiers jours, au 10 octobre, c'est-à-dire à mardi prochain.",
      "On va donner à cette fête un éclat tout particulier ; elle comprendra, comme la précédente fête de l'Horticulture, dix ou douze chars et cinq ou six cents figurants, si ce n'est plus.",
      "On demandera pour la veillée des vendanges, c'est-à-dire à dix heures du soir, le lundi 9 octobre, cinq tickets. Ce sera encore cinq tickets le mardi. Et malgré cela, il y aura foule.",
      "Le lundi, aura lieu la veillée susdite. On fermera les portes à minuit. On verra défiler des cortèges de vendangeurs et de vendangeuses, on rira, on chantera.",
      "Le lendemain, le cortège se formera sur les pentes du Château d'Eau. Il gagnera le Trocadéro par le côté droit du Champ-de-Mars, obliquera à gauche en débouchant du pont d'Iéna et, après avoir fait le tour des colonies, se reformera au coin du boulevard Delessert.",
      "Il reviendra à son point de départ en passant de l'autre côté du Champ-de-Mars.",
      "Le cortège, extrêmement somptueux, comprendra tout d'abord un peloton de gardes républicains à cheval, en grande tenue de gala.",
      "Ensuite, solennels, sur de hauts destriers blancs harnachés en gala également, s'avanceront les crieurs du ban des vendanges, des artistes de l'Odéon et de la Comédie-Française.",
      "Puis viendront ensuite, ventrus, pansues, la coupe en main, couronnées de lierre, sur des chars fleuris ou rustiques, harnachés de pampres verts et roux, les divinités du vin, Bacchus le jeune et le bon papa Silène. Des nymphes, des porteuses d'outres suivront.",
      "Puis ce seront les chars des vins étrangers : les vins d'Allemagne, de Bosnie, d'Herzégovine, d'Espagne, d'Italie, de Sicile et de Grèce.",
      "Enfin, triomphe définitif de l'art vinicole, s'avanceront les vins de l'Algérie et des crus de nos provinces méridionales, les vins qui symbolisent notre esprit si joyeusement français."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Fêtes et Expositions",
    "title": "La fête des moyens de transport",
    "summary": "M. Picard présente un projet original : une parade historique des véhicules, du char de Cléopâtre aux automobiles modernes, réunissant un millier de figurants aux Champs-Élysées, aux Invalides et au Trocadéro.",
    "paragraphs": [
      "Le titre de cette fête n'est pas joli, mais l'idée en est assez séduisante. M. Picard, en la soumettant aux membres de la commission supérieure des fêtes, a prouvé une initiative très heureuse.",
      "Nous verrons bientôt le défilé, aux Champs-Élysées, aux Invalides et au Trocadéro, de tous les véhicules usités par nos ancêtres dans tous les pays du monde : char de Cléopâtre, Bucéphale, char de Jules César, palanquins du Moyen Âge, carrosses, voitures aux chèvres, traîneaux de gala des Samoyèdes, vélocifères et, en apothéose, un défilé d'automobiles fleuris.",
      "Au total, un millier de figurants et deux cents véhicules anciens. La sous-commission chargée du projet comprend MM. Jules Claretie, Pierre Gaithard, Samuel Hochard, Bernheim, Carré et Jambon."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Social",
    "title": "Légion d'honneur",
    "summary": "À l'occasion de l'Exposition universelle, de nombreuses personnalités, magistrats et civils, ont été promues ou nommées dans l'ordre national de la Légion d'honneur.",
    "paragraphs": [
      "Sont promus ou nommés dans l'ordre national de la Légion d'honneur, à l'occasion de l'Exposition universelle.",
      "Commandeur : M. Mérillon, avocat général à la Cour de cassation.",
      "Officiers : MM. Chaubet, Caussemille, Debiève, Pémouze, Gréban, Ouasco, Hostaud.",
      "Chevaliers : Liste complète incluant MM. Blondeau, Brougnard, Chapelle, Chaumelin, Dal Piaz, David, Demonts, Dienst, Doistau, Dubosc, Faréret, Fortin, Gallet, Gareau-Dornbatille, Girard, Grouselle, Haour, Jobit, de la Fargue, Lambert, Langue, Lapeyrèse, Laurent, Lefèvre, Leffray, Legrand, Leleti, Loir, Manaut, Marie, Marlaud, Marre, Martin, Max, comte Mimerel, Nicolas, Olivier, Pellerin, Pradeau, Queru, Renotte, Richemond, baron de Bellet, Saint-Olive, Simon, Vidal-Esgourrau, Vignet."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Faits divers",
    "title": "Une femme et un enfant asphyxiés",
    "summary": "Drame domestique à Bruxelles : Mme Anthoen et le jeune fils des époux Van Dyck, dont elle avait la garde, ont été retrouvés morts, asphyxiés par une fuite de gaz.",
    "paragraphs": [
      "Bruxelles, 9 octobre. M. et Mme Van Dyck ont laissé leur servante et confié la garde de leur fils Armand à une amie, Mme Anthoen.",
      "Un ouvrier, M. Philippe Ghilain, s'étant présenté, a trouvé la porte fermée. Un serrurier a forcé la porte et découvert Mme Anthoen et l'enfant étendus sur le parquet, asphyxiés par un bec de gaz qui n'avait pas été fermé complètement."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Faits divers",
    "title": "Accident de montagne",
    "summary": "Une avalanche sur le Morgenhorn a causé la mort de l'étudiant Trechsel et du guide Jacob Reichen. Leurs corps ont été retrouvés par les secours et rapatriés à Kandersteg.",
    "paragraphs": [
      "Genève, 9 octobre. Un jeune étudiant de Berne, nommé Trechsel, et le guide Jacob Reichen, ont été emportés par une avalanche en faisant l'ascension du Morgenhorn.",
      "Une expédition de vingt hommes a retrouvé les corps samedi soir et les a ramenés à Kandersteg."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Faits divers",
    "title": "Écroulement d'une auberge",
    "summary": "À Nikanderldosto, en Russie, l'effondrement du plancher d'une auberge bondée de pèlerins a provoqué une bousculade mortelle, causant le décès de quarante personnes, dont trente-six femmes.",
    "paragraphs": [
      "Saint-Pétersbourg, 9 octobre. À Nikanderldosto, 5 000 pèlerins étaient réunis pour une fête religieuse. Le plancher du deuxième étage d'une auberge s'est effondré sous le poids de la foule.",
      "Dans la panique, le cri « Au feu ! » a provoqué une bousculade effroyable : trente-six femmes et quatre hommes ont été étouffés."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Faits divers",
    "title": "Cyclone à l'île du Prince-Édouard",
    "summary": "Les pêcheurs acadiens du Nouveau-Brunswick, portés disparus depuis le cyclone du mois dernier, sont désormais déclarés morts, portant le bilan de la catastrophe à quarante-six victimes.",
    "paragraphs": [
      "Halifax, 9 octobre. Les pêcheurs du Nouveau-Brunswick, portés manquants à la suite du cyclone qui a sévi le mois dernier, ont péri. Le nombre des victimes est de quarante-six, tous des Acadiens français."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Politique étrangère",
    "title": "La guerre au Transvaal",
    "summary": "Mouvements de troupes boers autour de Ficksburg et préparatifs de voyage pour le petit-fils du président Krüger, attendu en Europe aux côtés de son aïeul.",
    "paragraphs": [
      "Maseru, 9 octobre. Une centaine de Boers sont entrés samedi matin dans Ficksburg après en avoir interdit l'accès. On signale la présence d'un camp boer aux abords de la ville.",
      "Lourenço-Marques, 9 octobre. M. Frikkie Eloff, petit-fils du président Krüger, accompagnera ce dernier dans son prochain voyage en Europe."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Faits Divers",
    "title": "L'Affaire Multier",
    "summary": "Le rapport des experts-comptables sur l'affaire Multier, accusé de faux et usage de faux, a été remis au juge d'instruction. Le Palais évoque une possible ordonnance de non-lieu.",
    "paragraphs": [
      "MM. Legrand et Pelletier, experts-comptables, ont remis hier après-midi à M. de Cognac, juge d'instruction, leur rapport concernant les faits reprochés à M. Multier, l'administrateur lillois inculpé de faux et d'usage de faux au préjudice de son beau-fils. Un bruit courait hier, au Palais, que cette affaire se terminerait par une ordonnance de non-lieu."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Faits Divers",
    "title": "Tramway Tamponneur",
    "summary": "Un tramway électrique a percuté une voiture de place boulevard Malesherbes. Malgré l'ampleur des dégâts matériels sur le véhicule, aucun passager n'a été gravement blessé.",
    "paragraphs": [
      "Le tramway électrique de Neuilly, n° 100, conduit par le mécanicien Lebrun, a renversé hier soir, vers huit heures, devant le n° 10 du boulevard Malesherbes, une voiture de place. Une dame, atteinte de douleurs internes, a été évacuée aussitôt.",
      "Par un hasard remarquable, aucune des personnes se trouvant dans la voiture n'a été sérieusement blessée ; le véhicule est cependant en partie écrasé."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Faits Divers",
    "title": "Affreux Suicide",
    "summary": "Une veuve, Mme Revol, s'est défenestrée rue de la Harpe. Si la misère fut d'abord évoquée, la découverte d'une somme importante dans son logement laisse planer un mystère sur les causes réelles de son geste fatal.",
    "paragraphs": [
      "Une couturière, Mme veuve Revol, âgée de quarante ans, demeurant rue de la Harpe, s'est jetée hier soir, vers deux heures du matin, de la fenêtre de son logement situé au troisième étage.",
      "Dans sa chute, la malheureuse est venue s'abattre sur le toit d'une boutique qui a été enfoncé, et elle est retombée ensuite sur le trottoir où elle a expiré.",
      "M. Archer, commissaire de police, a procédé aussitôt à une enquête. Avant de mettre son projet à exécution, Mme Revol avait barricadé sa porte à l'aide d'une énorme armoire.",
      "M. Archer attribuait tout d'abord ce suicide à la misère, car Mme Revol n'avait pas payé son loyer ; mais le commissaire a trouvé dans son logement une somme de près de 150 francs, ce qui laisse planer le doute sur le motif réel de cet acte de désespoir."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un Fou en Wagon",
    "summary": "Un voyageur a semé la panique dans un train arrivant à la gare du Nord en brisant les vitres de son compartiment et en menaçant les passagers d'un revolver avant d'être maîtrisé par la police.",
    "paragraphs": [
      "Au moment où, hier matin, le train qui arrive en gare du Nord vers huit heures venait de ralentir, les voyageurs furent mis en alerte par les cris d'un employé du train devant un compartiment de première classe, à la portière duquel on apercevait un individu, le visage défait, faisant de grands gestes et brandissant une lourde canne dont il était armé.",
      "On s'aperçut que cet homme, fort bien mis, était seul dans son compartiment dont il avait brisé toutes les glaces et éventré les coussins.",
      "Comprenant qu'on avait affaire à un fou, on voulut s'en emparer ; mais, braquant un revolver sur les employés et les voyageurs qui voulaient arriver jusqu'à lui, le forcené menaça de tuer le premier qui s'approcherait. N'espérant pas en venir à bout, on prit le parti de ne rien tenter jusqu'à l'arrivée du train à Paris.",
      "À la gare du Nord, pendant qu'on attirait son attention du côté du quai, les inspecteurs du commissariat entraient dans le wagon par le côté opposé et se jetaient sur l'aliéné. Il fallut six hommes pour maîtriser le malheureux. On a été obligé de l'envoyer à l'infirmerie spéciale sans avoir pu établir son identité."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Une Chute de Cheval",
    "summary": "Un garde républicain en service a été gravement blessé boulevard Saint-Germain après que sa monture, effrayée par une automobile, a fait un écart et s'est abattue sur la chaussée.",
    "paragraphs": [
      "Un garde républicain, Adrien Killeau, appartenant au 1er escadron et faisant service d'estafette, passait, hier soir, vers neuf heures, boulevard Saint-Germain, lorsque, près de la rue du Bac, sa monture, effrayée par une automobile, fit un écart et s'abattit.",
      "Adrien Killeau, désarçonné, roula sur la chaussée, la jambe gauche engagée sous le cheval. On constata qu'il souffrait d'une luxation du genou droit, d'une entorse du pied gauche et de contusions multiples assez graves.",
      "Après avoir reçu les premiers soins dans une pharmacie voisine, Adrien Killeau a été, sur sa demande, ramené en voiture à la caserne des Célestins et admis d'urgence à l'infirmerie régimentaire."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Assommé d'un coup de bouteille",
    "summary": "À la suite d'un différend entre deux cochers, une violente bagarre a éclaté. L'un d'eux a été grièvement blessé au visage par un coup de bouteille et transporté d'urgence à l'hôpital Laënnec.",
    "paragraphs": [
      "Victimes d'un chômage prolongé, Alcide Bouet et l'un de ses voisins, Lemoine, s'étaient transformés en cochers de fiacre aux abords du Champ de Mars. Mais la concurrence avait troublé les rapports entre les deux hommes.",
      "Hier matin, à la suite d'une nouvelle scène, Bouet attendait son voisin à la sortie de son domicile et le frappait violemment. L'arrivée du commissaire de police de service mit fin à la bagarre. Or, à deux heures et demie de l'après-midi, le hasard remettait en présence Bouet et Lemoine, avenue de la Bourdonnais.",
      "Bouet, furieux d'apprendre que son voisin avait déposé contre lui une plainte, voulut le frapper à nouveau, mais Lemoine, qui tenait à la main un litre d'eau, se défendit. Bouet fut atteint en plein visage par la bouteille. Il s'affaissa en poussant un cri terrible, le nez littéralement broyé par des débris de verre.",
      "Bouet, dont l'état est très grave, a été transporté à l'hôpital Laënnec. Lemoine a été mis à la disposition de M. Pélardy, commissaire de police."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "Les Mésaventures d'un Curé de campagne",
    "summary": "En visite à Paris, un curé de campagne a été détroussé de ses économies et de ses objets précieux alors qu'il s'était endormi par épuisement sur un banc près de la gare Saint-Lazare.",
    "paragraphs": [
      "Invité par sa sœur à venir visiter l'Exposition, M. l'abbé François Maupomé, curé de Chavagne-en-Paillers, débarquait avant-hier matin à la gare d'Orléans. Son premier soin fut de se rendre chez ses parents, mais le curé ne put se rappeler leur adresse exacte.",
      "La journée fut consacrée à errer à travers la capitale. Le soir, épuisé, il voulut se reposer sur un banc près de la gare Saint-Lazare avant de chercher un logis. Il s'endormit et des malfaiteurs mirent à profit ce sommeil pour le détrousser de son porte-monnaie, de sa montre en or et de bijoux destinés à sa famille.",
      "Réveillé à une heure du matin, sans domicile et sans argent, le curé se rendit rue de Grenelle, au commissariat de police, où il raconta ses mésaventures, refusant toutefois de porter plainte contre les malfaiteurs."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Les Tribunaux",
    "title": "Petit drame parisien",
    "summary": "La cour d'assises de la Seine a acquitté Mlle Bordier, jugée pour avoir gravement brûlé au visage M. Guenain, caissier au magasin du Louvre, après qu'il eut tenu des propos diffamatoires à son égard.",
    "paragraphs": [
      "La cour d'assises de la Seine s'est occupée, hier, d'un drame qui se déroula le 12 mars 1899. Une demoiselle Bordier avait brûlé au visage M. Guenain, caissier au magasin du Louvre, avec de l'acide. M. Guenain fut horriblement brûlé au visage et perdit l'œil gauche.",
      "À l'audience, la jeune personne a déclaré avoir agi sous le coup de la colère en apprenant que M. Guenain avait tenu des propos diffamatoires sur son compte. M. Guenain a déclaré avoir flirté avec elle, sans plus.",
      "Après la déposition des témoins et la lecture de leur correspondance, M. l'avocat général Blondel a requis une peine modérée. Après la plaidoirie de Me Henry Robert, le jury a rendu un verdict négatif. Mlle Bordier a été acquittée."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Nouvelles des communes",
    "summary": "La chronique locale de la banlieue parisienne rapporte divers faits marquants : drames, accidents de travail, suicides et interventions policières, de Montrouge à Saint-Denis.",
    "paragraphs": [
      "Montrouge : Dominique Rossi, marchand de vins, a tué d'un coup de fusil un chien enragé qui pénétrait dans une cour où jouaient des enfants.",
      "Sèvres : M. Pelle, marchand de fleurs à Paris, a trouvé sa maison de campagne, rue Croix-d'Osset, dévalisée de fond en comble.",
      "Menton : Les restes carbonisés d'un petit enfant ont été trouvés dans un sentier, sans qu'aucun indice permette de retrouver l'auteur de ce crime.",
      "Clichy : Mme Adélaïde Brognard, marchande des quatre saisons, s'est pendue la nuit dernière dans sa chambre après avoir absorbé de l'acide muriatique.",
      "Levallois-Perret : Le charretier Pierre Nicole est tombé sous les roues de sa voiture, route de la Révolte. Il a été transporté mourant à l'hôpital Beaujon.",
      "Colombes : Deux ouvriers maçons, Alexis Battas et Jules Berthier, sont tombés de la hauteur d'un troisième étage en travaillant route d'Argenteuil. Battas est dans un état très grave ; Berthier s'est fracturé le bras et l'épaule.",
      "Saint-Denis : Deux enfants ont disparu depuis avant-hier midi. Par ailleurs, Auguste Capelle, homme d'équipe à la Compagnie du Nord, a été tamponné par un fourgon et admis dans un état désespéré à l'hôpital. Enfin, un entrepreneur de serrurerie a trouvé une tête de mort en travaillant, ce qui a déclenché une enquête policière.",
      "Montrouge : M. Lecaillon, champignonniste, aidé de son personnel, a arrêté trois individus, Henri Lassez, Ernest Caron et Alexandre Berjat, qui dévalisaient sa propriété."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Départements",
    "title": "Nouvelles des départements",
    "summary": "Le bulletin des départements relate plusieurs tragédies : un accident mortel à Senlis, un drame familial suivi d'un suicide à Beauvais, et des disparitions inquiétantes dans les environs de Chartres.",
    "paragraphs": [
      "Senlis : Un ouvrier, Leroy dit Baptiste, a été retrouvé asphyxié dans le refuge de Montépilloy après avoir accidentellement mis le feu à sa paillasse.",
      "Beauvais : Mme Bocquillon, femme du cantonnier de Pierrefitte, s'est suicidée en se tranchant la gorge à coups de rasoir. À Achy, le jeune Maurice Lescuyer, treize ans, a volontairement mis le feu à un bâtiment appartenant à son père.",
      "Chartres : Un jeune homme a été retrouvé inanimé dans une mare de sang sur le chemin des Oseraies. Par ailleurs, un mariage prévu entre le fils Gougis et Mlle Morin a dû être annulé, le père du futur ayant disparu sans laisser de trace."
    ]
  },
  {
    "id": 29,
    "page": 4,
    "category": "Feuilleton",
    "title": "Les Miettes du bonheur",
    "summary": "Un homme dévoué exprime ses regrets de devoir s'absenter rapidement, malgré la sympathie reçue, pour veiller sur un enfant convalescent dont il craint les rechutes.",
    "paragraphs": [
      "Eh bien ! questionna celui-ci, vous en avez fini avec la personne qui vous avait fait appeler ? Oui. Rien de grave ? Je l'espère. Pourtant, je vous demanderai l'autorisation de vous quitter tout à l'heure.",
      "Comment, déjà ? Vous nous abandonneriez ? Pas de mon plein gré, croyez-le. J'aimerais assurément demeurer longtemps avec vous pour vous montrer combien je suis sensible au témoignage de sympathie que vous m'accordez. Mais j'ai un petit malade à la maison.",
      "L'enfant que vous soigniez dernièrement à l'hôpital ? Celui-là même. Je le croyais guéri. Il l'est à peu près. Mais tant que la guérison n'est pas absolument définitive, vous le savez, des rechutes sont toujours à craindre. Enfant rachitique, n'est-ce pas ? De constitution faible, plutôt."
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Feuilleton",
    "title": "La Main Gauche - Le Bigame",
    "summary": "Une femme souffrante, épuisée par le voyage, est assistée par sa mère, tandis qu'un médecin relate avec inquiétude une rechute soudaine chez un proche.",
    "paragraphs": [
      "Chauvette, debout aussi vite qu'elle, la soutint : Mais tu es malade, te voilà pâle comme la mort. J'ai trop mangé, trop bu, je vous assure. Ça me tourne sur l'estomac. J'aurais dû prendre peu de chose, après la fatigue du voyage.",
      "Ah ! c'est que je ne suis pas encore si solide que j'en ai l'air, pour un rien je tourne de l'œil. Le vieux médecin du pas-là-bas prétendait que c'étaient les nerfs ; ça m'arrivait aussi, surtout quand j'avais pris quelque chose d'un peu lourd. Ça passe.",
      "Étends-toi donc sur ton lit par là, fit la mère, en montrant la porte ouverte de la seconde pièce. Desserre-toi, tu te coucheras tout à fait si ça ne va pas mieux. Je ne m'en inquiète pas. Tu nous as écrit que tu avais encore de ces histoires-là... Si ça n'allait pas, tu restes, il y a le médecin, boulevard de la... Je n'aurai pas besoin de lui, mais je vais rigoureusement m'interdire... son cas. Je me suis assigné pour tâche de lui refaire un sang nouveau.",
      "J'ai à cœur d'atteindre le but, si difficile que cela soit. Le vieux praticien eut un sourire énigmatique : Oui, oui, je sais. Mais puisqu'il n'est pas sérieusement menacé... J'ignore ce qu'il a, je l'ai quitté à cinq heures. Il était dans un état normal. Pierre, mon vieux domestique, vient m'informer qu'un accès de fièvre aussi soudain que violent l'a pris."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Informations administratives",
    "title": "Adjudication des fournitures pour la Manufacture des Tabacs",
    "summary": "Le 10 novembre 1900, la Manufacture des Tabacs de Paris procédera à l'adjudication de ses fournitures annuelles. Les candidats peuvent consulter le cahier des charges au siège ou dans les diverses manufactures.",
    "paragraphs": [
      "Le samedi 10 novembre 1900, il sera procédé, à la Manufacture des Tabacs de Paris (Gros-Caillou), 63, quai d'Orsay, à l'adjudication des diverses fournitures pour l'année. Les personnes désirant soumissionner devront s'adresser, pour consulter le cahier des charges, de 10 heures du matin à 4 heures du soir, tous les jours non fériés, à la Manufacture de Paris (Gros-Caillou), 63, quai d'Orsay, ou aux Manufactures de Bordeaux, Châteauroux, Dieppe, Dijon, Le Havre, Le Mans, Lille, Limoges, Lyon, Marseille, Morlaix, Nancy, Nantes, Nice, Orléans, Pantin, Reuilly, Riom, Tonneins, Toulouse, Bègles, Trélazé et Aix."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Presse spécialisée",
    "title": "Sommaire de L'Agriculture Nouvelle",
    "summary": "Le nouveau numéro de L'Agriculture Nouvelle traite du crédit agricole, des prévisions météorologiques, de la sélection des semences de blé, de l'aviculture, de l'ampélographie et de l'horticulture.",
    "paragraphs": [
      "Lire cette semaine dans L'AGRICULTURE NOUVELLE (numéro, 10 centimes) : Crédit agricole et Syndicats ; Prévisions du temps, par Lucien Cornet ; Choix de semences de blé pour le haut bassin de la Garonne ; L'Exposition d'aviculture, par J. Troude ; Histoire de l'ampélographie, par G. Battanchon ; Les Glaïeuls de printemps, par A. M. ; Conservation des chicorées et scaroles, par P., et une étude sur les eucalyptus les plus rustiques."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Maritimes",
    "title": "Départs et Arrivées des Paquebots",
    "summary": "Mouvements maritimes du 5 au 7 octobre : le paquebot La Touraine est arrivé à New-York, tandis que les navires des Messageries Maritimes poursuivent leurs liaisons vers l'Australie, Madagascar et l'Indo-Chine.",
    "paragraphs": [
      "Le paquebot La Touraine (C. G. T.), venant du Havre, est arrivé à New-York le 6 octobre, à 10 heures du matin.",
      "Le paquebot Iraouaddy (M. M.), allant à Madagascar, a quitté Djibouti le 6 octobre, à 11 heures du matin.",
      "Le paquebot Armand-Béhic (M. M.), allant en Australie, a quitté King-George Sound le 6 octobre, à 4 heures du soir.",
      "Le paquebot Ville-de-la-Ciotat (M. M.), venant de l'Australie, a quitté Suez le 6 octobre, à 4 heures du soir.",
      "Le paquebot Yarra (M. M.), venant de l'Indo-Chine, a quitté Suez le 7 octobre, à 5 heures du soir.",
      "Le paquebot Saïgon (M. M.), venant de l'Indo-Chine, a quitté Colombo le 6 octobre, à 8 heures du matin.",
      "Le paquebot Chili (M. M.), venant de la Plata et du Brésil, a quitté Dakar le 5 octobre, à 3 heures du soir."
    ]
  }
];
