// src/utils/supabaseGameData.js
import { supabase } from '../config/supabase';

// ============================================================================
// COMPÉTENCES FUTILES
// ============================================================================

let cachedCompetencesFutiles = null;

export const loadCompetencesFutiles = async () => {
    try {
        const { data, error } = await supabase
            .from('competences_futiles')
            .select('id, name, description')
            .order('name');

        if (error) throw error;
        return data.map(comp => ({
            id: comp.id,
            nom: comp.name,
            description: comp.description
        }));
    } catch (error) {
        console.error('Erreur chargement compétences futiles:', error);
        return [];
    }
};

export const getCompetencesFutiles = async (forceRefresh = false) => {
    if (!cachedCompetencesFutiles || forceRefresh) {
        cachedCompetencesFutiles = await loadCompetencesFutiles();
    }
    return cachedCompetencesFutiles;
};

export const invalidateCompetencesFutilesCache = () => {
    cachedCompetencesFutiles = null;
};

export const getCompetenceFutileIdByName = async (name) => {
    const { data } = await supabase.from('competences_futiles').select('id').eq('name', name).single();
    return data?.id || null;
};

export const addCompetenceFutile = async (name, description) => {
    const { data, error } = await supabase
        .from('competences_futiles')
        .insert([{ name, description }])
        .select().single();

    if (error) throw error;
    return { id: data.id, nom: data.name, description: data.description };
};

// ============================================================================
// PROFILS ET COMPÉTENCES UTILES
// ============================================================================

export const loadProfils = async () => {
    const { data, error } = await supabase.from('profils').select('*').order('name_masculine');
    if (error) {
        console.error("🔥 [Erreur Critique] Impossible de charger la table 'profils':", error);
        return [];
    }
    if (!data || data.length === 0) {
        console.warn("⚠️ [Attention] La table 'profils' existe mais elle est VIDE !");
        return [];
    }

    return data.map(p => ({
        id: p.id,
        nom: p.name_masculine,
        nomFeminin: p.name_feminine,
        description: p.description,
        traits: p.traits || [],
        icon: p.icon || '👤'
    }));
};

export const loadCompetences = async () => {
    try {
        const { data, error } = await supabase
            .from('competences')
            .select(`
                id, name, description, has_specialites,
                profil:profil_id (id, name_masculine),
                specialites_ref:specialites (id, nom, is_official)
            `)
            .order('name');

        if (error) throw error;

        const competences = {};
        const competencesParProfil = {};

        data.forEach(comp => {
            const rawSpecs = comp.specialites_ref || [];
            const formattedSpecs = rawSpecs.sort((a, b) => {
                if (a.is_official !== b.is_official) return a.is_official ? -1 : 1;
                return a.nom.localeCompare(b.nom);
            });

            const competence = {
                id: comp.id,
                nom: comp.name,
                description: comp.description,
                hasSpecialites: comp.has_specialites,
                specialites: formattedSpecs,
                profil: comp.profil?.name_masculine
            };

            competences[comp.name] = competence;
            const profilName = comp.profil?.name_masculine;

            if (profilName) {
                if (!competencesParProfil[profilName]) competencesParProfil[profilName] = [];
                competencesParProfil[profilName].push(competence);
            }
        });

        return { competences, competencesParProfil };
    } catch (error) {
        console.error('Erreur chargement compétences:', error);
        return { competences: {}, competencesParProfil: {} };
    }
};

// ============================================================================
// TYPES DE FÉES (RÉSOLUTION ET CHOIX MULTIPLES)
// ============================================================================

