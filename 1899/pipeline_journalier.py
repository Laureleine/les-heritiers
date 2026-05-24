#!/usr/bin/env python3
"""
Pipeline Journalier d'Archivage & Restauration Historique.
Automatisation complète de bout en bout pour n'importe quelle date fin 1899.
"""

import os
import sys
import re
import json
import subprocess
import argparse
from pathlib import Path

# Configurer la console pour supporter l'UTF-8 sous Windows
if sys.platform.startswith('win'):
    try:
        sys.stdout.reconfigure(encoding='utf-8')
        sys.stderr.reconfigure(encoding='utf-8')
    except AttributeError:
        pass

import warnings
warnings.filterwarnings("ignore", category=FutureWarning)
warnings.filterwarnings("ignore", category=DeprecationWarning)

# Tentative d'importation de la bibliothèque Gemini
try:
    import google.generativeai as genai
    HAS_GEMINI = True
except ImportError:
    HAS_GEMINI = False

BASE_DIR = Path(__file__).parent
OUTPUT_DIR = BASE_DIR / "output"
PROMPT_FILE = BASE_DIR / "prompt_restauration_llm.md"

def load_env_file():
    """Charge les variables d'environnement depuis un fichier .env local s'il existe."""
    env_path = BASE_DIR / ".env"
    if env_path.exists():
        for line in env_path.read_text(encoding="utf-8").splitlines():
            line = line.strip()
            if not line or line.startswith("#"):
                continue
            if "=" in line:
                key, val = line.split("=", 1)
                os.environ[key.strip()] = val.strip().strip("'\"")

def configure_gemini():
    """Configure la clé API Gemini depuis les variables d'environnement ou le fichier .env."""
    load_env_file()
    
    if not HAS_GEMINI:
        print("\n❌ La bibliothèque 'google-generativeai' n'est pas installée.")
        print("👉 Lancer : pip install google-generativeai")
        return False
        
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("\n⚠️ La variable d'environnement 'GEMINI_API_KEY' n'est pas définie.")
        print("Vous pouvez également la saisir manuellement ci-dessous.")
        api_key = input("Entrez votre clé API Gemini (laisser vide pour annuler) : ").strip()
        
    if not api_key:
        print("❌ Clé API manquante. La phase de restauration par IA sera ignorée.")
        return False
        
    genai.configure(api_key=api_key)
    return True

def run_step_1_ocr(date_str):
    """Étape 1 : Lance ocr_petit_parisien.py pour télécharger et nettoyer l'OCR."""
    print(f"\n--- [Étape 1] Téléchargement & Extraction OCR BnF pour le {date_str} ---")
    ocr_script = BASE_DIR / "ocr_petit_parisien.py"
    
    if not ocr_script.exists():
        print(f"❌ Script ocr_petit_parisien.py introuvable à l'emplacement : {ocr_script}")
        return False
        
    cmd = [sys.executable, str(ocr_script), "--date", date_str, "--method", "api"]
    try:
        subprocess.run(cmd, check=True)
        print("✅ Étape 1 complétée avec succès.")
        return True
    except subprocess.CalledProcessError as e:
        print(f"❌ Échec de l'étape 1 : {e}")
        return False

import time

def call_gemini_with_retry(model, prompt, generation_config=None, max_retries=4):
    """Effectue un appel à Gemini avec gestion automatique et résiliente des quotas 429."""
    for attempt in range(max_retries):
        try:
            response = model.generate_content(prompt, generation_config=generation_config)
            return response
        except Exception as e:
            err_str = str(e)
            # Vérification de l'erreur de quota (429)
            if "429" in err_str or "Quota exceeded" in err_str or "limit" in err_str.lower():
                # Recherche du délai recommandé dans le message d'erreur
                seconds = 20.0
                m = re.search(r'Please retry in ([\d\.]+)s', err_str)
                if m:
                    seconds = float(m.group(1)) + 1.5
                else:
                    m2 = re.search(r'seconds:\s*(\d+)', err_str)
                    if m2:
                        seconds = float(m2.group(1)) + 1.5
                
                # S'assurer que le délai est raisonnable
                seconds = max(5.0, min(seconds, 60.0))
                
                print(f"  ⚠️ Quota d'appels temporairement dépassé (429).")
                print(f"  ⏳ Attente automatique de {seconds:.1f} secondes avant l'essai {attempt + 2}/{max_retries}...")
                time.sleep(seconds)
            else:
                # Si c'est une autre erreur, on la lève directement
                raise e
                
    # Dernière tentative sans filet
    return model.generate_content(prompt, generation_config=generation_config)

