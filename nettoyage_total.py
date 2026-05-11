#!/usr/bin/env python3
import json
import subprocess
import os

def load_env():
    env = {}
    with open(".env", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if "=" in line and not line.startswith("#"):
                k, v = line.split("=", 1)
                env[k.strip()] = v.strip().strip('"').strip("'")
    return env

def main():
    env = load_env()
    notebook_id = env.get("NOTEBOOKLM_NOTEBOOK_ID")

    print(f"🧹 Récupération des sources pour le notebook {notebook_id}...")
    
    # Lister toutes les sources
    result = subprocess.run(
        ["python", "-m", "notebooklm", "source", "list", "--notebook", notebook_id, "--json"],
        capture_output=True, text=True, encoding="utf-8"
    )
    
    try:
        data = json.loads(result.stdout)
        sources = data.get("sources", []) if isinstance(data, dict) else data
    except:
        print("❌ Impossible de lire la liste des sources.")
        return

    if not sources:
        print("✅ Le notebook est déjà vide.")
        return

    print(f"🗑️ Suppression de {len(sources)} sources...")
    for s in sources:
        source_id = s.get("id")
        title = s.get("title", "Sans titre")
        print(f"  Suppression : {title}")
        subprocess.run(["python", "-m", "notebooklm", "source", "delete", source_id, "--notebook", notebook_id], capture_output=True)

    print("✨ Nettoyage terminé !")

if __name__ == "__main__":
    main()