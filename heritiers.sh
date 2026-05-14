#!/usr/bin/env bash
# heritiers.sh
set -euo pipefail

[ -f .env ] || { echo "❌ .env manquant"; exit 1; }
source .env

# ── 1. Identification du Delta Git ──────────────────────────────────────────
echo "🔍 Analyse des modifications Git dans src/..."

# Récupère les fichiers modifiés, ajoutés ou renommés
DELTA_FILES=$(git status --porcelain src/ | grep -E '^[MAR ]' | awk '{print $2}')

if [ -z "$DELTA_FILES" ]; then
    echo "✅ Aucun changement détecté dans src/. Travail terminé."
    exit 0
fi

TOTAL_DELTA=$(echo "$DELTA_FILES" | wc -l)
echo "📂 $TOTAL_DELTA fichier(s) modifié(s) détecté(s)."

# ── 3. Git Sync ─────────────────────────────────────────────────────────────
echo "💾 Git commit & push..."
# On évite 'git add .' qui peut inclure des fichiers systèmes invalides
git add src/ public/ package.json heritiers.sh notebooklm_refresh_local.py

# On vérifie si l'ajout a réussi avant de continuer
if [ $? -ne 0 ]; then
    echo "❌ Erreur lors du git add. Abandon."
    exit 1
fi

git commit -m "Sync delta to NotebookLM: $TOTAL_DELTA files" || echo "Pas de changements git"
git push
echo "🏁 Terminé !"