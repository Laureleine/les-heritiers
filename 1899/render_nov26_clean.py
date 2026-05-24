#!/usr/bin/env python3
"""Generate clean HTML for 26 novembre 1899 with intelligent OCR filtering."""

import sys, re, json
from pathlib import Path
from collections import Counter

sys.path.insert(0, str(Path(__file__).parent))
from generate import (
    load_events, MONTHS_FR,
    GallicaScraper, fetch_month_html, parse_daily_table,
    get_moon_line, generate_weather_line, clean_text,
)

BASE = Path(__file__).parent
OUT = BASE / "output"



# Simple OCR substitution patterns (same as generate.py)
_OCR_SUBS: list[tuple[str, str]] = [
    (r'(?<=\w)1(?=\w)', 'l'),
    (r'(?<=\w)0(?=\w)', 'o'),
    (r'(\d)l(\d)', r'\g<1>1\g<2>'),
    (r'\b18[o0]0\b', '1899'),
    (r'\b18oo\b', '1899'),
    (r'(?<=[\d,])o(?=[\d,])', '0'),
    # High-frequency letter swaps
    (r'\bIe\b', 'le'),
    (r'\bIa\b', 'la'),
    (r'\bJes\b', 'Les'),
    (r'\bZe\b', 'Le'),
    (r'\bLè\b', 'Le'),
    (r'\bTe\b', 'les'),
    (r'\bcos\b', 'ces'),
    (r'\bavéc\b', 'avec'),
    (r'\bbe\b', 'de'),
    # Common OCR manglings
    (r'\bsommission\b', 'commission'),
    (r'\b[ée]ommission\b', 'commission'),
    (r'\bunaniroit[ée]\b', 'unanimité'),
    (r'\bunanimiot[ée]\b', 'unanimité'),
    (r'\bcilement\b', 'difficilement'),
    (r'\bdoeument\b', 'document'),
    (r'\bvitation\b', 'invitation'),
    (r'\bletfet\b', "l'effet"),
    # Leading accent loss ( \"etre → Être)
    (r'^\s*[\\"\']?(?=[A-Z][a-z])', ''),
]

def correct_line(line: str) -> str:
    """Apply safe regex corrections only (no dictionary-based correction)."""
    import re
    for pattern, repl in _OCR_SUBS:
        line = re.sub(pattern, repl, line, flags=re.IGNORECASE)
    return line


# ── Article cleaning ──────────────────────────────────────────────────
def clean_ocr_lines(raw_lines: list[str]) -> list[str]:
    """Filter and join OCR lines into clean paragraphs."""
    # Strip non-text noise
    stripped = []
    for l in raw_lines:
        l = l.strip().strip("★|»«")
        if l:
            stripped.append(l)

    # Rejoin hyphenated words (handle trailing - with optional noise)
    hyphen_joined = []
    buf = ""
    for l in stripped:
        clean_tail = l.rstrip(" .|»«\u2502,;:!?")
        if buf:
            hyphen_joined.append(buf + l.lstrip(" |»«\u2502.,;:!?"))
            buf = ""
        elif clean_tail.endswith("-") and not clean_tail.endswith("---"):
            buf = clean_tail[:-1].rstrip(" .|»«\u2502")
        else:
            hyphen_joined.append(l)
    if buf:
        hyphen_joined.append(buf)

    # Merge continuation lines
    def first_letter(s):
        for c in s:
            if c.isalpha():
                return c
        return ""
    joined = []
    for l in hyphen_joined:
        fl = first_letter(l)
        if not joined:
            joined.append(l)
        elif fl and fl.islower() and joined[-1][-1:] not in ".!?":
            joined[-1] += " " + l.lstrip(" «-\u00ab\u203a")
        else:
            joined.append(l)

    # Remove header/copyright lines before filtering
    header_skip = re.compile(
        r'(abonnement|tirage|directeur|gérant|prix|'
        r'administration|bureaux|chemin\s+de\s+fer|rédaction|'
        r'insertion|publicit|annonce|numéro|dépôt|'
        r'lettre|mandat|adresser|grand roman|'
        r'n[º°]\s*\d{3,4}|troisième année|'
        r'artements|union\s+postale|aurore.?paris|apansse|'
        r'apansse\s+réuonapmquE)',
        re.IGNORECASE,
    )
    filtered = [l for l in joined if not header_skip.search(l[:100])]

    clean: list[str] = []
    for l in filtered:
        l = re.sub(r'[|»«\u2502★*\u2500-\u257F]', ' ', l)
        l = re.sub(r'[ \t]+', ' ', l).strip()
        # Remove leading/trailing noise
        l = re.sub(r'^[\W\d_]+', '', l)
        l = re.sub(r'[\W\d_]+$', '', l)
        l = l.strip()
        alpha = sum(1 for c in l if c.isalpha())
        total = len(l)
        if total < 20 or alpha < 12:
            continue
        if re.search(r'^[\W\d\s]{10,}$', l):
            continue
        clean.append(l)

    return [correct_line(l) for l in clean]