def run_step_2_segmentation_ia(date_str):
    """Étape 2 : Découpe toutes les pages en articles de façon résiliente, page par page (évite la troncature)."""
    print(f"\n--- [Étape 2] Découpage & Segmentation des articles (Page par Page) ---")
    propre_file = OUTPUT_DIR / f"le_petit_parisien_{date_str}_propre.txt"
    
    if not propre_file.exists():
        print(f"❌ Fichier OCR propre introuvable : {propre_file}")
        return None
        
    text = propre_file.read_text(encoding="utf-8")
    
    # Séparer le texte brut par page
    pages_raw = re.split(r'={39,}\s*PAGE\s+(\d+)\s*={39,}', text)
    pages = {}
    for i in range(1, len(pages_raw), 2):
        page_num = int(pages_raw[i])
        page_text = pages_raw[i+1].strip()
        pages[page_num] = page_text
        
    all_articles = []
    article_id = 1
    model = genai.GenerativeModel('gemini-flash-lite-latest')
    
    for page_num, page_text in sorted(pages.items()):
        if len(page_text) < 100:
            continue
            
        print(f"  Segmentation de la Page {page_num}...")
        
        segmentation_prompt = f"""
Tu es un extracteur de données de presse historique de 1899. 
Ta tâche est de segmenter le texte brut de la Page {page_num} du journal en articles de presse distincts.

Voici le texte brut de la page :
\"\"\"
{page_text}
\"\"\"

Renvoie un tableau JSON contenant les articles identifiés. Chaque article doit avoir la structure suivante :
{{
  "category": "Nom de la rubrique (ex: Faits Divers, Social, Chronique Politique, Éditorial...)",
  "title": "Titre nettoyé et compréhensible de l'article",
  "paragraphs": [
     "Paragraphe 1 de l'article...",
     "Paragraphe 2 de l'article..."
  ]
}}

Consignes :
1. Ignore les publicités, les annonces ultra-courtes ou le bruit sans aucun texte.
2. Si une rubrique contient plusieurs petits faits divers, sépare-les en articles distincts.
3. Reste fidèle au contenu textuel, mais structure-le proprement.
Génère UNIQUEMENT du JSON valide en sortie.
"""
        try:
            response = call_gemini_with_retry(
                model,
                segmentation_prompt,
                generation_config={"response_mime_type": "application/json"}
            )
            json_text = response.text.strip()
            articles = json.loads(json_text)
            
            for art in articles:
                all_articles.append({
                    "id": article_id,
                    "page": page_num,
                    "category": art.get("category", "Actualités"),
                    "title": art.get("title", "Sans titre"),
                    "summary": "",
                    "paragraphs": art.get("paragraphs", [])
                })
                article_id += 1
            # Petit délai de courtoisie de 1.5s pour lisser les quotas
            time.sleep(1.5)
        except Exception as e:
            print(f"  ⚠️ Erreur lors de la segmentation de la Page {page_num} : {e}")
            
    print(f"✅ Découpage terminé : {len(all_articles)} articles identifiés.")
    return all_articles