export const loadFairyTypes = async () => {
    try {
        // --- ÉTAPE PRÉLIMINAIRE : Dictionnaire des compétences ---
        const { data: allCompsRef, error: compsRefError } = await supabase.from('competences').select('id, name');
        if (compsRefError) throw compsRefError;

        const compNameMap = {};
        allCompsRef.forEach(c => { compNameMap[c.id] = c.name; });

        // 1. Charger les types de fées
        const { data, error } = await supabase
            .from('fairy_types')
            .select(`
                *,
                fairy_type_capacites ( capacite_type, capacite:fairy_capacites ( id, nom, description, bonus ) ),
                fairy_type_powers ( power:fairy_powers ( id, nom, description, type_pouvoir ) ),
                fairy_type_assets ( asset:fairy_assets ( id, nom, description, effets, effets_techniques ) )
            `)
            .order('name');
        if (error) throw error;

        // 2. Charger les compétences de prédilection (UTILES)
        const { data: allCompPred, error: compPredError } = await supabase
            .from('fairy_competences_predilection')
            .select(`
                fairy_type_id, specialite, is_choice, is_specialite_choice, choice_ids, choice_options,
                competence:competences ( name )
            `);
        if (compPredError) throw compPredError;

        // 3. Charger les compétences de prédilection (FUTILES)
        const { data: allCompFutPred, error: compFutPredError } = await supabase
            .from('fairy_competences_futiles_predilection')
            .select(`
                fairy_type_id, is_choice, choice_options,
                competence_futile:competence_futile_id ( name )
            `);
        if (compFutPredError) throw compFutPredError;

        // --- Organisation des données ---
        const compPredByFairy = {};
        const compFutPredByFairy = {};

        // A. Traitement des Compétences UTILES
        if (allCompPred) {
            allCompPred.forEach(cp => {
                if (!compPredByFairy[cp.fairy_type_id]) compPredByFairy[cp.fairy_type_id] = [];

                if (cp.is_choice) {
                    let optionsNoms = [];
                    if (cp.choice_ids && Array.isArray(cp.choice_ids)) {
                        optionsNoms = cp.choice_ids.map(uuid => compNameMap[uuid]).filter(Boolean);
                    } else if (cp.choice_options && Array.isArray(cp.choice_options)) {
                        optionsNoms = cp.choice_options;
                    }
                    compPredByFairy[cp.fairy_type_id].push({ isChoix: true, options: optionsNoms });
                } else {
                    const nomCompetence = cp.competence?.name;
                    if (nomCompetence) {
                        const specOptionsArray = Array.isArray(cp.choice_options) ? cp.choice_options : [];
                        const isPureSpec = specOptionsArray.includes('PURE_SPEC');

                        compPredByFairy[cp.fairy_type_id].push({
                            nom: nomCompetence,
                            specialite: cp.specialite,
                            isSpecialiteChoix: cp.is_specialite_choice,
                            isOnlySpecialty: isPureSpec,
                            options: specOptionsArray.filter(o => o !== 'PURE_SPEC')
                        });
                    }
                }
            });
        }

        // B. Traitement des Compétences FUTILES
        if (allCompFutPred) {
            allCompFutPred.forEach(cfp => {
                if (!compFutPredByFairy[cfp.fairy_type_id]) compFutPredByFairy[cfp.fairy_type_id] = [];

                if (cfp.is_choice) {
                    compFutPredByFairy[cfp.fairy_type_id].push({ isChoix: true, options: cfp.choice_options || [] });
                } else {
                    const nomCompFutile = cfp.competence_futile?.name;
                    if (nomCompFutile) compFutPredByFairy[cfp.fairy_type_id].push(nomCompFutile);
                }
            });
        }

        const fairyData = {};
        const fairyTypesByAge = { traditionnelles: [], modernes: [] };

        data.forEach(fairy => {
            const rawAssetsLinks = fairy.fairy_type_assets || [];
            const rawAssets = rawAssetsLinks.map(link => link.asset).filter(Boolean);
            const assetsTries = rawAssets.sort((a, b) => a.nom.localeCompare(b.nom));

            const rawPouvoirsLinks = fairy.fairy_type_powers || [];
            const rawPouvoirs = rawPouvoirsLinks.map(link => link.power).filter(p => p != null);
            const pouvoirsTries = rawPouvoirs.sort((a, b) => {
                const order = {
                    'masque': 1, 'demasque': 2, 'profond_masque': 3,
                    'profond_demasque': 4, 'legendaire_masque': 5, 'legendaire_demasque': 6
                };
                const orderA = order[a.type_pouvoir] || 99;
                const orderB = order[b.type_pouvoir] || 99;
                return orderA - orderB || a.nom.localeCompare(b.nom);
            });

            const rawCapacitesLinks = fairy.fairy_type_capacites || [];
            const rawCapacites = rawCapacitesLinks.map(link => ({
                capacite_type: link.capacite_type,
                ...(link.capacite || {})
            }));
            const capacitesStruct = {
                fixe1: rawCapacites.find(c => c.capacite_type === 'fixe1') || { nom: 'Inconnu', description: '' },
                fixe2: rawCapacites.find(c => c.capacite_type === 'fixe2') || { nom: 'Inconnu', description: '' },
                choix: rawCapacites.filter(c => c.capacite_type === 'choix')
            };

            // ✨ LE FIX EST ICI : Plus de doublon sur la clé 'id' !
            const fairyInfo = {
                id: fairy.id,
                nameMasculine: fairy.name_masculine || fairy.name,
                nameFeminine: fairy.name_feminine || fairy.name,
                allowedGenders: fairy.allowed_genders || ['Homme', 'Femme'],
                anciennete: fairy.era,
                description: fairy.description,
                traits: fairy.traits,
                taille: fairy.taille_categorie || 'Moyenne',
                avantages: fairy.avantages || [],
                desavantages: fairy.desavantages || [],
                effets_techniques: fairy.effets_techniques || {},
                caracteristiques: {
                    agilite: { min: fairy.agilite_min, max: fairy.agilite_max },
                    constitution: { min: fairy.constitution_min, max: fairy.constitution_max },
                    force: { min: fairy.force_min, max: fairy.force_max },
                    precision: { min: fairy.precision_min, max: fairy.precision_max },
                    esprit: { min: fairy.esprit_min, max: fairy.esprit_max },
                    perception: { min: fairy.perception_min, max: fairy.perception_max },
                    prestance: { min: fairy.prestance_min, max: fairy.prestance_max },
                    sangFroid: { min: fairy.sang_froid_min, max: fairy.sang_froid_max }
                },
                isSecret: fairy.is_secret,
                competencesPredilection: compPredByFairy[fairy.id] || [],
                competencesFutilesPredilection: compFutPredByFairy[fairy.id] || [],
                capacites: capacitesStruct,
                pouvoirs: pouvoirsTries,
                atouts: assetsTries
            };

            fairyData[fairy.name] = fairyInfo;
            if (fairy.era === 'traditionnelle') fairyTypesByAge.traditionnelles.push(fairy.name);
            else fairyTypesByAge.modernes.push(fairy.name);
        });

        return {
            fairyData,
            fairyTypes: [...fairyTypesByAge.traditionnelles, ...fairyTypesByAge.modernes],
            fairyTypesByAge
        };
    } catch (error) {
        console.error('Erreur chargement types de fées:', error);
        return { fairyData: {}, fairyTypes: [], fairyTypesByAge: { traditionnelles: [], modernes: [] } };
    }
};

