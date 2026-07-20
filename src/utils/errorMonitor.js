import { logError } from './errorLogger';

let initialized = false;

export function initErrorMonitor() {
    if (initialized) return;
    initialized = true;

    // Override console.error
    const originalError = console.error.bind(console);
    console.error = (...args) => {
        originalError(...args);
        const message = args.map(a => (a instanceof Error ? a.message : String(a))).join(' ');
        const stack = args.find(a => a instanceof Error)?.stack;
        logError({ type: 'error', message, stack });
    };

    // Override console.warn
    const originalWarn = console.warn.bind(console);
    console.warn = (...args) => {
        originalWarn(...args);
        const message = args.map(a => (a instanceof Error ? a.message : String(a))).join(' ');
        logError({ type: 'warn', message });
    };

    // Erreurs JS non rattrapées
    window.onerror = (message, source, lineno, colno, error) => {
        logError({
            type: 'error',
            message: String(message),
            stack: error?.stack || `${source}:${lineno}:${colno}`,
        });
    };

    // Promesses rejetées non rattrapées
    window.addEventListener('unhandledrejection', (event) => {
        const reason = event.reason;
        const message = reason instanceof Error ? reason.message : String(reason);
        const stack = reason instanceof Error ? reason.stack : null;
        logError({ type: 'unhandled_promise', message, stack });
    });
}
