#!/usr/bin/env python3
"""
Génère les données quotidiennes (météo, soleil, lune) pour une date donnée.
Utilise le scraping historique-meteo.net pour la météo et la librairie astral
pour les calculs astronomiques (soleil, lune).
"""

import json
import re
import sys
from datetime import date, timedelta
from pathlib import Path

import requests
from bs4 import BeautifulSoup

from astral import LocationInfo
from astral.sun import sun
from astral.moon import phase as moon_phase_num

# ─── PARIS ───────────────────────────────────────────────────────────────
PARIS = LocationInfo("Paris", "France", "Europe/Paris", 48.8566, 2.3522)
MONTHS_FR = [
    None, "janvier", "fevrier", "mars", "avril", "mai", "juin",
    "juillet", "aout", "septembre", "octobre", "novembre", "decembre"
]

# ─── SEASONS ─────────────────────────────────────────────────────────────
SEASONS = {1: "hiver", 2: "hiver", 3: "printemps", 4: "printemps",
           5: "printemps", 6: "ete", 7: "ete", 8: "ete",
           9: "automne", 10: "automne", 11: "automne", 12: "hiver"}

# ─── WEATHER SCRAPING ────────────────────────────────────────────────────
WEATHER_DESC = {
    "ensoleille": "le soleil brillait genereusement sur la capitale",
    "degagement": "le ciel s'est progressivement degage au fil des heures",
    "peu nuageux": "quelques nuages passagers n'ont pas gate la journee",
    "nuageux": "les nuages dominaient le ciel parisien",
    "tres nuageux": "une epaisse couche nuageuse couvrait l'ensemble du ciel",
    "couvert": "le ciel restait bas et Couvert sur toute la capitale",
    "brume": "une legere brume flottait au-dessus de Paris",
    "brouillard": "une epaisse nappe de brouillard a enveloppe la Seine",
    "faibles passages": "quelques faibles passages nuageux ont traverse le ciel",
    "averses": "des averses passageres ont balaye les boulevards",
    "pluie": "la pluie tombait sur Paris",
    "fortes pluies": "de fortes pluies se sont abattues sur la capitale",
    "orage": "l'orage a gronde au-dessus de Paris",
    "neige": "les flocons tombaient sur les toits de Paris",
    "faibles chutes": "de faibles chutes de neige saupoudraient la ville",
    "vent": "le vent soufflait fort sur la capitale",
    "tempete": "la tempete secouait les toits de Paris",
    "grêle": "de la grele est tombee sur Paris",
    "brume legere": "une legere brume flottait au-dessus de Paris",
}

WIND_THRESHOLDS = [
    (80, "violent"), (60, "tres fort"), (40, "fort"),
    (25, "modere"), (10, "leger"), (0, "a peine sensible"),
]

PRECIP_THRESHOLDS = [(20, "tres abondantes"), (10, "abondantes"),
                     (5, "moderees"), (1, "fine"), (0, None)]

WEATHER_ICONS = {
    "ensoleille": "☀️", "degagement": "⛅", "peu nuageux": "⛅",
    "nuageux": "☁️", "tres nuageux": "☁️", "couvert": "☁️",
    "brume": "🌫️", "brouillard": "🌫️", "faibles passages": "⛅",
    "averses": "🌦️", "pluie": "🌧️", "fortes pluies": "🌧️",
    "orage": "⛈️", "neige": "❄️", "faibles chutes": "❄️",
    "vent": "💨", "tempete": "💨",
}


def fetch_month_html(year, month):
    url = f"https://www.historique-meteo.net/france/ile-de-france/paris/{year}/{month:02d}/"
    headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}
    resp = requests.get(url, headers=headers, timeout=30)
    resp.encoding = "utf-8"
    resp.raise_for_status()
    return resp.text