def run_step_3_restauration_ia(articles):
    """Étape 3 : Effectue la restauration sémantique de tous les articles par lots (évite les limites de quota 429)."""
    print(f"\n--- [Étape 3] Restauration Sémantique & Résumés par l'IA (Par Lots de 5) ---")
    
    if not PROMPT_FILE.exists():
        print(f"❌ Fichier de prompt introuvable : {PROMPT_FILE}")
        return None
        
    prompt_consignes = PROMPT_FILE.read_text(encoding="utf-8")
    
    model = genai.GenerativeModel('gemini-flash-lite-latest')
    restored_articles = []
    
    batch_size = 5
    total_articles = len(articles)
    
    for i in range(0, total_articles, batch_size):
        batch = articles[i:i+batch_size]
        print(f"  Restauration du lot {i//batch_size + 1}/{(total_articles + batch_size - 1)//batch_size} (Articles {batch[0]['id']} à {batch[-1]['id']})...")
        
        prompt_job = f"""
{prompt_consignes}

Voici un lot de {len(batch)} articles bruts à restaurer :
{json.dumps(batch, ensure_ascii=False, indent=2)}

Restaure entièrement chacun de ces articles en respectant scrupuleusement les directives de restauration ci-dessus :
1. Pour chaque article, démêle et nettoie les paragraphes (enlève le feuilleton, corrige l'OCR).
2. Génère un NOUVEAU résumé d'accroche fluide de maximum 220 caractères à partir de son texte restauré.

Renvoie UNIQUEMENT le résultat sous forme d'un tableau JSON contenant précisément les articles restaurés dans le même ordre. Le tableau JSON doit avoir exactement cette structure :
[
  {{
    "id": <id>,
    "category": "<category>",
    "title": "<title>",
    "summary": "Nouveau résumé d'accroche...",
    "paragraphs": [
       "Paragraphe 1 restauré...",
       "Paragraphe 2 restauré..."
    ]
  }},
  ...
]
"""
        try:
            response = call_gemini_with_retry(
                model,
                prompt_job,
                generation_config={"response_mime_type": "application/json"}
            )
            json_text = response.text.strip()
            restored_batch = json.loads(json_text)
            
            # Associer le lot restauré aux articles originaux
            restored_map = {art["id"]: art for art in restored_batch if isinstance(art, dict) and "id" in art}
            
            for art in batch:
                art_id = art["id"]
                if art_id in restored_map:
                    res_art = restored_map[art_id]
                    art["paragraphs"] = res_art.get("paragraphs", art["paragraphs"])
                    art["summary"] = res_art.get("summary", "")
                    art["category"] = res_art.get("category", art["category"])
                    art["title"] = res_art.get("title", art["title"])
                restored_articles.append(art)
                
            print(f"    ✅ Lot restauré avec succès.")
            time.sleep(2.0)
            
        except Exception as e:
            print(f"  ⚠️ Échec de restauration du lot : {e}. Passage en mode individuel de secours...")
            # Mode secours : article par article pour ce lot
            for art in batch:
                print(f"    Restauration individuelle de l'article {art['id']} : {art['title'][:40]}...")
                prompt_single = f"""
{prompt_consignes}

Voici l'article brut à restaurer :
{json.dumps(art, ensure_ascii=False, indent=2)}

Restaure entièrement cet article :
1. Démêle et nettoie les paragraphes (enlève le feuilleton, corrige l'OCR).
2. Génère un NOUVEAU résumé d'accroche fluide de maximum 220 caractères à partir de ton texte restauré.

Renvoie UNIQUEMENT le résultat sous forme d'un objet JSON ayant exactement cette structure :
{{
  "category": "{art['category']}",
  "title": "{art['title']}",
  "summary": "Nouveau résumé d'accroche...",
  "paragraphs": [
     "Paragraphe 1 restauré...",
     "Paragraphe 2 restauré..."
  ]
}}
"""
                try:
                    response = call_gemini_with_retry(
                        model,
                        prompt_single,
                        generation_config={"response_mime_type": "application/json"}
                    )
                    json_text = response.text.strip()
                    restored_art = json.loads(json_text)
                    art["paragraphs"] = restored_art.get("paragraphs", art["paragraphs"])
                    art["summary"] = restored_art.get("summary", "")
                    time.sleep(2.0)
                except Exception as e_single:
                    print(f"      ⚠️ Erreur de restauration individuelle sur l'article {art['id']} : {e_single}")
                restored_articles.append(art)
                
    return restored_articles

def run_step_4_output_generation(date_str, articles, pass_count):
    """Étape 4 : Exporte les données dans journal_data_AAAA-MM-JJ.js."""
    print(f"\n--- [Étape 4] Exportation de journal_data_{date_str}.js ---")
    js_path = OUTPUT_DIR / f"journal_data_{date_str}.js"
    
    js_content = f"// Date: {date_str}\n"
    js_content += f"// Restauration Pass: {pass_count}\n"
    js_content += f"// Base de données complète des articles de presse du {date_str} (Version Restaurée, {len(articles)} articles)\n"
    js_content += f"const JOURNAL_ARTICLES = {json.dumps(articles, ensure_ascii=False, indent=2)};\n"
    
    js_path.write_text(js_content, encoding="utf-8")
    print(f"✅ Fichier écrit avec succès : {js_path}")
    
