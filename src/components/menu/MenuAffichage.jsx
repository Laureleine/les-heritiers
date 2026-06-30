import React, { useState } from 'react';
import { Dices, Copy, Printer, Save, List, Wine, UtensilsCrossed, Feather } from '../../config/icons';
import MenuService from './MenuService';

const MODES = [
  { id: 'liste', label: 'Liste', icon: List },
  { id: 'carte', label: 'Carte', icon: UtensilsCrossed },
  { id: 'vins', label: 'Vins', icon: Wine },
  { id: 'narratif', label: 'Narratif', icon: Feather },
];

function menuVersTexte(menu) {
  const lignes = [];
  if (menu.texteIntro) lignes.push(menu.texteIntro, '');
  for (const service of menu.services) {
    lignes.push(service.label.toUpperCase());
    for (const plat of service.plats) lignes.push(`  ${plat.nom}`);
    lignes.push('');
  }
  return lignes.join('\n').trim();
}

export default function MenuAffichage({ menu, loading, erreur, onRerollGlobal, onRerollService, onRerollPlat, resoudre, onSauvegarder }) {
  const [mode, setMode] = useState('liste');
  const [titreSauvegarde, setTitreSauvegarde] = useState('');
  const [showSaveInput, setShowSaveInput] = useState(false);
  const [copieMsg, setCopieMsg] = useState(null);

  if (loading) {
    return <p className="text-sm text-stone-400 font-serif text-center py-12">Composition du menu…</p>;
  }

  if (erreur) {
    return <p className="text-sm text-red-500 font-serif text-center py-12">{erreur}</p>;
  }

  if (!menu) {
    return (
      <p className="text-sm text-stone-400 font-serif italic text-center py-12">
        Choisissez vos critères et générez un menu.
      </p>
    );
  }

  const copier = async () => {
    await navigator.clipboard.writeText(menuVersTexte(menu));
    setCopieMsg('Copié !');
    setTimeout(() => setCopieMsg(null), 2000);
  };

  const confirmerSauvegarde = async () => {
    await onSauvegarder(titreSauvegarde.trim() || null);
    setShowSaveInput(false);
    setTitreSauvegarde('');
  };

  return (
    <div id="menu-imprimable" className="bg-white border border-stone-200 rounded-2xl p-4 shadow-sm">
      <div className="flex items-center justify-between gap-2 mb-3 print:hidden">
        <div className="flex gap-1">
          {MODES.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setMode(id)}
              className={`flex items-center gap-1 px-2.5 py-1.5 text-xs font-bold font-serif rounded-lg transition-colors ${
                mode === id ? 'bg-amber-100 text-amber-800' : 'text-stone-400 hover:text-stone-600'
              }`}
            >
              <Icon size={13} /> {label}
            </button>
          ))}
        </div>
        <button onClick={onRerollGlobal} title="Nouveau tirage complet" className="p-1.5 rounded-lg text-stone-400 hover:text-amber-700 hover:bg-amber-50 transition-colors">
          <Dices size={16} />
        </button>
      </div>

      {menu.texteIntro && (
        <p className={`text-sm text-stone-500 font-serif italic mb-3 ${mode === 'carte' ? 'text-center' : ''}`}>
          {menu.texteIntro}
        </p>
      )}

      <div>
        {menu.services.map((service) => (
          <MenuService
            key={service.id}
            service={service}
            mode={mode}
            resoudre={resoudre}
            onRerollService={() => onRerollService(service.id)}
            onRerollPlat={(platIndex) => onRerollPlat(service.id, platIndex)}
          />
        ))}
      </div>

      <div className="flex items-center gap-2 mt-4 pt-3 border-t border-stone-100 print:hidden">
        <button onClick={copier} className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-bold bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-lg transition-colors">
          <Copy size={13} /> {copieMsg || 'Copier'}
        </button>
        <button onClick={() => window.print()} className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-bold bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-lg transition-colors">
          <Printer size={13} /> Imprimer
        </button>
        {showSaveInput ? (
          <div className="flex items-center gap-1.5">
            <input
              autoFocus
              value={titreSauvegarde}
              onChange={(e) => setTitreSauvegarde(e.target.value)}
              placeholder="Titre du menu"
              className="text-xs border border-stone-200 rounded px-2 py-1.5 outline-none focus:border-amber-300"
            />
            <button onClick={confirmerSauvegarde} className="text-xs font-bold bg-amber-700 hover:bg-amber-800 text-white rounded px-2.5 py-1.5">
              Confirmer
            </button>
          </div>
        ) : (
          <button onClick={() => setShowSaveInput(true)} className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-bold bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-lg transition-colors">
            <Save size={13} /> Sauvegarder
          </button>
        )}
      </div>
    </div>
  );
}
