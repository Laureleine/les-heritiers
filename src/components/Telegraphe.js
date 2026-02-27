// src/components/Telegraphe.js
// 9.0.0 // 9.0.1

import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Plus, Inbox, CheckCircle, Clock, ShieldAlert } from 'lucide-react';
import { supabase } from '../config/supabase';

export default function Telegraphe({ session, userProfile }) {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState('list'); // 'list', 'chat', 'new'
  const [tickets, setTickets] = useState([]);
  const [messages, setMessages] = useState([]);
  const [activeTicket, setActiveTicket] = useState(null);
  
  const [newSujet, setNewSujet] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  const isAdmin = userProfile?.profile?.role === 'super_admin';

  // Charger les tickets à l'ouverture
  useEffect(() => {
    if (isOpen && session) {
      fetchTickets();
    }
  }, [isOpen, session]);

  // Scroller en bas du chat automatiquement
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const fetchTickets = async () => {
    setLoading(true);
	let query = supabase.from('support_tickets').select('*, profiles(username)').order('updated_at', { ascending: false });
    
    // Si pas admin, on ne charge que ses propres tickets
    if (!isAdmin) {
      query = query.eq('user_id', session.user.id);
    }

    const { data, error } = await query;
    if (!error && data) setTickets(data);
    setLoading(false);
  };

  const fetchMessages = async (ticket) => {
    setLoading(true);
    setActiveTicket(ticket);
    const { data, error } = await supabase
      .from('support_messages')
      .select('*')
      .eq('ticket_id', ticket.id)
      .order('created_at', { ascending: true });
    
    if (!error && data) {
      setMessages(data);
      setView('chat');
      
      // Si Admin ouvre un "nouveau" ticket, on le passe en "lu"
      if (isAdmin && ticket.status === 'nouveau') {
        updateTicketStatus(ticket.id, 'lu');
      }
    }
    setLoading(false);
  };

  const createTicket = async () => {
    if (!newSujet.trim() || !newMessage.trim()) return;
    setLoading(true);

    const { data: ticketData, error: ticketError } = await supabase
      .from('support_tickets')
      .insert([{ user_id: session.user.id, sujet: newSujet }])
      .select().single();

    if (!ticketError && ticketData) {
      await supabase.from('support_messages').insert([{
        ticket_id: ticketData.id,
        user_id: session.user.id,
        message: newMessage,
        is_admin: isAdmin
      }]);
      
      setNewSujet('');
      setNewMessage('');
      fetchTickets();
      setView('list');
    }
    setLoading(false);
  };

  const sendReply = async () => {
    if (!newMessage.trim() || !activeTicket) return;
    setLoading(true);

    const { error } = await supabase.from('support_messages').insert([{
      ticket_id: activeTicket.id,
      user_id: session.user.id,
      message: newMessage,
      is_admin: isAdmin
    }]);

    if (!error) {
      // Mettre à jour le statut du ticket (si admin répond -> lu, si joueur répond -> nouveau)
      const newStatus = isAdmin ? 'lu' : 'nouveau';
      await updateTicketStatus(activeTicket.id, newStatus);
      
      setNewMessage('');
      fetchMessages(activeTicket); // Rafraîchir
    }
    setLoading(false);
  };

  const updateTicketStatus = async (id, status) => {
    await supabase.from('support_tickets').update({ status }).eq('id', id);
    fetchTickets(); // Rafraîchir la liste en fond
  };

  if (!session) return null; // Invisible si non connecté

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Bouton Flottant */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-amber-800 text-amber-50 p-4 rounded-full shadow-2xl hover:bg-amber-700 transition-transform transform hover:scale-110 border-2 border-amber-600 flex items-center gap-2"
        >
          <MessageCircle size={28} />
          {isAdmin && tickets.some(t => t.status === 'nouveau') && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full animate-bounce">!</span>
          )}
        </button>
      )}

      {/* Fenêtre du Télégraphe */}
      {isOpen && (
        <div className="w-96 max-w-[90vw] h-[32rem] max-h-[80vh] bg-[#fdfbf7] border-4 border-amber-900 rounded-lg shadow-2xl flex flex-col overflow-hidden font-serif">
          
          {/* En-tête Rétro */}
          <div className="bg-amber-900 text-amber-50 p-3 flex justify-between items-center border-b-4 border-amber-700">
            <h3 className="font-bold flex items-center gap-2">
              <Inbox size={20} />
              {isAdmin ? "Standard Télégraphique (Admin)" : "Télégraphe Pneumatique"}
            </h3>
            <button onClick={() => setIsOpen(false)} className="hover:text-red-400 transition-colors">
              <X size={24} />
            </button>
          </div>

          {/* VUE : LISTE DES MISSIVES */}
          {view === 'list' && (
            <div className="flex-1 overflow-y-auto p-4 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
              <button 
                onClick={() => setView('new')}
                className="w-full mb-4 py-2 border-2 border-dashed border-amber-600 text-amber-800 font-bold rounded hover:bg-amber-100 flex items-center justify-center gap-2"
              >
                <Plus size={18} /> Rédiger une missive
              </button>

              {loading ? <div className="text-center text-amber-700 italic">Connexion aux tubes...</div> : (
                <div className="space-y-3">
                  {tickets.length === 0 && <p className="text-center text-gray-500 italic">Aucune missive archivée.</p>}
                  {tickets.map(t => (
                    <div 
                      key={t.id} 
                      onClick={() => fetchMessages(t)}
                      className="p-3 bg-white border border-amber-300 rounded cursor-pointer hover:shadow-md transition-shadow relative"
                    >
                      <h4 className="font-bold text-amber-900 truncate pr-6">{t.sujet}</h4>
                      {isAdmin && <p className="text-xs text-gray-500 truncate">{t.profiles?.username || 'Héritier Anonyme'}</p>}
                      <p className="text-xs text-amber-700 mt-1 flex items-center gap-1">
                        {t.status === 'nouveau' && <span className="text-red-600 font-bold flex items-center gap-1"><Clock size={12}/> En attente</span>}
                        {t.status === 'lu' && <span className="text-blue-600 flex items-center gap-1"><Inbox size={12}/> À l'étude</span>}
                        {t.status === 'resolu' && <span className="text-green-600 flex items-center gap-1"><CheckCircle size={12}/> Résolu</span>}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* VUE : NOUVEAU TICKET */}
          {view === 'new' && (
            <div className="flex-1 p-4 flex flex-col gap-3 bg-[#fdfbf7]">
              <button onClick={() => setView('list')} className="text-sm text-amber-700 hover:underline mb-2">← Retour aux archives</button>
              <input 
                type="text" placeholder="Sujet du problème..." 
                className="p-2 border border-amber-400 rounded bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-600"
                value={newSujet} onChange={(e) => setNewSujet(e.target.value)}
              />
              <textarea 
                placeholder="Décrivez votre requête ou votre bug en détail..." 
                className="flex-1 p-2 border border-amber-400 rounded bg-amber-50 resize-none focus:outline-none focus:ring-2 focus:ring-amber-600"
                value={newMessage} onChange={(e) => setNewMessage(e.target.value)}
              />
              <button 
                onClick={createTicket} disabled={loading}
                className="bg-amber-800 text-white p-2 rounded hover:bg-amber-700 font-bold flex items-center justify-center gap-2"
              >
                <Send size={18} /> Expédier par tube
              </button>
            </div>
          )}

          {/* VUE : CHAT (CONVERSATION) */}
          {view === 'chat' && (
            <div className="flex-1 flex flex-col bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
              <div className="bg-amber-100 border-b border-amber-300 p-2 flex justify-between items-center">
                <button onClick={() => { setView('list'); setActiveTicket(null); }} className="text-sm text-amber-800 hover:underline">← Retour</button>
                {isAdmin && activeTicket?.status !== 'resolu' && (
                  <button onClick={() => { updateTicketStatus(activeTicket.id, 'resolu'); setView('list'); }} className="text-xs bg-green-600 text-white px-2 py-1 rounded">Clôturer</button>
                )}
              </div>
              
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((m, idx) => (
                  <div key={idx} className={`flex flex-col ${m.is_admin ? 'items-start' : 'items-end'}`}>
                    <span className="text-[10px] text-gray-500 mb-1">{m.is_admin ? 'Garde des Sceaux' : 'Vous'}</span>
                    <div className={`p-3 rounded-lg max-w-[85%] shadow-sm ${m.is_admin ? 'bg-amber-800 text-amber-50 rounded-tl-none' : 'bg-white border border-amber-300 text-amber-900 rounded-tr-none'}`}>
                      {m.message}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {activeTicket?.status !== 'resolu' ? (
                <div className="p-3 bg-amber-50 border-t border-amber-300 flex gap-2">
                  <input 
                    type="text" placeholder="Écrire une réponse..." 
                    className="flex-1 p-2 border border-amber-400 rounded focus:outline-none"
                    value={newMessage} onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendReply()}
                  />
                  <button onClick={sendReply} disabled={loading} className="bg-amber-800 text-white p-2 rounded hover:bg-amber-700">
                    <Send size={18} />
                  </button>
                </div>
              ) : (
                <div className="p-3 bg-gray-100 border-t border-gray-300 text-center text-gray-500 text-sm italic">
                  Cette affaire a été classée.
                </div>
              )}
            </div>
          )}

        </div>
      )}
    </div>
  );
}