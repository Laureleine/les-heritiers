// src/hooks/useTelegraphe.js
import { useState, useEffect, useRef, useCallback } from 'react';
import { supabase } from '../config/supabase';
import { showInAppNotification, translateError } from '../utils/SystemeServices';
import { isAdmin as checkIsAdmin } from '../utils/authRoles';
import { withLoading } from '../utils/withLoading';
import { useOfflineStatus } from '../context/OfflineStatusContext';

const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

export function useTelegraphe(session, userProfile) {
  const [channels, setChannels] = useState([]);
  const [messages, setMessages] = useState([]);
  const [activeChannel, setActiveChannel] = useState(null);
  const [loading, setLoading] = useState(false);
  const [messageReads, setMessageReads] = useState({});

  const isAdmin = checkIsAdmin(userProfile);
  const isInitiated = userProfile?.profile?.is_initiated === true || isAdmin;
  const { isOnline } = useOfflineStatus();

  const mountedRef = useRef(true);
  useEffect(() => () => { mountedRef.current = false; }, []);

  const activeChannelRef = useRef(activeChannel);
  useEffect(() => { activeChannelRef.current = activeChannel; }, [activeChannel]);

  // ==========================================================================
  // 📡 LECTURE DES CANAUX & CALCUL DES NON-LUS (PAR CANAL)
  // ==========================================================================
  const fetchChannels = useCallback(async (isSilent = false) => {
    if (!isOnline) {
      showInAppNotification('Le Télégraphe nécessite une connexion.', 'warning');
      return;
    }
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
      
      // ✨ LE DÉTECTEUR HORS-LIGNE CHIRURGICAL (Canal par Canal)
      finalChannels = finalChannels.map(c => {
        let unread = false;
        if (c.type !== 'global' && c.last_message_at) {
          const lastRead = localStorage.getItem(`telegraphe_read_${myId}_${c.id}`);
          if (lastRead) {
            unread = new Date(c.last_message_at).getTime() > new Date(lastRead).getTime();
          } else {
            // Si jamais ouvert, on remonte 7 jours max pour éviter le spam des vieux canaux
            const sevenDaysAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
            if (new Date(c.last_message_at).getTime() > sevenDaysAgo) {
              unread = true;
            } else {
              localStorage.setItem(`telegraphe_read_${myId}_${c.id}`, c.last_message_at);
            }
          }
        }
        return { ...c, has_unread: unread };
      });

      if (!mountedRef.current) return;
      setChannels(finalChannels);
    } catch (err) {
      showInAppNotification("Erreur de lecture des correspondances : " + translateError(err), "error");
    } finally {
      if (mountedRef.current && !isSilent) setLoading(false);
    }
  }, [session?.user?.id, isAdmin, isInitiated, isOnline]);

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
  // 📡 LECTURE DES MESSAGES & MARQUAGE INDIVIDUEL
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

    if (!isOnline) {
      showInAppNotification('Le Télégraphe nécessite une connexion.', 'warning');
      if (!isSilent) setLoading(false);
      return;
    }

    const myId = session?.user?.id;

    // ✨ MARQUAGE IMMÉDIAT COMME LU POUR CE CANAL SPÉCIFIQUE
    // On stocke last_message_at du canal (horloge serveur) + 1ms pour éviter la dérive client/serveur
    if (myId && channel.id) {
      const readDate = channel.last_message_at
        ? new Date(new Date(channel.last_message_at).getTime() + 1).toISOString()
        : new Date().toISOString();
      localStorage.setItem(`telegraphe_read_${myId}_${channel.id}`, readDate);
      setChannels(prev => prev.map(c => c.id === channel.id ? { ...c, has_unread: false } : c));
    }

    try {
      const { data, error } = await supabase
        .from('chat_messages')
        .select('*, profiles(username)')
        .eq('channel_id', channel.id)
        .order('created_at', { ascending: false })
        .limit(200);

      if (error) throw error;
      if (!mountedRef.current) return;
      if (data) {
        setMessages([...data].reverse());

        if (channel.type !== 'global' && data.length > 0) {
          const toMark = data
            .filter(m => m.user_id !== myId)
            .map(m => ({ message_id: m.id, user_id: myId }));

          if (toMark.length > 0) {
            supabase.from('chat_message_reads')
              .upsert(toMark, { onConflict: 'message_id,user_id', ignoreDuplicates: true })
              .then(); 
          }

          const ids = data.map(m => m.id);
          const chunks = chunk(ids, 100);
          const results = await Promise.all(
            chunks.map(c =>
              supabase.from('chat_message_reads').select('message_id, user_id').in('message_id', c)
            )
          );
          const readsData = results.flatMap(r => r.data || []);

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
      if (mountedRef.current && !isSilent) setLoading(false);
    }
  }, [session?.user?.id, isAdmin, updateChannelStatus, isOnline]);

  // ==========================================================================
  // ✉️ ACTIONS (NOUVEAU CHAT, TICKET, REPONSE)
  // ==========================================================================
  const startPrivateChat = useCallback(async (targetUser) => {
    if (!isOnline) {
      showInAppNotification('Le Télégraphe nécessite une connexion.', 'warning');
      return;
    }
    await withLoading(setLoading, async () => {
      const myId = session?.user?.id;
      if (!myId || !targetUser?.id) return;

      const { data: existingChannels, error: searchError } = await supabase
        .from('chat_channels')
        .select('*')
        .eq('type', 'private')
        .or(`and(participant_1.eq.${myId},participant_2.eq.${targetUser.id}),and(participant_1.eq.${targetUser.id},participant_2.eq.${myId})`);

      if (searchError) throw searchError;

      // Le respect du Pacte des Crochets pour les tableaux !
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
    }, (err) => showInAppNotification("Erreur lors de la création du canal privé : " + translateError(err), "error"));
  }, [session?.user?.id, fetchChannels, fetchMessages, isOnline]);

  const createSupportTicket = async (newSujet, newMessage) => {
    if (!isOnline) {
      showInAppNotification('Le Télégraphe nécessite une connexion.', 'warning');
      return;
    }
    return await withLoading(setLoading, async () => {
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

      // On est l'auteur du ticket et de son premier message : jamais "non lu" pour soi-même.
      localStorage.setItem(
        `telegraphe_read_${session.user.id}_${channelData.id}`,
        new Date(new Date(channelData.last_message_at).getTime() + 1).toISOString()
      );

      showInAppNotification("Missive de support expédiée au Conseil.", "success");
      fetchChannels(true);
      return true;
    }, (err) => {
      showInAppNotification("Erreur d'expédition : " + translateError(err), "error");
      return false;
    });
  };

  const sendReply = async (newMessage) => {
    if (!activeChannel) return false;
    if (!isOnline) {
      showInAppNotification('Le Télégraphe nécessite une connexion.', 'warning');
      return;
    }
    return await withLoading(setLoading, async () => {
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
        const lastMessageAt = new Date().toISOString();
        const newStatus = activeChannel.type === 'support' ? (isAdmin ? 'lu' : 'nouveau') : 'open';
        const { error: updateError } = await supabase.from('chat_channels').update({
          last_message_at: lastMessageAt,
          status: newStatus
        }).eq('id', actualChannelId);
        if (updateError) throw updateError;
        // currentChannel (= activeChannel) date d'avant l'envoi : le rafraîchir avec le
        // nouveau last_message_at, sinon fetchMessages ci-dessous marque le canal "lu"
        // jusqu'à l'ANCIEN message, et le message qu'on vient d'écrire soi-même repasse
        // "non lu" pour soi au prochain fetchChannels.
        currentChannel = { ...currentChannel, last_message_at: lastMessageAt };
      }

      fetchMessages(currentChannel, true);
      fetchChannels(true);
      return true;
    }, (err) => {
      showInAppNotification("Erreur d'expédition : " + translateError(err), "error");
      return false;
    });
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
        
        if (payload.eventType === 'INSERT') {
          const isMe = payload.new.user_id === session.user.id;
          const currentActiveId = activeChannelRef.current?.id;
          const isCurrentlyReading = currentActiveId === payload.new.channel_id;

          // 1. Mise à jour de la vue chat si on est en train de lire cette conversation
          if (isCurrentlyReading) {
            fetchMessagesRef.current(activeChannelRef.current, true);
            // On avance le curseur local pour ne pas déclencher la pastille plus tard
            if (!isMe) {
              const readDate = new Date(new Date(payload.new.created_at).getTime() + 1000).toISOString();
              localStorage.setItem(`telegraphe_read_${session.user.id}_${payload.new.channel_id}`, readDate);
            }
          }

          // 2. Mise à jour OPTIMISTE de la liste (Évite la désynchronisation et le besoin de F5)
          setChannels(prev => {
            const channelExists = prev.find(c => c.id === payload.new.channel_id);
            if (channelExists) {
              const newChannels = prev.map(c => {
                if (c.id === payload.new.channel_id) {
                  return {
                    ...c,
                    last_message_at: payload.new.created_at, // Temps réel du serveur
                    has_unread: !isMe && c.type !== 'global' && !isCurrentlyReading
                  };
                }
                return c;
              });
              // Remonte le canal tout en haut de la liste
              newChannels.sort((a, b) => new Date(b.last_message_at) - new Date(a.last_message_at));
              return newChannels;
            } else {
              // Nouveau canal inconnu (ex: un joueur vient de créer un chat privé avec nous)
              setTimeout(() => fetchChannelsRef.current(true), 1500);
              return prev;
            }
          });

          // 3. Notification système (Toast) si on ne lit pas déjà le canal
          if (!isMe && !isCurrentlyReading) {
            const targetChannel = channelsRef.current.find(c => c.id === payload.new.channel_id);
            if (!targetChannel || targetChannel.type !== 'global') {
              if (userProfile?.profile?.notify_telegraphe !== false) {
                showInAppNotification("📠 Une nouvelle missive pneumatique vient d'arriver !", 'info');
              }
            }
          }
        } else {
          // Updates/Deletes de messages
          setTimeout(() => fetchChannelsRef.current(true), 500);
        }
      })
      .on('postgres_changes', { event: '*', schema: 'public', table: 'chat_channels' }, () => {
         setTimeout(() => fetchChannelsRef.current(true), 500);
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
  }, [session?.user?.id, userProfile?.profile?.notify_telegraphe]);


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
    sendReply
  };
}