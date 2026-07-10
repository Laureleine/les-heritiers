// 1
import React from 'react';
import { iconMap, HelpCircle, Hammer, Save, Edit, Trash2 } from '../../config/icons';
import { useForgeTitres } from '../../hooks/useForgeTitres';
import { useUserContext } from '../../context/UserContext';
import ConfirmModal from '../ConfirmModal';

export default function TabForgeTitres() {
  const { userProfile } = useUserContext();
  const {
    isSuperAdmin,
    badges,
    loading,
    form,
    setForm,
    handleSave,
    triggerDelete,
    confirmState,
    executeDelete,
    cancelDelete
  } = useForgeTitres(userProfile);

  const PreviewIcon = iconMap[form.icon_name] || HelpCircle;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      {/* L'Atelier (Formulaire) - ✨ RÉSERVÉ AU SUPER ADMIN */}
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
            <label className="text-[10px] font-bold text-stone-500 uppercase tracking-wider mb-1 block">Icône Lucide (Nom exact)</label>
            <input type="text" value={form.icon_name} onChange={e => setForm({...form, icon_name: e.target.value})} className="w-full p-2 border border-stone-300 rounded-lg bg-stone-50 text-sm focus:ring-2 focus:ring-amber-500 outline-none" placeholder="ex: Skull" />
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

      {/* Le Registre (Liste) - ✨ VISIBLE PAR TOUS */}
      <div className={`${isSuperAdmin ? 'lg:col-span-2' : 'lg:col-span-3'} space-y-3 max-h-[700px] overflow-y-auto pr-2 custom-scrollbar`}>
        {loading ? (
          <div className="animate-pulse p-8 text-center text-stone-400 font-serif border-2 border-dashed border-stone-200 rounded-xl bg-white/50">Ouverture de la salle des trophées...</div>
        ) : badges.length === 0 ? (
          <div className="p-8 text-center text-stone-500 bg-white rounded-xl border border-stone-200 shadow-sm">La vitrine est vide pour le moment.</div>
        ) : (
          badges.map(b => {
            const BIcon = iconMap[b.icon_name] || HelpCircle;
            return (
              <div key={b.id} className="bg-white p-4 rounded-xl border border-stone-200 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 shadow-sm hover:shadow-md transition-shadow group">
                <div>
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-xs font-bold ${b.color_classes}`}>
                    <BIcon size={14} /> {b.label}
                  </span>
                  {isSuperAdmin && <div className="text-[10px] text-stone-400 mt-2 font-mono uppercase tracking-widest">ID: {b.id}</div>}
                  {b.description && <p className="text-sm text-stone-600 mt-1 italic leading-relaxed">"{b.description}"</p>}
                </div>

                {/* ✨ BOUTONS D'ACTION - RÉSERVÉS AU SUPER ADMIN */}
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

      {/* ✨ LA MODALE IMMERSIVE */}
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