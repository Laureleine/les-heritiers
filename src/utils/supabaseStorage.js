// src/utils/supabaseStorage.js

import { supabase } from '../config/supabase';

// ============================================================================
// CONFIGURATION ET CACHE HORS-LIGNE
// ============================================================================

const LIGHT_SELECT = 'id, user_id, created_at, updated_at, nom, sexe, type_fee, anciennete, profils, is_public, statut, xp_total, xp_depense';
const OFFLINE_STORAGE_KEY = 'heritiers_character_cache';

const mapDatabaseToCharacter = (char) => {
    const source = { ...char.data, ...char };
    const cLibres = source.competences_libres || source.competencesLibres || {};
    const cFutiles = source.competences_futiles || source.competencesFutiles || {};
    
    return {
        id: source.id,
        userId: source.user_id,
        nom: source.nom || 'Sans nom',
        sexe: source.sexe || '',
        nomFeerique: source.nom_feerique || source.nomFeerique || '',
        genreHumain: source.genre_humain || source.genreHumain || '',
        traitsFeeriques: source.traits_feeriques || source.traitsFeeriques || [],
        typeFee: source.type_fee || source.typeFee || '',
        anciennete: source.anciennete || '',
        apparence: source.apparence || '',
        taille: source.taille || '',
        poids: source.poids || '',
        caracteristiques: source.caracteristiques || {},
        profils: source.profils || {
            majeur: { nom: '', trait: '', competences: [] },
            mineur: { nom: '', trait: '', competences: [] }
        },
        competencesLibres: {
            ...cLibres,
            rangs: cLibres.rangs || {},
            choixPredilection: cLibres.choixPredilection || {},
            choixSpecialite: cLibres.choixSpecialite || {},
            choixSpecialiteUser: cLibres.choixSpecialiteUser || {},
            specialiteMetier: cLibres.specialite_metier || cLibres.specialiteMetier || null
        },
        competencesFutiles: {
            ...cFutiles,
            rangs: cFutiles.rangs || {},
            choixPredilection: cFutiles.choixPredilection || {},
            personnalisees: cFutiles.personnalisees || [],
            precisions: cFutiles.precisions || {}
        },
        capaciteChoisie: source.capacite_choisie || source.capaciteChoisie || '',
        pouvoirs: source.pouvoirs || [],
        atouts: source.atouts || [],
        avantages: source.avantages || [],
        desavantages: source.desavantages || [],
        transfer_code: source.transfer_code || source.transferCode || null,
        portrait_masked_url: source.portrait_masked_url || source.portraitMaskedUrl || '',
        portrait_unmasked_url: source.portrait_unmasked_url || source.portraitUnmaskedUrl || '',
        is_unmasked_revealed: source.is_unmasked_revealed || source.isUnmaskedRevealed || false,
        is_insolite: source.is_insolite || source.isInsolite || false,
        species_ids: source.species_ids || source.speciesIds || [],
        vieSociale: source.vie_sociale || source.vieSociale || {},
        fortune: source.fortune || 0,
        isPublic: source.is_public || source.isPublic || false,
        statut: source.statut || 'brouillon',
        xp_total: source.xp_total || 0,
        xp_depense: source.xp_depense || 0,
        ownerUsername: source.profiles?.username || 'Inconnu',
        data: source.data || {},
        created_at: source.created_at || new Date().toISOString(),
        updated_at: source.updated_at || new Date().toISOString()
    };
};

const updateOfflineMirror = (characters) => {
    try {
        localStorage.setItem(OFFLINE_STORAGE_KEY, JSON.stringify(characters));
    } catch (e) {
        console.error('Erreur LocalStorage cache:', e);
    }
};

const getOfflineMirror = () => {
    const stored = localStorage.getItem(OFFLINE_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
};

export const getUserCharacters = async (forceRefresh = false) => {
    try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return getOfflineMirror();

        const { data, error } = await supabase
            .from('characters')
            .select(LIGHT_SELECT)
            .eq('user_id', user.id)
            .order('updated_at', { ascending: false });

        if (error) {
            console.error("🔥 [STORAGE] Erreur Supabase :", error);
            throw error;
        }

        const mappedData = (data || []).map(mapDatabaseToCharacter);
        updateOfflineMirror(mappedData);
        return mappedData;
    } catch (error) {
        console.error('Erreur getUserCharacters:', error);
        return getOfflineMirror();
    }
};

export const getPublicCharacters = async () => {
    try {
        const { data, error } = await supabase
            .from('characters')
            .select(`${LIGHT_SELECT}, profiles(username)`)
            .eq('is_public', true)
            .order('updated_at', { ascending: false });

        if (error) throw error;
        return (data || []).map(mapDatabaseToCharacter);
    } catch (error) {
        console.error('Erreur getPublicCharacters:', error);
        return [];
    }
};

