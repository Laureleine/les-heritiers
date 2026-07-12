// src/components/admin/TabIndicesVeritesAdmin.js
// CRUD admin pour la table indices_verites (liste pré-définie des Secrets du Monde).
import React, { useState, useEffect, useCallback } from 'react';
import { supabase } from '../../config/supabase';
import { Plus, Edit, Trash2, Save, X, Loader, RefreshCcw } from '../../config/icons';
import { showInAppNotification } from '../../utils/SystemeServices';

const TYPES      = ['indice', 'verite_mineure', 'verite_majeure', 'dit_du_marcheur'];
const TYPES_LABEL = { indice: 'Indice', verite_mineure: 'Vérité mineure', verite_majeure: 'Vérité majeure', dit_du_marcheur: 'Dit du Marcheur' };
const ELEM_TYPES = ['concept', 'lieu', 'personnage', 'événement'];

const EMPTY = { element_nom: '', element_type: 'concept', type: 'indice', texte: '', ordre: 0 };

export default function TabIndicesVeritesAdmin() {
  const [items, setItems]       = useState([]);
  const [loading, setLoading]   = useState(false);
  const [editId, setEditId]     = useState(null);
  const [form, setForm]         = useState(null);
  const [saving, setSaving]     = useState(false);
  const [filterEl, setFilterEl] = useState('');

  const load = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('indices_verites')
      .select('*')
      .order('element_nom')
      .order('ordre');
    if (error) showInAppNotification('Erreur : ' + error.message, 'error');
    else setItems(data || []);
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  const elements = [...new Set(items.map(i => i.element_nom))].sort((a, b) => a.localeCompare(b, 'fr'));

  const visible = filterEl ? items.filter(i => i.element_nom === filterEl) : items;

  const startEdit = (item) => { setEditId(item.id); setForm({ ...item }); };
  const startNew  = () => { setEditId('new'); setForm({ ...EMPTY }); };
  const cancel    = () => { setEditId(null); setForm(null); };

  const save = async () => {
    if (!form.element_nom.trim() || !form.texte.trim()) {
      showInAppNotification('Nom de l\'élément et texte requis.', 'error'); return;
    }
    setSaving(true);
    if (editId === 'new') {
      const { error } = await supabase.from('indices_verites').insert({
        element_nom:  form.element_nom.trim(),
        element_type: form.element_type,
        type:         form.type,
        texte:        form.texte.trim(),
        ordre:        parseInt(form.ordre) || 0,
      });
      if (error) showInAppNotification('Erreur : ' + error.message, 'error');
      else { showInAppNotification('Élément ajouté.', 'success'); cancel(); await load(); }
    } else {
      const { error } = await supabase.from('indices_verites').update({
        element_nom:  form.element_nom.trim(),
        element_type: form.element_type,
        type:         form.type,
        texte:        form.texte.trim(),
        ordre:        parseInt(form.ordre) || 0,
      }).eq('id', editId);
      if (error) showInAppNotification('Erreur : ' + error.message, 'error');
      else { showInAppNotification('Modifié.', 'success'); cancel(); await load(); }
    }
    setSaving(false);
  };

  const del = async (id) => {
    if (!window.confirm('Supprimer cet élément ? Les révélations liées seront aussi effacées.')) return;
    const { error } = await supabase.from('indices_verites').delete().eq('id', id);
    if (error) showInAppNotification('Erreur : ' + error.message, 'error');
    else { showInAppNotification('Supprimé.', 'success'); await load(); }
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2">
          <select
            value={filterEl}
            onChange={e => setFilterEl(e.target.value)}
            className="text-sm border border-stone-300 rounded-lg px-3 py-1.5 bg-white outline-none focus:ring-1 focus:ring-amber-400"
          >
            <option value="">Tous les éléments ({items.length})</option>
            {elements.map(el => (
              <option key={el} value={el}>{el} ({items.filter(i => i.element_nom === el).length})</option>
            ))}
          </select>
          <button onClick={load} className="p-1.5 text-stone-400 hover:text-stone-600 rounded" title="Rafraîchir">
            <RefreshCcw size={14} />
          </button>
        </div>
        <button
          onClick={startNew}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-700 text-white rounded-lg text-sm font-bold hover:bg-amber-800 transition-colors"
        >
          <Plus size={14} /> Ajouter
        </button>
      </div>

      {editId === 'new' && (
        <FormRow form={form} setForm={setForm} onSave={save} onCancel={cancel} saving={saving} isNew />
      )}

      {loading ? (
        <div className="flex items-center justify-center py-12 gap-2 text-stone-400">
          <Loader size={16} className="animate-spin" /> Chargement…
        </div>
      ) : (
        <div className="space-y-1">
          {visible.map(item => (
            editId === item.id ? (
              <FormRow key={item.id} form={form} setForm={setForm} onSave={save} onCancel={cancel} saving={saving} />
            ) : (
              <div key={item.id} className="flex items-start gap-3 px-3 py-2.5 bg-white border border-stone-100 rounded-lg hover:border-stone-200 group">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5 mb-0.5">
                    <span className="text-xs font-bold text-amber-900 font-serif">{item.element_nom}</span>
                    <span className="text-[10px] text-stone-400 bg-stone-50 border border-stone-200 px-1.5 py-0.5 rounded">{TYPES_LABEL[item.type]}</span>
                    <span className="text-[10px] text-stone-300">#{item.ordre}</span>
                  </div>
                  <p className="text-sm text-stone-700 leading-snug">{item.texte}</p>
                </div>
                <div className="flex items-center gap-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onClick={() => startEdit(item)} className="p-1.5 text-stone-400 hover:text-amber-700 rounded transition-colors"><Edit size={13} /></button>
                  <button onClick={() => del(item.id)} className="p-1.5 text-stone-400 hover:text-red-600 rounded transition-colors"><Trash2 size={13} /></button>
                </div>
              </div>
            )
          ))}
        </div>
      )}
    </div>
  );
}

