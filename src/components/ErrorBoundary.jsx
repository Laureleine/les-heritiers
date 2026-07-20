import React from 'react';
import { logError } from '../utils/errorLogger';

const LORE_MESSAGES = [
    "Les Miroirs de l'Éther se sont voilés... un souffle d'Anomalie a troublé le Tissu.",
    "Le Grimoire a frémit — une page s'est déchirée dans l'invisible.",
    "Les Fils du Destin se sont emmêlés. Les Fées des Rouages s'affairent à les démêler.",
    "Une interférence féerique a interrompu la Connexion. Patience, Héritier.",
];

function getLoreMessage(fingerprint) {
    const idx = fingerprint
        ? Math.abs(parseInt(fingerprint, 36)) % LORE_MESSAGES.length
        : 0;
    return LORE_MESSAGES[idx];
}

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, recovering: false, retried: false };
        this._fingerprint = null;
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, info) {
        // Calcule fingerprint identique à errorLogger
        const stack = error?.stack || '';
        const stackTop = stack.split('\n').slice(0, 3).join('|');
        const raw = `${error?.message}|${stackTop}`;
        let hash = 0;
        for (let i = 0; i < raw.length; i++) {
            hash = (Math.imul(31, hash) + raw.charCodeAt(i)) | 0;
        }
        this._fingerprint = Math.abs(hash).toString(36);

        logError({
            type: 'crash',
            message: error?.message || 'Erreur inconnue',
            stack: error?.stack,
            componentStack: info?.componentStack,
        });

        // Tentative de recovery automatique (1 seule fois)
        if (!this.state.retried) {
            this.setState({ recovering: true });
            setTimeout(() => {
                this.setState({ hasError: false, error: null, recovering: false, retried: true });
            }, 1200);
        }
    }

    handleReload() {
        window.location.reload();
    }

    render() {
        if (this.state.recovering) {
            return (
                <div className="fixed inset-0 flex items-center justify-center bg-stone-50">
                    <div className="text-center text-stone-500 animate-pulse font-serif text-lg">
                        ✦ Réparation du Tissu en cours…
                    </div>
                </div>
            );
        }

        if (this.state.hasError) {
            const lore = getLoreMessage(this._fingerprint);
            return (
                <div className="fixed inset-0 flex flex-col items-center justify-center bg-stone-50 px-6">
                    <div className="max-w-md text-center space-y-6">
                        <div className="text-5xl">✦</div>
                        <h1 className="font-serif text-2xl font-bold text-stone-800">
                            Perturbation du Tissu
                        </h1>
                        <p className="text-stone-600 leading-relaxed font-serif italic">
                            {lore}
                        </p>
                        <p className="text-stone-400 text-sm">
                            L'anomalie a été consignée dans le Bureau des Anomalies.
                        </p>
                        <button
                            onClick={this.handleReload}
                            className="px-6 py-3 bg-stone-800 text-stone-50 rounded-lg font-serif hover:bg-stone-700 transition-colors"
                        >
                            Recharger l'application
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
