import React, { useState, useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { MapContainer, TileLayer, Marker, Polyline, useMapEvents, useMap, Pane } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ArrowLeft, MapPin, X, Loader, Trash2, Map, Search, Edit, ChevronDown, ChevronUp, Filter, ExternalLink, Menu } from '../config/icons';
import ModalShell, { ModalHeader } from './ui/ModalShell';
import { useMapPoints } from '../hooks/useMapPoints';
import { showInAppNotification } from '../utils/SystemeServices';
import { isSuperAdmin } from '../utils/authRoles';
import { useUserContext } from '../context/UserContext';
import { getDocteCircles, getVisiblePoints, filterPointsByListFilter } from '../utils/mapVisibility';
import { supabase } from '../config/supabase';

// ─── Tuiles ──────────────────────────────────────────────────────────────────

// CartoDB Positron (fiable, charge partout) — fond moderne
const TILE_BASE   = 'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png';
const TILE_LABELS = 'https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png';
const ATTRIBUTION = '© <a href="https://carto.com/attributions">CARTO</a> © <a href="https://openstreetmap.org/copyright">OSM</a>';

// IGN Géoportail — Carte de l'État-Major (~1820-1866), données ouvertes sans clé
const TILE_IGN = 'https://data.geopf.fr/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=GEOGRAPHICALGRIDSYSTEMS.ETATMAJOR40&STYLE=normal&FORMAT=image/jpeg&TILEMATRIXSET=PM&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}';
const TILE_IGN_ATTRIBUTION = '© <a href="https://www.ign.fr/">IGN</a> Géoportail — Carte de l\'État-Major';


// ─── Types de POI ────────────────────────────────────────────────────────────

const POI_TYPES = {
  lieu:               { label: 'Lieu',              couleur: '#92400e', linkedType: null,        emoji: '🏛️' },
  evenement:          { label: 'Événement',          couleur: '#dc2626', linkedType: null,        emoji: '🎭' },
  adresse_personnage: { label: 'Adresse personnage', couleur: '#1d4ed8', linkedType: 'character', emoji: '👤' },
  cercle:             { label: 'Cercle',             couleur: '#7c3aed', linkedType: 'cercle',    emoji: '🔮' },
  point_interet:      { label: "Point d'intérêt",   couleur: '#15803d', linkedType: null,        emoji: '⭐' },
};

const POI_FORMES = {
  goutte:   { label: 'Goutte',   symbol: '▾' },
  cercle:   { label: 'Cercle',   symbol: '●' },
  etoile:   { label: 'Étoile',   symbol: '★' },
  diamant:  { label: 'Diamant',  symbol: '◆' },
  bouclier: { label: 'Bouclier', symbol: '⬟' },
};

const VISIBILITE = {
  public: { label: 'Public',  emoji: '🌍' },
  cercle: { label: 'Cercle',  emoji: '🔵' },
  prive:  { label: 'Privé',   emoji: '🔒' },
  admin:  { label: 'Admin',   emoji: '⚙️'  },
};

const TRANSPORT_MODES = [
  { id: 'pied',   emoji: '🚶', label: 'À pied',  vitesse_kmh: null }, // durée OSRM native
  { id: 'cheval', emoji: '🐎', label: 'Cheval',   vitesse_kmh: 17   },
  { id: 'fiacre', emoji: '🐴', label: 'Fiacre',   vitesse_kmh: 12   },
  { id: 'velo',   emoji: '🚲', label: 'Vélo',     vitesse_kmh: 14   },
  { id: 'moto',   emoji: '🏍️', label: 'Moto',     vitesse_kmh: 20   },
];

const EMPTY_FORM = { nom: '', description: '', type: 'lieu', couleur: '#92400e', forme: 'goutte', adresse: '', url: '', linked_entity_type: null, linked_entity_id: null, visibilite: 'public', visibilite_cercle_id: null };

// ─── Utilitaires ─────────────────────────────────────────────────────────────

function formatDistance(m) {
  return m < 1000 ? `${Math.round(m)} m` : `${(m / 1000).toFixed(1)} km`;
}

function formatTime(s) {
  if (s < 60) return "< 1 min";
  const min = Math.round(s / 60);
  if (min < 60) return `${min} min`;
  const h = Math.floor(min / 60), r = min % 60;
  return r > 0 ? `${h}h ${r}min` : `${h}h`;
}

function haversineM(a, b) {
  const R = 6371000;
  const φ1 = a.lat * Math.PI / 180, φ2 = b.lat * Math.PI / 180;
  const Δφ = (b.lat - a.lat) * Math.PI / 180;
  const Δλ = (b.lng - a.lng) * Math.PI / 180;
  const s = Math.sin(Δφ / 2) ** 2 + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(s), Math.sqrt(1 - s));
}

function modeTime(routeData, modeId, modePerso) {
  if (!routeData) return null;
  if (modeId === 'pied') return routeData.walkingS;
  if (modeId === 'perso') {
    if (!modePerso) return null;
    const dist = modePerso.en_vol ? routeData.flyingM : routeData.distanceM;
    return dist / (modePerso.vitesse_kmh * 1000 / 3600);
  }
  const m = TRANSPORT_MODES.find(t => t.id === modeId);
  return m ? routeData.distanceM / (m.vitesse_kmh * 1000 / 3600) : null;
}

async function fetchRoute(a, b) {
  const url = `https://router.project-osrm.org/route/v1/foot/${a.lng},${a.lat};${b.lng},${b.lat}?overview=full&geometries=geojson`;
  const res = await fetch(url);
  if (!res.ok) throw new Error();
  const data = await res.json();
  if (data.code !== 'Ok') throw new Error();
  const route = data.routes[0];
  return {
    distanceM: route.distance,
    flyingM:   haversineM(a, b),
    walkingS:  route.distance / (5 * 1000 / 3600), // 5 km/h, indépendant du profil OSRM
    polyline:  route.geometry.coordinates.map(([lng, lat]) => [lat, lng]),
  };
}

// ─── Icônes Leaflet ──────────────────────────────────────────────────────────

