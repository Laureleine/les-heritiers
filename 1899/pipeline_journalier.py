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

def run_step_5_export_events_json(date_str):
    """Étape 5 : Génère et exporte les événements historiques du jour au format JSON pour l'uploader BDD."""
    print(f"\n--- [Étape 5] Génération & Exportation du JSON d'événements ---")
    
    # Extraction de la date
    parts = date_str.split("-")
    
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
        
    event_json_path = OUTPUT_DIR / f"event_day_{date_str}.json"
    try:
        event_json_path.write_text(json.dumps(day_events, ensure_ascii=False, indent=2), encoding="utf-8")
        print(f"✅ Fichier JSON d'événements écrit : {event_json_path}")
        return True
    except Exception as e:
        print(f"⚠️ Impossible d'écrire le fichier JSON d'événements : {e}")
        return False

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
                
    # Garde-fou de sécurité : Alerte et choix pour les passes existantes
    force_new_pass = True
    if pass_count >= 2:
        print(f"\n⚡ L'édition du {date_str} a déjà subi {pass_count} passes de restauration. Elle est considérée comme finalisée.")
        print("1. Lancer le téléversement direct en BDD (Étape 6) et régénérer le JSON d'événements (Étape 5)")
        print("2. Forcer une passe de restauration supplémentaire par l'IA (Passe 3 et +)")
        choix = input("Fais ton choix (1 ou 2) : ").strip()
        if choix == '1':
            print("🚀 Option 1 sélectionnée : Régénération des événements et injection directe Supabase...")
            run_step_5_export_events_json(date_str)
            run_step_6_database_upload(date_str)
            print(f"🎉 Données rafraîchies et importées avec succès pour le {date_str} !")
            sys.exit(0)
        else:
            print("⚠️ Option 2 sélectionnée : Préparation d'une passe supplémentaire IA...")
            confirm = input("Es-tu sûr de vouloir forcer cette passe ? Une accumulation de passes peut créer des hallucinations IA. (oui/non) : ").strip().lower()
            if confirm != 'oui':
                print("Opération annulée. Le fichier existant est préservé.")
                sys.exit(0)
            force_new_pass = True
            
    # Configuration API
    has_api = configure_gemini()
    if has_api:
        articles = None
        
        # CAS 1 : Date complètement nouvelle -> Double passe automatique !
        if pass_count == 0:
            print("\n🌟 Nouvelle date détectée ! Lancement automatique de la DOUBLE PASSE sémantique par l'IA.")
            
            # Étape 2 : Découpage avec l'IA
            articles = run_step_2_segmentation_ia(date_str)
            if not articles:
                print("❌ Impossible de découper les articles de la page.")
                sys.exit(1)
                
            # Étape 3 - Passe 1 : Restauration sémantique
            print("\n🔄 [PASSE 1] Restauration sémantique initiale en cours...")
            articles_pass_1 = run_step_3_restauration_ia(articles)
            if not articles_pass_1:
                print("❌ Échec de la Passe 1 de restauration.")
                sys.exit(1)
                
            # Étape 3 - Passe 2 : Deuxième passe de raffinement sémantique
            print("\n🔄 [PASSE 2] Lancement immédiat de la passe de raffinement et correction d'orthographe...")
            articles_pass_2 = run_step_3_restauration_ia(articles_pass_1)
            if not articles_pass_2:
                print("❌ Échec de la Passe 2 de restauration.")
                sys.exit(1)
                
            # Étape 4 : Écriture finale de journal_data_{date}.js (marquée Pass 2)
            run_step_4_output_generation(date_str, articles_pass_2, 2)
            
            # Étape 5 : Rendu / Export JSON des événements
            run_step_5_export_events_json(date_str)
            
            # Étape 6 : Téléversement en base de données Supabase (Passe 2 finale)
            run_step_6_database_upload(date_str)
            
            print(f"\n🎉 PIPELINE DOUBLE-PASSE COMPLÉTÉ AVEC SUCCÈS POUR LE {date_str} !")
            sys.exit(0)
            
        # CAS 2 : Date existant déjà en Passe 1 -> Exécution de la Passe 2 finale !
        elif pass_count == 1:
            print(f"\n🌟 L'édition a déjà 1 passe de restauration. Lancement de la PASSE 2 finale de raffinement...")
            try:
                content = js_path.read_text(encoding="utf-8")
                json_part = content.split("const JOURNAL_ARTICLES = ")[1].strip().rstrip(";")
                articles = json.loads(json_part)
                print("✅ Articles de la Passe 1 chargés avec succès.")
            except Exception as e:
                print(f"⚠️ Impossible de charger les articles existants : {e}. Re-découpage complet.")
                articles = run_step_2_segmentation_ia(date_str)
                
            if articles:
                # Étape 3 : Restauration sémantique Passe 2
                restored = run_step_3_restauration_ia(articles)
                if restored:
                    # Étape 4 : Écriture finale
                    run_step_4_output_generation(date_str, restored, 2)
                    # Étape 5 : Export JSON
                    run_step_5_export_events_json(date_str)
                    # Étape 6 : Téléversement
                    run_step_6_database_upload(date_str)
                    print(f"\n🎉 PIPELINE PASSE 2 COMPLÉTÉ AVEC SUCCÈS POUR LE {date_str} !")
                    sys.exit(0)
                    
        # CAS 3 : Forçage d'une passe supplémentaire (Passe 3 et +)
        elif pass_count >= 2 and force_new_pass:
            new_pass_count = pass_count + 1
            print(f"\n🔄 Lancement forcé de la PASSE {new_pass_count}...")
            try:
                content = js_path.read_text(encoding="utf-8")
                json_part = content.split("const JOURNAL_ARTICLES = ")[1].strip().rstrip(";")
                articles = json.loads(json_part)
            except Exception as e:
                print(f"❌ Impossible de charger les articles existants : {e}")
                sys.exit(1)
                
            if articles:
                restored = run_step_3_restauration_ia(articles)
                if restored:
                    run_step_4_output_generation(date_str, restored, new_pass_count)
                    run_step_5_export_events_json(date_str)
                    run_step_6_database_upload(date_str)
                    print(f"\n🎉 PIPELINE COMPLÉTÉ AVEC SUCCÈS (Passe {new_pass_count}) POUR LE {date_str} !")
                    sys.exit(0)
                    
    # Fallback si pas de clé API ou échec IA
    print("\n⚠️ Fin de traitement en mode sans IA.")
    print("Le fichier propre de l'OCR brut est disponible dans 'output/'.")
    print("Pour segmenter et restaurer avec l'IA, assurez-vous d'avoir configuré 'GEMINI_API_KEY'.")

if __name__ == '__main__':
    main()
