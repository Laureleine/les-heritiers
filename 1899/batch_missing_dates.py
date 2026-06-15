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
import threading
import queue
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


UNAVAILABLE_FILE = BASE_DIR / "gallica_unavailable.txt"


def load_unavailable_dates():
    """Retourne l'ensemble des dates connues comme absentes de Gallica."""
    if not UNAVAILABLE_FILE.exists():
        return set()
    return {line.strip() for line in UNAVAILABLE_FILE.read_text(encoding="utf-8").splitlines() if line.strip()}


def mark_date_unavailable(date_str):
    """Ajoute une date au fichier des dates indisponibles sur Gallica."""
    with UNAVAILABLE_FILE.open("a", encoding="utf-8") as f:
        f.write(date_str + "\n")
    print(f"   -> {date_str} ajoutee a gallica_unavailable.txt")


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

        unavailable = load_unavailable_dates()
        if unavailable:
            before = len(missing)
            missing = [d for d in missing if (d.isoformat() if hasattr(d, 'isoformat') else str(d)) not in unavailable]
            print(f"Dates ignorees (absentes Gallica) : {before - len(missing)}")

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


def run_pipeline(python_exe, script_path, date_str, timeout=14400):
    """Lance pipeline_journalier.py en streamant la sortie en temps reel.

    Retourne (returncode, stdout_text, stderr_text).
    """
    cmd = [python_exe, str(script_path), "--date", date_str]
    process = subprocess.Popen(
        cmd,
        stdout=subprocess.PIPE, stderr=subprocess.PIPE,
        stdin=subprocess.DEVNULL,
        text=True, encoding='utf-8', errors='replace',
        cwd=str(BASE_DIR)
    )

    stdout_lines = []
    stderr_lines = []
    deadline = time.time() + timeout

    def pipe_reader(pipe, lines, output_stream):
        try:
            for line in iter(pipe.readline, ''):
                lines.append(line)
                if output_stream:
                    output_stream.write(line)
                    output_stream.flush()
        finally:
            pipe.close()

    threads = [
        threading.Thread(target=pipe_reader, args=(process.stdout, stdout_lines, sys.stdout), daemon=True),
        threading.Thread(target=pipe_reader, args=(process.stderr, stderr_lines, sys.stderr), daemon=True),
    ]
    for t in threads:
        t.start()

    for t in threads:
        remaining = deadline - time.time()
        if remaining <= 0:
            process.kill()
            raise subprocess.TimeoutExpired(cmd, timeout)
        t.join(timeout=max(remaining, 1))

    # Vérifier si le délai est dépassé après les joins
    if time.time() >= deadline:
        process.kill()
        raise subprocess.TimeoutExpired(cmd, timeout)

    process.wait()
    return process.returncode, ''.join(stdout_lines), ''.join(stderr_lines)


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
            returncode, stdout_text, stderr_text = run_pipeline(
                python_exe, pipeline_script, date_str
            )
        except subprocess.TimeoutExpired:
            print(f"\nTIMEOUT: {date_str} a depasse 4h. Nettoyage des donnees partielles...")
            delete_date_from_db(db_url, date_str)
            print(f"   -> Date {date_str} ignoree, passage a la suivante.\n")
            continue

        if returncode == 0:
            restantes = len(missing_dates) - missing_dates.index(d) - 1
            print(f"OK: {date_str} traite avec succes ! {restantes} restante(s).")
            continue

        # Échec — vérifier si c'est un problème de tokens
        error_text = (stderr_text or "") + (stdout_text or "")
        if is_token_error(error_text):
            print(f"\nCRISE DE TOKENS sur {date_str} !")
            print(f"Nettoyage des donnees partielles de {date_str}...")
            delete_date_from_db(db_url, date_str)
            print(f"\nArret propre. {date_str} sera retente au prochain lancement.")
            sys.exit(0)
        elif returncode == 2:
            print(f"\nDate absente de Gallica : {date_str}. Ignoree.")
            mark_date_unavailable(date_str)
        else:
            print(f"\nERREUR: Echec sur {date_str} (non-token, code {returncode}).")
            print("   Date conservee en DB pour investigation. Arret.")
            sys.exit(1)


if __name__ == '__main__':
    main()
