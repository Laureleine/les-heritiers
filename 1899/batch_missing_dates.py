#!/usr/bin/env python3
"""
Batch Pipeline — Traite les dates manquantes du journal du plus récent au plus ancien.

Usage:
    python batch_missing_dates.py

Comportement :
    1. Trouve toutes les dates sans articles entre MIN(date) et MAX(date) dans journal_articles.
    2. Les trie par ordre décroissant (de la plus récente à la plus ancienne).
    3. Pour chaque date, lance pipeline_journalier.py --date <date>.
    4. Si le pipeline échoue (manque de tokens API), supprime les données partielles
       de cette date en base (journal_articles, historical_events, journal_daily_info)
       et s'arrête pour reprise le lendemain.
"""

import os
import sys
import re
import json
import subprocess
import time
from pathlib import Path
from datetime import date, timedelta

# Console UTF-8 sous Windows
if sys.platform.startswith('win'):
    try:
        sys.stdout.reconfigure(encoding='utf-8')
        sys.stderr.reconfigure(encoding='utf-8')
    except AttributeError:
        pass

BASE_DIR = Path(__file__).parent


def get_db_url():
    """Lit SUPABASE_DB_URL depuis le .env racine ou les variables d'environnement."""
    env_path = BASE_DIR.parent / ".env"
    if env_path.exists():
        for line in env_path.read_text(encoding="utf-8").splitlines():
            line = line.strip()
            if line.startswith("SUPABASE_DB_URL="):
                return line.split("=", 1)[1].strip().strip("'\"")
    return os.environ.get("SUPABASE_DB_URL")


def get_missing_dates(db_url):
    """Retourne la liste des dates sans articles, triées du plus récent au plus ancien,
    entre la MIN et la MAX des dates existantes dans journal_articles."""
    try:
        import psycopg2
        conn = psycopg2.connect(db_url)
        conn.autocommit = True
        cur = conn.cursor()

        cur.execute("SELECT MIN(date)::date, MAX(date)::date FROM public.journal_articles")
        row = cur.fetchone()
        if not row or not row[0] or not row[1]:
            print("ERREUR: Aucune date trouvee dans journal_articles.")
            cur.close()
            conn.close()
            return []

        min_date, max_date = row[0], row[1]
        print(f"Plage existante : {min_date} -> {max_date}")

        cur.execute("""
            SELECT d::date
            FROM generate_series(%s::date, %s::date, '1 day'::interval) d
            LEFT JOIN public.journal_articles a ON d::date = a.date
            WHERE a.date IS NULL
            ORDER BY d::date DESC
        """, (min_date, max_date))

        missing = [r[0] for r in cur.fetchall()]
        cur.close()
        conn.close()
        print(f"Dates manquantes trouvees : {len(missing)}")
        return missing

    except ImportError:
        print("ERREUR: psycopg2 requis. Installez avec : pip install psycopg2-binary")
        sys.exit(1)


def delete_date_from_db(db_url, date_str):
    """Supprime toutes les traces d'une date dans les tables du journal."""
    try:
        import psycopg2
        conn = psycopg2.connect(db_url)
        conn.autocommit = True
        cur = conn.cursor()

        for table in ['public.journal_articles', 'public.historical_events', 'public.journal_daily_info']:
            cur.execute(f"DELETE FROM {table} WHERE date = %s", (date_str,))
            print(f"  -> {table} nettoye")

        cur.close()
        conn.close()
        return True
    except Exception as e:
        print(f"  WARNING: Echec nettoyage DB : {e}")
        return False


def is_token_error(stderr_text):
    """Détecte si l'erreur est liée à un quota/tokens API."""
    token_patterns = [
        r"429",
        r"Quota exceeded",
        r"quota",
        r"rate limit",
        r"Resource has been exhausted",
        r"RESOURCE_EXHAUSTED",
        r"temporarily unavailable",
    ]
    for pattern in token_patterns:
        if re.search(pattern, stderr_text, re.IGNORECASE):
            return True
    return False


def main():
    import argparse
    parser = argparse.ArgumentParser(description="Traite les dates manquantes du journal.")
    parser.add_argument('--dry-run', action='store_true', help="Affiche les dates sans les traiter")
    args = parser.parse_args()

    db_url = get_db_url()
    if not db_url:
        print("ERREUR: SUPABASE_DB_URL non trouvee dans .env ni dans les variables d'environnement.")
        sys.exit(1)

    missing_dates = get_missing_dates(db_url)
    if not missing_dates:
        print("Aucune date manquante ! Toutes les actualites sont en base.")
        return

    pipeline_script = BASE_DIR / "pipeline_journalier.py"
    if not pipeline_script.exists():
        print(f"ERREUR: pipeline_journalier.py introuvable : {pipeline_script}")
        sys.exit(1)

    if args.dry_run:
        print(f"\nDates a traiter ({len(missing_dates)}) :")
        for d in missing_dates:
            date_str = d.isoformat() if hasattr(d, 'isoformat') else str(d)
            print(f"  - {date_str}")
        return

    python_exe = sys.executable or "python"

    for d in missing_dates:
        date_str = d.isoformat() if hasattr(d, 'isoformat') else str(d)
        sep = "=" * 60
        print(f"\n{sep}")
        print(f">>> Traitement de la date : {date_str}")
        print(sep)

        try:
            result = subprocess.run(
                [python_exe, str(pipeline_script), "--date", date_str],
                capture_output=True, text=True, encoding='utf-8', errors='replace',
                timeout=14400, cwd=str(BASE_DIR)
            )
        except subprocess.TimeoutExpired:
            print(f"\nTIMEOUT: {date_str} a depasse 4h. Nettoyage des donnees partielles...")
            delete_date_from_db(db_url, date_str)
            print(f"   -> Date {date_str} ignoree, passage a la suivante.\n")
            continue

        # Afficher la sortie du pipeline
        if result.stdout:
            print(result.stdout)
        if result.stderr:
            print(result.stderr, file=sys.stderr)

        if result.returncode == 0:
            restantes = len(missing_dates) - missing_dates.index(d) - 1
            print(f"OK: {date_str} traite avec succes ! {restantes} restante(s).")
            continue

        # Échec — vérifier si c'est un problème de tokens
        error_text = (result.stderr or "") + (result.stdout or "")
        if is_token_error(error_text):
            print(f"\nCRISE DE TOKENS sur {date_str} !")
            print(f"Nettoyage des donnees partielles de {date_str}...")
            delete_date_from_db(db_url, date_str)
            print(f"\nArret propre. {date_str} sera retente au prochain lancement.")
            sys.exit(0)
        else:
            print(f"\nERREUR: Echec sur {date_str} (non-token, code {result.returncode}).")
            print("   Date conservee en DB pour investigation. Arret.")
            sys.exit(1)


if __name__ == '__main__':
    main()