# ── HTML Generation ──────────────────────────────────────────────────
def main():
    events_db = load_events()
    html = fetch_month_html(2009, 11)
    daily = parse_daily_table(html)
    w = daily.get(26, {})
    weather_lines = generate_weather_line(11, 26, 1899, w.get("condition", ""), w.get("tmin"), w.get("tmax"), w.get("precip_mm", 0), w.get("wind_kmh"))
    moon_line, phase_name, _ = get_moon_line(1899, 11, 26)
    base_ev = events_db.get((1899, 11, 26), {})

    scraper = GallicaScraper(delay=0.5)
    newspaper_sections = {}

    for np_name in ["Le Petit Parisien", "L'Aurore"]:
        info = scraper.fetch_newspaper(np_name, 1899, 11, 26)
        if not info or info.get("error"):
            continue
        lines = info.get("lines", {})
        ordered = lines.get("ordered", [])
        raw = [item["text"] for item in ordered if item.get("text")]
        paras = clean_ocr_lines(raw)
        newspaper_sections[np_name] = {
            "paras": paras,
            "source": info.get("ocr_source", "?"),
        }

    out = []
    def w(tag, text=""):
        out.append(f"<{tag}>{text}</{tag}>")

    out.append('''<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>26 novembre 1899 — Paris</title>
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: Georgia,'Times New Roman',serif; max-width: 52em; margin: 2em auto; padding: 0 1.2em; color: #1a1a1a; background: #faf9f7; line-height: 1.65; font-size: 16px; }
h1 { font-size: 1.4em; border-bottom: 2px solid #c00; padding-bottom: .3em; margin-bottom: .6em; color: #222; }
h2 { font-size: 1.1em; margin: 1em 0 .4em; color: #333; }
h3 { font-size: 1em; margin: .6em 0 .2em; color: #444; }
p { margin: .3em 0; text-align: justify; hyphens: auto; }
.section { background: #f3f2ef; padding: .6em 1em; border-radius: 6px; margin: .5em 0; }
.section.weather { border-left: 4px solid #4682b4; }
.section.moon { border-left: 4px solid #555; }
.section.news { border-left: 4px solid #2e7d32; }
details.np { margin: .6em 0; background: #fff; border: 1px solid #ddd; border-radius: 6px; padding: .3em .6em; }
details.np > summary { cursor: pointer; padding: .4em .5em; border-radius: 4px; font-size: 1.05em; background: #f5f5f5; }
details.np > summary:hover { background: #e8e6e3; }
details.article { margin: .3em 0 .3em 1em; border-left: 3px solid #ccc; padding-left: .6em; }
details.article > summary { cursor: pointer; padding: .2em .4em; border-radius: 3px; font-size: .92em; color: #333; }
details.article > summary:hover { background: #f0eeeb; }
.article-body { margin: .2em 0 .2em .8em; padding: .2em .7em; border-left: 2px solid #bbb; background: #fcfcfc; border-radius: 0 3px 3px 0; }
.article-body p { margin: .4em 0; line-height: 1.7; text-align: justify; hyphens: auto; }
.meta { color: #888; font-size: .85em; }
.header-meta { color: #666; font-size: .9em; margin-bottom: .8em; }
</style>
</head>
<body>''')

    out.append('<h1>\U0001f4c5 26 novembre 1899 — Paris</h1>')
    out.append('<p class="header-meta">Dimanche — Dernier Quartier de Lune — Fin novembre 1899</p>')

    # Météo
    out.append('<div class="section weather"><h2>\u26c5 Météo</h2>')
    for wl in weather_lines:
        out.append(f"<p>{wl}</p>")
    out.append('</div>')

    # Lune
    out.append('<div class="section moon"><h2>\U0001f31b Lune</h2>')
    out.append(f"<p><strong>{phase_name}</strong></p>")
    out.append(f"<p>{moon_line}</p>")
    out.append('</div>')

    # Actualité
    out.append('<div class="section news"><h2>\U0001f4f0 Actualité</h2>')
    paris = base_ev.get("paris", "")
    france = base_ev.get("france", "")
    monde = base_ev.get("monde", "")
    out.append(f"<h3>Paris</h3><p>{paris}</p>")
    if france:
        out.append(f"<h3>France</h3><p>{france}</p>")
    if monde:
        out.append(f"<h3>Monde</h3><p>{monde}</p>")
    out.append('</div>')

    # Journaux
    for np_name in ["Le Petit Parisien", "L'Aurore"]:
        sec = newspaper_sections.get(np_name)
        if not sec or not sec["paras"]:
            continue
        out.append(f'<details class="np" open>')
        out.append(f'<summary><b>{np_name}</b> <span class="meta">(OCR: {sec["source"]})</span></summary>')

        # Simple: group all paragraphs under the newspaper
        out.append('<div class="article-body">')
        for p in sec["paras"]:
            out.append(f"<p>{p[:600]}</p>")
        out.append('</div>')
        out.append('</details>')

    out.append('</body>\n</html>')

    html_out = "\n".join(out)
    out_path = OUT / "26-novembre-1899.html"
    out_path.write_text(html_out, encoding="utf-8")
    print(f"\u00c9crit : {out_path}")


if __name__ == "__main__":
    main()
