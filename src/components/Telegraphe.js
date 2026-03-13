// src/components/Telegraphe.js
// 9.0.0 // 9.0.1
// 12.3.0
// 13.4.0

import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Plus, Inbox, CheckCircle, Clock, ShieldAlert, Globe, Users, User, Shield, LayoutList, ListFilter, Settings } from 'lucide-react';
import { supabase } from '../config/supabase';
import { showInAppNotification } from '../utils/SystemeServices';

export default function Telegraphe({ session, userProfile }) {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState('list'); // 'list', 'chat', 'new', 'settings'
  
  // États de l'architecture universelle (Canaux et Messages)
  const [channels, setChannels] = useState([]);
  const [messages, setMessages] = useState([]);
  const [activeChannel, setActiveChannel] = useState(null);
  
  const [newSujet, setNewSujet] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(false);
  
  // États de l'interface utilisateur (Sauvegardés localement)
  const [uiMode, setUiMode] = useState(localStorage.getItem('telegraphe_ui_mode') || 'tabs');
  const [activeTab, setActiveTab] = useState('global');
  
  const messagesEndRef = useRef(null);
  const isAdmin = userProfile?.profile?.role === 'super_admin' || userProfile?.profile?.role === 'gardien';

  // 1. Initialisation et écouteurs
  useEffect(() => {
    if (isOpen && session) {
      fetchChannels();
    }
  }, [isOpen, session]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ✨ L'ÉCOUTEUR MAGIQUE : Il guette le clic depuis le bouton "Message" de la page Communauté
  useEffect(() => {
    const handleOpenTelegraphe = async (e) => {
      const { targetUser } = e.detail;
      setIsOpen(true);
      await startPrivateChat(targetUser);
    };
    window.addEventListener('open-telegraphe', handleOpenTelegraphe);
    return () => window.removeEventListener('open-telegraphe', handleOpenTelegraphe);
  }, [session]);

  // 2. Moteur de requêtes (Les Salons)
  const fetchChannels = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('chat_channels').select('*').order('last_message_at', { ascending: false });

    if (!error && data) {
      const myId = session.user.id;
      // On filtre intelligemment ce que l'utilisateur a le droit de voir
      const accessibleChannels = data.filter(c => 
        c.type === 'global' || 
        (c.type === 'private' && (c.participant_1 === myId || c.participant_2 === myId)) ||
        (c.type === 'support' && (isAdmin || c.participant_1 === myId)) ||
        c.type === 'cercle' 
      );
      setChannels(accessibleChannels);
    }
    setLoading(false);
  };

  // 3. Moteur de requêtes (Les Missives du salon actif)
  const fetchMessages = async (channel) => {
    setLoading(true);
    setActiveChannel(channel);
    
    // On joint la table profiles pour récupérer les pseudos des auteurs
    const { data, error } = await supabase
      .from('chat_messages')
      .select('*, profiles(username)')
      .eq('channel_id', channel.id)
      .order('created_at', { ascending: true });

    if (!error && data) {
      setMessages(data);
      setView('chat');
      
      // Gestion des statuts (utile pour les tickets de support)
      if (channel.type === 'support') {
        if (isAdmin && channel.status === 'nouveau') {
          updateChannelStatus(channel.id, 'lu');
        } else if (!isAdmin && channel.status === 'lu') {
          updateChannelStatus(channel.id, 'consulte');
        }
      }
    }
    setLoading(false);
  };

  // 4. Création d'une correspondance privée (Déclenché par l'AdminDashboard)
  const startPrivateChat = async (targetUser) => {
    setLoading(true);
    const myId = session.user.id;
    
    // On cherche si un canal privé existe DÉJÀ entre ces deux joueurs
    const { data: existing } = await supabase.from('chat_channels')
        .select('*')
        .eq('type', 'private')
        .or(`and(participant_1.eq.${myId},participant_2.eq.${targetUser.id}),and(participant_1.eq.${targetUser.id},participant_2.eq.${myId})`)
        .single();

    if (existing) {
        fetchMessages(existing); // On ouvre l'existant
    } else {
        // On crée un nouveau canal privé
        const { data: newChannel, error } = await supabase.from('chat_channels')
            .insert([{
                type: 'private',
                name: `Correspondance avec ${targetUser.username}`, 
                participant_1: myId,
                participant_2: targetUser.id
            }])
            .select().single();

        if (newChannel) {
          fetchChannels();
          fetchMessages(newChannel);
        } else {
          showInAppNotification("Erreur lors de la création du canal privé.", "error");
        }
    }
    setLoading(false);
  };

  // 5. L'ancien système de Support technique (Préservé pour le bouton "Nouvelle missive")
  const createSupportTicket = async () => {
    if (!newSujet.trim() || !newMessage.trim()) return;
    setLoading(true);
    
    const { data: channelData, error: channelError } = await supabase
      .from('chat_channels')
      .insert([{ type: 'support', name: newSujet, participant_1: session.user.id, status: 'nouveau' }])
      .select().single();

    if (!channelError && channelData) {
      await supabase.from('chat_messages').insert([{
        channel_id: channelData.id,
        user_id: session.user.id,
        message: newMessage,
        is_admin: false
      }]);
      setNewSujet('');
      setNewMessage('');
      fetchChannels();
      setView('list');
      showInAppNotification("Missive de support expédiée au Conseil.", "success");
    }
    setLoading(false);
  };

  // 6. Envoyer un message dans le salon actif (Taverne, MP, Support)
  const sendReply = async () => {
    if (!newMessage.trim() || !activeChannel) return;
    setLoading(true);
    
    const { error } = await supabase.from('chat_messages').insert([{
      channel_id: activeChannel.id,
      user_id: session.user.id,
      message: newMessage,
      is_admin: isAdmin // Conservé pour le style visuel des Gardiens
    }]);

    if (!error) {
      // On met à jour l'heure du dernier message pour remonter le salon dans la liste
      const newStatus = activeChannel.type === 'support' ? (isAdmin ? 'lu' : 'nouveau') : 'open';
      await supabase.from('chat_channels').update({
        last_message_at: new Date().toISOString(),
        status: newStatus
      }).eq('id', activeChannel.id);
      
      setNewMessage('');
      fetchMessages(activeChannel); // Rafraîchir le chat
      fetchChannels(); // Rafraîchir la liste des salons
    }
    setLoading(false);
  };

  const updateChannelStatus = async (id, status) => {
    await supabase.from('chat_channels').update({ status }).eq('id', id);
    fetchChannels();
  };

  // Helpers d'interface
  const getChannelIcon = (type) => {
    if (type === 'global') return <Globe size={16} className="text-blue-600" />;
    if (type === 'private') return <User size={16} className="text-emerald-600" />;
    if (type === 'cercle') return <Users size={16} className="text-purple-600" />;
    return <Shield size={16} className="text-red-600" />;
  };

  if (!session) return null; // Invisible si non connecté

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* BOUTON FLOTTANT */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-amber-800 text-amber-50 p-4 rounded-full shadow-2xl hover:bg-amber-700 transition-transform transform hover:scale-110 border-2 border-amber-600 flex items-center gap-2"
        >
          <MessageCircle size={28} />
          {/* Alerte visuelle pour les tickets de support non lus */}
          {((isAdmin && channels.some(c => c.type === 'support' && c.status === 'nouveau')) || 
            (!isAdmin && channels.some(c => c.type === 'support' && c.status === 'lu'))) && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full animate-bounce">!</span>
          )}
        </button>
      )}

      {/* FENÊTRE PRINCIPALE */}
      {isOpen && (
        <div className="w-96 max-w-[90vw] h-[32rem] max-h-[80vh] bg-[#fdfbf7] border-4 border-amber-900 rounded-lg shadow-2xl flex flex-col overflow-hidden font-serif animate-fade-in-up">
          
          {/* EN-TÊTE RÉTRO */}
          <div className="bg-amber-900 text-amber-50 p-3 flex justify-between items-center border-b-4 border-amber-700">
            <h3 className="font-bold flex items-center gap-2">
              <Inbox size={20} />
              {isAdmin ? "Standard Admin" : "Hub Pneumatique"}
            </h3>
            <div className="flex items-center gap-3">
              {/* ✨ L'ENGRENAGE DES RÉGLAGES */}
              {view === 'list' && (
                <button 
                  onClick={() => setView('settings')} 
                  className="text-amber-300 hover:text-white transition-colors" 
                  title="Réglages du Télégraphe"
                >
                  <Settings size={18}/>
                </button>
              )}
              <button onClick={() => setIsOpen(false)} className="hover:text-red-400 transition-colors">
                <X size={24} />
              </button>
            </div>
          </div>

          {/* VUE 1 : LISTE DES SALONS (Hybride) */}
          {view === 'list' && (
            <div className="flex-1 flex flex-col min-h-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
              
              {/* Onglets Optionnels */}
              {uiMode === 'tabs' && (
                <div className="flex gap-4 px-4 pt-3 border-b border-amber-300 overflow-x-auto hide-scrollbar shrink-0 bg-amber-50/50">
                  {[
                    { id: 'global', icon: <Globe size={14}/>, label: 'Taverne' },
                    { id: 'private', icon: <User size={14}/>, label: 'Missives' },
                    { id: 'cercle', icon: <Users size={14}/>, label: 'Cercles' },
                    { id: 'support', icon: <Shield size={14}/>, label: 'Support' }
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`pb-2 text-sm font-bold flex items-center gap-1.5 border-b-2 whitespace-nowrap transition-colors ${activeTab === tab.id ? 'text-amber-900 border-amber-600' : 'text-amber-700/60 border-transparent hover:text-amber-800'}`}
                    >
                      {tab.icon} {tab.label}
                    </button>
                  ))}
                </div>
              )}

              {/* Contenu de la liste */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
                <button
                  onClick={() => setView('new')}
                  className="w-full mb-2 py-2 border-2 border-dashed border-amber-600 text-amber-800 font-bold rounded hover:bg-amber-100 flex items-center justify-center gap-2"
                >
                  <ShieldAlert size={18} /> Signaler un problème au Conseil
                </button>

                {loading ? <div className="text-center text-amber-700 italic mt-4">Connexion aux tubes...</div> : (
                  <div className="space-y-3">
                    {channels.filter(c => uiMode === 'unified' || c.type === activeTab).length === 0 && (
                      <p className="text-center text-gray-500 italic mt-4">Aucune correspondance dans cette section.</p>
                    )}
                    
                    {channels.filter(c => uiMode === 'unified' || c.type === activeTab).map(c => (
                      <div
                        key={c.id}
                        onClick={() => fetchMessages(c)}
                        className="p-3 bg-white border border-amber-300 rounded cursor-pointer hover:shadow-md hover:border-amber-500 transition-all relative flex items-center gap-3"
                      >
                        <div className="p-2 bg-stone-100 rounded-full border border-stone-200 shrink-0">
                          {getChannelIcon(c.type)}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="font-bold text-amber-900 truncate">{c.name || 'Conversation'}</h4>
                          <p className="text-xs text-stone-500 truncate mt-0.5 flex justify-between">
                             <span>Dernière activité : {new Date(c.last_message_at).toLocaleDateString('fr-FR', { hour: '2-digit', minute: '2-digit' }).replace(':', 'h')}</span>
                             {c.type === 'support' && c.status === 'nouveau' && <span className="text-red-600 font-bold">En attente</span>}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* VUE 2 : NOUVEAU TICKET DE SUPPORT */}
          {view === 'new' && (
            <div className="flex-1 p-4 flex flex-col gap-3 bg-[#fdfbf7]">
              <button onClick={() => setView('list')} className="text-sm text-amber-700 hover:underline mb-2 flex items-center gap-1">← Retour</button>
              
              <div className="bg-amber-100 p-2 rounded text-xs text-amber-800 border border-amber-200">
                Utilisez ce formulaire uniquement pour contacter les Gardiens (Bug, Règle, Support technique).
              </div>

              <input
                type="text" placeholder="Sujet du problème..."
                className="p-2 border border-amber-400 rounded bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-600"
                value={newSujet} onChange={(e) => setNewSujet(e.target.value)}
              />
              <textarea
                placeholder="Décrivez votre requête en détail..."
                className="flex-1 p-2 border border-amber-400 rounded bg-amber-50 resize-none focus:outline-none focus:ring-2 focus:ring-amber-600 custom-scrollbar"
                value={newMessage} onChange={(e) => setNewMessage(e.target.value)}
              />
              <button
                onClick={createSupportTicket} disabled={loading}
                className="bg-amber-800 text-white p-2 rounded hover:bg-amber-700 font-bold flex items-center justify-center gap-2"
              >
                <Send size={18} /> Expédier la requête
              </button>
            </div>
          )}

          {/* VUE 3 : LE CHAT (Taverne, MP, ou Support) */}
          {view === 'chat' && (
            <div className="flex-1 flex flex-col min-h-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
              <div className="bg-amber-100 border-b border-amber-300 p-2 flex justify-between items-center shadow-sm">
                <button onClick={() => { setView('list'); setActiveChannel(null); }} className="text-sm font-bold text-amber-800 hover:text-amber-600">← Retour</button>
                <div className="font-bold text-amber-900 text-sm truncate px-2">{activeChannel?.name}</div>
                
                {isAdmin && activeChannel?.type === 'support' && activeChannel?.status !== 'resolu' && (
                  <button onClick={() => { updateChannelStatus(activeChannel.id, 'resolu'); setView('list'); }} className="text-xs bg-green-600 text-white px-2 py-1 rounded shadow-sm hover:bg-green-700">Clôturer</button>
                )}
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                {messages.map((m, idx) => {
                  const isMe = m.user_id === session.user.id;
                  
                  // Logique d'affichage du nom
                  let displayName = isMe ? 'Vous' : (m.profiles?.username || 'Anonyme');
                  if (activeChannel?.type === 'support' && !isMe) displayName = 'Garde des Sceaux';

                  return (
                    <div key={m.id || idx} className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}>
                      <span className="text-[10px] text-gray-500 mb-1 font-bold tracking-wide uppercase">{displayName}</span>
                      <div className={`p-3 rounded-xl max-w-[85%] shadow-sm text-sm leading-relaxed ${
                        isMe 
                        ? 'bg-amber-800 text-amber-50 rounded-tr-none' 
                        : 'bg-white border border-amber-300 text-amber-900 rounded-tl-none'
                      }`}>
                        {m.message}
                      </div>
                    </div>
                  );
                })}
                <div ref={messagesEndRef} />
              </div>

              {activeChannel?.status !== 'resolu' ? (
                <div className="p-3 bg-amber-50 border-t border-amber-300 flex gap-2">
                  <input
                    type="text" placeholder="Écrire un message..."
                    className="flex-1 p-2 border border-amber-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-inner"
                    value={newMessage} 
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') sendReply(); }}
                  />
                  <button 
                    onClick={sendReply} 
                    disabled={loading || !newMessage.trim()} 
                    className="bg-amber-600 hover:bg-amber-700 text-white p-2 rounded-lg transition-colors shadow-sm disabled:opacity-50"
                  >
                    <Send size={20} />
                  </button>
                </div>
              ) : (
                <div className="p-3 bg-gray-100 border-t border-gray-300 text-center text-gray-500 text-sm italic font-bold">
                  Cette affaire a été classée par le Conseil.
                </div>
              )}
            </div>
          )}

          {/* ✨ VUE 4 : LE TIROIR DES RÉGLAGES */}
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
                        localStorage.setItem('telegraphe_ui_mode', 'tabs');
                      }}
                      className={`p-3 rounded-lg border-2 flex flex-col items-center gap-2 transition-all ${uiMode === 'tabs' ? 'border-amber-600 bg-amber-50 text-amber-900 shadow-sm' : 'border-stone-200 bg-white text-stone-500 hover:border-amber-300 hover:text-amber-700'}`}
                    >
                      <LayoutList size={24} />
                      <span className="text-xs font-bold uppercase tracking-wider">Onglets</span>
                    </button>
                    <button
                      onClick={() => {
                        setUiMode('unified');
                        localStorage.setItem('telegraphe_ui_mode', 'unified');
                      }}
                      className={`p-3 rounded-lg border-2 flex flex-col items-center gap-2 transition-all ${uiMode === 'unified' ? 'border-amber-600 bg-amber-50 text-amber-900 shadow-sm' : 'border-stone-200 bg-white text-stone-500 hover:border-amber-300 hover:text-amber-700'}`}
                    >
                      <ListFilter size={24} />
                      <span className="text-xs font-bold uppercase tracking-wider">Flux Unifié</span>
                    </button>
                  </div>
                  <p className="text-xs text-stone-500 mt-3 leading-tight">Le mode Onglets sépare vos correspondances par catégorie. Le Flux Unifié rassemble tout par ordre chronologique, façon télégramme moderne.</p>
                </div>

                <div className="opacity-60 grayscale cursor-not-allowed">
                  <label className="block text-sm font-bold text-amber-900 mb-2 flex items-center justify-between">
                    Alerte Sonore <span className="text-[10px] bg-amber-200 text-amber-900 px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">Bientôt</span>
                  </label>
                  <div className="p-3 rounded-lg border-2 border-stone-200 bg-stone-50 text-stone-500 text-xs text-center font-bold">
                    Désactivation de la cloche lors de la réception d'une missive.
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      )}
    </div>
  );
}
