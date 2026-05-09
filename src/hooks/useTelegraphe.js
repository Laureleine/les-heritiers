// src/hooks/useTelegraphe.js

import { useState, useEffect, useCallback } from 'react';
import supabase from '../utils/supabaseClient'; // Assurez-vous que ce chemin est correct

/**
 * Hook personnalisé pour gérer la connexion temps réel et les données de messagerie du Télégraphe.
 * @param {object} session - L'objet session utilisateur Supabase.
 * @param {object} userProfile - Le profil utilisateur actuel.
 * @returns {object} Contient tous les états et fonctions nécessaires pour le composant Telegraphe.
 */
export const useTelegraphe = (session, userProfile) => {
  const [messages, setMessages] = useState([]);
  const [activeChannel, setActiveChannel] = useState(null);
  const [loading, setLoading] = useState(true);
  // État des canaux (pour la vue liste)
  const [channels, setChannels] = useState([]); 
  // État pour les accusés de réception : { [messageId]: [userId, ...] }
  const [messageReads, setMessageReads] = useState({});

  // --- Détermination des rôles et statuts ---
  const isAdmin = userProfile?.profile?.role === 'super_admin' || userProfile?.profile?.role === 'gardien';
  const isInitiated = userProfile?.profile?.is_initiated === true || isAdmin;


  /** ---------------------------------------------------
   * ÉCOUTEUR TEMPS RÉEL (LE CŒUR DU SYSTÈME)
   * Gère l'abonnement aux changements de messages et de canaux.
   * --------------------------------------------------- */
  useEffect(() => {
    if (!session || !userProfile) return () => {};

    // --- Abonnement aux nouveaux messages ---
    const messageChannel = supabase
      .channel('messages_realtime')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'messages' },
        (payload) => {
          // Vérification de la pertinence du message avant de mettre à jour l'état
          const newMessage = payload.new;

          if (newMessage && newMessage.user_id !== session.user.id) {
            console.log("✅ Nouveau message reçu en temps réel:", newMessage);
            setMessages(prevMessages => [...prevMessages, newMessage]);
          }
        },
        { payload: (payload) => {
             console.warn("Message reçu via Realtime:", payload);
        }}
      )
      .subscribe();

    // --- Abonnement aux changements de canaux (pour la vue liste) ---
    const channelListChannel = supabase
      .channel('channels_realtime')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'channels' },
        (payload) => {
          console.log("✅ Nouveau canal détecté:", payload.new);
          setChannels(prevChannels => [...prevChannels, payload.new]);
        },
        { payload: (payload) => {
             console.warn("Canal détecté via Realtime:", payload);
        }}
      )
      .subscribe();

    // Fonction de nettoyage : Désabonnement des écouteurs
    return () => {
      supabase.removeChannel(messageChannel);
      supabase.removeChannel(channelListChannel);
    };
  }, [session, userProfile]);


  /** ---------------------------------------------------
   * RÉCUPÉRATION DES DONNÉES (CANAUX ET MESSAGES)
   * --------------------------------------------------- */

  const fetchChannels = useCallback(async (isSilent = false) => {
    if (!isSilent) setLoading(true);
    try {
      const myId = session?.user?.id;
      if (!myId) return;

      // 1. Récupération des Cercles et Canaux privés/groupes
      let queryOr = isAdmin
        ? `type.eq.global,type.eq.support,and(type.eq.private,or(participant_1.eq.${myId},participant_2.eq.${myId}))`
        : `type.eq.global,and(type.eq.support,participant_1.eq.${myId}),and(type.eq.private,or(participant_1.eq.${myId},participant_2.eq.${myId}))`;

      // Logique de filtrage des cercles (simplifiée pour l'exemple)
      const { data: chatData, error: chatError } = await supabase
        .from('chat_channels')
        .select('*')
        .or(queryOr)
        .order('last_message_at', { ascending: false });

      if (chatError) throw chatError;

      let finalChannels = chatData || [];

      // 2. Ajout des canaux virtuels manquant (pour l'UX)
      // Cette partie devrait être plus complète en fonction de votre schéma réel
      const virtualChannels = [
        { id: 'virtual_global', is_virtual: true, type: 'global', name: 'Public', last_message_at: new Date(0).toISOString() },
        ...(isInitiated ? [{ id: 'virtual_initie', is_virtual: true, type: 'initie', name: 'Le Cercle des Initiés', last_message_at: new Date(0).toISOString() }] : [])
      ];

      finalChannels = [...finalChannels, ...virtualChannels].filter((c, index, self) => 
        self.findIndex((t) => (
          t.id === c.id && t.is_virtual === c.is_virtual
        ))
      );


      setChannels(finalChannels);
    } catch (err) {
      console.error("Erreur lors de la récupération des canaux:", err);
    } finally {
      if (!isSilent) setLoading(false);
    }
  }, [session?.user?.id, isAdmin, isInitiated]);


  /** ---------------------------------------------------
   * MISE À JOUR DES MESSAGES ET STATUT DE LECTURE
   * --------------------------------------------------- */

  const fetchMessages = useCallback(async (channelId) => {
    if (!activeChannel || activeChannel.id !== channelId) {
        setActiveChannel({ id: channelId, name: 'Conversation', type: 'global', status: 'actif' });
    }
    setLoading(true);

    try {
      let query = supabase
        .from('messages')
        .select(`*, profiles:profiles (username, user_id)`)
        .eq('channel_id', channelId)
        .order('created_at', { ascending: true })
        .limit(100);

      const { data, error } = await query;
      if (error) throw error;

      setMessages(data || []);
    } catch (error) {
      console.error("Erreur lors de la récupération des messages:", error);
      setMessages([]);
    } finally {
      setLoading(false);
    }
  }, [supabase]);


  /** ---------------------------------------------------
   * GESTION DES ACCUSÉS DE RÉCEPTION (READ RECEIPTS)
   * Déclenché après la récupération des messages.
   * --------------------------------------------------- */
  const markMessagesAsRead = useCallback(async () => {
    if (!activeChannel || activeChannel.type === 'global') return;

    const myId = session?.user?.id;
    // On ne marque que les messages reçus (qui n'ont pas été envoyés par moi)
    const messagesToMark = messages.filter(m => m.user_id !== myId); 

    if (messagesToMark.length > 0) {
      try {
        const toMark = messagesToMark.map(m => ({ 
          message_id: m.id, 
          user_id: myId 
        }));

        // Utilisation de upsert pour insérer ou mettre à jour le statut de lecture
        await supabase.from('chat_message_reads')
          .upsert(toMark, { onConflict: 'message_id,user_id', ignoreDuplicates: true });
      } catch (err) {
        console.error("Erreur lors du marquage des lectures:", err);
      }
    }
  }, [activeChannel, messages]);


  /** ---------------------------------------------------
   * ACTIONS DE COMMUNICATION
   * --------------------------------------------------- */

  const startPrivateChat = useCallback(async (targetUser) => {
    console.log(`Tentative de démarrage d'un chat privé avec ${targetUser.email}`);
    setActiveChannel({ id: 'private_chat', name: targetUser.username || 'Utilisateur Privé', type: 'private', status: 'actif' });

    // Logique pour trouver ou créer un canal privé entre l'utilisateur et la cible.
    try {
        const myId = session?.user?.id;
        if (!myId) throw new Error("Session utilisateur manquante.");

        let existingChannel = await supabase.from('chat_channels')
            .select('*')
            .eq('type', 'private')
            .or(`and(participant_1.eq.${myId},participant_2.eq.${targetUser.id}),and(participant_1.eq.${targetUser.id},participant_2.eq.${myId})`)
            .maybeSingle();

        if (existingChannel) {
            await fetchMessages(existingChannel.id);
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
            await fetchMessages(newChannel.id);
        }
    } catch (err) {
      console.error("Erreur lors de la gestion du chat privé:", err);
    }
  }, [supabase, fetchMessages]);


  const createSupportTicket = useCallback(async (subject, content) => {
    try {
      // 1. Créer le canal dans la DB
      const { data: channelData, error: channelError } = await supabase
        .from('chat_channels')
        .insert([{ type: 'support', name: subject, participant_1: session.user.id, status: 'nouveau' }])
        .select().single();

      if (channelError) throw channelError;

      // 2. Envoyer le premier message dans ce canal
      await supabase.from('messages').insert([{
        channel_id: channelData.id,
        user_id: session.user.id,
        message: content,
        is_admin: false,
        profiles: { username: userProfile?.username }, 
        created_at: new Date().toISOString(),
      }]);

      // 3. Mettre à jour le statut du canal (pour l'affichage)
      await supabase.from('chat_channels').update({ status: 'ouvert', last_message_at: new Date().toISOString() }).eq('id', channelData.id);


      showInAppNotification("Missive de support expédiée au Conseil.", "success");
      // Recharger les canaux pour voir le nouveau ticket
      await fetchChannels(true); 
      return true; // Succès !
    } catch (err) {
      console.error("Erreur d'expédition du ticket:", err);
      showInAppNotification("Erreur d'expédition : " + translateError(err), "error");
      return false; // Échec
    }
  }, [supabase, fetchChannels, showInAppNotification, session?.user?.id]);


  const sendReply = useCallback(async (messageContent) => {
    if (!activeChannel || !session) return false;

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
        setActiveChannel(newChan); // Mise à jour de l'état actif
      }

      // 1. Insertion du message
      await supabase.from('messages').insert({
        channel_id: actualChannelId,
        user_id: session.user.id,
        message: messageContent,
        is_admin: isAdmin || false,
        profiles: { username: userProfile?.username }, 
        created_at: new Date().toISOString(),
      });

      // 2. Mise à jour du statut et de l'horodatage du canal (sauf si c'est un chat privé)
      if (!activeChannel.is_virtual && activeChannel.type !== 'private') {
        const newStatus = activeChannel.type === 'support' ? (isAdmin ? 'lu' : 'nouveau') : 'open';
        await supabase.from('chat_channels').update({
          last_message_at: new Date().toISOString(),
          status: newStatus
        }).eq('id', actualChannelId);
      }

      // 3. Récupération des messages mis à jour (pour le défilement)
      await fetchMessages(actualChannelId);
      await fetchChannels(true); // Mise à jour de la liste des canaux
      return true; // Succès !
    } catch (err) {
      console.error("Erreur d'expédition du message:", err);
      showInAppNotification("Échec de l'envoi : " + translateError(err), "error");
      return false; // Échec
    }
  }, [activeChannel, session, userProfile, isAdmin, fetchMessages, supabase, showInAppNotification]);


  // ==========================================================================
  // 🔗 SUPABASE REALTIME (WebSockets) - GESTION DES SUBSCRIPTIONS
  // ==========================================================================
  useEffect(() => {
    if (!session?.user?.id) return () => {};

    const myId = session.user.id;

    // --- Abonnement aux messages en temps réel ---
    const messageChannel = supabase
      .channel('messages_realtime')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'messages' },
        (payload) => {
          // 1. Vérification de la pertinence du message (doit être pour un canal actif et ne pas venir de moi)
          const newMessage = payload.new;

          if (newMessage && newMessage.user_id !== myId) {
            console.log("✅ Nouveau message reçu en temps réel:", newMessage);
            // 2. Mise à jour de l'état des messages pour déclencher le composant Telegraphe
            setMessages(prevMessages => [...prevMessages, newMessage]);
          }
        },
        { payload: (payload) => {
             console.warn("Message reçu via Realtime:", payload);
        }}
      )
      .subscribe();

    // --- Abonnement aux changements de canaux et au statut des lectures ---
    const channelListChannel = supabase
      .channel('channels_realtime')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'channels' },
        (payload) => {
          console.log("✅ Nouveau canal détecté:", payload.new);
          setChannels(prevChannels => [...prevChannels, payload.new]);
        },
        { payload: (payload) => {
             console.warn("Canal détecté via Realtime:", payload);
        }}
      )
      .subscribe();

    // --- Abonnement aux accusés de réception (READ RECEIPTS) ---
    const readReceiptChannel = supabase
      .channel('message_reads_realtime')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'chat_message_reads' },
        (payload) => {
          console.log("✅ Accusé de réception reçu en temps réel:", payload.new);
          setMessageReads(prev => {
            const { message_id, user_id } = payload.new;
            const prevReaders = prev[message_id] || [];
            if (prevReaders.includes(user_id)) return prev; // Déjà connu
            return { ...prev, [message_id]: [...prevReaders, user_id] };
          });
        },
        { payload: (payload) => {
             console.warn("Accusé de réception détecté via Realtime:", payload);
        }}
      )
      .subscribe();

    // Fonction de nettoyage : Désabonnement des écouteurs
    return () => { 
      supabase.removeChannel(messageChannel);
      supabase.removeChannel(channelListChannel);
      supabase.removeChannel(readReceiptChannel);
    };
  }, [supabase, session?.user?.id]);


  // ==========================================================================
  // EXPOSITION DES DONNÉES ET FONCTIONS
  // ==========================================================================

  return {
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
    channels: getChannelsList() // Exposer la liste des canaux mise à jour en temps réel
  };
}
