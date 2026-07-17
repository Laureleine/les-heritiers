// Date: 1900-12-27
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-12-27 (Version Restaurée, 50 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Chronique",
    "title": "Les cadeaux et les étrennes",
    "summary": "Une réflexion sur la tradition des étrennes, héritage païen ancré dans nos mœurs, oscillant entre le faste moderne coûteux et l'appel nécessaire à la générosité envers les enfants défavorisés.",
    "paragraphs": [
      "Il y a un jour dans l'année où l'on se fait des présents ; c'est un usage hérité de l'idolâtrie des païens. Et nous autres chrétiens, qui avons en horreur les superstitions des anciens, nous célébrons pourtant comme eux cette fête de janvier. Les présents et les étrennes volent de toutes parts ! Ce ne sont partout que plaisirs et festins.",
      "Un concile a jadis qualifié l'usage des étrennes de diabolique. Il est vrai qu'au XVIIe siècle, un Père jésuite, voulant mettre tout le monde d'accord, publia une longue consultation pour prouver que cet usage n'est diabolique que si, aux présents offerts aux amis, on ajoute des sacrifices aux idoles.",
      "Puisque païens il y avait, l'usage des étrennes aurait donc été introduit sous le règne du roi Tatius Sabinus, qui reçut le premier la verveine du bois sacré de la déesse Strenia, en signe de bon augure pour la nouvelle année.",
      "Sous l'Empire, tout le peuple allait souhaiter la bonne année au souverain. Mais si le mot étrenne vient de Rome, la chose, elle, a toujours existé chez tous les peuples.",
      "Sous la monarchie, les courtisans se servaient des étrennes pour capter, pour leur compte, les bonnes grâces de la favorite. En toutes les parties du monde, en Chine et au Japon, on respecte la coutume des étrennes.",
      "Chez nous, les étrennes sont moins originales et tendent malheureusement à devenir trop dispendieuses, trop fastueuses. Que l'on songe seulement aux poupées qui ont vingt-quatre heures d'avance sur la mode des femmes.",
      "Je voudrais que les enfants de familles fortunées s'inquiétassent davantage des enfants pauvres. Que des assemblées municipales, des sociétés particulières ou des femmes généreuses portent ou envoient aux enfants misérables des jouets et des bonbons, c'est fort bien."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Les Sans Famille",
    "summary": "Histoire d'une jeune orpheline, servante maltraitée, qui trouve enfin une existence paisible et une éducation digne sous l'aile protectrice d'une comtesse au domaine de Pleyber.",
    "paragraphs": [
      "On l'aimait pour sa grâce, pour sa gentillesse, pour sa mignonne petite figure, pour sa voix douce et ses sourires qui mendiaient une affection dont elle avait soif et que les rudes marins de la côte ne lui marchandaient pas.",
      "La petite servante disparue, elle se demanda : Que faire ? Où aller ? Elle s'éloigna du fermier Vincent Bellou avec dégoût. Le chien vint la conduire un bout de chemin, comme s'il eût craint de ne plus la revoir.",
      "Elle finit par rencontrer une dame âgée dans une voiture qui, prise de pitié, l'emmena au domaine de Pleyber. Là, elle vécut dix ans sous la protection de la vieille comtesse, loin des Bellou, traitée avec bonté et éduquée dans un couvent de Pontivy."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Politique Internationale",
    "title": "L'Angleterre et la guerre du Transvaal",
    "summary": "Analyse des répercussions politiques de la résistance Boër sur l'Empire britannique et sur les ambitions impériales de M. Chamberlain face à ses colonies.",
    "paragraphs": [
      "La guerre du Transvaal, que l'admirable résistance des Boërs rend chaque jour plus grandiose, aura peut-être une répercussion imprévue sur la constitution politique de l'Angleterre. Quel étrange retour des choses si ce petit peuple, en défendant son indépendance, amenait une modification sérieuse dans le gouvernement britannique.",
      "La grande idée du règne de M. Chamberlain a été de resserrer le lien, volontairement assez lâche jusque-là, qui unit l'Angleterre à ses possessions d'outre-mer. Il a demandé à ces colonies de fournir des soldats pour planter le drapeau anglais sur le sol des Boërs."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Nouvelles Coloniales",
    "title": "Situation au Sénégal et en Chine",
    "summary": "Dépêches coloniales : suspension des troupes vers Saint-Louis suite à un cas de fièvre jaune et avancées militaires significatives des forces alliées en Chine avec l'arrestation des princes Tuan et Tchouang.",
    "paragraphs": [
      "Un nouveau cas de fièvre jaune s'étant déclaré au Sénégal, le ministre de la Marine a donné l'ordre de suspendre le départ du personnel désigné pour servir au 1er régiment à Saint-Louis.",
      "Une dépêche de Shanghaï annonce l'arrestation, par le gouvernement impérial, des princes Tuan et Tchouang. Par ailleurs, les troupes du général Bailloud ont remporté une victoire près de Pao-Ting-Fou, s'emparant de canons et de drapeaux après un vif combat."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Tremblement de terre à Chambéry",
    "summary": "Chronique d'un séisme violent ressenti à Chambéry hier soir. Si le choc a provoqué des dégâts matériels importants dans les habitations, aucun accident corporel n'est fort heureusement à déplorer.",
    "paragraphs": [
      "Un phénomène analogue à celui observé dans le Finistère s'est produit hier soir, à onze heures un quart exactement, dans notre région. La secousse a été extrêmement violente, accompagnée d'une détonation semblable à une forte explosion. Plusieurs maisons et meubles ont été renversés et la vaisselle cassée, mais on ne signale aucun accident corporel."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Drame passionnel à Nice",
    "summary": "Un drame sanglant a frappé Nice : le vicomte Jules de Bernouilly a abattu son épouse de six coups de revolver rue de la Paix. La victime, âgée de vingt-quatre ans, a succombé sur le coup.",
    "paragraphs": [
      "Un drame passionnel vient de se dérouler dans l'une des rues les plus fréquentées de Nice. Aujourd'hui, à six heures du soir, rue de la Paix, le vicomte Jules de Bernouilly a tué sa femme en déchargeant sur elle les six balles de son revolver. La victime, âgée de vingt-quatre ans, n'a pas tardé à rendre le dernier soupir."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Social",
    "title": "L'Arbre de Noël d'Alsace-Lorraine",
    "summary": "L'Association générale d'Alsace-Lorraine a offert une somptueuse fête au Cirque d'Hiver, distribuant vêtements et jouets à cinq mille enfants dans une atmosphère élégante et touchante.",
    "paragraphs": [
      "Près de cinq mille enfants ont reçu hier après-midi des vêtements chauds, des jouets et des bonbons, profitant des largesses de l'Association générale d'Alsace-Lorraine. Au Cirque d'Hiver, la vaste rotonde, merveilleusement décorée, était bien trop petite pour contenir la foule élégante venue assister à cette touchante et charmante fête."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Meurtre d'une débitante à Saint-Tibre",
    "summary": "L'enquête sur l'assassinat de Mlle Vial à Saint-Tibre piétine. L'autopsie révèle que la victime a reçu six coups à la tête portés par un instrument contondant, vraisemblablement un marteau.",
    "paragraphs": [
      "L'enquête ouverte sur le meurtre de Mlle Vial, retrouvée morte dans des circonstances mystérieuses, est restée jusqu'ici sans résultat. Le juge d'instruction, M. Aubertot, a procédé à de nouvelles constatations sur les lieux. Le docteur Heyraud, ayant procédé à l'autopsie, a relevé six blessures à la tête produites par un instrument contondant, probablement un marteau."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Politique étrangère",
    "title": "La rébellion dans les régions du Nord",
    "summary": "Les nouvelles des régions du Nord sont alarmantes. Selon les observateurs, la population est prête à la révolte, tandis que la ville de Mutje, près de Worcester, a été mise en état de défense.",
    "paragraphs": [
      "Un colon des mieux qualifiés pour juger de la situation, qui vient de faire un tour d'Ipington à Mummansdorf, rapporte de son voyage l'impression la plus pessimiste sur l'état d'âme des populations.",
      "Quatre-vingt-dix pour cent d'entre eux, a-t-il déclaré, n'attendent pour se révolter que l'arrivée de l'ennemi ou l'apparition d'un chef résolu.",
      "De mauvaises nouvelles ont été reçues aujourd'hui de Worcester. La ville de Mutje a été mise en état de défense."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Politique étrangère",
    "title": "La situation au Transvaal",
    "summary": "Un témoin direct décrit une situation critique au Transvaal : pénurie, coût exorbitant des vivres et guerre d'usure. Les Boers fortifient les Spelonken pour une résistance prolongée.",
    "paragraphs": [
      "Un journaliste récemment arrivé du Transvaal, M. Georges Willems, a fait à un de nos confrères d'intéressantes déclarations sur la situation dans l'Afrique du Sud.",
      "La vie à Pretoria, a déclaré M. Willems, est impossible en ce moment. Non seulement il y règne un morne ennui, à cause du terrorisme anglais, mais les moindres subsistances y ont un prix excessif.",
      "Tout indique que la guerre peut encore durer plusieurs mois au moins et peut-être un an. Les Boers ont encore des munitions et de l'argent en abondance. L'argent leur sert à acheter du bétail et des vivres aux Cafres, car ils payent ce qu'ils réquisitionnent dans les huttes.",
      "En outre, ils ont encore une forte réserve dans les Spelonken. On imagine ainsi des montagnes renfermant de nombreuses grottes qui se trouvent dans la région Nord, au-dessus de Pietersburg. Elles embrassent, dans une sorte de fer à cheval, une vallée fertile où paissent de nombreux troupeaux.",
      "Dès le début des hostilités, le gouvernement du Transvaal a eu soin d'envoyer vers les Spelonken vingt wagons remplis de munitions ainsi que des convois de vivres.",
      "Ce district du nord est le dernier rempart, défendu par Louis Botha. On peut y organiser une longue défense.",
      "Les Boers eux-mêmes avaient mis trois ans à déloger les Cafres des Spelonken, tant il est facile à l'ennemi de se dérober, dans ce terrain accidenté et creusé de nombreuses galeries."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Politique étrangère",
    "title": "Le retour de Lord Roberts à Londres",
    "summary": "Le maréchal Lord Roberts est attendu à Londres le 4 janvier. Il sera accueilli à Paddington par le prince de Galles, avant de se rendre au palais de Buckingham pour un déjeuner officiel en présence des autorités militaires.",
    "paragraphs": [
      "On croit savoir que lord Roberts arrivera à Londres le jeudi 4 janvier. Le commandant en chef débarquera à Southampton et partira pour la capitale à onze heures par train spécial.",
      "Le prince de Galles a annoncé définitivement son intention d'être présent à la gare de Paddington pour souhaiter la bienvenue au vieux maréchal.",
      "Lord Roberts se rendra ensuite, en voiture de gala, au palais de Buckingham, où un déjeuner lui sera offert en son honneur, auquel assisteront, outre quelques membres de la famille royale, le feld-maréchal lord Wolseley, prédécesseur de lord Roberts au commandement de l'armée anglaise, et M. Brodrick, le nouveau ministre de la Guerre.",
      "Le soir, un dîner, dont aucun détail n'a encore transpiré, aura également lieu en l'honneur du généralissime."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Politique intérieure",
    "title": "Projet de reconstruction de l'Imprimerie nationale",
    "summary": "Le gouvernement a soumis aux Chambres le projet de transfert de l'Imprimerie nationale de la rue Vieille-du-Temple vers la rue de la Convention, sur un site de 20 000 m², pour un coût estimé à 5,8 millions de francs.",
    "paragraphs": [
      "Le gouvernement vient de saisir les Chambres du projet relatif à la reconstruction de l'Imprimerie nationale.",
      "Les terrains de la rue Vieille-du-Temple, sur lesquels se trouve actuellement l'établissement, seront mis en vente. L'Imprimerie nationale sera reconstruite à Grenelle, rue de la Convention, sur un emplacement d'environ 20 000 mètres carrés.",
      "L'achat du nouvel emplacement et les frais de reconstruction sont évalués à 5 802 000 francs."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Politique intérieure",
    "title": "L'expédition de Chine",
    "summary": "Pour clarifier le financement de l'expédition de Chine, le gouvernement centralise les dépenses dans un compte spécial, destiné à être couvert par l'indemnité exigée de la Chine. Les crédits votés approchent 70 millions.",
    "paragraphs": [
      "Pour faire apparaître plus nettement les comptes relatifs à l'expédition de Chine, le gouvernement vient de proposer, par un projet spécial, de centraliser dans un compte unique toutes les dépenses y afférentes.",
      "Celles-ci, actuellement disséminées dans différents budgets, n'auraient, par suite, aucune répercussion directe sur les exercices courants, étant destinées à être remboursées par l'indemnité que le gouvernement, d'accord avec les autres puissances, exigera de la Chine.",
      "À l'heure actuelle, les Chambres ont déjà voté pour l'expédition de Chine un crédit total de 58 997 000 francs, auquel s'ajoutent les 11 millions demandés pour un projet nouveau."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Politique intérieure",
    "title": "Suppression des octrois",
    "summary": "La commission spéciale des octrois a approuvé le projet de taxes de remplacement liées à la suppression des droits sur les boissons hygiéniques à Paris, tout en émettant une réserve sur les droits de mutation.",
    "paragraphs": [
      "En prévision de l'application imminente du projet portant suppression des octrois pour les boissons hygiéniques, le conseil municipal de Paris a voté, comme on le sait, diverses taxes de remplacement pour compenser la perte de revenus pour la ville.",
      "La Chambre est actuellement saisie d'un projet portant approbation de ces taxes.",
      "Hier, la commission spéciale des octrois s'est prononcée pour l'adoption intégrale du projet, en faisant toutefois une réserve au sujet de l'article concernant les taxes de mutation par décès sur les immeubles."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Politique intérieure",
    "title": "Réforme du régime des boissons",
    "summary": "Le ministre des Finances, M. Caillaux, a déposé un projet de réforme du régime des boissons. Il précise que le gouvernement n'entend pas modifier le régime douanier des vins étrangers malgré certaines interprétations.",
    "paragraphs": [
      "Au cours de la séance d'hier, le ministre des Finances a déposé sur le bureau de la Chambre un projet de loi visant à la réforme du régime intérieur des boissons.",
      "M. Caillaux fait observer que le gouvernement et la Chambre n'ont jamais eu la pensée de modifier le régime douanier des vins. Or, le numéro 171 du tarif des douanes est conçu en termes tels que le projet de loi actuel aurait pour résultat automatique le relèvement des droits sur les vins étrangers.",
      "La commission des douanes a été saisie, hier, du projet de M. Caillaux ; elle a chargé une sous-commission de l'examiner et de lui soumettre un rapport."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Chronique parlementaire",
    "title": "Gauche Démocratique",
    "summary": "Le groupe de la Gauche démocratique s'est réuni afin d'organiser le renouvellement du bureau de la Chambre et d'établir des ententes avec les autres groupes républicains pour les candidatures à venir.",
    "paragraphs": [
      "Dans la séance qu'il a tenue hier, le groupe de la gauche démocratique de la Chambre s'est occupé du renouvellement du bureau de la Chambre, qui aura lieu au début de la session de janvier.",
      "Le groupe a décidé de s'entendre avec les autres groupes républicains de la Chambre sur les candidatures aux diverses fonctions du bureau."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Chronique parlementaire",
    "title": "Séance de la Chambre des députés (26 décembre)",
    "summary": "La Chambre a voté quinze chapitres du budget de la Guerre. Un vif débat a opposé M. Lasies au gouvernement sur l'affaire du 16e dragons, et le principe de la réduction des exercices des réservistes a été acté.",
    "paragraphs": [
      "La Chambre a continué, dans sa séance du matin et dans celle de l'après-midi, la discussion du budget du ministère de la Guerre, dont elle a voté les quinze premiers chapitres.",
      "M. Lasies a soulevé un vif incident en voulant reprendre l'exposé des faits qui s'étaient produits au 16e régiment de dragons, à Melun, et à la suite desquels le ministre de la Guerre avait ordonné le déplacement de vingt officiers.",
      "La Chambre, à propos des exercices de vingt-huit jours des réservistes, a renouvelé son vote de l'année dernière en adoptant une réduction de crédit tendant à abaisser à vingt jours la durée de ces exercices."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Chronique parlementaire",
    "title": "Séance du Sénat (26 décembre)",
    "summary": "Le Sénat a poursuivi l'examen de la loi sur le régime des boissons. Le ministre des Finances a plaidé pour la surveillance de la circulation afin de réprimer efficacement la fraude.",
    "paragraphs": [
      "Le Sénat a continué la discussion de la loi sur le régime des boissons. Il a adopté les articles relatifs aux licences des marchands en gros et des débitants de boissons, ainsi que ceux concernant le privilège des bouilleurs de cru, sans aucune modification au texte voté par la Chambre.",
      "M. Poirrier a soutenu un amendement visant à soumettre tous les bouilleurs de cru à la déclaration et à leur faire payer le droit sur l'alcool pour les quantités excédant vingt litres.",
      "M. Caillaux, ministre des Finances, a répondu qu'il n'y a que deux moyens de réprimer la fraude : l'exercice à domicile ou la surveillance de la circulation. Le gouvernement propose la surveillance de la circulation."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Social",
    "title": "Contre le blanc de céruse",
    "summary": "Une délégation de députés de la Seine a sollicité le ministère des Travaux publics pour demander l'interdiction du blanc de céruse, poison toxique, dans les travaux de peinture de l'État.",
    "paragraphs": [
      "Une délégation du groupe des députés de la Seine s'est rendue hier matin au ministère des Travaux publics pour entretenir M. Pierre Baudin de la suppression de l'emploi du blanc de céruse, qui est un poison violent, pour l'exécution des travaux de peinture de l'État.",
      "En l'absence du ministre, M. Dejean, son chef de cabinet, a reçu les délégués et a annoncé que le Conseil supérieur d'hygiène était saisi de la question."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Faits divers",
    "title": "Départ de l'amiral Barrera",
    "summary": "Atteint par la limite d'âge, l'amiral Barrera a officiellement remis son commandement de préfet maritime de Brest. Il part se retirer dans sa propriété varoise du Mourillon.",
    "paragraphs": [
      "L'amiral Barrera, préfet maritime de Brest, atteint par la limite d'âge le 17 janvier prochain, a remis aujourd'hui son commandement au contre-amiral chef d'état-major.",
      "L'amiral et Mme Barrera sont partis par l'express de neuf heures. Ils se retirent dans leur propriété du Mourillon, près de Toulon."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Faits divers",
    "title": "Affaire du commandant Cuignet",
    "summary": "Me Ménard, l'avocat du commandant Cuignet, a été autorisé par le ministère de la Guerre à visiter son client détenu au fort du Mont-Valérien pour préparer la défense des procès intentés à des confrères journalistes.",
    "paragraphs": [
      "M. Ménard, chargé par le commandant Cuignet de la défense de ses intérêts, a reçu mardi du ministère de la Guerre l'autorisation de pénétrer dans le fort du Mont-Valérien et de conférer avec son client.",
      "L'entretien de Me Ménard avec le commandant a duré un peu plus d'une heure. Il a surtout porté sur les deux procès intentés par le prisonnier à deux de nos confrères."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Faits divers",
    "title": "Arrestation d'un escroc à Bruxelles",
    "summary": "Un individu se nommant Molinier a été appréhendé à la Bourse de Bruxelles alors qu'il tentait d'écouler des titres français volés. Il est actuellement incarcéré à la prison Saint-Gilles.",
    "paragraphs": [
      "On a arrêté cet après-midi, à la Bourse de Bruxelles, un Français nommé Molinier.",
      "Celui-ci offrait, aux abords de la Bourse, des titres français frappés d'opposition et provenant d'un vol important commis récemment à Paris.",
      "Molinier a été écroué à la prison Saint-Gilles en attendant d'être remis aux autorités françaises."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Faits divers",
    "title": "Une femme coupée en morceaux à Londres",
    "summary": "La police londonienne enquête sur la macabre découverte des restes d'une femme dans une écurie du quartier de Soho. Les autorités ne possèdent, pour l'heure, aucune piste sur les auteurs de cet acte.",
    "paragraphs": [
      "Les journaux de Londres donnent des détails sur une affaire ressemblant à celle du jeune homme coupé en morceaux à Paris.",
      "Un garçon boucher a trouvé dans une écurie de Brewer Street, dans le quartier de Soho, un paquet enveloppé de papier brun contenant les membres d'un cadavre de femme.",
      "La police n'a jusqu'à présent pas la moindre piste sur les auteurs de cet acte."
    ]
  },
  {
    "id": 24,
    "page": 2,
    "category": "Faits divers",
    "title": "Les assises de Versailles",
    "summary": "La session des assises de Versailles s'ouvre ce vendredi. Les frères Suletta, des romanichels accusés de l'assassinat de François Mayer, comparaîtront devant la cour pour répondre de leurs actes.",
    "paragraphs": [
      "Les assises s'ouvriront demain vendredi à Versailles. Les deux frères Suletta, des romanichels accusés d'assassinat sur la personne de François Mayer, comparaîtront devant la cour."
    ]
  },
  {
    "id": 25,
    "page": 2,
    "category": "Municipalité",
    "title": "Abaissement du prix du gaz à Paris",
    "summary": "La Compagnie du gaz a informé le président du conseil municipal de Paris qu'elle est disposée à étudier une réduction du prix du gaz à 20 centimes le mètre cube, effective dès le 1er janvier 1901.",
    "paragraphs": [
      "Le président du conseil municipal a reçu une lettre de la Compagnie du gaz indiquant qu'elle était prête à examiner toute combinaison permettant d'abaisser le prix du gaz à 20 centimes le mètre cube à partir du 1er janvier 1901."
    ]
  },
  {
    "id": 26,
    "page": 2,
    "category": "Conseil Général de la Seine",
    "title": "Séance du mercredi 26 décembre",
    "summary": "Le Conseil général de la Seine a siégé ce mercredi 26 décembre pour délibérer sur l'extension du réseau métropolitain en banlieue, les mesures sanitaires de la Seine et le financement d'œuvres sociales, tel l'orphelinat maçonnique.",
    "paragraphs": [
      "Lors de sa séance du mercredi 26 décembre, le Conseil général de la Seine a adopté plusieurs vœux importants, notamment celui relatif au prolongement du métropolitain en banlieue, ainsi que diverses mesures destinées à assurer l'assainissement de la Seine.",
      "L'assemblée a également procédé à l'examen des subventions allouées à plusieurs sociétés, au nombre desquelles figure l'orphelinat maçonnique, dont le rôle social a été souligné lors des débats."
    ]
  },
  {
    "id": 27,
    "page": 2,
    "category": "Urbanisme",
    "title": "Le projet de reconstruction du musée du Luxembourg",
    "summary": "La reconstruction du musée du Luxembourg reste incertaine, conditionnée au transfert des services ministériels. Au Sénat, le projet est contesté en raison de l'amputation prévue d'une partie du jardin du Luxembourg.",
    "paragraphs": [
      "L'avenir du projet de reconstruction du musée du Luxembourg demeure incertain. En effet, la réalisation de nouveaux locaux reste strictement subordonnée au déplacement des services ministériels qui occupent actuellement les bâtiments visés.",
      "Ce projet suscite une opposition marquée au Sénat, les opposants craignant que les travaux n'entraînent le sacrifice d'une partie du jardin du Luxembourg, et plus particulièrement du verger, dernier vestige d'une époque désormais révolue."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Architecture et Urbanisme",
    "title": "Projet d'aménagement des nouveaux bâtiments",
    "summary": "L'aménagement de nouveaux espaces pour les arts décoratifs reste problématique. Malgré l'urgence de loger les collections de la rue de Médecine, les solutions techniques et architecturales tardent à se concrétiser.",
    "paragraphs": [
      "Dans cet espace relativement restreint, il serait envisageable d'édifier des structures adaptées à nos artistes contemporains, le premier étage étant judicieusement réservé aux salles d'exposition des collections de statues et d'objets d'art.",
      "Pourquoi recourir à la démolition ? Il est impératif de pourvoir à l'installation convenable des arts décoratifs. Le musée de la rue de Médecine renferme d'admirables trésors qui échappent aujourd'hui au public, tant les salles sont exiguës.",
      "Comme on peut le constater, il s'agit d'une œuvre complexe et dépendante ; il est fort probable que la situation perdure encore longtemps, nul ne pouvant prédire comment et quand une solution satisfaisante sera enfin arrêtée."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Politique Coloniale",
    "title": "La soumission de Bou-Amama",
    "summary": "Bou-Amama, chef rebelle de l'insurrection de 1881, a sollicité le pardon des autorités françaises par l'intermédiaire de MM. Caracang et Bournier. Cette démarche pourrait faciliter la pacification du Sud-Oranais.",
    "paragraphs": [
      "On annonce officiellement que Bou-Amama, l'ancien chef de l'insurrection du Sud-Ouest algérien en 1881, est désormais décidé à faire sa soumission.",
      "Deux citoyens français, MM. Caracang et Bournier, viennent de remettre au gouverneur général de l'Algérie une lettre dans laquelle notre ancien ennemi demande formellement le pardon, l'aman.",
      "Si cette démarche de Bou-Amama s'avère sincère, il y a tout lieu de s'en féliciter, car sa soumission permettrait d'assurer durablement la pacification du Sud-Oranais et de favoriser le succès de notre œuvre de pénétration saharienne."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Chronique Littéraire",
    "title": "Livres d'étrennes",
    "summary": "La librairie Gautier et Cie propose une sélection d'ouvrages classiques pour les étrennes, incluant le Dictionnaire d'Histoire, les œuvres de Béranger et les Fleurs animées, très prisés en cette fin d'année.",
    "paragraphs": [
      "À l'approche des fêtes de fin d'année, parmi les livres d'étrennes les plus sollicités, je dois signaler l'excellence des ouvrages publiés par la librairie Gautier et Cie.",
      "Le recueil « Paris », « La ville de France », le « Dictionnaire d'Histoire, de biographie et de géographie », ainsi que les chansons de Béranger et les « Fleurs animées » figurent en bonne place parmi les titres phares de ce riche catalogue."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Sports",
    "title": "Le nouvel hippodrome de Saint-Cloud",
    "summary": "La Société d'encouragement du demi-sang prendra possession, le 15 mars prochain, de son nouvel hippodrome de Saint-Cloud. Les travaux des tribunes et des pistes sont achevés pour les courses plates et au trot.",
    "paragraphs": [
      "La Société d'encouragement du demi-sang s'installera le 15 mars prochain dans le nouvel hippodrome de Saint-Cloud, dont elle a pris bail pour une durée de trente ans.",
      "Les travaux de construction des tribunes et des pistes sont désormais quasi intégralement terminés. La Société y transférera, dès l'ouverture, toutes les épreuves de courses plates et au trot qui se tenaient jusqu'ici à Vincennes."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Échos et Nouvelles",
    "title": "Renouvellement du bureau de l'Académie de médecine",
    "summary": "Les membres de l'Académie de médecine ont procédé hier au renouvellement statutaire de leur bureau. Le professeur Guyon a été élu président à l'unanimité.",
    "paragraphs": [
      "Les membres de l'Académie de médecine ont procédé hier au renouvellement de leur bureau. M. le professeur Guyon a été élu président à l'unanimité des suffrages."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Faits Divers",
    "title": "L'exploit de Pariset",
    "summary": "Un certain Pariset, habitant de Semicey-le-Grand, prétend avoir été retenu captif en Allemagne depuis la guerre de 1870. Une affabulation manifeste qui prête à sourire.",
    "paragraphs": [
      "Un habitant de Semicey-le-Grand, nommé Pariset, prétend avoir été gardé en captivité en Allemagne depuis la guerre jusqu'à ce jour.",
      "Il est inutile d'ajouter que le récit de cet original est une simple tartarinade, aucun captif français ne demeurant plus, à cette heure, de l'autre côté du Rhin."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Faits Divers",
    "title": "Assurance contre le vol",
    "summary": "Une compagnie d'assurances londonienne utilise des méthodes commerciales agressives en adressant des circulaires alarmistes aux voisins des victimes de cambriolages récents.",
    "paragraphs": [
      "Un journal de Londres rapporte qu'une société d'assurances contre le vol a recours à une pratique singulière : elle adresse des circulaires alarmistes aux voisins des maisons récemment cambriolées, afin de les inciter à souscrire au plus vite une police d'assurance."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Faits Divers",
    "title": "Crime pour l'argent à Vieuxvy-sur-Couesnon",
    "summary": "Un crime odieux a été perpétré à Vieuxvy-sur-Couesnon. Mme Laurent, âgée de soixante-douze ans, a été retrouvée assassinée. Son mari est soupçonné de l'avoir tuée à coups de pelle pour s'emparer de son argent.",
    "paragraphs": [
      "Une femme de soixante-douze ans, Mme Laurent, a été découverte assassinée. Son mari, François Laurent, est fortement soupçonné d'avoir commis ce crime crapuleux à coups de pelle, dans le seul dessein de lui dérober son argent."
    ]
  },
  {
    "id": 36,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un domestique irascible à Dormans",
    "summary": "À Dormans, une violente dispute a éclaté entre M. Jules Parizy et son domestique, nommé Adam. Ce dernier a asséné deux coups de couteau à son maître avant de s'enfuir. La gendarmerie est à ses trousses.",
    "paragraphs": [
      "Une violente altercation a éclaté à Dormans entre M. Jules Parizy, un fermier de la localité, et son domestique, un nommé Adam. Au cours de cette dispute, l'employé, dans un accès de fureur, a porté deux coups de couteau à son maître.",
      "Aussitôt après avoir commis cette agression, le malfaiteur a pris la fuite. Les autorités locales ont immédiatement engagé des recherches pour retrouver le domestique irascible, dont le signalement a été transmis à toutes les brigades des environs."
    ]
  },
  {
    "id": 37,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drame par incendie à Veauchette",
    "summary": "Un terrible incendie a ravagé, cette nuit à Veauchette, l'habitation d'une veuve de soixante-dix ans, Mme Vande, qui a péri dans les flammes. Une enquête est ouverte pour déterminer l'origine du sinistre.",
    "paragraphs": [
      "Un sinistre incendie s'est déclaré cette nuit à Veauchette, consumant entièrement l'habitation d'une veuve âgée de soixante-dix ans, Mme Vande. Malgré la promptitude des secours, la malheureuse a péri brûlée vive dans les décombres de sa maison.",
      "Une enquête a été ouverte par le parquet pour déterminer les causes exactes du sinistre. Les autorités cherchent notamment à vérifier si une malveillance ne serait pas à l'origine de ce drame qui plonge le village dans la consternation."
    ]
  },
  {
    "id": 38,
    "page": 3,
    "category": "Faits Divers",
    "title": "Le mystère de l'homme coupé en morceaux",
    "summary": "L'enquête sur les restes humains découverts rue des Pétrières se poursuit. La police a exposé à la Morgue les objets ayant servi au transport du cadavre afin de susciter le témoignage d'un passant ou d'un marchand.",
    "paragraphs": [
      "L'affaire des restes humains découverts rue des Pétrières occupe toujours intensément les services de police. Afin de progresser dans l'identification de la victime et de ses bourreaux, les enquêteurs ont fait exposer à la Morgue les divers objets ayant servi à emballer les débris retrouvés.",
      "Les autorités espèrent qu'un témoin, un marchand ou un passant, reconnaîtra l'étoffe particulière ou la corde employée pour nouer le colis macabre. Chaque détail est scruté avec la plus grande attention par la Sûreté."
    ]
  },
  {
    "id": 39,
    "page": 3,
    "category": "Faits Divers",
    "title": "La mort de M. et Mme Tarbé des Sablons",
    "summary": "Après le décès de M. et Mme Tarbé des Sablons, le tribunal ordonne une expertise médicale approfondie. L'hypothèse d'une asphyxie accidentelle reste à confirmer, les tests sur animaux ayant été peu concluants.",
    "paragraphs": [
      "Le tribunal a ordonné le recours à plusieurs experts pour élucider les circonstances troubles entourant le décès de M. et Mme Tarbé des Sablons. La thèse privilégiée demeure celle d'une asphyxie accidentelle au monoxyde de carbone.",
      "Toutefois, les premières expérimentations menées sur des animaux ne se sont pas révélées assez concluantes pour certifier la cause du décès. Les experts poursuivent leurs travaux en laboratoire pour lever toutes les zones d'ombre sur cette triste affaire."
    ]
  },
  {
    "id": 40,
    "page": 3,
    "category": "Faits Divers",
    "title": "Pauvres enfants errants",
    "summary": "Deux jeunes orphelins bretons, fuyant la maltraitance d'une verrerie, ont été retrouvés errant à Paris. Pris en charge par les autorités, ils seront rapatriés vers leur province d'origine.",
    "paragraphs": [
      "Deux jeunes orphelins, originaires de Bretagne, ont été découverts errant dans les rues de la capitale. Fuyant les conditions de travail inhumaines et la maltraitance qu'ils subissaient dans une verrerie, ils avaient entrepris un long périple jusqu'à Paris.",
      "Recueillis, épuisés, sur un banc public, ils ont été conduits devant un commissaire de police. Les autorités ont pris les mesures nécessaires pour assurer leur protection et organiser leur prochain rapatriement vers leur région d'origine."
    ]
  },
  {
    "id": 41,
    "page": 3,
    "category": "Faits Divers",
    "title": "Grave accident à la gare de l'Est",
    "summary": "Un terrible accident de travail survient à la gare de l'Est : un mécanicien a le pied broyé par un chariot. Son collègue, Désiré Déry, succombe d'émotion peu après avoir été témoin de la scène.",
    "paragraphs": [
      "Un mécanicien a eu le pied broyé par un chariot électrique. Son collègue, M. Désiré Déry, a été si vivement impressionné par la vue de cette cruelle blessure qu'il est mort d'émotion peu d'instants après."
    ]
  },
  {
    "id": 42,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Chroniques locales",
    "summary": "La chronique de la banlieue parisienne rapporte divers faits marquants : un accident mortel à Villeneuve-la-Garenne, un suicide à Sannois, un cambriolage aux Mureaux et des arrestations à Vincennes.",
    "paragraphs": [
      "À Villeneuve-la-Garenne, un charretier a été broyé sous son tombereau. À Sannois, un vieillard s'est donné la mort par asphyxie. Aux Mureaux, un cambriolage important a été perpétré. Enfin, à Vincennes, quatre ouvriers ont été arrêtés pour le vol de pièces mécaniques."
    ]
  },
  {
    "id": 43,
    "page": 3,
    "category": "Courrier des Théâtres",
    "title": "Matinées et programmes théâtraux",
    "summary": "L'activité théâtrale bat son plein avec plusieurs matinées programmées dans les grandes salles parisiennes, tandis que l'Olympia enregistre un succès record grâce à son ballet-féerie.",
    "paragraphs": [
      "Plusieurs matinées sont prévues aujourd'hui à la Comédie-Française, à l'Opéra-Comique et au Gymnase. L'Olympia détient le record de recette avec son ballet-féerie."
    ]
  },
  {
    "id": 44,
    "page": 3,
    "category": "Sports",
    "title": "Le Critérium de l'alcool",
    "summary": "Le Moto-Club de France confirme, par les résultats de son concours, que l'alcool industriel constitue désormais une source de propulsion viable et efficace pour les automobiles.",
    "paragraphs": [
      "Le Moto-Club de France a publié les résultats de son concours de voitures automobiles fonctionnant à l'alcool industriel, démontrant que ce carburant est désormais pleinement viable pour la propulsion."
    ]
  },
  {
    "id": 45,
    "page": 4,
    "category": "Météorologie",
    "title": "La Température au 25 décembre 1899",
    "summary": "Bulletin météorologique du 25 décembre 1899 : temps brumeux, refroidissement général et état des pressions barométriques en Europe, avec un relevé thermique des stations de montagne et du littoral.",
    "paragraphs": [
      "Ciel brumeux et triste pendant toute la journée. Hier, la température fut un peu plus froide que la veille.",
      "La dépression d'Écosse passe en Norvège. Des minima se trouvent encore à l'ouest de l'Irlande, où le baromètre est en hausse, mais où le vent continue à souffler du sud à Valentia. Les fortes pressions s'inclinèrent lentement vers le sud du continent.",
      "Des pluies sont signalées sur le littoral de la Baltique, sur les îles Britanniques et en Bretagne. La température s'abaisse, excepté en Irlande. Hier matin, le thermomètre marquait 1° à Kuopio, 4° aux îles Sanguinaires et à Monaco. On notait 0° au Ventoux, au Pic du Midi, et 7° au Puy de Dôme."
    ]
  },
  {
    "id": 46,
    "page": 4,
    "category": "Navigation",
    "title": "État de la navigation fluviale au 26 décembre",
    "summary": "Relevé officiel de l'état des voies navigables sur la Seine et la Marne au 26 décembre, détaillant les écluses, ponts et barrages, de Montereau jusqu'aux secteurs parisiens.",
    "paragraphs": [
      "Haute-Seine : Pont de Seine à Montereau, écluse de Varennes, pont de Melun, pont de Corbeil, écluse de Port-à-l'Anglais.",
      "Marne : Écluse de Cumières, écluse de Châlifert, écluse de Charenton.",
      "Basse-Seine : Écluse du canal Saint-Martin, pont de la Tournelle, pont Royal, écluse de Suresnes, barrage de Bezons, pont de Mantes, écluse de Méricourt, barrage de Vinette."
    ]
  },
  {
    "id": 47,
    "page": 4,
    "category": "Feuilleton",
    "title": "Le Fruit Défendu : La Revanche de Rose-Manon",
    "summary": "Péruchot, pressé par un agent, accepte le stratagème du père Brûlot pour piéger la belle Olympe, laquelle se présente chez lui conformément aux prédictions de l'infiltré.",
    "paragraphs": [
      "Il étouffait. D'un geste violent, il desserra et arracha sa cravate, puis il alla ouvrir la fenêtre et respira. L'agent attendit que cette émotion fût calmée.",
      "« Je crois bien vous avoir fait un peu de peine, dit-il, mais je suis sûr aussi que vous m'excuserez. » Péruchot dit, la voix brève : « Oui, oui, vous avez bien fait. »",
      "Le père Brûlot raconte comment il a infiltré le cercle de la belle Olympe, en se faisant passer pour un domestique, afin de découvrir la vérité sur les relations de cette dernière avec Villaurier.",
      "Brûlot convainc Péruchot de lui donner une lettre pour Olympe afin de prouver sa loyauté, prédisant que la femme viendra le rejoindre immédiatement. Péruchot, bien que sceptique, écrit la lettre.",
      "À midi, conformément à la prédiction de Brûlot, Olympe arrive chez Péruchot. Ce dernier, malgré son trouble initial, commence à entrevoir la possibilité de la piéger dans ses aveux lors du déjeuner qui s'annonce."
    ]
  },
  {
    "id": 48,
    "page": 4,
    "category": "Sorties et Loisirs",
    "title": "Jardin Zoologique d'Acclimatation et Palais d'Hiver",
    "summary": "Programme des réjouissances pour le jeudi 27 décembre au Jardin d'Acclimatation, incluant un concert au Palmarium et la représentation de la comédie Les Plaideurs.",
    "paragraphs": [
      "Programme du concert qui sera donné le jeudi 27 décembre dans le Palmarium : Marche roumaine (Ganne), Fernande (Célestin Bourdeau), Ballade carnavalesque (Marchetti), Le Dieu et la Bayadère (Auber).",
      "À 3 heures, dans la grande salle du Palais d'Hiver : Les Plaideurs, comédie en 3 actes de Racine."
    ]
  },
  {
    "id": 49,
    "page": 4,
    "category": "Économie",
    "title": "Bulletin Commercial du 26 décembre",
    "summary": "Compte-rendu du marché parisien au 26 décembre : les transactions restent difficiles et la demande est restreinte pour les fécules, les suifs et les pommes de terre à la Halle au blé.",
    "paragraphs": [
      "Le cours officiel des suifs frais est fixé à 45 francs pour les 100 kilos hors Paris.",
      "Fécules : On cote la fécule à Paris de 24 à 25 francs pour les 100 kilos.",
      "Pommes de terre : Paris, 26 décembre. Il y avait peu de monde sur place. La demande fut restreinte. Les affaires ont été difficiles et les prix sont restés les mêmes. La magnum bonum vaut de 53 à 60 francs.",
      "Halle au blé : Peu de monde sur place et très peu d'offres en blés indigènes. Affaires très difficiles."
    ]
  },
  {
    "id": 50,
    "page": 4,
    "category": "Avis Officiels",
    "title": "Préfecture du département de la Seine - Travaux publics",
    "summary": "Avis d'adjudication publique pour des travaux de chemins vicinaux de grande communication, fixée au 24 janvier 1901 au Palais du Tribunal à Paris.",
    "paragraphs": [
      "Adjudication à Paris, au Palais du Tribunal, le jeudi 24 janvier 1901 à 1 heure. Il sera procédé, en séance publique, dans la salle du Conseil de Préfecture, à l'adjudication au rabais, sur soumissions cachetées, des travaux de chemins vicinaux de grande communication."
    ]
  }
];
