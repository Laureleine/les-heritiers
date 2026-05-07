// src/components/cercle/ActiveCercleView.js
import React from 'react';
import { Shield, Users, X, LogOut, Eye, EyeOff, MessageCircle } from '../../config/icons';

const ActiveCercleView = React.memo(({ cercle, session, activeMembers, onDelete, onLeave, onViewCharacter, myCharacters = [], onUpdateMyCharacter }) => {
  if (!cercle) return null;
  const isDocte = cercle.docte_id === session.user.id;

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200 animate-fade-in">
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

          <h3 className="font-serif font-bold text-stone-500 mt-4 text-sm flex items-center gap-2 uppercase tracking-widest">
            <Users size={14} /> Héritiers à la table ({activeMembers.length})
          </h3>
        </div>

        {isDocte ? (
          <div className="flex flex-col items-end gap-3">
            <div className="bg-amber-50 border border-amber-200 p-3 rounded-lg text-center shadow-sm">
              <div className="text-xs text-amber-700 font-bold uppercase tracking-wider mb-1">Code d'invitation</div>
              <div className="font-mono text-xl text-amber-900 font-black tracking-widest">{cercle.code_invitation}</div>
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
                  }`}>
                    {member.characters?.nom?.charAt(0) || '?'}
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
                        <div className="text-[10px] text-stone-500 text-center italic">
                          {hasChar ? `Mon Héritier : ${member.characters.nom}` : 'Aucun Héritier lié à ce Cercle'}
                        </div>
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
    </div>
  );
});

export default ActiveCercleView;
