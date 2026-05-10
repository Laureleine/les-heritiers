#!/usr/bin/env python3
import sys
import json
import subprocess
import urllib.request
import urllib.parse
import os

def load_env():
    env = {}
    if not os.path.exists(".env"):
        print("❌ Fichier .env introuvable.")
        sys.exit(1)
    with open(".env", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if "=" in line and not line.startswith("#"):
                k, v = line.split("=", 1)
                env[k.strip()] = v.strip().strip('"').strip("'")
    return env

def get_access_token(env):
    data = urllib.parse.urlencode({
        "client_id": env["GOOGLE_CLIENT_ID"],
        "client_secret": env["GOOGLE_CLIENT_SECRET"],
        "refresh_token": env["GOOGLE_REFRESH_TOKEN"],
        "grant_type": "refresh_token"
    }).encode()
    req = urllib.request.Request("https://oauth2.googleapis.com/token", data=data)
    with urllib.request.urlopen(req) as r:
        return json.loads(r.read())["access_token"]

def find_drive_id(token, folder_id, name):
    q = urllib.parse.quote(f"name='{name}' and '{folder_id}' in parents")
    url = f"https://www.googleapis.com/drive/v3/files?q={q}&fields=files(id,name)"
    req = urllib.request.Request(url, headers={"Authorization": f"Bearer {token}"})
    with urllib.request.urlopen(req) as r:
        files = json.loads(r.read()).get("files", [])
    return files[0]["id"] if files else None

def ensure_authenticated():
    # On utilise "doctor" qui est plus complet selon votre aide CLI
    result = subprocess.run(
        ["python", "-m", "notebooklm", "doctor"],
        capture_output=True, text=True, encoding="utf-8", errors="replace"
    )
    output = (result.stdout or "") + (result.stderr or "")
    if "not logged in" in output.lower() or "expired" in output.lower():
        print("⚠️ Authentification requise...")
        subprocess.run(["python", "-m", "notebooklm", "login"])

def get_sources(notebook_id):
    # Tentative de récupération des sources
    cmd = ["python", "-m", "notebooklm", "source", "list", "--notebook", notebook_id, "--json"]
    result = subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8", errors="replace")
    
    if result.returncode != 0:
        print(f"❌ Erreur CLI (Code {result.returncode})")
        print(f"STDOUT: {result.stdout}")
        print(f"STDERR: {result.stderr}")
        
        if "authentication" in (result.stderr or "").lower():
            ensure_authenticated()
            return get_sources(notebook_id)
        sys.exit(1)

    try:
        data = json.loads(result.stdout)
        # Selon les versions du CLI, le JSON peut être une liste ou un objet {"sources": []}
        return data["sources"] if isinstance(data, dict) and "sources" in data else data
    except Exception as e:
        print(f"❌ Erreur parsing JSON: {e}")
        print(f"Contenu reçu: {result.stdout}")
        sys.exit(1)

def refresh_source(source_id, title, notebook_id):
    print(f" 🔄 Refreshing: {title}...")
    subprocess.run(["python", "-m", "notebooklm", "source", "refresh", source_id, "--notebook", notebook_id], 
                   capture_output=True, encoding="utf-8")

def add_source(drive_id, title, notebook_id):
    print(f" ➕ Adding: {title}...")
    subprocess.run(["python", "-m", "notebooklm", "source", "add-drive", drive_id, "--notebook", notebook_id],
                   capture_output=True, encoding="utf-8")

def file_to_title(filepath):
    rel = filepath.replace("src/", "", 1)
    return rel.replace("/", "_").replace("\\", "_") + ".md"

def main():
    files = sys.argv[1:]
    if not files: return

    env = load_env()
    notebook_id = env["NOTEBOOKLM_NOTEBOOK_ID"]
    token = get_access_token(env)
    
    print(f"🔍 Connexion au Notebook: {notebook_id}")
    sources = get_sources(notebook_id)
    
    # Création du dictionnaire de correspondance
    source_map = {s.get("title", s.get("name")): s["id"] for s in sources if "id" in s}

    for filepath in files:
        if not any(filepath.endswith(ext) for ext in [".js", ".jsx", ".ts", ".tsx", ".md"]):
            continue
            
        title = file_to_title(filepath)
        source_id = source_map.get(title)

        if source_id:
            refresh_source(source_id, title, notebook_id)
        else:
            drive_id = find_drive_id(token, env["GOOGLE_FOLDER_ID"], title)
            if drive_id:
                add_source(drive_id, title, notebook_id)
            else:
                print(f" ⏭️ Non trouvé sur Drive: {title}")

if __name__ == "__main__":
    main()