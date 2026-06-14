import React, { useState, useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { MapContainer, TileLayer, Marker, Polyline, useMapEvents, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ArrowLeft, MapPin, X, Loader, Trash2, Map, Search, Edit } from '../config/icons';
import ModalShell, { ModalHeader } from './ui/ModalShell';
import { useMapPoints } from '../hooks/useMapPoints';
import { showInAppNotification } from '../utils/SystemeServices';
import { isSuperAdmin } from '../utils/authRoles';
import { supabase } from '../config/supabase';

// ─── Tuiles ──────────────────────────────────────────────────────────────────

// OpenHistoricalMap : vraies données historiques (rues disparues, noms d'époque…)
// Le paramètre date=1900-01-01 est requis pour que OHM renvoie les tuiles historiques
const TILE_OHM    = 'https://tile.openhistoricalmap.org/osmhm/{z}/{x}/{y}.png?date=1900-01-01';
// CartoDB Positron : fond de secours + labels modernes en transparence
const TILE_BASE   = 'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png';
const TILE_LABELS = 'https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png';
const ATTRIBUTION = '© <a href="https://www.openhistoricalmap.org">OpenHistoricalMap</a> © <a href="https://carto.com/attributions">CARTO</a> © <a href="https://openstreetmap.org/copyright">OSM</a>';

// ─── Types de POI ────────────────────────────────────────────────────────────

const POI_TYPES = {
  lieu:               { label: 'Lieu',              couleur: '#92400e', linkedType: null       },
  evenement:          { label: 'Événement',          couleur: '#dc2626', linkedType: null       },
  adresse_personnage: { label: 'Adresse personnage', couleur: '#1d4ed8', linkedType: 'character'},
  cercle:             { label: 'Cercle',             couleur: '#7c3aed', linkedType: 'cercle'   },
  point_interet:      { label: "Point d'intérêt",   couleur: '#15803d', linkedType: null       },
};

const VISIBILITE = {
  public: { label: 'Public',  emoji: '🌍' },
  cercle: { label: 'Cercle',  emoji: '🔵' },
  prive:  { label: 'Privé',   emoji: '🔒' },
  admin:  { label: 'Admin',   emoji: '⚙️'  },
};

const EMPTY_FORM = { nom: '', description: '', type: 'lieu', couleur: '#92400e', linked_entity_type: null, linked_entity_id: null, visibilite: 'public', visibilite_cercle_id: null };

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

async function fetchRoute(a, b) {
  const url = `https://router.project-osrm.org/route/v1/foot/${a.lng},${a.lat};${b.lng},${b.lat}?overview=full&geometries=geojson`;
  const res = await fetch(url);
  if (!res.ok) throw new Error();
  const data = await res.json();
  if (data.code !== 'Ok') throw new Error();
  const route = data.routes[0];
  return {
    distanceM: route.distance,
    walkingS:  route.duration,
    fiacreS:   route.distance / (12000 / 3600),
    polyline:  route.geometry.coordinates.map(([lng, lat]) => [lat, lng]),
  };
}

// ─── Icônes Leaflet ──────────────────────────────────────────────────────────

function makePoiIcon(couleur, size = 22) {
  return L.divIcon({
    className: '',
    html: `<div style="width:${size}px;height:${size}px;background:${couleur};border:2.5px solid white;border-radius:50% 50% 50% 0;transform:rotate(-45deg);box-shadow:0 2px 5px rgba(0,0,0,0.4)"></div>`,
    iconSize: [size, size], iconAnchor: [size / 2, size], popupAnchor: [0, -(size + 4)],
  });
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

// ─── Formulaire POI (ajout + édition) ────────────────────────────────────────

function PoiForm({ form, onChange, onSave, onCancel, saving, linkedEntities, isSA, submitLabel = 'Épingler' }) {
  const linkedType = POI_TYPES[form.type]?.linkedType;
  const entityList = linkedType === 'character' ? linkedEntities.characters : linkedType === 'cercle' ? linkedEntities.cercles : [];
  const visibiliteOptions = isSA
    ? Object.entries(VISIBILITE)
    : Object.entries(VISIBILITE).filter(([k]) => k !== 'admin');

  return (
    <div className="space-y-2">
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
      <select
        value={form.type}
        onChange={e => {
          const type = e.target.value;
          onChange({ ...form, type, couleur: POI_TYPES[type].couleur, linked_entity_type: POI_TYPES[type].linkedType, linked_entity_id: null });
        }}
        className="w-full px-2 py-1.5 border border-amber-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-1 focus:ring-amber-400"
      >
        {Object.entries(POI_TYPES).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
      </select>
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
        <button onClick={onCancel} className="px-2.5 py-1.5 bg-stone-100 text-stone-500 rounded-lg text-sm hover:bg-stone-200 transition-colors">
          <X size={13} />
        </button>
      </div>
    </div>
  );
}

// ─── Composant principal ─────────────────────────────────────────────────────

export default function CarteDeParisPage({ onBack, userProfile, session }) {
  const { points, loading, addPoint, updatePoint, deletePoint } = useMapPoints();
  const isSA   = isSuperAdmin(userProfile);
  const userId = session?.user?.id;

  // ── Outils ────────────────────────────────────────────────────────────────
  const [tool, setTool]       = useState('vue');
  const [routePts, setRoutePts]   = useState([]);
  const [routeData, setRouteData] = useState(null);
  const [routeLoading, setRouteLoading] = useState(false);

  // ── POI ───────────────────────────────────────────────────────────────────
  const [selectedPt, setSelectedPt] = useState(null);
  const [isEditing, setIsEditing]   = useState(false);
  const [editForm, setEditForm]     = useState(EMPTY_FORM);
  const [newPoiPos, setNewPoiPos]   = useState(null);
  const [newPoiForm, setNewPoiForm] = useState(EMPTY_FORM);
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
      const q = encodeURIComponent(searchQuery + ', Paris');
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${q}&format=json&limit=5&addressdetails=1&viewbox=2.224,48.902,2.470,48.815&bounded=1&accept-language=fr`,
        { headers: { 'User-Agent': 'LesHeritiers/1.0' } }
      );
      setSearchResults(await res.json());
    } catch {
      showInAppNotification('Erreur de recherche', 'error');
    } finally {
      setSearching(false);
    }
  }, [searchQuery]);

  // ── Opacité carte historique ───────────────────────────────────────────────
  const [ohmOpacity, setOhmOpacity] = useState(0.85);

  // ── Changement d'outil ────────────────────────────────────────────────────
  const handleToolChange = useCallback((t) => {
    setTool(t);
    setRoutePts([]); setRouteData(null); setNewPoiPos(null);
    setSearchResults([]);
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
        type: newPoiForm.type, couleur: newPoiForm.couleur,
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
    setEditForm({ nom: pt.nom, description: pt.description || '', type: pt.type, couleur: pt.couleur, linked_entity_type: pt.linked_entity_type, linked_entity_id: pt.linked_entity_id, visibilite: pt.visibilite || 'public', visibilite_cercle_id: pt.visibilite_cercle_id || null });
    setIsEditing(true);
  }, []);

  const handleEditSave = useCallback(async () => {
    if (!editForm.nom.trim() || !selectedPt) return;
    setSaving(true);
    try {
      const updated = await updatePoint(selectedPt.id, {
        nom: editForm.nom.trim(), description: editForm.description.trim() || null,
        type: editForm.type, couleur: editForm.couleur,
        linked_entity_type:   editForm.linked_entity_type   || null,
        linked_entity_id:     editForm.linked_entity_id     || null,
        visibilite:           editForm.visibilite,
        visibilite_cercle_id: editForm.visibilite_cercle_id || null,
      });
      setSelectedPt(updated); setIsEditing(false);
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
      ? routePts.length === 0 ? 'Cliquez sur le point de départ.'
        : routePts.length === 1 ? "Cliquez sur le point d'arrivée."
        : 'Résultat ci-dessous. Cliquez pour recommencer.'
    : !newPoiPos ? 'Saisissez une adresse ci-dessus ou cliquez sur la carte.'
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
      <div className="flex h-[calc(100vh-210px)] min-h-[480px] rounded-xl overflow-hidden border-2 border-amber-200 shadow-xl">

        {/* ── Panneau latéral ──────────────────────────────────────────── */}
        <aside className="w-64 bg-[#fdfbf7] border-r border-amber-200 flex flex-col shrink-0 overflow-y-auto custom-scrollbar">

          {/* Recherche */}
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
              <button onClick={handleSearch} disabled={searching} className="px-2 py-1.5 bg-amber-900 text-amber-50 rounded-lg hover:bg-amber-800 transition-colors disabled:opacity-50">
                {searching ? <Loader size={13} className="animate-spin" /> : <Search size={13} />}
              </button>
            </div>
            {searchResults.length > 0 && (
              <div className="mt-1.5 space-y-0.5">
                {searchResults.map((r, i) => {
                  const label = r.display_name.split(',').slice(0, 2).join(',');
                  return (
                    <button key={i}
                      onClick={() => {
                        const lat = parseFloat(r.lat);
                        const lng = parseFloat(r.lon);
                        setFlyTo([lat, lng]);
                        if (tool === 'poi') {
                          const a = r.address || {};
                          const nom = [a.house_number, a.road].filter(Boolean).join(' ') || label.split(',')[0].trim();
                          setNewPoiPos({ lat, lng });
                          setNewPoiForm(f => ({ ...f, nom }));
                        }
                        setSearchResults([]);
                        setSearchQuery('');
                      }}
                      className="w-full text-left px-2 py-1 rounded-lg hover:bg-amber-50 text-xs text-stone-700 truncate transition-colors"
                    >
                      {tool === 'poi' ? '📍 ' : ''}{label}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Outils */}
          <div className="p-3 border-b border-amber-100 space-y-1">
            <p className="text-xs font-bold text-amber-800/50 uppercase tracking-widest mb-2">Outils</p>
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

          {/* Opacité carte historique */}
          <div className="p-3 border-b border-amber-100">
            <p className="text-xs font-bold text-amber-800/50 uppercase tracking-widest mb-2">Carte historique</p>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-stone-400 w-12 shrink-0">Moderne</span>
              <input type="range" min={0} max={1} step={0.05} value={ohmOpacity}
                onChange={e => setOhmOpacity(parseFloat(e.target.value))}
                className="flex-1 accent-amber-700"
              />
              <span className="text-[10px] text-stone-400 w-12 text-right shrink-0">1900</span>
            </div>
          </div>

          {/* Aide contextuelle */}
          <div className="px-3 py-2 bg-amber-50/60 border-b border-amber-100 text-xs text-amber-800 italic leading-relaxed">
            {hint}
          </div>

          {/* Formulaire ajout POI */}
          {tool === 'poi' && newPoiPos && (
            <div className="p-3 border-b border-amber-100">
              <PoiForm
                form={newPoiForm} onChange={setNewPoiForm}
                onSave={handleAddPoi} onCancel={() => setNewPoiPos(null)}
                saving={saving} linkedEntities={linkedEntities} isSA={isSA}
                submitLabel="Épingler"
              />
            </div>
          )}

          {/* Liste des lieux */}
          <div className="flex-1 p-2 space-y-0.5">
            {loading ? (
              <div className="flex justify-center pt-8 text-amber-600"><Loader size={18} className="animate-spin" /></div>
            ) : points.length === 0 ? (
              <p className="text-xs text-stone-400 italic text-center pt-8 px-3 leading-relaxed">Aucun lieu encore épinglé.</p>
            ) : points.map(pt => (
              <button key={pt.id} onClick={() => { setSelectedPt(pt); setIsEditing(false); }}
                className="w-full text-left px-2 py-1.5 rounded-lg hover:bg-amber-50 transition-colors flex items-center gap-2"
              >
                <span style={{ color: pt.couleur || '#92400e' }} className="shrink-0"><MapPin size={13} /></span>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-stone-800 truncate">{pt.nom}</p>
                  <p className="text-[10px] text-stone-400">{POI_TYPES[pt.type]?.label || pt.type}</p>
                </div>
              </button>
            ))}
          </div>
        </aside>

        {/* ── Zone carte ───────────────────────────────────────────────── */}
        <div className="flex-1 relative">
          <MapContainer center={[48.8566, 2.3522]} zoom={13}
            className={`w-full h-full${tool !== 'vue' ? ' cursor-crosshair' : ''}`}
            zoomControl
          >
            {/* Fond moderne (toujours visible, garantit toutes les rues) */}
            <TileLayer url={TILE_BASE} attribution={ATTRIBUTION} maxZoom={19} subdomains="abcd" />
            {/* Carte historique OpenHistoricalMap par-dessus, opacité réglable */}
            <TileLayer url={TILE_OHM} maxZoom={19} opacity={ohmOpacity} />
            {/* Labels modernes : s'effacent quand on monte vers 1900 */}
            <TileLayer url={TILE_LABELS} maxZoom={19} subdomains="abcd" opacity={0.75 * (1 - ohmOpacity)} />

            <MapClickHandler tool={tool} onMapClick={handleMapClick} />
            {flyTo && <FlyToLocation position={flyTo} />}

            {/* POI existants */}
            {points.map(pt => (
              <Marker key={pt.id} position={[pt.lat, pt.lng]} icon={makePoiIcon(pt.couleur || '#92400e')}
                eventHandlers={{ click: () => { setSelectedPt(pt); setIsEditing(false); } }}
              />
            ))}
            {/* Nouveau POI en attente */}
            {newPoiPos && <Marker position={[newPoiPos.lat, newPoiPos.lng]} icon={makePoiIcon(newPoiForm.couleur, 18)} />}
            {/* Marqueurs itinéraire */}
            {routePts[0] && <Marker position={[routePts[0].lat, routePts[0].lng]} icon={ICON_START} />}
            {routePts[1] && <Marker position={[routePts[1].lat, routePts[1].lng]} icon={ICON_END}   />}
            {/* Tracé */}
            {routeData && <Polyline positions={routeData.polyline} pathOptions={{ color: '#92400e', weight: 5, opacity: 0.85 }} />}
          </MapContainer>

          {/* Résultat itinéraire */}
          {tool === 'itineraire' && (routeLoading || routeData) && (
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-[1000] bg-[#fdfbf7] border-2 border-amber-900/20 rounded-xl shadow-xl px-5 py-3 flex items-center gap-5 font-serif">
              {routeLoading ? (
                <span className="text-amber-900 flex items-center gap-2 text-sm"><Loader size={15} className="animate-spin" /> Calcul…</span>
              ) : routeData && (
                <>
                  <div className="text-center">
                    <p className="text-amber-900 font-bold text-xl leading-none">{formatDistance(routeData.distanceM)}</p>
                    <p className="text-stone-400 text-[10px] uppercase tracking-wider mt-0.5">Distance</p>
                  </div>
                  <div className="border-l border-amber-200 pl-4 space-y-1 text-sm">
                    <div className="flex items-center gap-2 text-stone-700">🚶 À pied : <strong>{formatTime(routeData.walkingS)}</strong></div>
                    <div className="flex items-center gap-2 text-stone-700">🐴 En fiacre : <strong>{formatTime(routeData.fiacreS)}</strong></div>
                  </div>
                  <button onClick={() => { setRoutePts([]); setRouteData(null); }} className="text-stone-300 hover:text-stone-500" aria-label="Effacer l'itinéraire"><X size={16} /></button>
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
                {linkedLabel && (
                  <p className="text-xs text-amber-800 font-semibold mb-2">
                    {selectedPt.linked_entity_type === 'character' ? '👤' : '🔵'} {linkedLabel}
                  </p>
                )}
                {selectedPt.description && (
                  <p className="text-sm text-stone-700 leading-relaxed italic mb-4">{selectedPt.description}</p>
                )}
                <p className="text-[10px] text-stone-300 font-mono">{selectedPt.lat.toFixed(5)}, {selectedPt.lng.toFixed(5)}</p>
              </>
            )}
          </div>
          {!isEditing && canEdit && (
            <div className="px-5 pb-4 pt-2 border-t border-amber-100 flex items-center justify-between">
              <button onClick={() => startEdit(selectedPt)} className="flex items-center gap-1.5 text-sm text-amber-700 hover:text-amber-900 transition-colors">
                <Edit size={14} /> Modifier
              </button>
              <button onClick={() => handleDelete(selectedPt.id)} className="flex items-center gap-1.5 text-sm text-red-500 hover:text-red-700 transition-colors">
                <Trash2 size={14} /> Supprimer
              </button>
            </div>
          )}
        </ModalShell>,
        document.body
      )}
    </div>
  );
}
