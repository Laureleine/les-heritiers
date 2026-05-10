#!/usr/bin/env python3
"""
Rafraîchit ou ajoute les sources NotebookLM correspondant aux fichiers modifiés.
Correction : Ajout de l'argument TITLE manquant dans la commande add-drive.
"""

import sys
import json
import subprocess
import urllib.request
import urllib.parse
import os

def load_env():
    env = {}
    if not os.path.exists(".env"):
        print("❌ Erreur : Fichier .env introuvable.")
        sys.exit(1)
    with open(".env", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if "=" in line and not line.startswith("#"):
                k, v = line.split("=", 1)
                env[k.strip()] = v.strip().strip('"').strip("'")
    return env

def get_access_token(env):
    try:
        data = urllib.parse.urlencode({
            "client_id": env["GOOGLE_CLIENT_ID"],
            "client_secret": env["GOOGLE_CLIENT_SECRET"],
            "refresh_token": env["GOOGLE_REFRESH_TOKEN"],
            "grant_type": "refresh_token"
        }).encode()
        req = urllib.request.Request("https://oauth2.googleapis.com/token", data=data)
        with urllib.request.urlopen(req) as r:
            return json.loads(r.read())["access_token"]
    except Exception as e:
        print(f"❌ Erreur token Drive : {e}")
        sys.exit(1)

def find_drive_id(token, folder_id, name):
    q = urllib.parse.quote(f"name='{name}' and '{folder_id}' in parents and trashed=false")
    url = f"https://www.googleapis.com/drive/v3/files?q={q}&fields=files(id,name)"
    req = urllib.request.Request(url, headers={"Authorization": f"Bearer {token}"})
    try:
        with urllib.request.urlopen(req) as r:
            files = json.loads(r.read()).get("files", [])
        return files[0]["id"] if files else None
    except Exception as e:
        print(f" ⚠️ Erreur recherche Drive ({name}): {e}")
        return None

def ensure_authenticated():
    result = subprocess.run(
        ["python", "-m", "notebooklm", "status"],
        capture_output=True, text=True, encoding="utf-8", errors="replace"
    )
    output = (result.stdout or "") + (result.stderr or "")
    if "error" in output.lower() or "expired" in output.lower() or result.returncode != 0:
        print("\n🔐 Session expirée. Reconnexion requise...")
        subprocess.run(["python", "-m", "notebooklm", "login"])

def get_sources(notebook_id):
    cmd = ["python", "-m", "notebooklm", "source", "list", "--notebook", notebook_id, "--json"]
    result = subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8", errors="replace")
    
    if result.returncode != 0:
        if "expired" in (result.stdout + result.stderr).lower():
            ensure_authenticated()
            return get_sources(notebook_id)
        print(f"❌ Erreur liste sources : {result.stderr}")
        sys.exit(1)
    
    try:
        data = json.loads(result.stdout)
        return data["sources"] if isinstance(data, dict) and "sources" in data else data
    except Exception as e:
        print(f"❌ Erreur JSON : {e}")
        sys.exit(1)

def refresh_source(source_id, title, notebook_id):
    print(f" 🔄 Rafraîchissement : {title}...")
    subprocess.run(
        ["python", "-m", "notebooklm", "source", "refresh", source_id, "--notebook", notebook_id],
        capture_output=True, encoding="utf-8"
    )

def add_source(drive_id, title, notebook_id):
    """Correction : Ajout de 'title' dans les arguments de la commande."""
    print(f" ➕ Ajout : {title}...")
    result = subprocess.run(
        ["python", "-m", "notebooklm", "source", "add-drive", drive_id, title, "--notebook", notebook_id],
        capture_output=True, text=True, encoding="utf-8", errors="replace"
    )
    if result.returncode != 0:
        print(f"  ⚠️ Échec de l'ajout : {result.stderr.strip()}")
    else:
        print(f"  ✅ Source ajoutée.")

def file_to_title(filepath):
    rel = filepath.replace("src/", "", 1)
    clean_name = rel.replace("/", "_").replace("\\", "_").replace(".", "_")
    return f"{clean_name}.md"

def main():
    files = sys.argv[1:]
    if not files: return

    env = load_env()
    notebook_id = env["NOTEBOOKLM_NOTEBOOK_ID"]
    folder_id = env["GOOGLE_FOLDER_ID"]
    token = get_access_token(env)
    
    ensure_authenticated()
    
    print(f"🔍 Connexion au Notebook : {notebook_id}")
    sources = get_sources(notebook_id)
    source_map = { (s.get("title") or s.get("name")): s["id"] for s in sources if "id" in s }

    for filepath in files:
        if not any(filepath.endswith(ext) for ext in [".js", ".jsx", ".ts", ".tsx", ".md"]):
            continue

        title = file_to_title(filepath)
        source_id = source_map.get(title)

        if source_id:
            refresh_source(source_id, title, notebook_id)
        else:
            drive_id = find_drive_id(token, folder_id, title)
            if drive_id:
                add_source(drive_id, title, notebook_id)
            else:
                print(f" ⏭️ Drive introuvable : {title}")

if __name__ == "__main__":
    main()