export const addGlobalSpeciality = async (competenceId, newSpeciality) => {
    try {
        const { data, error } = await supabase
            .from('specialites')
            .insert([{ competence_id: competenceId, nom: newSpeciality, is_official: false }])
            .select()
            .single();

        if (error) {
            if (error.code === '23505') throw new Error("Cette spécialité existe déjà.");
            throw error;
        }
        return { id: data.id, nom: data.nom, is_official: data.is_official };
    } catch (error) {
        console.error("Erreur ajout spécialité:", error);
        throw error;
    }
};

// ============================================================================
// ✨ LES TITRES HONORIFIQUES (BADGES DYNAMIQUES)
// ============================================================================

export const loadBadges = async () => {
    try {
        const { data, error } = await supabase.from('titres_honorifiques').select('*').order('label');
        if (error) throw error;
        return data || [];
    } catch (error) {
        console.error("Erreur chargement des titres honorifiques :", error);
        return [];
    }
};

// ============================================================================
// CACHE GLOBAL ET ORCHESTRATION (Le Grimoire de Poche)
// ============================================================================

const LOCAL_CACHE_KEY = 'heritiers_grimoire_cache';

export const loadSocialItems = async () => {
    try {
        const { data, error } = await supabase
            .from('social_items')
            .select(`*, profils ( name_masculine )`)
            .eq('is_official', true)
            .order('cout', { ascending: true });

        if (error) throw error;
        return data || [];
    } catch (error) {
        console.error("Erreur chargement social_items :", error);
        return [];
    }
};

