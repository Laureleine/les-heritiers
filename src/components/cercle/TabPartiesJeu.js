// src/components/cercle/TabPartiesJeu.js
import React, { useState, useMemo } from 'react';
import { BookOpen, Plus, Edit, Trash2, Sparkles, Globe, EyeOff, Calendar, Users, ChevronDown, ChevronUp, Loader } from '../../config/icons';
import { useSessionsJeu } from '../../hooks/useSessionsJeu';
import SessionForm from './SessionForm';
import ConfirmModal from '../ConfirmModal';
import OmbrePanel from './OmbrePanel';
import { supabase } from '../../config/supabase';
import { showInAppNotification, translateError } from '../../utils/SystemeServices';

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function TabPartiesJeu({ cercleId, userId, isDocte, activeMembers }) {
  const { sessions, loading, createSession, updateSession, deleteSession, togglePublic } = useSessionsJeu(cercleId, userId);

  const [showForm, setShowForm]         = useState(false);
  const [editSession, setEditSession]   = useState(null);
  const [expandedId, setExpandedId]     = useState(null);
  const [confirmDel, setConfirmDel]     = useState(null);
  const [ombrePanel, setOmbrePanel]     = useState(null); // { characterId, characterNom, sessionId, sessionTitre }
  const [currentOmbre, setCurrentOmbre] = useState(null);

  const openOmbrePanel = async (characterId, characterNom, sessionId, sessionTitre) => {
    setOmbrePanel({ characterId, characterNom, sessionId, sessionTitre });
    const { data } = await supabase
      .from('ombre_consequences')
      .select('*')
      .eq('character_id', characterId)
      .eq('session_id', sessionId)
      .maybeSingle();
    setCurrentOmbre(data || null);
  };

  const closeOmbrePanel = () => { setOmbrePanel(null); setCurrentOmbre(null); };

  const handleAddOmbre = async (contenu) => {
    if (!ombrePanel) return false;
    try {
      const { data, error } = await supabase
        .from('ombre_consequences')
        .insert([{ character_id: ombrePanel.characterId, cercle_id: cercleId, session_id: ombrePanel.sessionId, contenu }])
        .select().single();
      if (error) throw error;
      setCurrentOmbre(data);
      showInAppNotification('Conséquence de l\'Ombre consignée.', 'success');
      return true;
    } catch (err) {
      showInAppNotification('Erreur : ' + translateError(err), 'error');
      return false;
    }
  };

  const handleUpdateOmbre = async (id, contenu) => {
    try {
      const { data, error } = await supabase.from('ombre_consequences').update({ contenu }).eq('id', id).select().single();
      if (error) throw error;
      setCurrentOmbre(data);
      showInAppNotification('Conséquence mise à jour.', 'success');
      return true;
    } catch (err) {
      showInAppNotification('Erreur : ' + translateError(err), 'error');
      return false;
    }
  };

  const handleRevealOmbre = async (id) => {
    try {
      const { error } = await supabase.rpc('reveal_ombre_consequence', { p_consequence_id: id });
      if (error) throw error;
      setCurrentOmbre(prev => ({ ...prev, est_revelee: true }));
      showInAppNotification('Conséquence révélée — le Joueur en est informé via le Télégraphe.', 'success');
      return true;
    } catch (err) {
      showInAppNotification('Erreur : ' + translateError(err), 'error');
      return false;
    }
  };

  const handleDeleteOmbre = async (id) => {
    try {
      const { error } = await supabase.from('ombre_consequences').delete().eq('id', id);
      if (error) throw error;
      setCurrentOmbre(null);
    } catch (err) {
      showInAppNotification('Erreur : ' + translateError(err), 'error');
    }
  };

  // Lookup character_id → { nom, username, portraitUrl }
  const charById = useMemo(() => {
    const map = {};
    activeMembers.forEach(m => {
      if (m.characters?.id) {
        map[m.characters.id] = {
          nom:      m.characters.nom,
          username: m.profiles?.username || '',
          portrait: m.characters.portrait_masked_url || m.characters.portrait_unmasked_url || null,
        };
      }
    });
    return map;
  }, [activeMembers]);

  const canEdit = (s) => s.created_by === userId || isDocte;

  const handleSave = async (formData, presents) => {
    if (editSession) {
      await updateSession(editSession.id, formData, presents, editSession);
    } else {
      await createSession(formData, presents);
    }
    setShowForm(false);
    setEditSession(null);
  };

  const openEdit = (s) => { setEditSession(s); setShowForm(true); };
  const openCreate = () => { setEditSession(null); setShowForm(true); };

  return (
    <div className="space-y-4">

      {/* ── Barre d'action ── */}
      <div className="flex justify-between items-center">
        <h3 className="font-serif font-bold text-stone-700 flex items-center gap-2 text-base">
          <BookOpen size={16} className="text-amber-600" />
          Historique des parties
        </h3>
        <button
          onClick={openCreate}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-700 hover:bg-amber-800 text-white text-xs font-bold rounded-lg transition-colors shadow-sm"
        >
          <Plus size={14} /> Nouvelle partie
        </button>
      </div>

      {/* ── Contenu ── */}
      {loading ? (
        <div className="flex justify-center py-10 text-stone-400">
          <Loader size={24} className="animate-spin" />
        </div>
      ) : sessions.length === 0 ? (
        <div className="text-center py-14 text-stone-400 space-y-2">
          <BookOpen size={36} className="mx-auto opacity-25" />
          <p className="text-sm font-serif italic">Aucune partie encore consignée dans le grimoire.</p>
          <button
            onClick={openCreate}
            className="mt-2 text-amber-700 hover:text-amber-900 text-xs font-bold underline underline-offset-2 transition-colors"
          >
            Enregistrer la première partie
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {sessions.map(s => {
            const presentsOui = (s.session_presents || []).filter(p => p.present);
            const isExpanded  = expandedId === s.id;
            const hasResume   = !!s.resume?.trim();

            return (
              <div key={s.id} className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden">

                {/* ── En-tête de la carte ── */}
                <div className="px-4 py-3 flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[11px] text-stone-400 font-bold flex items-center gap-1">
                        <Calendar size={11} /> {formatDate(s.date_partie)}
                      </span>
                      {s.xp_distribue > 0 && (
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 ${
                          s.xp_attribue
                            ? 'bg-amber-100 text-amber-800 border border-amber-200'
                            : 'bg-stone-100 text-stone-500 border border-stone-200'
                        }`}>
                          <Sparkles size={10} />
                          {s.xp_distribue} XP{s.xp_attribue ? ' distribués' : ' (en attente)'}
                        </span>
                      )}
                      {isDocte && (
                        <button
                          onClick={() => togglePublic(s.id, s.is_public)}
                          title={s.is_public ? 'Rendre privée' : 'Rendre publique'}
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 border transition-colors ${
                            s.is_public
                              ? 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100'
                              : 'bg-stone-50 text-stone-400 border-stone-200 hover:bg-stone-100'
                          }`}
                        >
                          {s.is_public ? <Globe size={10} /> : <EyeOff size={10} />}
                          {s.is_public ? 'Publique' : 'Privée'}
                        </button>
                      )}
                    </div>

                    <h4 className="font-serif font-bold text-amber-900 text-base mt-0.5 truncate">
                      {s.titre}
                    </h4>

                    {/* ── Présents ── */}
                    {presentsOui.length > 0 && (
                      <div className="flex items-center gap-1.5 mt-2 flex-wrap">
                        <Users size={12} className="text-stone-400 shrink-0" />
                        {presentsOui.map(p => {
                          const info = charById[p.character_id];
                          return (
                            <span
                              key={p.character_id}
                              title={info ? `${info.nom} (${info.username})` : 'Héritier inconnu'}
                              className="w-7 h-7 rounded-full bg-amber-100 border-2 border-white text-amber-800 text-xs font-bold font-serif flex items-center justify-center shadow-sm overflow-hidden"
                            >
                              {info?.portrait ? (
                                <img src={info.portrait} alt={info.nom} className="w-full h-full object-cover" />
                              ) : (
                                (info?.nom?.charAt(0) || '?')
                              )}
                            </span>
                          );
                        })}
                        <span className="text-[11px] text-stone-400">
                          {presentsOui.length} présent{presentsOui.length > 1 ? 's' : ''}
                        </span>
                      </div>
                    )}

                    {/* ── Zone Ombre (Docte only) ── */}
                    {isDocte && presentsOui.length > 0 && (
                      <div className="mt-2 pt-2 border-t border-stone-100">
                        <p className="text-[10px] text-stone-400 uppercase tracking-wider font-bold mb-1.5">
                          🌑 Conséquences de l'Ombre
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {presentsOui.map(p => {
                            const info = charById[p.character_id];
                            if (!info) return null;
                            return (
                              <button
                                key={p.character_id}
                                onClick={() => openOmbrePanel(p.character_id, info.nom, s.id, s.titre)}
                                className="text-[10px] px-2 py-1 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-600 font-bold transition-colors"
                              >
                                🌑 {info.nom || info.username}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* ── Actions ── */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    {hasResume && (
                      <button
                        onClick={() => setExpandedId(isExpanded ? null : s.id)}
                        className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
                        title={isExpanded ? 'Replier' : 'Lire le résumé'}
                      >
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>
                    )}
                    {canEdit(s) && (
                      <>
                        <button
                          onClick={() => openEdit(s)}
                          className="p-1.5 rounded-lg text-stone-400 hover:text-amber-700 hover:bg-amber-50 transition-colors"
                          title="Modifier"
                        >
                          <Edit size={15} />
                        </button>
                        <button
                          onClick={() => setConfirmDel(s)}
                          className="p-1.5 rounded-lg text-stone-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                          title="Supprimer"
                        >
                          <Trash2 size={15} />
                        </button>
                      </>
                    )}
                  </div>
                </div>

                {/* ── Résumé (dépliable) ── */}
                {hasResume && isExpanded && (
                  <div className="px-4 pb-4 pt-1 border-t border-stone-100">
                    <p className="text-sm text-stone-600 font-serif leading-relaxed whitespace-pre-wrap">{s.resume}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* ── Modale formulaire ── */}
      {showForm && (
        <SessionForm
          onClose={() => { setShowForm(false); setEditSession(null); }}
          onSave={handleSave}
          activeMembers={activeMembers}
          editSession={editSession}
          isDocte={isDocte}
        />
      )}

      {/* ── Confirmation suppression ── */}
      <ConfirmModal
        isOpen={!!confirmDel}
        title="Supprimer cette partie ?"
        message={`La session « ${confirmDel?.titre} » sera définitivement effacée. Les XP déjà distribués ne seront pas retirés.`}
        confirmText="Oui, supprimer"
        onConfirm={() => { deleteSession(confirmDel.id); setConfirmDel(null); }}
        onCancel={() => setConfirmDel(null)}
      />

      {/* ── OmbrePanel ── */}
      {ombrePanel && (
        <OmbrePanel
          characterNom={ombrePanel.characterNom}
          sessionTitre={ombrePanel.sessionTitre}
          existingOmbre={currentOmbre}
          onAdd={handleAddOmbre}
          onUpdate={handleUpdateOmbre}
          onReveal={handleRevealOmbre}
          onDelete={handleDeleteOmbre}
          onClose={closeOmbrePanel}
        />
      )}
    </div>
  );
}
