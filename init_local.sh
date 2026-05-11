#!/usr/bin/env bash
# heritiers_init_local.sh
set -euo pipefail

[ -f .env ] || { echo "❌ .env manquant"; exit 1; }

MD_DIR="markdown"
echo "📂 Préparation du dossier /$MD_DIR..."
mkdir -p "$MD_DIR"
rm -f "$MD_DIR"/*.md

# Collecte des fichiers
JS_FILES=$(find src -type f \( -name "*.js" -o -name "*.jsx" -o -name "*.tsx" \) | sort)
TOTAL=$(echo "$JS_FILES" | wc -l)

echo "📝 Conversion de $TOTAL fichiers vers /$MD_DIR..."
for FILE in $JS_FILES; do
    REL_PATH="${FILE#src/}"
    # Nom de fichier : components_Auth_js.md
    NAME=$(echo "$REL_PATH" | tr '/' '_' | tr '.' '_').md
    
    # On copie le fichier brut
    cp "$FILE" "$MD_DIR/$NAME"
done

echo "✅ Dossier /$MD_DIR prêt."

if [ -f "notebooklm_refresh_local.py" ]; then
    python notebooklm_refresh_local.py "$MD_DIR"
fi