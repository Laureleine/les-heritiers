// src/hooks/useAccountSettings.js
import { useState, useEffect, useMemo } from 'react';
import { supabase } from '../config/supabase';
import { showInAppNotification, requestNotificationPermission } from '../utils/SystemeServices';
import { useCharacter } from '../context/CharacterContext';

export function useAccountSettings(session, userProfile, onUpdateProfile) {
    const profile = userProfile?.profile; 
    const { gameData } = useCharacter();

    // --- 1. ÉTATS DU FORMULAIRE ---
    const [newUsername, setNewUsername] = useState('');
    const [showPixie, setShowPixie] = useState(true);
    const [notifyTelegraphe, setNotifyTelegraphe] = useState(true);
    const [activeBadge, setActiveBadge] = useState('');
    const [diceTheme, setDiceTheme] = useState('laiton');
    const [use3DDice, setUse3DDice] = useState(false);
    const [isJoueur, setIsJoueur] = useState(true);
    const [isDocte, setIsDocte] = useState(false);
    
    // --- 2. ÉTATS SYSTÈMES ---
    const [loading, setLoading] = useState(false);
    const [isFormInitialized, setIsFormInitialized] = useState(false);
    const [pushSupported, setPushSupported] = useState(false);
    
    const [notifPrefs, setNotifPrefs] = useState({
        subscribe_to_updates: false,
        notify_major_versions: true,
        notify_minor_versions: false,
        enable_push_notifications: false
    });
    const [initialNotifPrefs, setInitialNotifPrefs] = useState(null);

    // --- 3. DÉRIVATIONS ---
    const myBadges = useMemo(() => {
        const dbBadges = gameData?.badges || [];
        return (profile?.badges || []).map(id => dbBadges.find(b => b.id === id)).filter(Boolean);
    }, [profile?.badges, gameData?.badges]);

    // --- 4. SYNCHRONISATION INITIALE ---
    useEffect(() => {
        if (!isFormInitialized && userProfile && profile) {
            const safeUsername = profile.username || session?.user?.user_metadata?.username || '';
            if (safeUsername) setNewUsername(safeUsername);
            if (profile.show_pixie !== undefined) setShowPixie(profile.show_pixie);
            if (profile.notify_telegraphe !== undefined) setNotifyTelegraphe(profile.notify_telegraphe);
            if (profile.dice_theme) setDiceTheme(profile.dice_theme);
            if (profile.use_3d_dice !== undefined) setUse3DDice(profile.use_3d_dice);
            if (profile.is_joueur !== undefined) setIsJoueur(profile.is_joueur);
            if (profile.is_docte !== undefined) setIsDocte(profile.is_docte);
            
            if (profile.active_badge) {
                setActiveBadge(profile.active_badge);
            } else if (profile.badges && profile.badges.length > 0) {
                setActiveBadge(profile.badges.at(0));
            }
            setIsFormInitialized(true);
        }
    }, [profile, userProfile, isFormInitialized, session]);

    useEffect(() => {
        setPushSupported('Notification' in window);
        
        const loadNotifPrefs = async () => {
            const { data, error } = await supabase
                .from('user_notification_preferences')
                .select('*')
                .eq('user_id', session.user.id)
                .maybeSingle();

            if (!error && data) {
                const loadedPrefs = {
                    subscribe_to_updates: data.subscribe_to_updates,
                    notify_major_versions: data.notify_major_versions,
                    notify_minor_versions: data.notify_minor_versions,
                    enable_push_notifications: data.enable_push_notifications
                };
                setNotifPrefs(loadedPrefs);
                setInitialNotifPrefs(loadedPrefs);
            } else {
                setInitialNotifPrefs({
                    subscribe_to_updates: false,
                    notify_major_versions: true,
                    notify_minor_versions: false,
                    enable_push_notifications: false
                });
            }
        };
        loadNotifPrefs();
    }, [session.user.id]);

    // --- 5. DÉTECTEUR DE CHANGEMENTS ---
    const hasChanges = useMemo(() => {
        if (!isFormInitialized) return false;
        
        const origUsername = profile?.username || session?.user?.user_metadata?.username || '';
        const origShowPixie = profile?.show_pixie !== undefined ? profile.show_pixie : true;
        const origNotifyTelegraphe = profile?.notify_telegraphe !== undefined ? profile.notify_telegraphe : true;
        const origDiceTheme = profile?.dice_theme || 'laiton';
        const origUse3DDice = profile?.use_3d_dice !== undefined ? profile.use_3d_dice : false;
        const origIsJoueur = profile?.is_joueur !== undefined ? profile.is_joueur : true;
        const origIsDocte = profile?.is_docte !== undefined ? profile.is_docte : false;
        const origBadge = profile?.active_badge || (profile?.badges && profile.badges.length > 0 ? profile.badges.at(0) : '');

        if (newUsername !== origUsername) return true;
        if (showPixie !== origShowPixie) return true;
        if (notifyTelegraphe !== origNotifyTelegraphe) return true;
        if (diceTheme !== origDiceTheme) return true;
        if (use3DDice !== origUse3DDice) return true;
        if (isJoueur !== origIsJoueur) return true;
        if (isDocte !== origIsDocte) return true;
        if (activeBadge !== origBadge) return true;
        if (initialNotifPrefs && JSON.stringify(notifPrefs) !== JSON.stringify(initialNotifPrefs)) return true;
        
        return false;
    }, [
        newUsername, showPixie, notifyTelegraphe, diceTheme, use3DDice, isJoueur, isDocte, activeBadge, notifPrefs,
        profile, session, isFormInitialized, initialNotifPrefs
    ]);

    // --- 6. GESTIONNAIRES D'ACTION ---
    const handleUpdate = async () => {
        setLoading(true);
        try {
            const updates = {
                username: newUsername,
                show_pixie: showPixie,
                notify_telegraphe: notifyTelegraphe,
                active_badge: activeBadge,
                dice_theme: diceTheme,
                use_3d_dice: use3DDice,
                is_joueur: isJoueur,
                is_docte: isDocte,
                updated_at: new Date()
            };

            const { error } = await supabase
                .from('profiles')
                .update(updates)
                .eq('id', session.user.id);

            if (error) throw error;

            const { error: notifError } = await supabase
                .from('user_notification_preferences')
                .upsert({
                    user_id: session.user.id,
                    email: session.user.email,
                    ...notifPrefs,
                    updated_at: new Date().toISOString()
                }, {
                    onConflict: 'user_id'
                });

            if (notifError) throw notifError;

            localStorage.setItem('heritiers_dice_theme', diceTheme);
            localStorage.setItem('heritiers_use_3d_dice', use3DDice);

            showInAppNotification('Toutes vos préférences ont été sauvegardées avec succès !', 'success');
            setInitialNotifPrefs(notifPrefs);
            
            if (onUpdateProfile) onUpdateProfile();
        } catch (error) {
            showInAppNotification("Erreur lors de la sauvegarde : " + error.message, "error");
        } finally {
            setLoading(false);
        }
    };

    const handleTogglePushNotifications = async () => {
        if (!notifPrefs.enable_push_notifications) {
            if (Notification.permission !== 'granted') {
                const granted = await requestNotificationPermission();
                if (!granted) {
                    showInAppNotification("Permission de notification refusée. Activez-la dans les paramètres de votre navigateur.", "warning");
                    return;
                }
            }
        }
        setNotifPrefs(prev => ({ ...prev, enable_push_notifications: !prev.enable_push_notifications }));
    };

    const handleToggleNotifField = (field) => {
        setNotifPrefs(prev => ({ ...prev, [field]: !prev[field] }));
    };

    return {
        state: { 
            newUsername, showPixie, notifyTelegraphe, activeBadge, diceTheme, 
            use3DDice, isJoueur, isDocte, notifPrefs, pushSupported, loading, hasChanges 
        },
        setters: { 
            setNewUsername, setShowPixie, setNotifyTelegraphe, setActiveBadge, 
            setDiceTheme, setUse3DDice, setIsJoueur, setIsDocte 
        },
        computed: { myBadges },
        handlers: { handleUpdate, handleTogglePushNotifications, handleToggleNotifField }
    };
}