function makePoiIcon(couleur, forme = 'goutte', emoji = '', size = 28) {
  const bdr = '2.5px solid rgba(255,255,255,0.92)';
  const sh  = '0 2px 6px rgba(0,0,0,0.45)';
  const fs  = Math.round(size * 0.44);
  let html, iconSize, iconAnchor, popupAnchor;

  if (forme === 'cercle') {
    html = `<div style="width:${size}px;height:${size}px;background:${couleur};border:${bdr};border-radius:50%;box-shadow:${sh};display:flex;align-items:center;justify-content:center"><span style="font-size:${fs}px;line-height:1">${emoji}</span></div>`;
    iconSize = [size, size]; iconAnchor = [size/2, size/2]; popupAnchor = [0, -(size/2+4)];
  } else if (forme === 'etoile') {
    html = `<div style="width:${size}px;height:${size}px;background:${couleur};clip-path:polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%);display:flex;align-items:center;justify-content:center;padding-top:${Math.round(size*.08)}px"><span style="font-size:${Math.round(fs*.85)}px;line-height:1">${emoji}</span></div>`;
    iconSize = [size, size]; iconAnchor = [size/2, size*.7]; popupAnchor = [0, -(size*.7+4)];
  } else if (forme === 'diamant') {
    html = `<div style="width:${size}px;height:${size}px;background:${couleur};border:${bdr};transform:rotate(45deg);box-shadow:${sh};display:flex;align-items:center;justify-content:center"><span style="transform:rotate(-45deg);font-size:${Math.round(fs*.85)}px;line-height:1">${emoji}</span></div>`;
    iconSize = [size, size]; iconAnchor = [size/2, size]; popupAnchor = [0, -(size+4)];
  } else if (forme === 'bouclier') {
    html = `<div style="width:${size}px;height:${size}px;background:${couleur};clip-path:polygon(50% 0%,100% 38%,82% 100%,18% 100%,0% 38%);display:flex;align-items:center;justify-content:center;padding-top:${Math.round(size*.1)}px"><span style="font-size:${Math.round(fs*.85)}px;line-height:1">${emoji}</span></div>`;
    iconSize = [size, size]; iconAnchor = [size/2, size]; popupAnchor = [0, -(size+4)];
  } else { // goutte (default)
    html = `<div style="width:${size}px;height:${size}px;background:${couleur};border:${bdr};border-radius:50% 50% 50% 0;transform:rotate(-45deg);box-shadow:${sh};display:flex;align-items:center;justify-content:center"><span style="transform:rotate(45deg);font-size:${fs}px;line-height:1;display:block">${emoji}</span></div>`;
    iconSize = [size, size]; iconAnchor = [size/2, size]; popupAnchor = [0, -(size+4)];
  }

  return L.divIcon({ className: '', html, iconSize, iconAnchor, popupAnchor });
}

const ICON_START = L.divIcon({ className: '', html: `<div style="width:14px;height:14px;background:#15803d;border:2.5px solid white;border-radius:50%;box-shadow:0 2px 5px rgba(0,0,0,0.4)"></div>`, iconSize: [14,14], iconAnchor: [7,7] });
const ICON_END   = L.divIcon({ className: '', html: `<div style="width:14px;height:14px;background:#dc2626;border:2.5px solid white;border-radius:50%;box-shadow:0 2px 5px rgba(0,0,0,0.4)"></div>`, iconSize: [14,14], iconAnchor: [7,7] });

// ─── Sous-composants Leaflet ─────────────────────────────────────────────────

function MapClickHandler({ tool, onMapClick }) {
  useMapEvents({ click: (e) => onMapClick(e.latlng) });
  return null;
}

function FlyToLocation({ position }) {
  const map = useMap();
  const prev = useRef(null);
  useEffect(() => {
    if (position && position !== prev.current) {
      prev.current = position;
      map.flyTo(position, 16, { animate: true, duration: 1 });
    }
  }, [position, map]);
  return null;
}

function PanesController({ mode, sliderPos }) {
  const map = useMap();
  const updateClip = useCallback(() => {
    const hp = map.getPane('historical');
    const mp = map.getPane('modern');
    if (!hp || !mp) return;
    if (mode === 'historique') {
      hp.style.display = ''; hp.style.clip = 'auto';
      mp.style.display = 'none';
    } else if (mode === 'moderne') {
      hp.style.display = 'none';
      mp.style.display = ''; mp.style.clip = 'auto';
    } else {
      const sz = map.getSize();
      const x = Math.round(sz.x * sliderPos / 100);
      hp.style.display = ''; mp.style.display = '';
      hp.style.clip = `rect(0px, ${x}px, ${sz.y}px, 0px)`;
      mp.style.clip = `rect(0px, ${sz.x}px, ${sz.y}px, ${x}px)`;
    }
  }, [map, mode, sliderPos]);
  useEffect(() => { updateClip(); }, [updateClip]);
  useEffect(() => {
    map.on('resize', updateClip);
    return () => map.off('resize', updateClip);
  }, [map, updateClip]);
  return null;
}

// ─── Formulaire POI (ajout + édition) ────────────────────────────────────────

