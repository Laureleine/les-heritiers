// src/version.js

export const VERSION_HISTORY = [
  {
    version: '15.19.4 - "Le Sceau de l\'Architecte 🛡️"',
    date: '17 Mai 2026',
    description: 'Le Super Admin peut enfin restaurer durablement le Plancher de Verre : le Sceau d\'Architecte perce le voile du RLS, et le Scribe vérifie que l\'écriture tienne.',
    changes: [
      '🛡️ **RLS — Le Sceau de l\'Architecte perce le voile :** Nouvelle politique de sécurité (`Super admin can update all characters`) permettant au Super Admin de modifier les personnages de tous les Héritiers. Une fonction `get_user_role()` lit le rôle depuis le Grand Livre des Profils. Trois politiques couvrent UPDATE, DELETE et SELECT.',
      '🔧 **Onglet Réparation — Le Scribe vérifie son encre :** `executeRestoreFloor` et `executeRepair` utilisent désormais `.select(\'id\')` après chaque `.update()` pour s\'assurer que l\'écriture a bien touché le parchemin. Si le RLS bloque (0 lignes affectées), une erreur explicite « Aucune ligne modifiée » est levée au lieu d\'un silence trompeur.',
      '🧪 **7 nouvelles Sentinelles montent la garde :** Tests unitaires (chaîne update + select("id"), détection RLS bloqué) et tests d\'intégration (rendu, badges « Sans plancher », compteurs). 224 sentinelles veillent désormais.',
      '📜 **Procédure /version enrichie (étape 7) :** Un REX de session est désormais rédigé dans `REX.md` à chaque livraison, pour graver les leçons dans le marbre.',
    ]
  },
  {
    version: '15.19.2 - "Le Plancher sous le Sceau 🏗️"',
    date: '16 Mai 2026',
    description: 'Le Plancher de Verre n\'est plus un songe : les Héritiers scellés conservent désormais leur socle dans la Base de Données. Adieu le « Sans plancher ».',
    changes: [
      '🏗️ **Fix — Le Plancher enfin gravé dans le marbre :** Quand on apposait le Sceau, la sauvegarde partait bien vers Supabase… mais sans le socle scellé (`stats_scellees`). Le Plancher de Verre — caractéristiques, atouts, compétences, fortune, pouvoirs au moment du scellement — n\'était posé qu\'en mémoire locale. Résultat : au rechargement, Aristide Robelin et ses pairs apparaissaient « Sans plancher ». Cause racine : `executeSeal()` appelait `saveCharacterToSupabase` avant que `SEAL_CHARACTER` n\'ait figé le snapshot. Corrigé — le socle est désormais construit atomiquement avant la sauvegarde, et le Plancher est persistant dès l\'apposition du Sceau.',
      '🧪 **172 Sentinelles toujours en faction :** La Vigie du Code veille. Aucune sentinelle n\'a été blessée durant cette opération.',
    ]
  },
  {
    version: '15.19.1 - "Le Sceau Réparé 🔐"',
    date: '16 Mai 2026',
    description: 'Le Sceau d\'Aristide Robelin n\'est plus un vœu pieux : la sauvegarde vers Supabase précède désormais le verrouillage. 172 Sentinelles Automates montent la garde.',
    changes: [
      '🔐 **Fix Sceau — Aristide Robelin enfin protégé :** Quand on apposait le Sceau, le personnage passait bien en "scellé" en mémoire… mais la sauvegarde vers Supabase n\'était jamais déclenchée. Résultat : au prochain rechargement, le sceau s\'évanouissait comme une illusion. Cause racine : `executeSeal()` dispatchait `SEAL_CHARACTER` sans appeler `saveCharacterToSupabase`. Corrigé — la sauvegarde est désormais atomique et le Sceau est persistant.',
      '🧪 **172 Sentinelles Automates (Tests) :** La Vigie du Code compte désormais 172 gardiens (contre 167 précédemment). 5 nouvelles sentinelles veillent sur le mécanisme de scellement : validation pré-scellement, rejet des personnages temporaires (`temp_`), sauvegarde réussie, échec réseau avec fallback local, et mise à jour d\'identifiant.',
      '📦 **Couverture des Hooks :** Première vague de tests pour les Crochets Magiques (`useCerbere`) — les interactions entre le Cerveau Central, les notifications et la Base de Données sont désormais sous surveillance.',
    ]
  },
  {
    version: '15.18.3 - "La Lettre Scellée 📨"',
    date: '16 Mai 2026',
    description: 'Le système de notifications de mises à jour est pleinement opérationnel : emails envoyés via Mailjet, template redesigné, et corrections de parcours.',
    changes: [
      '📨 **Notifications opérationnelles :** Les emails de mise à jour partent réellement. Le blocage venait de clés Mailjet incorrectes côté serveur — corrigé.',
      '🎨 **Nouveau template email :** Mise en page responsive avec en-tête dégradé, bloc version en vert, changelog en liste propre. Les balises markdown (`**`, backticks) sont converties en HTML.',
      '🔐 **Auth Edge Function simplifiée :** La vérification JWT (`verify_jwt`) est incompatible avec les nouvelles clés `sb_publishable_` (ES256). Remplacée par une vérification de la clé anon côté fonction.',
    ]
  },
  {
    version: '15.18.2 - "Le Facteur des Ombres 📬"',
    date: '16 Mai 2026',
    description: 'L\'envoi d\'emails de notification passe par Gmail SMTP — aucun service tiers ni domaine personnalisé requis.',
    changes: [
      '📬 **Envoi d\'emails via Gmail :** La Edge Function abandonne Resend (qui exigeait un domaine vérifié) au profit de Gmail SMTP via nodemailer. Les notifications partent désormais depuis `azghal.les.heritiers@gmail.com`, sans aucun abonnement payant ni domaine à configurer.',
    ]
  },
  {
    version: '15.18.1 - "Le Recenseur Fidèle 📊"',
    date: '16 Mai 2026',
    description: 'Le système de notifications de mises à jour est désormais pleinement opérationnel : envoi d\'emails réels via Resend, onglet admin dédié, et statistiques d\'abonnement corrigées.',
    changes: [
      '📧 **Système d\'emails opérationnel :** L\'Edge Function `send-email` est déployée sur Supabase et utilise Resend pour l\'envoi réel. Seul le super_admin peut la déclencher. L\'URL de l\'application dans les emails et l\'endpoint appelé par le frontend étaient des placeholders — corrigés.',
      '🔔 **Onglet Notifications dans l\'admin :** Un nouvel onglet (super_admin uniquement) centralise les statistiques d\'abonnement, un formulaire d\'envoi avec détection majeure/mineure, et l\'historique des notifications envoyées.',
      '🐛 **Fix — `getVersionType()` :** La fonction retournait toujours "mineure" à cause d\'indices de tableau incorrects. Corrigé : une version en `.0` est désormais classée majeure, les autres mineures.',
      '📊 **Fix — Statistiques d\'abonnement :** Le panneau affichait "1 abonné" au lieu des vrais chiffres (6 abonnés réels). Le RLS bloquait la lecture — corrigé via une fonction SQL SECURITY DEFINER.',
    ]
  },
  {
    version: '15.18.0 - "Le Veilleur des Portes 🔐"',
    date: '16 Mai 2026',
    description: 'Audit de sécurité complet : les portes du Registre de la Forge et des Profils sont désormais gardées. Les artefacts de débogage ont été retirés des archives publiques.',
    changes: [
      '🔐 **RLS renforcé sur le Registre de la Forge :** Les entrées masquées et les missives réservées aux Initiés ne sont plus lisibles par les Héritiers non qualifiés — ni par les visiteurs anonymes. Les Gardiens et Super Admins conservent une vision complète.',
      '🔐 **RLS renforcé sur les Profils :** La lecture publique (sans authentification) a été révoquée. Seuls les Héritiers connectés peuvent consulter les profils.',
      '🛡️ **Contrôle de rôle côté application :** Les actions de rejet, d\'archivage et de restriction aux Initiés vérifient désormais explicitement que l\'opérateur est Gardien ou Super Admin avant d\'agir.',
      '🧹 **Nettoyage des traces de débogage :** Les empreintes de la clé API, l\'exposition globale du client Supabase (`window.__supabase__`), la purge automatique du localStorage en développement et une vingtaine de `console.log` intempestifs ont été supprimés.',
      '⚠️ **Alerte sauvegarde hors-ligne :** L\'application signale désormais explicitement quand une sauvegarde a échoué côté serveur et n\'existe qu\'en cache local — au lieu d\'afficher un faux succès.',
      '🔗 **URL de notification corrigée :** L\'endpoint d\'envoi d\'emails pointait vers un placeholder non résolu — il lit désormais la variable d\'environnement `REACT_APP_SUPABASE_URL`.',
    ]
  },
  {
    version: '15.17.9 - "Le Cabinet des Merveilles 📦"',
    date: '16 Mai 2026',
    description: 'Les Grimoires s\'enrichissent d\'un troisième registre : les Trésors & Possessions, alimentés directement depuis les achats de la Vie Sociale. Les doublons sont effacés, les badges intempestifs disparaissent.',
    changes: [
      '📦 **Trésors & Possessions (Nouveau) :** Un troisième onglet fait son entrée dans le Grimoire Personnel. Chaque objet acheté dans la Vie Sociale — arme ancestrale, fiacre personnel, bibliothèque occulte — y est désormais consigné automatiquement à la sauvegarde. Les 433 possessions des Héritiers existants ont été rétroactivement archivées.',
      '🔄 **Synchronisation en temps réel :** Acheter ou retirer un objet dans la Vie Sociale met à jour le Grimoire à la prochaine sauvegarde, sans doublon ni perte. La mécanique est identique à celle des Contacts.',
      '🧹 **Assainissement des Grimoires :** 210 contacts en double ont été supprimés. Un bug du contrôle anti-doublon (lecture du mauvais champ) était la cause — corrigé définitivement.',
      '🏷️ **Suppression du badge "Partagé par le Cercle" :** Cette mention apparaissait par erreur sur toutes les entrées des Grimoires consultés en mode Admin. Le Grimoire d\'un Héritier vous appartient — inutile de vous le rappeler à chaque ligne.',
    ]
  },
  {
    version: '15.17.8 - "L\'Œil Omniscient 👁️"',
    date: '15 Mai 2026',
    description: 'Le Super Admin accède à tous les Grimoires, les contacts s\'inscrivent automatiquement, et les entrées sont modifiables.',
    changes: [
      '👁️ **Vision du Super Admin :** Les administrateurs peuvent désormais consulter l\'intégralité des Grimoires Personnels de tous les Héritiers, sans restriction de propriété. L\'icône 📖 apparaît sur les cartes des autres joueurs (onglets Publics et Admin).',
      '📓 **Synchronisation Contacts → Grimoire :** Les contacts achetés dans la Vie Sociale sont automatiquement inscrits dans le Grimoire Personnel à la sauvegarde du personnage. Un système de file d\'attente évite les doublons et s\'efface si le joueur quitte sans sauvegarder.',
      '✏️ **Édition & Suppression des entrées :** Chaque note et contact du Grimoire peut désormais être modifié ou supprimé. Une confirmation est demandée, avec avertissement spécial pour les contacts liés à un achat de la Vie Sociale.',
    ]
  },
  {
    version: '15.17.7 - "La Fortune des Métiers 💰"',
    date: '15 Mai 2026',
    description: 'Les fiches de métiers de l\'Encyclopédie révèlent désormais leur influence sur la Fortune des Héritiers.',
    changes: [
      '💰 **Fortune visible dans l\'Encyclopédie :** Les fiches de métiers affichent désormais leur impact sur la Fortune — rang de base pour les métiers principaux, bonus pour les métiers secondaires. Ces informations apparaissent sous forme de badges élégants dans la vue détaillée.',
      '👑 **Distinction Principal / Secondaire :** Le formulaire d\'édition des métiers propose un sélecteur clair entre "Métier Principal" (qui définit un rang de Fortune de base) et "Métier Secondaire" (qui accorde un bonus à la Fortune existante).',
      '🔧 **Fix — Sauvegarde des champs Fortune :** Les modifications de `fortune_score`, `fortune_bonus` et `is_secondaire` sont désormais correctement capturées lors de la soumission d\'une proposition dans l\'Encyclopédie.',
    ]
  },
  {
    version: '15.17.6 - "Le Puits Visible 🔮"',
    date: '14 Mai 2026',
    description: 'Le Puits des Âmes est désormais visible en consultation mais verrouillé : les boutons +/− sont désactivés, seul le Registre reste accessible.',
    changes: [
      '🔮 **Puits des Âmes visible en lecture seule :** Le bandeau apparaît pour tous les observateurs d\'un personnage scellé, mais les boutons d\'ajustement (`−1`, `+1`, `+5`) sont désactivés avec un curseur "interdit" et une opacité réduite.',
      '📖 **Registre toujours accessible :** Le bouton "Registre" (Journal des Flux de l\'Âme) reste cliquable en consultation — chacun peut consulter l\'historique des XP.',
      '🛡️ **Double garde :** Les boutons sont protégés côté UI (`disabled`) et côté logique (`return` silencieux dans `handleAdjustXP`) pour empêcher toute modification en lecture seule.',
    ]
  },  {
    version: '15.17.5 - "Le Grand Livre des Comptes 📖"',
    date: '14 Mai 2026',
    description: 'Correction de deux bugs bloquants sur les boutons − XP : le retrait n\'atteignait jamais le négatif et le −1 dans l\'éditeur augmentait les XP disponibles.',
    changes: [
      '🐛 **Bug `||` vs `??` (Cercle) :** Le bouton `−` dans le panneau de distribution remontait à `xpDefault-1` au lieu de descendre sous zéro, rendant tout retrait d\'XP impossible. Corrigé par le remplacement de `||` par `??` (nullish coalescing).',
      '🐛 **Bug `REMBOURSEMENT` → `GAIN` négatif (Éditeur) :** Cliquer `−1` dans l\'éditeur de personnage créait un `REMBOURSEMENT` qui diminuait `xp_depense` au lieu de `xp_total`, ce qui **augmentait** les XP disponibles au lieu de les réduire. Désormais un `GAIN` avec valeur négative est émis, et `xp_total` diminue correctement.',
      '🧪 **Tests de non-régression :** 8 tests ajoutés pour verrouiller les deux corrections.',
    ]
  },  {
    version: '15.17.4 - "La Balance du Docte ⚖️"',
    date: '14 Mai 2026',
    description: 'Retrait d\'XP par le Docte, confirmation modale pour les montants négatifs, correction du compteur de Cercles dans les Métriques.',
    changes: [
      '⚖️ **Retrait d\'XP (Nouveau) :** Le Docte peut désormais retirer des XP à un Héritier en cliquant sur le bouton `−` pour passer en négatif. Une modale de confirmation s\'affiche avant validation.',
      '🔢 **Compteur de Cercles corrigé :** Les Métriques affichaient 3 Cercles au lieu de 14 à cause du RLS. Une nouvelle RPC `get_admin_stats` en `SECURITY DEFINER` contourne le filtrage et retourne le vrai total.',
    ]
  },  {
    version: '15.17.3 - "Le Sceau du Docte 🔍"',
    date: '14 Mai 2026',
    description: 'Visibilité du statut de scellement dans les Cercles, notification XP pour les non scellés.',
    changes: [
      '🔍 **Visibilité du statut dans les Cercles :** Le Docte voit désormais si un Héritier n\'est pas scellé (badge "Non scellé" dans le panneau XP et sur la carte), avec un avertissement clair : "XP reçus mais non dépensables".',
      '📡 **RPC `get_cercle_members` enrichi :** Retourne maintenant `statut`, `xp_total` et `xp_depense` pour chaque personnage, permettant à l\'interface d\'afficher ces informations sans requête supplémentaire.',
      '📢 **Notification de distribution :** Le toast de fin précise quels personnages ne pourront pas dépenser leurs XP tant qu\'ils ne sont pas scellés.',
    ]
  },  {
    version: '15.17.2 - "Le Nom Retrouvé 🏷️"',
    date: '13 Mai 2026',
    description: 'Correction de l\'affichage des UUIDs dans Capacités & Atouts, résolution des noms dans tout le moteur.',
    changes: [
      '🏷️ **Fix — UUIDs apparents dans Capacités & Atouts :** Les identifiants bruts (ex: `067035cc-...`) qui s\'affichaient par erreur dans la fiche bilan sont désormais résolus en noms lisibles via les données de l\'Encyclopédie. Le correctif couvre la fiche (`FicheParchemin`), le sélecteur d\'atouts (`StepAtouts` — qui ne stocke plus jamais d\'UUID), et le moteur de bonus (`bonusCalculator` — qui cherchait par nom uniquement).',
    ]
  },  {
    version: '15.17.1 - "Les Archives du Monde 📊"',
    date: '13 Mai 2026',
    description: 'Métriques publiques enrichies : types de fées, profils, graphiques et compteurs globaux.',
    changes: [
      '📊 **Métriques Publiques Enrichies (Communauté) :** L\'onglet "Métriques" a été entièrement réécrit avec 4 compteurs globaux (Héritiers, Personnages, Scellés, Cercles), la répartition des types de fées (tableau + barres horizontales), la répartition des profils majeurs et mineurs, et l\'activité quotidienne.',
      '🎚️ **Slider Tableau / Graphiques :** Chaque section peut être visualisée en tableau (chiffres précis) ou en graphique (barres CSS proportionnelles) via un sélecteur élégant.',
      '🗑️ **Période simplifiée :** Le sélecteur 30 jours / Globale a été retiré. Les métriques de répartition sont toujours globales, l\'activité reste sur 30 jours.',
    ]
  },  {
    version: '15.17.0 - "La Main du Docte 🎁"',
    date: '13 Mai 2026',
    description: 'Attribution d\'XP par le Docte dans les Cercles, avec traçabilité et sécurité.',
    changes: [
      '🎁 **Attribution d\'XP dans les Cercles (Nouvelle Fonctionnalité) :** Le Docte peut désormais distribuer des Points d\'Expérience depuis sa Table Virtuelle. Un panneau dédié lui permet de choisir un montant (presets 3/5/10/15/20 ou saisie libre), d\'ajuster individu chaque membre avec des boutons −/+, et de préciser un motif (ex: "Scénario : Le Secret du Lac").',
      '🛡️ **Sort `award_xp` inscrit dans le Grand Livre :** La fonction magique vérifie que seul le Docte du Cercle peut attribuer des XP à un Héritier de sa table. Les XP sont ajoutés au total du personnage et tracés dans le Registre des Transactions avec le code `REWARD`.',
      '📜 **Script SQL créé :** `scripts/create_rpc_award_xp.sql` documente la fonction pour toute réinstallation future.',
      '🔑 **Mot de passe de la Source Originelle mis à jour :** Le nouveau sceau d\'accès à la Base de Données et le port du connecteur (6543) ont été enregistrés dans le Coffre aux Archives (`.env`).',
    ]
  },  {
    version: '15.16.47 - "Les Sceaux Purifiés et la Vigie 🔐"',
    date: '13 Mai 2026',
    description: 'Secrets retirés du code, sauvegarde universelle, et fondations de test posées sous le moteur de jeu.',
    changes: [
      '🔐 **Secrets retirés du Grimoire :** La clé de service (service_role) et le mot de passe de la Base de Données ont été extraits des parchemins (`scripts/backup_supabase.js`, `db-schema-dump.sh`) et placés dans le Coffre aux Archives (`.env`). Les scripts lisent désormais les sceaux depuis l\'environnement.',
      '📚 **Sauvegarde Universelle :** Le Grand Archiviste recouvre désormais l\'intégralité des 39 tables du monde visible — des fiches des espèces féériques (`fairy_types`, `fairy_capacites`, `fairy_powers`, `fairy_assets`) aux registres de compétences (`competences`, `competences_futiles`, `specialites`, `profils`, `social_items`), en passant par les messageries du Télégraphe (`support_tickets`, `support_messages`, `chat_message_reads`). Plus rien n\'est laissé à la merci du temps.',
      '⚙️ **Fondations de la Vigie (Tests) :** 27 nouvelles Sentinelles Automates ont été postées pour surveiller le Moteur de Jeu : 12 gardent les formules de coûts XP (`xpCalculator`) et 15 veillent sur les calculs de combat et de compétences (`rulesEngine`). Chaque formule est vérifiée — coûts minimums, plafonds, bonus de profil, prédilections, bonus magiques, modificateurs de taille, bonus de Masque.',
      '📜 **Parchemin d\'exemple créé :** `.env.example` liste désormais toutes les variables requises, servant de guide aux nouveaux Archivistes qui voudraient déployer leur propre Grimoire.',
    ]
  },  {
    version: '15.16.46 - "L\'Album des Souvenirs 📸"',
    date: '13 Mai 2026',
    description: 'Album Photo restauré, résurrection des archives temporelles, et ménage des alertes automatiques.',
    changes: [
      '📸 **Album Photo de l\'Héritier restauré :** Le bouton "Prendre une photo" et la galerie des archives temporelles refont leur apparition sur la page Récapitulatif. On peut désormais immortaliser l\'état de son Héritier à tout moment et le ressusciter plus tard.',
      '🔧 **Fonction de Résurrection créée :** Le sort `clone_snapshot_to_character` a été inscrit dans le Grand Livre des Sortilèges. Il permet de cloner un personnage à partir d\'une archive temporelle, préservant l\'intégralité de ses caractéristiques, pouvoirs, atouts et biens.',
      '🐛 **Fix colonne d\'archivage :** Correction d\'un Sortilège défaillant — le hook écrivait dans `data_snapshot` (coline inexistante) au lieu de `character_data`. Les archives se gravent désormais dans le marbre sans erreur.',
      '🗑️ **Silence des Gardiens :** Le système d\'auto-détection des anomalies (FairyLore) a été désactivé. Les personnages dont l\'espèce féérique n\'est pas encore référencée dans la Bibliothèque des Espèces ne déclenchent plus d\'alerte intempestive. Le Docte conserve la main pour signaler manuellement ce qui doit l\'être.',
      '🩺 **Remède au "Sans plancher" :** Le socle scellé (`stats_scellees`) de Siobhan McTir, qui manquait à l\'appel, a été reconstruit depuis ses mémoires éparses. Son Héritier n\'est plus en errance.',
      '✏️ **Fix nom dans les alertes :** Les messages de correction utilisaient le type de fée ("Kelpie") au lieu du nom du personnage ("Siobhan McTir"). Le grimoire invoque désormais le bon prénom.',
    ]
  },  {
    version: '15.16.45 - "Le Grand Sceau des Gardiens 🛡️"',
    date: '13 Mai 2026',
    description: 'Rempart de sécurité : RLS activé, permissions verrouillées, rôle-checks ajoutés, et premières sentinelles de test.',
    changes: [
      '🛡️ **RLS activé sur 3 tables exposées :** Les Archives du Télégraphe (`chat_channels`, `chat_messages`) et le Registre des Anomalies (`bug_reports`) sont désormais protégés par la Loi du Silence. Seuls les Héritiers concernés peuvent lire leurs propres missives et signalements.',
      '🔒 **Permissions révoquées aux Égarés (anon) :** 11 sortilèges de la Bibliothèque Centrale ne sont plus accessibles aux simples visiteurs non-enregistrés. Les fonctions de don de personnage, de consultation des Cercles, de validation d\'identité et de gestion des Archives sont désormais réservées aux Faux-Semblants dûment inscrits au Grand Registre.',
      '⚔️ **Verrouillage de "Magie Noire" (`execute_dynamic_sql`) :** Le redoutable sort d\'exécution dynamique a été scellé sous plusieurs sceaux — plus aucun Héritier, même connecté, ne peut l\'invoquer. Seuls les Architectes du Monde (postgres, service_role) en conservent la clé.',
      '👑 **Rôle-checks sur les Sorts des Gardiens :** `purge_encyclopedia_entity` et `toggle_item_seal` vérifient désormais que l\'appelant est bien un Gardien du Savoir ou un Super Admin avant d\'exécuter leurs puissants effets. Les simples curieux essuieront un refus catégorique.',
      '🧪 **Premières Sentinelles de Test :** 10 gardiens automates ont été postés aux portes des Archives, du Registre des Héritiers et de la Console d\'Administration pour surveiller le bon fonctionnement des nouveaux sceaux.',
      '📜 **Nettoyage des Parchemins obsolètes :** Le sort `handle_new_user` (création de profil à l\'enrôlement) a été retiré de la vue publique — bien qu\'inaccessible par les artères classiques du Grimoire, sa simple évocation était signalée par les Gardiens de la Vigie.',
    ]
  },  {
    version: '15.16.44 - "La Duplicité Révélée 🔴"',
    date: '13 Mai 2026',
    description: 'Stats de combat démasquées : bonus capacité inclus, refonte du bloc Combat & Santé.',
    changes: [
      '🔴 **Esquive Démasquée (fix) :** L\'esquive sous forme démasquée inclut désormais le bonus de capacité féérique (le +1 vert de la feuille), qui était ignoré — elle prenait la même valeur que l\'esquive masquée.',
      '📊 **Moteur de combat (rulesEngine) :** `calculateFullCombatStats` distingue désormais les bonus permanents (atouts/pouvoirs) des bonus de capacité (uniquement actifs en forme démasquée). Tous les états de combat existent en deux versions : masquée et démasquée (parade, rés. phys., rés. psych., PV max).',
      '📜 **Refonte du bloc Combat & Santé (FicheParchemin) :** Le tableau de combat affiche désormais deux rangées complètes : masquée (haut) et démasquée (bas, en rouge). Passage de 6 à 5 colonnes pour une meilleure lisibilité.',
    ]
  },  {
    version: '15.16.43 - "Le Comptoir des Contacts Libres 🎯"',
    date: '13 Mai 2026',
    description: 'Contacts gratuits : allocation manuelle aux profils, budget réservé aux contacts.',
    changes: [
      '🎯 **Contacts Gratuits (Widget) :** Les points de contacts gratuits (Entregent/Prestance) s\'allouent désormais manuellement via un widget dédié. On peut les distribuer sur n\'importe quel profil, même avec 0 PP de budget de base.',
      '🔒 **Consacrés aux Contacts :** Ces points ne peuvent être dépensés que pour des contacts (pas pour métiers/objets/langues/titres). Ils s\'additionnent au budget du profil pour permettre d\'acheter des contacts plus chers que le PP disponible.',
      '🧮 **Budget séparé (useVieSociale) :** Le moteur de budget distingue désormais le budget de base (`budgetsBase`) du budget gonflé par les contacts gratuits (`budgets`), pour contrôler strictement leur usage.',
      '🐛 **Fix `rests` vs `restes` :** Correction d\'une faute de frappe de variable qui empêchait le rendu des catalogues de la Vie Sociale.',
    ]
  },  {
    version: '15.16.42 - "L\'Éclair Pneumatique ⚡"',
    date: '11 Mai 2026',
    description: 'Hotfix de la réactivité du Télégraphe (pastille rouge).',
    changes: [
      '⚡ **Réactivité Instantanée :** Correction d\'un conflit de vitesse (Race Condition) qui empêchait la pastille rouge de notification du Télégraphe de s\'allumer avant un rafraîchissement manuel de la page. Les nouveaux messages mettent désormais à jour la liste instantanément de manière "optimiste", sans attendre les validations de la base de données.'
    ]
  },  {
    version: '15.16.41 - "L\'Aiguilleur Précis 🧭"',
    date: '11 Mai 2026',
    description: 'Refonte intégrale de la mémoire des messages non-lus du Télégraphe.',
    changes: [
      '🧭 **Pastille Rouge par Canal (Télégraphe) :** Le système de notification a été entièrement réécrit pour mémoriser votre lecture *canal par canal*. Ouvrir l\'interface du Télégraphe n\'efface plus aveuglément les notifications de vos conversations privées si vous ne les avez pas consultées.',
      '🔴 **Indicateur Visuel Intra-Liste :** Une nouvelle puce rouge clignotante apparaît désormais directement sur l\'onglet et à côté du nom de la conversation qui contient les messages non lus.',
      '💾 **Curseur Temporel Multiples :** Le `localStorage` sauvegarde désormais la date précise de dernière ouverture de chaque salon de discussion individuellement, garantissant une remontée d\'information parfaite au redémarrage du Grimoire, sans alourdir les requêtes de la base de données.'
    ]
  },    {
    version: '15.16.40 - "Le Voyant Rouge 🔴"',
    date: '10 Mai 2026',
    description: 'Fix de la pastille de notification du Télégraphe.',
    changes: [
      '🔴 **Pastille de Notification (Télégraphe) :** Le voyant d\'alerte de l\'icône du Télégraphe signale désormais tous les messages privés ou de cercle en attente, et n\'est plus limité aux seuls tickets de support de l\'administration.',
      '💾 **Curseur Temporel Hors-Ligne :** Le système mémorise intelligemment le moment exact de votre dernière lecture (via `localStorage`) pour réafficher la pastille rouge lors de votre prochaine connexion si un message a été reçu pendant votre absence (sans surcharger Supabase).'
    ]
  },{
        version: '15.16.39 - "Le Daguerréotype Fidèle 📸"',
        date: '2026-05-08',
        description: 'Fix : changement de portrait impossible après 1er upload',
        changes: [
            '🐛 **Fix changement de portrait bloqué (La Nature Profonde & L\'Apparence Sociale) :** Une fois un portrait chargé, il était impossible d\'en sélectionner un nouveau — le premier restait figé. Deux causes combinées : le champ de fichier HTML conservait la valeur de la sélection précédente (empêchant le déclenchement de l\'événement si on re-sélectionnait le même fichier), et l\'URL Supabase étant identique après remplacement, le navigateur affichait son cache sans recharger. Corrigé via reset du champ après chaque sélection + cache-busting `?t=timestamp` sur l\'URL stockée.',
        ]
    },
    {
        version: '15.16.38 - "Le Filtre du Marchande 🪙"',
        date: '2026-05-08',
        description: 'Vie sociale : filtre par budget PP restant',
        changes: [
            '🪙 **Filtre "budget restant" dans la boutique :** Un bouton compact (≤ PP) s\'affiche désormais sur la même ligne que la barre de recherche dans chaque boutique de vie sociale. Actif, il masque tous les items que tu ne peux pas te payer avec tes PP restants. Le chiffre exact de PP disponibles s\'affiche dans le bouton quand le filtre est actif.',
        ]
    },
    {
        version: '15.16.37 - "La Brique Noire 🖤"',
        date: '2026-05-08',
        description: 'Brique noire : coût affiché, chargement effets, homonymes',
        changes: [
            '🏷️ **Coût affiché dans la liste déroulante :** La brique noire du constructeur affiche désormais le prix de base à côté de chaque item dans la liste déroulante (ex : "Capitaine d\'industrie (5 PP)"). Le prix proposé s\'initialise automatiquement avec ce coût de base dès la sélection.',
            '🔑 **Items homonymes avec prix différents :** Deux items portant le même nom mais avec des coûts différents sont maintenant distingués par leur prix dans la clé de stockage ("Nom (X PP)"). Le moteur de jeu supporte les deux formats (nouveau + legacy) pour la rétrocompatibilité.',
            '🐛 **Fix chargement des effets techniques :** Quand on revenait éditer un item existant dans l\'Encyclopédie, les effets compilés n\'apparaissaient plus dans le BonusBuilder. Le formulaire lisait `techData` (absent de la DB) au lieu de `effets_techniques`. Corrigé avec un fallback `techData ?? effets_techniques` dans `EncyclopediaModal`, `SocialItemForm` et `EntityForm`.',
        ]
    },
    {
        version: '15.16.36 - "La Plume du Docte 🖋️"',
        date: '2026-05-08',
        description: 'Fix notification correction joueur + CheckCheck icône',
        changes: [
            '🔔 **Notification de correction au joueur :** Quand le Docte marque un personnage comme "Corrigé", le joueur reçoit désormais un toast de succès au prochain login (✨ "Bonne nouvelle ! X a été corrigé par le Docte."). La notification est consommée automatiquement après affichage.',
            '🔁 **Fix re-détection après correction :** Un flag `correction_done` empêche l\'auto-détection de re-signaler indéfiniment les mêmes personnages après qu\'ils ont été traités par le Docte.',
            '🔧 **Fix icône CheckCheck manquante :** L\'icône de double coche du Télégraphe (`CheckCheck`) était absente du hub d\'icônes centralisé — ajoutée dans `config/icons.js`, la compilation ne plante plus.',
        ]
    },
    {
        version: '15.16.35 - "Le Sceau des Lectures ✉️"',
        date: '2026-05-08',
        description: 'Read receipts, corrections, filtres, bug XP repair',
        changes: [
            '✅ **Coches de lecture (Télégraphe) :** Les messages privés et de groupe affichent désormais des accusés de réception style WhatsApp — ✓ gris = envoyé, ✓✓ amber = lu. Pour les salons de groupe, un compteur indique combien de membres ont lu. Désactivé sur le salon public global.',
            '🛠️ **Système de correction de personnages :** Quand un personnage présente un problème (fée sans fiche Docte, données incohérentes), le joueur voit une modale au login demandant l\'autorisation de corriger. Le Docte reçoit une notification avec la liste des personnages autorisés à corriger.',
            '🔧 **Correction filtre Communauté & Métriques :** Les filtres par type d\'utilisateur (Super Admin, Gardien, Initié, Héritier) dans l\'onglet Utilisateurs fonctionnent à nouveau — le code traitait un ancien mode "staff" qui n\'existait plus dans le menu.',
            '⚡ **Fix crash réparation XP :** La reconstruction du journal ne plante plus avec l\'erreur `check_xp_coherence`. Quand les dépenses reconstruites dépassent le XP total enregistré, le total est automatiquement relevé — affiché clairement dans la modale de confirmation.',
            '✨ **Fiches Docte dans la Galerie des Fées :** Les Initiés voient maintenant la fiche complète (apparence, caractère, capacités, pouvoirs, atouts) de chaque type de fée directement dans l\'étape 1 de création.',
        ]
    },
    {
        version: '15.16.34 - "Le Grimoire du Docte 📖"',
        date: '2026-05-08',
        description: 'Indexation du Manuel du Joueur — lore & règles documentés',
        changes: [
            '📖 **Lecture complète du Manuel du Joueur (280 p.) :** Le PDF a été extrait et indexé en intégralité — 26 types de fées, 6 étapes de création, toutes les formules de jeu.',
            '📋 **REGLES_INDEX.md :** Fichier mémoire technique créé : types de fées, coûts XP, formules de combat, vérification de l\'implémentation code vs règles.',
            '🌿 **LORE_HERITIERS.md :** Fichier mémoire lore créé : univers Belle Époque, vocabulaire féérique, personnalités par type de fée, formules de messages suggérées.',
            '✅ **Vérification implémentation :** Toutes les formules XP, combat et stats ont été comparées au manuel — conformité 100% confirmée (xpCalculator.js, rulesEngine.js).',
        ]
    },
    {
        version: '15.16.33 - "La Vitrine de l\'Héritier 🃏"',
        date: '2026-05-08',
        description: 'Cartes personnages : réparation XP, télégraphe, filtre, XP lisibles',
        changes: [
            '🔧 **Badges réparation XP sur les cartes :** Le statut du journal XP (⏳ À réparer, ✅ Complet, ✨ Réparé…) est affiché directement sur chaque carte, visible uniquement par l\'admin. Le badge est cliquable pour lancer la reconstruction, avec modale de confirmation avant/après.',
            '🗑️ **Suppression du bouton "Reconstruire" redondant :** La puce de statut devient elle-même le déclencheur — plus économe en espace.',
            '💬 **Bouton Télégraphe dans le footer des cartes :** Une icône MessageCircle discrète apparaît à côté du pseudo du joueur sur les cartes qui ne m\'appartiennent pas, pour ouvrir une missive privée directement.',
            '🔍 **Filtre de recherche par onglet :** Un champ de recherche persiste entre les onglets (Mes personnages / Publics / Admin) et filtre par nom, nature féerique ou pseudo du joueur. Le compteur d\'onglet reflète les résultats filtrés.',
            '✨ **XP lisible sur les cartes :** Le badge XP affiche désormais `✨ restants / total XP` en un seul badge bicolore — les XP disponibles en amber, le total acquis en vert.',
        ]
    },
    {
        version: '15.16.32 - "L\'Œil du Docte 🔍"',
        date: '7 Mai 2026',
        changes: [
            '🐛 **Fix — Fiche inconnue dans les Cercles :** Un joueur qui crée un personnage après avoir rejoint un cercle voyait sa fiche affichée comme "Inconnue" pour le Docte, qui ne pouvait pas l\'ouvrir. Cause : `cercle_membres.character_id` pointait vers l\'ancien perso. Fix en deux volets : UI défensive (carte orange + badge "Fiche non liée" + bouton "En attente…" désactivé côté Docte) et nouvelle feature permettant au joueur de changer son Héritier directement depuis la table virtuelle via un sélecteur.',
            '✨ **Changer d\'Héritier dans un Cercle :** Sur sa propre carte, un joueur voit maintenant "Mon Héritier : [nom]" et un menu déroulant "Changer d\'Héritier…" qui met à jour `cercle_membres` en un clic et recharge la vue.',
            '📊 **Audit des index BDD :** Analyse complète des 32 tables — identification de 2 doublons d\'index (admin_settings, cercle_membres), 3 index GIN lourds inutiles sur characters (data, caracteristiques, competences_libres), et ~15 FK sans index (character_snapshots, chat_messages, chat_channels, heritier_notes, registre_forge…). Migration recommandée prête à appliquer.',
            '🚨 **Alerte sécurité identifiée :** RLS désactivé sur chat_channels, chat_messages et bug_reports — exposées publiquement. SQL de remédiation préparé, en attente de validation des politiques.',
        ]
    },
    {
        version: '15.16.31 - "Le Gardien du Seuil 🛡️"',
        date: '7 Mai 2026',
        changes: [
            '🛡️ **Validation pré-scellage complète :** `sealValidation.js` introduit un système de gardes multicouches avant l\'apposition du Sceau. Erreurs bloquantes (A→F) : type féérique reconnu, caractéristiques complètes, profils majeur ET mineur définis, 2 atouts féériques choisis, capacité féérique sélectionnée, pouvoirs = rang de Féérie (1 par rang), toutes les prédilections utiles/futiles au choix remplies.',
            '⚠️ **Avertissements non-bloquants (G) :** Si des points restent non dépensés à la création (utiles verts, rangs gratuits Esprit 🧠, loisirs futiles), le joueur en est averti dans la modale de confirmation — il peut quand même sceller en connaissance de cause.',
            '🎨 **ConfirmModal enrichie :** Nouvelle prop `errors[]` (liste rouge, bouton Confirmer masqué) et `warnings[]` (encart jaune, confirmation toujours possible). En-tête rouge si erreurs bloquantes, amber sinon. Rétrocompatible — aucun autre usage impacté.',
            '🔧 **Fix — Atouts indépendants de Féérie :** La validation atouts utilise le constant `MAX_ATOUTS = 2` (fixe), sans lien avec le rang de Féérie. La Féérie détermine uniquement le nombre de Pouvoirs.',
        ]
    },
    {
        version: '15.16.30 - "L\'Archiviste du Passé 🔧"',
        date: '7 Mai 2026',
        changes: [
            '🧠 **Bonus Esprit post-scellage :** Les points d\'Esprit achetés avec des XP après le scellage débloquent désormais des rangs gratuits dans les compétences d\'Érudit et de Savant (comme à la création). Le calcul compare `esprit_actuel` vs `esprit_scellé` et attribue les rangs via `bonusEspritXP` − `investPost`.',
            '📓 **Journalisation des rangs gratuits (Esprit) :** Chaque rang gratuit est tracé dans le journal avec le nouveau code `ESPRIT_BONUS_UTILE` et `valeur: 0`. Affichage "🧠 Gratuit" dans le Journal des Flux de l\'Âme au lieu d\'une valeur XP nulle invisible.',
            '👁️ **Fix — Journal incomplet en lecture seule :** Quand un personnage scellé est ouvert en lecture seule (par un autre joueur ou depuis les Cercles), le journal était tronqué si `historique_xp` en base était partiel (condition `length === 0` jamais déclenchée). On force désormais la reconstruction client-side avant le `LOAD_CHARACTER`, comme le fait `handleAppropriate`.',
            '📜 **Nouveau — `CHARACTER_SCHEMA.md` :** Document vivant décrivant l\'intégralité du schéma personnage : colonnes Supabase, structure JSONB `data{}`, sous-schémas (`caracteristiques`, `competencesLibres`, `vieSociale`, `stats_scellees`, `computedStats`), tableau des origines de spécialités, flow de chargement, pièges connus.',
            '🔒 **Refactor — Action `SEAL_CHARACTER` :** Le scellage est désormais une action dédiée dans `characterReducer` (remplace l\'intercept `UPDATE_FIELD`). Capture atomique et exhaustive de `stats_scellees` : caractéristiques, atouts, compétences libres, futiles, fortune, pouvoirs.',
            '🛠️ **Nouveau — Outil admin de reconstruction des journaux :** `TabRepairJournaux` (super_admin uniquement) liste tous les personnages scellés, détecte les journaux incomplets, et permet de reconstruire les `DEPENSE` depuis `stats_scellees` — tout en préservant les `GAIN` existants. Recherche par nom, filtre "À réparer / Tous", et modale de confirmation avec tableau avant/après.',
            '🔍 **Audit Supabase — 20 personnages identifiés :** Requête SQL d\'analyse sur l\'intégralité des personnages scellés : classification en "journal vide", "GAIN uniquement", "partiel" et "complet". Emet, Alafard, Louise Dubois, Maudierne, Una et ~15 autres bénéficieront de la reconstruction.',
        ]
    },
    {
        version: '15.16.29 - "Le Parchemin Complet 📜"',
        date: '7 Mai 2026',
        changes: [
            '🐛 **Fix critique — Fiches des autres joueurs incomplètes :** Les onglets "Public" et "Admin" de `CharacterList` passaient le personnage light (13 colonnes) à `onSelectCharacter` au lieu de charger la fiche complète via `getFullCharacter()`. Résultat : compétences, atouts, pouvoirs, data et stats manquaient dans le récap et le PDF. Corrigé en routant ces deux onglets via `handleSelectCharacter` comme l\'onglet "Mes personnages".',
            '✨ **Fix — Détail futiles (bonus magique) :** `getFutileBreakdown` ne comptabilisait pas les bonus magiques issus d\'atouts/pouvoirs sur les compétences futiles, causant un écart entre la valeur affichée et la somme de la décomposition. Ajout de `bonusMagique` et `bonusMagLabel` dans le breakdown.',
            '✨ **Fix — Origines des spécialités en mode détaillé :** `allSpecialties` stocke désormais des objets `{nom, origine}` au lieu de simples strings. Les spécialités sont taguées Créa / XP / Métier / Inné / magique avec les couleurs correspondantes dans la vue détaillée.',
            '🔒 **Fix — Snapshot scellage (futiles + fortune) :** Le reducer `UPDATE_FIELD` intercepte désormais le premier scellage pour capturer `competencesFutiles.rangs` et `fortune` dans `stats_scellees`. Les anciens personnages d\'Emet ont été corrigés rétroactivement en base.',
            '🔍 **Fix — Ressort:1 d\'Emet à la création :** Preuve mathématique via XP_SOLDE, puis correction SQL de `stats_scellees.competencesLibres.rangs.Ressort` pour les copies d\'Emet.',
            '🔙 **Fix — Retour aux Cercles :** Depuis un profil vu dans un Cercle, le bouton "Retour" ramène maintenant au Cercle (via `location.state.from`) au lieu des Archives. Le libellé s\'adapte dynamiquement.',
        ]
    },
    {
        version: '15.16.28 - "La Source Unique 🏛️"',
        date: '7 Mai 2026',
        changes: [
            '🏛️ **Refactor — Source unique de vérité (XP) :** `getXpState()` calcule désormais `xp_depense` depuis `historique_xp` (somme algébrique du journal) au lieu de lire le champ `xp_depense` en base. Le journal fait foi ; le champ DB n\'est plus qu\'un cache dérivé mis à jour à chaque sauvegarde.',
            '🔕 **Refactor — Fin de la double-écriture :** `LOG_XP_TRANSACTION` dans le moteur ne mute plus `xp_depense` en mémoire. Un seul save → un seul calcul → une valeur cohérente.',
            '🏷️ **Nouvelle fonctionnalité — Codes canoniques XP :** Chaque transaction possède désormais un champ `code` (ex: `CARAC_AUGMENTATION`, `FORTUNE_ELEVATION`, `ATOUT_ACQUISITION`…) permettant un filtrage programmatique sans fragile correspondance de strings. 15 codes définis dans `XP_CODES`.',
            '📊 **Nouveau — Table SQL `xp_transactions` :** Miroir queryable de `historique_xp` (JSONB) synchronisé à chaque sauvegarde. Permet analytics cross-personnages, filtrage SQL par code/type, vues de synthèse (`xp_summary`). Architecture write-to-both : le JSONB reste source primaire.',
            '🔧 **Nouveau — `adminMigration.js` :** Utilitaire one-shot `migrateXpHistories(gameData)` pour peupler `historique_xp` en base pour tous les anciens personnages scellés qui n\'en ont pas encore. Supporte mode `dryRun` et callbacks de progression.',
            '🧹 **Nettoyage — Consumers XP :** `CharacterCreator.jsx`, `FortuneController.js` et `pixieBrain.js` utilisent maintenant `getXpState()` au lieu de calculer `(xp_total - xp_depense)` manuellement.'
        ]
    },
    {
        version: '15.16.27 - "Le Grand Livre des Âmes 📒"',
        date: '7 Mai 2026',
        changes: [
            '🏗️ **Refactor majeur — Journal des Âmes (XP) :** Toutes les dépenses et remboursements d\'XP passent désormais par `LOG_XP_TRANSACTION` au lieu de muter `xp_depense` directement. 6 composants migrés : `StepPouvoirs`, `StepAtouts`, `AnomalieFeeriqueWidget`, `useCompetencesLibres`, `StepCompetencesFutiles`, `useVieSociale`. Le journal peut désormais reconstituer fidèlement l\'historique complet d\'un personnage.',
            '🐛 **Fix — historyReconstructor (Fortune fantôme) :** La Fortune accordée par le métier/la Vie Sociale ne génère plus de fausses entrées XP dans le journal. Le plancher de Fortune est maintenant calculé depuis les achats réels (`fortune_score` + `fortune_bonus` des items).',
            '🐛 **Fix — historyReconstructor (Fortune coût) :** Remplacement du coût fixe `10 XP` par la vraie formule `getFortuneCost()` (tenant compte des rangs Classe et Sciences).',
            '🐛 **Fix — historyReconstructor (Futiles .rangs) :** La reconstruction lisait `competencesFutiles` (objet parent) au lieu de `competencesFutiles.rangs`, ce qui produisait un écart d\'1 XP. Corrigé avec `?.rangs`.',
            '✨ **Fix — Journal des Âmes (Groupement) :** Les entrées consécutives de même nature dans le journal sont désormais fusionnées en une seule ligne avec un badge `×N`, pour une lecture plus claire.',
            '🔒 **Fix — Dupliquer / Adopter un héritage :** Ces deux actions préservent maintenant le statut `scellé` d\'un personnage si l\'original l\'était. L\'historique XP est également forcé en reconstruction complète pour garantir un journal cohérent.',
            '🎨 **Fix — Paramètres (Notifications) :** Suppression du décalage visuel (`ml-8`) sur les boîtes de réglages de notifications dans `AccountSettings.js`.'
        ]
    },
    {
        version: '15.16.26 - "Le Polyglotte Corrigé 🌍"',
        date: '6 Mai 2026',
        changes: [
            '🐛 **Fix — Érudition & Langues (PDF & Fiche) :** Correction d\'un bug dans `WidgetLangues.js` où la suppression de la langue maternelle stockait le tableau entier `["Français","Anglais","Italien"]` au lieu d\'une string. Résultat visible : `FrançaisAnglaisItalien (Maternelle) • Français • Anglais • Italien` sur la fiche et le PDF. Fix : `newLangues[0]` au lieu de `newLangues`. Requête SQL de migration fournie pour corriger les personnages déjà corrompus en base.'
        ]
    },
    {
        version: '15.16.25 - "Le Grand Ménage de Printemps 🧹"',
        date: '6 Mai 2026',
        changes: [
            '🗂️ **Refactoring — Extraction de sous-composants :** Trois composants enfants colocalisés avec leur parent ont été extraits dans leurs propres fichiers : `CharacterCard` (depuis `CharacterList`), `ChangeCard` (depuis `ValidationsPendantes`), `ActiveCercleView` (depuis `CerclesDashboard`). Les fichiers passent de 534–666 lignes à ~350–390 lignes chacun.',
            '📜 **Refactoring — Archivage du changelog :** Les entrées historiques de `version.js` (versions 2.x à 15.11.x) ont été déplacées dans `version.legacy.js`, non importé par l\'application. Le fichier principal passe de 1639 à 162 lignes — économie directe de tokens à chaque session.',
            '🗺️ **Infrastructure — Carte du projet :** Création de `PROJECT_MAP.md` dans le dossier mémoire de l\'assistant : architecture par zones, responsabilités des fichiers clés, et catalogue des pièges non-évidents. Mise à jour de `MEMORY.md` pour le référencer en premier.'
        ]
    },
    {
        version: '15.16.24 - "Le Grimoire Illustré 📖"',
        date: '6 Mai 2026',
        changes: [
            '🖼️ **Parchemin PDF — Portraits :** Les deux portraits du personnage (masqué et démasqué) apparaissent désormais sur le PDF exporté. Le portrait masqué orne l\'en-tête de la page 1, le portrait féérique s\'affiche en haut de la page 2.',
            '⚔️ **Parchemin PDF — Stats de combat :** Les statistiques de combat affichées sur le PDF sont maintenant calculées en temps réel via le moteur de règles, garantissant une cohérence parfaite avec le Bilan. Compétences futiles, équipement et contacts s\'affichent correctement (ils étaient vides auparavant).',
            '📐 **Parchemin PDF — Compression A4 :** La page 1 du PDF a été resserrée (tailles de police, marges, espacements) pour tenir confortablement sur une feuille A4 à l\'impression.',
            '🎛️ **Encyclopédie — Spécialités (UI) :** Le bouton "Vue groupée" est remplacé par un élégant slider CSS sans texte. Le bouton "Catalogue de référence" est remplacé par le bouton standard "Suggérer une modification".',
            '✏️ **Encyclopédie — Spécialités (Édition) :** Les spécialités sont désormais éditables ! La modale de proposition s\'ouvre correctement, avec un formulaire adapté : nom, description, et sélecteur de compétence parente (BonusBuilder et sélecteur de fées masqués, non pertinents ici).',
            '🔧 **Refactoring DRY — Icônes :** Migration de 39 fichiers depuis les imports directs `lucide-react` vers le hub centralisé `src/config/icons.js`. Correction des erreurs ESLint associées (icône `Print` inexistante, BOM Unicode, imports inutilisés).'
        ]
    },
    {
        version: '15.16.23 - "Le Daguerréotype Double 🖼️"',
        date: '5 Mai 2026',
        changes: [
            '🖼️ **Personnalisation du Masque (Nouvelle Fonctionnalité) :** L\'étape 10 de création de personnage dispose désormais d\'un encart "Le Daguerréotype Double". Deux zones d\'import d\'image distinctes permettent d\'associer un portrait humain (L\'Apparence Sociale) et un portrait féérique (La Nature Profonde) à chaque Héritier.',
            '👁️ **Loi du Silence :** Un bouton de bascule permet au joueur de choisir si sa véritable nature féérique est visible par les autres membres du Cercle, ou gardée secrète.',
            '🗄️ **Architecture (Migration DB) :** Trois nouvelles colonnes dédiées sur la table `characters` (`portrait_masked_url`, `portrait_unmasked_url`, `is_unmasked_revealed`) et un bucket Supabase Storage sécurisé (`portraits`) accueillent désormais les images. Les RLS protègent les uploads de chaque joueur.'
        ]
    },
    {
        version: '15.16.22 - "Le Notaire Réparé 📜"',
        date: '5 Mai 2026',
        changes: [
            '🐛 **Don de personnage (Bloquant) :** Correction d\'un bug introduit lors d\'une refonte antérieure — le code de don était écrit uniquement dans le JSONB `data`, alors que la RPC `claim_character_by_code` le cherche dans la colonne dédiée `transfer_code`. Le code est désormais écrit dans les deux emplacements simultanément. Les dons fonctionnent à nouveau normalement.'
        ]
    },
    {
        version: '15.16.21 - "Le Voile Levé 👁️"',
        date: '4 Mai 2026',
        changes: [
            '👁️ **Connexion (UX) :** Le formulaire d\'authentification dispose désormais d\'un bouton Œil permettant de révéler ou masquer le mot de passe saisi. Fonctionne en mode Connexion comme en mode Inscription.'
        ]
    },    {
        version: '15.16.20 - "Le Filtre du Marchand 🔍"',
        date: '4 Mai 2026',
        changes: [
            '🔍 **Vie Sociale & Équipement (UX) :** La boutique d\'équipement dispose désormais d\'un champ de recherche instantané. Tapez quelques lettres pour filtrer dynamiquement l\'ensemble du catalogue du profil actif, toutes catégories confondues. Une croix de réinitialisation apparaît dès qu\'un filtre est actif.'
        ]
    },    {
        version: '15.16.19 - "L\'Ombre des Sicaires 🗡️"',
        date: '2 Mai 2026',
        changes: [
            '🗡️ **Vie Sociale & Équipement (Hotfix) :** L\'algorithme de la boutique lit désormais parfaitement la nouvelle architecture de la base de données permettant à un Contact (ou un objet) d\'appartenir à de multiples Profils professionnels. Les réductions octroyées par vos statuts secrets (comme Membre des Sicaires) s\'appliquent désormais avec une tolérance intelligente, même si le nom de l\'objet diffère légèrement selon votre métier.',
            '🧠 **Forge (Constructeur Visuel) :** Le champ "Ajustement Prix Boutique" bénéficie dorénavant d\'un système d\'autocomplétion natif. Les Gardiens du Savoir peuvent désormais rechercher dynamiquement un objet ou un contact existant au fur et à mesure de leur frappe, éradiquant les erreurs d\'orthographe.'
        ]
    },    {
        version: '15.16.18 - "L\'Inquisiteur et le Masque 🎭"',
        date: '1 Mai 2026',
        changes: [
            '🎭 **Attributs & Parchemins (Évolution) :** Suite au signalement de Chninkel, la caractéristique "Masque" possède désormais son propre contrôleur d\'expérience à l\'Étape 3 (Pouvoirs). De plus, le triptyque magique sacré (Féérie, Masque, Tricherie) s\'imprime enfin fièrement au sommet de la deuxième page de vos fiches PDF.',
            '👻 **Purification du Code (Architecture) :** Une immense traque des fantômes algorithmiques a été menée par notre Inquisiteur syntaxique sur l\'ensemble du Grimoire. Les mémoires orphelines, imports inutilisés et dépendances asynchrones ont été purgés. Bonus : Le Grimoire Personnel profite désormais d\'un écran de déchiffrage fluide et immersif à son ouverture.'
        ]
    },    {
        version: '15.16.16 - "Le Sang Bleu Révélé 🩸"',
        date: '1 Mai 2026',
        changes: [
            '👑 **Parchemins (PDF & Bilan) :** L\'encart des titres honorifiques s\'intitule désormais "Familles, Titres & Statuts" pour correspondre scrupuleusement à la terminologie officielle du Livre de Base.',
            '🧠 **Cerveau Central (Filtre d\'Export) :** L\'algorithme de génération de la Bible Autonome capture désormais correctement les objets sociaux de catégorie "statut". Vos appartenances aux sociétés secrètes et vos ascendances nobles ne seront plus jamais noyées au milieu de l\'équipement matériel commun.'
        ]
    },    {
        version: '15.16.15 - "La Douane Linguistique 🌍"',
        date: '1 Mai 2026',
        changes: [
            '🌍 **Langues & Érudition (Hotfix) :** L\'Étape 10 de personnalisation scanne de nouveau correctement l\'intégralité des achats multiples effectués dans la boutique. Il est dorénavant possible de débloquer plusieurs dialectes rares ou européens sans que le système n\'en compte qu\'un seul.'
        ]
    },    {
        version: '15.16.14 - "La Diète de l\'Imprimeur 🖨️"',
        date: '30 Avril 2026',
        changes: [
            '🖨️ **Imprimerie (PDF) :** Résolution des sauts de page disgracieux sur la fiche de personnage exportée. Le bloc "Combat & Santé" a été rendu techniquement insécable, garantissant que son titre ne se retrouve plus jamais séparé de ses cercles de statistiques.',
            '📏 **Mise en page (CSS) :** Application d\'une cure d\'amaigrissement stricte sur les marges d\'impression de la première page. Cette récupération de quelques millimètres précieux permet d\'aspirer le bloc de combat vers le haut et d\'éviter la création intempestive d\'une page blanche.'
        ]
    },    {
        version: '15.16.13 - "L\'Inventaire Déployé 🎒"',
        date: '30 Avril 2026',
        changes: [
            '📄 **Parchemins (Bilan & PDF) :** Le bloc fourre-tout "Détails & Inventaire" a été entièrement démantelé. Les Compétences Futiles, l\'Équipement, les Contacts, les Langues et les Titres disposent désormais chacun de leur propre encart dédié.',
            '📏 **Mise en page (UX) :** Ces nouveaux encarts s\'étendent désormais sur toute la largeur de la feuille de personnage, offrant une bien meilleure lisibilité et résolvant les problèmes de textes tronqués pour les Héritiers possédant de vastes inventaires.'
        ]
    },    {
        version: '15.16.12 - "L\'Héritage Révélé 🧬"',
        date: '30 Avril 2026',
        changes: [
            '👁️ **Encyclopédie (Consultation) :** Résolution de l\'anomalie rendant invisible la Magie et l\'Héritage Inné des espèces féériques lors de leur simple consultation dans la base de données.',
            '🧠 **Cerveau Séparé (Hook) :** Alignement strict des alias de la requête SQL du composant `useEncyclopedia` sur ceux du moteur central (`supabaseGameData`). L\'interface visuelle parvient désormais à lire et afficher correctement les Capacités, Pouvoirs et Atouts de chaque fée explorée.'
        ]
    },    {
        version: '15.16.11 - "La Vitrine aux Trophées 🏆"',
        date: '30 Avril 2026',
        changes: [
            '🏆 **Communauté (Forge des Titres) :** La section d\'édition des badges honorifiques est dorénavant protégée par le sceau de l\'Architecte. Les joueurs peuvent y admirer l\'ensemble des trophées existants pour connaître les accomplissements à débloquer, mais l\'enclume de création et les pouvoirs de destruction restent l\'apanage exclusif du Super Administrateur.'
        ]
    },    {
        version: '15.16.10 - "L\'Échelle de l\'Évolution 🪜"',
        date: '30 Avril 2026',
        changes: [
            '📈 **Moteur de Jeu (Évolution) :** Application stricte de la règle du Livre de Base sur la progression des Profils. Lors d\'une dépense d\'expérience, l\'augmentation du Rang de Profil n\'octroie plus une simple addition linéaire, mais un cumul dynamique (le passage au Rang 3 offre 3 PP, et le passage ultérieur au Rang 4 offre 4 PP additionnels).',
            '🧠 **Cerveau Central (Conscience Temporelle) :** Le super-calculateur a été doté d\'une mémoire absolue. Il analyse la photographie de votre Héritier au moment exact de son scellage (`stats_scellees`), puis la compare avec son niveau de maîtrise actuel post-dépenses d\'XP pour calculer et distribuer les budgets de Points de Personnage sans la moindre erreur.'
        ]
    },    {
        version: '15.16.7 - "Le Carrefour des Spécialités 🛤️"',
        date: '29 Avril 2026',
        changes: [
            '🛤️ **Forge (BonusBuilder) :** La brique rose "Choix de Spécialité" a été totalement refondue. Les Gardiens peuvent désormais proposer un choix entre des spécialités appartenant à des compétences mères totalement différentes (ex: *Mêlée: Épée* OU *Tir: Pistolet*). La migration des anciennes briques vers le nouveau format se fait automatiquement à l\'ouverture de l\'outil.',
            '🧠 **Cerveau Central (Cerbère) :** Le moteur d\'analyse du personnage a appris à scinder dynamiquement les chaînes composites (grâce au séparateur `:`) pour affecter la spécialité choisie à la bonne compétence de base dans le Bilan.',
            '🖨️ **Parchemins (PDF & JSON) :** La Bible Autonome et le générateur PDF ont été recâblés sur ce nouveau format universel, garantissant que ces choix croisés s\'impriment correctement sur la feuille de personnage finale.'
        ]
    },    {
        version: '15.16.1 - "Le Tri Social 👔"',
        date: '29 Avril 2026',
        changes: [
            '👔 **Ergonomie (Vie Sociale) :** Remplacement intelligent du filtre de l\'Encyclopédie. L\'onglet de Vie Sociale et d\'Équipement ne propose plus de filtrer par Espèce Féérique, mais propose dorénavant un tri logique par "Profils Autorisés" (Aventurier, Savant, Gentleman...).',
            '🧠 **Cerveau Séparé :** Optimisation du hook `useEncyclopedia`. Le moteur de recherche (useMemo) englobe désormais la matrice de filtrage des profils, et nettoie automatiquement les listes affichées à l\'écran sans le moindre temps de latence.'
        ]
    },    {
        version: '15.15.0 - "La Fée Indépendante 🧚‍♀️"',
        date: '27 Avril 2026',
        changes: [
            '✂️ **Architecture (Découpage) :** Exorcisme majeur de l\'Étape 1. Le panneau des détails de la fée a été extrait vers un composant visuel autonome (`FairyDetailsPanel.js`), allégeant drastiquement le chef d\'orchestre principal.',
            '🧹 **Purification (Code Mort) :** Nettoyage par le vide des variables orphelines, des imports d\'icônes inutilisés et de l\'ancien code de bascule pour le sexe biologique de la fée.',
            '🧠 **Performances (React) :** Sécurisation absolue des Hooks (`useCallback`, `useEffect`) sur l\'assistant Pixie et sur la piste de dés tridimensionnelle pour éviter les re-rendus infinis et satisfaire les règles strictes de compilation.'
        ]
    },
    {
        version: '15.14.0 - "La Magie Décomposée 🔮"',
        date: '27 Avril 2026',
        changes: [
            '🔮 **Lisibilité (Magie) :** Le statut des Pouvoirs n\'est plus résumé sur une seule étiquette étouffante. Chaque pouvoir affiche désormais fièrement deux sceaux distincts : son Niveau (Standard, Profond, Légendaire) et sa Visibilité (Masqué, Démasqué).',
            '♻️ **Architecture (DRY) :** Centralisation du moteur de badges magiques dans le Dictionnaire du Jeu. Les composants de l\'Encyclopédie et de la Création de personnage se délestent de dizaines de lignes de code redondantes.',
            '🎨 **Design System :** Application d\'une charte colorimétrique claire pour les nouveaux doubles badges : Émeraude pour le Standard, Indigo pour le Profond, et Doré pour le Légendaire.'
        ]
    },    {
        version: '15.13.0 - "La Mémoire Intacte 🧠"',
        date: '27 Avril 2026',
        changes: [
            '🛡️ **Stabilité Temporelle (Anti-Amnésie) :** Vos brouillons de personnages et signalements de bugs sont désormais en sécurité. Le noyau du jeu ne se réinitialise plus inutilement lorsque vous basculez d\'un onglet à l\'autre (ex: pour lire vos PDF).',
            '🧠 **Architecture (Cerveau Séparé) :** Exorcisme majeur de la Modale de l\'Encyclopédie. Toute l\'énorme machinerie traduisant les données brutes de la base de données vers l\'interface visuelle a été isolée dans un Hook autonome (`useEncyclopediaModal`).',
            '🧲 **Ergonomie (Tri Magnétique) :** Lors de l\'édition d\'une Fée, les Atouts, Pouvoirs et Capacités déjà acquis sont dorénavant aimantés au sommet de la liste, classés par ordre alphabétique, évitant de longues recherches.',
            '✨ **Éditeur Narratif (Auto-Formateur) :** Finies les longues lignes condensées et illisibles ! Les Avantages et Désavantages s\'affichent sous forme de puces élégantes, et l\'éditeur ajoute dynamiquement la puce suivante via la touche Entrée.',
            '🧹 **Nettoyage (Console) :** Purge des fonctions génératrices de clés (UUID) obsolètes dans le moteur de l\'Encyclopédie pour apaiser le compilateur.'
        ]
    },    {
        version: '15.12.0 - "La Fontaine du DRY ⛲"',
        date: '26 Avril 2026',
        changes: [
            '🧠 **Architecture (Cerveau Centralisé) :** Éradication totale des calculs de combat en doublon. Le moteur central (Reducer) compile désormais de manière autonome l\'Esquive, la Parade et les Points de Vie dès qu\'une compétence évolue, devenant l\'unique dépositaire de la Vérité Absolue.',
            '☁️ **Base de Données (Purge) :** Le compacteur de sauvegarde vers Supabase a été allégé de ses redondances mathématiques. Il photographie dorénavant l\'état exact du Cerveau sans recalculer le combat, garantissant une intégrité absolue des données JSONB.',
            '📜 **Parchemin (Pureté Front-End) :** La page du Bilan Visuel a été délestée de son usine à gaz algorithmique. Elle redevient une interface React pure (JSX/Tailwind) qui se contente d\'afficher les statistiques pré-calculées, supprimant toute divergence entre l\'affichage à l\'écran et le PDF imprimé.'
        ]
    },
    // ============================================================================
    // 🧠 REX — Mémoire de l\'Assistant (ne pas supprimer, ne pas afficher dans l\'UI)
    // ============================================================================
    // Session du 16 Mai 2026 — Bug « Sans plancher » + Procédure admin
    //
    // Ce qui a été appris :
    //   1. Ne JAMAIS mocker `bonusCalculator` dans les tests hooks — `jest.mock`
    //      avec `jest.fn()` dans la factory produit silencieusement un mock cassé
    //      qui retourne `undefined`. Utiliser le module réel (pur, sans effets de bord).
    //
    //   2. Pour déboguer un mock suspect : ajouter un test `it('debug')` qui
    //      `require()` le module et appelle la fonction directement — ça évite
    //      de tourner en rond 30 minutes.
    //
    //   3. Message aux Héritiers : le rédiger AVANT le commit, il fait partie
    //      intégrante de la procédure `/version`.
    //
    //   4. Ne pas hésiter à lancer `node scripts/backup_supabase.js` dès l\'ouverture
    //      de session — déjà dans les règles, gratuit, 2 secondes.
    //
    //   5. Quand on ajoute une fonctionnalité admin (restauration de plancher),
    //      prévoir des tests de non-régression sur TabRepairJournaux pour couvrir
    //      les cas : validation échouée, restauration réussie, mise à jour du statut.
    //
    // Tests de non-régression à créer (TODO) :
    //   - TabRepairJournaux.restoreFloor : validation OK → stats_scellees en base
    //   - TabRepairJournaux.restoreFloor : validation échoue → rien n\'est persisté
    //   - TabRepairJournaux.restoreFloor : plancher restauré + journal OK → statut OK
    //   - TabRepairJournaux.restoreFloor : plancher restauré + journal incomplet → statut PENDING
    // ============================================================================
];

// ✨ EXTRACTION DYNAMIQUE (Le Parseur est sécurisé !)
// On coupe la chaîne sur le tiret pour récupérer juste le numéro pour l'UI,
// tout en conservant le nom complet dans la modale des archives.
export const APP_VERSION = VERSION_HISTORY[0].version.split(' - ')[0] || VERSION_HISTORY[0].version;
export const BUILD_DATE = VERSION_HISTORY[0].date;
