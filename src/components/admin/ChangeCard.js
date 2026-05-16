// src/components/admin/ChangeCard.js
import React from 'react';
import { Check, X, Plus, Minus, TestTubeDiagonal, ShieldAlert, Shield, User } from '../../config/icons';
import { isSuperAdmin } from '../../utils/authRoles';
import * as LucideIcons from 'lucide-react';

const ChangeCard = React.memo(({ change, context, actions }) => {
  const { originalRecords, referenceNames, myRole, dbBadges } = context;
  const { onReject, onApprove, onRestore } = actions;

  const pData = change.new_data || change.proposed_data || {};
  const standardFields = Object.keys(pData).filter(k => k !== '_relations' && k !== 'id');
  const hasStandardChanges = standardFields.length > 0;
  const hasRelations = pData._relations && Object.keys(pData._relations).length > 0;

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-serif font-bold text-xl text-gray-800">Cible : {change.record_name || 'Inconnue'}</h3>
          <p className="text-sm text-gray-500 uppercase tracking-wide mt-1 font-bold">
            Table : {change.table_name} • Action : {change.new_data?.id ? 'Création 🌟' : 'Modification 📝'}
          </p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
          change.status === 'pending' ? 'bg-amber-100 text-amber-800' :
          change.status === 'approved' ? 'bg-blue-100 text-blue-800' :
          change.status === 'archived' ? 'bg-green-100 text-green-800' :
          change.status === 'escalated' ? 'bg-red-900 text-red-100 animate-pulse shadow-md' :
          'bg-red-100 text-red-800'
        }`}>
          {change.status === 'pending' ? 'En attente' :
           change.status === 'approved' ? 'À Exécuter (SQL)' :
           change.status === 'archived' ? 'Archivé (Appliqué)' :
           change.status === 'escalated' ? '🚨 Escaladé (Erreur SQL)' :
           'Rejeté'}
        </span>
      </div>

      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <User size={16} className="text-gray-400" />
          <span className="text-sm font-bold text-gray-700">
            {change.profiles?.username || 'Héritier Anonyme'}
          </span>
          {change.profiles?.badges && change.profiles.badges.length > 0 && (
            <div className="flex flex-wrap gap-1 border-l border-gray-200 pl-2 ml-1">
              {change.profiles.badges.map(badgeId => {
                const badgeDef = dbBadges.find(b => b.id === badgeId);
                if (!badgeDef) return null;

                const DynamicIcon = badgeDef.icon_name && LucideIcons[badgeDef.icon_name] ? LucideIcons[badgeDef.icon_name] : null;

                return (
                  <span key={badgeId} className={`inline-flex items-center gap-1 text-[9px] px-1.5 py-0.5 rounded-full border ${badgeDef.color_classes} font-bold`} title={badgeDef.label}>
                    {DynamicIcon && <DynamicIcon size={10} />}
                    {badgeDef.label}
                  </span>
                );
              })}
            </div>
          )}
        </div>
        <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100 italic">
          "{change.justification}"
        </p>
      </div>

      {/* DELTA VISUEL */}
      {(hasStandardChanges || hasRelations) && (
        <div className="mt-4 bg-slate-50 p-3 rounded-lg border border-slate-200 shadow-inner space-y-3">
          <h4 className="text-xs font-bold text-slate-500 uppercase flex items-center gap-1">
            <TestTubeDiagonal size={14} /> Différences (Delta)
          </h4>

          {hasStandardChanges && (
            <div className="mb-4">
              <span className="text-xs font-bold text-slate-700">
                {pData.id ? 'Contenu de la création :' : 'Champs textuels modifiés :'}
              </span>
              <ul className="mt-2 space-y-3">
                {standardFields.map(key => {
                  const isCreation = !!pData.id;
                  const originalItem = originalRecords[change.record_id] || {};

                  const formatValue = (val) => {
                    if (val === undefined || val === null || val === '') return "— vide —";
                    if (typeof val === 'object') return JSON.stringify(val);
                    return String(val);
                  };

                  const displayNew = formatValue(pData[key]);
                  const displayOld = formatValue(originalItem[key]);

                  return (
                    <li key={key} className="text-sm">
                      {isCreation ? (
                        <div className="leading-relaxed">
                          <span className="font-mono bg-blue-50 border border-blue-200 px-2 py-0.5 rounded text-blue-800 font-bold mr-2">
                            {key}
                          </span>
                          <span className="font-medium text-green-900 whitespace-pre-wrap">"{displayNew}"</span>
                        </div>
                      ) : (
                        <>
                          <span className="font-mono bg-blue-50 border border-blue-200 px-2 py-0.5 rounded text-blue-800 font-bold mb-2 inline-block">
                            {key}
                          </span>
                          <div className="grid grid-cols-2 gap-3 mt-1">
                            <div className="bg-green-50/50 border border-green-200 text-green-900 p-2 rounded">
                              <span className="block text-[9px] uppercase font-bold text-green-600 mb-1 tracking-wider">Proposition (Nouveau)</span>
                              <span className="font-medium whitespace-pre-wrap leading-relaxed">"{displayNew}"</span>
                            </div>
                            <div className="bg-red-50/50 border border-red-200 text-red-900 p-2 rounded">
                              <span className="block text-[9px] uppercase font-bold text-red-600 mb-1 tracking-wider">Actuel (Ancien)</span>
                              <span className="italic opacity-80 whitespace-pre-wrap leading-relaxed">"{displayOld}"</span>
                            </div>
                          </div>
                        </>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {hasRelations && (
            <div className="mt-4 border-t border-dashed border-gray-200 pt-4">
              <span className="text-xs font-bold text-slate-700 flex items-center gap-1">
                <TestTubeDiagonal size={14} />
                Relations modifiées :
              </span>
              <ul className="mt-2 space-y-2">
                {Object.keys(pData._relations).map((relName) => {
                  const relData = pData._relations[relName];
                    if (Array.isArray(relData)) {
                      return (
                        <li key={relName} className="text-sm p-3 bg-gray-50 rounded-lg border border-gray-200 shadow-sm mb-3">
                          <span className="font-bold capitalize text-indigo-700 flex items-center gap-2 mb-2">
                             <TestTubeDiagonal size={16}/> {relName.replace(/([A-Z])/g, ' $1').trim()} (Remplacement)
                          </span>
                          <ul className="space-y-1.5 pl-2">
                            {relData.length === 0 ? (
                               <li className="text-xs italic text-red-500 font-bold bg-red-50 p-2 rounded border border-red-100">Purge complète (Liste vidée)</li>
                            ) : relData.map((item, idx) => {
                               let texte = "";
                               if (typeof item === 'string') texte = referenceNames[item] || item;
                               else if (item.nom && item.specialite) texte = `${item.nom} (Spécialité imposée : ${item.specialite})`;
                               else if (item.nom && item.isSpecialiteChoix) texte = `${item.nom} (Spécialité au choix parmi : ${(item.options || []).join(', ')})`;
                               else if (item.nom && item.isOnlySpecialty) texte = `Spécialité offerte : ${item.nom} ➔ ${item.specialite}`;
                               else if (item.nom) texte = item.nom;
                               else if (item.competence_name) texte = item.competence_name;
                               else if (item.is_choice || item.isChoix) texte = `Choix parmi : ${(item.choice_options || item.options || []).join(' OU ')}`;
                               else texte = JSON.stringify(item);

                               return (
                                 <li key={idx} className="text-xs font-medium text-gray-700 bg-white border border-gray-200 px-3 py-2 rounded-md shadow-sm flex items-start gap-2">
                                   <Check size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                                   <span>{texte}</span>
                                 </li>
                               );
                            })}
                          </ul>
                        </li>
                      );
                    }
                    // ✨ L'INCISION MAGIQUE : Le Traducteur Chirurgical (Atouts, Pouvoirs, Fées)
                    else if (typeof relData === 'object' && relData !== null && (relData.added || relData.removed)) {
                      return (
                        <li key={relName} className="text-sm p-3 bg-gray-50 rounded-lg border border-gray-200 shadow-sm mb-3">
                          <span className="font-bold capitalize text-indigo-700 flex items-center gap-2 mb-2">
                             <TestTubeDiagonal size={16}/> {relName.replace(/([A-Z])/g, ' $1').trim()} (Ajustement)
                          </span>
                          <div className="space-y-1.5 pl-2">
                            {relData.added?.length > 0 && (
                              <div className="flex items-start gap-2 text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-1.5 rounded border border-emerald-100 shadow-sm">
                                <Plus size={14} className="shrink-0 mt-0.5" />
                                <span>{relData.added.map(id => referenceNames[id] || "Nouvel élément (Création à la volée)").join(', ')}</span>
                              </div>
                            )}
                            {relData.removed?.length > 0 && (
                              <div className="flex items-start gap-2 text-xs font-medium text-red-700 bg-red-50 px-2 py-1.5 rounded border border-red-100 shadow-sm">
                                <Minus size={14} className="shrink-0 mt-0.5" />
                                <span>{relData.removed.map(id => referenceNames[id] || id).join(', ')}</span>
                              </div>
                            )}
                          </div>
                        </li>
                      );
                    }

                  const added = relData.added || [];
                  const removed = relData.removed || [];
                  if (added.length === 0 && removed.length === 0) return null;

                  return (
                    <li key={relName} className="text-sm p-2 bg-gray-50 rounded border border-gray-200 flex flex-col gap-1">
                      <span className="font-bold capitalize text-slate-800 mb-1">{relName} :</span>
                      {added.length > 0 && (
                        <div className="text-green-700 flex items-start gap-2 bg-green-50/70 p-1.5 rounded">
                          <Plus size={14} className="mt-0.5 flex-shrink-0" />
                          <span><strong className="text-[10px] uppercase">Ajout :</strong> {added.map(id => referenceNames[id] || id).join(', ')}</span>
                        </div>
                      )}
                      {removed.length > 0 && (
                        <div className="text-red-700 flex items-start gap-2 mt-1 bg-red-50/70 p-1.5 rounded">
                          <Minus size={14} className="mt-0.5 flex-shrink-0" />
                          <span className="line-through"><strong className="text-[10px] uppercase">Retrait :</strong> {removed.map(id => referenceNames[id] || id).join(', ')}</span>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* L'erreur SQL pour l'Admin avec affichage de l'incantation */}
      {change.status === 'escalated' && change.rejection_reason && (
        <div className="mt-3 p-3 bg-red-50 border-l-4 border-red-600 rounded text-sm text-red-900 shadow-inner">
          <strong className="flex items-center gap-2 mb-1"><ShieldAlert size={16}/> Rapport d'Anomalie :</strong>
          <p className="font-mono mb-2">{change.rejection_reason}</p>

          {change.generated_sql && (
            <div className="mt-3 pt-3 border-t border-red-200">
              <strong className="text-[10px] uppercase font-bold text-red-800 tracking-wider block mb-1">
                Incantation SQL fautive :
              </strong>
              <pre className="bg-red-900/10 p-2 rounded-lg overflow-x-auto text-[11px] font-mono text-red-950 whitespace-pre-wrap border border-red-900/20">
                {change.generated_sql}
              </pre>
            </div>
          )}
        </div>
      )}

      {/* BOUTONS D'ACTION */}
      <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-gray-100 pt-4">
        {change.status === 'pending' && (
          <>
            <button onClick={() => onReject(change)} className="px-4 py-2 bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 rounded-lg font-bold flex items-center gap-2 transition-colors">
              <X size={18} /> Rejeter
            </button>
            <button onClick={() => onApprove(change, false)} className="px-4 py-2 bg-green-600 text-white hover:bg-green-700 rounded-lg font-bold flex items-center gap-2 transition-colors shadow-sm ml-auto">
              <Check size={18} /> Valider
            </button>
            <button onClick={() => onApprove(change, true)} className="flex items-center gap-2 px-4 py-2 bg-amber-700 text-white hover:bg-amber-800 font-bold rounded-lg transition-colors shadow-[0_0_15px_rgba(180,83,9,0.4)] border border-amber-900 group">
              <Shield size={18} className="text-amber-300 group-hover:scale-110 transition-transform" />
              Approuver & Sceller
            </button>
          </>
        )}
        {change.status === 'approved' && (
          <button onClick={() => onRestore(change.id)} className="px-4 py-2 text-gray-500 hover:bg-gray-100 rounded-lg font-bold flex items-center gap-2 transition-colors ml-auto">
            Remettre en attente
          </button>
        )}
        {change.status === 'escalated' && isSuperAdmin(myRole) && (
          <>
            <button onClick={() => onReject(change)} className="px-4 py-2 bg-gray-100 text-red-600 hover:bg-red-50 rounded-lg font-bold flex items-center gap-2 transition-colors ml-auto">
              <X size={16} /> Rejeter définitivement
            </button>
            <button onClick={() => onRestore(change.id)} className="px-4 py-2 text-gray-500 hover:bg-gray-100 rounded-lg font-bold flex items-center gap-2 transition-colors">
              Remettre en attente
            </button>
          </>
        )}
        {(change.status === 'archived' || change.status === 'rejected') && (
          <button onClick={() => onRestore(change.id)} className="px-4 py-2 text-gray-500 hover:bg-gray-100 rounded-lg font-bold flex items-center gap-2 transition-colors ml-auto">
            Remettre en attente
          </button>
        )}
      </div>
    </div>
  );
});

export default ChangeCard;
