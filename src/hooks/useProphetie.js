import { useState, useCallback } from 'react';
import { supabase } from '../config/supabase';

const FUNCTION_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/generate-prophetie`;
const ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export function useProphetie() {
    const [showSonge, setShowSonge] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);
    const [prophetieText, setProphetieText] = useState(null);

    const revelerSonge = useCallback(async (characterId, existingProphetie) => {
        if (existingProphetie) {
            setProphetieText(existingProphetie);
            setShowSonge(true);
            return;
        }

        setIsGenerating(true);
        setShowSonge(true);

        try {
            const { data: { session } } = await supabase.auth.getSession();
            const token = session?.access_token;

            const res = await fetch(FUNCTION_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'apikey': ANON_KEY,
                },
                body: JSON.stringify({ characterId }),
            });

            const json = await res.json();
            if (!res.ok) throw new Error(json.error || 'Erreur inconnue');
            setProphetieText(json.prophetie);
        } catch (e) {
            console.error('useProphetie:', e);
            setProphetieText(null);
            setShowSonge(false);
        } finally {
            setIsGenerating(false);
        }
    }, []);

    const fermerSonge = useCallback(() => {
        setShowSonge(false);
        // prophetieText conservé pour permettre la relecture sans rappel API
    }, []);

    return { showSonge, isGenerating, prophetieText, revelerSonge, fermerSonge };
}
