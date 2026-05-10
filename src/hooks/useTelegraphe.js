// src/hooks/useTelegraphe.js
import { useState, useEffect, useRef, useCallback } from 'react';
import { supabase } from '../config/supabase';
import { showInAppNotification, translateError } from '../utils/SystemeServices';

export function useTelegraphe(session, userProfile) {
  const [channels, setChannels] = useState([]);
  const [messages, setMessages] = useState([]);
  const [activeChannel, setActiveChannel] = useState(null);
  const [loading, setLoading] = useState(false);
  const [messageReads, setMessageReads] = useState({});
  
  // ✨ NOUVEAU : La mémoire visuelle des non-lus
  const [hasUnread, setHasUnread] = useState(false);

  const isAdmin = userProfile?.profile?.role === 'super_admin' || userProfile?.profile?.role === 'gardien';
  const isInitiated = userProfile?.profile?.is_initiated === true || isAdmin;

  const activeChannelRef = useRef(activeChannel);
  useEffect(() => { activeChannelRef.current = activeChannel; }, [activeChannel]);

  // ✨ NOUVEAU : Le marqueur temporel de lecture
  const markTelegrapheAsOpened = useCallback(() => {
    setHasUnread(false);
    if (session?.user?.id) {
      try {
        localStorage.setItem(`telegraphe_last_opened_${session.user.id}`, new Date().toISOString());
      } catch(e) {}
    }
  }, [session?.user?.id]);

  // ==========================================================================
  // 📡 LECTURE DES CANAUX
  // ==========================================================================
  const fetchChannels = useCallback(async (isSilent = false) => {
    if (!isSilent) setLoading(true);
    try {
      const myId = session?.user?.id;
      if (!myId) return;

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
      
      // ✨ LE DÉTECTEUR HORS-LIGNE DE MESSAGES NON LUS
      try {
        const lastOpened = localStorage.getItem(`telegraphe_last_opened_${myId}`);
        if (lastOpened && finalChannels.length > 0) {
          const hasRecent = finalChannels.some(c => 
             c.type !== 'global' && 
             new Date(c.last_message_at).getTime() > new Date(lastOpened).getTime()
          );
          if (hasRecent) setHasUnread(true);
        }
      } catch(e) {}

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
      fetchChannels(true);
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

    if (channel.is_virtual) {
      setMessages([]);
      setMessageReads({});
      if (!isSilent) setLoading(false);
      return;
    }

    const myId = session?.user?.id;

    try {
      const { data, error } = await supabase
        .from('chat_messages')
        .select('*, profiles(username)')
        .eq('channel_id', channel.id)
        .order('created_at', { ascending: true });

      if (error) throw error;
      if (data) {
        setMessages(data);

        if (channel.type !== 'global' && data.length > 0) {
          const toMark = data
            .filter(m => m.user_id !== myId)
            .map(m => ({ message_id: m.id, user_id: myId }));

          if (toMark.length > 0) {
            supabase.from('chat_message_reads')
              .upsert(toMark, { onConflict: 'message_id,user_id', ignoreDuplicates: true })
              .then(); 
          }

          const { data: readsData } = await supabase
            .from('chat_message_reads')
            .select('message_id, user_id')
            .in('message_id', data.map(m => m.id));

          const readsMap = {};
          readsData?.forEach(r => {
            if (!readsMap[r.message_id]) readsMap[r.message_id] = [];
            readsMap[r.message_id].push(r.user_id);
          });
          setMessageReads(readsMap);
        } else {
          setMessageReads({});
        }

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
  }, [session?.user?.id, isAdmin, updateChannelStatus]);

  // ==========================================================================
  // ✉️ ACTIONS (NOUVEAU CHAT, TICKET, REPONSE)
  // ==========================================================================
  const startPrivateChat = useCallback(async (targetUser) => {
    setLoading(true);
    try {
      const myId = session?.user?.id;
      if (!myId || !targetUser?.id) return;

      const { data: existingChannels, error: searchError } = await supabase
        .from('chat_channels')
        .select('*')
        .eq('type', 'private')
        .or(`and(participant_1.eq.${myId},participant_2.eq.${targetUser.id}),and(participant_1.eq.${targetUser.id},participant_2.eq.${myId})`);

      if (searchError) throw searchError;

      // ✨ LE FIX EST ICI : On cible correctement l'index du tableau !
      const existing = existingChannels?.[0];

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
      return true; 
    } catch (err) {
      showInAppNotification("Erreur d'expédition : " + translateError(err), "error");
      return false; 
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
      return true; 
    } catch (err) {
      showInAppNotification("Erreur d'expédition : " + translateError(err), "error");
      return false; 
    } finally {
      setLoading(false);
    }
  };

  // ==========================================================================
  // 🔗 SUPABASE REALTIME (WebSockets)
  // ==========================================================================
  const fetchChannelsRef = useRef(fetchChannels);
  const fetchMessagesRef = useRef(fetchMessages);
  const channelsRef = useRef(channels);

  useEffect(() => {
    fetchChannelsRef.current = fetchChannels;
    fetchMessagesRef.current = fetchMessages;
    channelsRef.current = channels;
  });

  useEffect(() => {
    if (!session?.user?.id) return;

    fetchChannelsRef.current(true);

    const chatSubscription = supabase.channel('telegraphe-realtime')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'chat_messages' }, (payload) => {
        fetchChannelsRef.current(true);

        if (activeChannelRef.current && payload.new?.channel_id === activeChannelRef.current.id) {
          fetchMessagesRef.current(activeChannelRef.current, true);
        }

        // ✨ LE FILTRE INTELLIGENT DE NOTIFICATION
        if (payload.eventType === 'INSERT') {
          if (payload.new.user_id !== session.user.id) {
            const targetChannel = channelsRef.current.find(c => c.id === payload.new.channel_id);
            if (!targetChannel || targetChannel.type !== 'global') {
              if (userProfile?.profile?.notify_telegraphe !== false) {
                showInAppNotification("📠 Une nouvelle missive pneumatique vient d'arriver !", 'info');
              }
              setHasUnread(true); // ✨ LA PASTILLE ROUGE VISUELLE
            }
          }
        }
      })
      .on('postgres_changes', { event: '*', schema: 'public', table: 'chat_channels' }, () => {
        fetchChannelsRef.current(true);
      })
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'chat_message_reads' }, (payload) => {
        const { message_id, user_id } = payload.new;
        setMessageReads(prev => {
          const prevReaders = prev[message_id] || [];
          if (prevReaders.includes(user_id)) return prev; 
          return { ...prev, [message_id]: [...prevReaders, user_id] };
        });
      })
      .subscribe();

    return () => { supabase.removeChannel(chatSubscription); };
  }, [session?.user?.id]);

  return {
    channels,
    messages,
    activeChannel,
    setActiveChannel,
    loading,
    isAdmin,
    isInitiated,
    messageReads,
    fetchMessages,
    startPrivateChat,
    createSupportTicket,
    sendReply,
    hasUnread, // ✨ EXPORTÉ
    markTelegrapheAsOpened // ✨ EXPORTÉ
  };
}