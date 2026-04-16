// src/hooks/useTelegraphe.js
import { useState, useEffect, useRef, useCallback } from 'react';
import { supabase } from '../config/supabase';
import { showInAppNotification, translateError } from '../utils/SystemeServices';

export function useTelegraphe(session, userProfile) {
  const [channels, setChannels] = useState([]);
  const [messages, setMessages] = useState([]);
  const [activeChannel, setActiveChannel] = useState(null);
  const [loading, setLoading] = useState(false);

  // Le Laissez-passer des VIP
  const isAdmin = userProfile?.profile?.role === 'super_admin' || userProfile?.profile?.role === 'gardien';
  const isInitiated = userProfile?.profile?.is_initiated === true || isAdmin;

  // Mémorisation de l'état actif pour les WebSockets
  const activeChannelRef = useRef(activeChannel);
  useEffect(() => { activeChannelRef.current = activeChannel; }, [activeChannel]);

  // ==========================================================================
  // 📡 LECTURE DES CANAUX
  // ==========================================================================
  const fetchChannels = useCallback(async (isSilent = false) => {
    if (!isSilent) setLoading(true);
    try {
      const myId = session?.user?.id;
      if (!myId) return;

      // 1. On récupère les Cercles dont je suis le Docte ou Membre
      const { data: docteCercles } = await supabase.from('cercles').select('id, nom').eq('docte_id', myId);
      const { data: memberData } = await supabase.from('cercle_membres').select('cercles(id, nom)').eq('user_id', myId);

      const myCercles = [...(docteCercles || [])];
      if (memberData) {
        memberData.forEach(m => {
          if (m.cercles && !myCercles.find(c => c.id === m.cercles.id)) {
            myCercles.push(m.cercles);
          }
        });
      }
      const cercleIds = myCercles.map(c => c.id);

      // 2. Requête dynamique
      let queryOr = isAdmin
        ? `type.eq.global,type.eq.support,and(type.eq.private,or(participant_1.eq.${myId},participant_2.eq.${myId}))`
        : `type.eq.global,and(type.eq.support,participant_1.eq.${myId}),and(type.eq.private,or(participant_1.eq.${myId},participant_2.eq.${myId}))`;

      if (cercleIds.length > 0) {
        queryOr += `,and(type.eq.cercle,cercle_id.in.(${cercleIds.join(',')}))`;
      }
      if (isInitiated) {
        queryOr += `,type.eq.initie`;
      }

      const { data: chatData, error: chatError } = await supabase
        .from('chat_channels')
        .select('*')
        .or(queryOr)
        .order('last_message_at', { ascending: false });

      if (chatError) throw chatError;

      let finalChannels = [...(chatData || [])];

      // 3. Invention des "Canaux Virtuels" pour les historiques vides
      myCercles.forEach(cercle => {
        const exists = finalChannels.find(chan => chan.type === 'cercle' && chan.cercle_id === cercle.id);
        if (!exists) {
          finalChannels.push({
            id: `virtual_${cercle.id}`, is_virtual: true, type: 'cercle',
            name: `Table : ${cercle.nom}`, cercle_id: cercle.id,
            last_message_at: new Date(0).toISOString()
          });
        }
      });

      if (isInitiated) {
        const existsInitie = finalChannels.find(chan => chan.type === 'initie');
        if (!existsInitie) {
          finalChannels.push({
            id: 'virtual_initie', is_virtual: true, type: 'initie',
            name: 'Le Cercle des Initiés', cercle_id: null,
            last_message_at: new Date(0).toISOString()
          });
        }
      }

      finalChannels.sort((a, b) => new Date(b.last_message_at) - new Date(a.last_message_at));
      setChannels(finalChannels);
    } catch (err) {
      showInAppNotification("Erreur de lecture des correspondances : " + translateError(err), "error");
    } finally {
      if (!isSilent) setLoading(false);
    }
  }, [session?.user?.id, isAdmin, isInitiated]);

  const updateChannelStatus = useCallback(async (id, status) => {
    try {
      const { error } = await supabase.from('chat_channels').update({ status }).eq('id', id);
      if (error) throw error;
      fetchChannels(true); // Actualisation silencieuse
    } catch (err) {
      console.error("Erreur de mise à jour du statut:", err);
    }
  }, [fetchChannels]);

  // ==========================================================================
  // 📡 LECTURE DES MESSAGES
  // ==========================================================================
  const fetchMessages = useCallback(async (channel, isSilent = false) => {
    if (!isSilent) setLoading(true);
    setActiveChannel(channel);

    // Court-circuit pour les canaux fantômes !
    if (channel.is_virtual) {
      setMessages([]);
      if (!isSilent) setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('chat_messages')
        .select('*, profiles(username)')
        .eq('channel_id', channel.id)
        .order('created_at', { ascending: true });

      if (error) throw error;
      if (data) {
        setMessages(data);
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
  }, [isAdmin, updateChannelStatus]);

  // ==========================================================================
  // ✉️ ACTIONS (NOUVEAU CHAT, TICKET, REPONSE)
  // ==========================================================================
  const startPrivateChat = useCallback(async (targetUser) => {
    setLoading(true);
    const myId = session?.user?.id;
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
  }, [session?.user?.id, fetchChannels, fetchMessages]);

  const createSupportTicket = async (newSujet, newMessage) => {
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

      showInAppNotification("Missive de support expédiée au Conseil.", "success");
      fetchChannels(true);
      return true; // Succès !
    } catch (err) {
      showInAppNotification("Erreur d'expédition : " + translateError(err), "error");
      return false; // Échec
    } finally {
      setLoading(false);
    }
  };

  const sendReply = async (newMessage) => {
    if (!activeChannel) return false;
    setLoading(true);
    try {
      let actualChannelId = activeChannel.id;
      let currentChannel = activeChannel;

      // Si c'est un canal Virtuel, on le grave dynamiquement !
      if (activeChannel.is_virtual) {
        const { data: newChan, error: chanError } = await supabase.from('chat_channels').insert([{
          type: activeChannel.type, 
          name: activeChannel.name,
          cercle_id: activeChannel.cercle_id || null,
          status: 'open',
          last_message_at: new Date().toISOString()
        }]).select().single();

        if (chanError) throw chanError;
        actualChannelId = newChan.id;
        currentChannel = newChan;
        setActiveChannel(newChan);
      }

      const { error: msgError } = await supabase.from('chat_messages').insert([{
        channel_id: actualChannelId,
        user_id: session.user.id,
        message: newMessage,
        is_admin: isAdmin || false
      }]);

      if (msgError) throw msgError;

      if (!activeChannel.is_virtual) {
        const newStatus = activeChannel.type === 'support' ? (isAdmin ? 'lu' : 'nouveau') : 'open';
        const { error: updateError } = await supabase.from('chat_channels').update({
          last_message_at: new Date().toISOString(),
          status: newStatus
        }).eq('id', actualChannelId);
        
        if (updateError) throw updateError;
      }

      fetchMessages(currentChannel, true);
      fetchChannels(true);
      return true; // Succès !
    } catch (err) {
      showInAppNotification("Erreur d'expédition : " + translateError(err), "error");
      return false; // Échec
    } finally {
      setLoading(false);
    }
  };

  // ==========================================================================
  // 🔗 SUPABASE REALTIME (WebSockets)
  // ==========================================================================
  const fetchChannelsRef = useRef(fetchChannels);
  const fetchMessagesRef = useRef(fetchMessages);

  useEffect(() => {
    fetchChannelsRef.current = fetchChannels;
    fetchMessagesRef.current = fetchMessages;
  });

  useEffect(() => {
    if (!session?.user?.id) return;
    fetchChannelsRef.current(true);

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

  // On retourne toute la logique épurée au composant visuel
  return {
    channels,
    messages,
    activeChannel,
    setActiveChannel,
    loading,
    isAdmin,
    isInitiated,
    fetchMessages,
    startPrivateChat,
    createSupportTicket,
    sendReply
  };
}