// Rattache au personnage les cartes personnelles acceptées sans character_id
// (personnage du joueur dans le cercle du don). Usage : node scripts/fix_grants_character_id.js [--apply]
require('dotenv').config({ quiet: true });
const { Client } = require('pg');
const apply = process.argv.includes('--apply');
const c = new Client({ connectionString: process.env.SUPABASE_DB_URL });
(async () => {
  await c.connect();
  const { rows } = await c.query(`
    SELECT g.id, g.card_type, cm.character_id, ch.nom AS perso
    FROM personal_card_grants g
    JOIN cercle_membres cm ON cm.cercle_id = g.cercle_id AND cm.user_id = g.granted_to
    LEFT JOIN characters ch ON ch.id = cm.character_id
    WHERE g.status = 'accepted' AND g.character_id IS NULL AND cm.character_id IS NOT NULL`);
  const parPerso = {};
  rows.forEach(r => { parPerso[r.perso] = (parPerso[r.perso] || 0) + 1; });
  console.log(`${rows.length} dons à rattacher :`, parPerso);
  const orphelins = await c.query(`SELECT count(*) FROM personal_card_grants WHERE status='accepted' AND character_id IS NULL`);
  console.log(`Dons acceptés sans personnage avant : ${orphelins.rows[0].count}`);
  if (apply && rows.length) {
    await c.query('BEGIN');
    for (const r of rows) await c.query('UPDATE personal_card_grants SET character_id = $1 WHERE id = $2', [r.character_id, r.id]);
    await c.query('COMMIT');
    const apres = await c.query(`SELECT count(*) FROM personal_card_grants WHERE status='accepted' AND character_id IS NULL`);
    console.log(`Appliqué. Dons acceptés sans personnage après : ${apres.rows[0].count}`);
  } else if (!apply) console.log('(essai à blanc — relancer avec --apply)');
  await c.end();
})().catch(async e => { console.error('❌', e.message); try { await c.query('ROLLBACK'); } catch {} process.exit(1); });
