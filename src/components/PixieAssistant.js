// src/components/PixieAssistant.js
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Sparkles, AlertCircle, CheckCircle2, Info, Moon } from '../config/icons';
import { getPixieAdvice } from '../utils/pixieBrain';
import { supabase } from '../config/supabase';
import { useUserContext } from '../context/UserContext';

export default function PixieAssistant({ character, step, onSleep, fairyData }) {
    const { session } = useUserContext();
    const [position, setPosition] = useState({ x: window.innerWidth - 100, y: window.innerHeight - 100 });
    const [isTalking, setIsTalking] = useState(false);
    const [message, setMessage] = useState({ text: "", mood: "info" });
    const [silentMood, setSilentMood] = useState("info");
    const [direction, setDirection] = useState('none'); // 'left' | 'right' | 'none'
    const [isVisible, setIsVisible] = useState(false);
    const bubbleTimer = useRef(null);
    const positionRef = useRef({ x: window.innerWidth - 100, y: window.innerHeight - 100 });
    const forgeIntervalRef = useRef(null);

    // FadeIn à l'entrée
    useEffect(() => {
        const t = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(t);
    }, []);

    // Contraindre la position si la fenêtre est redimensionnée
    useEffect(() => {
        const handleResize = () => {
            setPosition(prev => ({
                x: Math.min(prev.x, window.innerWidth - 60),
                y: Math.min(prev.y, window.innerHeight - 60),
            }));
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const volerAuHasard = useCallback(() => {
        const newX = Math.floor(Math.random() * (window.innerWidth * 0.8) + (window.innerWidth * 0.05));
        const newY = Math.floor(Math.random() * (window.innerHeight * 0.8) + (window.innerHeight * 0.05));
        // Inclinaison selon la direction du vol (via ref pour éviter stale closure)
        setDirection(newX < positionRef.current.x ? 'left' : 'right');
        positionRef.current = { x: newX, y: newY };
        setPosition({ x: newX, y: newY });
    }, []);

    const fermerBulleEtFuir = useCallback(() => {
        setIsTalking(false);
        if (bubbleTimer.current) clearTimeout(bubbleTimer.current);
        // Délai court pour que la transition position démarre proprement après la bulle
        setTimeout(volerAuHasard, 300);
    }, [volerAuHasard]);

    // Moteur de vol
    useEffect(() => {
        if (isTalking) return;
        const tempo = Math.floor(Math.random() * 2000) + 3000;
        const intervalId = setInterval(volerAuHasard, tempo);
        return () => clearInterval(intervalId);
    }, [isTalking, volerAuHasard]);

    useEffect(() => {
        if (isTalking) {
            bubbleTimer.current = setTimeout(fermerBulleEtFuir, 7000);
        }
        return () => {
            if (bubbleTimer.current) clearTimeout(bubbleTimer.current);
        };
    }, [isTalking, fermerBulleEtFuir]);

    // Analyse silencieuse à chaque changement de personnage/étape
    useEffect(() => {
        const analysis = getPixieAdvice(character || {}, step, fairyData);
        setSilentMood(analysis.mood);
    }, [character, step, fairyData]);

    // Ping de la Forge — vérification au chargement puis toutes les 5 minutes
    useEffect(() => {
        if (!session?.user?.id) return;

        const verifierRecompensesForge = async () => {
            try {
                const { data, error } = await supabase
                    .from('registre_forge')
                    .select('id, titre, type_entree')
                    .eq('user_id', session.user.id)
                    .in('statut', ['Résolu', 'Intégré'])
                    .eq('is_notified_pixie', false)
                    .limit(1)
                    .maybeSingle();

                if (!error && data) {
                    const texte = data.type_entree === 'Inspiration'
                        ? `Sapristi ! Ton idée "${data.titre}" a été gravée dans les archives du Grimoire ! Merci pour ton imagination, petit prodige !`
                        : `Youpi ! Grâce à ton œil de lynx, l'anomalie "${data.titre}" a été chassée du Grimoire ! Les Gardiens te remercient !`;

                    await supabase.from('registre_forge').update({ is_notified_pixie: true }).eq('id', data.id);
                    setMessage({ text: texte, mood: 'success' });
                    setIsTalking(true);
                    setSilentMood('success');
                }
            } catch (err) {
                console.error("Erreur de notification Pixie (Forge) :", err);
            }
        };

        const timer = setTimeout(() => {
            verifierRecompensesForge();
            forgeIntervalRef.current = setInterval(verifierRecompensesForge, 5 * 60 * 1000);
        }, 5000);

        return () => {
            clearTimeout(timer);
            if (forgeIntervalRef.current) clearInterval(forgeIntervalRef.current);
        };
    }, [session?.user?.id]);

    const handleAttraperPixie = () => {
        const advice = getPixieAdvice(character || {}, step, fairyData);
        setMessage(advice);
        setIsTalking(true);
    };

    const handleSleep = () => {
        setMessage({ text: "Je retourne dormir dans ma lanterne... Réveillez-moi dans vos paramètres !", mood: "info" });
        setIsTalking(true);
        setTimeout(async () => {
            if (session?.user?.id) {
                await supabase.from('profiles').update({ show_pixie: false }).eq('id', session.user.id);
            }
            if (onSleep) onSleep();
        }, 3000);
    };

    const getBubbleColors = (mood) => {
        switch (mood) {
            case 'warning': return 'bg-amber-100 border-amber-300 text-amber-900';
            case 'error': return 'bg-red-100 border-red-300 text-red-900';
            case 'success': return 'bg-green-100 border-green-300 text-green-900';
            default: return 'bg-cyan-50 border-cyan-200 text-cyan-900';
        }
    };

    const getMoodIcon = (mood) => {
        switch (mood) {
            case 'warning': return <AlertCircle size={16} className="text-amber-600 mt-0.5 shrink-0" />;
            case 'error': return <AlertCircle size={16} className="text-red-600 mt-0.5 shrink-0" />;
            case 'success': return <CheckCircle2 size={16} className="text-green-600 mt-0.5 shrink-0" />;
            default: return <Info size={16} className="text-cyan-600 mt-0.5 shrink-0" />;
        }
    };

    const getAuraClass = () => {
        if (isTalking) return '';
        if (silentMood === 'error') return 'ring-4 ring-red-400/50 animate-pulse';
        if (silentMood === 'warning') return 'ring-4 ring-amber-400/50 animate-pulse';
        return '';
    };

    // Glow adaptatif selon l'humeur active
    const getGlowShadow = () => {
        const mood = isTalking ? message.mood : silentMood;
        switch (mood) {
            case 'success': return '0 0 15px rgba(34,197,94,0.7)';
            case 'warning': return '0 0 15px rgba(245,158,11,0.7)';
            case 'error': return '0 0 15px rgba(239,68,68,0.7)';
            default: return '0 0 15px rgba(34,211,238,0.6)';
        }
    };

    // Position de la bulle selon la zone de l'écran où se trouve Pixie
    const isInTopHalf = position.y < window.innerHeight / 2;
    const isNearRightEdge = position.x > window.innerWidth * 0.65;
    const isNearLeftEdge = position.x < window.innerWidth * 0.35;
    const bubbleVertical = isInTopHalf ? 'top-full mt-4' : 'bottom-full mb-4';
    const bubbleHorizontal = isNearRightEdge ? 'right-0' : isNearLeftEdge ? 'left-0' : '-left-32';
    // La pointe pointe vers Pixie (en bas si bulle au-dessus, en haut si bulle en dessous)
    const tailClass = isInTopHalf
        ? `absolute -top-2.5 left-1/2 -translate-x-1/2 w-4 h-4 border-t-2 border-l-2 transform -rotate-45 ${getBubbleColors(message.mood)}`
        : `absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-4 h-4 border-b-2 border-r-2 transform rotate-45 ${getBubbleColors(message.mood)}`;

    // Inclinaison du corps selon la direction du dernier vol
    const bodyRotation = !isTalking ? (direction === 'left' ? -12 : direction === 'right' ? 12 : 0) : 0;

    return (
        <>
            <style>
                {`
                @keyframes battementGauche {
                    0% { transform: rotate(-10deg) translateY(0px) scaleY(1); opacity: 0.8; }
                    100% { transform: rotate(-40deg) translateY(6px) scaleY(0.5); opacity: 0.3; }
                }
                @keyframes battementDroit {
                    0% { transform: rotate(10deg) translateY(0px) scaleY(1); opacity: 0.8; }
                    100% { transform: rotate(40deg) translateY(6px) scaleY(0.5); opacity: 0.3; }
                }
                @keyframes pixieFlottement {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-5px); }
                }
                @media (prefers-reduced-motion) {
                    .pixie-wing { animation: none !important; }
                    .pixie-float { animation: none !important; }
                }
                `}
            </style>
            <div
                className="fixed z-50 pointer-events-none"
                style={{
                    left: position.x,
                    top: position.y,
                    opacity: isVisible ? 1 : 0,
                    transition: isTalking
                        ? 'opacity 0.3s'
                        : 'left 3s cubic-bezier(0.25, 0.1, 0.25, 1), top 3s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.5s',
                }}
            >
                {isTalking && (
                    <div className={`absolute ${bubbleVertical} ${bubbleHorizontal} w-64 p-3 rounded-2xl shadow-xl border-2 pointer-events-auto ${getBubbleColors(message.mood)}`}>
                        <div className="absolute -top-3 -right-2 flex gap-1">
                            <button
                                onClick={handleSleep}
                                className="bg-indigo-800 text-indigo-100 w-6 h-6 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors shadow-md"
                                title="Renvoyer Pixie dormir (Désactiver l'assistant)"
                            >
                                <Moon size={12} />
                            </button>
                            <button
                                onClick={fermerBulleEtFuir}
                                className="bg-gray-800 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs hover:bg-red-500 transition-colors shadow-md"
                                title="Fermer la bulle"
                            >
                                ×
                            </button>
                        </div>
                        <div className="flex gap-2">
                            {getMoodIcon(message.mood)}
                            <p className="text-sm font-medium leading-tight">{message.text}</p>
                        </div>
                        <div className={tailClass}></div>
                    </div>
                )}
                <button
                    onClick={handleAttraperPixie}
                    className={`relative flex items-center justify-center p-3 rounded-full hover:scale-125 transition-transform pointer-events-auto ${isTalking ? 'bg-amber-100/50' : ''} ${getAuraClass()}`}
                    title="Attraper Pixie !"
                >
                    {/* Groupe volant : ailes + corps bougent ensemble */}
                    <div
                        className="pixie-float relative flex items-center justify-center"
                        style={{ animation: !isTalking ? 'pixieFlottement 2s ease-in-out infinite' : 'none' }}
                    >
                        <div
                            className="pixie-wing absolute top-1 -left-5 w-8 h-3 rounded-[50%] border border-cyan-200 bg-cyan-100/60 backdrop-blur-sm origin-right"
                            style={{ animation: `battementGauche ${isTalking ? '0.8s' : '0.3s'} infinite alternate` }}
                        />
                        <div
                            className="pixie-wing absolute top-1 -right-5 w-8 h-3 rounded-[50%] border border-cyan-200 bg-cyan-100/60 backdrop-blur-sm origin-left"
                            style={{ animation: `battementDroit ${isTalking ? '0.8s' : '0.3s'} infinite alternate` }}
                        />
                        <div
                            className="w-6 h-6 rounded-full bg-gradient-to-tr from-cyan-300 to-fuchsia-300 flex items-center justify-center z-10"
                            style={{
                                boxShadow: getGlowShadow(),
                                transform: `rotate(${bodyRotation}deg)`,
                                transition: 'transform 0.5s ease, box-shadow 0.5s ease',
                            }}
                        >
                            <Sparkles size={12} className="text-white" />
                        </div>
                    </div>
                </button>
            </div>
        </>
    );
}
