#!/usr/bin/env python3
"""
Génère les données quotidiennes (météo, soleil, lune) pour une date donnée.
Utilise l'API Open-Meteo Archive pour la météo (gratuit, sans anti-bot).
Mapping d'années automatique : game_year + 110  (1899→2009, 1900→2010, …)
"""

import json
import sys
from datetime import date

import requests

from astral import LocationInfo
from astral.sun import sun
from astral.moon import phase as moon_phase_num

# ─── PARIS ───────────────────────────────────────────────────────────────
PARIS = LocationInfo("Paris", "France", "Europe/Paris", 48.8566, 2.3522)

MONTHS_FR = [
    None, "janvier", "février", "mars", "avril", "mai", "juin",
    "juillet", "août", "septembre", "octobre", "novembre", "décembre"
]

SEASONS = {
    1: "hiver", 2: "hiver", 3: "printemps", 4: "printemps",
    5: "printemps", 6: "ete", 7: "ete", 8: "ete",
    9: "automne", 10: "automne", 11: "automne", 12: "hiver"
}

# ─── WMO codes → condition normalisée ────────────────────────────────────
WMO_TO_CONDITION = {
    0:  "ensoleille",
    1:  "degagement",
    2:  "peu nuageux",
    3:  "couvert",
    45: "brouillard", 48: "brouillard",
    51: "bruine",    53: "bruine",    55: "bruine",
    61: "pluie",     63: "pluie",     65: "fortes pluies",
    71: "neige",     73: "neige",     75: "neige",    77: "neige",
    80: "averses",   81: "averses",   82: "averses",
    85: "neige",     86: "neige",
    95: "orage",     96: "orage",     99: "orage",
}

WEATHER_ICONS = {
    "ensoleille":   "☀️",  "degagement":   "⛅",  "peu nuageux":  "⛅",
    "couvert":      "☁️",  "brouillard":   "🌫️",  "bruine":       "🌦️",
    "averses":      "🌦️",  "pluie":        "🌧️",  "fortes pluies": "🌧️",
    "orage":        "⛈️",  "neige":        "❄️",
}

# ─── Descriptions Belle Époque par condition et par période ──────────────
# Chaque description suit le préfixe de la période :
#   matin      → "Au point du jour, {desc}"
#   apres_midi → "Dans l'après-midi, {desc}"
#   soiree     → "Le soir venu, {desc}"
PERIOD_DESCS = {
    "ensoleille": {
        "matin":      "le soleil se levait dans un ciel d'azur limpide",
        "apres_midi": "le soleil brillait généreusement sur la capitale",
        "soiree":     "les dernières lueurs du soleil doraient les toits",
    },
    "degagement": {
        "matin":      "quelques nuages s'effaçaient encore au-dessus des toits",
        "apres_midi": "les nuages cédaient la place à de belles éclaircies",
        "soiree":     "le ciel finissait par s'ouvrir vers l'horizon",
    },
    "peu nuageux": {
        "matin":      "quelques nuages passagers voilaient encore l'horizon",
        "apres_midi": "quelques nuages passagers n'altéraient guère la clarté",
        "soiree":     "quelques nuages légers accompagnaient le crépuscule",
    },
    "couvert": {
        "matin":      "la ville s'éveillait sous un ciel gris et uniforme",
        "apres_midi": "le ciel demeurait bas et couvert sur toute la ville",
        "soiree":     "les nuages gris s'attardaient au-dessus de la ville",
    },
    "brouillard": {
        "matin":      "Paris s'éveillait noyé dans un épais brouillard",
        "apres_midi": "le brouillard persistait, estompant les façades",
        "soiree":     "le brouillard s'épaississait avec la nuit tombante",
    },
    "bruine": {
        "matin":      "une fine bruine mouillait déjà les pavés",
        "apres_midi": "la bruine persistait, ternissant les reflets des vitrines",
        "soiree":     "la bruine continuait de mouiller silencieusement les rues",
    },
    "pluie": {
        "matin":      "la pluie tombait déjà sur la ville",
        "apres_midi": "la pluie s'abattait sans relâche sur les boulevards",
        "soiree":     "la pluie persistait sous les réverbères allumés",
    },
    "fortes pluies": {
        "matin":      "de fortes pluies s'abattaient sur la capitale",
        "apres_midi": "de fortes pluies se déversaient sans répit sur la cité",
        "soiree":     "les fortes pluies n'épargnaient pas la capitale",
    },
    "averses": {
        "matin":      "des averses balayaient déjà les rues",
        "apres_midi": "des averses venaient troubler les promeneurs par moments",
        "soiree":     "quelques averses encore balayaient les boulevards",
    },
    "neige": {
        "matin":      "les toits se blanchissaient déjà sous les flocons",
        "apres_midi": "les flocons continuaient de blanchir les toits en silence",
        "soiree":     "les flocons tombaient encore sous les réverbères",
    },
    "orage": {
        "matin":      "le tonnerre grondait déjà sur la ville",
        "apres_midi": "l'orage éclatait sur Paris avec toute sa violence",
        "soiree":     "le tonnerre s'éloignait peu à peu dans la nuit",
    },
}

