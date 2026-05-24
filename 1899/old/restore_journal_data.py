#!/usr/bin/env python3
"""
Script de restauration sémantique avancée pour journal_data.js.
Version complète pour les 37 articles du 26 Novembre 1899.
"""

import json
import re
from pathlib import Path

# --- TEXTES INTÉGRAUX RESTAURÉS POUR LES DEUX ARTICLES MAJEURS ---

EDITORIAL_PARAGRAPHS = [
    "Le projet de loi sur les modifications à apporter au fonctionnement de la justice militaire n'est pas né brusquement des circonstances et il n'est pas exagéré de dire que son enfantement a été exceptionnellement lent, car on s'en occupait sous la Restauration, il y a soixante-dix ans.",
    "En 1829, le ministre de la Guerre du roi Charles X demandait déjà que les militaires ne fussent justiciables des conseils de guerre que pour les délits militaires ; et il proposait de les poursuivre devant les tribunaux ordinaires pour les faits de droit commun.",
    "Il en donnait pour raison qu'avant d'être militaire on est homme et citoyen, soumis comme tel aux lois générales qui régissent notre pays, toutes les fois qu'il ne s'agit pas de l'obligation spéciale contractée par le fait de la présence sous les drapeaux.",
    "Cet argument a évidemment beaucoup plus de valeur encore à l'heure actuelle qu'à l'époque lointaine dont il s'agit, le service personnel obligatoire ayant établi des liens plus étroits entre l'armée et la nation.",
    "Les idées qui avaient prévalu au commencement du siècle, au milieu du fracas des batailles de la République et du premier Empire, ne sont plus celles des générations présentes ; et il semble possible, en temps de paix, sans porter une main audacieuse sur la discipline qui est une nécessité de salut public, de donner à l'armée toutes les garanties judiciaires accordées à chaque Français.",
    "Sous le Ministère de M. de Freycinet, cette question a été étudiée par le comité du contentieux que présidait un ancien garde des Sceaux, M. Guérin, dont faisaient partie des officiers généraux, des magistrats, des membres du Parlement et de hauts fonctionnaires.",
    "On avait soulevé l'objection, si on ne laissait pas aux seuls conseils de guerre la mission de juger les militaires, quoi qu'ils aient fait, qu'on pourrait ouvrir la porte à des conflits regrettables ; mais cet argument ne semble pas conforme à la réalité des choses.",
    "Actuellement, en effet, un militaire peut fort bien être entraîné devant la justice ordinaire, par exemple s'il a un complice civil, ou encore s'il est en congé.",
    "Il n'est pas exact de dire que la réforme projetée donnera lieu à des indécisions sur la juridiction, puisque c'est l'acte délictueux commis qui en décidera, et non des circonstances fortuites se produisant au cours de l'instruction et amenant brusquement à dessaisir le conseil de guerre, si on découvre la complicité d'un civil.",
    "On a dit aussi que la justice militaire est prompte et que cette rapidité rend l'exemple plus saisissant pour le soldat. Cela peut être vrai pour la répression d'un délit militaire, mais cela n'a aucune importance pour les faits de droit commun, aucun intérêt militaire n'étant en jeu.",
    "Dans le projet du général de Galliffet, les conseils de révision sont supprimés et remplacés par la Cour de cassation.",
    "On sait que maintenant il existe deux conseils de révision seulement, celui de Paris et celui d'Algérie. Cette dualité offrait un inconvénient qui saute aux yeux. Il est clair que pour juger des questions de droit, on doit craindre de voir rendre des arrêts contradictoires. Aussi avait-on parlé de créer, à Paris, une Cour militaire supérieure.",
    "Mais il paraît plus simple de soumettre toutes les interprétations du Code à la haute magistrature qui a pour mission d'être la gardienne du droit, étant bien entendu que la Cour de cassation ne s'occupera pas du fond même des affaires, mais examinera si toutes les prescriptions légales ont été observées.",
    "D'ailleurs, afin que la célérité des débats devant les conseils de guerre ne soit pas entravée par des arguties de procédure, par application à l'article 123 du Code de justice militaire, les jugements sur les exceptions ou incidents soulevés au cours des débats devant le conseil de guerre ne pourront être déférés à la Cour de cassation qu'après que la décision aura été rendue sur le fond.",
    "Une innovation très bonne est la faculté d'accorder des circonstances atténuantes en temps de paix.",
    "Le législateur du Code de 1857 pensait au contraire, qu'il fallait enlever au soldat tout espoir d'indulgence ; mais des faits nombreux ont montré qu'il y avait là une fausse appréciation de l'état d'esprit des juges.",
    "Que l'on soit militaire ou non, on subit les idées de son temps, de même qu'on en respire l'air. Il n'est pas douteux que, depuis un demi-siècle, la préoccupation constante de l'humanité est de se montrer moins implacable, d'user de plus d'indulgence envers les égarés, de favoriser le repentir des coupables.",
    "Souvent des acquittements de nature à troubler la conscience ont eu lieu, parce que le juge militaire ne pouvait pas graduer la peine, suivant le degré de perversité de l'accusé.",
    "Mais, naturellement, cette réforme ne peut s'appliquer qu'au temps de paix ; car à la guerre, tout serait une circumstance atténuante, et cependant la sécurité de tous ordonne de n'excuser aucune défaillance, car la moindre peut mettre en péril l'armée.",
    "Certes le factionnaire écrasé de fatigue qui s'endort est excusable et néanmoins on ne peut pas l'excuser, en vertu de ce principe d'airain que tout doit s'effacer en présence de la gravité du danger que son sommeil fait courir.",
    "Quiconque a fait partie d'un conseil de guerre approuvera le vote au scrutin secret demandé par le projet de loi.",
    "Il est stipulé jusqu'à présent, en effet, que les votes sont recueillis à haute voix en commençant par le grade inférieur, le président parlant le dernier ; mais il y a deux inconvénients à ce mode.",
    "D'abord, la liberté du juge n'est pas complète. Celui qui vote le premier, sous le regard de ses chefs, n'a qu'une indépendance apparente, et il lui faut une vraie force d'âme pour ne pas se conformer à l'opinion de son colonel, par exemple, dont il a facilement découvert l'avis pendant les débats ou pendant la délibération.",
    "En second lieu, ce vote public donne au président un pouvoir supérieur à celui que la loi lui confère. Légalement il est ce que les anciens appelaient le premier entre les égaux. Par le fait de parler le dernier en sachant ce qu'ont dit les autres, il peut corriger souvent leurs décisions, en modifiant la sienne.",
    "Par suite d'un raisonnement tout fait militaire, le projet de loi contient une clause toute spéciale, pour le cas où des circonstances atténuantes seraient accordées dans une affaire entraînant la peine de mort.",
    "Il se peut que le crime commis ne soit pas infamant, et il convient d'éviter au condamné la flétrissure du bagne.",
    "Dans les travaux de la commission extraparlementaire, on s'était occupé de la faculté accordée par le Code d'instruction criminelle de mise en liberté provisoire d'un accusé, et on s'était demandé s'il convenait d'étendre cette autorisation à la justice militaire.",
    "Le gouvernement ne l'a pas pensé, et le projet soumis au Parlement n'en fait aucune mention, avec raison, parce que cette idée rencontrerait de sérieuses difficultés d'exécution pratique.",
    "S'agirait-il d'un officier ou même d'un simple gradé, comment ce supérieur, se trouvant sous le coup d'une poursuite judiciaire, pourrait-il exercer quelque autorité sur ses subordonnés ?",
    "Pour un simple soldat, la situation serait tout aussi fausse. Le voit-on au milieu de ses camarades portés à le regarder comme atteint par avance d'une flétrissure ? En face des sous-officiers et des caporaux, il devrait s'attendre à une malveillance à peine dissimulée et pour la moindre chose il serait puni, en sa qualité de suspect.",
    "Il semble que le même raisonnement peut s'appliquer à la loi de sursis, appelée généralement du nom de son auteur, M. Bérenger. Un homme frappé par une condamnation ne peut pas rester au milieu de ses frères d'armes. La seule solution pratique, et elle se présente souvent, se trouve dans les mains du haut commandement qui remplace l'envoi devant le conseil de guerre par une punition disciplinaire quand il apprécie, dans sa sollicitude, que l'indulgence est possible.",
    "Ce qui frappera peut-être le plus l'opinion publique et ne saurait être trop approuvé dans la réforme proposée, c'est la création d'un corps spécial possédant des connaissances juridiques complètes.",
    "Cela existe, d'ailleurs, depuis longtemps à l'étranger. En Autriche, ce corps est recruté parmi les jeunes officiers qui ont fait preuve de connaissances juridiques et accompli un stage dans les tribunaux. En Italie et en Allemagne, on prend des lauréats ou des docteurs en droit.",
    "En ce moment, en France, les rapporteurs et les commissaires du gouvernement près les conseils de guerre sont des hommes respectables, ayant renoncé à toute ambition et bornant leurs rêves à exercer paisiblement un emploi pacifique. Leur droiture est certaine, leurs consciences sont scrupuleuses mais leur compétence est presque nulle, dès qu'il s'agit d'une question délicate.",
    "Ces postes importants ne sont sollicités que par des officiers de second plan, souvent âgés, qui les obtiennent à l'époque de la vie où l'on a de la peine à acquérir des connaissances nouvelles.",
    "La création d'un corps spécial, recruté au concours, après un examen de droit parmi les capitaines de l'armée, comme cela se pratique pour l'intendance, remédiera aux inconvénients que tout le monde a pu constater.",
    "Enfin, ces nouveaux commissaires et rapporteurs, quoique devant jouir à juste titre de l'état d'officier, ce qui paraît nécessaire, n'auront pas d'assimilation de grade. On ne sera donc pas obligé de les changer, suivant la qualité de l'accusé.",
    "Si cet ensemble de mesures ne forme pas la refonte complète de notre Code de justice militaire, œuvre longue, dont on ne voit pas la fin à bref délai, il marque un progrès sensible dans le sens des idées démocratiques.",
    "JEAN FROLLO"
]

