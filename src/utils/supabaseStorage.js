// src/utils/supabaseStorage.js

import { supabase } from '../config/supabase';
import { getCurrentUser, requireCurrentUser } from './authUtils';
import { showInAppNotification } from './SystemeServices';
import { db } from '../config/db';
import { localDb } from '../config/localDb';

// ============================================================================
// 🏛️ CALCUL xp_depense DEPUIS LE JOURNAL (Source unique de vérité)
// ============================================================================
// xp_depense en base est un cache dérivé. On le recalcule toujours depuis
// historique_xp avant chaque sauvegarde pour garantir la cohérence.
const computeXpDepenseFromHistory = (historique) => {
    if (!historique || historique.length === 0) return null; // null = pas de journal, garder la valeur existante
    return Math.max(0, historique.reduce((acc, tx) => {
        if (tx.type === 'DEPENSE')       return acc + tx.valeur;
        if (tx.type === 'REMBOURSEMENT') return acc - tx.valeur;
        return acc; // GAIN → ne touche pas aux dépenses
    }, 0));
};

// ============================================================================
// 📊 SYNCHRONISATION VERS LA TABLE xp_transactions (Write-to-both)
// ============================================================================
// La table xp_transactions est un miroir queryable du JSONB historique_xp.
// Elle permet le filtrage SQL, l'analytics, et les index — sans remplacer
// le JSONB qui reste la source primaire pour la lecture client.
const syncXpTransactionsTable = async (characterId, historique) => {
    if (!characterId || !historique || historique.length === 0) return;

    try {
        // Stratégie : delete-and-reinsert (pas de race condition critique car JSONB est primaire)
        await supabase.from('xp_transactions').delete().eq('character_id', characterId);

        const rows = historique.map(tx => ({
            character_id: characterId,
            type:          tx.type,
            code:          tx.code || null,
            label:         tx.label,
            valeur:        tx.valeur,
            rang_final:    tx.rang_final || null,
            date_mouvement: tx.date_mouvement || new Date().toISOString()
        }));

        if (rows.length > 0) {
            const { error } = await supabase.from('xp_transactions').insert(rows);
            if (error) console.warn('⚠️ Sync xp_transactions partielle :', error.message);
        }
    } catch (e) {
        // Non bloquant : le JSONB reste la source primaire
        console.warn('⚠️ Sync xp_transactions échouée (non bloquant) :', e.message);
    }
};

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
        typePersonnage: source.type_personnage || source.typePersonnage || 'fee',
        rangHumain: source.rang_humain || source.rangHumain || null,
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
        xp_dette: source.xp_dette || false,
        ownerUsername: source.profiles?.username || 'Inconnu',
        data: source.data || {},
        computedStats: source.computed_stats || source.computedStats || {},
        atoutsPerso: source.atoutsPerso || [],
        pouvoirsPerso: source.pouvoirsPerso || [],
        prophetie: source.prophetie || null,
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
    if (!stored) return [];
    try { return JSON.parse(stored); } catch { return []; }
};

export const getUserCharacters = async (userId) => {
    if (!navigator.onLine) {
        if (userId) {
            const chars = await localDb.characters.where('user_id').equals(userId).toArray();
            return chars.map(mapDatabaseToCharacter);
        }
        return getOfflineMirror();
    }
    try {
        const { data, error } = await supabase
            .from('characters')
            .select(LIGHT_SELECT)
            .eq('user_id', userId)
            .order('created_at', { ascending: false });
        if (error) throw error;
        // Mettre en cache dans Dexie
        if (data) {
            await Promise.all(data.map(c => localDb.characters.put(c))).catch(() => {});
        }
        return (data || []).map(mapDatabaseToCharacter);
    } catch (error) {
        console.error('Erreur chargement personnages:', error);
        return getOfflineMirror();
    }
};

