#!/usr/bin/env python3
"""
Construit petit_parisien_arks.json : mapping date ISO → ARK pour Le Petit Parisien.

Usage :
    python 1899/build_ark_cache.py

Durée estimée : ~2-3 min (24 000 numéros, ~50 pages de 500).
Le fichier JSON généré est utilisé par ocr_petit_parisien.py pour éviter
les URLs de navigation Gallica bloquées par Cloudflare.
"""
import json, time, re, xml.etree.ElementTree as ET
from pathlib import Path
from urllib.parse import quote
from datetime import date

try:
    import cloudscraper
except ImportError:
    print("pip install cloudscraper")
    exit(1)

OUT = Path(__file__).parent / "petit_parisien_arks.json"

NS = {
    'srw': 'http://www.loc.gov/zing/srw/',
    'dc':  'http://purl.org/dc/elements/1.1/',
    'oai_dc': 'http://www.openarchives.org/OAI/2.0/oai_dc/',
}

# Plage du batch (inclus)
DATE_MIN = date(1899, 10, 1)
DATE_MAX = date(1914, 12, 31)

# Requête : numéros quotidiens uniquement (exclut suppléments, almanachs, etc.)
QUERY = quote('dc.title adj "petit parisien" and dc.title all "quotidien"')

SCRAPER = cloudscraper.create_scraper(browser={"browser":"chrome","platform":"windows","mobile":False})


def fetch_all() -> dict[str, str]:
    """Pagine le SRU et retourne {date_iso: ark} pour toute la plage cible."""
    cache: dict[str, str] = {}
    start = 1
    total = None

    while True:
        url = (
            f"https://gallica.bnf.fr/SRU?operation=searchRetrieve&version=1.2"
            f"&query={QUERY}&maximumRecords=50&startRecord={start}"
            f"&recordSchema=dc&collapsing=disabled"
        )
        # Retry sur 429 (rate limit Gallica)
        for attempt in range(5):
            r = SCRAPER.get(url, timeout=30)
            if r.status_code == 429:
                wait = 15 * (2 ** attempt)
                print(f"  ⏳ 429 rate-limit (tentative {attempt+1}/5), attente {wait}s...")
                time.sleep(wait)
                continue
            break
        if not r.ok:
            print(f"  ⚠️  SRU erreur {r.status_code} a startRecord={start}, arret.")
            break

        try:
            root = ET.fromstring(r.text)
        except ET.ParseError as e:
            print(f"  ⚠️  XML parse error a startRecord={start} ({e}), arret.")
            break

        if total is None:
            nb = root.find('srw:numberOfRecords', NS)
            total = int(nb.text) if nb is not None and nb.text else 0
            print(f"Total SRU : {total} numéros à paginer")

        records = root.findall('.//srw:recordData', NS)
        if not records:
            break

        batch_kept = 0
        for rec in records:
            dc = rec.find('oai_dc:dc', NS)
            if dc is None:
                continue
            dates  = [e.text for e in dc.findall('dc:date', NS)  if e.text]
            idents = [e.text for e in dc.findall('dc:identifier', NS) if e.text]

            date_iso = next((d for d in dates if re.match(r'\d{4}-\d{2}-\d{2}$', d)), None)
            ark_url  = next((i for i in idents if 'gallica.bnf.fr/ark' in i and 'bpt6k' in i), None)

            if not date_iso or not ark_url:
                continue

            d = date.fromisoformat(date_iso)
            if DATE_MIN <= d <= DATE_MAX:
                ark = re.search(r'bpt6k[a-zA-Z0-9]+', ark_url).group(0)
                cache[date_iso] = ark
                batch_kept += 1

        fetched = start + len(records) - 1
        pct = fetched / total * 100 if total else 0
        print(f"  page {start//50 + 1:3d} | {fetched:5d}/{total} ({pct:.0f}%) | +{batch_kept} dans plage")

        if fetched >= total or len(records) < 50:
            break
        # Sauvegarde incrémentale toutes les 10 pages
        page_num = (start - 1) // 50 + 1
        if page_num % 10 == 0:
            OUT.write_text(json.dumps(cache, ensure_ascii=False, indent=2, sort_keys=True), encoding="utf-8")

        start += 50
        time.sleep(2.0)

    return cache


def main():
    # Charger le cache existant si présent
    existing: dict[str, str] = {}
    if OUT.exists():
        existing = json.loads(OUT.read_text(encoding="utf-8"))
        in_range = sum(1 for d in existing if DATE_MIN <= date.fromisoformat(d) <= DATE_MAX)
        print(f"Cache existant : {len(existing)} entrees totales, {in_range} dans la plage cible")
        if in_range > 3000:
            print("Cache dejà suffisamment rempli. Supprime le fichier pour forcer la reconstruction.")
            return

    print("Construction du cache date->ARK via SRU Gallica...")
    cache = fetch_all()
    existing.update(cache)

    OUT.write_text(json.dumps(existing, ensure_ascii=False, indent=2, sort_keys=True), encoding="utf-8")
    print(f"\nCache sauvegarde : {len(cache)} entrees (plage 1899-1914) -> {OUT}")


if __name__ == "__main__":
    main()
