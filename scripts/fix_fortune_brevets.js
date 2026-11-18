// scripts/fix_fortune_brevets.js
// Ticket « Fouinard, Brevet » (Merlin Pellinore, 5 sept. 2026) : l'Atout Brevets (+2 Fortune)
// n'était pas compté dans certaines fiches. Réparation décidée le 18/11/2026.
// Dry-run par défaut ; --apply pour écrire.
require('dotenv').config();
const { Client } = require('pg');

const APPLY = process.argv.includes('--apply');
const FIXES = [
  { id: '75b95a75-a2bb-4f6f-896c-11c5201ba056', nom: 'Petrus',               fortune: 12, socle: 12 },
  { id: '9645a073-2e4f-4f77-9320-610d0434abd4', nom: 'Antoine Destrel',      fortune: 6,  socle: 6 },
  { id: '15d64666-9704-4ddd-9194-51526372c47d', nom: 'Milo Branquy',         fortune: 7,  socle: 7 },
  { id: 'fa9bf43a-4c11-4406-a0e3-93a73f931d35', nom: 'Milo Branquy (Saisie)', fortune: 7,  socle: 7 },
];

(async () => {
  const c = new Client({ connectionString: process.env.SUPABASE_DB_URL });
  await c.connect();
  await c.query('BEGIN');
  for (const f of FIXES) {
    const ch = (await c.query(`select nom, fortune, data->'stats_scellees'->'fortune' socle from characters where id=$1 for update`, [f.id])).rows[0];
    if (!ch || ch.nom !== f.nom) throw new Error(`Fiche inattendue ${f.id} : ${ch?.nom}`);
    const label = ch.fortune === f.fortune
      ? `Correction : l'Atout Brevets est intégré au socle de Fortune (${ch.socle} → ${f.socle}) — Fortune inchangée`
      : `Correction : Fortune de l'Atout Brevets enfin comptée (${ch.fortune} → ${f.fortune})`;
    console.log(`${f.nom.padEnd(24)} Fortune ${ch.fortune} → ${f.fortune} | socle ${ch.socle} → ${f.socle}\n   journal : ${label}`);
    await c.query(
      `update characters set fortune=$2, data=jsonb_set(data, '{stats_scellees,fortune}', to_jsonb($3::int)), updated_at=now() where id=$1`,
      [f.id, f.fortune, f.socle]);
    await c.query(
      `insert into xp_transactions (character_id, type, code, label, valeur, rang_final, date_mouvement)
       values ($1, 'GAIN', 'FORTUNE_ELEVATION', $2, 0, $3, clock_timestamp())`,
      [f.id, label, f.fortune]);
  }
  await c.query(APPLY ? 'COMMIT' : 'ROLLBACK');
  console.log(APPLY ? '\n✅ Appliqué.' : '\n(dry-run : rien écrit — relancer avec --apply)');
  await c.end();
})().catch(async (e) => { console.error('❌', e.message); process.exit(1); });
