// src/components/CharacterList.js

import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { Bug, Info, User, Users, LogOut, Globe, Book, Crown, Gift, Plus, X, BarChart2, Search, AlertTriangle, CheckCircle, Map, Dices, Wrench } from '../config/icons';
import { supabase } from '../config/supabase';
import { getUserCharacters, getPublicCharacters, getAllCharactersAdmin, deleteCharacterFromSupabase, toggleCharacterVisibility, saveCharacterToSupabase, getFullCharacter } from '../utils/supabaseStorage';
import { exportToPDF } from '../utils/pdfGenerator';
import { exportCharacter } from '../utils/utils';
import { showInAppNotification, translateError } from '../utils/SystemeServices';
import { isCharacterScelle } from '../utils/lockUtils';
import { isSuperAdmin } from '../utils/authRoles';
import { characterReducer } from '../utils/characterEngine';
import { mapDbCharForReconstruction, journalNeedsRepair, buildRepairedJournal, computeXpDepenseFromJournal } from '../utils/repairJournaux';
import { loadFairyTypes, loadSocialItems } from '../utils/supabaseGameData';
import ConfirmModal from './ConfirmModal';
import GrimoirePersonnel from './cercle/GrimoirePersonnel';
import CharacterCard from './CharacterCard';

// ─── Constantes de réparation ───────────────────────────────────────────────
const REPAIR_STATUS = {
  PENDING:  'pending',
  OK:       'ok',
  REPAIRED: 'repaired',
  SKIPPED:  'skipped',
  ERROR:    'error',
};

// ─── Modale de confirmation de réparation (admin) ───────────────────────────
function RepairConfirmModal({ target, onConfirm, onCancel }) {
  if (!target) return null;
  const { row, preview } = target;
  const oldJournal   = row.dbChar.data?.historique_xp || [];
  const gainsBefore  = oldJournal.filter(t => t.type === 'GAIN').length;
  const depBefore    = oldJournal.filter(t => t.type === 'DEPENSE').length;
  const gainsAfter   = preview.filter(t => t.type === 'GAIN').length;
  const depAfter     = preview.filter(t => t.type === 'DEPENSE').length;
  const newXpDepense = computeXpDepenseFromJournal(preview);
  const oldXpTotal   = row.dbChar.xp_total || 0;
  const newXpTotal   = Math.max(oldXpTotal, newXpDepense);
  const xpTotalBumped = newXpTotal > oldXpTotal;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={onCancel}>
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 max-w-md w-full p-6" onClick={e => e.stopPropagation()}>
        <div className="flex items-start gap-3 mb-4">
          <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={22} />
          <div>
            <h3 className="font-serif font-bold text-gray-900 text-lg leading-tight">
              Reconstruire le journal de<br />
              <span className="text-amber-800">{row.dbChar.nom}</span> ?
            </h3>
            <p className="text-sm text-gray-500 mt-1">Les dépenses actuelles seront remplacées.</p>
          </div>
        </div>

        {/* Tableau avant / après */}
        <div className="bg-stone-50 rounded-xl border border-stone-200 overflow-hidden mb-4">
          <div className="grid grid-cols-3 text-[11px] font-bold text-stone-500 uppercase tracking-wider border-b border-stone-200">
            <div className="p-2 border-r border-stone-200">Données</div>
            <div className="p-2 text-center border-r border-stone-200">Avant</div>
            <div className="p-2 text-center text-blue-700">Après</div>
          </div>
          <div className="grid grid-cols-3 text-sm divide-y divide-stone-100">
            <div className="p-2 text-stone-600 border-r border-stone-200 font-medium">Entrées GAIN</div>
            <div className="p-2 text-center text-stone-700 border-r border-stone-200">{gainsBefore}</div>
            <div className="p-2 text-center text-blue-700 font-bold">{gainsAfter}</div>

            <div className="p-2 text-stone-600 border-r border-stone-200 font-medium">Entrées DÉPENSE</div>
            <div className="p-2 text-center text-stone-700 border-r border-stone-200">{depBefore}</div>
            <div className="p-2 text-center text-blue-700 font-bold">{depAfter}</div>

            <div className="p-2 text-stone-600 border-r border-stone-200 font-medium">Total entrées</div>
            <div className="p-2 text-center text-stone-700 border-r border-stone-200">{oldJournal.length}</div>
            <div className="p-2 text-center text-blue-700 font-bold">{preview.length}</div>

            <div className="p-2 text-stone-600 border-r border-stone-200 font-medium">XP dépensé</div>
            <div className="p-2 text-center text-stone-700 border-r border-stone-200">{row.dbChar.xp_depense}</div>
            <div className="p-2 text-center text-blue-700 font-bold">{newXpDepense}</div>

            <div className="p-2 text-stone-600 border-r border-stone-200 font-medium">XP total</div>
            <div className="p-2 text-center text-stone-700 border-r border-stone-200">{oldXpTotal}</div>
            <div className={`p-2 text-center font-bold ${xpTotalBumped ? 'text-amber-600' : 'text-blue-700'}`}>
              {newXpTotal}{xpTotalBumped && ' ↑'}
            </div>
          </div>
        </div>

        {xpTotalBumped && (
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-800 mb-4 flex items-start gap-2">
            <AlertTriangle size={14} className="shrink-0 mt-0.5 text-amber-600" />
            <span>
              Le XP total sera relevé de <strong>{oldXpTotal}</strong> à <strong>{newXpTotal}</strong> pour rester cohérent avec les dépenses reconstruites (contrainte de base de données).
            </span>
          </div>
        )}

        <p className="text-xs text-stone-500 mb-5">
          Les entrées <strong>GAIN</strong> sont préservées. Les <strong>DÉPENSES</strong> sont recalculées depuis le Plancher de Verre.
        </p>

        <div className="flex gap-3">
          <button onClick={onCancel} className="flex-1 px-4 py-2.5 bg-stone-100 text-stone-700 rounded-lg font-bold hover:bg-stone-200 transition-colors">
            Annuler
          </button>
          <button onClick={onConfirm} className="flex-1 px-4 py-2.5 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
            <CheckCircle size={16} /> Reconstruire
          </button>
        </div>
      </div>
    </div>
  );
}


