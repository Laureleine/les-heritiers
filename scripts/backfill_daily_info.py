#!/usr/bin/env python3
"""Backfill journal_daily_info pour toutes les dates existantes."""

import json
import os
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent.parent / "1899"))
from daily_info import generate_for_date

# Load SUPABASE_DB_URL from .env
env_path = Path(__file__).parent.parent / ".env"
db_url = None
if env_path.exists():
    for line in env_path.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if line.startswith("SUPABASE_DB_URL="):
            db_url = line.split("=", 1)[1].strip().strip("'\"")
            break
if not db_url:
    db_url = os.environ.get("SUPABASE_DB_URL")
if not db_url:
    print("❌ SUPABASE_DB_URL introuvable")
    sys.exit(1)

try:
    import psycopg2
except ImportError:
    print("❌ pip install psycopg2-binary")
    sys.exit(1)

conn = psycopg2.connect(db_url)
conn.autocommit = True
cur = conn.cursor()

# Récupérer les dates
cur.execute("SELECT DISTINCT date::text FROM public.journal_articles ORDER BY date")
dates = [r[0] for r in cur.fetchall()]
print(f"📅 {len(dates)} dates à traiter...")

for i, d in enumerate(dates, 1):
    if d < '1899-01-01':
        print(f"  [{i}/{len(dates)}] {d}... ignoré")
        continue

    print(f"  [{i}/{len(dates)}] {d}...", end=" ", flush=True)
    data = generate_for_date(d)

    cur.execute("""
        INSERT INTO public.journal_daily_info
            (date, sunrise, sunset, moon_phase, moon_visible, moon_aspect, moon_desc, moon_icon,
             weather_condition, weather_tmin, weather_tmax, weather_precip_mm, weather_wind_kmh,
             weather_icon, weather_desc)
        VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)
        ON CONFLICT (date) DO UPDATE SET
            sunrise=EXCLUDED.sunrise, sunset=EXCLUDED.sunset,
            moon_phase=EXCLUDED.moon_phase, moon_visible=EXCLUDED.moon_visible,
            moon_aspect=EXCLUDED.moon_aspect, moon_desc=EXCLUDED.moon_desc,
            moon_icon=EXCLUDED.moon_icon,
            weather_condition=EXCLUDED.weather_condition,
            weather_tmin=EXCLUDED.weather_tmin, weather_tmax=EXCLUDED.weather_tmax,
            weather_precip_mm=EXCLUDED.weather_precip_mm,
            weather_wind_kmh=EXCLUDED.weather_wind_kmh,
            weather_icon=EXCLUDED.weather_icon, weather_desc=EXCLUDED.weather_desc,
            updated_at=now()
    """, (
        d, data['sunrise'], data['sunset'],
        data['moon_phase'], data['moon_visible'], data['moon_aspect'],
        data['moon_desc'], data['moon_icon'],
        data['weather_condition'], data['weather_tmin'], data['weather_tmax'],
        data['weather_precip_mm'], data['weather_wind_kmh'],
        data['weather_icon'], data['weather_desc'],
    ))
    print(f"☀️{data['sunrise']}-{data['sunset']} 🌙{data['moon_phase']}")

cur.close()
conn.close()
print(f"\n✅ Backfill terminé !")
