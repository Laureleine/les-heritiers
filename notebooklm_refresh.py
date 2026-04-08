#!/usr/bin/env python3
"""Rafraîchit ou ajoute les sources NotebookLM correspondant aux fichiers modifiés.
Lit NOTEBOOKLM_NOTEBOOK_ID depuis .env — utilisable dans tous les projets.
"""

import sys
import json
import subprocess
import urllib.request
import urllib.parse


def load_env():
    env = {}
    with open(".env") as f:
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
    q = urllib.parse.quote(
        f"name='{name}' and '{folder_id}' in parents "
        f"and mimeType='application/vnd.google-apps.document'"
    )
    url = f"https://www.googleapis.com/drive/v3/files?q={q}&fields=files(id)"
    req = urllib.request.Request(url, headers={"Authorization": f"Bearer {token}"})
    with urllib.request.urlopen(req) as r:
        files = json.loads(r.read()).get("files", [])
        return files[0]["id"] if files else None


def ensure_authenticated():
    result = subprocess.run(
        ["python", "-m", "notebooklm", "auth", "check"],
        capture_output=True, text=True
    )
    if result.returncode != 0 or "expired" in result.stdout.lower() or "expired" in result.stderr.lower():
        print("⚠️  Session expirée — login requis...")
        subprocess.run(["python", "-m", "notebooklm", "login"])
        print("✅ Login OK, on reprend...")


def get_sources(notebook_id):
    result = subprocess.run(
        ["python", "-m", "notebooklm", "source", "list", "--json",
         "--notebook", notebook_id],
        capture_output=True, text=True
    )
    if result.returncode != 0:
        if "expired" in result.stderr.lower() or "authentication" in result.stderr.lower():
            ensure_authenticated()
            return get_sources(notebook_id)
        print(f"❌ Erreur liste sources: {result.stderr}")
        sys.exit(1)
    return json.loads(result.stdout)["sources"]


def refresh_source(source_id, title, notebook_id):
    result = subprocess.run(
        ["python", "-m", "notebooklm", "source", "refresh", source_id,
         "--notebook", notebook_id],
        capture_output=True, text=True
    )
    if result.returncode != 0:
        if "expired" in result.stderr.lower() or "authentication" in result.stderr.lower():
            ensure_authenticated()
            refresh_source(source_id, title, notebook_id)
            return
        print(f"  ⚠️  Refresh échoué ({title}): {result.stderr.strip()}")
    else:
        print(f"  🔄 Refreshed: {title}")


def add_source(drive_doc_id, title, notebook_id):
    result = subprocess.run(
        ["python", "-m", "notebooklm", "source", "add-drive", drive_doc_id, title,
         "--notebook", notebook_id],
        capture_output=True, text=True
    )
    if result.returncode != 0:
        if "expired" in result.stderr.lower() or "authentication" in result.stderr.lower():
            ensure_authenticated()
            add_source(drive_doc_id, title, notebook_id)
            return
        print(f"  ⚠️  Ajout échoué ({title}): {result.stderr.strip()}")
    else:
        print(f"  ➕ Ajouté: {title}")


def file_to_title(filepath):
    """Convertit un chemin de fichier en titre GDoc (même convention que diegesis.sh)."""
    rel = filepath.replace("src/", "", 1)
    return rel.replace("/", "_").replace(".", "_") + ".gdoc"


def main():
    files = sys.argv[1:]
    if not files:
        print("ℹ️  Aucun fichier à rafraîchir")
        return

    env = load_env()

    notebook_id = env.get("NOTEBOOKLM_NOTEBOOK_ID")
    if not notebook_id:
        print("❌ NOTEBOOKLM_NOTEBOOK_ID manquant dans .env")
        sys.exit(1)

    token = get_access_token(env)
    folder_id = env["GOOGLE_FOLDER_ID"]

    ensure_authenticated()

    print("🔍 Récupération des sources NotebookLM...")
    sources = get_sources(notebook_id)
    source_map = {s["title"]: s["id"] for s in sources}

    for filepath in files:
        title = file_to_title(filepath)
        source_id = source_map.get(title)
        if source_id:
            refresh_source(source_id, title, notebook_id)
        else:
            drive_id = find_drive_id(token, folder_id, title)
            if drive_id:
                add_source(drive_id, title, notebook_id)
            else:
                print(f"  ⏭️  Absent du Drive: {title}")


if __name__ == "__main__":
    main()