export const loadEncyclopediaRefs = async () => {
    try {
        const [{ data: caps }, { data: pows }, { data: atouts }, { data: fairies }] = await Promise.all([
            supabase.from('fairy_capacites').select('id, nom').order('nom'),
            supabase.from('fairy_powers').select('id, nom').order('nom'),
            supabase.from('fairy_assets').select('id, nom').order('nom'),
            supabase.from('fairy_types').select('id, name').order('name')
        ]);
        return { capacites: caps || [], pouvoirs: pows || [], atouts: atouts || [], fairies: fairies || [] };
    } catch (error) {
        console.error("Erreur chargement références Encyclopédie:", error);
        return { capacites: [], pouvoirs: [], atouts: [], fairies: [] };
    }
};

// ============================================================================
// CACHE GLOBAL ET ORCHESTRATION (Le Grimoire de Poche Séquentiel)
// ============================================================================

// 🚀 1. LE NOYAU VITAL (Démarrage ultra-rapide)
export const loadCoreGameData = async () => {
    // A. On tente d'abord la lecture instantanée du cache local (Mémoire du navigateur)
    const localData = localStorage.getItem(LOCAL_CACHE_KEY);
    if (localData) {
        try {
            const parsedData = JSON.parse(localData);
            // Si on a le cache, on retourne TOUT instantanément !
            return parsedData;
        } catch (e) {
            console.warn("Cache corrompu, on purge la poche...");
            localStorage.removeItem(LOCAL_CACHE_KEY);
        }
    }

    // B. Pas de cache (Premier démarrage) ? On télécharge UNIQUEMENT le strict minimum bloquant !
    console.log("⚡ Allumage du Noyau (Profils & Titres)...");
    try {
        const [p, b] = await Promise.all([
            loadProfils(),
            typeof loadBadges === 'function' ? loadBadges() : Promise.resolve([]) 
        ]);

        return {
            profils: p,
            badges: b,
            // ✨ LA MAGIE : On renvoie des coquilles vides pour le reste pour ne pas faire crasher l'UI
            competences: {}, competencesParProfil: {}, competencesFutiles: [],
            fairyData: {}, fairyTypes: [], fairyTypesByAge: { traditionnelles: [], modernes: [] },
            socialItems: [], encyclopediaRefs: { capacites: [], pouvoirs: [], atouts: [], fairies: [] }
        };
    } catch (error) {
        console.error("❌ Erreur fatale du Noyau :", error);
        return null;
    }
};

// 🧠 2. L'ÉRUDITION LOURDE (Téléchargement asynchrone en arrière-plan)
export const loadHeavyLoreData = async (currentCoreData) => {
    console.log("☁️ Téléchargement lourd du Lore dans la toile de fond...");
    try {
        // On télécharge le mammouth !
        const [c, f, fut, soc, refs] = await Promise.all([
            loadCompetences(), loadFairyTypes(), getCompetencesFutiles(true), loadSocialItems(), loadEncyclopediaRefs()
        ]);

        const completeData = {
            ...currentCoreData, // On fusionne avec notre noyau déjà affiché (Profils & Badges)
            competences: c.competences,
            competencesParProfil: c.competencesParProfil,
            competencesFutiles: fut,
            fairyData: f.fairyData,
            fairyTypes: f.fairyTypes,
            fairyTypesByAge: f.fairyTypesByAge,
            socialItems: soc,
            encyclopediaRefs: refs
        };

        // 💾 On grave le grand dictionnaire complet et on le retourne
        localStorage.setItem(LOCAL_CACHE_KEY, JSON.stringify(completeData));
        return completeData;
    } catch (error) {
        console.error("❌ Erreur lors de l'injection du Lore :", error);
        return null;
    }
};

// Le bouton d'urgence (Purge)
export const invalidateAllCaches = () => {
    invalidateCompetencesFutilesCache();
    localStorage.removeItem(LOCAL_CACHE_KEY);
};