def parse_daily_table(html):
    soup = BeautifulSoup(html, "html.parser")
    data = {}
    for tr in soup.find_all("tr"):
        tds = tr.find_all("td")
        if len(tds) < 7:
            continue
        day_text = tds[0].get_text(strip=True)
        day_match = re.search(r"(\d+)", day_text)
        if not day_match:
            continue
        day = int(day_match.group(1))

        def parse_temp(t):
            nums = re.findall(r"[-]?\d+[.,]?\d*", t)
            return float(nums[0].replace(",", ".")) if nums else None

        def parse_precip(t):
            nums = re.findall(r"[\d.]+", t.replace(",", "."))
            return float(nums[0]) if nums else 0.0

        def parse_wind(t):
            nums = re.findall(r"[\d.]+", t.replace(",", "."))
            return float(nums[0]) if nums else None

        data[day] = {
            "condition": tds[1].get_text(" ", strip=True).lower(),
            "tmax": parse_temp(tds[2].get_text(strip=True)),
            "tmin": parse_temp(tds[3].get_text(strip=True)),
            "precip_mm": parse_precip(tds[4].get_text(strip=True)),
            "wind_kmh": parse_wind(tds[5].get_text(strip=True)),
        }
    return data


def normalize_condition(cond):
    cond = cond.strip().lower()
    cond = re.sub(r"\s+", " ", cond)
    for key in sorted(WEATHER_DESC, key=len, reverse=True):
        if key in cond:
            return key
    return cond


def get_weather_icon(cond):
    norm = normalize_condition(cond)
    return WEATHER_ICONS.get(norm, "🌤️")


def classify_wind(speed):
    if speed is None:
        return "modere"
    for threshold, label in reversed(WIND_THRESHOLDS):
        if speed >= threshold:
            return label
    return "calme"


def classify_precip(mm):
    if mm is None or mm == 0:
        return None
    for threshold, label in reversed(PRECIP_THRESHOLDS):
        if mm >= threshold:
            return label
    return "fine"


def generate_weather_text(month, day, year, condition, tmin, tmax, precip_mm, wind_kmh):
    month_name = MONTHS_FR[month]
    normalized = normalize_condition(condition)
    desc = WEATHER_DESC.get(normalized, "le temps etait variable, entre nuages et eclaircies")
    lines = []
    lines.append(f"Le {day} {month_name} {year}, a Paris, {desc}.")

    if tmin is not None and tmax is not None:
        lines.append(f"Les temperatures ont oscille entre {tmin:.0f} C au petit matin et {tmax:.0f} C dans l'apres-midi.")
    elif tmax is not None:
        lines.append(f"La temperature maximale a atteint {tmax:.0f} C dans l'apres-midi.")
    else:
        lines.append("")

    precip_label = classify_precip(precip_mm)
    if precip_label and precip_mm and precip_mm > 0.5:
        lines.append(f"Les precipitations, {precip_label}, ont cumule environ {precip_mm:.1f} mm.")
    elif precip_mm and precip_mm > 0:
        lines.append("Quelques gouttes a peine ont mouille les trottoirs.")
    else:
        lines.append("Aucune precipitation n'est venue troubler la journee.")

    wind_label = classify_wind(wind_kmh)
    if wind_kmh is not None:
        lines.append(f"Le vent, {wind_label}, soufflait a environ {wind_kmh:.0f} km/h.")
    else:
        lines.append(f"Le vent, {wind_label}, accompagnait la journee sans exces.")

    return " ".join(lines)


# ─── SUN ─────────────────────────────────────────────────────────────────
def calc_sun(dt):
    s = sun(PARIS.observer, date=dt)
    sunrise = s["sunrise"].strftime("%H:%M")
    sunset = s["sunset"].strftime("%H:%M")
    return sunrise, sunset


MOON_PHASE_NAMES = [
    "Nouvelle Lune", "Premier Croissant", "Premier Quartier",
    "Gibbeuse croissante", "Pleine Lune", "Gibbeuse decroissante",
    "Dernier Quartier", "Dernier Croissant"
]

