// src/utils/supabaseStorage.js
// Version: 3.4.0
// Build: 2026-02-05 15:30
// Correction: Ajout des champs nomFeerique, genreHumain, traitsFeeriques

import { supabase } from '../config/supabase';

// ============================================================================
// CONFIGURATION ET CACHE HORS-LIGNE
// ============================================================================

const OFFLINE_STORAGE_KEY = 'heritiers_character_cache';
let userCharactersCache = null;

/**
 * Nettoie les données pour optimiser le stockage JSONB.
 */
const cleanupCharacterData = (char) => {
    const cleanRangs = (rangs) => 
        Object.fromEntries(Object.entries(rangs || {}).filter(([_, v]) => v > 0));

    return {
        ...char,
        competencesLibres: {
            ...char.competencesLibres,
            rangs: cleanRangs(char.competencesLibres?.rangs)
        },
        competencesFutiles: {
            ...char.competencesFutiles,
            rangs: cleanRangs(char.competencesFutiles?.rangs)
        }
    };
};

/**
 * Mappage Universel : Gère les colonnes SQL (snake_case) ET les vieux JSON (camelCase).
 */
const mapDatabaseToCharacter = (char) => {
    // 1. Sécurité : On essaie de récupérer les données, qu'elles soient à la racine ou dans un champ 'data'
    const source = { ...char.data, ...char };

    // 2. Extraction permissive des blocs de compétences (snake_case OU camelCase)
    const cLibres = source.competences_libres || source.competencesLibres || {};
    const cFutiles = source.competences_futiles || source.competencesFutiles || {};

    return {
        id: source.id,
        userId: source.user_id,
        nom: source.nom || 'Sans nom',
		sexe: source.sexe || '',
        
        // Champs Identité Féérique (Nouveaux)
        nomFeerique: source.nom_feerique || source.nomFeerique || '',
        genreHumain: source.genre_humain || source.genreHumain || '',
        traitsFeeriques: source.traits_feeriques || source.traitsFeeriques || [],

        // Tente de lire type_fee (base) ou typeFee (vieux JSON)
        typeFee: source.type_fee || source.typeFee || '',
        anciennete: source.anciennete || '',

        // Champs Apparence
        apparence: source.apparence || '', 
        taille: source.taille || '',       
        poids: source.poids || '',         

        caracteristiques: source.caracteristiques || {},
        profils: source.profils || { 
            majeur: { nom: '', trait: '', competences: [] }, 
            mineur: { nom: '', trait: '', competences: [] } 
        },

        competencesLibres: {
            rangs: cLibres.rangs || {},
            choixPredilection: cLibres.choixPredilection || {},
            choixSpecialite: cLibres.choixSpecialite || {},
            choixSpecialiteUser: cLibres.choixSpecialiteUser || {}
        },

        competencesFutiles: {
            rangs: cFutiles.rangs || {},
            choixPredilection: cFutiles.choixPredilection || {},
            personnalisees: cFutiles.personnalisees || []
        },

        capaciteChoisie: source.capacite_choisie || source.capaciteChoisie || '',
        pouvoirs: source.pouvoirs || [],

		atouts: source.atouts || [],
		vieSociale: source.vie_sociale || source.vieSociale || {},
		fortune: source.fortune || 0,

        isPublic: source.is_public || source.isPublic || false,
        ownerUsername: source.profiles?.username || 'Inconnu',
        
        // Dates : Gestion souple
        created_at: source.created_at || new Date().toISOString(),
        updated_at: source.updated_at || new Date().toISOString()
    };
};

// ============================================================================
// GESTION DU MODE PWA (LOCALSTORAGE)
// ============================================================================

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

// ============================================================================
// RÉCUPÉRATION ET PERSISTANCE
// ============================================================================