DEFAULT_PERIOD_DESCS = {
    "matin":      "la matinée s'ouvrait sous un ciel indécis",
    "apres_midi": "l'après-midi se déroulait sous un temps variable",
    "soiree":     "les nuages incertains accompagnaient la fin du jour",
}

WIND_THRESHOLDS = [
    (80, "violent"), (60, "très fort"), (40, "fort"),
    (25, "modéré"), (10, "léger"), (0, "à peine sensible"),
]

PRECIP_THRESHOLDS = [
    (20, "très abondantes"), (10, "abondantes"),
    (5, "modérées"), (1, "fine"), (0, None)
]


# ─── Open-Meteo Archive API ───────────────────────────────────────────────
def fetch_open_meteo(year, month, day):
    """Données météo journalières + horaires via Open-Meteo Archive (ERA5)."""
    d_str = f"{year}-{month:02d}-{day:02d}"
    resp = requests.get(
        "https://archive-api.open-meteo.com/v1/archive",
        params={
            "latitude": 48.8566,
            "longitude": 2.3522,
            "start_date": d_str,
            "end_date": d_str,
            "daily": "temperature_2m_max,temperature_2m_min,precipitation_sum,"
                     "wind_speed_10m_max,weather_code",
            "hourly": "temperature_2m,precipitation,wind_speed_10m,"
                      "weather_code,cloud_cover",
            "timezone": "Europe/Paris",
        },
        timeout=30,
    )
    resp.raise_for_status()
    return resp.json()


def wmo_to_condition(code):
    return WMO_TO_CONDITION.get(code, "couvert")


def dominant_condition(codes):
    """Condition la plus sévère parmi une liste de codes WMO."""
    priority = [
        "orage", "fortes pluies", "neige", "averses", "pluie",
        "brouillard", "bruine", "couvert", "peu nuageux", "degagement", "ensoleille",
    ]
    conditions = [wmo_to_condition(c) for c in codes if c is not None]
    if not conditions:
        return "couvert"
    for p in priority:
        if p in conditions:
            return p
    return conditions[0]


def get_period_stats(hourly, start_h, end_h):
    """Statistiques (temp, condition, précip, vent) pour une tranche horaire."""
    n = len(hourly.get("temperature_2m", []))
    start_h = min(start_h, n)
    end_h = min(end_h, n)
    temps = [hourly["temperature_2m"][i] for i in range(start_h, end_h)
             if hourly["temperature_2m"][i] is not None]
    codes = [hourly["weather_code"][i] for i in range(start_h, end_h)]
    precip = sum(hourly["precipitation"][i] or 0 for i in range(start_h, end_h))
    winds = [hourly["wind_speed_10m"][i] for i in range(start_h, end_h)
             if hourly["wind_speed_10m"][i] is not None]
    return {
        "temp_avg":  sum(temps) / len(temps) if temps else None,
        "condition": dominant_condition(codes),
        "precip":    precip,
        "wind_avg":  sum(winds) / len(winds) if winds else None,
    }


def period_desc(period_key, condition):
    descs = PERIOD_DESCS.get(condition, DEFAULT_PERIOD_DESCS)
    return descs.get(period_key, DEFAULT_PERIOD_DESCS[period_key])


def temp_context(t):
    """Qualificatif Belle Époque pour une température."""
    if t is None:
        return None
    if t < -5: return "un froid glacial"
    if t < 0:  return "un froid vif"
    if t < 5:  return "un froid piquant"
    if t < 10: return "de la fraîcheur"
    if t < 15: return "une température tempérée"
    if t < 20: return "une douce tiédeur"
    if t < 25: return "la chaleur"
    if t < 30: return "une forte chaleur"
    return "une chaleur accablante"