FEUILLETON_PARAGRAPHS = [
    "Colette, douce et bienfaisante comme une sœur de charité, lui avait fait sa toilette, avait arrangé sur ce front de pauvresse et de vagabonde de lourds et admirables cheveux blonds. Elle avait envoyé l'aubergiste à cheval chercher le médecin du château.",
    "Jeannette avait le délire, et alors, parfois regardait cette étrangère, près de son lit, avec le regard éperdu de deux yeux bleus si larges, si beaux, si purs, que la charmeuse sentit son cœur profondément troublé par tant d'abandon et par tant de misère. Et pourtant, quand le médecin arriva, la mendiante était plus calme. Elle dormait. Le docteur l'ausculta. Elle ne se réveilla point.",
    "Colette revint le lendemain, de bon matin ; elle revint aussi le même soir. L'absence du marquis de Vivarez la rendait plus libre. Au bout de cinq ou six jours, Jeannette n'avait plus de fièvre. Le râle sourd de sa poitrine allait diminuant. La respiration était plus libre.",
    "Et pour la première fois, un soir, se soulevant sur son lit, elle examina Colette avec surprise, avec une attention soutenue. L'intelligence revenait, vive, entière, et les yeux bleus avaient une douceur infinie, déjà le sérieux de la jeune fille, avec je ne sais quelle expression lointaine qui était encore comme un charme de l'enfance.",
    "— Je ne sais pas qui vous êtes, mademoiselle, dit Jeannette, mais c'est vous qui avez soigné, qui avez sauvé la pauvre petite mendiante. Je souhaite qu'un jour la mendiante puisse vous prouver qu'elle n'est pas une ingrate. Et, si je pouvais faire un vœu, ce serait de donner ma vie pour vous. Elle prit doucement la main de Colette et l'embrassa en pleurant.",
    "Une intimité s'établissait entre elles, et Colette ne pouvait s'empêcher de prendre intérêt à cette enfant restée, comme par miracle, naïve et pure au milieu des hasards de sa vie aventureuse. Colette l'interrogea sur cette vie, quand elle fut certaine qu'elle pouvait le faire sans la fatiguer. Jeannette répondit docilement.",
    "But la charmeuse, tout à coup, fut surprise lorsque la petite, en finissant son histoire, ajouta : — Ce n'est pas la première fois que nous parcourons la Vendée, et c'est la seconde fois en un an que nous nous arrêtons dans le pays que vous habitez, mademoiselle. — À quelle époque y êtes-vous venus pour la première fois ? — L'an dernier, au moment de la fête de Clisson.",
    "Sans savoir pourquoi, Colette éprouva une vague surprise, presque une secousse. N'était-ce pas pourtant bien simple que ces petits ambulants se fussent trouvés à la fête ? Mais Colette, un peu superstitieuse, devinait dans cette coïncidence plus que le hasard, peut-être une intervention invisible et toute-puissante qui se lassait enfin de voir le malheur s'abattre sur des têtes innocentes.",
    "— Il y avait longtemps que vous étiez avec ces saltimbanques ? — Depuis deux mois à peine. — Et combien de jours êtes-vous restés à Clisson ? — Le dimanche et le lundi. — Cependant la fête a duré presque toute la semaine. — Nous nous sommes fâchés avec nos maîtres. — Pourquoi ?",
    "Jeannette parut embarrassée. Elle fut quelques secondes sans répondre, regardant l'institutrice comme si elle avait eu l'envie de parler et comme si quelque chose l'en eût retenue : — Nous nous sommes fâchés parce qu'ils nous battaient... Mais, en disant cela, elle avait baissé les yeux et Colette crut comprendre que la petite mendiante ne disait pas toute la vérité.",
    "Colette fut longtemps songeuse. « Cette fête de village », dit-elle, « marque le point de départ de catastrophes au milieu desquelles a sombré l'honneur d'une famille ». La voix de Jeannette trembla lorsqu'elle demande : — De quoi voulez-vous parler, mademoiselle ? — D'un crime qui fut commis ce jour-là et d'un innocent qui expie encore, en dépit de son acquittement, le crime d'un autre. — Vous parlez de Girodias ?",
    "Colette fit un brusque mouvement : — Comment le savez-vous ? Qui vous a si bien renseignée ? — N'étions-nous pas au village le jour du crime ? Tout le village l'apprit le soir même. — C'est vrai. Malgré tout, Colette regardait la mendiante avec une certaine défiance, surprise de cette gêne étrange qui avait succédé à sa première expansion : — Et sur ce meurtre, mon enfant, ne savez-vous rien ?",
    "Toujours les yeux baissés, l'enfant dit : — Rien. — Car, si vous saviez quelque chose, votre devoir eût été de le dire. L'homme qui fut tué ne vous était de rien ? — En effet. — Mais l'homme innocent de ce meurtre et qui en fut accusé, le connaissez-vous donc ? — Oui. — Il est de votre famille ? Ou bien est-il un étranger pour vous ? — Qu'importe ! Jeannette hocha la tête et dit : — Qu'importe, en effet, puisque je ne sais rien. Et elle se laissa retomber, fatiguée, sur l'oreiller et ferma les paupières.",
    "Mais Colette se disait en la quittant : « Cette pauvre petite ne m'a pas tout dit. Comment faire pour la décider à parler ? »",
    "Lantur et Lanturlu, la harpe et le violon étaient toujours absents, par monts et par vaux, lors des visites de Colette. Ils ne rentraient que le soir, harassés de fatigue ; ils avaient à peine la force de manger et allaient s'étendre tout de suite au grenier sur le foin. Colette ne les voyait donc jamais.",
    "Le dimanche suivant, toutefois, c'est-à-dire deux jours après la scène que nous venons de raconter, ils rentrèrent tout à coup, au milieu de l'après-midi, pâles, les yeux pleins de larmes et pleins de colère aussi. Colette se trouvait encore dans la chambre de la malade. Celle-ci, en voyant ses deux compagnons, comprit qu'il s'était passé quelque chose de grave.",
    "Elle se levait, ce jour-là, pour la première fois. Assise dans un fauteuil de bois, rembourré d'oreillers pour la circonstance, elle aspirait à pleins poumons, par la fenêtre ouverte, ce gai soleil printanier, ces premiers rayons de douce chaleur qui réveillent la campagne endormie et font s'égosiller tous les petits oiseaux chanteurs. En voyant les larmes de Gilbert et de Lucien, leurs lèvres frémissantes, le tremblement de leurs mains, elle s'écria : — Qu'est-il arrivé ?",
    "Ils éclatèrent en sanglots. Colette s'approcha d'eux : — Les pauvres enfants... déguenillés... pourquoi vous pleurez ? Ce fut Gilbert, le plus âgé, qui prit la parole, toujours sanglotant : — Il y a, mademoiselle, il y a, Jeannette, que ce pays-ci est un pays maudit pour nous et que maintenant il ne nous reste plus qu'à mourir de faim !",
    "— Expliquez-vous. Il s'expliqua difficilement, car les larmes redoublaient, ma > Colette, attentive, et Jeannette comprirent l'une et l'autre : ils étaient partis comme d'habitude le matin, de bonne heure, Gilbert avec son violon et Lucien portant sa harpe. C'était dimanche, la recette avait été bonne ; ils avaient récolté quelques sous.",
    "A midi, comme il faisait beau, ils s'assirent au coin d'un bois, mangèrent un morceau de pain, burent une gorgée d'eau à une source, et, engourdis par ce soleil, s'endormirent côte à côte en se tenant par la main. Lucien avait appuyé sa harpe le long d'un arbre et le violon reposait au pied. Ils ne dormaient pas depuis une demi-heure lorsqu'ils furent réveillés en sursaut, poussant un cri de terreur.",
    "Un homme était là, déguenillé, ivre, jurant et chantant, qui brisait à coups de talon, avec une joie féroce et bête, le violon de Gilbert, devenu un amas de débris, et la harpe de Lucien, qui, sous chacun des coups, rendait des sons tristes et plaintifs, comme si elle avait souffert vraiment et comme si elle avait été douée d'une âme. La harpe et le violon n'existaient plus."
]