export const getPublicCharacters = async () => {
    try {
        const { data, error } = await supabase
            .from('characters')
            .select(`${LIGHT_SELECT}, profiles(username)`)
            .eq('is_public', true)
            .order('updated_at', { ascending: false })
            .limit(100);

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
        const user = await requireCurrentUser('Utilisateur non connecté (Sauvegarde locale uniquement)');

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
            computed_stats: absoluteComputedStats,
            atoutsPerso: cleaned.atoutsPerso || [],
            pouvoirsPerso: cleaned.pouvoirsPerso || []
        };

        const characterData = {
            user_id: character.userId || user.id, // préserve le propriétaire original (édition Super Admin)
            nom: cleaned.nom,
            sexe: cleaned.sexe,
            type_fee: cleaned.typeFee,
            type_personnage: cleaned.typePersonnage || 'fee',
            rang_humain: cleaned.rangHumain || null,
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
            // 🏛️ xp_depense recalculé depuis le journal — jamais copié depuis l'état (qui peut être stale)
            xp_depense: computeXpDepenseFromHistory(cleaned.data?.historique_xp) ?? (character.xp_depense || 0),
            // xp_dette auto-clear : la dette se résorbe quand xp_total rattrape xp_depense
            xp_dette: character.xp_dette === true
                ? (computeXpDepenseFromHistory(cleaned.data?.historique_xp) ?? (character.xp_depense || 0)) > (character.xp_total || 0)
                : false,
            portrait_masked_url: cleaned.portrait_masked_url || null,
            portrait_unmasked_url: cleaned.portrait_unmasked_url || null,
            is_unmasked_revealed: cleaned.is_unmasked_revealed || false,
            data: newDataJson,
            updated_at: new Date().toISOString()
        };

        // Inclure l'id dans le payload pour que l'upsert mette à jour au lieu d'insérer
        if (character.id && !character.id.toString().startsWith('temp_')) {
            characterData.id = character.id;
        }

        if (!navigator.onLine) {
            if (!characterData.id) {
                characterData.id = idTemp;
            }
            const { data, error } = await db.from('characters').upsert(characterData);
            if (error) throw error;
            const mappedChar = mapDatabaseToCharacter(characterData);
            const updatedMirror = getOfflineMirror().filter(c => c.id !== idTemp && c.id !== characterData.id);
            updateOfflineMirror([mappedChar, ...updatedMirror]);
            return mappedChar;
        }

        // En ligne : upsert Supabase + cache Dexie
        const { data: savedData, error: saveError } = await supabase
            .from('characters')
            .upsert(characterData)
            .select()
            .single();
        if (saveError) throw saveError;
        await localDb.characters.put(savedData).catch(() => {});

        const finalCache = getOfflineMirror().filter(c => c.id !== idTemp && c.id !== savedData.id);
        updateOfflineMirror([mapDatabaseToCharacter(savedData), ...finalCache]);

        // 📊 Sync miroir SQL (non bloquant — le JSONB reste la source primaire)
        syncXpTransactionsTable(savedData.id, cleaned.data?.historique_xp).catch(() => {});

        return mapDatabaseToCharacter(savedData);
    } catch (error) {
        console.warn("Échec sauvegarde Cloud (Mode Hors-ligne activé):", error);
        showInAppNotification(
            "⚠️ Sauvegarde locale uniquement — réseau indisponible. Ne fermez pas l'onglet avant de retrouver la connexion.",
            "warning"
        );
        return charToCache;
    }
};

export const deleteCharacterFromSupabase = async (characterId) => {
    const { error } = await supabase.from('characters').delete().eq('id', characterId);
    if (error) throw error;
    return true;
};

export const getAllCharactersAdmin = async (isAdmin = false) => {
    if (!isAdmin) return [];
    try {
        const { data, error } = await supabase
            .from('characters')
            .select(`${LIGHT_SELECT}, profiles(username)`)
            .order('updated_at', { ascending: false })
            .limit(500);

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