def wind_context(w):
    """Qualificatif Belle Époque pour le vent (None si insignifiant)."""
    if w is None or w < 12: return None
    if w < 25: return "une brise légère"
    if w < 40: return "un vent modéré"
    if w < 60: return "un vent fort"
    if w < 80: return "un vent très fort"
    return "des rafales violentes"


def classify_wind(speed):
    if speed is None:
        return "modéré"
    for threshold, label in WIND_THRESHOLDS:  # du plus grand au plus petit
        if speed >= threshold:
            return label
    return "calme"


def classify_precip(mm):
    if mm is None or mm == 0:
        return None
    for threshold, label in PRECIP_THRESHOLDS:  # du plus grand au plus petit
        if mm >= threshold:
            return label
    return None


def generate_weather_text_belle_epoque(month, day, year, om_data):
    """Bulletin météo narratif Belle Époque avec évolution au cours de la journée."""
    daily = om_data.get("daily", {})
    hourly = om_data.get("hourly", {})

    tmax = (daily.get("temperature_2m_max") or [None])[0]
    tmin = (daily.get("temperature_2m_min") or [None])[0]
    precip_total = (daily.get("precipitation_sum") or [0])[0] or 0
    wind_max = (daily.get("wind_speed_10m_max") or [None])[0]

    periods = {
        "matin":      get_period_stats(hourly, 6, 12),
        "apres_midi": get_period_stats(hourly, 12, 18),
        "soiree":     get_period_stats(hourly, 18, 24),
    }

    lines = []

    # Matin
    matin = periods["matin"]
    desc_m = period_desc("matin", matin["condition"])
    line_m = f"Au point du jour, {desc_m}"
    t_m = temp_context(matin["temp_avg"])
    if t_m and matin["temp_avg"] is not None:
        line_m += f", par {t_m} ({matin['temp_avg']:.0f} °C)"
    w_m = wind_context(matin["wind_avg"])
    if w_m:
        line_m += f", avec {w_m}"
    lines.append(line_m + ".")

    # Après-midi
    am = periods["apres_midi"]
    desc_am = period_desc("apres_midi", am["condition"])
    line_am = f"Dans l'après-midi, {desc_am}"
    if tmax is not None:
        line_am += f" — {tmax:.0f} °C au plus haut du thermomètre"
    if am["precip"] >= 0.5:
        line_am += f" ({am['precip']:.1f} mm)"
    lines.append(line_am + ".")

    # Soirée
    soir = periods["soiree"]
    desc_s = period_desc("soiree", soir["condition"])
    line_s = f"Le soir venu, {desc_s}"
    w_s = wind_context(soir["wind_avg"])
    if w_s:
        line_s += f", avec {w_s}"
    if soir["precip"] >= 0.5:
        line_s += f" ({soir['precip']:.1f} mm)"
    lines.append(line_s + ".")

    # Résumé
    lines.append("")
    summary = []
    if tmin is not None and tmax is not None:
        summary.append(f"Les températures ont oscillé entre {tmin:.0f} °C et {tmax:.0f} °C")
    if precip_total >= 0.5:
        p_label = classify_precip(precip_total)
        if p_label:
            summary.append(
                f"les précipitations ({p_label}) ont cumulé {precip_total:.1f} mm"
            )
        else:
            summary.append("quelques gouttes ont mouillé les trottoirs")
    else:
        summary.append("aucune précipitation n'est venue troubler la journée")
    if wind_max is not None and wind_max >= 20:
        w_label = classify_wind(wind_max)
        summary.append(f"le vent ({w_label}) a soufflé jusqu'à {wind_max:.0f} km/h")

    lines.append(". ".join(s[0].upper() + s[1:] for s in summary) + ".")

    return "\n".join(lines)


def get_weather_icon(condition):
    return WEATHER_ICONS.get(condition, "🌤️")


# ─── SUN ─────────────────────────────────────────────────────────────────
def calc_sun(dt):
    s = sun(PARIS.observer, date=dt)
    return s["sunrise"].strftime("%H:%M"), s["sunset"].strftime("%H:%M")


MOON_PHASE_NAMES = [
    "Nouvelle Lune", "Premier Croissant", "Premier Quartier",
    "Gibbeuse croissante", "Pleine Lune", "Gibbeuse decroissante",
    "Dernier Quartier", "Dernier Croissant"
]

