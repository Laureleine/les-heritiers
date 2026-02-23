#!/bin/bash
# db-schema-dump.sh - Export structure TOUTES tables Supabase → schema_YYYYMMDD.txt

SUPABASE_DB_URL="postgresql://postgres.uvckugcixiugysnsbekb:Fred01Supabase@aws-1-eu-west-3.pooler.supabase.com:5432/postgres"

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
