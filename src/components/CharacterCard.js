// src/components/CharacterCard.js
import React, { useState } from 'react';
import { Globe, Sparkles, Edit, Eye, FileText, Download, EyeOff, BookOpen, Copy, Gift, Trash2, User, Calendar, MessageCircle, AlertTriangle } from '../config/icons';
import { isSuperAdmin } from '../utils/authRoles';
import { useUserContext } from '../context/UserContext';

// ─── Constantes admin (badges de réparation XP) ────────────────────────────
const REPAIR_BADGE = {
  repaired: 'bg-blue-100 text-blue-700 border-blue-200',
  skipped:  'bg-amber-100 text-amber-700 border-amber-200',
  error:    'bg-red-100 text-red-700 border-red-200',
};
const REPAIR_LABEL = {
  repaired: '✨ Journal réparé',
  skipped:  '⚠️ Sans plancher',
  error:    '❌ Erreur journal',
};

const CharacterCard = React.memo(({
  char,
  isMyCharacter,
  isAdmin,
  profils,
  gameData,
  onSelect,
  onToggleVisibility,
  onDuplicate,
  onCreateGift,
  onDeleteClick,
  onOpenGrimoire,
  onAppropriate,
  onExportJson,
  onExportPDF,
  // Props réparation journal XP
  repairStatus,     // admin: 'pending'|'ok'|'repaired'|'skipped'|'error'
  onRepairRequest,  // admin: (charId) => void — reconstruit le journal
  needsRepair,      // joueur: boolean — journal détecté incomplet
  onRequestRepair,  // joueur: (charId, charNom) => void — demande à l'admin
}) => {

  const { userProfile } = useUserContext();
  const [showSuperAdminModal, setShowSuperAdminModal] = useState(false);
  const isSA = isSuperAdmin(userProfile);

  const getProfilInfo = (nomBrut, sexe) => {
    if (!profils || profils.length === 0 || !nomBrut) return { icon: '👤', text: nomBrut || '-' };
    const p = profils.find(pr => pr.nom === nomBrut || pr.nomFeminin === nomBrut || (typeof nomBrut === 'string' && pr.nom && nomBrut.includes(pr.nom)));
    if (!p) return { icon: '👤', text: nomBrut };
    const text = (sexe === 'Femme' && p.nomFeminin) ? p.nomFeminin : p.nom;
    return { icon: p.icon || '👤', text };
  };

  const majeur = getProfilInfo(char.profils?.majeur?.nom, char.sexe);
  const mineur = getProfilInfo(char.profils?.mineur?.nom, char.sexe);

  const handleTelegraphe = (e) => {
    e.stopPropagation();
    window.dispatchEvent(new CustomEvent('open-telegraphe', {
      detail: { targetUser: { id: char.userId, username: char.ownerUsername } }
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-stone-200 overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow">

      {/* 1. EN-TÊTE */}
      <div className="p-4 pb-1 border-b border-stone-100">
        <div className="flex justify-between items-start mb-1 gap-2">
          <h2 className="text-xl font-bold text-amber-900 font-serif truncate w-full" title={char.nom}>
            {char.nom || 'Sans nom'}
            {char.isPublic && (
              <sup className="ml-1 text-blue-500 inline-block" title="Visible par tous"><Globe size={12} /></sup>
            )}
          </h2>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-sm text-amber-700 font-serif italic">
            {char.typeFee || 'Inconnu'} • {char.sexe || '?'}
          </div>
          {(char.statut === 'scelle' || char.statut === 'scellé') && (() => {
            const total     = char.xp_total || 0;
            const depense   = char.xp_depense || 0;
            const remaining = total - depense;
            const isDebt    = remaining < 0;
            return (
              <div
                className={`flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full border shadow-sm ${isDebt ? 'bg-red-50 border-red-300' : 'bg-stone-50 border-stone-200'}`}
                title={isDebt ? `Dette XP : ${depense} dépensés pour ${total} acquis` : `${remaining} XP disponibles sur ${total} acquis`}
              >
                <Sparkles size={12} className={isDebt ? 'text-red-500' : 'text-amber-500'} />
                <span className={isDebt ? 'text-red-700' : 'text-amber-700'}>{remaining}</span>
                <span className="text-stone-300">/</span>
                <span className="text-green-600">{total}</span>
                <span className="text-stone-400">XP</span>
              </div>
            );
          })()}
        </div>

        {/* Badge journal XP */}
        {/* Admin : pending/error — gros badge orange pulsant, cliquable pour reconstruire */}
        {(repairStatus === 'pending' || repairStatus === 'error') && onRepairRequest && (
          <div className="mt-2">
            <button
              onClick={() => onRepairRequest(char.id)}
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full border-2 cursor-pointer animate-pulse bg-orange-50 text-orange-700 border-orange-400 hover:bg-orange-100 shadow-sm transition-all active:scale-95"
              title="Cliquer pour reconstruire le journal XP"
            >
              ⚠️ Journal à faire réparer par l'admin
            </button>
          </div>
        )}
        {/* Admin : repaired/skipped/error sans action — petit badge discret */}
        {repairStatus && repairStatus !== 'pending' && repairStatus !== 'ok' && !onRepairRequest && (
          <div className="mt-1.5">
            <span className={`inline-flex items-center text-[10px] font-bold px-2 py-0.5 rounded-full border ${REPAIR_BADGE[repairStatus] || ''}`}>
              {REPAIR_LABEL[repairStatus] || repairStatus}
            </span>
          </div>
        )}
        {/* Joueur : journal détecté incomplet — badge rouge pulsant, demande de réparation */}
        {!repairStatus && needsRepair && isMyCharacter && (
          <div className="mt-2">
            <button
              onClick={() => onRequestRepair?.(char.id, char.nom)}
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full border-2 cursor-pointer animate-pulse bg-red-50 text-red-700 border-red-400 hover:bg-red-100 shadow-sm transition-all active:scale-95"
              title="Votre journal XP est incomplet — cliquer pour demander une réparation"
            >
              🔴 Journal à faire réparer par l'admin
            </button>
          </div>
        )}
      </div>

      {/* 2. PROFILS */}
      <div className="flex items-center justify-center gap-3 text-sm text-gray-600 mb-2 pt-1">
        <div className="flex items-center gap-1.5" title="Profil Majeur">
          <span className="text-base">{majeur.icon}</span>
          <span className="font-bold text-amber-900">{majeur.text}</span>
        </div>
        <span className="text-gray-300">|</span>
        <div className="flex items-center gap-1.5" title="Profil Mineur">
          <span className="text-base">{mineur.icon}</span>
          <span className="text-blue-900">{mineur.text}</span>
        </div>
      </div>

      {/* 3. ACTIONS */}
      <div className="px-3 pb-3 flex items-center justify-between gap-1.5">

        {/* Le Bouton Principal (Modifier ou Voir la fiche) */}
        {isMyCharacter ? (
          <button onClick={() => onSelect(char)} className="flex-1 py-1.5 px-2 bg-stone-100 text-stone-700 hover:bg-amber-100 hover:text-amber-800 rounded border border-stone-200 text-xs font-bold transition-colors flex justify-center items-center gap-1.5 overflow-hidden">
            <Edit size={14} className="shrink-0" />
            <span className="truncate hidden sm:inline">Modifier</span>
          </button>
        ) : (
          <button onClick={() => onSelect(char, true)} className="flex-1 py-1.5 bg-blue-600 text-white rounded text-sm font-bold hover:bg-blue-700 transition-colors flex justify-center items-center gap-2">
            <Eye size={16}/> Voir la fiche
          </button>
        )}

        {/* Les Petits Boutons d'Action alignés à droite */}
        <div className="flex items-center gap-0.5 shrink-0 bg-stone-50/50 p-0.5 rounded border border-stone-100">

          {/* Boutons Communs (PDF & JSON) */}
          <button onClick={() => onExportPDF(char)} className="p-1.5 text-stone-400 hover:text-stone-700 hover:bg-white rounded transition-all" title="Exporter en PDF" aria-label="Exporter en PDF">
            <FileText size={15}/>
          </button>
          <button onClick={() => onExportJson(char)} className="p-1.5 text-stone-400 hover:text-indigo-600 hover:bg-white rounded transition-all" title="Télécharger l'ADN complet (Format JSON)" aria-label="Télécharger l'ADN complet (Format JSON)">
            <Download size={15}/>
          </button>

          {/* Boutons Spécifiques selon le propriétaire */}
          {isMyCharacter ? (
            <>
              <button onClick={() => onToggleVisibility(char.id, char.isPublic, char.nom)} className={`p-1.5 rounded transition-all ${char.isPublic ? 'text-blue-500 hover:bg-white' : 'text-stone-400 hover:text-stone-700 hover:bg-white'}`} title={char.isPublic ? "Rendre privé" : "Rendre public"} aria-label={char.isPublic ? "Rendre privé" : "Rendre public"}>
                {char.isPublic ? <Globe size={15}/> : <EyeOff size={15}/>}
              </button>
              <button onClick={() => onOpenGrimoire(char.id)} className="p-1.5 text-stone-400 hover:text-amber-600 hover:bg-white rounded transition-colors" title="Ouvrir le Grimoire Personnel" aria-label="Ouvrir le Grimoire Personnel">
                <BookOpen size={15}/>
              </button>
              <button onClick={() => onDuplicate(char)} className="p-1.5 text-stone-400 hover:text-emerald-600 hover:bg-white rounded transition-colors" title="Dupliquer le personnage" aria-label="Dupliquer le personnage">
                <Copy size={15}/>
              </button>
              <button onClick={() => onCreateGift(char)} className="p-1.5 text-stone-400 hover:text-purple-600 hover:bg-white rounded transition-colors" title="Offrir ce personnage" aria-label="Offrir ce personnage">
                <Gift size={15}/>
              </button>
              <button onClick={() => onDeleteClick(char.id)} className="p-1.5 text-stone-300 hover:text-red-500 hover:bg-red-50 rounded transition-colors" title="Détruire" aria-label={`Détruire le personnage ${char.nom}`}>
                <Trash2 size={15}/>
              </button>
            </>
          ) : (
            <>
              {/* 👁️ Bouton Grimoire pour Admin sur les persos des autres */}
              {isAdmin && (
                <button onClick={() => onOpenGrimoire(char.id)} className="p-1.5 text-amber-400 hover:text-amber-600 hover:bg-amber-50 rounded transition-colors" title="Voir le Grimoire Personnel (Admin)" aria-label="Voir le Grimoire Personnel (Admin)">
                  <BookOpen size={15}/>
                </button>
              )}
              {/* ✏️ Bouton Modifier (Super Admin uniquement) */}
              {isSA && (
                <button onClick={() => setShowSuperAdminModal(true)} className="p-1.5 text-purple-400 hover:text-purple-700 hover:bg-purple-50 rounded transition-colors" title="Modifier ce personnage (Super Admin)" aria-label="Modifier ce personnage (Super Admin)">
                  <Edit size={15}/>
                </button>
              )}
              <button onClick={() => onAppropriate(char)} className="p-1.5 text-stone-400 hover:text-emerald-600 hover:bg-white rounded transition-colors" title="Adopter cet Héritage (Cloner dans mon Grimoire)" aria-label="Adopter cet Héritage">
                <Copy size={15}/>
              </button>
            </>
          )}
        </div>

      </div>

      {/* 4. FOOTER */}
      {/* Modale Super Admin */}
      {showSuperAdminModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-stone-900/70 backdrop-blur-sm p-4" onClick={() => setShowSuperAdminModal(false)}>
          <div className="bg-[#fdfbf7] rounded-xl shadow-2xl border-2 border-purple-300 max-w-sm w-full" onClick={e => e.stopPropagation()}>
            <div className="bg-purple-800 text-white px-5 py-3 rounded-t-xl flex items-center gap-3">
              <AlertTriangle size={20} className="text-yellow-300 shrink-0" />
              <span className="font-serif font-bold text-base">Mode Super Admin</span>
            </div>
            <div className="px-5 py-4 space-y-3">
              <p className="text-sm text-stone-700 leading-relaxed">
                Tu t'apprêtes à modifier le personnage <strong className="text-amber-900">{char.nom}</strong>, appartenant à <strong className="text-blue-800">{char.ownerUsername || 'un autre joueur'}</strong>.
              </p>
              <p className="text-xs text-stone-500 italic border-l-2 border-purple-200 pl-3">
                Ce n'est pas ton personnage. Les modifications seront sauvegardées directement en base et visibles par le joueur.
              </p>
            </div>
            <div className="px-5 pb-4 flex gap-2 justify-end">
              <button
                onClick={() => setShowSuperAdminModal(false)}
                className="px-4 py-1.5 text-sm text-stone-600 hover:text-stone-900 border border-stone-200 rounded-lg hover:bg-stone-50 transition-colors"
              >
                Annuler
              </button>
              <button
                onClick={() => { setShowSuperAdminModal(false); onSelect(char); }}
                className="px-4 py-1.5 text-sm font-bold bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition-colors flex items-center gap-1.5"
              >
                <Edit size={13} /> Modifier malgré tout
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="bg-stone-50 px-4 py-2 border-t border-stone-100 flex justify-between items-center text-[10px] text-stone-400 mt-auto">
        <div className="flex items-center gap-1.5">
          {!isMyCharacter && (
            <>
              {/* ✨ Bouton Télégraphe discret à côté du pseudo */}
              <button
                onClick={handleTelegraphe}
                className="p-0.5 text-blue-300 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                title={`Missive privée à ${char.ownerUsername}`}
                aria-label={`Envoyer une missive privée à ${char.ownerUsername}`}
              >
                <MessageCircle size={10} />
              </button>
              <User size={10} className="text-blue-400"/>
              <span className="text-blue-900 font-bold">{char.ownerUsername || 'Inconnu'}</span>
            </>
          )}
          {isMyCharacter && <span className="italic">Mon personnage</span>}
        </div>
        <div className="flex items-center gap-1" title="Modifié le">
          <Calendar size={10}/>
          {new Date(char.updated_at || char.created_at).toLocaleDateString('fr-FR')}
        </div>
      </div>
    </div>
  );
});

export default CharacterCard;
