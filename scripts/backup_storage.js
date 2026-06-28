// scripts/backup_storage.js
// Sauvegarde tous les fichiers des buckets Supabase dans le dossier storage/YYYY-MM-DD/
require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;
const DATE = process.env.BACKUP_DATE || new Date().toISOString().slice(0, 10);
const OUT_DIR = process.env.STORAGE_OUT_DIR || path.join(__dirname, '..', 'storage', DATE);

if (!SUPABASE_URL || !SERVICE_KEY) {
  console.error('❌ VITE_SUPABASE_URL et SUPABASE_SERVICE_KEY requis');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SERVICE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false },
});

async function listAllFiles(bucket, prefix = '') {
  const { data, error } = await supabase.storage.from(bucket).list(prefix, { limit: 1000 });
  if (error || !data) return [];
  const files = [];
  for (const item of data) {
    const fullPath = prefix ? `${prefix}/${item.name}` : item.name;
    if (!item.metadata) {
      // dossier — récursion
      files.push(...await listAllFiles(bucket, fullPath));
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

async function main() {
  const { data: buckets, error } = await supabase.storage.listBuckets();
  if (error) { console.error('❌ listBuckets:', error.message); process.exit(1); }

  let total = 0;
  let errors = 0;

  for (const bucket of buckets) {
    const files = await listAllFiles(bucket.name);
    console.log(`📂 ${bucket.name} — ${files.length} fichiers`);

    for (const filePath of files) {
      const dest = path.join(OUT_DIR, bucket.name, filePath);
      fs.mkdirSync(path.dirname(dest), { recursive: true });

      const { data, error } = await supabase.storage.from(bucket.name).download(filePath);
      if (error) {
        console.warn(`  ⚠ ${filePath}: ${error.message}`);
        errors++;
        continue;
      }
      fs.writeFileSync(dest, Buffer.from(await data.arrayBuffer()));
      total++;
    }
    console.log(`  ✓ ${files.length - errors} / ${files.length} téléchargés`);
  }

  console.log(`\n✅ Storage backup : ${total} fichiers → ${OUT_DIR}`);
  if (errors) { console.warn(`⚠ ${errors} erreurs`); process.exit(1); }
}

main().catch(e => { console.error('❌', e.message); process.exit(1); });
