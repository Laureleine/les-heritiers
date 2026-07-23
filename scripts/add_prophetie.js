require('dotenv').config();
const { Client } = require('pg');

const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });
client.connect().then(async () => {
    await client.query(`
        ALTER TABLE public.characters
        ADD COLUMN IF NOT EXISTS prophetie TEXT;
    `);
    console.log('✅ Colonne prophetie ajoutée à characters');
    await client.end();
}).catch(e => { console.error('Erreur:', e.message); process.exit(1); });