def restore_data():
    base_dir = Path(__file__).parent
    js_path = base_dir / "output" / "journal_data.js"
    
    if not js_path.exists():
        print(f"Erreur : le fichier {js_path} n'existe pas.")
        return
        
    # Lire le fichier JS
    content = js_path.read_text(encoding="utf-8")
    
    # Extraire le JSON propre
    parts = content.split("const JOURNAL_ARTICLES = ")
    if len(parts) < 2:
        print("Erreur : Impossible de trouver la variable JOURNAL_ARTICLES.")
        return
    json_str = parts[1].strip().rstrip(";")
    articles = json.loads(json_str)
    
    print(f"Lancement de la restauration sur les {len(articles)} articles...")
    
    # Dictionnaire de corrections sémantiques ciblées par article
    for art in articles:
        title = art["title"]
        category = art["category"]
        art_id = art["id"]
        
        # --- 1. CAS PARTICULIER : L'ÉDITORIAL (Jean Frollo) ---
        if category == "Éditorial (Jean Frollo)":
            art["paragraphs"] = EDITORIAL_PARAGRAPHS
            print(f"Article {art_id} [Éditorial] entièrement restauré.")
            continue
            
        # --- 2. CAS PARTICULIER : LE FEUILLETON ---
        if "Feuilleton" in title and art_id == 2:
            art["paragraphs"] = FEUILLETON_PARAGRAPHS
            print(f"Article {art_id} [Feuilleton] entièrement restauré.")
            continue

        # --- 3. NETTOYAGE ET DÉMÊLAGE DES AUTRES ARTICLES ---
        cleaned_paras = []
        skip_feuilleton_count = 0
        
        # Détection des paragraphes parasites du Feuilleton
        feuilleton_keywords = [
            "colette", "jeannette", "lantur", "lanturlu", "lucien", "gilbert", 
            "girodias", "vivarez", "mendiante", "saltimbanques", "clisson", "clissou", 
            "la harpe", "le violon", "ne sais rien", "retomber, fatiguée", "retombée, fatiguée",
            "pauvre petite", "la chambre de la malade", "quest-il arrivé", "quest-il arrlvé",
            "éclatèrent en sanglots", "sanglotant", "mon morceau de pain", "fête de village",
            "voulez-vous parler", "voulez-voua parler", "un innocent qui expie", "si bien renseignée",
            "apprit le soir même", "sur ce meurtre", "les yeux baissés", "votre devoir eût été",
            "innocent de ce meurtre", "étranger pour vous", "décider à parler", "rentraient que le soir",
            "gre nier", "deux jours après la scène", "deux compagnons", "soleil priutanier",
            "petitoiseaux", "fauteuil de bois", "je ne sais rien", "laisser retomber", "pour la première fois",
            "le connaissez- vous donc", "le connaissez-vous donc"
        ]
        
        for idx_p, p in enumerate(art["paragraphs"]):
            p_clean = p.strip()
            
            # A. Filtrer le bruit des tableaux financiers (Bourse) égarés
            if "Banq.franç." in p_clean or "SSOl.ïHO" in p_clean or "S& Ti du Portugal" in p_clean or "Lombard" in p_clean:
                continue
            if len(p_clean) < 25 and ("g::" in p_clean or "Z ?" in p_clean or "SSSSS" in p_clean):
                continue
                
            # B. Filtrer les dialogues courts du Feuilleton
            if len(p_clean) < 40 and p_clean.strip("? .!«»-").lower() in [
                "oui", "rien", "qu'importe", "pourquoi", "c'est vrai", "comment", 
                "en effet", "non", "chacun", "repu", "nuii", "ma >"
            ]:
                skip_feuilleton_count += 1
                continue
                
            # C. Filtrer les paragraphes entiers du Feuilleton incrustés
            is_f_para = False
            p_lower = p_clean.lower()
            for kw in feuilleton_keywords:
                if kw in p_lower:
                    is_f_para = True
                    break
            
            if is_f_para:
                skip_feuilleton_count += 1
                continue
                
            # D. Démêler sémantiquement les paragraphes mixtes spécifiques
            # Article 5 : Convention Commerciale Franco-Américaine (Spécifique)
            if art_id == 5:
                if "Sénat américain" in p_clean and "ehannease" in p_clean:
                    p_clean = (
                        "Le ministre des Affaires étrangères a déclaré que, suivant l'usage pratiqué dans les pays parlementaires, "
                        "il saisirait le Parlement de cette convention le jour même où en sera saisi le Sénat américain, convoqué pour le 4 décembre."
                    )
                elif "Bulletin officiel" in p_clean and "douanières" in p_clean:
                    p_clean = (
                        "En réponse à diverses questions, M. Delcassé a ajouté que les modifications douanières proposées pour les "
                        "tarifs français ou américains avaient déjà été publiées dans le Bulletin officiel du commerce, mais qu'il ne "
                        "pouvait pas s'expliquer sur les autres situations diplomatiques avant le dépôt de la convention elle-même."
                    )
            
            # Article 8 : Le Discours de M. Delcassé (Spécifique)
            if art_id == 8:
                if "poing tendu" in p_clean and "petite mendiante" in p_clean:
                    p_clean = (
                        "Mais le point tout spécialement saillant de l'exposé de M. Delcassé, c'est la définition si nette, si juste "
                        "et si pleine de sens qu'il a formulée de la politique nécessaire. Répudiant l'impatience des uns, l'esprit "
                        "agressif des autres, ce système du poing tendu qui correspond si peu aux aspirations de la"
                    )
                elif "existence nationale" in p_clean and "agrandissements" in p_clean:
                    p_clean = (
                        "France, le ministre des Affaires étrangères a déclaré que les conditions mêmes de l'existence nationale "
                        "nous interdisaient des agrandissements continus, une expansion coloniale peut-être d'une belle apparence sur "
                        "le papier mais forcément illogique et dispendieuse."
                    )
                    
            # Article 19 : Madagascar (Spécifique - ID mis à jour de 18 à 19 !)
            if art_id == 19:
                if "Mahoba" in p_clean and "s'atta3 J" in p_clean:
                    p_clean = (
                        "Les reines de Mahoba et de Mandabé-Manza sont complètement à notre disposition "
                        "et s'attachent à nous soumettre les chefs rebelles de la région de Vassy."
                    )
            
            # E. Remplacements et corrections typographiques robustes à base de mots
            replacements_direct = [
                ("dfteg-nci&s", "déguenillés"),
                ("ir, plus igé", "le plus âgé"),
                ("uout", "nous"),
                ("tnainteuant", "maintenant"),
                ("qu i ", "qu'à "),
                ("bonne rwure", "bonne heure"),
                ("s'asalrent", "s'assirent"),
                ("uguurdis parce", "engourdis par ce"),
                ("l/imlns. novembre On W B O8 iUTj' t", ""),
                ("e uElesti", "et étaient"),
                ("oblicés de rogagnet", "obligés de regagner"),
                ("hr.r, -ut", "en buvant"),
                ("l ins tituttice", "l'institutrice"),
                ("réooadit", "répondit"),
                ("guelques", "quelques"),
                ("retenut", "retenu"),
                ("disco'ur iprea", "discours après"),
                ("perj^iuei -le", "perpétuel de"),
                ("lA.adûtnie", "l'Académie"),
                ("Ni Wàldeck-Housseau", "M. Waldeck-Rousseau"),
                ("rtuCommeroo", "du Commerce"),
                ("Ni. Lucipia", "M. Lucipia"),
                ("Ni. Oust", "M. Casimir"),
                ("Gr&ird", "Gréard"),
                ("dovètts", "doyens"),
                ("Ni. ravisse", "M. Lavisse"),
                ("t'ec.ilenient", "également"),
                ("trente-ne nI", "trente-neuf"),
                ("quar&nto-deux", "quarante-deux"),
                ("ta ven&e", "la vengeance"),
                ("Basses-Pyçénées", "Basses-Pyrénées"),
                ("déeédée", "décédés"),
                ("Hallé$oien", "Halgan"),
                ("d'Electeur", "d'Électeurs"),
                ("t'effet", "l'effet"),
                ("Sor bonim", "Sorbonne"),
                ("thoAtres", "théâtres"),
                ("aurluet", "auquel"),
                ("pubiijt", "publics"),
                ("cnmpnrtent", "comportent"),
                ("rnnséiMitivw", "consécutives"),
                ("rnant", "durant"),
                ("fw-rvice", "service"),
                ("ré<: riode", "période"),
                ("juatorie", "quatorze"),
                ("nuîtsconsécu", "nuits consécutives"),
                ("ansqueson", "sans que son"),
                ("c\c-éder", "excéder"),
                ("de fa Chauv", "de la Chambre")
            ]
            
            for old, new in replacements_direct:
                p_clean = p_clean.replace(old, new)
                
            replacements_regex = [
                (r"\blournal\b", "Journal"),
                (r"\bt'Orne\b", "l'Orne"),
                (r"\bje la Haute\b", "de la Haute"),
                (r"\bde la Saine\b", "de la Seine"),
                (r"\bHa,ute-Saône\b", "Haute-Saône"),
                (r"\bSaôneet-Loire\b", "Saône-et-Loire"),
                (r"\bla-Sarthe\b", "la Sarthe"),
                (r"\bcntln\b", "enfin"),
                (r"\biprea\b", "après"),
                (r"\barrëté\b", "arrêté"),
                (r"\bd<;\b", "de"),
                (r"\brhacun\b", "chacun"),
                (r"\brepu\b", "repos"),
                (r"\bUans\b", "Dans"),
                (r"\bgarPa\b", "gares"),
                (r"\bnuii\b", "nuits"),
                (r"\bjusyu'à\b", "jusqu'à"),
                (r"\baèrent\b", "agents"),
                (r"\bLouia\b", "Louis"),
                (r"\bS.gô\b", "âgé"),
                (r"\bLassassin\b", "L'assassin"),
                (r"\bL'n nommé\b", "Un nommé"),
                (r"\bprétet\b", "préfet"),
                (r"\bje la\b", "de la")
            ]
            
            for pattern, repl in replacements_regex:
                p_clean = re.sub(pattern, repl, p_clean, flags=re.IGNORECASE)
            
            p_clean = re.sub(r'\s+', ' ', p_clean).strip()
            
            if p_clean:
                cleaned_paras.append(p_clean)
                
        if skip_feuilleton_count > 0:
            print(f"Article {art_id} [{title}] : {skip_feuilleton_count} paragraphe(s) de feuilleton supprimé(s).")
            
        art["paragraphs"] = cleaned_paras
        
        # --- 4. RÉGÉNÉRATION DYNAMIQUE DU RÉSUMÉ ---
        full_text = " ".join(art["paragraphs"])
        summary = ""
        sentences = re.split(r'(?<=[.!?])\s+', full_text)
        for s in sentences:
            if len(summary) < 220:
                summary += (" " if summary else "") + s.strip()
            else:
                break
        if not summary.endswith("."):
            summary += "..."
        art["summary"] = summary

    # Écrire les données nettoyées
    js_content = f"// Base de données complète des articles de presse du 26 Novembre 1899 (Version Restaurée, 37 articles)\n"
    js_content += f"const JOURNAL_ARTICLES = {json.dumps(articles, ensure_ascii=False, indent=2)};\n"
    
    js_path.write_text(js_content, encoding="utf-8")
    print(f"\nRestauration terminée et enregistrée avec succès dans {js_path.name} !")

if __name__ == '__main__':
    restore_data()
