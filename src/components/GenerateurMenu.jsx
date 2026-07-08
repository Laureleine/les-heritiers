import React, { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, UtensilsCrossed, Edit, Clock, CheckCircle, XCircle } from '../config/icons';
import { useMenuPlats } from '../hooks/useMenuPlats';
import { useMenuGenerateur } from '../hooks/useMenuGenerateur';
import { useMenuSauvegardes } from '../hooks/useMenuSauvegardes';
import { isAdmin } from '../utils/authRoles';
import { supabase } from '../config/supabase';
import MenuForm from './menu/MenuForm';
import MenuAffichage from './menu/MenuAffichage';
import ProposerPlat from './menu/ProposerPlat';

const PARAMS_INITIAUX = {
  saison: 'automne',
  typeRepas: 'diner',
  niveauFinancier: 'bourgeois',
  nbConvives: 6,
  niveauCuisinier: 4,
};

const CATEGORIE_LABELS = {
  boisson_chaude: 'Boisson chaude', viennoiserie: 'Viennoiserie', potage: 'Potage',
  hors_d_oeuvre: "Hors-d'œuvre", poisson: 'Poisson', viande: 'Viande', volaille: 'Volaille',
  gibier: 'Gibier', abats: 'Abats', legume: 'Légume', entremets: 'Entremets',
  fromage: 'Fromage', dessert: 'Dessert', patisserie: 'Pâtisserie',
};

