#!/usr/bin/env python3
"""Generate a standalone HTML page for 26 novembre 1899."""

import sys, re, json
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent))
from generate import (
    load_events, MONTHS_FR,
    filter_paris_line, clean_text, looks_like_garbage,
    GallicaScraper, fetch_month_html, parse_daily_table,
)

BASE = Path(__file__).parent
OUT = BASE / "output"

events_db = load_events()

# Get weather for Nov 2009
html = fetch_month_html(2009, 11)
daily = parse_daily_table(html)

# Scrape just day 26 from Gallica
scraper = GallicaScraper(delay=1.0)
scraped = {}
key = "1899-11-26"
per_np = {}
all_headlines = []
all_articles = []
all_snippets = []
for np_name in ["Le Petit Parisien", "L'Aurore"]:
    info = scraper.fetch_newspaper(np_name, 1899, 11, 26)
    if not info or info.get("error"):
        continue
    lines = info.get("lines", {})
    h = [clean_text(l) for l in lines.get("headlines", []) if not looks_like_garbage(clean_text(l))]
    a = [clean_text(l) for l in lines.get("articles", []) if not looks_like_garbage(clean_text(l))]
    s = [clean_text(l) for l in lines.get("snippets", []) if not looks_like_garbage(clean_text(l))]
    ordered = []
    for item in lines.get("ordered", []):
        t = item["type"]
        txt = clean_text(item["text"])
        if txt and not looks_like_garbage(txt):
            ordered.append({"type": t, "text": txt})
    per_np[np_name] = {
        "headlines": [f"[{np_name}] {x}" for x in h],
        "articles": [f"[{np_name}] {x}" for x in a],
        "snippets": [f"[{np_name}] {x}" for x in s],
        "ordered": [{"type": x["type"], "text": f"[{np_name}] {x['text']}"} for x in ordered],
        "source": info.get("ocr_source", "?"),
    }
    all_headlines.extend(per_np[np_name]["headlines"])
    all_articles.extend(per_np[np_name]["articles"])
    all_snippets.extend(per_np[np_name]["snippets"])

base_ev = events_db.get((1899, 11, 26), {})
scraped[key] = {
    "per_np": per_np,
    "paris": " | ".join(all_headlines[:3]) if all_headlines else base_ev.get("paris", "La vie parisienne suit son cours habituel."),
    "paris_all": {"headlines": all_headlines, "articles": all_articles, "snippets": all_snippets},
    "france": base_ev.get("france", "Aucun événement politique majeur connu."),
    "monde": base_ev.get("monde", "Aucun événement mondial notable."),
}

# Also compute moon for Nov 26
from generate import get_moon_line, generate_weather_line
w = daily.get(26, {})
weather_lines = generate_weather_line(11, 26, 1899, w.get("condition", ""), w.get("tmin"), w.get("tmax"), w.get("precip_mm", 0), w.get("wind_kmh"))
moon_line, phase_name, pct = get_moon_line(1899, 11, 26)

entry = {
    "day": 26,
    "phase_name": phase_name,
    "weather_lines": weather_lines,
    "moon_line": moon_line,
    "paris": scraped[key]["paris"],
    "france": scraped[key]["france"],
    "monde": scraped[key]["monde"],
    "paris_all": scraped[key]["paris_all"],
    "per_np": per_np,
}

wl = entry['weather_lines']
prefix_re = re.compile(r'^\[(Le Petit Parisien|L\'Aurore)\]\s*')

def render_weather():
    lines = []
    for l in wl:
        lines.append(f'<p>{l}</p>')
    return '\n'.join(lines)

def render_moon():
    return (
        f'<p><strong>{entry["phase_name"]}</strong></p>\n'
        f'<p>{entry["moon_line"]}</p>'
    )

def render_news():
    parts = []
    for label, key, emoji in [
        ("Paris", "paris", "\U0001f3db\ufe0f"),
        ("France", "france", "\U0001f1eb\U0001f1f7"),
        ("Monde", "monde", "\U0001f30d"),
    ]:
        text = entry.get(key, "")
        if key == "paris":
            text = filter_paris_line(text)
        parts.append(f'<h3>{emoji} {label}</h3>\n<ul><li>{text}</li></ul>')
    return '\n'.join(parts)

