// src/components/CharacterCard.js
import React from 'react';
import { Globe, Sparkles, Edit, Eye, FileText, Download, EyeOff, BookOpen, Copy, Gift, Trash2, User, Calendar, MessageCircle } from '../config/icons';

// ─── Constantes admin (badges de réparation XP) ────────────────────────────
const REPAIR_BADGE = {
  pending:  'bg-orange-100 text-orange-700 border-orange-200',
  ok:       'bg-emerald-100 text-emerald-700 border-emerald-200',
  repaired: 'bg-blue-100 text-blue-700 border-blue-200',
  skipped:  'bg-amber-100 text-amber-700 border-amber-200',
  error:    'bg-red-100 text-red-700 border-red-200',
};
const REPAIR_LABEL = {
  pending:  '⏳ Journal à réparer',
  ok:       '✅ Journal complet',
  repaired: '✨ Journal réparé',
  skipped:  '⚠️ Sans plancher',
  error:    '❌ Erreur journal',
};

const CharacterCard = React.memo(({
  char,
  isMyCharacter,
  isAdmin,
  userProfile,
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
  // ✨ Nouvelles props admin (undefined pour les non-admins)
  repairStatus,    // 'pending'|'ok'|'repaired'|'skipped'|'error'
  onRepairRequest, // (charId) => void
}) => {

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
          <h3 className="text-xl font-bold text-amber-900 font-serif truncate w-full" title={char.nom}>
            {char.nom || 'Sans nom'}
            {char.isPublic && (
              <sup className="ml-1 text-blue-500 inline-block" title="Visible par tous"><Globe size={12} /></sup>
            )}
          </h3>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-sm text-amber-700 font-serif italic">
            {char.typeFee || 'Inconnu'} • {char.sexe || '?'}
          </div>
          {(char.statut === 'scelle' || char.statut === 'scellé') && (() => {
            const total     = char.xp_total || 0;
            const remaining = total - (char.xp_depense || 0);
            return (
              <div
                className="flex items-center gap-1 text-xs font-bold bg-stone-50 px-2 py-0.5 rounded-full border border-stone-200 shadow-sm"
                title={`${remaining} XP disponibles sur ${total} acquis`}
              >
                <Sparkles size={12} className="text-amber-500" />
                <span className="text-amber-700">{remaining}</span>
                <span className="text-stone-300">/</span>
                <span className="text-green-600">{total}</span>
                <span className="text-stone-400">XP</span>
              </div>
            );
          })()}
        </div>

        {/* ✨ Badge de réparation XP (admin seulement) — cliquable si réparation possible */}
        {repairStatus && (
          <div className="mt-1.5">
            {(repairStatus === 'pending' || repairStatus === 'error') && onRepairRequest ? (
              <button
                onClick={() => onRepairRequest(char.id)}
                className={`inline-flex items-center text-[10px] font-bold px-2 py-0.5 rounded-full border cursor-pointer hover:brightness-95 active:scale-95 transition-all ${REPAIR_BADGE[repairStatus]}`}
                title="Cliquer pour reconstruire le journal XP"
              >
                {REPAIR_LABEL[repairStatus]}
              </button>
            ) : (
              <span className={`inline-flex items-center text-[10px] font-bold px-2 py-0.5 rounded-full border ${REPAIR_BADGE[repairStatus] || ''}`}>
                {REPAIR_LABEL[repairStatus] || repairStatus}
              </span>
            )}
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
              <button onClick={() => onAppropriate(char)} className="p-1.5 text-stone-400 hover:text-emerald-600 hover:bg-white rounded transition-colors" title="Adopter cet Héritage (Cloner dans mon Grimoire)" aria-label="Adopter cet Héritage">
                <Copy size={15}/>
              </button>
            </>
          )}
        </div>

      </div>

      {/* 4. FOOTER */}
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