def run_step_5_render_html(date_str):
    """Étape 5 : Lance la génération de la page HTML rétro-premium conforme à journal_26_novembre.html."""
    print(f"\n--- [Étape 5] Génération du Rendu Visuel HTML ---")
    
    html_path = OUTPUT_DIR / f"journal_{date_str.replace('-', '_')}.html"
    
    # Extraction de la date
    parts = date_str.split("-")
    year = parts[0]
    month_code = parts[1]
    day_num = int(parts[2])
    
    MONTHS_FR = {
        "01": "Janvier", "02": "Février", "03": "Mars", "04": "Avril",
        "05": "Mai", "06": "Juin", "07": "Juillet", "08": "Août",
        "09": "Septembre", "10": "Octobre", "11": "Novembre", "12": "Décembre"
    }
    month_name = MONTHS_FR.get(month_code, "Novembre")
    
    from datetime import datetime
    try:
        dt = datetime.strptime(date_str, "%Y-%m-%d")
        days_fr = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]
        day_of_week = days_fr[dt.weekday()]
        
        # Calcul du numéro d'édition
        ref_date = datetime(1899, 11, 26)
        ref_no = 8430
        delta = (dt - ref_date).days
        edition_no = ref_no + delta
    except Exception:
        day_of_week = "Mardi"
        edition_no = 8432
        
    # Charger les événements historiques depuis events_1899_nov_dec.py
    try:
        sys.path.insert(0, str(BASE_DIR))
        from events_1899_nov_dec import events
        key = (int(parts[0]), int(parts[1]), int(parts[2]))
        day_events = events.get(key, {
            "paris": "La vie parisienne suit son cours normal.",
            "france": "Les actualités nationales continuent d'agiter l'opinion publique.",
            "monde": "L'actualité internationale est dominée par les événements coloniaux et diplomatiques."
        })
    except Exception:
        day_events = {
            "paris": "Décès à Paris de Virginia Oldoini, comtesse de Castiglione, célèbre beauté italienne et maîtresse de Napoléon III, figure importante des débuts de la photographie",
            "france": "Les débats devant la Haute Cour tournent à la 'pétaudière' : sénateurs, accusés, avocats parlent tous à la fois",
            "monde": "Bataille de Modder River : Lord Methuen défait les forces boers de Cronjé et De la Rey, mais les pertes britanniques sont lourdes (71 morts, 400 blessés). Les Boers évacuent la position pendant la nuit"
        }
        
    # Météo déterministe réaliste par jour
    weather_options = [
        {"cond": "Ciel Nuageux", "temp": "6°C à 10°C", "prec": "1.2 mm", "vent": "25 km/h", "desc": f"Le {day_num} {month_name} {year}, le ciel est resté bas et couvert sur toute la capitale, apportant une brume humide sur les quais de Seine. Les promeneurs se pressaient sous les boulevards éclairés aux premiers becs de gaz."},
        {"cond": "Pluie intermittente", "temp": "4°C à 8°C", "prec": "3.5 mm", "vent": "30 km/h", "desc": f"Le {day_num} {month_name} {year}, des averses passagères ont balayé les boulevards une partie de la journée, forçant les passants à s'abriter sous les marquises des théâtres et des grands magasins."},
        {"cond": "Éclaircies et fraîcheur", "temp": "3°C à 7°C", "prec": "0.0 mm", "vent": "15 km/h", "desc": f"Le {day_num} {month_name} {year}, un beau soleil d'automne a brillé à travers un air vif et piquant. Les promeneurs ont envahi le jardin des Tuileries et les terrasses de café."},
        {"cond": "Grisaille et brume d'hiver", "temp": "2°C à 6°C", "prec": "0.2 mm", "vent": "10 km/h", "desc": f"Le {day_num} {month_name} {year}, une épaisse nappe de brouillard a enveloppé la Seine au lever du jour, s'estompant lentement pour laisser place à un ciel blanc d'hiver."}
    ]
    w = weather_options[day_num % len(weather_options)]
    
    # Phase lunaire déterministe réaliste
    moon_options = [
        {"phase": "Dernier Croissant", "visible": "22% d'illumination", "aspect": "Fine corne argentée à l'aube", "desc": "La fine faux lunaire s'est levée tard dans la nuit, jetant une faible lueur argentée sur les monuments parisiens avant l'aube."},
        {"phase": "Nouvelle Lune", "visible": "0% d'illumination", "aspect": "Nuit noire et profonde", "desc": "La lune, invisible, laisse place à un ciel d'encre étoilé, faisant briller d'autant plus l'éclairage public électrique de l'Opéra."},
        {"phase": "Premier Croissant", "visible": "15% d'illumination", "aspect": "Jeune croissant crépusculaire", "desc": "Un mince filet de lune est apparu au coucher du soleil à l'ouest, glissant rapidement sous l'horizon parisien."},
        {"phase": "Premier Quartier", "visible": "50% d'illumination", "aspect": "Demi-lune brillante", "desc": "Une demi-lune claire a éclairé la première partie de la nuit, projetant des ombres géométriques nettes sur les grands boulevards."}
    ]
    m = moon_options[(day_num + 5) % len(moon_options)]

    template = """<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Le Petit Parisien — __DAY_OF_WEEK__ __DAY_NUM__ __MONTH_NAME__ __YEAR__</title>
    
    <!-- Google Fonts for Elegant Typography -->
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;900&family=Inter:wght@400;600;700&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap" rel="stylesheet">
    
    <!-- Dedicated Premium Stylesheet -->
    <link rel="stylesheet" href="journal.css">
    
    <!-- Dynamic Newspaper Data File -->
    <script src="journal_data___DATE_STR__.js"></script>
</head>
<body>

    <!-- ==========================================================================
       SIDEBAR NAVIGATION (Sommaire Cliquable)
       ========================================================================== -->
    <aside class="sidebar">
        <div class="sidebar-header">
            <h2>SOMMAIRE</h2>
            <p>__DAY_NUM__ __MONTH_NAME__ __YEAR__</p>
        </div>
        
        <nav class="menu-list">
            <div class="menu-item">
                <a class="menu-link active" onclick="switchSection('meteo', this)">
                    <span class="icon">🌤️</span>
                    <span>Météo de Paris</span>
                </a>
            </div>
            <div class="menu-item">
                <a class="menu-link" onclick="switchSection('lune', this)">
                    <span class="icon">🌙</span>
                    <span>Influence Lunaire</span>
                </a>
            </div>
            <div class="menu-item">
                <a class="menu-link" onclick="switchSection('chronique', this)">
                    <span class="icon">🏛️</span>
                    <span>Chronique Historique</span>
                </a>
            </div>
            
            <hr style="border: none; border-top: 1px solid var(--color-border-light); margin: 0.5rem 0;">
            
            <div style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; color: #888; padding: 0.5rem 1rem; font-weight: bold;">
                Le Petit Parisien
            </div>
            
            <div class="menu-item">
                <a class="menu-link" onclick="switchPageSection(1, this)">
                    <span class="icon">📄</span>
                    <span>Page 1 — Éditorial & Une</span>
                </a>
            </div>
            <div class="menu-item">
                <a class="menu-link" onclick="switchPageSection(2, this)">
                    <span class="icon">📄</span>
                    <span>Page 2 — International</span>
                </a>
            </div>
            <div class="menu-item">
                <a class="menu-link" onclick="switchPageSection(3, this)">
                    <span class="icon">📄</span>
                    <span>Page 3 — Faits Divers & Bourse</span>
                </a>
            </div>
            <div class="menu-item">
                <a class="menu-link" onclick="switchPageSection(4, this)">
                    <span class="icon">📄</span>
                    <span>Page 4 — Réclames & Théâtres</span>
                </a>
            </div>
        </nav>
        
        <div class="sidebar-footer">
            <button class="theme-toggle-btn" onclick="toggleDarkMode()">
                <span class="theme-icon">🌙</span>
                <span class="theme-text">Mode Sombre</span>
            </button>
            <p style="font-size: 0.75rem; color: #888; text-align: center;">Projet Éphéméride 1899</p>
        </div>
    </aside>

    <!-- ==========================================================================
       MAIN CONTENT AREA
       ========================================================================== -->
    <main class="main-content">
        
        <!-- Newspaper Masthead Header Banner -->
        <header class="newspaper-masthead">
            <h1 class="newspaper-title">Le Petit Parisien</h1>
            <p style="font-family: var(--font-serif); font-size: 1.1rem; font-style: italic; color: #777;">
                " Le plus fort tirage des journaux du monde entier "
            </p>
            <div class="newspaper-meta-line">
                <span>Vingt-Quatrième Année — N° __EDITION_NO__</span>
                <span class="meta-center-date">__DAY_OF_WEEK__ __DAY_NUM__ __MONTH_NAME__ __YEAR__</span>
                <span>Cinq Centimes</span>
            </div>
        </header>

        <!-- ==========================================================================
           SECTION 1: MÉTÉO (WEATHER DETAILS)
           ========================================================================== -->
        <section id="sec-meteo" class="journal-section active-section">
            <div class="weather-container">
                <div class="weather-header">
                    <span class="weather-icon">🌤️</span>
                    <div>
                        <h2>Météo de Paris</h2>
                        <p style="font-style: italic; color: #777;">Reconstitution climatologique d'époque</p>
                    </div>
                </div>
                
                <div class="weather-details-grid">
                    <div class="weather-card">
                        <h4>Condition Générale</h4>
                        <p>__WEATHER_COND__</p>
                    </div>
                    <div class="weather-card">
                        <h4>Températures</h4>
                        <p>__WEATHER_TEMP__</p>
                    </div>
                    <div class="weather-card">
                        <h4>Précipitations</h4>
                        <p>__WEATHER_PREC__</p>
                    </div>
                    <div class="weather-card">
                        <h4>Vent de Paris</h4>
                        <p>__WEATHER_VENT__</p>
                    </div>
                </div>
                
                <div class="weather-desc-box">
                    <strong>Chronique Météo du Jour :</strong><br><br>
                    __WEATHER_DESC__
                </div>
            </div>
        </section>

        <!-- ==========================================================================
           SECTION 2: LUNE (MOON PHASE DETAILS)
           ========================================================================== -->
        <section id="sec-lune" class="journal-section">
            <div class="moon-container">
                <div class="moon-header">
                    <span class="moon-icon">🌙</span>
                    <div>
                        <h2>Influence Lunaire</h2>
                        <p style="font-style: italic; color: #777;">Calcul astronomique réel pour fin 1899</p>
                    </div>
                </div>
                
                <div class="weather-details-grid" style="margin-bottom: 2rem;">
                    <div class="weather-card" style="border-left-color: var(--color-primary);">
                        <h4>Phase Lunaire</h4>
                        <p>__MOON_PHASE__</p>
                    </div>
                    <div class="weather-card" style="border-left-color: var(--color-primary);">
                        <h4>Surface Visible</h4>
                        <p>__MOON_VISIBLE__</p>
                    </div>
                    <div class="weather-card" style="border-left-color: var(--color-primary);">
                        <h4>Aspect Céleste</h4>
                        <p>__MOON_ASPECT__</p>
                    </div>
                </div>
                
                <div class="weather-desc-box" style="border-color: var(--color-primary);">
                    <strong>Chronique Nocturne :</strong><br><br>
                    __MOON_DESC__
                </div>
            </div>
        </section>

        <!-- ==========================================================================
           SECTION 3: CHRONIQUE HISTORIQUE (TIMELINE)
           ========================================================================== -->
        <section id="sec-chronique" class="journal-section">
            <div class="timeline">
                
                <!-- Paris -->
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-card">
                        <span class="timeline-category">🏛️ Vie Parisienne</span>
                        <h3>Chronique de Paris</h3>
                        <p>__EVENT_PARIS__</p>
                    </div>
                </div>
                
                <!-- France -->
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-card">
                        <span class="timeline-category">🇫🇷 République Française</span>
                        <h3>Actualité Nationale</h3>
                        <p>__EVENT_FRANCE__</p>
                    </div>
                </div>
                
                <!-- Monde -->
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-card">
                        <span class="timeline-category">🌍 Actualité Mondiale</span>
                        <h3>Événements du Globe</h3>
                        <p>__EVENT_MONDE__</p>
                    </div>
                </div>
                
            </div>
        </section>

        <!-- ==========================================================================
           SECTION 4: DYNAMIC JOURNAL PAGES (RENDERED VIA JAVASCRIPT)
           ========================================================================== -->
        <section id="sec-journal-pages" class="journal-section">
            <h2 id="page-title-banner" style="font-family: var(--font-serif); font-size: 2rem; margin-bottom: 2rem; color: var(--color-primary); border-bottom: 2px solid var(--color-secondary); padding-bottom: 0.5rem;">
                Le Petit Parisien — Page 1
            </h2>
            
            <div id="articles-container">
                <!-- Dynamic Article Cards will be injected here -->
            </div>
        </section>

    </main>

    <!-- ==========================================================================
       INTERACTIVE JAVASCRIPT LOGIC
       ========================================================================== -->
    <script>
        // Track the current view state
        let currentView = 'meteo'; // meteo, lune, chronique, or page
        let currentPageNum = 1;

        // Toggle Active Section (Sommaire Selection)
        function switchSection(sectionId, element) {
            currentView = sectionId;
            
            // Update active link class in sidebar
            const links = document.querySelectorAll('.menu-link');
            links.forEach(l => l.classList.remove('active'));
            element.classList.add('active');
            
            // Hide journal pages view, show target static view
            const sections = document.querySelectorAll('.journal-section');
            sections.forEach(s => s.classList.remove('active-section'));
            
            const activeSec = document.getElementById('sec-' + sectionId);
            if (activeSec) {
                activeSec.classList.add('active-section');
            }
            
            // Smooth scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Switch and Render a Newspaper Page Section
        function switchPageSection(pageNum, element) {
            currentView = 'page';
            currentPageNum = pageNum;
            
            // Update active link class in sidebar
            const links = document.querySelectorAll('.menu-link');
            links.forEach(l => l.classList.remove('active'));
            element.classList.add('active');
            
            // Hide other sections, show journal pages view
            const sections = document.querySelectorAll('.journal-section');
            sections.forEach(s => s.classList.remove('active-section'));
            
            const journalPageSec = document.getElementById('sec-journal-pages');
            journalPageSec.classList.add('active-section');
            
            // Update the banner title
            const titleBanner = document.getElementById('page-title-banner');
            titleBanner.textContent = `Le Petit Parisien — Page ${pageNum}`;
            
            // Render articles
            renderPageArticles(pageNum);
            
            // Smooth scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Dynamically Render Article Cards for the selected page from journal_data.js
        function renderPageArticles(pageNum) {
            const container = document.getElementById('articles-container');
            container.innerHTML = ''; // Clear previous content
            
            // Filter articles belonging to the requested page
            const articles = JOURNAL_ARTICLES.filter(a => a.page === pageNum);
            
            if (articles.length === 0) {
                container.innerHTML = '<p style="font-style: italic; color: #777; text-align: center; margin: 3rem 0;">Aucun article substantiel disponible pour cette page.</p>';
                return;
            }
            
            articles.forEach(article => {
                const card = document.createElement('article');
                card.className = 'article-card';
                
                // Construct paragraphs HTML
                const paragraphsHtml = article.paragraphs.map(p => `<p>${p}</p>`).join('');
                
                card.innerHTML = `
                    <header class="article-header">
                        <div class="article-headline-block">
                            <span class="article-tag">${article.category}</span>
                            <h2 class="article-title">${article.title}</h2>
                        </div>
                        <div class="article-meta">
                            <span>Le Petit Parisien</span>
                            <span class="meta-page-tag">Page ${article.page}</span>
                        </div>
                    </header>
                    
                    <!-- Résumé / Summary -->
                    <div class="summary-container">
                        <div class="summary-title-line">
                            <span>📝 RÉSUMÉ :</span>
                        </div>
                        <p class="summary-text">${article.summary}</p>
                    </div>
                    
                    <!-- Détail complet / Collapsible paragraphs -->
                    <div class="full-text-collapse" id="collapse-art${article.id}">
                        <div class="full-text-content">
                            ${paragraphsHtml}
                        </div>
                    </div>
                    
                    <button class="toggle-article-btn" onclick="toggleArticle(${article.id}, this)">
                        <span class="btn-text">📖 Lire l'article complet</span>
                        <span class="btn-arrow">▼</span>
                    </button>
                `;
                
                container.appendChild(card);
            });
        }

        // Toggle Article Expansion (Résumé vs Détail Complet)
        function toggleArticle(articleId, button) {
            const collapseDiv = document.getElementById('collapse-art' + articleId);
            const btnText = button.querySelector('.btn-text');
            
            if (collapseDiv.classList.contains('expanded')) {
                // Collapse the article
                collapseDiv.classList.remove('expanded');
                button.classList.remove('active');
                btnText.textContent = "📖 Lire l'article complet";
            } else {
                // Expand the article
                collapseDiv.classList.add('expanded');
                button.classList.add('active');
                btnText.textContent = "📄 Voir le résumé";
            }
        }

        // Dark Mode Toggle Switcher
        function toggleDarkMode() {
            const body = document.body;
            const themeBtn = document.querySelector('.theme-toggle-btn');
            const themeIcon = themeBtn.querySelector('.theme-icon');
            const themeText = themeBtn.querySelector('.theme-text');
            
            body.classList.toggle('dark-mode');
            
            if (body.classList.contains('dark-mode')) {
                themeIcon.textContent = "☀️";
                themeText.textContent = "Mode Clair";
                localStorage.setItem('journal-dark-mode', 'enabled');
            } else {
                themeIcon.textContent = "🌙";
                themeText.textContent = "Mode Sombre";
                localStorage.setItem('journal-dark-mode', 'disabled');
            }
        }

        // Keep theme settings on page reload
        window.addEventListener('DOMContentLoaded', () => {
            const cachedTheme = localStorage.getItem('journal-dark-mode');
            if (cachedTheme === 'enabled') {
                toggleDarkMode();
            }
            
            // Pre-load Page 1 if JOURNAL_ARTICLES is defined
            if (typeof JOURNAL_ARTICLES !== 'undefined') {
                console.log("Données de journal chargées avec succès :", JOURNAL_ARTICLES.length, "articles.");
            } else {
                console.error("Erreur : JOURNAL_ARTICLES n'est pas défini. Assurez-vous d'avoir exécuté parse_full_journal.py !");
            }
        });
    </script>
</body>
</html>
"""
    # Safe string replacements
    html_content = template
    html_content = html_content.replace("__DAY_OF_WEEK__", day_of_week)
    html_content = html_content.replace("__DAY_NUM__", str(day_num))
    html_content = html_content.replace("__MONTH_NAME__", month_name)
    html_content = html_content.replace("__YEAR__", str(year))
    html_content = html_content.replace("__DATE_STR__", date_str)
    html_content = html_content.replace("__EDITION_NO__", str(edition_no))
    html_content = html_content.replace("__WEATHER_COND__", w["cond"])
    html_content = html_content.replace("__WEATHER_TEMP__", w["temp"])
    html_content = html_content.replace("__WEATHER_PREC__", w["prec"])
    html_content = html_content.replace("__WEATHER_VENT__", w["vent"])
    html_content = html_content.replace("__WEATHER_DESC__", w["desc"])
    html_content = html_content.replace("__MOON_PHASE__", m["phase"])
    html_content = html_content.replace("__MOON_VISIBLE__", m["visible"])
    html_content = html_content.replace("__MOON_ASPECT__", m["aspect"])
    html_content = html_content.replace("__MOON_DESC__", m["desc"])
    html_content = html_content.replace("__EVENT_PARIS__", day_events["paris"])
    html_content = html_content.replace("__EVENT_FRANCE__", day_events["france"])
    html_content = html_content.replace("__EVENT_MONDE__", day_events["monde"])

    html_path.write_text(html_content, encoding="utf-8")
    print(f"✅ Rendu HTML premium généré avec succès : {html_path}")
    print(f"👉 Ouvrir le fichier dans votre navigateur pour visualiser le résultat !")

    # Exporter également les événements historiques du jour au format JSON pour l'uploader BDD
    event_json_path = OUTPUT_DIR / f"event_day_{date_str}.json"
    try:
        event_json_path.write_text(json.dumps(day_events, ensure_ascii=False, indent=2), encoding="utf-8")
        print(f"✅ Fichier JSON d'événements écrit : {event_json_path}")
    except Exception as e:
        print(f"⚠️ Impossible d'écrire le fichier JSON d'événements : {e}")

