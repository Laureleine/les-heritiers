// 1
import React, { useState, useMemo } from 'react';
import * as LucideIcons from 'lucide-react';
import { Hammer, Save, Edit, Trash2, HelpCircle } from '../../config/icons';
import { useForgeTitres } from '../../hooks/useForgeTitres';
import { useUserContext } from '../../context/UserContext';
import ConfirmModal from '../ConfirmModal';

const ALL_ICONS = Object.entries(LucideIcons).filter(
  ([name, comp]) => typeof comp === 'function' && /^[A-Z]/.test(name) && name !== 'createLucideIcon'
);

function IconPicker({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    const s = search.toLowerCase();
    return s ? ALL_ICONS.filter(([name]) => name.toLowerCase().includes(s)) : ALL_ICONS;
  }, [search]);

  const SelectedIcon = LucideIcons[value] || HelpCircle;

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="w-full p-2 border border-stone-300 rounded-lg bg-stone-50 text-sm text-left flex items-center gap-2 hover:border-amber-400 transition-colors"
      >
        <SelectedIcon size={16} className="text-stone-600 shrink-0" />
        <span className="flex-1 text-stone-700">{value || 'Choisir une icône…'}</span>
        <span className="text-stone-400 text-[10px]">{open ? '▲' : '▼'}</span>
      </button>

      {open && (
        <div className="absolute z-20 left-0 right-0 mt-1 border border-stone-200 rounded-lg bg-white shadow-xl overflow-hidden">
          <div className="p-2 border-b border-stone-100">
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Rechercher une icône…"
              className="w-full p-1.5 text-sm border border-stone-200 rounded focus:ring-1 focus:ring-amber-400 outline-none"
              autoFocus
            />
          </div>
          <div className="grid grid-cols-8 gap-0.5 p-2 max-h-52 overflow-y-auto">
            {filtered.map(([name, IconComp]) => (
              <button
                key={name}
                type="button"
                title={name}
                onClick={() => { onChange(name); setOpen(false); setSearch(''); }}
                className={`p-1.5 rounded flex items-center justify-center hover:bg-amber-100 transition-colors ${value === name ? 'bg-amber-200 text-amber-800 ring-1 ring-amber-400' : 'text-stone-500'}`}
              >
                <IconComp size={15} />
              </button>
            ))}
            {filtered.length === 0 && (
              <p className="col-span-8 text-center text-stone-400 text-xs py-4 italic">Aucune icône trouvée.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function TabForgeTitres() {
  const { userProfile } = useUserContext();
  const {
    isSuperAdmin, badges, loading, form, setForm,
    handleSave, triggerDelete, confirmState, executeDelete, cancelDelete
  } = useForgeTitres(userProfile);

  const PreviewIcon = LucideIcons[form.icon_name] || HelpCircle;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

      {isSuperAdmin && (
        <div className="bg-white p-6 rounded-xl border border-amber-200 shadow-sm flex flex-col gap-4">
          <h3 className="font-serif font-bold text-amber-900 flex items-center gap-2 border-b border-amber-100 pb-3">
            <Hammer size={18} /> L'Enclume du Façonneur
          </h3>

          <div>
            <label className="text-[10px] font-bold text-stone-500 uppercase tracking-wider mb-1 block">Identifiant unique (BDD)</label>
            <input type="text" value={form.id} onChange={e => setForm({...form, id: e.target.value})} className="w-full p-2 border border-stone-300 rounded-lg bg-stone-50 text-sm focus:ring-2 focus:ring-amber-500 outline-none" placeholder="ex: tueur_de_smog" />
          </div>

          <div>
            <label className="text-[10px] font-bold text-stone-500 uppercase tracking-wider mb-1 block">Libellé affiché au joueur</label>
            <input type="text" value={form.label} onChange={e => setForm({...form, label: e.target.value})} className="w-full p-2 border border-stone-300 rounded-lg bg-stone-50 text-sm focus:ring-2 focus:ring-amber-500 outline-none" placeholder="ex: Tueur de Smog" />
          </div>

          <div>
            <label className="text-[10px] font-bold text-stone-500 uppercase tracking-wider mb-1 block">Icône Lucide</label>
            <IconPicker value={form.icon_name} onChange={name => setForm({...form, icon_name: name})} />
          </div>

          <div>
            <label className="text-[10px] font-bold text-stone-500 uppercase tracking-wider mb-1 block">Couleurs Tailwind (Classes)</label>
            <input type="text" value={form.color_classes} onChange={e => setForm({...form, color_classes: e.target.value})} className="w-full p-2 border border-stone-300 rounded-lg bg-stone-50 text-sm focus:ring-2 focus:ring-amber-500 outline-none" placeholder="ex: bg-red-100 text-red-800 border-red-300" />
          </div>

          <div>
            <label className="text-[10px] font-bold text-stone-500 uppercase tracking-wider mb-1 block">Description narrative</label>
            <textarea value={form.description} onChange={e => setForm({...form, description: e.target.value})} className="w-full p-2 border border-stone-300 rounded-lg bg-stone-50 text-sm focus:ring-2 focus:ring-amber-500 outline-none resize-none" rows="3" placeholder="Pour avoir vaincu la créature..." />
          </div>

          <div className="pt-4 border-t border-stone-100">
            <label className="text-[10px] font-bold text-stone-500 uppercase tracking-wider mb-3 block">Aperçu en direct :</label>
            <div className="p-4 bg-stone-100 rounded-lg border border-stone-200 flex justify-center items-center shadow-inner">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-sm font-bold shadow-sm transition-all ${form.color_classes}`}>
                <PreviewIcon size={16} /> {form.label || 'Titre de Test'}
              </span>
            </div>
          </div>

          <button onClick={handleSave} className="mt-2 w-full py-3 bg-amber-700 hover:bg-amber-700 text-white font-bold rounded-lg shadow-md transition-colors flex justify-center items-center gap-2">
            <Save size={18} /> Forger le Titre
          </button>
        </div>
      )}

      <div className={`${isSuperAdmin ? 'lg:col-span-2' : 'lg:col-span-3'} space-y-3 max-h-[700px] overflow-y-auto pr-2 custom-scrollbar`}>
        {loading ? (
          <div className="animate-pulse p-8 text-center text-stone-400 font-serif border-2 border-dashed border-stone-200 rounded-xl bg-white/50">Ouverture de la salle des trophées...</div>
        ) : badges.length === 0 ? (
          <div className="p-8 text-center text-stone-500 bg-white rounded-xl border border-stone-200 shadow-sm">La vitrine est vide pour le moment.</div>
        ) : (
          badges.map(b => {
            const BIcon = LucideIcons[b.icon_name] || HelpCircle;
            return (
              <div key={b.id} className="bg-white p-4 rounded-xl border border-stone-200 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 shadow-sm hover:shadow-md transition-shadow group">
                <div>
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-xs font-bold ${b.color_classes}`}>
                    <BIcon size={14} /> {b.label}
                  </span>
                  {isSuperAdmin && <div className="text-[10px] text-stone-400 mt-2 font-mono uppercase tracking-widest">ID: {b.id}</div>}
                  {b.description && <p className="text-sm text-stone-600 mt-1 italic leading-relaxed">"{b.description}"</p>}
                </div>

                {isSuperAdmin && (
                  <div className="flex gap-2 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={() => setForm(b)} className="p-2 text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-800 rounded-lg transition-colors shadow-sm" title="Modifier le design" aria-label="Modifier le design de ce titre"><Edit size={16}/></button>
                    <button onClick={() => triggerDelete(b.id)} className="p-2 text-red-600 bg-red-50 hover:bg-red-100 hover:text-red-800 rounded-lg transition-colors shadow-sm" title="Détruire le titre" aria-label="Détruire ce titre"><Trash2 size={16}/></button>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      <ConfirmModal
        isOpen={confirmState.isOpen}
        title="Détruire le Titre"
        message="Voulez-vous vraiment détruire ce titre des archives ? Il sera retiré à tous les Héritiers qui le possèdent."
        onConfirm={executeDelete}
        onCancel={cancelDelete}
        confirmText="Oui, le détruire"
      />

    </div>
  );
}