export const getUserCharacters = async (forceRefresh = false) => {
  try {
    // On ignore le cache pour être sûr de voir la vérité de la base
    // if (userCharactersCache && !forceRefresh) return userCharactersCache; 

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return getOfflineMirror();

    console.log("🔍 [STORAGE] Récupération des personnages pour :", user.id);

    // Récupération brute depuis Supabase
    const { data, error } = await supabase
      .from('characters')
      .select('*')
      .eq('user_id', user.id)
      .order('updated_at', { ascending: false });

    if (error) {
        console.error("🔥 [STORAGE] Erreur Supabase :", error);
        throw error;
    }

    // --- LE MOUCHARD (Version Corrigée) ---
    if (data && data.length > 0) {
        // C'est ici : on prend l'élément 0 pour voir l'intérieur du premier personnage
        const premierPerso = data[0]; // <- ici
        
        console.log("📦 [STORAGE] Structure réelle du personnage :", premierPerso);
        console.log("👉 Liste des colonnes (Clés) :", Object.keys(premierPerso));

        // Test de présence des données
        if (premierPerso.nom) console.log("✅ Colonne 'nom' détectée :", premierPerso.nom);
        if (premierPerso.name) console.log("✅ Colonne 'name' détectée :", premierPerso.name);
        if (premierPerso.data) console.log("✅ Colonne 'data' (JSON) détectée");
        if (premierPerso.json) console.log("✅ Colonne 'json' détectée");
    }
    // ------------------------------------

    const mappedData = (data || []).map(mapDatabaseToCharacter);
    userCharactersCache = mappedData;
    updateOfflineMirror(mappedData);

    return mappedData;

  } catch (error) {
    console.error('Erreur getPublicCharacters:', error); // (Note: typo dans votre code original, c'est getUserCharacters)
    return getOfflineMirror();
  }
};

export const getPublicCharacters = async () => {
    try {
        const { data, error } = await supabase
            .from('characters')
            .select('*, profiles(username)')
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
    // 1. Préparation des données (Nettoyage)
    const cleaned = cleanupCharacterData(character);
    const idTemp = character.id || `temp_${Date.now()}`;

    // 2. SAUVEGARDE LOCALE IMMÉDIATE (Sécurité Mobile)
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
        // 3. Tentative de sauvegarde Cloud
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) throw new Error('Utilisateur non connecté (Sauvegarde locale uniquement)');

        const characterData = {
            user_id: user.id,
            nom: cleaned.nom,
            sexe: cleaned.sexe,
            type_fee: cleaned.typeFee,
            anciennete: cleaned.anciennete,
            
            // --- CHAMPS IDENTITÉ FÉÉRIQUE & APPARENCE ---
            nom_feerique: cleaned.nomFeerique,
            genre_humain: cleaned.genreHumain,
            traits_feeriques: cleaned.traitsFeeriques,
            
            apparence: cleaned.apparence,
            taille: cleaned.taille,
            poids: cleaned.poids,
            // --------------------------------------------

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
            updated_at: new Date().toISOString()
        };

        let savedData;

        if (character.id && !character.id.toString().startsWith('temp_')) {
            // Mise à jour
            const { data, error } = await supabase
                .from('characters')
                .update(characterData)
                .eq('id', character.id)
                .select()
                .single();
            
            if (error) throw error;
            savedData = data;
        } else {
            // Création
            const { data, error } = await supabase
                .from('characters')
                .insert([characterData])
                .select()
                .single();
            
            if (error) throw error;
            savedData = data;
        }

        // 4. Succès Cloud : On met à jour le cache avec les vraies données
        const finalCache = getOfflineMirror().filter(c => c.id !== idTemp && c.id !== savedData.id);
        updateOfflineMirror([mapDatabaseToCharacter(savedData), ...finalCache]);
        
        userCharactersCache = null;
        return mapDatabaseToCharacter(savedData);

    } catch (error) {
        console.warn("Échec sauvegarde Cloud (Mode Hors-ligne activé):", error);
        return charToCache;
    }
};

export const deleteCharacterFromSupabase = async (characterId) => {
    const { error } = await supabase.from('characters').delete().eq('id', characterId);
    if (error) throw error;
    userCharactersCache = null;
    return true;
};

export const getAllCharactersAdmin = async () => {
    try {
        const { data, error } = await supabase
            .from('characters')
            .select('*, profiles(username)')
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
    userCharactersCache = null;
    return mapDatabaseToCharacter(data);
};