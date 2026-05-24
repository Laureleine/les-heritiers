#!/usr/bin/env python3
"""
Compilateur pour le Calendrier Interactif Multi-Jours de Fin 1899.
Parse novembre-1899.md et décembre-1899.md, et intègre le 26 Novembre 1899 de journal_data.js.
"""

import json
import re
from pathlib import Path

def parse_md_file(file_path):
    if not file_path.exists():
        print(f"Warning: {file_path.name} not found.")
        return {}
        
    text = file_path.read_text(encoding="utf-8")
    
    # Trouver tous les blocs <details>
    # Le format est: <details><summary><b>📅 X mois 1899</b> ... </details>
    details_pattern = re.compile(
        r'<details><summary><b>📅\s*(\d+)\s*([^ ]+)\s*1899</b>(.*?)</details>', 
        re.DOTALL | re.IGNORECASE
    )
    
    days = {}
    matches = list(details_pattern.finditer(text))
    print(f"Parsing {file_path.name} : Found {len(matches)} daily blocks.")
    
    for match in matches:
        day_num = int(match.group(1))
        month_name = match.group(2).strip().lower()
        block_content = match.group(3).strip()
        
        # Météo : extraire toutes les lignes citées (commençant par >)
        meteo_match = re.search(r'\*\*Météo\*\*[\s\n]*((?:>.*?\n?)+)', block_content, re.IGNORECASE)
        meteo_lines = []
        if meteo_match:
            for l in meteo_match.group(1).strip().split("\n"):
                l_clean = l.strip("> ").strip()
                if l_clean:
                    meteo_lines.append(l_clean)
                    
        # Lune : extraire toutes les lignes citées (commençant par >)
        lune_match = re.search(r'\*\*Lune\*\*[\s\n]*((?:>.*?\n?)+)', block_content, re.IGNORECASE)
        lune_lines = []
        if lune_match:
            for l in lune_match.group(1).strip().split("\n"):
                l_clean = l.strip("> ").strip()
                if l_clean:
                    lune_lines.append(l_clean)
                    
        # Actualité : extraire les puces de Paris, France, Monde
        act_match = re.search(r'\*\*Actualité\*\*[\s\n]*((?:-.*?\n?)+)', block_content, re.IGNORECASE)
        act_items = {"paris": "", "france": "", "monde": ""}
        if act_match:
            lines = act_match.group(1).strip().split("\n")
            for l in lines:
                l_clean = l.strip("- ").strip()
                if not l_clean:
                    continue
                # Match emojis ou textes
                if "paris" in l_clean.lower() or "🏛️" in l_clean:
                    parts = re.split(r'paris\s*:\s*', l_clean, flags=re.IGNORECASE)
                    act_items["paris"] = parts[1].strip() if len(parts) > 1 else l_clean
                elif "france" in l_clean.lower() or "🇫🇷" in l_clean:
                    parts = re.split(r'france\s*:\s*', l_clean, flags=re.IGNORECASE)
                    act_items["france"] = parts[1].strip() if len(parts) > 1 else l_clean
                elif "monde" in l_clean.lower() or "🌍" in l_clean or "🌏" in l_clean or "🌎" in l_clean:
                    parts = re.split(r'monde\s*:\s*', l_clean, flags=re.IGNORECASE)
                    act_items["monde"] = parts[1].strip() if len(parts) > 1 else l_clean
                    
        days[day_num] = {
            "meteo": meteo_lines,
            "lune": lune_lines,
            "actualite": act_items
        }
        
    return days

def build_viewer():
    base_dir = Path(__file__).parent
    output_dir = base_dir / "output"
    
    nov_path = output_dir / "novembre-1899.md"
    dec_path = output_dir / "décembre-1899.md"
    
    # Parse les fichiers markdown
    nov_data = parse_md_file(nov_path)
    dec_data = parse_md_file(dec_path)
    
    # Charger les 20 articles restaurés du 26 Novembre
    js_articles_path = output_dir / "journal_data.js"
    articles_26_nov = []
    if js_articles_path.exists():
        js_text = js_articles_path.read_text(encoding="utf-8")
        parts = js_text.split("const JOURNAL_ARTICLES = ")
        if len(parts) >= 2:
            json_str = parts[1].strip().rstrip(";")
            try:
                articles_26_nov = json.loads(json_str)
                print(f"Loaded {len(articles_26_nov)} full articles for 26 November 1899.")
            except Exception as e:
                print(f"Error loading journal_data.js: {e}")
        else:
            print("Error: Could not find JOURNAL_ARTICLES variable in journal_data.js.")
    else:
        print("Warning: journal_data.js does not exist. 26 November will not have full text.")
        
    # Construire la base de données finale
    database = {
        "1899-11": {},
        "1899-12": {}
    }
    
    # Remplir Novembre
    for day, data in nov_data.items():
        database["1899-11"][str(day)] = data
        if day == 26 and articles_26_nov:
            database["1899-11"][str(day)]["articles"] = articles_26_nov
            
    # Remplir Décembre
    for day, data in dec_data.items():
        database["1899-12"][str(day)] = data
        
    # Exporter en fichier Javascript
    db_js_path = output_dir / "data.js"
    js_content = "// Base de données globale multi-jours (Novembre & Décembre 1899)\n"
    js_content += f"const JOURNAL_DATABASE = {json.dumps(database, ensure_ascii=False, indent=2)};\n"
    
    db_js_path.write_text(js_content, encoding="utf-8")
    print(f"Success: Compiled database written to {db_js_path.name} ({len(db_js_path.read_bytes())} bytes)")

if __name__ == '__main__':
    build_viewer()
