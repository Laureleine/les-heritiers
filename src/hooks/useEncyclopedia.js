// src/hooks/useEncyclopedia.js
import { useState, useEffect, useMemo, useCallback } from 'react';
import { supabase } from '../config/supabase';
import { useCharacter } from '../context/CharacterContext';
import { showInAppNotification } from '../utils/SystemeServices';
import { invalidateAllCaches } from '../utils/supabaseGameData';

export function useEncyclopedia() {
    const { gameData } = useCharacter();
    const { encyclopediaRefs, competencesFutiles, fairyData } = gameData || {};

    // 🧠 1. ÉTATS DE L'INTERFACE
    const [activeTab, setActiveTab] = useState('fairy_types');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFairyFilter, setSelectedFairyFilter] = useState('');
    const [selectedProfileFilter, setSelectedProfileFilter] = useState('');
    const [selectedCategoryFilter, setSelectedCategoryFilter] = useState(''); // ✨ NOUVEAU : Le filtre de catégorie
    const [editingItem, setEditingItem] = useState(null);
    const [viewingItem, setViewingItem] = useState(null);
    const [isCreating, setIsCreating] = useState(false);
    const [pendingLocks, setPendingLocks] = useState([]);
    const [confirmState, setConfirmState] = useState({
        isOpen: false, action: null, message: '', title: '', confirmText: ''
    });

    const fetchPendingLocks = useCallback(async () => {
        const { data } = await supabase.from('data_change_requests').select('record_id').eq('status', 'pending');
        if (data) setPendingLocks(data.map(req => req.record_id));
    }, []);

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            let query;
            
            if (activeTab === 'fairy_types') {
                query = supabase.from('fairy_types').select(`
                    *,
                    fairy_type_capacites ( capacite_type, capacite:fairy_capacites ( id, nom, description, bonus ) ),
                    fairy_type_powers ( power:fairy_powers ( id, nom, description, type_pouvoir ) ),
                    fairy_type_assets ( asset:fairy_assets ( id, nom, description, effets, effets_techniques ) )
                `);
            } else if (activeTab === 'social_items') {
                query = supabase.from('social_items').select('*, profils(name_masculine)');
            } else if (activeTab === 'fairy_capacites') {
                query = supabase.from('fairy_capacites').select('*, fairy_type_capacites(fairy_types(id, name))');
            } else if (activeTab === 'fairy_powers') {
                query = supabase.from('fairy_powers').select('*, fairy_type_powers(fairy_types(id, name))');
            } else if (activeTab === 'fairy_assets') {
                query = supabase.from('fairy_assets').select('*, fairy_type_assets(fairy_types(id, name))');
            }

            if (activeTab === 'fairy_types') query = query.order('name');
            else if (activeTab === 'social_items') query = query.order('cout', { ascending: true }).order('nom');
            else query = query.order('nom');

            const { data: results, error } = await query;
            if (error) throw error;
            
            setData(results || []);
        } catch (error) {
            console.error("❌ Erreur chargement Encyclopédie:", error);
            showInAppNotification("Erreur de connexion aux Archives Royales.", "error");
        } finally {
            setLoading(false);
        }
    }, [activeTab]);

    useEffect(() => {
        fetchData();
        fetchPendingLocks();
    }, [fetchData, fetchPendingLocks]);

    // 🧠 3. LE MOTEUR DE FILTRAGE COMBINÉ ET BLINDÉ
    const filteredData = useMemo(() => {
        return data.filter(item => {
            const searchStr = searchTerm.toLowerCase();
            const matchesSearch = (item.name || item.nom || '').toLowerCase().includes(searchStr) ||
                (item.description || item.desc || '').toLowerCase().includes(searchStr);

            let matchesFairy = true;
            if (['fairy_capacites', 'fairy_powers', 'fairy_assets'].includes(activeTab) && selectedFairyFilter !== '') {
                if (selectedFairyFilter === '__UNLINKED__') {
                    if (activeTab === 'fairy_capacites') matchesFairy = !item.fairy_type_capacites || item.fairy_type_capacites.length === 0;
                    else if (activeTab === 'fairy_powers') matchesFairy = !item.fairy_type_powers || item.fairy_type_powers.length === 0;
                    else if (activeTab === 'fairy_assets') matchesFairy = !item.fairy_type_assets || item.fairy_type_assets.length === 0;
                } else {
                    if (activeTab === 'fairy_capacites') matchesFairy = item.fairy_type_capacites?.some(link => link.fairy_types?.name === selectedFairyFilter);
                    else if (activeTab === 'fairy_powers') matchesFairy = item.fairy_type_powers?.some(link => link.fairy_types?.name === selectedFairyFilter);
                    else if (activeTab === 'fairy_assets') matchesFairy = item.fairy_type_assets?.some(link => link.fairy_types?.name === selectedFairyFilter);
                }
            }

            let matchesProfile = true;
            let matchesCategory = true; // ✨ NOUVEAU : Le verrou des Catégories
            
            if (activeTab === 'social_items') {
                // Filtre des Profils
                if (selectedProfileFilter !== '') {
                    const legacyProfile = item.profils?.name_masculine || item.profils?.nom;
                    let autorises = [];
                    if (Array.isArray(item.profils_autorises)) {
                        autorises = item.profils_autorises;
                    } else if (typeof item.profils_autorises === 'string') {
                        try { autorises = JSON.parse(item.profils_autorises); } 
                        catch(e) { autorises = [item.profils_autorises]; }
                    }
                    
                    if (selectedProfileFilter === '__UNLINKED__') {
                        matchesProfile = autorises.length === 0 && !legacyProfile;
                    } else {
                        matchesProfile = autorises.includes(selectedProfileFilter) || legacyProfile === selectedProfileFilter;
                    }
                }

                // ✨ Filtre des Catégories
                if (selectedCategoryFilter !== '') {
                    matchesCategory = item.categorie === selectedCategoryFilter;
                }
            }

            return matchesSearch && matchesFairy && matchesProfile && matchesCategory; // Combinaison intégrale !
        });
    }, [data, searchTerm, selectedFairyFilter, selectedProfileFilter, selectedCategoryFilter, activeTab]);

    // 🧠 4. PRÉPARATION À L'ÉDITION
    const handleOpenEdit = useCallback((item) => {
        setIsCreating(false);
        if (activeTab === 'fairy_types') {
            const fairyCloudData = fairyData?.[item.name || item.nom];
            setEditingItem({
                ...item,
                competencesPredilection: fairyCloudData?.competencesPredilection || []
            });
        } else if (activeTab === 'social_items') {
            // ✨ LE FIX ABSOLU : On pré-mâche les profils pour que le formulaire coche les cases !
            let autorises = [];
            if (Array.isArray(item.profils_autorises)) {
                autorises = [...item.profils_autorises];
            } else if (typeof item.profils_autorises === 'string') {
                try { autorises = JSON.parse(item.profils_autorises); } 
                catch(e) { autorises = [item.profils_autorises]; }
            }
            
            // Rétrocompatibilité : On ajoute l'ancien profil unique s'il existe
            const legacyProfile = item.profils?.name_masculine || item.profils?.nom;
            if (legacyProfile && !autorises.includes(legacyProfile)) {
                autorises.push(legacyProfile);
            }

            setEditingItem({
                ...item,
                profils_autorises: autorises, // Le formulaire recevra un tableau propre !
                techData: item.effets_techniques ? JSON.stringify(item.effets_techniques, null, 2) : '{}'
            });
        } else {
            let existingFairyIds = [];
            if (activeTab === 'fairy_capacites') existingFairyIds = item.fairy_type_capacites?.map(link => link.fairy_types?.id).filter(Boolean) || [];
            else if (activeTab === 'fairy_powers') existingFairyIds = item.fairy_type_powers?.map(link => link.fairy_types?.id).filter(Boolean) || [];
            else if (activeTab === 'fairy_assets') existingFairyIds = item.fairy_type_assets?.map(link => link.fairy_types?.id).filter(Boolean) || [];
            
            setEditingItem({
                ...item,
                techData: item.effets_techniques ? JSON.stringify(item.effets_techniques, null, 2) : '{}',
                fairyIds: existingFairyIds
            });
        }
    }, [activeTab, fairyData]);
	
    const handleCreateNew = useCallback(() => {
        setIsCreating(true);
        setEditingItem(null);
    }, []);

    const executeDelete = useCallback(async (item, tabName) => {
        setConfirmState(prev => ({ ...prev, isOpen: false }));
        setLoading(true);
        try {
            const { error } = await supabase.rpc('purge_encyclopedia_entity', {
                p_table_name: tabName,
                p_record_id: item.id
            });
            if (error) throw error;
            showInAppNotification("L'archive a été effacée de la trame temporelle.", "success");
            invalidateAllCaches();
            fetchData();
        } catch (err) {
            console.error("Erreur RPC Destruction:", err);
            showInAppNotification("La destruction a échoué : " + err.message, "error");
        } finally {
            setLoading(false);
        }
    }, [fetchData]);

    const triggerDelete = useCallback((item) => {
        setConfirmState({
            isOpen: true,
            title: "Détruire cette Archive ?",
            message: `Êtes-vous sûr de vouloir irradier "${item.name || item.nom}" de la matrice temporelle ? Cette action purgera automatiquement toutes ses connexions et est irréversible.`,
            confirmText: 'Détruire Définitivement',
            action: () => executeDelete(item, activeTab)
        });
    }, [activeTab, executeDelete]);

    const executeToggleSeal = useCallback(async (item, tabName) => {
        setConfirmState(prev => ({ ...prev, isOpen: false }));
        try {
            const { error } = await supabase.rpc('toggle_item_seal', {
                p_table_name: tabName,
                p_record_id: item.id,
                p_new_status: !item.is_sealed
            });
            if (error) throw error;
            showInAppNotification(`Le sceau a été ${item.is_sealed ? 'brisé' : 'apposé'} avec succès !`, "success");
            invalidateAllCaches();
            fetchData();
        } catch (err) {
            console.error("Erreur RPC Sceau:", err);
            showInAppNotification("Erreur lors de la modification du sceau : " + err.message, "error");
        }
    }, [fetchData]);

    const triggerToggleSeal = useCallback((item) => {
        setConfirmState({
            isOpen: true,
            title: item.is_sealed ? "Briser le Sceau" : "Apposer le Sceau",
            message: item.is_sealed
                ? `Voulez-vous briser le sceau de "${item.name || item.nom}" ? Il pourra à nouveau être modifié par les Gardiens.`
                : `Voulez-vous sceller "${item.name || item.nom}" ? Plus aucune proposition de modification ne sera acceptée sur cet élément.`,
            confirmText: item.is_sealed ? 'Oui, Briser' : 'Oui, Sceller',
            action: () => executeToggleSeal(item, activeTab)
        });
    }, [activeTab, executeToggleSeal]);

    return {
        state: {
            activeTab, data, loading, searchTerm, selectedFairyFilter, 
            selectedProfileFilter, selectedCategoryFilter, // ✨ EXPORTÉ ICI !
            editingItem, viewingItem,
            isCreating, confirmState, filteredData, encyclopediaRefs, competencesFutiles, pendingLocks
        },
        setters: {
            setActiveTab, setSearchTerm, setSelectedFairyFilter, 
            setSelectedProfileFilter, setSelectedCategoryFilter, // ✨ EXPORTÉ ICI !
            setEditingItem, setViewingItem,
            setIsCreating, setConfirmState
        },
        handlers: {
            fetchData, fetchPendingLocks, handleOpenEdit, handleCreateNew, triggerDelete, triggerToggleSeal
        }
    };
}