def render_newspapers():
    per_np = entry.get('per_np', {})
    out = []

    for np_name in ["Le Petit Parisien", "L'Aurore"]:
        np_data = per_np.get(np_name, {})
        ordered_raw = np_data.get("ordered", [])
        source = np_data.get("source", "?")

        ordered = []
        for item in ordered_raw:
            body = prefix_re.sub('', item["text"])
            if looks_like_garbage(body):
                continue
            ordered.append({**item, "text": body})

        if not ordered:
            out.append(f'<details class="np"><summary><b>{np_name}</b> <span class="meta">(OCR: {source})</span></summary><p><em>Aucun contenu lisible</em></p></details>')
            continue

        out.append(f'<details class="np" open>')
        out.append(f'<summary><b>{np_name}</b> <span class="meta">(OCR: {source})</span></summary>')

        first_headline_idx = None
        for i, item in enumerate(ordered):
            if item["type"] == "headline":
                first_headline_idx = i
                break

        if first_headline_idx is None:
            out.append('<p><em>Pas de titre clair détecté</em></p>')
            out.append('</details>')
            continue

        def lines_to_paragraphs(items):
            """Join OCR lines into flowing paragraphs."""
            if not items:
                return []
            # First pass: rejoin hyphenated line breaks
            joined = []
            buf = ""
            for item in items:
                text = item["text"]
                if buf:
                    buf += text
                    joined.append(buf)
                    buf = ""
                elif text.endswith("-") and not text.endswith("---"):
                    buf = text[:-1]
                else:
                    joined.append(text)

            if buf:
                joined.append(buf)

            # Second pass: group into paragraphs on sentence boundaries
            paragraphs = []
            para = ""
            for i, text in enumerate(joined):
                stripped = text.strip()
                if not stripped:
                    if para:
                        paragraphs.append(para)
                        para = ""
                    continue

                # Start new paragraph after sentence end + capital letter
                if para and i > 0:
                    prev = joined[i-1].strip()
                    if prev and prev[-1] in ".!?" and stripped and stripped[0].isupper():
                        paragraphs.append(para)
                        para = ""

                if para and not para.endswith(" "):
                    para += " "
                para += stripped

            if para:
                paragraphs.append(para)

            return paragraphs

        current_headline = None
        hl_items = []

        def flush_headline():
            nonlocal current_headline, hl_items, out
            if current_headline is None:
                return
            out.append(f'<details class="article">')
            out.append(f'<summary><b>{current_headline[:120]}</b></summary>')
            if hl_items:
                paragraphs = lines_to_paragraphs(hl_items)
                out.append('<div class="article-body">')
                for p in paragraphs:
                    out.append(f'<p>{p[:600]}</p>')
                out.append('</div>')
            else:
                out.append('<p class="meta">Titre seul, texte non disponible</p>')
            out.append('</details>')
            hl_items.clear()

        for item in ordered:
            if item["type"] == "headline":
                flush_headline()
                current_headline = item["text"]
            elif current_headline:
                hl_items.append(item)

        flush_headline()
        out.append('</details>')

    return '\n'.join(out)

HTML = """<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>26 novembre 1899 — Paris</title>
<style>
* {{ margin: 0; padding: 0; box-sizing: border-box; }}
body {{
    font-family: Georgia, 'Times New Roman', serif;
    max-width: 52em; margin: 2em auto; padding: 0 1.2em;
    color: #1a1a1a; background: #faf9f7; line-height: 1.65;
    font-size: 16px;
}}
h1 {{ font-size: 1.6em; border-bottom: 2px solid #c00; padding-bottom: .3em; margin-bottom: .6em; color: #222; }}
h2 {{ font-size: 1.25em; margin: .8em 0 .3em; color: #333; }}
h3 {{ font-size: 1.05em; margin: .5em 0 .2em; color: #444; }}
p {{ margin: .25em 0; }}
.section {{
    background: #f3f2ef; padding: .6em 1em; border-radius: 6px; margin: .5em 0;
    border-left: 4px solid #c00;
}}
.section.weather {{ border-left-color: #4682b4; }}
.section.moon {{ border-left-color: #555; }}
.section.news {{ border-left-color: #2e7d32; }}
details.np {{
    margin: .6em 0; background: #fff; border: 1px solid #ddd;
    border-radius: 6px; padding: .3em .6em;
}}
details.np > summary {{
    cursor: pointer; padding: .4em .5em; border-radius: 4px;
    font-size: 1.05em; background: #f5f5f5;
}}
details.np > summary:hover {{ background: #e8e6e3; }}
details.article {{
    margin: .3em 0 .3em 1em; border-left: 3px solid #ccc;
    padding-left: .6em;
}}
details.article > summary {{
    cursor: pointer; padding: .2em .4em; border-radius: 3px;
    font-size: .92em; color: #333;
}}
details.article > summary:hover {{ background: #f0eeeb; }}
.article-body {{
    margin: .2em 0 .2em .8em; padding: .2em .7em;
    border-left: 2px solid #bbb;
    background: #fcfcfc; border-radius: 0 3px 3px 0;
}}
.article-body p {{
    margin: .4em 0; line-height: 1.7;
    text-align: justify;
    hyphens: auto;
}}
.meta {{ color: #888; font-size: .85em; }}
ul {{ padding-left: 1.2em; margin: .2em 0; }}
li {{ margin: .1em 0; }}
hr {{ border: none; border-top: 1px solid #ddd; margin: 1em 0; }}
.header-meta {{ color: #666; font-size: .9em; margin-bottom: .8em; }}
</style>
</head>
<body>
<h1>\U0001f4c5 26 novembre 1899 — Paris</h1>
<p class="header-meta">Dimanche — Dernier Quartier de Lune — Fin novembre 1899</p>

<div class="section weather">
<h2>\u26c5 Météo</h2>
{weather}
</div>

<div class="section moon">
<h2>\U0001f31b Lune</h2>
{moon}
</div>

<div class="section news">
<h2>\U0001f4f0 Actualité</h2>
{news}
</div>

<hr>

{newspapers}

</body>
</html>"""

html_out = HTML.format(
    weather=render_weather(),
    moon=render_moon(),
    news=render_news(),
    newspapers=render_newspapers(),
)

out_path = OUT / "26-novembre-1899.html"
out_path.write_text(html_out, encoding="utf-8")
print(f"Écrit : {out_path}")
