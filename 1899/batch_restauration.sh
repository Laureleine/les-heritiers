#!/usr/bin/env bash
set -euo pipefail

# Batch de restauration des journaux 1899 — jour par jour avec timeout
# Usage: bash 1899/batch_restauration.sh [debut] [fin]
#   default: 1899-12-08 → 1899-12-31

START="${1:-1899-12-08}"
END="${2:-1899-12-31}"
TIMEOUT_PER_DAY="${3:-1800}"  # 30 min par jour (429 rate-limit Gemini ~4 min/appel)

echo ""
echo "╔══════════════════════════════════════════════╗"
echo "║     🗞️  BATCH RESTAURATION LE PETIT PARISIEN 1899  ║"
echo "╚══════════════════════════════════════════════╝"
echo "Période    : $START → $END"
echo "Timeout/jour : ${TIMEOUT_PER_DAY}s (${TIMEOUT_PER_DAY}s/60 min)"
echo "Début      : $(date '+%Y-%m-%d %H:%M:%S')"
echo ""

current="$START"
compteur_ok=0
compteur_ko=0

while [[ "$current" < "$END" || "$current" == "$END" ]]; do
  echo ""
  echo "╔══════════════════════════════════════════════╗"
  echo "║  📅  $current"
  echo "║  ⏱  $(date '+%H:%M:%S')"
  echo "╚══════════════════════════════════════════════╝"

  # Nettoyer les éventuels outputs résiduels
  rm -f "1899/output/journal_data_${current}.js" \
        "1899/output/le_petit_parisien_${current}_brut.txt" \
        "1899/output/le_petit_parisien_${current}_propre.txt" \
        "1899/output/event_day_${current}.json"

  # Lancer le pipeline avec timeout
  if timeout "$TIMEOUT_PER_DAY" python 1899/pipeline_journalier.py --date "$current"; then
    echo "  ✅  $current terminé avec succès à $(date '+%H:%M:%S')"
    compteur_ok=$((compteur_ok + 1))
  else
    exit_code=$?
    if [ $exit_code -eq 124 ]; then
      echo "  ⏰  $current TIMEOUT après ${TIMEOUT_PER_DAY}s — passage au suivant"
    else
      echo "  ❌  $current échoué (code $exit_code) à $(date '+%H:%M:%S') — passage au suivant"
    fi
    compteur_ko=$((compteur_ko + 1))
  fi

  # Incrémenter d'un jour
  current=$(python -c "
from datetime import datetime, timedelta
d = datetime.strptime('$current', '%Y-%m-%d') + timedelta(days=1)
print(d.strftime('%Y-%m-%d'))
")
done

echo ""
echo "╔══════════════════════════════════════════════╗"
echo "║  🎉 BATCH TERMINÉ                            ║"
echo "║  Fin : $(date '+%Y-%m-%d %H:%M:%S')"
echo "║  ✅ réussis : $compteur_ok   ❌ échoués : $compteur_ko"
echo "╚══════════════════════════════════════════════╝"
