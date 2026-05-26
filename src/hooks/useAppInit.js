// src/hooks/useAppInit.js
import { useState, useEffect, useRef } from 'react';
import { supabase } from '../config/supabase';
import { loadCoreGameData, loadHeavyLoreData } from '../utils/supabaseGameData';
import { useCharacter } from '../context/CharacterContext';
import { useAutoUpdate } from './useAutoUpdate';
import { showInAppNotification } from '../utils/SystemeServices';

export function useAppInit() {
    const { setGameData } = useCharacter();
    const [session, setSession] = useState(null);
    const [userProfile, setUserProfile] = useState(null);
    const [globalLoading, setGlobalLoading] = useState(true);
    const [loadingStep, setLoadingStep] = useState('Démarrage...');
    const [isInitialized, setIsInitialized] = useState(false);

    // La Bougie d'allumage pour redémarrer le Nuage sans F5
    const [initTrigger, setInitTrigger] = useState(0);
    const isInitializingRef = useRef(false);
    
    // ✨ NOUVEAU : Le Garde du Corps de la Session (Anti-Amnésie)
    const sessionRef = useRef(null);

    // La mise à jour exposée
    const { updateAvailable, applyUpdate } = useAutoUpdate(60000);

    // --- MOTEUR D'ALLUMAGE DU NUAGE ---
    useEffect(() => {
        if (isInitialized || isInitializingRef.current) return;
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
                const { data: { session: activeSession } } = await supabase.auth.getSession();
                
                if (!activeSession) {
                    if (mounted) setGlobalLoading(false);
                    isInitializingRef.current = false;
                    return;
                }

                setLoadingStep("Allumage du Noyau...");
                const coreData = await loadCoreGameData();

                if (mounted) {
                    setGameData(coreData);
                    setSession(activeSession);
                    
                    // ✨ On mémorise silencieusement l'identité de l'Héritier
                    sessionRef.current = activeSession;

                    const { data: profileData } = await supabase
                        .from('profiles')
                        .select('*')
                        .eq('id', activeSession.user.id)
                        .single();

                    if (profileData) {
                      setUserProfile({ ...activeSession.user, profile: profileData });
                    } else {
                      // ✨ FALLBACK : si le trigger handle_new_user n'a pas créé le profil
                      const username = activeSession.user.user_metadata?.username || 'Héritier';
                      const { data: newProfile } = await supabase
                        .from('profiles')
                        .insert({ id: activeSession.user.id, username, role: 'user' })
                        .select()
                        .single();
                      if (newProfile) setUserProfile({ ...activeSession.user, profile: newProfile });
                    }
                    
                    setIsInitialized(true);
                    setGlobalLoading(false);
                }

                loadHeavyLoreData(coreData).then(heavyData => {
                    if (heavyData && mounted) setGameData(heavyData);
                }).catch(err => {
                    console.error("Erreur chargement Lore secondaire:", err);
                    if (mounted) showInAppNotification("Certaines données additionnelles n'ont pas pu être chargées.", "warning");
                });

                isInitializingRef.current = false;

            } catch (error) {
                console.error("❌ Init failed:", error);
                if (mounted) {
                    setGlobalLoading(false);
                    setIsInitialized(false);
                }
                isInitializingRef.current = false;
            }
        };

        initializeApp();

        return () => {
            mounted = false;
            clearTimeout(safetyTimer);
            isInitializingRef.current = false;
        };
    }, [isInitialized, setGameData, initTrigger]);

    // --- ÉCOUTEUR D'AUTHENTIFICATION ---
    useEffect(() => {
        const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, newSession) => {
            if (event === 'SIGNED_IN') {
                
                // ✨ LE BOUCLIER ANTI-AMNÉSIE !
                // Si on revient sur l'onglet, Supabase crie "SIGNED_IN", mais on vérifie si on n'est pas DÉJÀ connecté avec le même compte.
                if (sessionRef.current?.user?.id === newSession?.user?.id) {
                    return;
                }

                sessionRef.current = newSession;
                setGlobalLoading(true);
                setIsInitialized(false);
                setInitTrigger(prev => prev + 1);

            } else if (event === 'SIGNED_OUT') {
                sessionRef.current = null; // On vide le garde du corps
                setSession(null);
                setUserProfile(null);
                setIsInitialized(false);
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

    return { session, setSession, userProfile, refreshUserProfile, globalLoading, loadingStep, updateAvailable, applyUpdate };
}