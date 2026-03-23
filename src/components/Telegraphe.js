// src/components/Telegraphe.js
// 9.0.0 // 9.0.1
// 12.3.0
// 13.4.0
// 14.0.0 // 14.9.0

import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Inbox, ShieldAlert, Globe, Users, User, Shield, LayoutList, ListFilter, Settings } from 'lucide-react';
import { supabase } from '../config/supabase';
import { showInAppNotification, translateError } from '../utils/SystemeServices';

// Sécurisation du LocalStorage (Anti-crash SSR/Incognito)
const getSafeUiMode = () => {
  try { return localStorage.getItem('telegraphe_ui_mode') || 'tabs'; } 
  catch (e) { return 'tabs'; }
};

export default function Telegraphe({ session, userProfile }) {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState('list');

  const [channels, setChannels] = useState([]);
  const [messages, setMessages] = useState([]);
  const [activeChannel, setActiveChannel] = useState(null);

  const [newSujet, setNewSujet] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const [uiMode, setUiMode] = useState(getSafeUiMode());
  const [activeTab, setActiveTab] = useState('global');
  
  const messagesEndRef = useRef(null);
  const isAdmin = userProfile?.profile?.role === 'super_admin' || userProfile?.profile?.role === 'gardien';

  // ==========================================================================
  // 🧠 LATEST REF PATTERN : On mémorise les états pour les WebSockets
  // ==========================================================================
  const activeChannelRef = useRef(activeChannel);
  useEffect(() => { activeChannelRef.current = activeChannel; }, [activeChannel]);

  // ==========================================================================
  // 📡 LES MOTEURS DE REQUÊTES BLINDÉS (Avec Mode Silencieux)
  // ==========================================================================
  const fetchChannels = async (isSilent = false) => {
    if (!session?.user?.id) return;
    if (!isSilent) setLoading(true);
    
    try {
      const { data, error } = await supabase.from('chat_channels').select('*').order('last_message_at', { ascending: false });
      if (error) throw error;
      
      if (data) {
        const myId = session.user.id;
        const accessibleChannels = data.filter(c => 
          c.type === 'global' || 
          (c.type === 'private' && (c.participant_1 === myId || c.participant_2 === myId)) ||
          (c.type === 'support' && (isAdmin || c.participant_1 === myId)) ||
          c.type === 'cercle'
        );
        setChannels(accessibleChannels);
      }
    } catch (err) {
      console.error("Erreur de chargement des canaux:", err);
    } finally {
      if (!isSilent) setLoading(false);
    }
  };

  const updateChannelStatus = async (id, status) => {
    try {
      const { error } = await supabase.from('chat_channels').update({ status }).eq('id', id);
      if (error) throw error;
      fetchChannels(true); // Actualisation silencieuse
    } catch (err) {
      console.error("Erreur de mise à jour du statut:", err);
    }
  };

  const fetchMessages = async (channel, isSilent = false) => {
    if (!isSilent) setLoading(true);
    setActiveChannel(channel);
    
    try {
      const { data, error } = await supabase
        .from('chat_messages')
        .select('*, profiles(username)')
        .eq('channel_id', channel.id)
        .order('created_at', { ascending: true });

      if (error) throw error;
      
      if (data) {
        setMessages(data);
        setView('chat');

        if (channel.type === 'support') {
          if (isAdmin && channel.status === 'nouveau') updateChannelStatus(channel.id, 'lu');
          else if (!isAdmin && channel.status === 'lu') updateChannelStatus(channel.id, 'consulte');
        }
      }
    } catch (err) {
      showInAppNotification("Erreur de lecture des missives : " + translateError(err), "error");
    } finally {
      if (!isSilent) setLoading(false);
    }
  };

  const startPrivateChat = async (targetUser) => {
    setLoading(true);
    const myId = session.user.id;
    try {
      const { data: existing, error: searchError } = await supabase.from('chat_channels')
        .select('*')
        .eq('type', 'private')
        .or(`and(participant_1.eq.${myId},participant_2.eq.${targetUser.id}),and(participant_1.eq.${targetUser.id},participant_2.eq.${myId})`)
        .maybeSingle();

      if (searchError && searchError.code !== 'PGRST116') throw searchError;

      if (existing) {
        fetchMessages(existing);
      } else {
        const { data: newChannel, error: insertError } = await supabase.from('chat_channels')
          .insert([{
            type: 'private',
            name: `Correspondance avec ${targetUser.username}`,
            participant_1: myId,
            participant_2: targetUser.id
          }])
          .select().single();

        if (insertError) throw insertError;
        
        if (newChannel) {
          fetchChannels();
          fetchMessages(newChannel);
        }
      }
    } catch (err) {
      showInAppNotification("Erreur lors de la création du canal privé : " + translateError(err), "error");
    } finally {
      setLoading(false);
    }
  };

  // 🧠 LATEST REF PATTERN : Mémorisation des fonctions pour les écouteurs
  const startPrivateChatRef = useRef(startPrivateChat);
  const fetchChannelsRef = useRef(fetchChannels);
  const fetchMessagesRef = useRef(fetchMessages);

  useEffect(() => {
    startPrivateChatRef.current = startPrivateChat;
    fetchChannelsRef.current = fetchChannels;
    fetchMessagesRef.current = fetchMessages;
  });

  // ==========================================================================
  // ✨ INITIALISATION ET TEMPS RÉEL (SUPABASE REALTIME)
  // ==========================================================================
  useEffect(() => {
    if (!session?.user?.id) return;
    
    // 1. On charge les canaux sans faire flasher la fenêtre au montage
    fetchChannelsRef.current(true);

    // 2. On écoute le Temps Réel (Toujours en mode silencieux !)
    const chatSubscription = supabase.channel('telegraphe-realtime')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'chat_messages' }, (payload) => {
        fetchChannelsRef.current(true);
        
        if (activeChannelRef.current && payload.new.channel_id === activeChannelRef.current.id) {
          fetchMessagesRef.current(activeChannelRef.current, true);
        }
      })
      .on('postgres_changes', { event: '*', schema: 'public', table: 'chat_channels' }, () => {
        fetchChannelsRef.current(true);
      })
      .subscribe();

    return () => { supabase.removeChannel(chatSubscription); };
  }, [session?.user?.id]);


  // ==========================================================================
  // ✨ ÉCOUTEUR D'ÉVÉNEMENT EXTERNE SÉCURISÉ
  // ==========================================================================
  useEffect(() => {
    const handleOpenTelegraphe = async (e) => {
      const { targetUser } = e.detail;
      setIsOpen(true);
      if (startPrivateChatRef.current) await startPrivateChatRef.current(targetUser);
    };
    window.addEventListener('open-telegraphe', handleOpenTelegraphe);
    return () => window.removeEventListener('open-telegraphe', handleOpenTelegraphe);
  }, []);

  // Scroll automatique en bas de discussion
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ==========================================================================
  // ✉️ ENVOI DE MESSAGES
  // ==========================================================================
  const createSupportTicket = async () => {
    if (!newSujet.trim() || !newMessage.trim()) return;
    setLoading(true);
    try {
      const { data: channelData, error: channelError } = await supabase
        .from('chat_channels')
        .insert([{ type: 'support', name: newSujet, participant_1: session.user.id, status: 'nouveau' }])
        .select().single();

      if (channelError) throw channelError;

      const { error: msgError } = await supabase.from('chat_messages').insert([{
        channel_id: channelData.id,
        user_id: session.user.id,
        message: newMessage,
        is_admin: false
      }]);

      if (msgError) throw msgError;

      setNewSujet('');
      setNewMessage('');
      setView('list');
      showInAppNotification("Missive de support expédiée au Conseil.", "success");
      // ✨ FIX : On rafraîchit immédiatement la liste des correspondances
      if (fetchChannelsRef.current) fetchChannelsRef.current(true);

    } catch (err) {
      showInAppNotification("Erreur d'expédition : " + translateError(err), "error");
    } finally {
      setLoading(false);
    }
  };

  const sendReply = async () => {
    if (!newMessage.trim() || !activeChannel) return;
    setLoading(true);
    try {
      const { error: msgError } = await supabase.from('chat_messages').insert([{
        channel_id: activeChannel.id,
        user_id: session.user.id,
        message: newMessage,
        is_admin: isAdmin
      }]);
      if (msgError) throw msgError;

      const newStatus = activeChannel.type === 'support' ? (isAdmin ? 'lu' : 'nouveau') : 'open';
      const { error: chanError } = await supabase.from('chat_channels').update({
        last_message_at: new Date().toISOString(),
        status: newStatus
      }).eq('id', activeChannel.id);
      
      if (chanError) throw chanError;

      setNewMessage('');
	  
      // ✨ FIX : On n'attend pas le WebSocket, on recharge la vue instantanément !
      if (fetchMessagesRef.current && activeChannel) {
        fetchMessagesRef.current(activeChannel, true);
      }
      if (fetchChannelsRef.current) {
        fetchChannelsRef.current(true);
      }
	  
    } catch (err) {
      showInAppNotification("Erreur d'expédition : " + translateError(err), "error");
    } finally {
      setLoading(false);
    }
  };

  const getChannelIcon = (type) => {
    if (type === 'global') return <Globe size={16} className="text-blue-600" />;
    if (type === 'private') return <User size={16} className="text-emerald-600" />;
    if (type === 'cercle') return <Users size={16} className="text-purple-600" />;
    return <Shield size={16} className="text-red-600" />;
  };

  if (!session) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* BOUTON FLOTTANT */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-amber-800 text-amber-50 p-4 rounded-full shadow-2xl hover:bg-amber-700 transition-transform transform hover:scale-110 border-2 border-amber-600 flex items-center gap-2"
        >
          <MessageCircle size={28} />
          {((isAdmin && channels.some(c => c.type === 'support' && c.status === 'nouveau')) ||
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
              {isAdmin ? "Standard Admin" : "Hub Pneumatique"}
            </h3>
            <div className="flex items-center gap-3">
              {view === 'list' && (
                <button onClick={() => setView('settings')} className="text-amber-300 hover:text-white transition-colors" title="Réglages du Télégraphe">
                  <Settings size={18}/>
                </button>
              )}
              <button onClick={() => setIsOpen(false)} className="hover:text-red-400 transition-colors">
                <X size={24} />
              </button>
            </div>
          </div>

          {/* VUE 1 : LISTE DES SALONS */}
          {view === 'list' && (
            <div className="flex-1 flex flex-col min-h-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
              
              {uiMode === 'tabs' && (
                <div className="flex bg-stone-100 border-b border-stone-200 p-1 shrink-0 overflow-x-auto hide-scrollbar">
                  {[
                    { id: 'global', label: 'Public', icon: <Globe size={14}/> },
                    { id: 'cercle', label: 'Cercles', icon: <Users size={14}/> },
                    { id: 'private', label: 'Privé', icon: <User size={14}/> },
                    { id: 'support', label: 'Conseil', icon: <Shield size={14}/> }
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 py-2 px-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1 rounded transition-all whitespace-nowrap ${activeTab === tab.id ? 'bg-white shadow-sm text-amber-900' : 'text-stone-500 hover:text-stone-700'}`}
                    >
                      {tab.icon} {tab.label}
                    </button>
                  ))}
                </div>
              )}

              <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
                <button
                  onClick={() => setView('new')}
                  className="w-full mb-2 py-2 border-2 border-dashed border-amber-600 text-amber-800 font-bold rounded hover:bg-amber-100 flex items-center justify-center gap-2 transition-colors"
                >
                  <ShieldAlert size={18} /> Signaler un problème au Conseil
                </button>

                <div className="space-y-3">
                  {channels.filter(c => uiMode === 'unified' || c.type === activeTab).length === 0 && (
                    <p className="text-center text-gray-500 italic mt-4">Aucune correspondance dans cette section.</p>
                  )}
                  {channels.filter(c => uiMode === 'unified' || c.type === activeTab).map(c => (
                    <div
                      key={c.id}
                      onClick={() => fetchMessages(c)}
                      className="p-3 bg-white border border-stone-200 rounded-lg hover:border-amber-400 hover:shadow-md cursor-pointer transition-all flex items-center gap-3"
                    >
                      <div className="p-2 bg-stone-50 rounded-full border border-stone-100 shrink-0">
                        {getChannelIcon(c.type)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-bold text-amber-900 truncate">{c.name || 'Conversation'}</h4>
                        <p className="text-xs text-stone-500 truncate mt-0.5 flex justify-between">
                          {/* Format inébranlable de la date */}
                          <span>Dernier message : {new Date(c.last_message_at).toLocaleDateString('fr-FR')} à {new Date(c.last_message_at).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }).replace(':', 'h')}</span>
                          {c.type === 'support' && c.status === 'nouveau' && <span className="text-red-600 font-bold">En attente</span>}
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
                onClick={createSupportTicket} 
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
                  if (activeChannel?.type === 'support' && !isMe) displayName = 'Garde des Sceaux';

                  return (
                    <div key={m.id} className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}>
                      <span className="text-[10px] text-stone-500 font-bold mb-0.5 px-1">{displayName}</span>
                      <div className={`p-3 rounded-xl max-w-[85%] text-sm shadow-sm whitespace-pre-wrap break-words ${
                        isMe 
                          ? 'bg-amber-600 text-white rounded-br-none' 
                          : m.is_admin 
                            ? 'bg-red-800 text-white rounded-bl-none border border-red-900' 
                            : 'bg-white text-stone-800 border border-stone-200 rounded-bl-none'
                      }`}>
                        {m.message}
                      </div>
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
                    disabled={loading}
                    onKeyDown={(e) => { 
                      if (e.key === 'Enter' && !e.shiftKey) { 
                        e.preventDefault(); 
                        sendReply(); 
                      } 
                    }}
                  />
                  <button
                    onClick={sendReply}
                    disabled={loading || !newMessage.trim()}
                    className="bg-amber-600 hover:bg-amber-700 text-white p-3 rounded-lg transition-colors shadow-sm disabled:opacity-50 h-full flex items-center justify-center shrink-0"
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
              <button onClick={() => setView('list')} className="text-sm font-bold text-amber-800 hover:text-amber-600 self-start flex items-center gap-1">← Retour</button>
              
              <h4 className="font-serif font-bold text-lg text-amber-900 border-b border-amber-200 pb-2">Réglages Pneumatiques</h4>
              
              <div className="space-y-6 mt-2">
                <div>
                  <label className="block text-sm font-bold text-amber-900 mb-3">Apparence du Hub</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => {
                        setUiMode('tabs');
                        try { localStorage.setItem('telegraphe_ui_mode', 'tabs'); } catch(e) {}
                      }}
                      className={`p-3 rounded-lg border-2 flex flex-col items-center gap-2 transition-all ${uiMode === 'tabs' ? 'border-amber-600 bg-amber-50 text-amber-900 shadow-sm' : 'border-stone-200 bg-white text-stone-500 hover:border-amber-300 hover:text-amber-700'}`}
                    >
                      <LayoutList size={24} />
                      <span className="text-xs font-bold uppercase tracking-wider">Onglets</span>
                    </button>
                    <button
                      onClick={() => {
                        setUiMode('unified');
                        try { localStorage.setItem('telegraphe_ui_mode', 'unified'); } catch(e) {}
                      }}
                      className={`p-3 rounded-lg border-2 flex flex-col items-center gap-2 transition-all ${uiMode === 'unified' ? 'border-amber-600 bg-amber-50 text-amber-900 shadow-sm' : 'border-stone-200 bg-white text-stone-500 hover:border-amber-300 hover:text-amber-700'}`}
                    >
                      <ListFilter size={24} />
                      <span className="text-xs font-bold uppercase tracking-wider">Flux Unifié</span>
                    </button>
                  </div>
                  <p className="text-xs text-stone-500 mt-3 leading-tight">Le mode Onglets sépare vos correspondances par catégorie. Le Flux Unifié rassemble tout par ordre chronologique, façon télégramme moderne.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}