// ============================================================================
// ✨ COMPOSANT PRINCIPAL
// ============================================================================
export default function CharacterList({ onSelectCharacter, onNewCharacter, onSignOut, onOpenAccount, onOpenEncyclopedia, onOpenAdmin, onOpenCercles, onOpenBureau, onOpenOutils, profils = [], userProfile, gameData, session }) {
  const [myCharacters, setMyCharacters] = useState([]);
  const [publicCharacters, setPublicCharacters] = useState([]);
  const [adminCharacters, setAdminCharacters] = useState([]);
  const [activeTab, setActiveTab] = useState('my');
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [hasGiftsWaiting, setHasGiftsWaiting] = useState(false);
  const [showClaimModal, setShowClaimModal] = useState(false);
  const [claimCode, setClaimCode] = useState('');
  const [giftCodeToShow, setGiftCodeToShow] = useState(null);
  const [activeGrimoireCharId, setActiveGrimoireCharId] = useState(null);
  const [publicInfoModal, setPublicInfoModal] = useState({ isOpen: false, charName: '' });
  const [confirmDelete, setConfirmDelete] = useState({ isOpen: false, charId: null });

  // ✨ Filtre de recherche
  const [searchQuery, setSearchQuery] = useState('');

  // ✨ Réparation XP (admin)
  const [repairRows, setRepairRows] = useState({});      // { [charId]: { dbChar, mapped, status, detail } }
  const [repairGameData, setRepairGameData] = useState(null);
  const [repairConfirmTarget, setRepairConfirmTarget] = useState(null);

  // ✨ Réparation XP (joueur) — détection locale + demande admin
  const [playerRepairNeeds, setPlayerRepairNeeds] = useState({});  // { [charId]: boolean }
  const [playerRepairRequest, setPlayerRepairRequest] = useState(null); // { charId, charNom }
  const [pendingRepairCount, setPendingRepairCount] = useState(0); // badge admin

  // 🧠 FIX : Le "Latest Ref Pattern" pour isoler onSignOut du cycle de dépendances
  const onSignOutRef = useRef(onSignOut);
  useEffect(() => { onSignOutRef.current = onSignOut; }, [onSignOut]);

  // ─── Changement d'onglet avec reset du filtre ────────────────────────────
  const handleTabChange = useCallback((tab) => {
    setActiveTab(tab);
  }, []);

  // ─── Filtre de recherche ─────────────────────────────────────────────────
  const filterChars = useCallback((chars) => {
    if (!searchQuery.trim()) return chars;
    const q = searchQuery.toLowerCase();
    return chars.filter(c =>
      (c.nom || '').toLowerCase().includes(q) ||
      (c.typeFee || '').toLowerCase().includes(q) ||
      (c.ownerUsername || '').toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const filteredMyChars     = useMemo(() => filterChars(myCharacters),     [filterChars, myCharacters]);
  const filteredPublicChars = useMemo(() => filterChars(publicCharacters),  [filterChars, publicCharacters]);
  const filteredAdminChars  = useMemo(() => filterChars(adminCharacters),   [filterChars, adminCharacters]);

  // ─── Chargement des personnages ──────────────────────────────────────────
  const loadCharacters = useCallback(async (isMounted = true) => {
    if (!isMounted) return;
    setLoading(true);

    try {
      const myUserId = session?.user?.id;
      if (!myUserId || !isMounted) return;

      const isAdminUser = isSuperAdmin(userProfile);
      if (isMounted) setIsAdmin(isAdminUser);

      const [mesPersos, persosPublics, persosAdmin] = await Promise.all([
        getUserCharacters(myUserId),
        getPublicCharacters(),
        isAdminUser ? getAllCharactersAdmin() : Promise.resolve([])
      ]);

      const { data: giftPing } = await supabase.rpc('check_pending_gifts');
      if (!isMounted) return;

      setHasGiftsWaiting(!!giftPing);
      setMyCharacters(mesPersos || []);
      setPublicCharacters((persosPublics || []).filter(c => c.userId !== myUserId));

      if (isAdminUser) {
        setAdminCharacters((persosAdmin || []).filter(c => c.userId !== myUserId && !c.isPublic));
      }
    } catch (error) {
      console.error('❌ loadCharacters error:', error);
      if (error.message?.includes('JWT') || error.status === 401) {
        if (onSignOutRef.current) onSignOutRef.current();
      }
    } finally {
      if (isMounted) setLoading(false);
    }
  }, [session?.user?.id, userProfile]);

  useEffect(() => {
    let isMounted = true;
    loadCharacters(isMounted);
    return () => { isMounted = false; };
  }, [loadCharacters]);

  // ─── Réparation XP : chargement des statuts (admin seulement) ───────────
  const loadRepairStatuses = useCallback(async () => {
    try {
      const { data: chars, error } = await supabase
        .from('characters')
        .select('*')
        .in('statut', ['scelle', 'scellé'])
        .order('nom');
      if (error) throw error;

      const rows = {};
      for (const dbChar of (chars || [])) {
        const mapped = mapDbCharForReconstruction(dbChar);
        let status = REPAIR_STATUS.PENDING;
        if (!dbChar.data?.stats_scellees)    status = REPAIR_STATUS.SKIPPED;
        else if (!journalNeedsRepair(mapped)) status = REPAIR_STATUS.OK;
        rows[dbChar.id] = { dbChar, mapped, status, detail: '' };
      }
      setRepairRows(rows);
    } catch (e) {
      console.error('Repair status load error:', e);
    }
  }, []);

  useEffect(() => {
    if (isAdmin) loadRepairStatuses();
  }, [isAdmin, loadRepairStatuses]);

  // ─── Réparation XP : détection côté joueur (non-admin) ──────────────────
  useEffect(() => {
    if (isAdmin || myCharacters.length === 0) return;
    const sealedIds = myCharacters
      .filter(c => c.statut === 'scelle' || c.statut === 'scellé')
      .map(c => c.id);
    if (sealedIds.length === 0) return;

    (async () => {
      try {
        const { data } = await supabase
          .from('characters')
          .select('id, xp_depense, statut, data')
          .in('id', sealedIds);
        if (!data) return;
        const needs = {};
        for (const dbChar of data) {
          needs[dbChar.id] = journalNeedsRepair(mapDbCharForReconstruction(dbChar));
        }
        setPlayerRepairNeeds(needs);
      } catch { /* silencieux */ }
    })();
  }, [isAdmin, myCharacters]);

  // ─── Réparation XP : comptage des demandes en attente (admin) ───────────
  useEffect(() => {
    if (!isAdmin) return;
    (async () => {
      try {
        const { count } = await supabase
          .from('journal_repair_requests')
          .select('*', { count: 'exact', head: true })
          .is('resolved_at', null);
        setPendingRepairCount(count || 0);
      } catch { /* silencieux */ }
    })();
  }, [isAdmin]);

  // ─── Réparation XP : soumission de la demande joueur ────────────────────
  const submitPlayerRepairRequest = useCallback(async () => {
    if (!playerRepairRequest) return;
    const { charId, charNom } = playerRepairRequest;
    setPlayerRepairRequest(null);
    try {
      const { error } = await supabase.from('journal_repair_requests').insert({
        character_id: charId,
        character_nom: charNom,
        requested_by: session?.user?.id,
      });
      if (error) throw error;
      showInAppNotification("Demande envoyée ! L'administrateur va réparer votre journal.", "success");
    } catch (e) {
      showInAppNotification("Erreur lors de l'envoi de la demande : " + e.message, "error");
    }
  }, [playerRepairRequest, session?.user?.id]);

  // ─── Réparation XP : demande de reconstruction pour une carte ────────────
  const requestRepairOne = useCallback(async (charId) => {
    const row = repairRows[charId];
    if (!row) return;

    try {
      showInAppNotification("Analyse du journal en cours…", "info");

      // Charge le gameData de réparation si pas encore disponible
      let gd = repairGameData;
      if (!gd) {
        const [fairyResult, socialItems, atoutsResult] = await Promise.all([
          loadFairyTypes(),
          loadSocialItems(),
          supabase.from('fairy_assets').select('id, nom').order('nom'),
        ]);
        gd = { fairyData: fairyResult.fairyData, socialItems, atouts: atoutsResult.data || [] };
        setRepairGameData(gd);
      }

      const preview = buildRepairedJournal(row.mapped, gd);
      if (!preview) {
        showInAppNotification("Reconstruction impossible (plancher de verre absent).", "warning");
        return;
      }
      setRepairConfirmTarget({ row, charId, preview });
    } catch (e) {
      showInAppNotification("Erreur d'analyse : " + e.message, "error");
    }
  }, [repairRows, repairGameData]);

  // ─── Réparation XP : exécution après confirmation ────────────────────────
  const executeRepair = useCallback(async () => {
    if (!repairConfirmTarget) return;
    const { row, charId, preview } = repairConfirmTarget;
    setRepairConfirmTarget(null);

    try {
      const newXpDepense = computeXpDepenseFromJournal(preview);
      // ⚡ Garantit xp_depense ≤ xp_total (contrainte check_xp_coherence)
      const newXpTotal   = Math.max(row.dbChar.xp_total || 0, newXpDepense);
      const updatedData  = { ...row.dbChar.data, historique_xp: preview };

      const { error } = await supabase
        .from('characters')
        .update({ data: updatedData, xp_depense: newXpDepense, xp_total: newXpTotal })
        .eq('id', charId);
      if (error) throw error;

      const gains  = preview.filter(t => t.type === 'GAIN').length;
      const deps   = preview.filter(t => t.type === 'DEPENSE').length;
      const detail = `${preview.length} entrées (${gains} gains + ${deps} dépenses) — ${newXpDepense} XP dépensés`;

      setRepairRows(prev => ({
        ...prev,
        [charId]: { ...prev[charId], status: REPAIR_STATUS.REPAIRED, detail }
      }));
      showInAppNotification(`✨ Journal reconstruit : ${detail}`, "success");
    } catch (e) {
      setRepairRows(prev => ({
        ...prev,
        [repairConfirmTarget?.charId]: { ...prev[repairConfirmTarget?.charId], status: REPAIR_STATUS.ERROR, detail: e.message }
      }));
      showInAppNotification("Erreur : " + e.message, "error");
    }
  }, [repairConfirmTarget]);

  // ─── Actions sur les personnages ─────────────────────────────────────────

  // 🧠 FIX : Le Cerveau qui charge le reste du personnage uniquement au clic !
  const handleSelectCharacter = useCallback(async (lightChar, readOnly = false) => {
    try {
      showInAppNotification("Ouverture des archives...", "info");
      const fullChar = await getFullCharacter(lightChar.id);
      fullChar.ownerUsername = lightChar.ownerUsername;
      onSelectCharacter(fullChar, readOnly);
    } catch (error) {
      showInAppNotification("Le parchemin est illisible : " + error.message, "error");
    }
  }, [onSelectCharacter]);

  const handleDeleteClick = useCallback((id) => {
    setConfirmDelete({ isOpen: true, charId: id });
  }, []);

  const executeDelete = useCallback(async () => {
    if (!confirmDelete.charId) return;
    try {
      await deleteCharacterFromSupabase(confirmDelete.charId);
      await loadCharacters();
      showInAppNotification("Le personnage a été effacé de notre réalité.", "success");
    } catch (error) {
      showInAppNotification(translateError(error), "error");
    } finally {
      setConfirmDelete({ isOpen: false, charId: null });
    }
  }, [confirmDelete.charId, loadCharacters]);

  const handleDuplicate = useCallback(async (lightChar) => {
    try {
      showInAppNotification("Copie du parchemin en cours...", "info");
      const fullChar = await getFullCharacter(lightChar.id);
      const charForRecon = isCharacterScelle(fullChar) && gameData
        ? { ...fullChar, data: { ...fullChar.data, historique_xp: [] } }
        : fullChar;
      const hydratedChar = characterReducer(charForRecon, { type: 'LOAD_CHARACTER', payload: charForRecon, gameData });
      const newChar = JSON.parse(JSON.stringify(hydratedChar));
      newChar.id = null;
      newChar.nom = `${newChar.nom} (Copie)`;
      newChar.statut = isCharacterScelle(fullChar) ? fullChar.statut : 'brouillon';
      await saveCharacterToSupabase(newChar);
      await loadCharacters();
      showInAppNotification("L'Héritier a été dupliqué avec succès !", "success");
    } catch (error) {
      showInAppNotification(translateError(error), "error");
    }
  }, [loadCharacters, gameData]);

  const handleCreateGiftCode = useCallback(async (lightChar) => {
    try {
      showInAppNotification("Préparation de l'offrande...", "info");
      const randomSegment = typeof crypto !== 'undefined' && crypto.randomUUID
        ? crypto.randomUUID().split('-')[0].toUpperCase()
        : Math.random().toString(36).substring(2, 6).toUpperCase();
      const code = `DON-${randomSegment}`;
      const fullChar = await getFullCharacter(lightChar.id);
      const newData = { ...(fullChar.data || {}), transfer_code: code };
      const { error } = await supabase.from('characters').update({ data: newData, transfer_code: code }).eq('id', lightChar.id);
      if (error) throw error;
      setGiftCodeToShow({ nom: lightChar.nom, code });
      await loadCharacters();
    } catch (error) {
      showInAppNotification("Erreur lors de la création du don : " + error.message, "error");
    }
  }, [loadCharacters]);

  const handleClaimGift = async () => {
    if (!claimCode.trim()) {
      showInAppNotification("Veuillez saisir un code !", "warning");
      return;
    }
    try {
      const { error } = await supabase.rpc('claim_character_by_code', { p_code: claimCode.trim().toUpperCase() });
      if (error) throw error;
      showInAppNotification("Un nouvel Héritier a rejoint vos rangs !", "success");
      setShowClaimModal(false);
      setClaimCode('');
      await loadCharacters();
    } catch (error) {
      showInAppNotification(error.message, "error");
    }
  };

  const handleToggleVisibility = useCallback(async (id, currentlyPublic, charName) => {
    try {
      const newPublicStatus = !currentlyPublic;
      await toggleCharacterVisibility(id, newPublicStatus);
      await loadCharacters();
      if (newPublicStatus) {
        setPublicInfoModal({ isOpen: true, charName: charName || 'Votre personnage' });
      } else {
        showInAppNotification("L'Héritier est de nouveau masqué au public.", "info");
      }
    } catch (error) {
      showInAppNotification("Erreur : " + error.message, "error");
    }
  }, [loadCharacters]);

  const handleAppropriate = useCallback(async (lightChar) => {
    try {
      showInAppNotification("Saisie de l'Héritier en cours...", "info");
      const fullChar = await getFullCharacter(lightChar.id);
      const charForRecon = isCharacterScelle(fullChar) && gameData
        ? { ...fullChar, data: { ...fullChar.data, historique_xp: [] } }
        : fullChar;
      const hydratedChar = characterReducer(charForRecon, { type: 'LOAD_CHARACTER', payload: charForRecon, gameData });
      const newChar = JSON.parse(JSON.stringify(hydratedChar));
      newChar.id = null;
      newChar.nom = `${newChar.nom} (Saisie)`;
      newChar.statut = isCharacterScelle(fullChar) ? fullChar.statut : 'brouillon';
      newChar.isPublic = false;
      await saveCharacterToSupabase(newChar);
      await loadCharacters();
      showInAppNotification("Appropriation réussie ! L'Héritier a rejoint votre Grimoire.", "success");
    } catch (error) {
      showInAppNotification(translateError(error), "error");
    }
  }, [loadCharacters, gameData]);

  const handleExportJson = useCallback(async (lightChar) => {
    try {
      showInAppNotification("Séquençage de l'ADN en cours...", "info");
      const fullChar = await getFullCharacter(lightChar.id);
      exportCharacter(fullChar);
    } catch (error) {
      showInAppNotification("Impossible d'extraire l'ADN : " + translateError(error), "error");
    }
  }, []);

  const handleExportPDF = useCallback(async (lightChar) => {
    try {
      showInAppNotification("Préparation du parchemin...", "info");
      const fullChar = await getFullCharacter(lightChar.id);
      exportToPDF(fullChar, gameData);
    } catch (error) {
      showInAppNotification("Impossible de graver le parchemin : " + translateError(error), "error");
    }
  }, [gameData]);

  // ─── Props communes pour CharacterCard ───────────────────────────────────
  const commonCardProps = useMemo(() => ({
    profils, gameData, isAdmin,
    onSelect: handleSelectCharacter,
    onToggleVisibility: handleToggleVisibility,
    onDuplicate: handleDuplicate,
    onCreateGift: handleCreateGiftCode,
    onDeleteClick: handleDeleteClick,
    onOpenGrimoire: setActiveGrimoireCharId,
    onAppropriate: handleAppropriate,
    onExportJson: handleExportJson,
    onExportPDF: handleExportPDF,
  }), [profils, gameData, isAdmin, handleSelectCharacter, handleToggleVisibility,
      handleDuplicate, handleCreateGiftCode, handleDeleteClick, setActiveGrimoireCharId,
      handleAppropriate, handleExportJson, handleExportPDF]);

  // ─── Compteur de résultats filtrés ───────────────────────────────────────
  const activeCount = {
    my:     searchQuery ? filteredMyChars.length     : myCharacters.length,
    public: searchQuery ? filteredPublicChars.length : publicCharacters.length,
    admin:  searchQuery ? filteredAdminChars.length  : adminCharacters.length,
  };

  return (
    <div className="w-full">
      <div className="flex flex-col gap-6 mb-8 mt-2">

        {/* ─── BARRE DE NAVIGATION ─────────────────────────────────────── */}
        <div className="relative z-50 flex flex-nowrap items-center gap-1 overflow-x-auto hide-scrollbar w-full pb-2">
          <button onClick={onOpenEncyclopedia} className="flex-shrink-0 flex items-center space-x-1 px-2 py-1 sm:px-2.5 sm:py-1.5 bg-amber-100 text-amber-900 border-2 border-amber-200 rounded-lg hover:bg-amber-200 hover:border-amber-300 transition-all font-serif font-bold text-xs sm:text-sm shadow-sm" title="Accéder au Grimoire">
            <Book size={14} /> <span className="hidden lg:inline">Encyclopédie</span>
          </button>
          <button onClick={onOpenOutils} className="flex-shrink-0 flex items-center space-x-1 px-2 py-1 sm:px-2.5 sm:py-1.5 bg-stone-100 text-stone-800 border-2 border-stone-200 rounded-lg hover:bg-stone-200 hover:border-stone-300 transition-all font-serif font-bold text-xs sm:text-sm shadow-sm" title="Outils pour les Doctes">
            <Wrench size={14} /> <span className="hidden lg:inline">Outils</span>
          </button>
          <button onClick={onOpenCercles} className="flex-shrink-0 flex items-center space-x-1 px-2 py-1 sm:px-2.5 sm:py-1.5 bg-purple-100 text-purple-900 border-2 border-purple-200 rounded-lg hover:bg-purple-200 hover:border-purple-300 transition-all font-serif font-bold text-xs sm:text-sm shadow-sm" title="Gérer mes tables virtuelles">
            <Users size={14} /> <span className="hidden lg:inline">Cercles</span>
          </button>
          <button onClick={onOpenAdmin} className="relative flex-shrink-0 flex items-center space-x-1 px-2 py-1 sm:px-2.5 sm:py-1.5 bg-indigo-100 text-indigo-800 border-2 border-indigo-200 rounded-lg hover:bg-indigo-200 transition-all font-serif font-bold text-xs sm:text-sm shadow-sm" title="Voir la communauté et les statistiques du jeu">
            <BarChart2 size={14} /> <span className="hidden lg:inline">Communauté</span>
            {isAdmin && pendingRepairCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] flex items-center justify-center bg-orange-500 text-white text-[10px] font-black rounded-full px-1 animate-pulse shadow">
                {pendingRepairCount}
              </span>
            )}
          </button>
          <button onClick={onOpenBureau} className="flex-shrink-0 flex items-center space-x-1 px-2 py-1 sm:px-2.5 sm:py-1.5 bg-rose-100 text-rose-800 border-2 border-rose-200 rounded-lg hover:bg-rose-200 transition-all font-serif font-bold text-xs sm:text-sm shadow-sm" title="Signaler une faille dans la matrice">
            <Bug size={14} /> <span className="hidden lg:inline">Anomalies</span>
          </button>
          <button onClick={onOpenAccount} className="flex-shrink-0 flex items-center space-x-1 px-2 py-1 sm:px-2.5 sm:py-1.5 bg-gray-100 text-gray-700 border-2 border-gray-200 rounded-lg hover:bg-gray-200 transition-all font-serif font-bold text-xs sm:text-sm shadow-sm">
            <User size={14} /> <span className="hidden lg:inline">Compte</span>
          </button>
          <button onClick={onSignOut} className="flex-shrink-0 flex items-center space-x-1 px-2 py-1 sm:px-2.5 sm:py-1.5 bg-red-100 text-red-700 border-2 border-red-200 rounded-lg hover:bg-red-200 transition-all font-serif font-bold text-xs sm:text-sm shadow-sm" title="Se déconnecter">
            <LogOut size={14} /> <span className="hidden lg:inline">Déconnexion</span>
          </button>
        </div>

        {/* ─── ONGLETS ─────────────────────────────────────────────────── */}
        <div className="flex gap-4 border-b border-gray-200 overflow-x-auto hide-scrollbar items-end">
          <button
            onClick={onNewCharacter}
            disabled={!gameData?.fairyTypes?.length}
            title={!gameData?.fairyTypes?.length ? "Chargement des données en cours…" : undefined}
            className={`flex-shrink-0 mr-6 pb-3 font-bold text-sm uppercase tracking-wider flex items-center gap-2 whitespace-nowrap transition-colors border-b-2 text-green-700 border-transparent hover:text-green-800 hover:border-green-600 ${!gameData?.fairyTypes?.length ? 'opacity-50 cursor-wait' : ''}`}
          >
            <Plus size={16} /> Nouveau
          </button>
          <button onClick={() => handleTabChange('my')} className={`pb-3 font-bold text-sm uppercase tracking-wider flex items-center gap-2 whitespace-nowrap transition-colors border-b-2 ${ activeTab === 'my' ? 'text-amber-900 border-amber-600' : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300' }`}>
            Mes personnages
            <span className={`py-0.5 px-2 rounded-full text-xs ${activeTab === 'my' ? 'bg-amber-100 text-amber-800' : 'bg-gray-100 text-gray-600'}`}>
              {activeCount.my}
            </span>
          </button>
          <button onClick={() => handleTabChange('public')} className={`pb-3 font-bold text-sm uppercase tracking-wider flex items-center gap-2 whitespace-nowrap transition-colors border-b-2 ${ activeTab === 'public' ? 'text-blue-900 border-blue-600' : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300' }`}>
            <Globe size={16} /> Publics
            <span className={`py-0.5 px-2 rounded-full text-xs ${activeTab === 'public' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600'}`}>
              {activeCount.public}
            </span>
          </button>
          {isAdmin && (
            <button onClick={() => handleTabChange('admin')} className={`pb-3 font-bold text-sm uppercase tracking-wider flex items-center gap-2 whitespace-nowrap transition-colors border-b-2 ${ activeTab === 'admin' ? 'text-red-900 border-red-600' : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300' }`}>
              <Crown size={16} /> Admin
              <span className={`py-0.5 px-2 rounded-full text-xs ${activeTab === 'admin' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-600'}`}>
                {activeCount.admin}
              </span>
            </button>
          )}
          <button
            onClick={() => setShowClaimModal(true)}
            className="ml-auto pb-3 font-bold text-sm uppercase tracking-wider flex items-center gap-2 text-emerald-600 border-b-2 border-transparent hover:border-emerald-600 hover:text-emerald-700 transition-colors"
            title="Saisir le code d'un Parchemin Scellé"
          >
            <Gift size={16} className={hasGiftsWaiting ? "animate-pulse drop-shadow-md" : ""} /> Recevoir
          </button>
        </div>

        {/* ─── FILTRE DE RECHERCHE ─────────────────────────────────────── */}
        <div className="relative -mt-3">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Filtrer les personnages… (nom, nature, joueur)"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-8 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-200 bg-white font-serif"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 transition-colors"
            >
              <X size={14} />
            </button>
          )}
        </div>
      </div>

      {/* ─── CONTENU ─────────────────────────────────────────────────────── */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden animate-pulse flex flex-col h-[200px]">
              <div className="p-4 border-b border-stone-100">
                <div className="flex justify-between items-start mb-3">
                  <div className="h-6 w-1/2 bg-stone-200 rounded-md"></div>
                  <div className="h-5 w-16 bg-stone-200 rounded-full"></div>
                </div>
                <div className="h-4 w-1/3 bg-stone-100 rounded-md"></div>
              </div>
              <div className="flex-1 p-4 flex items-center justify-center gap-3">
                <div className="h-5 w-24 bg-stone-200 rounded-md"></div>
                <div className="h-4 w-4 bg-stone-100 rounded-full"></div>
                <div className="h-5 w-24 bg-stone-200 rounded-md"></div>
              </div>
              <div className="bg-stone-50 px-4 py-3 border-t border-stone-100 flex justify-between items-center mt-auto">
                <div className="h-3 w-20 bg-stone-200 rounded-md"></div>
                <div className="h-3 w-16 bg-stone-200 rounded-md"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-4">

          {/* ─── MES PERSONNAGES ─── */}
          {activeTab === 'my' && (
            filteredMyChars.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMyChars.map((char) => (
                  <div key={char.id} className="h-full">
                    <CharacterCard
                      {...commonCardProps}
                      char={char}
                      isMyCharacter={true}
                      userProfile={userProfile}
                      repairStatus={isAdmin ? repairRows[char.id]?.status : undefined}
                      onRepairRequest={isAdmin ? requestRepairOne : undefined}
                      needsRepair={!isAdmin ? playerRepairNeeds[char.id] : undefined}
                      onRequestRepair={!isAdmin ? (id, nom) => setPlayerRepairRequest({ charId: id, charNom: nom }) : undefined}
                    />
                  </div>
                ))}
              </div>
            ) : (
              myCharacters.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-xl border-2 border-dashed border-gray-300">
                  <p className="text-gray-500 font-serif mb-4">Vous n'avez pas encore créé de personnage.</p>
                  <button
                    onClick={onNewCharacter}
                    disabled={!gameData?.fairyTypes?.length}
                    className="text-amber-600 font-bold hover:underline disabled:opacity-50 disabled:cursor-wait"
                  >
                    {gameData?.fairyTypes?.length ? 'Créer mon premier Héritier' : 'Chargement en cours…'}
                  </button>
                </div>
              ) : (
                <div className="text-center py-12 text-stone-400 font-serif italic">
                  Aucun personnage ne correspond à « {searchQuery} »
                </div>
              )
            )
          )}

          {/* ─── PUBLICS ─── */}
          {activeTab === 'public' && (
            filteredPublicChars.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPublicChars.map((char) => (
                  <div key={char.id} className="h-full">
                    <CharacterCard
                      {...commonCardProps}
                      char={char}
                      isMyCharacter={char.userId === session?.user?.id}
                      userProfile={userProfile}
                      repairStatus={isAdmin ? repairRows[char.id]?.status : undefined}
                      onRepairRequest={isAdmin ? requestRepairOne : undefined}
                    />
                  </div>
                ))}
              </div>
            ) : (
              publicCharacters.length === 0 ? (
                <div className="text-center py-20 text-gray-500 font-serif italic">Aucun personnage public disponible pour le moment.</div>
              ) : (
                <div className="text-center py-12 text-stone-400 font-serif italic">
                  Aucun personnage ne correspond à « {searchQuery} »
                </div>
              )
            )
          )}

          {/* ─── ADMIN ─── */}
          {activeTab === 'admin' && isAdmin && (
            filteredAdminChars.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAdminChars.map((char) => (
                  <div key={char.id} className="h-full">
                    <CharacterCard
                      {...commonCardProps}
                      char={char}
                      isMyCharacter={char.userId === session?.user?.id}
                      userProfile={userProfile}
                      repairStatus={repairRows[char.id]?.status}
                      onRepairRequest={requestRepairOne}
                    />
                  </div>
                ))}
              </div>
            ) : (
              adminCharacters.length === 0 ? (
                <div className="text-center py-20 text-gray-500 font-serif italic">Aucun personnage masqué à afficher.</div>
              ) : (
                <div className="text-center py-12 text-stone-400 font-serif italic">
                  Aucun personnage ne correspond à « {searchQuery} »
                </div>
              )
            )
          )}
        </div>
      )}

      {/* ─── MODALES ─────────────────────────────────────────────────────── */}

      <ConfirmModal
        isOpen={confirmDelete.isOpen}
        title="Détruire le Sceau"
        message="Voulez-vous vraiment effacer ce personnage des Archives ? Cette action est irréversible."
        onConfirm={executeDelete}
        onCancel={() => setConfirmDelete({ isOpen: false, charId: null })}
        confirmText="Oui, l'effacer"
      />

      {/* ✨ Modale de confirmation de réparation XP */}
      <RepairConfirmModal
        target={repairConfirmTarget}
        onConfirm={executeRepair}
        onCancel={() => setRepairConfirmTarget(null)}
      />

      {showClaimModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/80 backdrop-blur-sm p-4">
          <div className="bg-[#fdfbf7] max-w-md w-full rounded-xl shadow-2xl border-2 border-emerald-900/20 overflow-hidden transform">
            <div className="p-4 bg-emerald-50 border-b border-emerald-200 flex justify-between items-center">
              <h3 className="font-serif font-bold text-lg text-emerald-900 flex items-center gap-2"><Gift size={20}/> Adopter un Héritier</h3>
              <button onClick={() => setShowClaimModal(false)} className="text-emerald-400 hover:text-emerald-700"><X size={20}/></button>
            </div>
            <div className="p-6">
              <p className="text-sm text-stone-600 mb-4 text-center">Saisissez le Parchemin Scellé fourni par le donneur pour intégrer ce personnage à votre compte.</p>
              <input
                type="text"
                placeholder="Ex: DON-A7X9"
                value={claimCode}
                onChange={e => setClaimCode(e.target.value)}
                className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none uppercase font-mono font-bold text-center text-xl tracking-widest mb-6 bg-white shadow-inner"
                autoFocus
              />
              <button onClick={handleClaimGift} className="w-full py-3 bg-emerald-600 text-white font-bold rounded-lg shadow-md hover:bg-emerald-700 transition-all flex justify-center items-center gap-2">
                Briser le Sceau
              </button>
            </div>
          </div>
        </div>
      )}

      {giftCodeToShow && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/80 backdrop-blur-sm p-4">
          <div className="bg-[#fdfbf7] max-w-md w-full rounded-xl shadow-2xl border-2 border-purple-900/20 overflow-hidden transform">
            <div className="p-4 bg-purple-50 border-b border-purple-200 flex justify-between items-center">
              <h3 className="font-serif font-bold text-lg text-purple-900 flex items-center gap-2"><Gift size={20}/> Parchemin Scellé</h3>
              <button onClick={() => setGiftCodeToShow(null)} className="text-purple-400 hover:text-purple-700"><X size={20}/></button>
            </div>
            <div className="p-6 text-center">
              <p className="text-sm text-stone-600 mb-4">Le personnage <strong>{giftCodeToShow.nom}</strong> est prêt à être transféré. Transmettez ce code unique au destinataire :</p>
              <div className="bg-white p-4 rounded-xl border-2 border-dashed border-purple-300 mb-6 shadow-sm">
                <span className="font-mono font-black text-3xl text-purple-800 tracking-widest">{giftCodeToShow.code}</span>
              </div>
              <button onClick={() => setGiftCodeToShow(null)} className="w-full py-3 bg-purple-600 text-white font-bold rounded-lg shadow-md hover:bg-purple-700 transition-all">
                J'ai noté le code
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ✨ MODALE D'INFORMATION PUBLIQUE */}
      {publicInfoModal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/80 backdrop-blur-sm p-4">
          <div className="bg-[#fdfbf7] max-w-md w-full rounded-xl shadow-2xl border-2 border-blue-900/20 overflow-hidden transform">
            <div className="p-4 bg-blue-50 border-b border-blue-200 flex justify-between items-center">
              <h3 className="font-serif font-bold text-lg text-blue-900 flex items-center gap-2">
                <Globe size={20} className="text-blue-600"/> Révélation Publique
              </h3>
              <button onClick={() => setPublicInfoModal({ isOpen: false, charName: '' })} className="text-blue-400 hover:text-blue-700 transition-colors">
                <X size={20}/>
              </button>
            </div>
            <div className="p-6 text-center">
              <p className="text-stone-700 mb-5 leading-relaxed text-sm">
                L'Héritier <strong className="text-amber-900 font-serif text-lg">{publicInfoModal.charName}</strong> est désormais visible par l'ensemble de la communauté !
              </p>
              <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 mb-6 text-sm text-amber-800 shadow-inner text-left flex gap-3 items-start">
                <Info size={24} className="shrink-0 mt-0.5 text-amber-600" />
                <p>
                  Pour garder votre Grimoire bien rangé, ce personnage restera classé dans votre onglet <strong>"Mes personnages"</strong>. Il n'apparaîtra pas en double dans votre vue de l'onglet "Publics".
                </p>
              </div>
              <button onClick={() => setPublicInfoModal({ isOpen: false, charName: '' })} className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition-transform active:scale-95">
                J'ai compris !
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ✨ MODALE DE DEMANDE DE RÉPARATION (JOUEUR) */}
      {playerRepairRequest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={() => setPlayerRepairRequest(null)}>
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 max-w-sm w-full p-6" onClick={e => e.stopPropagation()}>
            <div className="flex items-start gap-3 mb-4">
              <span className="text-2xl">🔴</span>
              <div>
                <h3 className="font-serif font-bold text-gray-900 text-lg leading-tight">
                  Demander une réparation
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Le journal XP de <strong className="text-amber-800">{playerRepairRequest.charNom}</strong> semble incomplet.
                </p>
              </div>
            </div>
            <p className="text-sm text-stone-600 mb-6">
              Voulez-vous envoyer une demande à l'administrateur pour qu'il répare votre journal d'expérience ?
            </p>
            <div className="flex gap-3">
              <button onClick={() => setPlayerRepairRequest(null)} className="flex-1 px-4 py-2.5 bg-stone-100 text-stone-700 rounded-lg font-bold hover:bg-stone-200 transition-colors">
                Annuler
              </button>
              <button onClick={submitPlayerRepairRequest} className="flex-1 px-4 py-2.5 bg-orange-500 text-white rounded-lg font-bold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
                <span aria-hidden="true">✉️</span> Envoyer la demande
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ✨ LA MODALE IMMERSIVE DU GRIMOIRE PERSONNEL (SOLO) ✨ */}
      {activeGrimoireCharId && (
        <div className="fixed inset-0 z-50 flex flex-col bg-stone-900/90 backdrop-blur-sm p-4 md:p-8">
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setActiveGrimoireCharId(null)}
              className="text-stone-300 hover:text-white flex items-center gap-2 font-bold transition-colors bg-stone-800/50 px-4 py-2 rounded-xl"
            >
              <X size={20} /> Refermer le Grimoire
            </button>
          </div>
          <div className="flex-1 overflow-hidden max-w-5xl mx-auto w-full relative">
            <GrimoirePersonnel
              characterId={activeGrimoireCharId}
              cercleId={null}
              playerId={session?.user?.id}
              isAdmin={isAdmin}
              userProfile={userProfile}
            />
          </div>
        </div>
      )}
    </div>
  );
}