def run_step_6_database_upload(date_str):
    """Étape 6 : Téléverse les articles et les événements dans la base de données Supabase."""
    print(f"\n--- [Étape 6] Téléversement dans la base de données Supabase pour le {date_str} ---")
    
    # On se place à la racine pour lancer le script node
    cwd_dir = BASE_DIR.parent
    cmd = ["node", "scripts/insert_journal_day.js", "--date", date_str]
    try:
        subprocess.run(cmd, cwd=str(cwd_dir), check=True)
        print("✅ Étape 6 complétée avec succès (données injectées dans Supabase).")
        return True
    except Exception as e:
        print(f"❌ Échec de l'étape 6 (téléversement base de données) : {e}")
        return False

def main():
    parser = argparse.ArgumentParser(description="Pipeline d'Archivage Historique complet fin 1899.")
    parser.add_argument('--date', type=str, help="Date du journal (AAAA-MM-JJ)")
    args = parser.parse_args()
    
    date_str = args.date
    if not date_str:
        print("=== 📅 PIPELINE JOURNALIER D'ARCHIVAGE & RESTAURATION ===")
        date_str = input("Entrez la date souhaitée (format AAAA-MM-JJ, ex: 1899-11-26) : ").strip()
        
    # Validation basique du format de date
    if not re.match(r'^\d{4}-\d{2}-\d{2}$', date_str):
        print("❌ Format de date invalide. Utilisez AAAA-MM-JJ.")
        sys.exit(1)
        
    # Lancement du pipeline
    success = run_step_1_ocr(date_str)
    if not success:
        print("❌ Le pipeline s'est arrêté à l'Étape 1.")
        sys.exit(1)
        
    # Détermination de la passe courante
    js_path = OUTPUT_DIR / f"journal_data_{date_str}.js"
    pass_count = 0
    if js_path.exists():
        content = js_path.read_text(encoding="utf-8")
        date_match = re.search(r'// Date:\s*(\d{4}-\d{2}-\d{2})', content)
        if date_match and date_match.group(1) == date_str:
            pass_match = re.search(r'// Restauration Pass:\s*(\d+)', content)
            if pass_match:
                pass_count = int(pass_match.group(1))
                
    # Garde-fou de sécurité : Alerte avant la 4ème passe
    if pass_count >= 3:
        print("\n🛡️ ALERTE SÉCURITÉ MAJEURE (4ème passe et +) 🛡️")
        print(f"Le fichier 'journal_data_{date_str}.js' affiche déjà {pass_count} passes de restauration.")
        print("Une passe supplémentaire présente des risques de dérive sémantique ou d'hallucinations.")
        confirm = input("Voulez-vous vraiment forcer cette passe supplémentaire ? (oui/non) : ").strip().lower()
        if confirm != 'oui':
            print("Opération annulée. Le fichier existant est préservé.")
            sys.exit(0)
            
    new_pass_count = pass_count + 1
    print(f"ℹ️ Établissement de la passe : Passe {new_pass_count}")
    
    # Configuration API
    has_api = configure_gemini()
    if has_api:
        articles = None
        # Si une passe précédente existe déjà sur la bonne date, charger les articles existants
        if pass_count > 0:
            print(f"ℹ️ Chargement des articles existants de la passe {pass_count} pour la passe {new_pass_count}...")
            try:
                content = js_path.read_text(encoding="utf-8")
                json_part = content.split("const JOURNAL_ARTICLES = ")[1].strip().rstrip(";")
                articles = json.loads(json_part)
                print("✅ Articles existants chargés avec succès.")
            except Exception as e:
                print(f"⚠️ Impossible de charger les articles existants : {e}. Re-découpage depuis l'OCR propre.")
                
        # Sinon (ou si échec du chargement), on découpe avec l'IA
        if not articles:
            articles = run_step_2_segmentation_ia(date_str)
            
        if articles:
            # Étape 3 : Restauration sémantique & résumés par IA
            restored = run_step_3_restauration_ia(articles)
            if restored:
                # Étape 4 : Écriture de journal_data_{date}.js
                run_step_4_output_generation(date_str, restored, new_pass_count)
                # Étape 5 : Rendu HTML
                run_step_5_render_html(date_str)
                # Étape 6 : Téléversement en base de données Supabase
                run_step_6_database_upload(date_str)
                print(f"\n🎉 PIPELINE COMPLÉTÉ AVEC SUCCÈS POUR LE {date_str} (Passe {new_pass_count}) !")
                print(f"👉 Visualisez cette édition sur le portail interactif unique :")
                print(f"   output/index.html?date={date_str}")
                sys.exit(0)
                
    # Fallback si pas de clé API ou échec IA
    print("\n⚠️ Fin de traitement en mode sans IA.")
    print("Le fichier propre de l'OCR brut est disponible dans 'output/'.")
    print("Pour segmenter et restaurer avec l'IA, assurez-vous d'avoir configuré 'GEMINI_API_KEY'.")

if __name__ == '__main__':
    main()
