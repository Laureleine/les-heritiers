// src/hooks/useAppInit.js
import { useState, useEffect, useRef } from 'react';
import { supabase } from '../config/supabase';
import { db } from '../config/db';
import { useAutoUpdate } from './useAutoUpdate';
import { useGameData } from './useGameData';

export function useAppInit() {
    const [session, setSession] = useState(null);
    const [userProfile, setUserProfile] = useState(null);
    const [globalLoading, setGlobalLoading] = useState(true);
    const [loadingStep, setLoadingStep] = useState('Démarrage...');
    const [profileLoaded, setProfileLoaded] = useState(false);
    const [initTrigger, setInitTrigger] = useState(0);
    const [isRecoveryMode, setIsRecoveryMode] = useState(false);
    const isInitializingRef = useRef(false);
    const sessionRef = useRef(null);

    const { updateAvailable, applyUpdate } = useAutoUpdate(60000);

    // React Query: triggers the fetch (GameDataProvider reads from cache)
    const { isSuccess: gameDataLoaded } = useGameData(!!session);

    // Release globalLoading once profile + game data are both ready
    useEffect(() => {
        if (!profileLoaded) return;
        if (!session || gameDataLoaded) setGlobalLoading(false);
    }, [profileLoaded, session, gameDataLoaded]);

    // --- MOTEUR D'ALLUMAGE DU NUAGE ---
    useEffect(() => {
        if (isInitializingRef.current) return;
        let mounted = true;
        isInitializingRef.current = true;

        const safetyTimer = setTimeout(() => {
            if (mounted) {
                setGlobalLoading(false);
                isInitializingRef.current = false;
            }
        }, 30000);

        const initializeApp = async () => {
            try {
                setLoadingStep("Vérification connexion...");
                // db.auth.getSession lit depuis Dexie si offline
                const { data: { session: activeSession } } = await db.auth.getSession();

                if (!activeSession) {
                    if (mounted) setProfileLoaded(true);
                    isInitializingRef.current = false;
                    return;
                }

                setLoadingStep("Allumage du Noyau...");
                // Définir l'userId avant la lecture du profil (cohérence cache offline)
                db.setUserId(activeSession.user.id);
                // db.from('profiles') lit depuis Dexie si offline
                const { data: profileData } = await db.from('profiles')
                    .select('*')
                    .eq('id', activeSession.user.id)
                    .single();

                if (!mounted) { isInitializingRef.current = false; return; }

                setSession(activeSession);
                sessionRef.current = activeSession;

                if (profileData) {
                    setUserProfile({ ...activeSession.user, profile: profileData });
                    db.cacheProfile(activeSession.user.id, profileData).catch(() => {});
                } else {
                    const username = activeSession.user.user_metadata?.username || 'Héritier';
                    const { data: newProfile } = await supabase
                        .from('profiles')
                        .insert({ id: activeSession.user.id, username, role: 'user' })
                        .select()
                        .single();
                    if (newProfile) {
                        setUserProfile({ ...activeSession.user, profile: newProfile });
                        db.cacheProfile(activeSession.user.id, newProfile).catch(() => {});
                    }
                }

                setLoadingStep("Déchiffrage des archives...");
                setProfileLoaded(true);
                isInitializingRef.current = false;

            } catch (error) {
                console.error("❌ Init failed:", error);
                if (mounted) setGlobalLoading(false);
                isInitializingRef.current = false;
            }
        };

        initializeApp();

        return () => {
            mounted = false;
            clearTimeout(safetyTimer);
            isInitializingRef.current = false;
        };
    }, [initTrigger]);

    // --- ÉCOUTEUR D'AUTHENTIFICATION ---
    // onAuthStateChange reste sur supabase direct (temps réel, non nécessaire offline)
    useEffect(() => {
        const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, newSession) => {
            if (event === 'PASSWORD_RECOVERY') {
                setIsRecoveryMode(true);
            } else if (event === 'SIGNED_IN') {
                if (sessionRef.current?.user?.id === newSession?.user?.id) return;
                sessionRef.current = newSession;
                setGlobalLoading(true);
                setProfileLoaded(false);
                setInitTrigger(prev => prev + 1);
            } else if (event === 'SIGNED_OUT') {
                sessionRef.current = null;
                setSession(null);
                setUserProfile(null);
                setProfileLoaded(false);
                setIsRecoveryMode(false);
                db.setUserId(null);
            }
        });
        return () => subscription.unsubscribe();
    }, []);

    // --- TRAQUEUR D'ACTIVITÉ ---
    useEffect(() => {
        if (!session?.user?.id) return;
        let lastActivity = Date.now();
        let isThrottled = false;
        const handleActivity = () => {
            if (!isThrottled) {
                lastActivity = Date.now();
                isThrottled = true;
                setTimeout(() => { isThrottled = false; }, 2000);
            }
        };

        window.addEventListener('mousemove', handleActivity);

        const interval = setInterval(() => {
            if (Date.now() - lastActivity < 300000) {
                supabase.from('profiles').update({ last_seen: new Date().toISOString() }).eq('id', session.user.id).then();
            }
        }, 300000);

        return () => {
            window.removeEventListener('mousemove', handleActivity);
            clearInterval(interval);
        };
    }, [session]);

    const refreshUserProfile = async () => {
        if (!session?.user?.id) return;
        const { data: profile } = await supabase.from('profiles').select('*').eq('id', session.user.id).single();
        if (profile) setUserProfile({ ...session.user, profile });
    };

    return { session, setSession, userProfile, refreshUserProfile, globalLoading, loadingStep, updateAvailable, applyUpdate, isRecoveryMode };
}