function PoiForm({ form, onChange, onSave, onCancel, saving, linkedEntities, isSA, submitLabel = 'Épingler', onPositionChange, showAddress = true }) {
  const linkedType = POI_TYPES[form.type]?.linkedType;
  const entityList = linkedType === 'character' ? linkedEntities.characters : linkedType === 'cercle' ? linkedEntities.cercles : [];
  const visibiliteOptions = isSA
    ? Object.entries(VISIBILITE)
    : Object.entries(VISIBILITE).filter(([k]) => k !== 'admin');

  const [adresseResults, setAdresseResults] = useState([]);
  const [adresseSearching, setAdresseSearching] = useState(false);

  const searchAdresse = useCallback(async () => {
    if (!form.adresse?.trim()) return;
    setAdresseSearching(true);
    try {
      const q = encodeURIComponent(form.adresse);
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${q}&format=json&limit=5&addressdetails=1&viewbox=2.224,48.902,2.470,48.815&accept-language=fr`,
        { headers: { 'User-Agent': 'LesHeritiers/1.0' } }
      );
      setAdresseResults(await res.json());
    } catch { /* silent */ }
    finally { setAdresseSearching(false); }
  }, [form.adresse]);

  return (
    <div className="space-y-2">
      {/* Adresse avec géocodage — visible uniquement en mode édition */}
      {showAddress && <div>
        <div className="flex gap-1.5">
          <input
            type="text" placeholder="Adresse (ex: 38 rue Madame)"
            value={form.adresse || ''}
            onChange={e => onChange({ ...form, adresse: e.target.value })}
            onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); searchAdresse(); } }}
            className="flex-1 px-2 py-1.5 border border-amber-200 rounded-lg text-xs bg-white focus:outline-none focus:ring-1 focus:ring-amber-400"
          />
          <button onClick={searchAdresse} disabled={adresseSearching} type="button" aria-label="Rechercher l'adresse"
            className="px-2 py-1.5 bg-amber-100 text-amber-900 rounded-lg hover:bg-amber-200 transition-colors disabled:opacity-50 shrink-0"
          >
            {adresseSearching ? <Loader size={11} className="animate-spin" /> : <Search size={11} />}
          </button>
        </div>
        {adresseResults.length > 0 && (
          <div className="mt-1 max-h-28 overflow-y-auto custom-scrollbar border border-amber-100 rounded-lg bg-white">
            {adresseResults.map((r, i) => {
              const a = r.address || {};
              const adresse = [a.house_number, a.road].filter(Boolean).join(' ') || r.display_name.split(',')[0].trim();
              const label = r.display_name.split(',').slice(0, 2).join(',');
              return (
                <button key={i} type="button"
                  onClick={() => {
                    const lat = parseFloat(r.lat);
                    const lng = parseFloat(r.lon);
                    onChange({ ...form, adresse });
                    onPositionChange?.(lat, lng);
                    setAdresseResults([]);
                  }}
                  className="w-full text-left px-2 py-1 text-xs text-stone-700 hover:bg-amber-50 transition-colors whitespace-normal break-words leading-snug"
                >
                  📍 {label}
                </button>
              );
            })}
          </div>
        )}
      </div>}
      {/* Nom */}
      <input
        type="text" placeholder="Nom du lieu *" value={form.nom}
        onChange={e => onChange({ ...form, nom: e.target.value })}
        className="w-full px-2 py-1.5 border border-amber-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-1 focus:ring-amber-400"
      />
      <textarea
        placeholder="Description (optionnelle)" value={form.description} rows={2}
        onChange={e => onChange({ ...form, description: e.target.value })}
        className="w-full px-2 py-1.5 border border-amber-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-1 focus:ring-amber-400 resize-none"
      />
      <input
        type="url" placeholder="URL (optionnelle)" value={form.url || ''}
        onChange={e => onChange({ ...form, url: e.target.value })}
        className="w-full px-2 py-1.5 border border-amber-200 rounded-lg text-xs bg-white focus:outline-none focus:ring-1 focus:ring-amber-400"
      />
      <select
        value={form.type}
        onChange={e => {
          const type = e.target.value;
          onChange({ ...form, type, couleur: POI_TYPES[type].couleur, linked_entity_type: POI_TYPES[type].linkedType, linked_entity_id: null });
        }}
        className="w-full px-2 py-1.5 border border-amber-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-1 focus:ring-amber-400"
      >
        {Object.entries(POI_TYPES).map(([k, v]) => <option key={k} value={k}>{v.emoji} {v.label}</option>)}
      </select>
      {/* Forme + Couleur */}
      <div className="flex gap-2 items-center">
        <div className="flex gap-1 flex-1">
          {Object.entries(POI_FORMES).map(([k, v]) => (
            <button key={k} type="button" onClick={() => onChange({ ...form, forme: k })} title={v.label}
              className={`flex-1 py-1 rounded text-base leading-none transition-colors ${form.forme === k ? 'bg-amber-900 text-white shadow-inner' : 'bg-stone-100 text-stone-500 hover:bg-amber-50 hover:text-amber-900'}`}
            >{v.symbol}</button>
          ))}
        </div>
        <input type="color" value={form.couleur}
          onChange={e => onChange({ ...form, couleur: e.target.value })}
          className="w-9 h-8 rounded cursor-pointer border border-amber-200 p-0.5 bg-white shrink-0"
          title="Couleur de l'épingle"
        />
      </div>
      {linkedType && entityList.length > 0 && (
        <select
          value={form.linked_entity_id || ''}
          onChange={e => onChange({ ...form, linked_entity_id: e.target.value || null })}
          className="w-full px-2 py-1.5 border border-amber-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-1 focus:ring-amber-400"
        >
          <option value="">— Lier à {linkedType === 'character' ? 'un personnage' : 'un cercle'} —</option>
          {entityList.map(e => <option key={e.id} value={e.id}>{e.nom}</option>)}
        </select>
      )}
      {/* Visibilité */}
      <select
        value={form.visibilite}
        onChange={e => onChange({ ...form, visibilite: e.target.value, visibilite_cercle_id: e.target.value !== 'cercle' ? null : form.visibilite_cercle_id })}
        className="w-full px-2 py-1.5 border border-amber-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-1 focus:ring-amber-400"
      >
        {visibiliteOptions.map(([k, v]) => <option key={k} value={k}>{v.emoji} {v.label}</option>)}
      </select>
      {form.visibilite === 'cercle' && (
        <select
          value={form.visibilite_cercle_id || ''}
          onChange={e => onChange({ ...form, visibilite_cercle_id: e.target.value || null })}
          className="w-full px-2 py-1.5 border border-amber-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-1 focus:ring-amber-400"
        >
          <option value="">— Choisir un cercle —</option>
          {linkedEntities.cercles.map(c => <option key={c.id} value={c.id}>{c.nom}</option>)}
        </select>
      )}
      <div className="flex gap-2 pt-1">
        <button
          onClick={onSave}
          disabled={!form.nom.trim() || saving || (form.visibilite === 'cercle' && !form.visibilite_cercle_id)}
          className="flex-1 px-3 py-1.5 bg-amber-900 text-amber-50 rounded-lg text-sm font-bold disabled:opacity-50 hover:bg-amber-800 transition-colors"
        >
          {saving ? '…' : submitLabel}
        </button>
        <button onClick={onCancel} aria-label="Annuler" className="px-2.5 py-1.5 bg-stone-100 text-stone-500 rounded-lg text-sm hover:bg-stone-200 transition-colors">
          <X size={13} />
        </button>
      </div>
    </div>
  );
}

// ─── Formulaire mode personnalisé ────────────────────────────────────────────

function ModePersoForm({ form, onChange, onSave, onCancel }) {
  return (
    <div className="space-y-1.5">
      <div className="flex gap-1.5">
        <input type="text" placeholder="🚀" value={form.emoji}
          onChange={e => onChange({ ...form, emoji: e.target.value })}
          className="w-10 px-1 py-1 border border-amber-200 rounded text-center text-base bg-white focus:outline-none focus:ring-1 focus:ring-amber-400"
        />
        <input type="text" placeholder="Nom du mode *" value={form.nom}
          onChange={e => onChange({ ...form, nom: e.target.value })}
          className="flex-1 px-2 py-1 border border-amber-200 rounded text-xs bg-white focus:outline-none focus:ring-1 focus:ring-amber-400"
        />
      </div>
      <div className="flex items-center gap-2">
        <input type="number" min={1} max={999} step={1} value={form.vitesse_kmh}
          onChange={e => onChange({ ...form, vitesse_kmh: e.target.value })}
          className="w-16 px-2 py-1 border border-amber-200 rounded text-xs bg-white focus:outline-none focus:ring-1 focus:ring-amber-400"
        />
        <span className="text-xs text-stone-500">km/h</span>
        <label className="flex items-center gap-1 ml-auto text-xs text-stone-600 cursor-pointer select-none">
          <input type="checkbox" checked={form.en_vol}
            onChange={e => onChange({ ...form, en_vol: e.target.checked })}
            className="accent-amber-700"
          />
          En vol
        </label>
      </div>
      <div className="flex gap-1.5">
        <button onClick={onSave} disabled={!form.nom?.trim() || !form.vitesse_kmh}
          className="flex-1 px-2 py-1 bg-amber-900 text-white rounded text-xs font-bold disabled:opacity-50 hover:bg-amber-800 transition-colors"
        >Enregistrer</button>
        <button onClick={onCancel} aria-label="Annuler" className="px-2 py-1 bg-stone-100 text-stone-500 rounded text-xs hover:bg-stone-200 transition-colors"><X size={11} /></button>
      </div>
    </div>
  );
}

// ─── Composant principal ─────────────────────────────────────────────────────

export default function CarteDeParisPage({ onBack }) {
  const { userProfile, session } = useUserContext();
  const { points, loading, addPoint, updatePoint, deletePoint } = useMapPoints();
  const isSA   = isSuperAdmin(userProfile);
  const userId = session?.user?.id;

  // ── Panneau latéral (repliable sur mobile) ────────────────────────────────
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // ── Outils ────────────────────────────────────────────────────────────────
  const [tool, setTool]       = useState('vue');
  const [routePts, setRoutePts]   = useState([]);
  const [routeData, setRouteData] = useState(null);
  const [routeLoading, setRouteLoading] = useState(false);

  // ── Itinéraire — modes de transport ───────────────────────────────────────
  const [activeMode,      setActiveMode]      = useState('pied');
  const [modePerso,       setModePerso]       = useState(null);
  const [editModePerso,   setEditModePerso]   = useState(false);
  const [modePersoForm,   setModePersoForm]   = useState({ nom: '', emoji: '⚙️', vitesse_kmh: 10, en_vol: false });

  // ── POI ───────────────────────────────────────────────────────────────────
  const [selectedPt, setSelectedPt] = useState(null);
  const [isEditing, setIsEditing]   = useState(false);
  const [editForm, setEditForm]     = useState(EMPTY_FORM);
  const [newPoiPos, setNewPoiPos]   = useState(null);
  const [newPoiForm, setNewPoiForm] = useState(EMPTY_FORM);
  const [confirmDelete, setConfirmDelete] = useState(false);

  useEffect(() => { setConfirmDelete(false); }, [selectedPt?.id]);
  const [saving, setSaving]         = useState(false);

  // ── Entités liées ─────────────────────────────────────────────────────────
  const [linkedEntities, setLinkedEntities] = useState({ characters: [], cercles: [] });

  useEffect(() => {
    Promise.all([
      supabase.from('characters').select('id, nom').order('nom'),
      supabase.from('cercles').select('id, nom, docte_id').order('nom'),
    ]).then(([chars, cercs]) => {
      setLinkedEntities({
        characters: chars.data || [],
        cercles:    cercs.data || [],
      });
    });
  }, []);

  // ── Vue du Docte (Cercle / Privée) ────────────────────────────────────────
  const docteCircles = getDocteCircles(linkedEntities.cercles, userId);
  const isDocte = docteCircles.length > 0;
  const [docteViewMode, setDocteViewMode] = useState('cercle'); // 'cercle' | 'prive'
  const [docteSelectedCercleId, setDocteSelectedCercleId] = useState(null);

  useEffect(() => {
    const owned = getDocteCircles(linkedEntities.cercles, userId);
    if (owned.length > 0 && !docteSelectedCercleId) {
      setDocteSelectedCercleId(owned[0].id);
    }
  }, [linkedEntities.cercles, userId, docteSelectedCercleId]);

  const visiblePoints = getVisiblePoints(points, { isDocte, docteViewMode, docteSelectedCercleId, userId });

  // ── Filtre liste POI ──────────────────────────────────────────────────────
  const [filterText, setFilterText] = useState('');
  const [filterType, setFilterType] = useState('');
  const [openGroups, setOpenGroups] = useState(() =>
    Object.fromEntries(Object.keys(POI_TYPES).map(k => [k, true]))
  );

  const filteredPoints = filterPointsByListFilter(visiblePoints, { filterText, filterType });

  const groupedPoints = Object.keys(POI_TYPES).reduce((acc, type) => {
    const pts = filteredPoints.filter(pt => pt.type === type);
    if (pts.length > 0) acc[type] = pts;
    return acc;
  }, {});

  const toggleGroup = (type) => setOpenGroups(prev => ({ ...prev, [type]: !prev[type] }));

  // ── Mode personnalisé (chargement + sauvegarde) ───────────────────────────
  useEffect(() => {
    if (!userId) return;
    supabase.from('itineraire_modes_perso').select('*').eq('user_id', userId).maybeSingle()
      .then(({ data }) => { if (data) { setModePerso(data); setModePersoForm(data); } });
  }, [userId]);

  const saveModePerso = useCallback(async () => {
    if (!modePersoForm.nom?.trim() || !modePersoForm.vitesse_kmh) return;
    try {
      const payload = {
        user_id:      userId,
        nom:          modePersoForm.nom.trim(),
        emoji:        modePersoForm.emoji || '⚙️',
        vitesse_kmh:  parseFloat(modePersoForm.vitesse_kmh),
        en_vol:       !!modePersoForm.en_vol,
      };
      await supabase.from('itineraire_modes_perso').upsert(payload, { onConflict: 'user_id' });
      setModePerso(payload);
      setEditModePerso(false);
      showInAppNotification('Mode personnalisé enregistré', 'success');
    } catch { showInAppNotification('Erreur de sauvegarde', 'error'); }
  }, [userId, modePersoForm]);

  // ── Recherche ─────────────────────────────────────────────────────────────
  const [searchQuery,   setSearchQuery]   = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [flyTo,         setFlyTo]         = useState(null);
  const [searching,     setSearching]     = useState(false);

  const handleSearch = useCallback(async () => {
    if (!searchQuery.trim()) return;
    setSearching(true);
    setSearchResults([]);
    try {
      const q = encodeURIComponent(searchQuery);
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${q}&format=json&limit=5&addressdetails=1&viewbox=2.224,48.902,2.470,48.815&accept-language=fr`,
        { headers: { 'User-Agent': 'LesHeritiers/1.0' } }
      );
      setSearchResults(await res.json());
    } catch {
      showInAppNotification('Erreur de recherche', 'error');
    } finally {
      setSearching(false);
    }
  }, [searchQuery]);

  // ── Fond de carte ─────────────────────────────────────────────────────────
  const [mapMode, setMapMode] = useState('historique'); // 'historique' | 'comparaison' | 'moderne'
  const [sliderPos, setSliderPos] = useState(50);       // % depuis la gauche (mode comparaison)
  const isDragging = useRef(false);
  const mapZoneRef = useRef(null);

  const handleSliderMouseDown = useCallback((e) => {
    e.preventDefault();
    isDragging.current = true;
  }, []);

  const handleSliderTouchStart = useCallback(() => {
    isDragging.current = true;
  }, []);

  useEffect(() => {
    const move = (clientX) => {
      if (!isDragging.current || !mapZoneRef.current) return;
      const rect = mapZoneRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      setSliderPos(Math.round(x / rect.width * 100));
    };
    const onMouseMove = (e) => move(e.clientX);
    const onTouchMove = (e) => move(e.touches[0].clientX);
    const onUp = () => { isDragging.current = false; };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onUp);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onUp);
    };
  }, []);

  // ── Changement d'outil ────────────────────────────────────────────────────
  const handleToolChange = useCallback((t) => {
    setTool(t);
    setRoutePts([]); setRouteData(null); setNewPoiPos(null);
    setSearchResults([]); setEditModePerso(false);
  }, []);

  // ── Clic sur la carte ─────────────────────────────────────────────────────
  const handleMapClick = useCallback(async (latlng) => {
    setSearchResults([]);
    if (tool === 'poi') { setNewPoiPos(latlng); return; }
    if (tool !== 'itineraire') return;
    setRoutePts(prev => {
      if (prev.length >= 2) { setRouteData(null); return [latlng]; }
      const next = [...prev, latlng];
      if (next.length === 2) {
        setRouteLoading(true);
        fetchRoute(next[0], next[1])
          .then(d  => { setRouteData(d); setRouteLoading(false); })
          .catch(() => { showInAppNotification('Itinéraire introuvable', 'error'); setRouteLoading(false); });
      }
      return next;
    });
  }, [tool]);

  // ── Sauvegarde nouveau POI ────────────────────────────────────────────────
  const handleAddPoi = useCallback(async () => {
    if (!newPoiForm.nom.trim() || !newPoiPos) return;
    setSaving(true);
    try {
      await addPoint({
        nom: newPoiForm.nom.trim(), description: newPoiForm.description.trim() || null,
        lat: newPoiPos.lat, lng: newPoiPos.lng,
        type: newPoiForm.type, couleur: newPoiForm.couleur, forme: newPoiForm.forme || 'goutte',
        adresse: newPoiForm.adresse?.trim() || null,
        url: newPoiForm.url?.trim() || null,
        linked_entity_type:   newPoiForm.linked_entity_type   || null,
        linked_entity_id:     newPoiForm.linked_entity_id     || null,
        visibilite:           newPoiForm.visibilite,
        visibilite_cercle_id: newPoiForm.visibilite_cercle_id || null,
        created_by: userId,
      });
      showInAppNotification('Lieu ajouté à la carte', 'success');
      setNewPoiPos(null); setNewPoiForm(EMPTY_FORM);
    } catch { showInAppNotification('Erreur lors de la sauvegarde', 'error'); }
    finally  { setSaving(false); }
  }, [addPoint, newPoiForm, newPoiPos, userId]);

  // ── Édition POI ───────────────────────────────────────────────────────────
  const startEdit = useCallback((pt) => {
    setEditForm({ nom: pt.nom, description: pt.description || '', type: pt.type, couleur: pt.couleur, forme: pt.forme || 'goutte', adresse: pt.adresse || '', url: pt.url || '', lat: pt.lat, lng: pt.lng, linked_entity_type: pt.linked_entity_type, linked_entity_id: pt.linked_entity_id, visibilite: pt.visibilite || 'public', visibilite_cercle_id: pt.visibilite_cercle_id || null });
    setIsEditing(true);
  }, []);

  const handleEditSave = useCallback(async () => {
    if (!editForm.nom.trim() || !selectedPt) return;
    setSaving(true);
    try {
      const updated = await updatePoint(selectedPt.id, {
        nom: editForm.nom.trim(), description: editForm.description.trim() || null,
        type: editForm.type, couleur: editForm.couleur, forme: editForm.forme || 'goutte',
        adresse: editForm.adresse?.trim() || null,
        url: editForm.url?.trim() || null,
        lat: editForm.lat, lng: editForm.lng,
        linked_entity_type:   editForm.linked_entity_type   || null,
        linked_entity_id:     editForm.linked_entity_id     || null,
        visibilite:           editForm.visibilite,
        visibilite_cercle_id: editForm.visibilite_cercle_id || null,
      });
      setSelectedPt(updated); setIsEditing(false);
      if (editForm.lat !== selectedPt.lat || editForm.lng !== selectedPt.lng) {
        setFlyTo([editForm.lat, editForm.lng]);
      }
      showInAppNotification('Lieu mis à jour', 'success');
    } catch { showInAppNotification('Erreur lors de la mise à jour', 'error'); }
    finally  { setSaving(false); }
  }, [updatePoint, selectedPt, editForm]);

  // ── Suppression POI ───────────────────────────────────────────────────────
  const handleDelete = useCallback(async (id) => {
    try {
      await deletePoint(id);
      showInAppNotification('Lieu supprimé', 'success');
      setSelectedPt(null);
    } catch { showInAppNotification('Erreur lors de la suppression', 'error'); }
  }, [deletePoint]);

  // ── Aide contextuelle ─────────────────────────────────────────────────────
  const hint =
    tool === 'vue'         ? 'Cliquez sur un épingle pour voir les détails.'
    : tool === 'itineraire'
      ? routePts.length === 0 ? 'Cliquez 🟢 sur la carte ou un lieu dans la liste.'
        : routePts.length === 1 ? "Cliquez 🔴 sur la carte ou un lieu dans la liste."
        : modePerso ? 'Résultat ci-dessous. Cliquez ↺ pour recommencer.'
        : "Résultat ci-dessous. 🚀 Astuce : configurez votre propre moyen de transport via l'onglet ⚙️."
    : !newPoiPos ? ''
    : 'Remplissez les informations ci-dessous.';

  // ── Droits de modification du POI sélectionné ────────────────────────────
  const canEdit = selectedPt && (
    isSA ||
    userId === selectedPt.created_by ||
    (selectedPt.visibilite === 'cercle' &&
      linkedEntities.cercles.find(c => c.id === selectedPt.visibilite_cercle_id)?.docte_id === userId)
  );

  // ── Entité liée sélectionnée (pour affichage dans la modal) ───────────────
  const linkedLabel = selectedPt?.linked_entity_id
    ? (selectedPt.linked_entity_type === 'character'
        ? linkedEntities.characters.find(c => c.id === selectedPt.linked_entity_id)?.nom
        : linkedEntities.cercles.find(c => c.id === selectedPt.linked_entity_id)?.nom)
    : null;

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <div className="flex flex-col">

      {/* En-tête */}
      <div className="flex items-center gap-3 mb-4">
        <button onClick={onBack} className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-100 text-amber-900 rounded-lg hover:bg-amber-200 transition-colors font-serif font-bold text-sm border border-amber-200">
          <ArrowLeft size={15} /> Retour
        </button>
        <h2 className="font-serif text-2xl text-amber-900 font-bold flex items-center gap-2">
          <Map size={22} /> Carte de Paris — 1900
        </h2>
      </div>

      {/* Layout */}
      <div className="flex h-[calc(100vh-210px)] min-h-[480px] rounded-xl overflow-hidden border-2 border-amber-200 shadow-xl relative">

        {/* Bouton bascule panneau (mobile/tablette uniquement) */}
        <button
          onClick={() => setSidebarOpen(o => !o)}
          aria-label={sidebarOpen ? 'Fermer le panneau' : 'Ouvrir le panneau'}
          className="md:hidden absolute top-2 left-2 z-[1002] p-2 bg-[#fdfbf7] border border-amber-200 rounded-lg shadow-md text-amber-900"
        >
          {sidebarOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        {/* Fond occultant (mobile, panneau ouvert) */}
        {sidebarOpen && (
          <div
            className="md:hidden absolute inset-0 z-[1000] bg-black/30"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* ── Panneau latéral ──────────────────────────────────────────── */}
        <aside className={`w-64 bg-[#fdfbf7] border-r border-amber-200 flex flex-col shrink-0 overflow-y-auto custom-scrollbar
          absolute md:relative inset-y-0 left-0 z-[1001] transition-transform duration-200
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>

          {/* Recherche — masquée une fois le formulaire d'ajout de lieu ouvert (son propre champ adresse prend le relais) */}
          {!(tool === 'poi' && newPoiPos) && (
            <div className="p-3 border-b border-amber-100">
              <p className="text-xs font-bold text-amber-800/50 uppercase tracking-widest mb-2">
                {tool === 'poi' ? 'Adresse du lieu' : 'Recherche'}
              </p>
              <div className="flex gap-1.5">
                <input
                  type="text"
                  placeholder={tool === 'poi' ? '38 rue Madame…' : 'Rue, quartier…'}
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleSearch()}
                  className="flex-1 px-2 py-1.5 border border-amber-200 rounded-lg text-xs bg-white focus:outline-none focus:ring-1 focus:ring-amber-400"
                />
                <button onClick={handleSearch} disabled={searching} aria-label="Rechercher" className="px-2 py-1.5 bg-amber-900 text-amber-50 rounded-lg hover:bg-amber-800 transition-colors disabled:opacity-50">
                  {searching ? <Loader size={13} className="animate-spin" /> : <Search size={13} />}
                </button>
              </div>
              {searchResults.length > 0 && (
                <div className="mt-1.5 space-y-0.5 max-h-44 overflow-y-auto custom-scrollbar">
                  {searchResults.map((r, i) => {
                    const label = r.display_name.split(',').slice(0, 3).join(',');
                    return (
                      <button key={i}
                        onClick={() => {
                          const lat = parseFloat(r.lat);
                          const lng = parseFloat(r.lon);
                          setFlyTo([lat, lng]);
                          if (tool === 'poi') {
                            const a = r.address || {};
                            const adresse = [a.house_number, a.road].filter(Boolean).join(' ') || label.split(',')[0].trim();
                            setNewPoiPos({ lat, lng });
                            setNewPoiForm(f => ({ ...f, nom: f.nom || adresse, adresse }));
                          } else if (tool === 'itineraire') {
                            handleMapClick({ lat, lng });
                          }
                          setSearchResults([]);
                          setSearchQuery('');
                        }}
                        className="w-full text-left px-2 py-1 rounded-lg hover:bg-amber-50 text-xs text-stone-700 leading-snug transition-colors whitespace-normal break-words"
                      >
                        {tool === 'poi' ? '📍 ' : ''}{label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* Outils */}
          <div className="p-3 border-b border-amber-100 space-y-1">
            {[
              { id: 'vue',        emoji: '🗺️', label: 'Explorer'       },
              { id: 'itineraire', emoji: '🐴', label: 'Itinéraire'      },
              { id: 'poi',        emoji: '📍', label: 'Ajouter un lieu' },
            ].map(t => (
              <button key={t.id} onClick={() => handleToolChange(t.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-serif font-bold transition-all flex items-center gap-2 ${tool === t.id ? 'bg-amber-900 text-amber-50' : 'text-amber-900 hover:bg-amber-100'}`}
              >
                <span>{t.emoji}</span> {t.label}
              </button>
            ))}
          </div>

          {/* Fond de carte */}
          <div className="p-3 border-b border-amber-100">
            <p className="text-xs font-bold text-amber-800/50 uppercase tracking-widest mb-2">Fond de carte</p>
            <div className="flex gap-1">
              {[
                { id: 'historique',  label: 'Historique', emoji: '🗺️' },
                { id: 'comparaison', label: 'Comparer',   emoji: '↔' },
                { id: 'moderne',     label: 'Actuelle',   emoji: '🏙️' },
              ].map(({ id, label, emoji }) => (
                <button
                  key={id}
                  onClick={() => setMapMode(id)}
                  className={`flex-1 px-1 py-1.5 rounded-lg text-xs font-bold transition-colors flex flex-col items-center gap-0.5 ${mapMode === id ? 'bg-amber-700 text-amber-50' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}
                >
                  <span>{emoji}</span>
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Vue du Docte */}
          {isDocte && (
            <div className="p-3 border-b border-amber-100">
              <p className="text-xs font-bold text-amber-800/50 uppercase tracking-widest mb-2">Vue du Docte</p>
              <button
                type="button"
                role="switch"
                aria-checked={docteViewMode === 'prive'}
                onClick={() => setDocteViewMode(m => m === 'cercle' ? 'prive' : 'cercle')}
                className="w-full flex items-center justify-between gap-2 px-1 py-1"
              >
                <span className={`text-xs font-bold ${docteViewMode === 'cercle' ? 'text-amber-800' : 'text-stone-500'}`}>🔵 Cercle</span>
                <span className={`relative w-10 h-5 rounded-full transition-colors shrink-0 ${docteViewMode === 'prive' ? 'bg-amber-700' : 'bg-stone-300'}`}>
                  <span className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${docteViewMode === 'prive' ? 'translate-x-5' : ''}`} />
                </span>
                <span className={`text-xs font-bold ${docteViewMode === 'prive' ? 'text-amber-800' : 'text-stone-500'}`}>🔒 Privée</span>
              </button>
              {docteViewMode === 'cercle' && docteCircles.length > 1 && (
                <select
                  value={docteSelectedCercleId || ''}
                  onChange={e => setDocteSelectedCercleId(e.target.value)}
                  className="w-full mt-2 px-2 py-1 border border-amber-200 rounded-lg text-xs bg-white focus:outline-none focus:ring-1 focus:ring-amber-400"
                >
                  {docteCircles.map(c => <option key={c.id} value={c.id}>{c.nom}</option>)}
                </select>
              )}
            </div>
          )}

          {/* Aide contextuelle */}
          {hint && (
            <div className="px-3 py-2 bg-amber-50/60 border-b border-amber-100 text-xs text-amber-800 italic leading-relaxed">
              {hint}
            </div>
          )}

          {/* Formulaire ajout POI */}
          {tool === 'poi' && newPoiPos && (
            <div className="p-3 border-b border-amber-100">
              <PoiForm
                form={newPoiForm} onChange={setNewPoiForm}
                onSave={handleAddPoi} onCancel={() => setNewPoiPos(null)}
                saving={saving} linkedEntities={linkedEntities} isSA={isSA}
                submitLabel="Épingler" showAddress={false}
                onPositionChange={(lat, lng) => { setNewPoiPos({ lat, lng }); setFlyTo([lat, lng]); }}
              />
            </div>
          )}

          {/* Filtre liste */}
          <div className="p-2 border-b border-amber-100 space-y-1.5">
            <div className="flex items-center gap-1.5">
              <Filter size={11} className="text-amber-800/40 shrink-0" />
              <input
                type="text" placeholder="Rechercher un lieu…" value={filterText}
                onChange={e => setFilterText(e.target.value)}
                className="flex-1 px-2 py-1 border border-amber-200 rounded-lg text-xs bg-white focus:outline-none focus:ring-1 focus:ring-amber-400"
              />
              {filterText && (
                <button onClick={() => setFilterText('')} aria-label="Effacer le filtre" className="p-1 text-stone-500 hover:text-stone-700">
                  <X size={11} />
                </button>
              )}
            </div>
            <select
              value={filterType}
              onChange={e => setFilterType(e.target.value)}
              className="w-full px-2 py-1 border border-amber-200 rounded-lg text-xs bg-white focus:outline-none focus:ring-1 focus:ring-amber-400"
            >
              <option value="">Tous les types</option>
              {Object.entries(POI_TYPES).map(([k, v]) => (
                <option key={k} value={k}>{v.label}</option>
              ))}
            </select>
          </div>

          {/* Liste des lieux — accordéons par type */}
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {loading ? (
              <div className="flex justify-center pt-8 text-amber-600"><Loader size={18} className="animate-spin" /></div>
            ) : visiblePoints.length === 0 ? (
              <p className="text-xs text-stone-500 italic text-center pt-8 px-3 leading-relaxed">Aucun lieu encore épinglé.</p>
            ) : filteredPoints.length === 0 ? (
              <p className="text-xs text-stone-500 italic text-center pt-8 px-3 leading-relaxed">Aucun résultat.</p>
            ) : Object.entries(groupedPoints).map(([type, pts]) => (
              <div key={type}>
                {/* En-tête accordéon */}
                <button
                  onClick={() => toggleGroup(type)}
                  className="w-full flex items-center justify-between px-3 py-2 bg-amber-50 hover:bg-amber-100 transition-colors border-b border-amber-100"
                >
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full shrink-0" style={{ background: POI_TYPES[type].couleur }} />
                    <span className="text-xs font-bold text-amber-900">{POI_TYPES[type].label}</span>
                    <span className="text-[10px] text-amber-700/60 font-mono">({pts.length})</span>
                  </span>
                  {openGroups[type] ? <ChevronUp size={12} className="text-amber-700/50" /> : <ChevronDown size={12} className="text-amber-700/50" />}
                </button>
                {/* Lieux du groupe */}
                {openGroups[type] && (
                  <div className="py-0.5">
                    {pts.map(pt => (
                      <button key={pt.id}
                        onClick={() => {
                          if (tool === 'itineraire') {
                            handleMapClick({ lat: pt.lat, lng: pt.lng });
                            setFlyTo([pt.lat, pt.lng]);
                          } else {
                            setSelectedPt(pt);
                            setIsEditing(false);
                            setFlyTo([pt.lat, pt.lng]);
                          }
                        }}
                        className={`w-full text-left px-3 py-1.5 hover:bg-amber-50 transition-colors flex items-center gap-2 ${selectedPt?.id === pt.id ? 'bg-amber-50' : ''}`}
                      >
                        {tool === 'itineraire'
                          ? <span className="text-[10px] shrink-0">{routePts.length === 0 ? '🟢' : routePts.length === 1 ? '🔴' : '↺'}</span>
                          : <span className="text-sm shrink-0 leading-none">{POI_TYPES[pt.type]?.emoji || '📍'}</span>
                        }
                        <span className="text-xs text-stone-800 truncate">{pt.nom}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </aside>

        {/* ── Zone carte ───────────────────────────────────────────────── */}
        <div ref={mapZoneRef} className="flex-1 relative">
          <MapContainer center={[48.8566, 2.3522]} zoom={13}
            className={`w-full h-full${tool !== 'vue' ? ' cursor-crosshair' : ''}`}
            style={{ background: '#e8dcc8' }}
            zoomControl
          >
            {/* Fond historique — IGN État-Major (~1820-1866) */}
            <Pane name="historical" style={{ zIndex: 200 }}>
              <TileLayer url={TILE_IGN} attribution={TILE_IGN_ATTRIBUTION} maxZoom={15} />
            </Pane>
            {/* Fond moderne — CartoDB Positron */}
            <Pane name="modern" style={{ zIndex: 201 }}>
              <TileLayer url={TILE_BASE} attribution={ATTRIBUTION} maxZoom={19} subdomains="abcd" />
              <TileLayer url={TILE_LABELS} maxZoom={19} subdomains="abcd" />
            </Pane>
            <PanesController mode={mapMode} sliderPos={sliderPos} />

            <MapClickHandler tool={tool} onMapClick={handleMapClick} />
            {flyTo && <FlyToLocation position={flyTo} />}

            {/* POI existants */}
            {filteredPoints.map(pt => (
              <Marker key={pt.id} position={[pt.lat, pt.lng]} icon={makePoiIcon(pt.couleur || POI_TYPES[pt.type]?.couleur || '#92400e', pt.forme || 'goutte', POI_TYPES[pt.type]?.emoji || '')}
                eventHandlers={{ click: () => {
                  if (tool === 'itineraire') {
                    handleMapClick({ lat: pt.lat, lng: pt.lng });
                  } else {
                    setSelectedPt(pt);
                    setIsEditing(false);
                    setFlyTo([pt.lat, pt.lng]);
                  }
                }}}
              />
            ))}
            {/* Nouveau POI en attente */}
            {newPoiPos && <Marker position={[newPoiPos.lat, newPoiPos.lng]} icon={makePoiIcon(newPoiForm.couleur, newPoiForm.forme || 'goutte', POI_TYPES[newPoiForm.type]?.emoji || '', 22)} />}
            {/* Marqueurs itinéraire */}
            {routePts[0] && <Marker position={[routePts[0].lat, routePts[0].lng]} icon={ICON_START} />}
            {routePts[1] && <Marker position={[routePts[1].lat, routePts[1].lng]} icon={ICON_END}   />}
            {/* Tracé */}
            {routeData && <Polyline positions={routeData.polyline} pathOptions={{ color: '#92400e', weight: 5, opacity: 0.85 }} />}
          </MapContainer>

          {/* Slider de comparaison */}
          {mapMode === 'comparaison' && (
            <div className="absolute inset-0 z-[1001] pointer-events-none">
              {/* Ligne de séparation */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-white/90 shadow-[0_0_6px_rgba(0,0,0,0.5)]"
                style={{ left: `${sliderPos}%` }}
              />
              {/* Label gauche */}
              <div
                className="absolute top-3 text-[10px] font-bold text-white drop-shadow-lg bg-black/30 px-1.5 py-0.5 rounded"
                style={{ right: `${100 - sliderPos}%`, marginRight: '8px' }}
              >🗺️ ~1850</div>
              {/* Label droite */}
              <div
                className="absolute top-3 text-[10px] font-bold text-white drop-shadow-lg bg-black/30 px-1.5 py-0.5 rounded"
                style={{ left: `${sliderPos}%`, marginLeft: '8px' }}
              >🏙️ Actuel</div>
              {/* Poignée */}
              <div
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white shadow-xl border-2 border-amber-300 flex items-center justify-center cursor-ew-resize pointer-events-auto select-none"
                style={{ left: `${sliderPos}%`, touchAction: 'none' }}
                onMouseDown={handleSliderMouseDown}
                onTouchStart={handleSliderTouchStart}
              >
                <span className="text-amber-700 text-sm font-bold">↔</span>
              </div>
            </div>
          )}

          {/* Résultat itinéraire */}
          {tool === 'itineraire' && (routeLoading || routeData) && (
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-[1000] bg-[#fdfbf7] border-2 border-amber-900/20 rounded-xl shadow-xl font-serif min-w-[300px]">
              {routeLoading ? (
                <div className="px-5 py-3">
                  <span className="text-amber-900 flex items-center gap-2 text-sm"><Loader size={15} className="animate-spin" /> Calcul…</span>
                </div>
              ) : routeData && (
                <>
                  {/* Distances */}
                  <div className="flex items-center gap-3 px-4 pt-3 pb-2 border-b border-amber-100">
                    <div className="text-center">
                      <p className="text-amber-900 font-bold text-lg leading-none">{formatDistance(routeData.distanceM)}</p>
                      <p className="text-stone-500 text-[9px] uppercase tracking-wider mt-0.5">Route</p>
                    </div>
                    <div className="text-stone-200 text-lg">·</div>
                    <div className="text-center">
                      <p className="text-stone-500 font-bold text-lg leading-none">{formatDistance(routeData.flyingM)}</p>
                      <p className="text-stone-500 text-[9px] uppercase tracking-wider mt-0.5">Vol d'oiseau</p>
                    </div>
                    <button onClick={() => { setRoutePts([]); setRouteData(null); }} className="ml-auto p-1 text-stone-500 hover:text-stone-700" aria-label="Effacer"><X size={14} /></button>
                  </div>

                  {/* Onglets modes */}
                  <div className="flex border-b border-amber-100">
                    {TRANSPORT_MODES.map(m => (
                      <button key={m.id} onClick={() => setActiveMode(m.id)} title={m.label}
                        className={`flex-1 py-2 text-base leading-none transition-colors ${activeMode === m.id ? 'bg-amber-50 border-b-2 border-amber-900' : 'hover:bg-amber-50/60'}`}
                      >{m.emoji}</button>
                    ))}
                    <button
                      onClick={() => { setActiveMode('perso'); if (!modePerso) setEditModePerso(true); }}
                      title={modePerso?.nom || 'Mode personnalisé'}
                      className={`flex-1 py-2 text-base leading-none transition-colors ${activeMode === 'perso' ? 'bg-amber-50 border-b-2 border-amber-900' : 'hover:bg-amber-50/60'}`}
                    >{modePerso?.emoji || '⚙️'}</button>
                  </div>

                  {/* Contenu de l'onglet actif */}
                  <div className="px-4 py-3">
                    {activeMode === 'perso' && editModePerso ? (
                      <ModePersoForm
                        form={modePersoForm} onChange={setModePersoForm}
                        onSave={saveModePerso}
                        onCancel={() => { setEditModePerso(false); if (!modePerso) setActiveMode('pied'); }}
                      />
                    ) : activeMode === 'perso' && !modePerso ? (
                      <button onClick={() => setEditModePerso(true)} className="text-xs text-amber-700 underline hover:text-amber-900">
                        Configurer mon mode de déplacement…
                      </button>
                    ) : (() => {
                      const t   = modeTime(routeData, activeMode, modePerso);
                      const m   = activeMode === 'perso' ? modePerso : TRANSPORT_MODES.find(x => x.id === activeMode);
                      const isVol = activeMode === 'perso' && modePerso?.en_vol;
                      return (
                        <div className="flex items-end justify-between">
                          <div>
                            <p className="text-xs text-stone-500 mb-0.5">{m?.emoji} {m?.label || m?.nom}</p>
                            <p className="text-3xl font-bold text-amber-900 leading-none">{t != null ? formatTime(t) : '—'}</p>
                            {isVol && <p className="text-[10px] text-stone-500 italic mt-0.5">↗ En vol d'oiseau</p>}
                            {!isVol && activeMode !== 'pied' && m?.vitesse_kmh && (
                              <p className="text-[10px] text-stone-500 mt-0.5">{m.vitesse_kmh} km/h</p>
                            )}
                          </div>
                          {activeMode === 'perso' && (
                            <button onClick={() => setEditModePerso(true)} aria-label="Modifier le mode" className="p-1 text-stone-500 hover:text-stone-700 mb-1" title="Modifier le mode">
                              <Edit size={13} />
                            </button>
                          )}
                        </div>
                      );
                    })()}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ── Modale détail / édition POI — portail hors Leaflet ─────────── */}
      {selectedPt && createPortal(
        <ModalShell onClose={() => { setSelectedPt(null); setIsEditing(false); }} maxWidth="max-w-sm">
          <ModalHeader
            title={isEditing ? 'Modifier le lieu' : selectedPt.nom}
            icon={<MapPin size={16} />}
            onClose={() => { setSelectedPt(null); setIsEditing(false); }}
          />
          <div className="p-5 flex-1">
            {isEditing ? (
              <PoiForm
                form={editForm} onChange={setEditForm}
                onSave={handleEditSave} onCancel={() => setIsEditing(false)}
                saving={saving} linkedEntities={linkedEntities} isSA={isSA}
                submitLabel="Enregistrer"
                onPositionChange={(lat, lng) => { setEditForm(f => ({ ...f, lat, lng })); setFlyTo([lat, lng]); }}
              />
            ) : (
              <>
                <div className="flex items-center gap-2 flex-wrap mb-3">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold text-white" style={{ background: selectedPt.couleur || '#92400e' }}>
                    {POI_TYPES[selectedPt.type]?.label || selectedPt.type}
                  </span>
                  <span className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold bg-stone-100 text-stone-500">
                    {VISIBILITE[selectedPt.visibilite]?.emoji} {VISIBILITE[selectedPt.visibilite]?.label || selectedPt.visibilite}
                  </span>
                </div>
                {selectedPt.visibilite === 'cercle' && selectedPt.visibilite_cercle_id && (
                  <p className="text-xs text-amber-700 font-semibold mb-2">
                    🔵 {linkedEntities.cercles.find(c => c.id === selectedPt.visibilite_cercle_id)?.nom || '—'}
                  </p>
                )}
                {selectedPt.adresse && (
                  <p className="text-xs text-amber-800 font-medium mb-2 flex items-center gap-1">
                    <MapPin size={11} className="shrink-0" /> {selectedPt.adresse}
                  </p>
                )}
                {selectedPt.url && (
                  <a
                    href={selectedPt.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-800 font-medium mb-2 underline underline-offset-2 transition-colors"
                  >
                    <ExternalLink size={11} className="shrink-0" />
                    {(() => { try { return new URL(selectedPt.url).hostname.replace(/^www\./, ''); } catch { return selectedPt.url; } })()}
                  </a>
                )}
                {linkedLabel && (
                  <p className="text-xs text-amber-800 font-semibold mb-2">
                    {selectedPt.linked_entity_type === 'character' ? '👤' : '🔵'} {linkedLabel}
                  </p>
                )}
                {selectedPt.description && (
                  <p className="text-sm text-stone-700 leading-relaxed italic mb-4">{selectedPt.description}</p>
                )}
                <p className="text-[10px] text-stone-500 font-mono">{selectedPt.lat.toFixed(5)}, {selectedPt.lng.toFixed(5)}</p>
              </>
            )}
          </div>
          {!isEditing && canEdit && (
            <div className="px-5 pb-4 pt-2 border-t border-amber-100 flex items-center justify-between">
              <button onClick={() => startEdit(selectedPt)} className="flex items-center gap-1.5 text-sm text-amber-700 hover:text-amber-900 transition-colors">
                <Edit size={14} /> Modifier
              </button>
              <button
                onClick={() => confirmDelete ? handleDelete(selectedPt.id) : setConfirmDelete(true)}
                onBlur={() => setConfirmDelete(false)}
                className={`flex items-center gap-1.5 text-sm transition-colors ${confirmDelete ? 'text-red-700 font-bold' : 'text-red-500 hover:text-red-700'}`}
              >
                <Trash2 size={14} /> {confirmDelete ? 'Confirmer ?' : 'Supprimer'}
              </button>
            </div>
          )}
        </ModalShell>,
        document.body
      )}
    </div>
  );
}
