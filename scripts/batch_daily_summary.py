# -*- coding: utf-8 -*-
import os, sys, json, re, time, psycopg2
from pathlib import Path

# Charger les variables d'env manuellement
env_root = Path(__file__).resolve().parent.parent

# Lire 1899/.env pour GEMINI_API_KEY
env_pipeline = env_root / '1899' / '.env'
if env_pipeline.exists():
    for line in env_pipeline.read_text(encoding='utf-8').splitlines():
        line = line.strip()
        if line and not line.startswith('#') and '=' in line:
            k, v = line.split('=', 1)
            v = v.strip().strip('"').strip("'")
            os.environ.setdefault(k.strip(), v.strip())

# Lire .env racine pour SUPABASE_DB_URL
env_root_file = env_root / '.env'
if env_root_file.exists():
    for line in env_root_file.read_text(encoding='utf-8').splitlines():
        line = line.strip()
        if line and not line.startswith('#') and '=' in line:
            k, v = line.split('=', 1)
            v = v.strip().strip('"').strip("'")
            os.environ.setdefault(k.strip(), v.strip())

SUPABASE_DB_URL = os.getenv('SUPABASE_DB_URL')
GEMINI_API_KEY = os.getenv('GEMINI_API_KEY')

if not SUPABASE_DB_URL:
    print("ERREUR: SUPABASE_DB_URL manquant dans .env")
    sys.exit(1)

if not GEMINI_API_KEY:
    print("ERREUR: GEMINI_API_KEY manquant dans 1899/.env")
    sys.exit(1)

OUTPUT_DIR = env_root / '1899' / 'output'

# ============================================================
# 1. Trouver les dates avec articles mais sans daily_summary
# ============================================================
print("[1/5] Recherche des dates avec articles mais sans resume...")
conn = psycopg2.connect(SUPABASE_DB_URL)
cur = conn.cursor()

cur.execute("""
    SELECT a.date::text
    FROM public.journal_articles a
    LEFT JOIN public.journal_daily_info d ON a.date::text = d.date::text
    WHERE (d.daily_summary IS NULL OR d.daily_summary = '')
      AND (a.category IS NULL OR a.category NOT IN ('Metro', 'Lune', 'Meteo'))
    GROUP BY a.date
    ORDER BY a.date
""")
rows = cur.fetchall()
cur.close()
conn.close()

if not rows:
    print("Toutes les dates ont deja un resume. Rien a faire.")
    sys.exit(0)

dates_to_process = [r[0] for r in rows]
print(f"{len(dates_to_process)} dates sans resume trouvees: {dates_to_process}")

# ============================================================
# 2. Configurer Gemini
# ============================================================
print("[2/5] Configuration de Gemini...")
import google.generativeai as genai
genai.configure(api_key=GEMINI_API_KEY)
model = genai.GenerativeModel('gemini-flash-lite-latest')

# ============================================================
# 3. Fonction : charger les articles depuis le fichier JS
# ============================================================
def load_articles_from_js(date_str):
    js_path = OUTPUT_DIR / f"journal_data_{date_str}.js"
    if not js_path.exists():
        return None
    content = js_path.read_text(encoding="utf-8")
    json_part = content.split("const JOURNAL_ARTICLES = ")[1].strip().rstrip(";")
    return json.loads(json_part)

# ============================================================
# 4. Fonction : generer et inserer le resume
# ============================================================
def generate_daily_summary(date_str, articles):
    articles_json = json.dumps([
        {"category": a.get("category",""), "title": a.get("title",""), "summary": a.get("summary","")}
        for a in articles if a.get("summary")
    ], ensure_ascii=False, indent=2)

    if not articles_json or len(articles_json) < 50:
        print(f"  -> Pas assez d'articles avec resume pour {date_str}")
        return False

    prompt = f"""
Tu es un redacteur en chef du Petit Parisien. Tu viens de recevoir les depeches pour la journee du {date_str}.

A partir des articles ci-dessous (titre, resume, rubrique), redige un flash-info de 5 a 8 lignes maximum, comme si tu composais la une du journal du lendemain.

N'ajoute PAS d'en-tete avec la date ou le nom du journal -- la date est deja affichee dans l'interface.

Regles de style :
- Ton alerte et solennel, facon speaker radio/tv de l'epoque
- Vocabulaire 1900 : "la une", "depeche", "notre correspondant", "la capitale", "la chambre des deputes", "l'opinion publique", "le tout-Paris", "les faits divers"
- Pas d'anachronismes techniques
- Alterner grands sujets politiques/sociaux et faits divers pittoresques
- Terminer par une note legere ou une curiosite

Format attendu (texte brut, sans JSON) :

**TITRE ACCROCHE** (1 ligne)
-- Sujet principal : 1-2 phrases
-- Sujet secondaire : 1 phrase
-- Fait divers ou curiosite : 1 phrase
-- Phrase de conclusion choc ou transition

Articles du jour :
{articles_json}
"""
    try:
        response = model.generate_content(prompt)
        daily_summary = response.text.strip()
        print(f"  -> Resume genere ({len(daily_summary)} caracteres)")

        conn = psycopg2.connect(SUPABASE_DB_URL)
        cur = conn.cursor()
        cur.execute(
            "UPDATE public.journal_daily_info SET daily_summary = %s WHERE date = %s",
            (daily_summary, date_str)
        )
        if cur.rowcount == 0:
            cur.execute(
                "INSERT INTO public.journal_daily_info (date, sunrise, sunset, moon_phase, moon_emoji, weather_icon, weather_label, weather_temp, daily_summary) "
                "VALUES (%s, '06:00', '18:00', 'Nouvelle Lune', '~~', '//', 'Couvert', '12C', %s)",
                (date_str, daily_summary)
            )
        conn.commit()
        cur.close()
        conn.close()
        print(f"  -> Sauvegarde en base pour {date_str}")
        return True
    except Exception as e:
        print(f"  -> Erreur pour {date_str} : {e}")
        return False

# ============================================================
# 5. Boucle principale
# ============================================================
print(f"[3/5] Generation des resumes pour {len(dates_to_process)} dates...")
success = 0
skipped = 0
errors = 0

for date_str in dates_to_process:
    print(f"\n--- {date_str} ---")

    articles = load_articles_from_js(date_str)
    if articles is None:
        print(f"  -> Fichier local introuvable, chargement depuis la BDD...")
        try:
            conn = psycopg2.connect(SUPABASE_DB_URL)
            cur = conn.cursor()
            cur.execute(
                "SELECT title, category, summary FROM public.journal_articles WHERE date = %s ORDER BY id",
                (date_str,)
            )
            db_articles = [{"title": r[0], "category": r[1], "summary": r[2]} for r in cur.fetchall()]
            cur.close()
            conn.close()
            if db_articles:
                articles = db_articles
                print(f"  -> {len(articles)} articles charges depuis la BDD")
            else:
                print(f"  -> Aucun article en base non plus")
                skipped += 1
                continue
        except Exception as e:
            print(f"  -> Erreur BDD : {e}")
            skipped += 1
            continue

    has_summary = any(a.get("summary") for a in articles)
    if not has_summary:
        print(f"  -> Aucun article avec resume IA")
        skipped += 1
        continue

    ok = generate_daily_summary(date_str, articles)
    if ok:
        success += 1
    else:
        errors += 1

    time.sleep(6)  # respect quota Gemini free tier: 15 req/min

print(f"\n=== BILAN ===")
print(f"{success} generes, {skipped} ignores, {errors} erreurs")