function TablesTab({ platsApprouves, mesPropositions, session, userProfile, proposer, ajouterDirectement, submitting }) {
  const [entryToEdit, setEntryToEdit] = useState(null);
  const canDirectSave = !!userProfile && isAdmin(userProfile);

  const parCategorie = {};
  for (const plat of platsApprouves) {
    if (!parCategorie[plat.categorie]) parCategorie[plat.categorie] = [];
    parCategorie[plat.categorie].push(plat);
  }
  const categories = Object.keys(parCategorie).sort();

  return (
    <div className="space-y-6">
      {categories.length === 0 && (
        <p className="text-sm text-stone-400 font-serif text-center py-6">Aucun plat approuvé pour l'instant.</p>
      )}
      {categories.map((cat) => (
        <div key={cat} className="bg-white rounded-xl border border-stone-200 overflow-hidden">
          <p className="px-4 py-2.5 bg-stone-50 border-b border-stone-100 text-xs font-bold text-stone-500 uppercase tracking-wider">
            {CATEGORIE_LABELS[cat] || cat}
          </p>
          <div className="divide-y divide-stone-100">
            {parCategorie[cat].map((plat) => (
              <div key={plat.id} className="flex items-start justify-between gap-3 px-4 py-2.5">
                <div className="min-w-0">
                  <p className="font-serif text-stone-800 text-sm">{plat.nom}</p>
                  <p className="text-xs text-stone-400">{(plat.niveaux || []).join(', ')} · {(plat.saisons || []).join(', ')} · difficulté {plat.difficulte}/5</p>
                </div>
                {canDirectSave && (
                  <button
                    onClick={() => setEntryToEdit(plat)}
                    className="flex-shrink-0 p-1.5 rounded-lg text-stone-400 hover:text-amber-700 hover:bg-amber-50 transition-colors"
                    title="Modifier"
                  >
                    <Edit size={14} />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      <ProposerPlat
        session={session}
        userProfile={userProfile}
        mesPropositions={mesPropositions}
        proposer={proposer}
        ajouterDirectement={ajouterDirectement}
        submitting={submitting}
        entryToEdit={entryToEdit}
        onCancelEdit={() => setEntryToEdit(null)}
      />
    </div>
  );
}

const STATUS_TABS = [
  { id: 'pending', label: 'En attente', icon: Clock, color: 'text-amber-600 border-amber-500' },
  { id: 'approved', label: 'Approuvés', icon: CheckCircle, color: 'text-emerald-600 border-emerald-500' },
  { id: 'rejected', label: 'Refusés', icon: XCircle, color: 'text-red-600 border-red-500' },
];

function ValidationTab({ session, approuver, refuser }) {
  const [statusFilter, setStatusFilter] = useState('pending');
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [rejectReasonFor, setRejectReasonFor] = useState(null);
  const [rejectReason, setRejectReason] = useState('');
  const [profiles, setProfiles] = useState({});

  const load = useCallback(async () => {
    setLoading(true);
    const { data } = await supabase
      .from('menu_plats')
      .select('id, nom, categorie, niveaux, saisons, difficulte, status, reject_reason, created_by, created_at')
      .eq('status', statusFilter)
      .order('created_at', { ascending: statusFilter === 'pending' });
    setEntries(data || []);

    const ids = [...new Set((data || []).map((e) => e.created_by).filter(Boolean))];
    if (ids.length > 0) {
      const { data: profs } = await supabase.from('profiles').select('id, username').in('id', ids);
      if (profs) {
        const map = {};
        profs.forEach((p) => { map[p.id] = p.username; });
        setProfiles((prev) => ({ ...prev, ...map }));
      }
    }
    setLoading(false);
  }, [statusFilter]);

  useEffect(() => { load(); }, [load]);

  const handleApprouver = async (entry) => { await approuver(entry); load(); };
  const handleRejeter = async (entry, motif) => {
    await refuser(entry, motif);
    setRejectReasonFor(null);
    setRejectReason('');
    load();
  };

  return (
    <div className="space-y-5">
      <div className="flex gap-4 border-b border-stone-200">
        {STATUS_TABS.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setStatusFilter(id)}
            className={`pb-2.5 text-sm font-bold uppercase tracking-wide flex items-center gap-1.5 border-b-2 transition-colors ${statusFilter === id ? STATUS_TABS.find((t) => t.id === id).color : 'text-stone-400 border-transparent hover:text-stone-600'}`}
          >
            <Icon size={15} /> {label}
          </button>
        ))}
      </div>

      {loading && <p className="text-sm text-stone-400 font-serif">Chargement…</p>}
      {!loading && entries.length === 0 && (
        <p className="text-sm text-stone-400 font-serif text-center py-8">Aucun plat dans cette catégorie.</p>
      )}

      {!loading && entries.length > 0 && (
        <div className="space-y-2">
          {entries.map((entry) => (
            <div key={entry.id} className="bg-white border border-stone-200 rounded-xl px-4 py-3 flex items-start gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                    {CATEGORIE_LABELS[entry.categorie]} · difficulté {entry.difficulte}/5
                  </span>
                  {profiles[entry.created_by] && (
                    <span className="text-xs text-stone-400">— {profiles[entry.created_by]}</span>
                  )}
                </div>
                <p className="font-serif text-stone-800 mt-0.5">{entry.nom}</p>
                <p className="text-xs text-stone-400 mt-0.5">
                  {(entry.niveaux || []).join(', ')} · {(entry.saisons || []).join(', ')}
                </p>
                {entry.status === 'rejected' && entry.reject_reason && (
                  <p className="text-xs text-red-500 mt-1">{entry.reject_reason}</p>
                )}
              </div>

              {statusFilter === 'pending' && (
                <div className="flex flex-col gap-2 flex-shrink-0">
                  <button
                    onClick={() => handleApprouver(entry)}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors"
                  >
                    <CheckCircle size={13} /> Approuver
                  </button>

                  {rejectReasonFor === entry.id ? (
                    <div className="flex flex-col gap-1.5">
                      <input
                        autoFocus
                        value={rejectReason}
                        onChange={(e) => setRejectReason(e.target.value)}
                        placeholder="Raison (optionnel)"
                        className="text-xs border border-stone-200 rounded px-2 py-1 outline-none focus:border-red-300"
                      />
                      <div className="flex gap-1">
                        <button
                          onClick={() => handleRejeter(entry, rejectReason)}
                          className="flex-1 text-xs font-bold bg-red-600 hover:bg-red-700 text-white rounded px-2 py-1 transition-colors"
                        >
                          Confirmer
                        </button>
                        <button onClick={() => setRejectReasonFor(null)} className="text-xs text-stone-400 hover:text-stone-600 px-2">
                          ✕
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => setRejectReasonFor(entry.id)}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-stone-100 hover:bg-red-50 text-red-600 border border-stone-200 hover:border-red-200 rounded-lg transition-colors"
                    >
                      <XCircle size={13} /> Refuser
                    </button>
                  )}
                </div>
              )}

              {statusFilter === 'approved' && (
                <button
                  onClick={() => handleRejeter(entry, 'Révision après approbation')}
                  className="flex-shrink-0 text-xs text-stone-300 hover:text-red-500 transition-colors px-2"
                  title="Retirer l'approbation"
                >
                  <XCircle size={16} />
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function GenerateurMenu({ onBack, userProfile, session }) {
  const [activeTab, setActiveTab] = useState('generateur');
  const [params, setParams] = useState(PARAMS_INITIAUX);
  const [saveMsg, setSaveMsg] = useState(null);

  const { platsApprouves, mesPropositions, submitting, proposer, ajouterDirectement, approuver, refuser } = useMenuPlats(session);
  const { menu, loading, erreur, generer, rerollGlobal, rerollUnService, rerollUnPlat, tenterLeSort } = useMenuGenerateur(platsApprouves);
  const { sauvegarder } = useMenuSauvegardes(session);

  const estGardien = !!userProfile && isAdmin(userProfile);

  const handleSauvegarder = async (titre) => {
    const { error } = await sauvegarder(titre, params, menu);
    setSaveMsg(error ? `Erreur : ${error.message}` : 'Menu sauvegardé !');
    setTimeout(() => setSaveMsg(null), 3000);
  };

  return (
    <div className="min-h-screen bg-[#f5f0e8]">
      <header className="sticky top-0 z-40 bg-[#1a0f0a] border-b border-amber-900/30 shadow-lg print:hidden">
        <div className="max-w-5xl mx-auto px-4 py-2.5 flex items-center justify-between gap-2 min-w-0">
          <div className="flex items-center gap-2 min-w-0">
            <button onClick={onBack} className="flex-shrink-0 p-1.5 rounded-lg text-amber-200/70 hover:text-amber-100 hover:bg-white/10 transition-all">
              <ArrowLeft size={18} />
            </button>
            <UtensilsCrossed size={18} className="flex-shrink-0 text-amber-400" />
            <h1 className="font-serif font-bold text-amber-100 text-base truncate">Générateur de Menu</h1>
          </div>
          <div className="flex flex-shrink-0 gap-1">
            {[
              { id: 'generateur', label: 'Générateur' },
              { id: 'tables', label: 'Tables' },
              ...(estGardien ? [{ id: 'validation', label: 'Validation' }] : []),
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 text-xs font-bold font-serif rounded-lg transition-colors ${
                  activeTab === tab.id ? 'bg-amber-700/40 text-amber-200' : 'text-amber-200/50 hover:text-amber-200/80 hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-6">
        {activeTab === 'tables' && (
          <TablesTab
            platsApprouves={platsApprouves}
            mesPropositions={mesPropositions}
            session={session}
            userProfile={userProfile}
            proposer={proposer}
            ajouterDirectement={ajouterDirectement}
            submitting={submitting}
          />
        )}

        {activeTab === 'validation' && estGardien && (
          <ValidationTab session={session} approuver={approuver} refuser={refuser} />
        )}

        {activeTab === 'generateur' && (
          <>
            {saveMsg && (
              <p className="text-sm font-serif text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2 mb-4 print:hidden">
                {saveMsg}
              </p>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-5 print:block">
              <div className="print:hidden">
                <MenuForm params={params} onChange={setParams} onGenerer={() => generer(params)} loading={loading} />
              </div>

              <MenuAffichage
                menu={menu}
                loading={loading}
                erreur={erreur}
                onRerollGlobal={rerollGlobal}
                onRerollService={rerollUnService}
                onRerollPlat={rerollUnPlat}
                resoudre={tenterLeSort}
                onSauvegarder={handleSauvegarder}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