MOON_META = {
    "Nouvelle Lune":        {"visible": "0%",   "aspect": "Nuit noire et profonde",   "desc": "La lune, invisible, laisse place a un ciel d'encre etoile.",             "icon": "🌑"},
    "Premier Croissant":    {"visible": "15%",  "aspect": "Jeune croissant crepusculaire", "desc": "Un mince filet de lune est apparu au coucher du soleil.",            "icon": "🌙"},
    "Premier Quartier":     {"visible": "50%",  "aspect": "Demi-lune brillante",       "desc": "Une demi-lune claire a eclaire la premiere partie de la nuit.",          "icon": "🌓"},
    "Gibbeuse croissante":  {"visible": "75%",  "aspect": "Lune presque pleine",       "desc": "La lune s'approchait de sa pleine luminosite.",                         "icon": "🌔"},
    "Pleine Lune":          {"visible": "100%", "aspect": "Disque lunaire entier",     "desc": "La pleine lune baignait Paris de sa lumiere blanche et froide.",         "icon": "🌕"},
    "Gibbeuse decroissante":{"visible": "75%",  "aspect": "Lune decroissante",         "desc": "La lune entamait sa decroissance apres son plein eclat.",                "icon": "🌖"},
    "Dernier Quartier":     {"visible": "50%",  "aspect": "Demi-lune declinante",      "desc": "La moitie de la lune eclairee disparaissait progressivement.",           "icon": "🌗"},
    "Dernier Croissant":    {"visible": "22%",  "aspect": "Fine corne argentee",       "desc": "La fine faux lunaire se levait tard dans la nuit.",                      "icon": "🌘"},
}


def calc_moon(dt):
    age_days = moon_phase_num(dt) % 29.5
    phase_idx = int(age_days / 29.5 * 8) % 8
    phase_name = MOON_PHASE_NAMES[phase_idx]
    meta = MOON_META[phase_name]
    return {
        "phase":   phase_name,
        "visible": meta["visible"],
        "aspect":  meta["aspect"],
        "desc":    meta["desc"],
        "icon":    meta["icon"],
    }


# ─── MAIN ────────────────────────────────────────────────────────────────
def generate_for_date(date_str, year_weather=None):
    """
    Point d'entrée principal.
    year_weather calculé automatiquement : game_year + 110 (1899→2009, …).
    Le paramètre year_weather est conservé pour la rétro-compatibilité mais
    ignoré au profit du calcul automatique.
    """
    dt = date.fromisoformat(date_str)
    year_ref = dt.year + 110  # mapping climatique

    result = {"date": date_str}

    sunrise, sunset = calc_sun(dt)
    result["sunrise"] = sunrise
    result["sunset"] = sunset

    moon = calc_moon(dt)
    result["moon_phase"]   = moon["phase"]
    result["moon_visible"] = moon["visible"]
    result["moon_aspect"]  = moon["aspect"]
    result["moon_desc"]    = moon["desc"]
    result["moon_icon"]    = moon["icon"]

    try:
        om_data = fetch_open_meteo(year_ref, dt.month, dt.day)
        daily = om_data.get("daily", {})
        wmo_code = (daily.get("weather_code") or [None])[0]
        condition = wmo_to_condition(wmo_code) if wmo_code is not None else "couvert"

        result["weather_condition"]  = condition
        result["weather_tmin"]       = (daily.get("temperature_2m_min") or [None])[0]
        result["weather_tmax"]       = (daily.get("temperature_2m_max") or [None])[0]
        result["weather_precip_mm"]  = (daily.get("precipitation_sum") or [0])[0] or 0
        result["weather_wind_kmh"]   = (daily.get("wind_speed_10m_max") or [None])[0]
        result["weather_icon"]       = get_weather_icon(condition)
        result["weather_desc"]       = generate_weather_text_belle_epoque(
            dt.month, dt.day, dt.year, om_data
        )
        result["weather_year_ref"]   = year_ref

    except Exception as e:
        print(f"  ⚠️ Erreur météo pour {date_str}: {e}", file=sys.stderr)
        result["weather_condition"]  = "inconnu"
        result["weather_tmin"]       = None
        result["weather_tmax"]       = None
        result["weather_precip_mm"]  = 0
        result["weather_wind_kmh"]   = None
        result["weather_icon"]       = "🌤️"
        result["weather_desc"]       = "Données météorologiques non disponibles."
        result["weather_year_ref"]   = year_ref

    return result


if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser(
        description="Génère météo + soleil + lune pour une date (game_year + 110 pour le climat)"
    )
    parser.add_argument("date", help="Date (AAAA-MM-JJ, ex: 1899-12-08)")
    args = parser.parse_args()

    data = generate_for_date(args.date)
    print(json.dumps(data, ensure_ascii=False, indent=2))
