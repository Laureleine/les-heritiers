import { supabase } from '../config/supabase';

function makeFingerprint(message, stack) {
    const stackTop = (stack || '').split('\n').slice(0, 3).join('|');
    const raw = `${message}|${stackTop}`;
    let hash = 0;
    for (let i = 0; i < raw.length; i++) {
        hash = (Math.imul(31, hash) + raw.charCodeAt(i)) | 0;
    }
    return Math.abs(hash).toString(36);
}

// Anti-flood : une même fingerprint max 1 fois par minute
const recentlySent = new Map();
function isRateLimited(fingerprint) {
    const last = recentlySent.get(fingerprint);
    if (last && Date.now() - last < 60_000) return true;
    recentlySent.set(fingerprint, Date.now());
    return false;
}

function gatherContext() {
    try {
        const ctx = window.__heritiers_error_context__ || {};
        return {
            character_id: ctx.characterId || null,
            cercle_id: ctx.cercleId || null,
            extra: ctx.extra ? JSON.stringify(ctx.extra) : null,
            url: window.location.pathname,
            user_agent: navigator.userAgent.slice(0, 200),
        };
    } catch {
        return { url: window.location.pathname, user_agent: null, character_id: null, cercle_id: null, extra: null };
    }
}

export async function logError({ type, message, stack, componentStack }) {
    if (!message) return;

    const fingerprint = makeFingerprint(message, stack);
    if (isRateLimited(fingerprint)) return;

    const ctx = gatherContext();

    try {
        const { data: { user } } = await supabase.auth.getUser();

        await supabase.rpc('upsert_error_log', {
            p_type:             type,
            p_message:          String(message).slice(0, 2000),
            p_stack:            stack ? String(stack).slice(0, 5000) : null,
            p_component_stack:  componentStack ? String(componentStack).slice(0, 3000) : null,
            p_fingerprint:      fingerprint,
            p_user_id:          user?.id || null,
            p_character_id:     ctx.character_id,
            p_cercle_id:        ctx.cercle_id,
            p_url:              ctx.url,
            p_user_agent:       ctx.user_agent,
            p_extra:            ctx.extra,
        });
    } catch {
        // Ne jamais crasher à cause du logger lui-même
    }
}
