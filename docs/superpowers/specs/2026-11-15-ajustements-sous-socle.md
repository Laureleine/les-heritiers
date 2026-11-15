# Ajustements sous le socle de scellement

Tickets : Olthomas « Perte de fortune » (placements risqués) + Ferval « Compétences » (retirer des points sur une fiche scellée).

## Problème

Au scellement, `data.stats_scellees` fige les valeurs de création (« Plancher de Verre »). Ensuite on ne peut retirer que ce qui a été acheté en XP, avec remboursement. Impossible de :
- corriger une erreur de création sur une fiche scellée ;
- appliquer une perte narrative (ruine, séquelle, amnésie) ;
- pour le Docte, modifier quoi que ce soit (fiche consultée en lecture seule ; RLS `characters UPDATE` = propriétaire ou super_admin uniquement).

## Périmètre

Valeurs couvertes : **Fortune**, **rangs de compétence (utiles)**, **caractéristiques**, **rangs de compétences futiles**.

**Bornes = celles des boutons +/− de la création** (pour le joueur comme pour le Docte) :
- caractéristique : jamais sous le **minimum de l'espèce** (`feeData.caracteristiques[stat].min`) ;
- compétence utile : jamais sous le **score de base** (profil + prédilections d'espèce) → rangs libres ≥ 0 ;
- compétence futile : jamais sous la base (prédilections futiles) → rangs libres ≥ 0 ;
- Fortune : **exception** — peut descendre jusqu'à 0, même sous le plancher métier/espèce (`plancherFortune`), mais franchir ce plancher affiche un **avertissement spécifique** (« Votre métier vous assure normalement une Fortune de N : descendre en dessous signifie une ruine véritable… ») et demande confirmation.
Maximums : ceux de l'évolution existante (Fortune 15, compétence 6/7, caractéristique selon l'espèce).

Le socle de scellement n'est donc plus une borne : seule la borne de création l'est.

## 1. Le joueur, sous son socle (correction d'erreur)

- Sur sa fiche scellée, le bouton « − » n'est plus bloqué au socle.
- Au premier clic sous le socle : **fenêtre d'avertissement + confirmation explicite** (« Ce rang fait partie de votre personnage scellé. Le retirer est définitif… Vous récupérerez N XP. »).
- Effet : la valeur baisse, **le socle baisse avec elle** (`stats_scellees` mis à jour, sinon le rang « réapparaîtrait » comme achat XP), et le joueur **récupère le coût XP du rang** sous forme de gain (ligne `GAIN` dans le journal, code `SOCLE_CORRECTION`) — pas un `REMBOURSEMENT`, car ce rang n'avait jamais été payé en XP.
- Il peut ensuite réinvestir ces XP ailleurs, au prix normal.

## 2. Le Docte, sur la fiche d'un membre de son cercle

- Dans la fiche consultée (aujourd'hui lecture seule), bouton **« Ajustement du Docte »** → panneau :
  - choix de la valeur (Fortune / caractéristique / compétence / futile), valeur actuelle → nouvelle valeur (+/−) ;
  - **motif obligatoire** (texte libre : « Krach de la Bourse », « Commotion »…) ;
  - si retrait : **perte sèche** ou **remboursement** du coût XP au joueur ;
  - si ajout : **offert** ou **payé avec l'XP du joueur** (refusé si XP insuffisante).
- Le socle suit la valeur à la baisse (une perte ne doit pas pouvoir être « remboursée » ensuite par le joueur). Un ajout offert relève le socle (rang non remboursable) ; un ajout payé en XP ne le touche pas.
- Écriture via une **fonction SQL `SECURITY DEFINER`** `docte_ajuster_fiche(...)` qui vérifie que l'appelant est le `docte_id` d'un cercle contenant ce personnage, applique la modification et écrit la ligne de journal. Pas d'ouverture de la RLS `UPDATE` aux Doctes.

## Information du joueur

- **Journal XP** : ligne `DOCTE_AJUSTEMENT` — « Ajustement du Docte : Fortune 5 → 3 — Krach de la Bourse » (valeur XP = 0 en perte sèche/offert, sinon le montant).
- **Notification à la connexion** : fenêtre listant les ajustements non vus (même mécanique que la confirmation d'Anomalie : drapeau dans `data`, effacé au clic « J'ai compris »).

## Points d'attention

- Baisser Esprit ou Féerie peut rendre la fiche incohérente (points de compétence gratuits, nombre de pouvoirs). Première version : **avertissement affiché** dans le panneau, pas de recalcul automatique en cascade.
- Le Docte agit sur la fiche en base ; si le joueur l'a ouverte en même temps, sa sauvegarde pourrait écraser l'ajustement → la fonction SQL modifie seulement les champs concernés, et le client du joueur doit recharger à la réception de la notification.
- Tests : fonctions pures (bornes, coût XP, mise à jour du socle), composant panneau, et test SQL de la fonction (refus si non-Docte).
