// scripts/flag_anomalie_espece.js
// Pose data.anomalie_espece_a_confirmer = { pouvoir, options } sur les personnages
// dont le pouvoir d'Anomalie existe chez plusieurs espèces (bug < v18.1.8 : la
// première espèce par ordre alphabétique était enregistrée). Le joueur confirme
// ensuite son espèce via AnomalieEspeceConfirmModal à sa prochaine connexion.
// Usage : node scripts/flag_anomalie_espece.js [--apply]
require('dotenv').config({ quiet: true });
const { Client } = require('pg');

const APPLY = process.argv.includes('--apply');
const SKIP = ['c2de883c-90a8-4466-ba35-5bc0eb568b8b']; // Aristide Robelin, déjà corrigé (Gnome)

(async () => {
  const c = new Client({ connectionString: process.env.SUPABASE_DB_URL });
  await c.connect();
  const powers = (await c.query(`
    select ft.name f, fp.nom, fp.type_pouvoir t
    from fairy_type_powers tp
    join fairy_types ft on ft.id = tp.fairy_type_id
    join fairy_powers fp on fp.id = tp.power_id`)).rows;
  const chars = (await c.query(`
    select id, nom, type_fee, pouvoirs, data->>'anomalie_espece_seconde' esp
    from characters where data ? 'anomalie_espece_seconde'`)).rows;

  for (const ch of chars) {
    if (SKIP.includes(ch.id)) continue;
    const own = powers.filter(p => p.f === ch.type_fee).map(p => p.nom);
    const pouvoir = (ch.pouvoirs || []).find(p => !own.includes(p) &&
      powers.some(q => q.nom === p && q.f === ch.esp));
    if (!pouvoir) continue;
    const options = [...new Set(powers
      .filter(q => q.nom === pouvoir && q.f !== ch.type_fee && (q.t === 'masque' || q.t === 'demasque'))
      .map(q => q.f))].sort();
    if (options.length < 2) continue;
    console.log(`${ch.nom} | ${pouvoir} | stocké ${ch.esp} | options ${options.join(', ')}`);
    if (APPLY) {
      await c.query(
        `update characters set data = jsonb_set(data, '{anomalie_espece_a_confirmer}', $1::jsonb) where id = $2`,
        [JSON.stringify({ pouvoir, options }), ch.id]);
    }
  }
  console.log(APPLY ? '✓ Drapeaux posés.' : '(essai à blanc — relancer avec --apply)');
  await c.end();
})();
