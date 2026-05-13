#!/bin/bash
# db-schema-dump.sh - Export structure TOUTES tables Supabase → schema_YYYYMMDD.txt
# Nécessite SUPABASE_DB_URL dans .env

if [ -z "$SUPABASE_DB_URL" ]; then
  SUPABASE_DB_URL=$(grep '^SUPABASE_DB_URL=' .env 2>/dev/null | head -1 | cut -d '=' -f2- | sed "s/^['\"]//;s/['\"]$//")
fi

if [ -z "$SUPABASE_DB_URL" ]; then
  echo "❌ Variable SUPABASE_DB_URL manquante. Ajoutez-la dans .env"
  exit 1
fi

echo "📋 Dump structure DB → schema_$(date +%Y%m%d_%H%M%S).txt"

# Créé dossier
mkdir -p db-schemas

# 1. LISTE DES TABLES
TABLES=$(PGPASSWORD=$(echo "$SUPABASE_DB_URL" | sed -E 's/.*:([^@]+)@.*/\1/') \
  psql "$(echo "$SUPABASE_DB_URL" | sed 's/^.*@//')" \
  -t -c "\dt public.*" | grep -v '^ ' | awk '{print $3}' | tr -d '│|')

# 2. STRUCTURE PAR TABLE → schema.txt
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
SCHEMA_FILE="db-schemas/schema_${TIMESTAMP}.txt"

echo "📊 DB Schema dump - $(date)" > "$SCHEMA_FILE"
echo "========================" >> "$SCHEMA_FILE"

for table in $TABLES; do
  echo "" >> "$SCHEMA_FILE"
  echo "TABLE: $table" >> "$SCHEMA_FILE"
  echo "-------" >> "$SCHEMA_FILE"
  
  PGPASSWORD=$(echo "$SUPABASE_DB_URL" | sed -E 's/.*:([^@]+)@.*/\1/') \
    psql "$(echo "$SUPABASE_DB_URL" | sed 's/^.*@//')" \
    -c "\d $table" >> "$SCHEMA_FILE"
done

echo "✅ Structure sauvegardée : $SCHEMA_FILE ($(ls -lh "$SCHEMA_FILE" | awk '{print $5}'))"
