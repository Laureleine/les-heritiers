// src/components/cercle/TabChroniques.js
import React, { useState, useEffect, useMemo } from 'react';
import { BookMarked, Plus, Edit, Trash2, ChevronDown, ChevronUp, Save, X, Calendar, Sparkles, Loader, AlertTriangle } from '../../config/icons';
import { useChroniques } from '../../hooks/useChroniques';
import OmbrePanel from './OmbrePanel';
import { EmptyState } from '../ui/EmptyState';

function formatDate(d) {
  if (!d) return '';
  return new Date(d + 'T00:00:00').toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}

const emptyForm = { titre: '', date_session: new Date().toISOString().slice(0, 10), memoire_des_faits: '', cicatrices_et_honneurs: '', xp_acquis: 0 };

export default function TabChroniques({ characterId, characterNom, isOwner, isDocte, cercleId }) {
  const {
    chroniques, ombres, loading, load,
    createChronique, updateChronique, deleteChronique,
    addOmbre, updateOmbre, revealOmbre, deleteOmbre,
  } = useChroniques(characterId);

  const [form, setForm] = useState(null);              // null = fermé, {} = création, {...} = édition
  const [editId, setEditId] = useState(null);
  const [saving, setSaving] = useState(false);
  const [expandedId, setExpandedId] = useState(null);
  const [activeInnerTab, setActiveInnerTab] = useState({});  // chroniqueId → 'memoire'|'cicatrices'|'indices'
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [ombrePanel, setOmbrePanel] = useState(null);  // { characterId, sessionId, sessionTitre, existingOmbre }

  useEffect(() => { load(); }, [load]);

  // Ombres groupées par session_id (pour afficher dans les chroniques)
  const ombresBySession = useMemo(() => {
    const map = {};
    ombres.forEach(o => {
      const key = o.session_id || '__standalone__';
      if (!map[key]) map[key] = [];
      map[key].push(o);
    });
    return map;
  }, [ombres]);

  const openCreate = () => { setForm(emptyForm); setEditId(null); };
  const openEdit = (c) => {
    setForm({
      titre: c.titre,
      date_session: c.date_session,
      memoire_des_faits: c.memoire_des_faits || '',
      cicatrices_et_honneurs: c.cicatrices_et_honneurs || '',
      xp_acquis: c.xp_acquis || 0,
    });
    setEditId(c.id);
  };

  const handleSave = async () => {
    if (!form?.titre?.trim()) return;
    setSaving(true);
    const ok = editId
      ? await updateChronique(editId, form)
      : await createChronique(form);
    setSaving(false);
    if (ok) { setForm(null); setEditId(null); }
  };

  const innerTab = (id) => activeInnerTab[id] || 'memoire';
  const setInnerTab = (id, tab) => setActiveInnerTab(prev => ({ ...prev, [id]: tab }));

  const handleAddOmbre = async (contenu) => {
    if (!ombrePanel) return false;
    return addOmbre({ cercleId, sessionId: ombrePanel.sessionId || null, contenu });
  };

  const handleUpdateOmbre = async (id, contenu) => updateOmbre(id, contenu);
  const handleRevealOmbre = async (id) => revealOmbre(id);
  const handleDeleteOmbre = async (id) => deleteOmbre(id);

  if (loading && !chroniques.length) {
    return <EmptyState icon={BookMarked} message="Déchiffrage des annales…" pulse />;
  }

  // Ombres "en attente" (session_id ne correspond à aucune chronique)
  const chroniqueSessionIds = new Set(chroniques.map(c => c.session_id).filter(Boolean));
  const ombresOrphelines = ombres.filter(o => {
    if (!o.session_id) return true;
    return !chroniqueSessionIds.has(o.session_id);
  });

  return (
    <div className="space-y-4">

      {/* Barre d'action */}
      <div className="flex justify-between items-center">
        <h3 className="font-serif font-bold text-stone-700 text-base flex items-center gap-2">
          <BookMarked size={16} className="text-amber-600" />
          Chroniques d'Héritage
        </h3>
        {isOwner && (
          <button
            onClick={openCreate}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-700 hover:bg-amber-800 text-white text-xs font-bold rounded-lg transition-colors shadow-sm"
          >
            <Plus size={14} /> Nouvelle chronique
          </button>
        )}
      </div>

      {/* Ombres orphelines (en attente d'une chronique) */}
      {ombresOrphelines.length > 0 && (
        <div className="space-y-1">
          {ombresOrphelines.map(o => (
            <OmbreBadge
              key={o.id} ombre={o} isDocte={isDocte}
              onEdit={() => setOmbrePanel({ sessionId: o.session_id, sessionTitre: o.sessions_jeu?.titre, existingOmbre: o })}
            />
          ))}
        </div>
      )}

      {/* Formulaire création / édition */}
      {form !== null && (
        <ChroniqueForm
          form={form} setForm={setForm}
          saving={saving} onSave={handleSave}
          onCancel={() => { setForm(null); setEditId(null); }}
          isEdit={!!editId}
        />
      )}

      {/* Liste des chroniques */}
      {chroniques.length === 0 && !form ? (
        <EmptyState icon={BookMarked} message={isOwner ? "Aucune chronique — vos aventures attendent d'être consignées." : 'Aucune chronique consignée.'} />
      ) : (
        <div className="space-y-3">
          {chroniques.map(c => {
            const isExpanded = expandedId === c.id;
            const tab = innerTab(c.id);
            const ombresSession = c.session_id ? (ombresBySession[c.session_id] || []) : [];

            return (
              <div key={c.id} className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden">

                {/* En-tête */}
                <div
                  className="px-4 py-3 flex items-start justify-between gap-3 cursor-pointer hover:bg-stone-50 transition-colors"
                  onClick={() => setExpandedId(isExpanded ? null : c.id)}
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[11px] text-stone-400 font-bold flex items-center gap-1">
                        <Calendar size={11} /> {formatDate(c.date_session)}
                      </span>
                      {c.xp_acquis > 0 && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200 flex items-center gap-1">
                          <Sparkles size={10} /> {c.xp_acquis} XP
                        </span>
                      )}
                      {c.sessions_jeu && (
                        <span className="text-[10px] text-stone-400 italic">
                          · {c.sessions_jeu.titre}
                        </span>
                      )}
                    </div>
                    <h4 className="font-serif font-bold text-amber-900 text-base mt-0.5 truncate">
                      {c.titre}
                    </h4>
                    {/* Ombres liées à cette chronique */}
                    {ombresSession.map(o => (
                      <OmbreBadge
                        key={o.id} ombre={o} isDocte={isDocte}
                        onEdit={(e) => { e.stopPropagation(); setOmbrePanel({ sessionId: o.session_id, sessionTitre: o.sessions_jeu?.titre, existingOmbre: o }); }}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-1 shrink-0">
                    {isOwner && !isExpanded && (
                      <button
                        onClick={(e) => { e.stopPropagation(); openEdit(c); }}
                        className="p-1.5 rounded-lg text-stone-300 hover:text-amber-700 hover:bg-amber-50 transition-colors"
                        title="Modifier"
                      >
                        <Edit size={14} />
                      </button>
                    )}
                    {isDocte && cercleId && (
                      <button
                        onClick={(e) => { e.stopPropagation(); setOmbrePanel({ sessionId: c.session_id, sessionTitre: c.sessions_jeu?.titre, existingOmbre: ombresSession[0] || null }); }}
                        className="p-1.5 rounded-lg text-stone-300 hover:text-stone-700 hover:bg-stone-100 transition-colors"
                        title="Conséquence de l'Ombre"
                      >
                        🌑
                      </button>
                    )}
                    {isExpanded ? <ChevronUp size={16} className="text-stone-400" /> : <ChevronDown size={16} className="text-stone-400" />}
                  </div>
                </div>

                {/* Contenu déplié */}
                {isExpanded && (
                  <div className="border-t border-stone-100">
                    {/* Sous-onglets */}
                    <div className="flex border-b border-stone-100 bg-stone-50">
                      {['memoire', 'cicatrices', 'indices'].map(t => (
                        <button
                          key={t}
                          onClick={() => setInnerTab(c.id, t)}
                          className={`flex-1 py-2 text-[11px] font-bold uppercase tracking-wider transition-colors ${
                            tab === t
                              ? 'bg-white text-amber-900 border-t-2 border-t-amber-500'
                              : 'text-stone-400 hover:text-stone-600'
                          }`}
                        >
                          {t === 'memoire' ? 'Mémoire des faits'
                            : t === 'cicatrices' ? 'Cicatrices & Honneurs'
                            : 'Indices & Vérités'}
                        </button>
                      ))}
                    </div>

                    <div className="px-4 py-3 min-h-[80px]">
                      {tab === 'memoire' && (
                        c.memoire_des_faits
                          ? <p className="text-sm text-stone-700 font-serif leading-relaxed whitespace-pre-wrap">{c.memoire_des_faits}</p>
                          : <p className="text-sm text-stone-400 italic">Aucun souvenir consigné.</p>
                      )}
                      {tab === 'cicatrices' && (
                        c.cicatrices_et_honneurs
                          ? <p className="text-sm text-stone-700 font-serif leading-relaxed whitespace-pre-wrap">{c.cicatrices_et_honneurs}</p>
                          : <p className="text-sm text-stone-400 italic">Aucune cicatrice ni honneur.</p>
                      )}
                      {tab === 'indices' && (
                        <p className="text-sm text-stone-400 italic text-center py-4">
                          Les Indices & Vérités seront disponibles dans une prochaine mise à jour.
                        </p>
                      )}
                    </div>

                    {/* Actions pied de carte */}
                    {isOwner && (
                      <div className="px-4 pb-3 pt-1 border-t border-stone-100 flex gap-2">
                        <button
                          onClick={() => openEdit(c)}
                          className="text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100 transition-colors"
                        >
                          <Edit size={12} /> Modifier
                        </button>
                        <button
                          onClick={() => setDeleteConfirm(c)}
                          className="text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 bg-red-50 text-red-700 border border-red-200 hover:bg-red-100 transition-colors"
                        >
                          <Trash2 size={12} /> Supprimer
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Modal suppression */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/60 backdrop-blur-sm p-4">
          <div className="bg-[#fdfbf7] max-w-sm w-full rounded-2xl shadow-2xl border-4 border-red-200 overflow-hidden">
            <div className="bg-red-700 text-white p-4 flex justify-between items-center">
              <h3 className="font-serif font-bold flex items-center gap-2"><AlertTriangle size={18} /> Confirmer</h3>
              <button onClick={() => setDeleteConfirm(null)}><X size={18} /></button>
            </div>
            <div className="p-5 space-y-4">
              <p className="font-serif text-stone-700 text-center">
                Supprimer la chronique <strong>« {deleteConfirm.titre} »</strong> ?
              </p>
              <p className="text-xs text-stone-400 text-center italic">Cette action est irréversible.</p>
              <div className="flex gap-3">
                <button onClick={() => setDeleteConfirm(null)} className="flex-1 py-2.5 bg-stone-100 text-stone-700 rounded-xl font-bold">Annuler</button>
                <button
                  onClick={async () => { await deleteChronique(deleteConfirm.id); setDeleteConfirm(null); }}
                  className="flex-1 py-2.5 bg-red-700 hover:bg-red-800 text-white rounded-xl font-bold flex items-center justify-center gap-2"
                >
                  <Trash2 size={16} /> Supprimer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* OmbrePanel */}
      {ombrePanel && (
        <OmbrePanel
          characterNom={characterNom}
          sessionTitre={ombrePanel.sessionTitre}
          existingOmbre={ombrePanel.existingOmbre}
          onAdd={handleAddOmbre}
          onUpdate={handleUpdateOmbre}
          onReveal={handleRevealOmbre}
          onDelete={handleDeleteOmbre}
          onClose={() => setOmbrePanel(null)}
        />
      )}
    </div>
  );
}

// ── Sous-composant : formulaire de chronique ──────────────────────────────────
function ChroniqueForm({ form, setForm, saving, onSave, onCancel, isEdit }) {
  const set = (key, val) => setForm(prev => ({ ...prev, [key]: val }));

  return (
    <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-4 space-y-3">
      <h4 className="font-serif font-bold text-amber-900 text-sm">
        {isEdit ? 'Modifier la chronique' : 'Nouvelle chronique'}
      </h4>

      <div className="flex gap-3">
        <div className="flex-1">
          <label className="block text-[10px] font-bold text-amber-800 uppercase tracking-wider mb-1">Titre *</label>
          <input
            autoFocus type="text" value={form.titre}
            onChange={e => set('titre', e.target.value)}
            className="w-full p-2.5 border-2 border-amber-200 rounded-lg text-sm font-bold text-stone-800 bg-white outline-none focus:border-amber-500"
            placeholder="Une nuit sous les étoiles…"
          />
        </div>
        <div className="w-36">
          <label className="block text-[10px] font-bold text-amber-800 uppercase tracking-wider mb-1">Date</label>
          <input
            type="date" value={form.date_session}
            onChange={e => set('date_session', e.target.value)}
            className="w-full p-2.5 border-2 border-amber-200 rounded-lg text-sm text-stone-700 bg-white outline-none focus:border-amber-500"
          />
        </div>
        <div className="w-20">
          <label className="block text-[10px] font-bold text-amber-800 uppercase tracking-wider mb-1">XP (mémo)</label>
          <input
            type="number" min="0" value={form.xp_acquis}
            onChange={e => set('xp_acquis', parseInt(e.target.value) || 0)}
            className="w-full p-2.5 border-2 border-amber-200 rounded-lg text-sm text-stone-700 bg-white outline-none focus:border-amber-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-[10px] font-bold text-amber-800 uppercase tracking-wider mb-1">Mémoire des faits</label>
        <textarea
          value={form.memoire_des_faits}
          onChange={e => set('memoire_des_faits', e.target.value)}
          rows={4}
          className="w-full p-2.5 border-2 border-amber-200 rounded-lg text-sm font-serif text-stone-700 bg-white resize-none outline-none focus:border-amber-500"
          placeholder="Ce qui s'est passé, les scènes mémorables…"
        />
      </div>

      <div>
        <label className="block text-[10px] font-bold text-amber-800 uppercase tracking-wider mb-1">Cicatrices & Honneurs</label>
        <textarea
          value={form.cicatrices_et_honneurs}
          onChange={e => set('cicatrices_et_honneurs', e.target.value)}
          rows={2}
          className="w-full p-2.5 border-2 border-amber-200 rounded-lg text-sm font-serif text-stone-700 bg-white resize-none outline-none focus:border-amber-500"
          placeholder="Blessures, dettes, titres gagnés…"
        />
      </div>

      <div className="flex gap-3 pt-1">
        <button onClick={onCancel} className="px-4 py-2 text-sm bg-white text-stone-600 border border-stone-200 rounded-xl font-bold hover:bg-stone-50 transition-colors">
          Annuler
        </button>
        <button
          onClick={onSave}
          disabled={saving || !form.titre?.trim()}
          className="flex-1 py-2 text-sm bg-amber-700 hover:bg-amber-800 text-white rounded-xl font-bold transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {saving ? <Loader size={14} className="animate-spin" /> : <Save size={14} />}
          {isEdit ? 'Enregistrer' : 'Graver la chronique'}
        </button>
      </div>
    </div>
  );
}

// ── Sous-composant : badge Ombre ──────────────────────────────────────────────
function OmbreBadge({ ombre, isDocte, onEdit }) {
  if (!ombre.est_revelee && !isDocte) {
    return (
      <div className="mt-1 inline-flex items-center gap-1 text-[10px] font-bold text-stone-400 bg-stone-100 border border-stone-200 px-2 py-0.5 rounded-full">
        🌑 Ombre scellée
      </div>
    );
  }

  if (ombre.est_revelee) {
    return (
      <div
        onClick={isDocte ? onEdit : undefined}
        className={`mt-1 text-[10px] bg-amber-50 border border-amber-200 rounded-lg px-3 py-1.5 text-stone-700 font-serif ${isDocte ? 'cursor-pointer hover:border-amber-400 transition-colors' : ''}`}
      >
        <span className="font-bold text-amber-800 text-[9px] uppercase tracking-wider block mb-0.5">🌑 Conséquence de l'Ombre</span>
        {ombre.contenu}
      </div>
    );
  }

  // Docte voit l'Ombre scellée avec option modifier/révéler
  return (
    <button
      onClick={onEdit}
      className="mt-1 inline-flex items-center gap-1 text-[10px] font-bold text-stone-500 bg-stone-100 border border-stone-300 hover:border-stone-400 px-2 py-0.5 rounded-full transition-colors"
    >
      🌑 Ombre scellée · modifier
    </button>
  );
}
