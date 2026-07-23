// src/components/cercle/ActiveCercleView.js
import React, { useState } from 'react';
import { Shield, Users, X, LogOut, Eye, EyeOff, MessageCircle, Gift, Sparkles, BookOpen, Scroll } from '../../config/icons';
import { getXpState } from '../../utils/xpActions';
import TabPartiesJeu from './TabPartiesJeu';
import TabIndicesVerites from './TabIndicesVerites';
import TabCartesPerso from './TabCartesPerso';
import TabCompetences from './TabCompetences';
import { useCallback, useRef } from 'react';

const ActiveCercleView = React.memo(({ cercle, session, activeMembers, onDelete, onLeave, onViewCharacter, myCharacters = [], onUpdateMyCharacter, onDistributeXp, xpSubmitting }) => {
  const [xpDefault, setXpDefault] = useState(0);
  const [xpAmounts, setXpAmounts] = useState({});
  const [xpMotif, setXpMotif] = useState('');
  const [xpPanelOpen, setXpPanelOpen] = useState(false);
  const [subTab, setSubTab] = useState('table');
  const [xpModal, setXpModal] = useState(null); // { pendingXp, distributeXp, nextTab }
  const secretsXpRef = useRef({ pendingXp: 0, distributeXp: null });

  const handlePendingXpChange = useCallback((xp, fn) => {
    secretsXpRef.current = { pendingXp: xp, distributeXp: fn };
  }, []);

  const switchTab = useCallback((nextTab) => {
    const { pendingXp, distributeXp } = secretsXpRef.current;
    if (subTab === 'secrets' && nextTab !== 'secrets' && pendingXp > 0) {
      setXpModal({ pendingXp, distributeXp, nextTab });
      return;
    }
    setSubTab(nextTab);
  }, [subTab]);

  if (!cercle) return null;
  const isDocte       = cercle.docte_id === session.user.id;
  const userId        = session.user.id;
  const isAlsoMember  = isDocte && activeMembers.some(m => m.user_id === userId);

  const handleXpPreset = (amount) => {
    setXpDefault(amount);
    const map = {};
    activeMembers.forEach(m => { map[m.user_id] = amount; });
    setXpAmounts(map);
  };

  const adjustXp = (userId, delta) => {
    setXpAmounts(prev => ({ ...prev, [userId]: Math.max(-100, (prev[userId] ?? xpDefault ?? 0) + delta) }));
  };

  const recipientCount = Object.values(xpAmounts).filter(v => v !== 0).length;

  const getMemberXpState = (member) => {
    if (!member.characters?.id) return null;
    return getXpState(member.characters);
  };

  const getActivePortraitUrl = (character) => {
    if (!character) return '';
    if (character.is_unmasked_revealed && character.portrait_unmasked_url) {
      return character.portrait_unmasked_url;
    }
    return character.portrait_masked_url || character.portrait_unmasked_url || '';
  };

  return (
    <>
    <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
      <div className="flex justify-between items-start mb-6 border-b border-stone-100 pb-4">
        <div>
          <h2 className="text-3xl font-serif text-amber-900 font-bold">{cercle.nom}</h2>
          <div className="flex items-center gap-2 mt-2">
            {isDocte ? (
              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded font-bold uppercase tracking-wider flex items-center gap-1"><Shield size={12}/> Vous êtes le Docte</span>
            ) : (
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded font-bold uppercase tracking-wider flex items-center gap-1"><Users size={12}/> Vous êtes un Joueur</span>
            )}

            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-telegraphe', { detail: { targetCercle: true } }))}
              className="ml-2 bg-stone-50 text-stone-600 hover:bg-amber-100 hover:text-amber-800 hover:border-amber-300 text-xs px-3 py-1 rounded-full font-bold flex items-center gap-1.5 transition-colors border border-stone-200 shadow-sm"
              title="Ouvrir les correspondances de la table"
            >
              <MessageCircle size={12}/> Discuter avec la Table
            </button>
          </div>

        </div>

        {isDocte ? (
          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-2">
              <div className="bg-amber-50 border border-amber-200 p-3 rounded-lg text-center shadow-sm">
                <div className="text-xs text-amber-700 font-bold uppercase tracking-wider mb-1">Code d'invitation</div>
                <div className="font-mono text-xl text-amber-900 font-black tracking-widest">{cercle.code_invitation}</div>
              </div>
              {isAlsoMember && (
                <button
                  onClick={() => onLeave(cercle.id)}
                  className="text-sm bg-red-50 text-red-600 hover:bg-red-100 px-3 py-2 rounded-lg font-bold flex items-center gap-2 transition-colors border border-red-200 shadow-sm self-stretch flex-col justify-center"
                >
                  <LogOut size={16} />
                  <span className="text-xs">Quitter la table</span>
                </button>
              )}
            </div>
            <button
              onClick={() => onDelete(cercle.id)}
              className="text-xs text-red-500 hover:text-red-700 font-bold flex items-center gap-1 transition-colors"
            >
              <X size={14} /> Dissoudre le Cercle
            </button>
          </div>
        ) : (
          <button
            onClick={() => onLeave(cercle.id)}
            className="text-sm bg-red-50 text-red-600 hover:bg-red-100 px-3 py-2 rounded-lg font-bold flex items-center gap-2 transition-colors border border-red-200 shadow-sm"
          >
            <LogOut size={16} /> Quitter la table
          </button>
        )}
      </div>

      {/* ── Onglets ── */}
      <div
        role="tablist"
        aria-label="Sections du Cercle"
        className="flex gap-1 border-b border-stone-100 mb-5 -mt-1"
        onKeyDown={(e) => {
          const tabs = isDocte ? ['table', 'parties', 'secrets', 'cartes', 'competences'] : ['table', 'parties', 'secrets'];
          const idx = tabs.indexOf(subTab);
          let next = null;
          if (e.key === 'ArrowRight') { e.preventDefault(); next = tabs[(idx + 1) % tabs.length]; }
          else if (e.key === 'ArrowLeft') { e.preventDefault(); next = tabs[(idx - 1 + tabs.length) % tabs.length]; }
          if (next) { switchTab(next); setTimeout(() => document.getElementById(`tab-cercle-${next}`)?.focus(), 0); }
        }}
      >
        <button
          role="tab"
          id="tab-cercle-table"
          aria-selected={subTab === 'table'}
          aria-controls="panel-cercle"
          tabIndex={subTab === 'table' ? 0 : -1}
          onClick={() => switchTab('table')}
          className={`flex items-center gap-1.5 px-4 py-2 text-sm font-bold font-serif border-b-2 transition-colors ${subTab === 'table' ? 'border-amber-600 text-amber-900' : 'border-transparent text-stone-400 hover:text-stone-600'}`}
        >
          <Users size={14} /> La Table
        </button>
        <button
          role="tab"
          id="tab-cercle-parties"
          aria-selected={subTab === 'parties'}
          aria-controls="panel-cercle"
          tabIndex={subTab === 'parties' ? 0 : -1}
          onClick={() => switchTab('parties')}
          className={`flex items-center gap-1.5 px-4 py-2 text-sm font-bold font-serif border-b-2 transition-colors ${subTab === 'parties' ? 'border-amber-600 text-amber-900' : 'border-transparent text-stone-400 hover:text-stone-600'}`}
        >
          <BookOpen size={14} /> Parties
        </button>
        <button
          role="tab"
          id="tab-cercle-secrets"
          aria-selected={subTab === 'secrets'}
          aria-controls="panel-cercle"
          tabIndex={subTab === 'secrets' ? 0 : -1}
          onClick={() => switchTab('secrets')}
          className={`flex items-center gap-1.5 px-4 py-2 text-sm font-bold font-serif border-b-2 transition-colors ${subTab === 'secrets' ? 'border-amber-600 text-amber-900' : 'border-transparent text-stone-400 hover:text-stone-600'}`}
        >
          <Scroll size={14} /> Secrets du Monde
        </button>
        {isDocte && (
          <button
            role="tab"
            id="tab-cercle-cartes"
            aria-selected={subTab === 'cartes'}
            aria-controls="panel-cercle"
            tabIndex={subTab === 'cartes' ? 0 : -1}
            onClick={() => switchTab('cartes')}
            className={`flex items-center gap-1.5 px-4 py-2 text-sm font-bold font-serif border-b-2 transition-colors ${subTab === 'cartes' ? 'border-violet-600 text-violet-900' : 'border-transparent text-stone-400 hover:text-stone-600'}`}
          >
            ✦ Cartes Perso
          </button>
        )}
        {isDocte && (
          <button
            role="tab"
            id="tab-cercle-competences"
            aria-selected={subTab === 'competences'}
            aria-controls="panel-cercle"
            tabIndex={subTab === 'competences' ? 0 : -1}
            onClick={() => switchTab('competences')}
            className={`flex items-center gap-1.5 px-4 py-2 text-sm font-bold font-serif border-b-2 transition-colors ${subTab === 'competences' ? 'border-amber-600 text-amber-900' : 'border-transparent text-stone-400 hover:text-stone-600'}`}
          >
            ⚙ Compétences
          </button>
        )}
      </div>

      <div id="panel-cercle" role="tabpanel" aria-labelledby={`tab-cercle-${subTab}`}>
      {/* ── Onglet Parties ── */}
      {subTab === 'parties' && (
        <TabPartiesJeu
          cercleId={cercle.id}
          userId={userId}
          isDocte={isDocte}
          activeMembers={activeMembers}
        />
      )}

      {/* ── Onglet Secrets du Monde ── */}
      {subTab === 'secrets' && (
        <TabIndicesVerites
          cercleId={cercle.id}
          isDocte={isDocte}
          userId={userId}
          activeMembers={activeMembers}
          onPendingXpChange={handlePendingXpChange}
        />
      )}

      {/* ── Onglet Cartes Personnelles (Docte uniquement) ── */}
      {subTab === 'cartes' && isDocte && (
        <TabCartesPerso
          docteId={userId}
          cercleId={cercle.id}
          activeMembers={activeMembers}
        />
      )}

      {/* ── Onglet Compétences (Docte uniquement) ── */}
      {subTab === 'competences' && isDocte && (
        <TabCompetences activeMembers={activeMembers} />
      )}

      {subTab === 'table' && <>

      {/* 🎁 PANNEAU D'ATTRIBUTION D'XP (Docte seulement) */}
      {isDocte && activeMembers.length > 0 && (
        <div className="mb-6 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl shadow-sm overflow-hidden">
          <button
            onClick={() => setXpPanelOpen(o => !o)}
            className="w-full flex items-center justify-between gap-2 px-4 py-3 md:px-5 hover:bg-amber-100/50 transition-colors text-left"
          >
            <div className="flex items-center gap-2">
              <Gift size={18} className="text-amber-700" />
              <h3 className="font-bold text-amber-900 text-base">Distribuer des Points d'Expérience</h3>
            </div>
            <span className="text-amber-600 text-lg leading-none">{xpPanelOpen ? '▲' : '▼'}</span>
          </button>

          {xpPanelOpen && <div className="px-4 pb-4 md:px-5 md:pb-5 pt-1">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-xs text-amber-700 font-bold">Montant par défaut :</span>
            {[3, 5, 10, 15, 20].map(n => (
              <button
                key={n}
                onClick={() => handleXpPreset(n)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                  xpDefault === n
                    ? 'bg-amber-700 text-white border-amber-700 shadow-sm'
                    : 'bg-white text-amber-800 border-amber-300 hover:bg-amber-100'
                }`}
              >{n} XP</button>
            ))}
            <input
              type="number" min="0" max="100"
              value={xpDefault || ''}
              onChange={e => handleXpPreset(parseInt(e.target.value) || 0)}
              placeholder="Perso."
              className="w-20 px-2 py-1.5 border border-amber-300 rounded-lg text-xs font-bold text-amber-900 bg-white outline-none focus:ring-1 focus:ring-amber-400"
            />
          </div>

          <div className="space-y-1.5 mb-4">
            {activeMembers.map(m => {
              const xpState = getMemberXpState(m);
              const currentAmount = (xpAmounts[m.user_id] ?? xpDefault) || 0;
              const nextXpTotal = xpState ? xpState.xpTotal + currentAmount : null;
              const nextXpDispo = xpState ? xpState.xpDispo + currentAmount : null;

              return (
                <div key={m.user_id} className="flex items-center justify-between gap-3 bg-white/70 rounded-lg px-3 py-2 border border-amber-200/60">
                  <div className="flex flex-wrap items-center gap-2 min-w-0">
                    <span className="text-xs font-bold text-amber-900 truncate">{m.characters?.nom || m.profiles?.username}</span>
                    <span className="text-[10px] text-stone-400 italic truncate hidden sm:inline">{m.characters?.typeFee}</span>
                    {m.characters?.statut && m.characters.statut !== 'scelle' && (
                      <span className="text-[9px] text-amber-600 bg-amber-100 px-1.5 py-0.5 rounded font-bold">Non scellé</span>
                    )}

                    {xpState ? (
                      <>
                      <div
                        className={`flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full border shadow-sm ${xpState.xpDispo < 0 ? 'bg-red-50 border-red-300' : 'bg-stone-50 border-stone-200'}`}
                        title={xpState.xpDispo < 0 ? `Dette XP : ${xpState.xpDepense} dépensés pour ${xpState.xpTotal} acquis` : `${xpState.xpDispo} XP disponibles sur ${xpState.xpTotal} acquis`}
                      >
                        <Sparkles size={12} className={xpState.xpDispo < 0 ? 'text-red-500' : 'text-amber-500'} />
                        <span className={xpState.xpDispo < 0 ? 'text-red-700' : 'text-amber-700'}>{xpState.xpDispo}</span>
                        <span className="text-stone-300">/</span>
                        <span className="text-green-600">{xpState.xpTotal}</span>
                        <span className="text-stone-400">XP</span>
                      </div>
                      {currentAmount !== 0 && (
                        <>
                          <span className="text-[10px] text-stone-400 font-bold">→</span>
                          <div
                            className="flex items-center gap-1 text-xs font-bold bg-stone-50 px-2 py-0.5 rounded-full border border-stone-200 shadow-sm"
                            title={`${nextXpDispo} XP disponibles sur ${nextXpTotal} acquis après distribution`}
                          >
                            <Sparkles size={12} className="text-amber-500" />
                            <span className={nextXpDispo < 0 ? 'text-red-600' : 'text-amber-700'}>{nextXpDispo}</span>
                            <span className="text-stone-300">/</span>
                            <span className="text-green-600">{nextXpTotal}</span>
                            <span className="text-stone-400">XP</span>
                          </div>
                        </>
                      )}
                      </>
                    ) : (
                    <span className="text-[10px] text-stone-400 italic">
                      Aucun Héritier lié : impossible d'afficher l'état des XP.
                    </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <button onClick={() => adjustXp(m.user_id, -1)} className="w-6 h-6 flex items-center justify-center rounded bg-stone-100 text-stone-500 hover:bg-stone-200 text-sm font-bold">−</button>
                    <span className="w-8 text-center text-sm font-black text-amber-900">{currentAmount}</span>
                    <button onClick={() => adjustXp(m.user_id, 1)} className="w-6 h-6 flex items-center justify-center rounded bg-stone-100 text-stone-500 hover:bg-stone-200 text-sm font-bold">+</button>
                    {(xpAmounts[m.user_id] != null && xpAmounts[m.user_id] !== xpDefault) && <span className="text-[10px] text-amber-500 font-bold ml-1">✎</span>}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <input
              type="text" value={xpMotif} onChange={e => setXpMotif(e.target.value)}
              placeholder="Motif (ex: Scénario : Le Secret du Lac)"
              className="flex-1 min-w-[200px] px-3 py-2 border border-amber-300 rounded-lg text-xs font-bold text-amber-900 bg-white outline-none focus:ring-1 focus:ring-amber-400"
            />
            <button
              onClick={() => { onDistributeXp(xpAmounts, xpMotif); setXpDefault(0); setXpAmounts({}); setXpMotif(''); }}
              disabled={recipientCount === 0 || !xpMotif.trim() || xpSubmitting}
              className="px-4 py-2 bg-amber-700 text-white rounded-lg text-xs font-bold hover:bg-amber-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1.5 shadow-sm"
            >
              <Gift size={14} /> {xpSubmitting ? 'Distribution...' : `Distribuer les XP (${recipientCount} pers.)`}
            </button>
          </div>
          </div>}
        </div>
      )}

      {/* ✨ LA TABLE VIRTUELLE */}
      <div className="relative mt-6 mb-8 bg-stone-50/50 rounded-3xl border border-stone-200/60 p-4 md:p-8 pt-16 md:pt-20 shadow-inner overflow-hidden">

        <div className={`absolute ${isDocte ? '-bottom-20 border-t-4' : '-top-20 border-b-4'} left-1/2 -translate-x-1/2 w-[150%] h-40 bg-amber-900/5 rounded-[100%] border-amber-900/10 pointer-events-none`}></div>

        {/* ✨ LA PLACE DU DOCTE (Visible uniquement par les joueurs) */}
        {!isDocte && (
          <div className="flex justify-center mb-16 relative z-20">
            <div className="w-full sm:w-56 p-4 border-2 border-purple-200 rounded-xl flex flex-col items-center bg-white shadow-md relative group transition-all hover:border-purple-400 hover:shadow-xl hover:-translate-y-2">

              <button
                onClick={() => window.dispatchEvent(new CustomEvent('open-telegraphe', { detail: { targetUser: { id: cercle.docte_id, username: cercle.profiles?.username || 'Le Docte' } } }))}
                className="absolute top-2 right-2 p-1.5 bg-purple-50 text-purple-500 hover:text-purple-700 hover:bg-purple-100 rounded-full transition-colors border border-purple-200 shadow-sm z-30"
                title={`Missive privée à ${cercle.profiles?.username || 'ce Docte'}`}
              >
                <MessageCircle size={14} />
              </button>

              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center text-purple-600 border-4 border-white shadow-sm -mt-10 mb-2 transition-transform group-hover:scale-110">
                <Shield size={28} />
              </div>

              <div className="flex-1 w-full text-center flex flex-col">
                <div className="font-bold text-purple-900 font-serif text-lg truncate w-full" title={cercle.profiles?.username}>
                  {cercle.profiles?.username || 'Le Docte'}
                </div>
                <div className="text-[10px] text-purple-500 uppercase tracking-widest mt-0.5">
                  Docte
                </div>
              </div>
            </div>
          </div>
        )}

        {/* LES HÉRITIERS */}
        <div className="flex flex-wrap justify-center items-end gap-4 md:gap-6 relative z-10 min-h-[250px]">
          {activeMembers.map((member, index) => {
            const n = activeMembers.length;
            const arcDirection = isDocte ? 1 : -1;
            const pos = n > 1 ? (index / (n - 1)) * 2 - 1 : 0;
            const rotation = pos * 12 * arcDirection;
            const translateY = Math.abs(pos) * 40 * arcDirection;
            const hasChar = !!member.characters?.id;
            const isSelf = member.user_id === session.user.id;
            const portraitUrl = getActivePortraitUrl(member.characters);

            return (
              <div
                key={member.id}
                style={{ transform: `translateY(${translateY}px) rotate(${rotation}deg)` }}
                className="w-full sm:w-56 relative transition-all duration-300 hover:z-20 group"
              >
                <div className={`relative w-full p-4 border-2 rounded-xl flex flex-col items-center bg-white shadow-md transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-4 group-hover:shadow-xl ${
                  !hasChar ? 'border-orange-300' : 'border-stone-200 group-hover:border-amber-300'
                }`}>

                  {!isSelf && (
                    <button
                      onClick={() => window.dispatchEvent(new CustomEvent('open-telegraphe', { detail: { targetUser: { id: member.user_id, username: member.profiles?.username } } }))}
                      className="absolute top-2 right-2 p-1.5 bg-stone-50 text-stone-400 hover:text-amber-600 hover:bg-amber-100 rounded-full transition-colors border border-stone-200 shadow-sm z-30"
                      title={`Missive privée à ${member.profiles?.username}`}
                    >
                      <MessageCircle size={14} />
                    </button>
                  )}

                  <div className={`w-16 h-16 rounded-full flex items-center justify-center font-serif text-2xl border-4 border-white shadow-sm -mt-10 mb-2 group-hover:border-amber-100 transition-colors ${
                    hasChar ? 'bg-gradient-to-br from-stone-100 to-stone-200 text-stone-500' : 'bg-gradient-to-br from-orange-100 to-orange-200 text-orange-500'
                  } overflow-hidden`}>
                    {portraitUrl ? (
                      <img
                        src={portraitUrl}
                        alt={`Portrait de ${member.characters?.nom || 'cet Héritier'}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      member.characters?.nom?.charAt(0) || '?'
                    )}
                  </div>

                  <div className="flex-1 w-full text-center flex flex-col">
                    <div className="font-bold text-amber-900 font-serif text-lg truncate w-full" title={member.characters?.nom}>
                      {member.characters?.nom || <span className="text-orange-500 italic text-sm">Aucun Héritier lié</span>}
                    </div>
                    <div className="text-[10px] text-stone-400 uppercase tracking-widest truncate mt-0.5">
                      Joué par {member.profiles?.username}
                    </div>

                    {isDocte ? (
                      <div className="flex flex-col items-center gap-3 mt-4 w-full">
                        <div className={`text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider border shadow-sm ${
                          hasChar
                            ? 'text-purple-800 bg-purple-100 border-purple-200'
                            : 'text-orange-700 bg-orange-100 border-orange-300'
                        }`}>
                          {member.characters?.typeFee || (hasChar ? 'Nature inconnue' : 'Fiche non liée')}
                        </div>
                        {hasChar && member.characters?.statut && member.characters.statut !== 'scelle' && (
                          <div className="text-[9px] text-amber-700 bg-amber-100 border border-amber-300 px-2 py-0.5 rounded font-bold mt-1">
                            ⚠ Non scellé — XP reçus mais non dépensables
                          </div>
                        )}
                        <button
                          onClick={() => hasChar && onViewCharacter(member.characters)}
                          disabled={!hasChar}
                          className={`w-full py-2 rounded-lg border text-xs font-bold transition-colors flex justify-center items-center gap-1.5 shadow-sm ${
                            hasChar
                              ? 'bg-stone-50 text-purple-700 hover:bg-purple-600 hover:text-white border-purple-200 cursor-pointer'
                              : 'bg-orange-50 text-orange-400 border-orange-200 cursor-not-allowed'
                          }`}
                          title={hasChar ? "Inspecter la fiche complète" : "Ce joueur n'a pas encore lié son Héritier à ce Cercle"}
                        >
                          <Eye size={14} /> {hasChar ? 'Consulter' : 'En attente…'}
                        </button>
                      </div>
                    ) : isSelf ? (
                      <div className="mt-3 w-full space-y-2">
                        {/*
                        <div className="text-[10px] text-stone-500 text-center italic">
                          {hasChar ? `Mon Héritier : ${member.characters.nom}` : 'Aucun Héritier lié à ce Cercle'}
                        </div>
                        */}
                        {/*
                        {myCharacters.length > 0 && (
                          <select
                            defaultValue={member.characters?.id || ''}
                            onChange={(e) => { if (e.target.value) onUpdateMyCharacter(e.target.value); }}
                            className="w-full text-xs p-1.5 border border-stone-300 rounded-lg bg-white focus:ring-1 focus:ring-amber-400 outline-none"
                          >
                            <option value="">Changer d'Héritier…</option>
                            {myCharacters.map(c => (
                              <option key={c.id} value={c.id}>{c.nom} {c.typeFee ? `(${c.typeFee})` : ''}</option>
                            ))}
                          </select>
                        )}
                        */}
                      </div>
                    ) : (
                      <div className="mt-5 text-xs text-stone-400 flex justify-center items-center gap-1 italic bg-stone-50 p-2 rounded-lg border border-stone-100">
                        <EyeOff size={14} /> Nature masquée
                      </div>
                    )}
                  </div>

                </div>
              </div>
            );
          })}

          {activeMembers.length === 0 && (
            <div className="w-full text-center text-stone-400 italic py-10 relative z-10 flex flex-col items-center gap-2">
              <Users size={32} className="opacity-20" />
              La table est encore vide.
            </div>
          )}
        </div>
      </div>
    </>}
      </div>
  </div>

  {/* ── Modal distribution XP Secrets ── */}

  {xpModal && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4" role="dialog" aria-modal="true" aria-labelledby="xp-modal-title">
      <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full border border-amber-200">
        <h3 id="xp-modal-title" className="font-serif font-bold text-amber-900 text-lg mb-2 flex items-center gap-2">
          <Sparkles size={18} className="text-amber-500" /> Distribuer les XP ?
        </h3>
        <p className="text-sm text-stone-600 mb-5">
          Vous avez révélé des secrets non encore distribués.
          Voulez-vous attribuer <strong className="text-amber-800">+{xpModal.pendingXp} XP</strong> à tous les membres de votre cercle ?
        </p>
        <div className="flex gap-3 justify-end">
          <button
            onClick={() => { setXpModal(null); setSubTab(xpModal.nextTab); }}
            className="px-4 py-2 rounded-lg border border-stone-300 text-stone-600 text-sm font-bold hover:bg-stone-50 transition-colors"
          >
            Non, passer
          </button>
          <button
            onClick={async () => {
              await xpModal.distributeXp();
              setXpModal(null);
              setSubTab(xpModal.nextTab);
            }}
            className="px-4 py-2 rounded-lg bg-amber-700 text-white text-sm font-bold hover:bg-amber-800 transition-colors flex items-center gap-1.5"
          >
            <Sparkles size={14} /> Distribuer +{xpModal.pendingXp} XP
          </button>
        </div>
      </div>
    </div>
  )}
  </>
  );
});

export default ActiveCercleView;