export const saveCharacterToSupabase = async (character) => {
    const cleaned = character;
    const idTemp = character.id || `temp_${Date.now()}`;
    
    const currentCache = getOfflineMirror();
    const otherChars = currentCache.filter(c => c.id !== character.id);
    const charToCache = {
        ...cleaned,
        id: idTemp,
        updated_at: new Date().toISOString(),
        _pendingSync: true
    };
    updateOfflineMirror([charToCache, ...otherChars]);

    try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) throw new Error('Utilisateur non connecté (Sauvegarde locale uniquement)');

        // 🧠 L'ULTIME VÉRITÉ : Le Reducer a déjà tout calculé pour nous ! (DRY Absolu)
        const absoluteComputedStats = cleaned.computedStats || {};

        // 🧠 LE COMPACTEUR JSONB : On fige la vérité mathématique dans Supabase
        const newDataJson = {
            ...(cleaned.data || {}),
            avantages: cleaned.avantages || [],
            desavantages: cleaned.desavantages || [],
            transfer_code: cleaned.transfer_code || null,
            portrait_masked_url: cleaned.portrait_masked_url || '',
            portrait_unmasked_url: cleaned.portrait_unmasked_url || '',
            is_unmasked_revealed: cleaned.is_unmasked_revealed || false,
            is_insolite: cleaned.is_insolite || false,
            species_ids: cleaned.species_ids || [],
            computed_stats: absoluteComputedStats
        };

        const characterData = {
            user_id: user.id,
            nom: cleaned.nom,
            sexe: cleaned.sexe,
            type_fee: cleaned.typeFee,
            anciennete: cleaned.anciennete,
            nom_feerique: cleaned.nomFeerique,
            genre_humain: cleaned.genreHumain,
            traits_feeriques: cleaned.traitsFeeriques,
            apparence: cleaned.apparence,
            taille: cleaned.taille,
            poids: cleaned.poids,
            caracteristiques: cleaned.caracteristiques,
            profils: cleaned.profils,
            competences_libres: cleaned.competencesLibres,
            competences_futiles: cleaned.competencesFutiles,
            capacite_choisie: cleaned.capaciteChoisie,
            pouvoirs: cleaned.pouvoirs,
            atouts: cleaned.atouts,
            vie_sociale: cleaned.vieSociale,
            fortune: cleaned.fortune,
            is_public: cleaned.isPublic || false,
            statut: cleaned.statut || 'brouillon',
            xp_total: character.xp_total || 0,
            xp_depense: character.xp_depense || 0,
            data: newDataJson,
            updated_at: new Date().toISOString()
        };

        let savedData;
        if (character.id && !character.id.toString().startsWith('temp_')) {
            const { data, error } = await supabase
                .from('characters')
                .update(characterData)
                .eq('id', character.id)
                .select()
                .single();
            if (error) throw error;
            savedData = data;
        } else {
            const { data, error } = await supabase
                .from('characters')
                .insert([characterData])
                .select()
                .single();
            if (error) throw error;
            savedData = data;
        }

        const finalCache = getOfflineMirror().filter(c => c.id !== idTemp && c.id !== savedData.id);
        updateOfflineMirror([mapDatabaseToCharacter(savedData), ...finalCache]);
        
        return mapDatabaseToCharacter(savedData);
    } catch (error) {
        console.warn("Échec sauvegarde Cloud (Mode Hors-ligne activé):", error);
        return charToCache;
    }
};

export const deleteCharacterFromSupabase = async (characterId) => {
    const { error } = await supabase.from('characters').delete().eq('id', characterId);
    if (error) throw error;
    return true;
};

export const getAllCharactersAdmin = async () => {
    try {
        const { data, error } = await supabase
            .from('characters')
            .select(`${LIGHT_SELECT}, profiles(username)`)
            .order('updated_at', { ascending: false });

        if (error) throw error;
        return (data || []).map(char => mapDatabaseToCharacter(char));
    } catch (error) {
        console.error('Erreur Admin getAllCharacters:', error);
        return [];
    }
};

export const toggleCharacterVisibility = async (characterId, isPublic) => {
    const { data, error } = await supabase
        .from('characters')
        .update({ is_public: isPublic, updated_at: new Date().toISOString() })
        .eq('id', characterId)
        .select().single();
        
    if (error) throw error;
    return mapDatabaseToCharacter(data);
};

export const getFullCharacter = async (characterId) => {
    try {
        const { data, error } = await supabase
            .from('characters')
            .select('*, profiles(username)')
            .eq('id', characterId)
            .single();

        if (error) throw error;
        return mapDatabaseToCharacter(data);
    } catch (error) {
        console.error('❌ Erreur de récupération complète:', error);
        throw error;
    }
};