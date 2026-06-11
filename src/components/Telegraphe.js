// src/components/Telegraphe.js
import React, { useState, useEffect, useRef } from 'react';
import { LayoutList, MessageCircle, X, Send, Inbox, ShieldAlert, Globe, Users, User, Shield, ListFilter, Settings, Key, Check, CheckCheck } from '../config/icons';
import { useTelegraphe } from '../hooks/useTelegraphe';

const getSafeUiMode = () => {
  try { return localStorage.getItem('telegraphe_ui_mode') || 'tabs'; }
  catch (e) { return 'tabs'; }
};

export default function Telegraphe({ session, userProfile }) {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState('list');
  const [newSujet, setNewSujet] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const [uiMode, setUiMode] = useState(getSafeUiMode());
  const [activeTab, setActiveTab] = useState('global');
  const messagesEndRef = useRef(null);

  const {
    channels, messages, activeChannel, setActiveChannel,
    loading, isAdmin, isInitiated, messageReads,
    fetchMessages, startPrivateChat, createSupportTicket, sendReply
  } = useTelegraphe(session, userProfile);

  // ✨ Calcul universel du voyant rouge !
  const globalUnread = channels.some(c => c.has_unread);

  useEffect(() => {
    if (view === 'chat' && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, view]);

  useEffect(() => {
    const handleOpenTelegraphe = async (e) => {
      const { targetUser, targetCercle } = e.detail || {};
      setIsOpen(true);
      if (targetUser) {
        await startPrivateChat(targetUser);
        setView('chat');
      } else if (targetCercle) {
        setActiveTab('cercle');
        setView('list');
      }
    };
    window.addEventListener('open-telegraphe', handleOpenTelegraphe);
    return () => window.removeEventListener('open-telegraphe', handleOpenTelegraphe);
  }, [startPrivateChat]);

  const handleOpenChannel = async (channel) => {
    await fetchMessages(channel);
    setView('chat');
  };

  const handleCreateTicket = async () => {
    const success = await createSupportTicket(newSujet, newMessage);
    if (success) {
      setNewSujet('');
      setNewMessage('');
      setView('list');
    }
  };

  const handleSendReply = async () => {
    const success = await sendReply(newMessage);
    if (success) {
      setNewMessage('');
    }
  };

  const getChannelIcon = (type) => {
    if (type === 'global') return <Globe size={16} className="text-blue-600" />;
    if (type === 'support') return <ShieldAlert size={16} className="text-amber-600" />;
    if (type === 'private') return <User size={16} className="text-emerald-600" />;
    if (type === 'cercle') return <Users size={16} className="text-purple-600" />;
    if (type === 'initie') return <Key size={16} className="text-emerald-600" />;
    return <MessageCircle size={16} className="text-gray-600" />;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* BOUTON FLOTTANT */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-amber-800 text-amber-50 p-4 rounded-full shadow-2xl hover:bg-amber-700 transition-transform transform hover:scale-110 border-2 border-amber-600 flex items-center gap-2"
          aria-label="Ouvrir le Télégraphe"
        >
          <MessageCircle size={28} />
          {/* ✨ LE VOYANT ROUGE CHIRURGICAL */}
          {(globalUnread || 
            (isAdmin && channels.some(c => c.type === 'support' && c.status === 'nouveau')) ||
            (!isAdmin && channels.some(c => c.type === 'support' && c.status === 'lu'))) && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full animate-bounce">!</span>
          )}
        </button>
      )}

      {/* FENÊTRE PRINCIPALE */}
      {isOpen && (
        <div className="w-96 max-w-[90vw] h-[32rem] max-h-[80vh] bg-[#fdfbf7] border-4 border-amber-900 rounded-lg shadow-2xl flex flex-col overflow-hidden font-serif animate-fade-in-up">
          
          <div className="bg-amber-900 text-amber-50 p-3 flex justify-between items-center border-b-4 border-amber-700 shrink-0">
            <h3 className="font-bold flex items-center gap-2">
              <Inbox size={20} />
              {"Hub Pneumatique"}
            </h3>
            <div className="flex items-center gap-3">
              <button onClick={() => setView('settings')} className="text-amber-300 hover:text-white transition-colors" title="Paramètres du Télégraphe">
                <Settings size={18} />
              </button>
              <button onClick={() => setIsOpen(false)} className="text-amber-300 hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>
          </div>

          {/* VUE 1 : LISTE DES CANAUX */}
          {view === 'list' && (
            <div className="flex-1 flex flex-col min-h-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
              
              {uiMode === 'tabs' && (
                <div className="flex bg-amber-800 text-amber-100 text-xs font-bold uppercase tracking-wider shrink-0 overflow-x-auto hide-scrollbar">
                  <button onClick={() => setActiveTab('global')} className={`px-4 py-3 border-b-4 transition-colors whitespace-nowrap flex items-center gap-1.5 ${activeTab === 'global' ? 'border-amber-400 text-white bg-amber-900/50' : 'border-transparent hover:bg-amber-700/50'}`}>
                    <Globe size={14} /> Public
                  </button>
                  <button onClick={() => setActiveTab('private')} className={`relative px-4 py-3 border-b-4 transition-colors whitespace-nowrap flex items-center gap-1.5 ${activeTab === 'private' ? 'border-amber-400 text-white bg-amber-900/50' : 'border-transparent hover:bg-amber-700/50'}`}>
                    <User size={14} /> Privé
                    {channels.some(c => c.type === 'private' && c.has_unread) && <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>}
                  </button>
                  <button onClick={() => setActiveTab('cercle')} className={`relative px-4 py-3 border-b-4 transition-colors whitespace-nowrap flex items-center gap-1.5 ${activeTab === 'cercle' ? 'border-amber-400 text-white bg-amber-900/50' : 'border-transparent hover:bg-amber-700/50'}`}>
                    <Users size={14} /> Cercles
                    {channels.some(c => c.type === 'cercle' && c.has_unread) && <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>}
                  </button>
                  <button onClick={() => setActiveTab('support')} className={`relative px-4 py-3 border-b-4 transition-colors whitespace-nowrap flex items-center gap-1.5 ${activeTab === 'support' ? 'border-amber-400 text-white bg-amber-900/50' : 'border-transparent hover:bg-amber-700/50'}`}>
                    {isAdmin ? <Shield size={14} /> : <ShieldAlert size={14} />} 
                    Conseil {((isAdmin && channels.some(c => c.type === 'support' && c.status === 'nouveau')) || channels.some(c => c.type === 'support' && c.has_unread)) && <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>}
                  </button>
                  {isInitiated && (
                    <button onClick={() => setActiveTab('initie')} className={`relative px-4 py-3 border-b-4 transition-colors whitespace-nowrap flex items-center gap-1.5 ${activeTab === 'initie' ? 'border-amber-400 text-white bg-amber-900/50' : 'border-transparent hover:bg-amber-700/50'}`}>
                      <Key size={14} /> Initiés
                      {channels.some(c => c.type === 'initie' && c.has_unread) && <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>}
                    </button>
                  )}
                </div>
              )}

              <div className="flex-1 overflow-y-auto p-3 space-y-2 custom-scrollbar">
                
                {!isAdmin && (uiMode === 'unified' || activeTab === 'support') && (
                  <button onClick={() => setView('new')} className="w-full mb-3 p-3 border-2 border-dashed border-amber-400 text-amber-700 hover:bg-amber-100 rounded-lg flex items-center justify-center gap-2 font-bold transition-colors shadow-sm">
                    <ShieldAlert size={18} /> Signaler un problème au Conseil
                  </button>
                )}

                <div className="space-y-3">
                  {channels
                    .filter(c => isInitiated || c.type !== 'initie')
                    .filter(c => uiMode === 'unified' || c.type === activeTab)
                    .length === 0 && (
                      <p className="text-center text-gray-500 italic mt-4">Aucune correspondance dans cette section.</p>
                  )}

                  {channels
                    .filter(c => isInitiated || c.type !== 'initie')
                    .filter(c => uiMode === 'unified' || c.type === activeTab)
                    .map(c => (
                    <div 
                      key={c.id} 
                      onClick={() => handleOpenChannel(c)}
                      className={`bg-white p-3 rounded-lg border ${c.has_unread ? 'border-red-400 shadow-md ring-1 ring-red-100' : 'border-stone-200 shadow-sm hover:shadow-md hover:border-amber-300'} cursor-pointer transition-all flex items-center gap-3 group`}
                    >
                      <div className={`p-2 rounded-full border shrink-0 ${c.has_unread ? 'bg-red-50 border-red-200' : 'bg-stone-50 border-stone-100'}`}>
                        {getChannelIcon(c.type)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-bold text-amber-900 truncate flex items-center gap-2">
                          {c.name || 'Conversation'}
                          {/* ✨ LA PETITE PUCE DE CANAL NON LU */}
                          {c.has_unread && <span className="w-2.5 h-2.5 bg-red-600 rounded-full shadow-sm animate-pulse" title="Nouveau message"></span>}
                        </h4>
                        <p className="text-xs text-stone-500 truncate mt-0.5 flex justify-between">
                          <span className={c.has_unread ? 'font-bold text-red-700' : ''}>Dernier message : {new Date(c.last_message_at).toLocaleDateString('fr-FR')} à {new Date(c.last_message_at).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }).replace(':', 'h')}</span>
                          {c.type === 'support' && c.status === 'nouveau' && <span className="text-red-600 font-bold ml-2">En attente</span>}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* VUE 2 : NOUVEAU TICKET DE SUPPORT */}
          {view === 'new' && (
            <div className="flex-1 p-4 flex flex-col gap-3 bg-[#fdfbf7] overflow-y-auto">
              <button onClick={() => setView('list')} className="text-sm text-amber-700 hover:underline mb-2 flex items-center gap-1">← Retour</button>
              
              <div className="bg-amber-100 p-2 rounded text-xs text-amber-800 border border-amber-200">
                Utilisez ce formulaire uniquement pour contacter les Gardiens (Bug, Règle, Support technique).
              </div>

              <input 
                type="text" 
                placeholder="Sujet du problème..." 
                className="p-3 border border-amber-400 rounded-lg bg-white text-stone-900 font-bold focus:outline-none focus:ring-2 focus:ring-amber-600 shadow-sm"
                value={newSujet}
                onChange={(e) => setNewSujet(e.target.value)}
                disabled={loading}
              />
              <textarea 
                placeholder="Décrivez votre requête en détail..." 
                className="flex-1 p-3 border border-amber-400 rounded-lg bg-white text-stone-900 resize-none focus:outline-none focus:ring-2 focus:ring-amber-600 custom-scrollbar shadow-sm"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                disabled={loading}
              />
              <button 
                onClick={handleCreateTicket} 
                disabled={loading || !newSujet.trim() || !newMessage.trim()}
                className="bg-amber-800 text-white p-3 rounded-lg hover:bg-amber-700 font-bold flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
              >
                <Send size={18} /> {loading ? 'Envoi...' : 'Expédier la requête'}
              </button>
            </div>
          )}

          {/* VUE 3 : LE CHAT */}
          {view === 'chat' && (
            <div className="flex-1 flex flex-col min-h-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
              <div className="bg-amber-100 border-b border-amber-300 p-2 flex justify-between items-center shadow-sm shrink-0">
                <button onClick={() => { setView('list'); setActiveChannel(null); }} className="text-sm text-amber-800 hover:text-amber-600 font-bold flex items-center gap-1">← Retour</button>
                <span className="font-bold text-amber-900 truncate flex-1 text-right text-sm px-2">{activeChannel?.name}</span>
              </div>
              
              <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                {messages.map((m) => {
                  const isMe = m.user_id === session.user.id;
                  let displayName = isMe ? 'Vous' : (m.profiles?.username || 'Anonyme');

                  if (activeChannel?.type === 'support' && !isMe) {
                    displayName = m.profiles?.username 
                      ? `${m.profiles.username} (Garde des Sceaux)` 
                      : 'Garde des Sceaux';
                  }

                  // ── Accusé de réception ──
                  const showReceipt = isMe && activeChannel?.type !== 'global';
                  const readers = showReceipt ? (messageReads[m.id] || []) : [];
                  
                  const myId = session.user.id;
                  const otherParticipantId = activeChannel?.type === 'private' 
                    ? (activeChannel.participant_1 === myId ? activeChannel.participant_2 : activeChannel.participant_1)
                    : null;
                  const isPrivate = activeChannel?.type === 'private';
                  
                  const allRead = isPrivate 
                    ? readers.includes(otherParticipantId)
                    : (readers.length > 0);

                  return (
                    <div key={m.id} className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}>
                      <div className="flex items-baseline gap-2 mb-1 px-1">
                        <span className={`text-[10px] font-bold uppercase tracking-wider ${isMe ? 'text-amber-700' : m.is_admin ? 'text-red-700' : 'text-stone-500'}`}>
                          {displayName}
                        </span>
                        <span className="text-[9px] text-stone-400">
                          {new Date(m.created_at).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }).replace(':', 'h')}
                        </span>
                      </div>
                      
                      <div className={`p-3 rounded-xl max-w-[85%] text-sm shadow-sm whitespace-pre-wrap break-words ${
                        isMe 
                          ? 'bg-amber-600 text-white rounded-tr-none' 
                          : m.is_admin 
                            ? 'bg-amber-100 text-amber-900 border border-amber-300 rounded-tl-none font-bold' 
                            : 'bg-white text-stone-800 border border-stone-200 rounded-tl-none'
                      }`}>
                        {m.message}
                      </div>

                      {/* ── Coche(s) de lecture ── */}
                      {showReceipt && (
                        <div className="flex items-center gap-0.5 mt-0.5 px-1">
                          {readers.length === 0 ? (
                            <Check size={12} className="text-stone-300" />
                          ) : isPrivate ? (
                            <CheckCheck 
                              size={13} 
                              className={allRead ? 'text-amber-500' : 'text-stone-300'} 
                              title={allRead ? 'Lu' : 'Délivré'}
                            />
                          ) : (
                            <>
                              <CheckCheck size={13} className="text-amber-500" />
                              <span className="text-[10px] text-stone-400 font-bold leading-none">
                                {readers.length}
                              </span>
                            </>
                          )}
                        </div>
                      )}

                    </div>
                  );
                })}
                <div ref={messagesEndRef} />
              </div>

              {activeChannel?.status !== 'resolu' ? (
                <div className="p-3 bg-amber-50 border-t border-amber-300 flex gap-2 items-end shrink-0">
                  <textarea
                    autoFocus
                    placeholder="Écrire un message..."
                    rows="1"
                    className="flex-1 p-3 border border-amber-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-inner bg-white text-stone-900 resize-none max-h-24 custom-scrollbar"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        if (newMessage.trim()) handleSendReply();
                      }
                    }}
                    disabled={loading}
                  />
                  <button 
                    onClick={handleSendReply} 
                    disabled={loading || !newMessage.trim()}
                    className="bg-amber-800 text-white p-3 rounded-lg hover:bg-amber-700 transition-colors disabled:opacity-50 shadow-md"
                  >
                    <Send size={20} />
                  </button>
                </div>
              ) : (
                <div className="p-3 bg-gray-100 border-t border-gray-300 text-center text-gray-500 text-sm italic font-bold shrink-0">
                  Cette affaire a été classée par le Conseil.
                </div>
              )}
            </div>
          )}

          {/* VUE 4 : RÉGLAGES */}
          {view === 'settings' && (
            <div className="flex-1 p-4 flex flex-col gap-4 bg-[#fdfbf7] bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] overflow-y-auto custom-scrollbar">
              <button onClick={() => setView('list')} className="text-sm text-amber-700 hover:underline mb-2 flex items-center gap-1">← Retour</button>
              <h3 className="font-bold text-amber-900 mb-2 border-b border-amber-200 pb-2">Préférences d'affichage</h3>
              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => { setUiMode('tabs'); localStorage.setItem('telegraphe_ui_mode', 'tabs'); }}
                  className={`p-4 rounded-xl border-2 flex items-center gap-3 transition-colors ${uiMode === 'tabs' ? 'bg-amber-100 border-amber-400 text-amber-900 shadow-inner' : 'bg-white border-stone-200 text-stone-600 hover:border-amber-300'}`}
                >
                  <LayoutList size={24} />
                  <span className="text-xs font-bold uppercase tracking-wider">Navigation par Onglets</span>
                </button>
                
                <button 
                  onClick={() => { setUiMode('unified'); localStorage.setItem('telegraphe_ui_mode', 'unified'); }}
                  className={`p-4 rounded-xl border-2 flex items-center gap-3 transition-colors ${uiMode === 'unified' ? 'bg-amber-100 border-amber-400 text-amber-900 shadow-inner' : 'bg-white border-stone-200 text-stone-600 hover:border-amber-300'}`}
                >
                  <ListFilter size={24} />
                  <span className="text-xs font-bold uppercase tracking-wider">Flux Unifié</span>
                </button>
              </div>
              <p className="text-xs text-stone-500 mt-3 leading-tight">Le mode Onglets sépare vos correspondances par catégorie. Le Flux Unifié rassemble tout par ordre chronologique, façon télégramme moderne.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}