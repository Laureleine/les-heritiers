# Contrat de lecture — données 1899 (base partagée)

La base Supabase `cijtzdfwrmbftmwookac` est partagée entre deux projets :
- **anna-chronique** : seul rédacteur des données de presse.
- **Héritiers** : lecteur uniquement sur les tables ci-dessous.

## Tables lues par Héritiers

| Table | Colonnes utilisées | Filtre habituel |
|---|---|---|
| `journal_articles` | `article_index`, `page`, `category`, `title`, `summary`, `paragraphs` | `.eq('date', dateStr)` |
| `journal_daily_info` | `*` | `.eq('date', dateStr).single()` |
| `historical_events` | `date`, `paris`, `france`, `monde` | aucun (chargement complet) |
| `journal_holidays` | `*` | aucun (chargement complet) |
| `editions` | `gallica_ark` | `.eq('source','petit_parisien').eq('date', dateStr)` |

Héritiers n'écrit dans **aucune** de ces tables.

## Table écrite par Héritiers

`journal_votes` — keyed par `date` uniquement. Héritiers n'utilise ni `article_id` ni `article_index` comme clé de vote.

## Règle de pagination

PostgREST renvoie au maximum 1 000 lignes par `select()`, silencieusement.
Toute lecture d'une table pouvant dépasser 1 000 lignes doit paginer :

```js
const all = [];
let debut = 0;
while (true) {
  const { data, error } = await supabase
    .from('ma_table')
    .select('...')
    .order('date')        // ordre total
    .order('id')          // second critère si plusieurs lignes par date
    .range(debut, debut + 999);
  if (error) throw error;
  all.push(...(data || []));
  if (!data || data.length < 1000) break;
  debut += 1000;
}
```

Tables concernées dans Héritiers : `historical_events`, `journal_holidays`, et la RPC `get_article_dates`.

## Instabilité des clés d'articles

Les articles d'une date sont supprimés puis réinsérés quand le pipeline anna-chronique les retraite.
`journal_articles.id` et `article_index` **ne sont pas des identifiants stables**.
Ne jamais stocker ni construire d'URL à partir de ces valeurs.
La clé de vote par date (`journal_votes.date`) est la bonne approche.

## Lien vers le journal original

Le lien Gallica est construit depuis `editions.gallica_ark` :

```
https://gallica.bnf.fr/ark:/12148/{gallica_ark}
```

La couverture est incomplète — beaucoup de dates n'ont pas encore de ligne `editions` ou ont `gallica_ark` NULL. Le lien ne s'affiche que si l'ARK est non-null. Ne jamais deviner ou construire un ARK.
