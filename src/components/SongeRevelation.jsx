// src/components/SongeRevelation.jsx
import React, { useEffect, useRef, useState, useCallback } from 'react';

// ─── Particules scintillantes ──────────────────────────────────────────────
function createParticle(canvas) {
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.5,
        alpha: Math.random(),
        speed: Math.random() * 0.4 + 0.1,
        drift: (Math.random() - 0.5) * 0.3,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleDir: Math.random() > 0.5 ? 1 : -1,
    };
}

// ─── Musique de cloches (Web Audio) ───────────────────────────────────────
function playBells(audioCtx) {
    const notes = [523.25, 659.25, 783.99, 1046.50, 880, 1174.66];
    const delays = [0, 0.35, 0.7, 1.1, 1.6, 2.2];

    notes.forEach((freq, i) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.type = 'sine';
        osc.frequency.value = freq;
        const t = audioCtx.currentTime + delays[i];
        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(0.18, t + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 2.5);
        osc.start(t);
        osc.stop(t + 2.5);
    });
}

// ─── Pixie SVG dessinée sur canvas ────────────────────────────────────────
function drawPixie(ctx, x, y, scale, wingPhase) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);

    // Traînée d'étoiles derrière la Pixie
    for (let i = 0; i < 6; i++) {
        const tx = -18 - i * 12;
        const ty = (Math.sin(wingPhase + i * 0.8) * 6);
        const alpha = 0.5 - i * 0.08;
        ctx.globalAlpha = Math.max(0, alpha);
        ctx.fillStyle = '#ffd700';
        ctx.beginPath();
        ctx.arc(tx, ty, 2 - i * 0.2, 0, Math.PI * 2);
        ctx.fill();
    }

    ctx.globalAlpha = 1;

    // Ailes (deux ellipses translucides)
    ctx.globalAlpha = 0.55;
    ctx.fillStyle = '#c8e6ff';
    ctx.beginPath();
    ctx.ellipse(-6, -8, 14, 9, -0.5 + Math.sin(wingPhase * 4) * 0.15, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(6, -8, 14, 9, 0.5 - Math.sin(wingPhase * 4) * 0.15, 0, Math.PI * 2);
    ctx.fill();

    // Corps
    ctx.globalAlpha = 1;
    ctx.fillStyle = '#f5e6c8';
    ctx.beginPath();
    ctx.ellipse(0, 0, 5, 8, 0, 0, Math.PI * 2);
    ctx.fill();

    // Tête
    ctx.fillStyle = '#f5e6c8';
    ctx.beginPath();
    ctx.arc(0, -10, 5, 0, Math.PI * 2);
    ctx.fill();

    // Yeux
    ctx.fillStyle = '#2c1a0e';
    ctx.beginPath();
    ctx.arc(-2, -10, 1, 0, Math.PI * 2);
    ctx.arc(2, -10, 1, 0, Math.PI * 2);
    ctx.fill();

    // Étoile dans la main
    ctx.fillStyle = '#ffd700';
    ctx.globalAlpha = 0.9 + Math.sin(wingPhase * 3) * 0.1;
    const sx = 9, sy = 2;
    for (let p = 0; p < 5; p++) {
        const a = (p * 4 * Math.PI) / 5 - Math.PI / 2;
        const bx = sx + Math.cos(a) * 4;
        const by = sy + Math.sin(a) * 4;
        p === 0 ? ctx.moveTo(bx, by) : ctx.lineTo(bx, by);
    }
    ctx.closePath();
    ctx.fill();

    ctx.restore();
}

// ─── Affichage lettre par lettre ──────────────────────────────────────────
function useTypewriter(text, started, msPerChar = 45) {
    const [displayed, setDisplayed] = useState('');
    const [done, setDone] = useState(false);

    useEffect(() => {
        if (!started || !text) return;
        setDisplayed('');
        setDone(false);
        let i = 0;
        const tick = setInterval(() => {
            i++;
            setDisplayed(text.slice(0, i));
            if (i >= text.length) { clearInterval(tick); setDone(true); }
        }, msPerChar);
        return () => clearInterval(tick);
    }, [text, started, msPerChar]);

    return { displayed, done };
}

