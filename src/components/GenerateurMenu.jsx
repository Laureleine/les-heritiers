import React, { useState } from 'react';
import { ArrowLeft, UtensilsCrossed } from '../config/icons';
import { useMenuPlats } from '../hooks/useMenuPlats';
import { useMenuGenerateur } from '../hooks/useMenuGenerateur';
import { useMenuSauvegardes } from '../hooks/useMenuSauvegardes';
import MenuForm from './menu/MenuForm';
import MenuAffichage from './menu/MenuAffichage';
import ProposerPlat from './menu/ProposerPlat';

const PARAMS_INITIAUX = {
  saison: 'automne',
  typeRepas: 'diner',
  niveauFinancier: 'bourgeois',
  nbConvives: 6,
  niveauCuisinier: 4,
};

export default function GenerateurMenu({ onBack, userProfile, session }) {
  const [params, setParams] = useState(PARAMS_INITIAUX);
  const [saveMsg, setSaveMsg] = useState(null);

  const { platsApprouves, mesPropositions, submitting, proposer, ajouterDirectement } = useMenuPlats(session);
  const { menu, loading, erreur, generer, rerollGlobal, rerollUnService, rerollUnPlat, tenterLeSort } = useMenuGenerateur(platsApprouves);
  const { sauvegarder } = useMenuSauvegardes(session);

  const handleSauvegarder = async (titre) => {
    const { error } = await sauvegarder(titre, params, menu);
    setSaveMsg(error ? `Erreur : ${error.message}` : 'Menu sauvegardé !');
    setTimeout(() => setSaveMsg(null), 3000);
  };

  return (
    <div className="min-h-screen bg-[#f5f0e8] animate-fade-in">
      <header className="sticky top-0 z-40 bg-[#1a0f0a] border-b border-amber-900/30 shadow-lg print:hidden">
        <div className="max-w-5xl mx-auto px-4 py-2.5 flex items-center gap-2 min-w-0">
          <button onClick={onBack} className="flex-shrink-0 p-1.5 rounded-lg text-amber-200/70 hover:text-amber-100 hover:bg-white/10 transition-all">
            <ArrowLeft size={18} />
          </button>
          <UtensilsCrossed size={18} className="flex-shrink-0 text-amber-400" />
          <h1 className="font-serif font-bold text-amber-100 text-base truncate">Générateur de Menu</h1>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-6">
        {saveMsg && (
          <p className="text-sm font-serif text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2 mb-4 print:hidden">
            {saveMsg}
          </p>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-5 print:block">
          <div className="print:hidden">
            <MenuForm params={params} onChange={setParams} onGenerer={() => generer(params)} loading={loading} />
          </div>

          <MenuAffichage
            menu={menu}
            loading={loading}
            erreur={erreur}
            onRerollGlobal={rerollGlobal}
            onRerollService={rerollUnService}
            onRerollPlat={rerollUnPlat}
            resoudre={tenterLeSort}
            onSauvegarder={handleSauvegarder}
          />
        </div>

        <div className="print:hidden">
          <ProposerPlat
            session={session}
            userProfile={userProfile}
            mesPropositions={mesPropositions}
            proposer={proposer}
            ajouterDirectement={ajouterDirectement}
            submitting={submitting}
          />
        </div>
      </div>
    </div>
  );
}