MOON_META = {
    "Nouvelle Lune": {"visible": "0%", "aspect": "Nuit noire et profonde", "desc": "La lune, invisible, laisse place a un ciel d'encre etoile.", "icon": "🌑"},
    "Premier Croissant": {"visible": "15%", "aspect": "Jeune croissant crepusculaire", "desc": "Un mince filet de lune est apparu au coucher du soleil.", "icon": "🌙"},
    "Premier Quartier": {"visible": "50%", "aspect": "Demi-lune brillante", "desc": "Une demi-lune claire a eclaire la premiere partie de la nuit.", "icon": "🌓"},
    "Gibbeuse croissante": {"visible": "75%", "aspect": "Lune presque pleine", "desc": "La lune s'approchait de sa pleine luminosite.", "icon": "🌔"},
    "Pleine Lune": {"visible": "100%", "aspect": "Disque lunaire entier", "desc": "La pleine lune baignait Paris de sa lumiere blanche et froide.", "icon": "🌕"},
    "Gibbeuse decroissante": {"visible": "75%", "aspect": "Lune decroissante", "desc": "La lune entamait sa decroissance apres son plein eclat.", "icon": "🌖"},
    "Dernier Quartier": {"visible": "50%", "aspect": "Demi-lune declinante", "desc": "La moitie de la lune eclairée disparaissait progressivement.", "icon": "🌗"},
    "Dernier Croissant": {"visible": "22%", "aspect": "Fine corne argentee", "desc": "La fine faux lunaire se levait tard dans la nuit.", "icon": "🌘"},
}


def calc_moon(dt):
    age_days = moon_phase_num(dt) % 29.5
    phase_idx = int(age_days / 29.5 * 8) % 8
    phase_name = MOON_PHASE_NAMES[phase_idx]
    meta = MOON_META[phase_name]
    return {
        "phase": phase_name,
        "visible": meta["visible"],
        "aspect": meta["aspect"],
        "desc": meta["desc"],
        "icon": meta["icon"],
    }


# ─── MAIN ────────────────────────────────────────────────────────────────
def generate_for_date(date_str, year_weather=2009):
    dt = date.fromisoformat(date_str)
    result = {"date": date_str}

    # Soleil
    sunrise, sunset = calc_sun(dt)
    result["sunrise"] = sunrise
    result["sunset"] = sunset

    # Lune
    moon = calc_moon(dt)
    result["moon_phase"] = moon["phase"]
    result["moon_visible"] = moon["visible"]
    result["moon_aspect"] = moon["aspect"]
    result["moon_desc"] = moon["desc"]
    result["moon_icon"] = moon["icon"]

    # Météo (scraping)
    try:
        html = fetch_month_html(year_weather, dt.month)
        daily = parse_daily_table(html)
        w = daily.get(dt.day, {})
        if w:
            result["weather_condition"] = w.get("condition", "")
            result["weather_tmin"] = w["tmin"]
            result["weather_tmax"] = w["tmax"]
            result["weather_precip_mm"] = w["precip_mm"]
            result["weather_wind_kmh"] = w["wind_kmh"]
            result["weather_icon"] = get_weather_icon(w.get("condition", ""))
            result["weather_desc"] = generate_weather_text(
                dt.month, dt.day, dt.year,
                w.get("condition", ""),
                w["tmin"], w["tmax"],
                w["precip_mm"], w["wind_kmh"]
            )
    except Exception as e:
        print(f"  ⚠️ Erreur météo pour {date_str}: {e}", file=sys.stderr)
        result["weather_condition"] = "inconnu"
        result["weather_tmin"] = None
        result["weather_tmax"] = None
        result["weather_precip_mm"] = 0
        result["weather_wind_kmh"] = None
        result["weather_icon"] = "🌤️"
        result["weather_desc"] = "Donnees meteorologiques non disponibles."

    return result


if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser(description="Génère météo + soleil + lune pour une date")
    parser.add_argument("date", help="Date (AAAA-MM-JJ)")
    parser.add_argument("--year-weather", type=int, default=2009, help="Année de référence pour le scraping météo")
    args = parser.parse_args()

    data = generate_for_date(args.date, args.year_weather)
    print(json.dumps(data, ensure_ascii=False, indent=2))