// ─── Composant principal ───────────────────────────────────────────────────
export default function SongeRevelation({ characterId, prophetie, isGenerating, onClose, onProphetieGenerated }) {
    const canvasRef = useRef(null);
    const animRef = useRef(null);
    const audioCtxRef = useRef(null);
    const particlesRef = useRef([]);
    const pixieXRef = useRef(null);
    const pixieYRef = useRef(null);
    const phaseRef = useRef(0);
    const frameRef = useRef(0);
    const [phase, setPhase] = useState('noir'); // noir → pixie → texte
    const [canClose, setCanClose] = useState(false);

    // Texte du rêve — peut arriver après le début de l'animation
    const prophetieReady = !!prophetie && !isGenerating;
    const { displayed, done } = useTypewriter(prophetie, phase === 'texte' && prophetieReady);

    // Avancer les phases
    useEffect(() => {
        if (phase === 'noir') {
            const t = setTimeout(() => setPhase('pixie'), 800);
            return () => clearTimeout(t);
        }
        if (phase === 'pixie') {
            const t = setTimeout(() => {
                if (prophetieReady) setPhase('texte');
            }, 3200);
            return () => clearTimeout(t);
        }
    }, [phase, prophetieReady]);

    // Quand la prophétie arrive pendant la phase pixie → passer au texte si assez de temps écoulé
    useEffect(() => {
        if (phase === 'pixie' && prophetieReady) {
            const t = setTimeout(() => setPhase('texte'), 200);
            return () => clearTimeout(t);
        }
    }, [prophetieReady, phase]);

    // Activer la fermeture une fois le texte entièrement tapé
    useEffect(() => {
        if (done) {
            const t = setTimeout(() => setCanClose(true), 800);
            return () => clearTimeout(t);
        }
    }, [done]);

    // Lancer les cloches au moment où Pixie apparaît
    useEffect(() => {
        if (phase !== 'pixie') return;
        try {
            audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
            playBells(audioCtxRef.current);
        } catch (_) {}
        return () => { audioCtxRef.current?.close(); };
    }, [phase]);

    // Animation canvas
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            if (particlesRef.current.length === 0) {
                for (let i = 0; i < 120; i++) particlesRef.current.push(createParticle(canvas));
            }
            if (pixieXRef.current === null) {
                pixieXRef.current = -60;
                pixieYRef.current = canvas.height * 0.42;
            }
        };
        resize();
        window.addEventListener('resize', resize);

        const loop = () => {
            frameRef.current++;
            phaseRef.current += 0.018;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Fond dégradé nuit
            const grad = ctx.createRadialGradient(
                canvas.width / 2, canvas.height / 2, 0,
                canvas.width / 2, canvas.height / 2, canvas.width * 0.7
            );
            grad.addColorStop(0, '#0d0a1a');
            grad.addColorStop(1, '#000000');
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Particules
            particlesRef.current.forEach(p => {
                p.alpha += p.twinkleSpeed * p.twinkleDir;
                if (p.alpha >= 1 || p.alpha <= 0) p.twinkleDir *= -1;
                p.y -= p.speed;
                p.x += p.drift;
                if (p.y < -5) { p.y = canvas.height + 5; p.x = Math.random() * canvas.width; }
                ctx.globalAlpha = Math.max(0, Math.min(1, p.alpha));
                ctx.fillStyle = '#e8d8b0';
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fill();
            });

            // Pixie (traversée de gauche à droite, puis disparaît)
            if (phase === 'pixie' || phase === 'texte') {
                pixieXRef.current += 2.2;
                const wobble = Math.sin(phaseRef.current * 2) * 18;
                pixieYRef.current = canvas.height * 0.42 + wobble;

                if (pixieXRef.current < canvas.width + 80) {
                    drawPixie(ctx, pixieXRef.current, pixieYRef.current, 1.8, phaseRef.current);
                }
            }

            ctx.globalAlpha = 1;
            animRef.current = requestAnimationFrame(loop);
        };
        animRef.current = requestAnimationFrame(loop);

        return () => {
            cancelAnimationFrame(animRef.current);
            window.removeEventListener('resize', resize);
        };
    }, [phase]);

    const handleClose = useCallback(() => {
        if (!canClose) return;
        cancelAnimationFrame(animRef.current);
        onClose();
    }, [canClose, onClose]);

    return (
        <div
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-label="Le Songe du Scellage"
        >
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

            {/* Chargement (pendant génération) */}
            {isGenerating && (
                <div className="relative z-10 flex flex-col items-center gap-4 animate-pulse">
                    <div className="w-3 h-3 rounded-full bg-amber-300 shadow-[0_0_12px_4px_rgba(251,191,36,0.5)]" />
                    <p className="text-amber-200/60 text-sm font-serif italic tracking-widest">
                        L'Oracle consulte les brumes…
                    </p>
                </div>
            )}

            {/* Texte du rêve */}
            {phase === 'texte' && prophetieReady && (
                <div className="relative z-10 max-w-xl mx-auto px-8 text-center animate-[fadeIn_1.2s_ease-in_forwards]">
                    <div className="mb-6 text-amber-300/50 text-xs uppercase tracking-[0.4em] font-serif">
                        Le Songe du Scellage
                    </div>
                    <p
                        className="text-amber-100 font-serif italic text-lg leading-relaxed"
                        style={{ textShadow: '0 0 30px rgba(251,191,36,0.3)', minHeight: '8rem' }}
                    >
                        {displayed}
                        {!done && <span className="animate-pulse opacity-70">▌</span>}
                    </p>

                    {canClose && (
                        <button
                            onClick={handleClose}
                            className="mt-10 px-6 py-2 border border-amber-700/50 text-amber-300/80 rounded-full text-sm font-serif tracking-widest hover:border-amber-500 hover:text-amber-200 transition-all duration-700 animate-[fadeIn_1s_ease-in_forwards]"
                        >
                            Fermer le songe
                        </button>
                    )}
                </div>
            )}

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
}