function FormRow({ form, setForm, onSave, onCancel, saving, isNew }) {
  const f = (field) => (e) => setForm(p => ({ ...p, [field]: e.target.value }));
  return (
    <div className={`border-2 rounded-xl p-4 mb-3 space-y-3 ${isNew ? 'border-amber-400 bg-amber-50/30' : 'border-blue-300 bg-blue-50/20'}`}>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <input value={form.element_nom} onChange={f('element_nom')} placeholder="Nom de l'élément (ex: Merlin)" className="border border-stone-300 rounded-lg px-3 py-1.5 text-sm outline-none focus:ring-1 focus:ring-amber-400" />
        <select value={form.element_type} onChange={f('element_type')} className="border border-stone-300 rounded-lg px-3 py-1.5 text-sm outline-none focus:ring-1 focus:ring-amber-400 bg-white">
          {ELEM_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
        <select value={form.type} onChange={f('type')} className="border border-stone-300 rounded-lg px-3 py-1.5 text-sm outline-none focus:ring-1 focus:ring-amber-400 bg-white">
          {TYPES.map(t => <option key={t} value={t}>{TYPES_LABEL[t]}</option>)}
        </select>
      </div>
      <textarea value={form.texte} onChange={f('texte')} rows={3} placeholder="Texte de l'élément…" className="w-full border border-stone-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-amber-400 resize-none" />
      <div className="flex items-center justify-between gap-3">
        <label className="flex items-center gap-2 text-xs text-stone-500">
          Ordre : <input type="number" value={form.ordre} onChange={f('ordre')} className="w-16 border border-stone-300 rounded px-2 py-1 text-sm outline-none focus:ring-1 focus:ring-amber-400" />
        </label>
        <div className="flex items-center gap-2">
          <button onClick={onCancel} className="flex items-center gap-1 px-3 py-1.5 border border-stone-300 rounded-lg text-sm text-stone-600 hover:bg-stone-50 transition-colors"><X size={13} /> Annuler</button>
          <button onClick={onSave} disabled={saving} className="flex items-center gap-1 px-3 py-1.5 bg-amber-700 text-white rounded-lg text-sm font-bold hover:bg-amber-800 transition-colors disabled:opacity-50">
            {saving ? <Loader size={13} className="animate-spin" /> : <Save size={13} />} Enregistrer
          </button>
        </div>
      </div>
    </div>
  );
}
