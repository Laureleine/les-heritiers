#!/usr/bin/env bash
# heritiers_init_markdown.sh
# Génère les fichiers .md localement dans /markdown pour NotebookLM
set -euo pipefail

# ── 1. Préparation du répertoire ──────────────────────────────────────────────
MD_DIR="markdown"
echo "📂 Préparation du dossier /$MD_DIR..."

if [ -d "$MD_DIR" ]; then
    echo "🧹 Nettoyage de l'ancien dossier..."
    rm -rf "$MD_DIR"
fi
mkdir -p "$MD_DIR"

# ── 2. Collecte et Conversion ─────────────────────────────────────────────────
JS_FILES=$(find src \( -name "*.js" -o -name "*.jsx" -o -name "*.tsx" \) | sort)
TOTAL=$(echo "$JS_FILES" | wc -l)
echo "📝 Conversion de $TOTAL fichiers vers /$MD_DIR..."

COUNT=0
while IFS= read -r FILE; do
  COUNT=$((COUNT + 1))
  [ ! -f "$FILE" ] && continue

  # Nommage identique pour la cohérence : utils_auth_js.md
  REL_PATH="${FILE#src/}"
  NAME=$(echo "$REL_PATH" | sed 's|/|_|g' | sed 's|\.|_|g').md
  
  # Copie le contenu vers le nouveau fichier .md
  cp "$FILE" "$MD_DIR/$NAME"
  
  echo -ne "  Progression : $COUNT/$TOTAL\r"
done <<< "$JS_FILES"

echo -e "\n✅ Fichiers Markdown prêts dans le dossier /$MD_DIR."

# ── 3. Rappel NotebookLM ──────────────────────────────────────────────────────
echo ""
echo "🚀 Pour mettre à jour NotebookLM :"
echo "1. Allez dans votre Notebook."
echo "2. Cliquez sur 'Ajouter une source' -> 'Importer des fichiers'."
echo "3. Sélectionnez TOUS les fichiers dans le dossier : $(pwd)/$MD_DIR"
echo ""