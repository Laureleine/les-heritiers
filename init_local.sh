#!/usr/bin/env bash
# heritiers_init_local.sh
set -euo pipefail

# ── 1. Préparation du dossier ────────────────────────────────────────────────
MD_DIR="markdown"
echo "📂 Préparation du dossier /$MD_DIR..."

# On utilise -p pour créer et on nettoie le contenu sans supprimer le dossier
# pour éviter des soucis de permissions Windows
mkdir -p "$MD_DIR"
rm -f "$MD_DIR"/*.md

# ── 2. Collecte des fichiers ──────────────────────────────────────────────────
# Correction : On force l'utilisation de slashs et on s'assure que find renvoie quelque chose
echo "🔍 Recherche des fichiers dans src/..."
JS_FILES=$(find src -type f \( -name "*.js" -o -name "*.jsx" -o -name "*.tsx" \) | sort)

# Vérification si la liste est vide
if [ -z "$JS_FILES" ]; then
    echo "❌ Erreur : Aucun fichier .js, .jsx ou .tsx trouvé dans src/"
    exit 1
fi

TOTAL=$(echo "$JS_FILES" | wc -l)
echo "📝 Conversion de $TOTAL fichiers vers /$MD_DIR..."

# ── 3. Boucle de conversion ──────────────────────────────────────────────────
COUNT=0
# Utilisation d'une boucle for plus robuste pour Git Bash
for FILE in $JS_FILES; do
    COUNT=$((COUNT + 1))
    
    # Transformation du nom : src/components/Card.js -> components_Card_js.md
    # On gère les deux types de slashs (Windows/Linux)
    REL_PATH="${FILE#src/}"
    NAME=$(echo "$REL_PATH" | tr '/' '_' | tr '\\' '_' | sed 's|\.|_|g').md
    
    # On effectue la copie
    cp "$FILE" "$MD_DIR/$NAME"
    
    # Affichage de progression
    if (( COUNT % 10 == 0 )) || (( COUNT == TOTAL )); then
        echo "  [$COUNT/$TOTAL] $NAME"
    fi
done

echo -e "\n✅ Dossier /$MD_DIR synchronisé avec $(ls "$MD_DIR" | wc -l) fichiers."

# ── 4. Synchronisation NotebookLM ──────────────────────────────────────────
if [ -f "notebooklm_refresh_local.py" ]; then
    echo "🔄 Lancement du script Python..."
    export PYTHONUNBUFFERED=1
    python notebooklm_refresh_local.py "$MD_DIR"
else
    echo "⚠️ notebooklm_refresh_local.py introuvable, sync Notebook annulée."
fi