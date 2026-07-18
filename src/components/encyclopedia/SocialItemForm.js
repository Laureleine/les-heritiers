// src/components/encyclopedia/SocialItemForm.js
import React from 'react';
import { Briefcase, Coins, Users, BookOpen, Crown, TrendingUp } from '../../config/icons';
import BonusBuilder from '../BonusBuilder';
import PersonalCardCostFields from './PersonalCardCostFields';

const CATEGORIES = [
    { id: 'metier', label: 'Métier / Occupation' },
    { id: 'statut', label: 'Statut / Titre' },
    { id: 'objet', label: 'Objet / Équipement' },
    { id: 'contact', label: 'Contact / Allié' },
    { id: 'langue', label: 'Langue' }
];

const PROFILS = ['Aventurier', 'Combattant', 'Érudit', 'Gentleman', 'Roublard', 'Savant'];

export default function SocialItemForm({
    proposal,
    setProposal,
    parsedTech,
    updateTech,
    competencesData,
    usefulSkills,
    allCompFutiles,
    isPersonal
}) {

    const toggleProfil = (p) => {
        const current = proposal.profils_autorises || [];
        setProposal({
            ...proposal,
            profils_autorises: current.includes(p) ? current.filter(x => x !== p) : [...current, p]
        });
    };

    return (
        <div className="space-y-6">
            {/* 1. IDENTITÉ */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                    <label className="block text-sm font-bold text-amber-900 mb-1">Nom de l'élément</label>
                    <input
                        type="text"
                        value={proposal.nom || ''}
                        onChange={(e) => setProposal({ ...proposal, nom: e.target.value })}
                        className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none font-bold text-stone-800 bg-white shadow-sm"
                        placeholder="Ex: Pistolet automatique, Réseau de contrebande..."
                    />
                </div>
                <div className="w-full md:w-1/3">
                    <label className="block text-sm font-bold text-amber-900 mb-1">Catégorie</label>
                    <select
                        value={proposal.categorie || 'objet'}
                        onChange={(e) => setProposal({ ...proposal, categorie: e.target.value })}
                        className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none font-bold text-stone-800 bg-white shadow-sm"
                    >
                        {CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
                    </select>
                </div>
            </div>

            {/* 2. L'ÉCONOMIE (PRIX) */}
            <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200 shadow-sm flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                    <label className="block text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2 flex items-center gap-2">
                        <Coins size={14} /> Coût Classique (PP)
                    </label>
                    <input
                        type="number" min="0" max="20"
                        value={proposal.cout !== undefined ? proposal.cout : ''}
                        onChange={(e) => setProposal({ ...proposal, cout: e.target.value })}
                        className="w-full p-2 border border-emerald-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none font-bold"
                        placeholder="Ex: 3"
                    />
                </div>
                <div className="flex-1">
                    <label className="block text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2 flex items-center gap-2">
                        <Coins size={14} /> Coût Moderne (PP)
                    </label>
                    <input
                        type="number" min="0" max="20"
                        value={proposal.cout_moderne !== undefined ? proposal.cout_moderne : ''}
                        onChange={(e) => setProposal({ ...proposal, cout_moderne: e.target.value })}
                        className="w-full p-2 border border-emerald-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none font-bold"
                        placeholder="Optionnel (si moins cher en moderne)"
                    />
                </div>
                <div className="flex-1 flex items-center justify-center pt-4">
                    <label className="flex items-center gap-2 cursor-pointer text-sm font-bold text-emerald-900">
                        <input
                            type="checkbox"
                            checked={proposal.is_choix_multiple || false}
                            onChange={(e) => setProposal({ ...proposal, is_choix_multiple: e.target.checked })}
                            className="w-5 h-5 text-emerald-600 rounded border-emerald-300 focus:ring-emerald-500"
                        />
                        Achat Multiple (Cumulable)
                    </label>
                </div>
            </div>

            {/* 2b. FORTUNE (Spécifique aux Métiers) */}
            {proposal.categorie === 'metier' && (
                <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 shadow-sm">
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Toggle Métier Principal / Secondaire */}
                        <div className="flex-1">
                            <label className="block text-xs font-bold text-amber-800 uppercase tracking-wider mb-2 flex items-center gap-2">
                                <Crown size={14} /> Type de Métier
                            </label>
                            <div className="flex gap-2">
                                <button
                                    type="button"
                                    onClick={() => setProposal({ ...proposal, is_secondaire: false })}
                                    className={`flex-1 px-3 py-2 rounded-lg text-sm font-bold transition-all border ${
                                        !proposal.is_secondaire
                                            ? 'bg-amber-700 text-white border-amber-700 shadow-md'
                                            : 'bg-white text-amber-600 border-amber-300 hover:bg-amber-100'
                                    }`}
                                >
                                    Principal
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setProposal({ ...proposal, is_secondaire: true })}
                                    className={`flex-1 px-3 py-2 rounded-lg text-sm font-bold transition-all border ${
                                        proposal.is_secondaire
                                            ? 'bg-amber-700 text-white border-amber-700 shadow-md'
                                            : 'bg-white text-amber-600 border-amber-300 hover:bg-amber-100'
                                    }`}
                                >
                                    Secondaire
                                </button>
                            </div>
                        </div>

                        {/* Fortune Score (Métier Principal) */}
                        {!proposal.is_secondaire && (
                            <div className="flex-1">
                                <label className="block text-xs font-bold text-amber-800 uppercase tracking-wider mb-2 flex items-center gap-2">
                                    <Coins size={14} /> Rang de Fortune (Base)
                                </label>
                                <input
                                    type="number" min="0" max="15"
                                    value={proposal.fortune_score !== undefined && proposal.fortune_score !== null ? proposal.fortune_score : ''}
                                    onChange={(e) => setProposal({ ...proposal, fortune_score: e.target.value === '' ? null : Number(e.target.value) })}
                                    className="w-full p-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none font-bold"
                                    placeholder="Ex: 5"
                                />
                                <p className="text-[10px] text-amber-600 mt-1 italic">Le rang de fortune de base accordé par ce métier (1-15).</p>
                            </div>
                        )}

                        {/* Fortune Bonus (Métier Secondaire) */}
                        {proposal.is_secondaire && (
                            <div className="flex-1">
                                <label className="block text-xs font-bold text-amber-800 uppercase tracking-wider mb-2 flex items-center gap-2">
                                    <TrendingUp size={14} /> Bonus Fortune
                                </label>
                                <input
                                    type="number" min="0" max="5"
                                    value={proposal.fortune_bonus !== undefined && proposal.fortune_bonus !== null ? proposal.fortune_bonus : ''}
                                    onChange={(e) => setProposal({ ...proposal, fortune_bonus: e.target.value === '' ? null : Number(e.target.value) })}
                                    className="w-full p-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none font-bold"
                                    placeholder="Ex: +2"
                                />
                                <p className="text-[10px] text-amber-600 mt-1 italic">Le bonus ajouté à la fortune existante (+1, +2, etc.).</p>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* 3. L'ACCESSIBILITÉ (PROFILS) */}
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200 shadow-sm">
                <label className="block text-xs font-bold text-blue-800 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Users size={14} /> Profils Autorisés
                </label>
                <div className="flex flex-wrap gap-2">
                    {PROFILS.map(p => {
                        const isSelected = (proposal.profils_autorises || []).includes(p);
                        return (
                            <button
                                key={p}
                                type="button"
                                onClick={() => toggleProfil(p)}
                                className={`px-3 py-1.5 rounded-lg text-sm font-bold transition-all border ${
                                    isSelected 
                                    ? 'bg-blue-600 text-white border-blue-700 shadow-md' 
                                    : 'bg-white text-blue-600 border-blue-300 hover:bg-blue-100'
                                }`}
                            >
                                {p}
                            </button>
                        );
                    })}
                </div>
                <p className="text-[10px] text-blue-600 mt-2 italic">Laissez vide si l'élément est universel et accessible à tous.</p>
            </div>

            {/* 4. DESCRIPTION NARRATIVE */}
            <div>
                <label className="block text-sm font-bold text-amber-900 mb-1 flex items-center gap-2">
                    <BookOpen size={16} /> Description officielle
                </label>
                <textarea
                    value={proposal.description || ''}
                    onChange={(e) => setProposal({ ...proposal, description: e.target.value })}
                    className="w-full h-24 p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none text-sm font-serif text-stone-700 shadow-sm transition-all custom-scrollbar resize-none"
                    placeholder="Rédigez la description de l'objet, du statut ou du métier..."
                />
            </div>

            {/* 5. CONSTRUCTEUR LEGO (BonusBuilder) */}
            <div className="mt-4">
                <label className="block text-sm font-bold text-amber-900 mb-2 flex items-center gap-2">
                    <Briefcase size={16} /> Règles et Prérequis (Effets Techniques)
                </label>
                <BonusBuilder
                    parsedTech={parsedTech}
                    updateTech={updateTech}
                    rawJson={proposal.techData ?? proposal.effets_techniques}
                    onJsonChange={(val) => setProposal({ ...proposal, techData: val, effets_techniques: val })}
                    competencesData={competencesData}
                    usefulSkills={usefulSkills}
                    futilesSkills={allCompFutiles ? allCompFutiles.map(c => c.nom || c.name) : []}
                />
            </div>

            {isPersonal && (
                <PersonalCardCostFields
                    costs={{ xp: proposal.cost_xp, fortune: proposal.cost_fortune, pp: proposal.cost_pp, hide_effects: proposal.hide_effects_until_accepted }}
                    onChange={c => setProposal({ ...proposal, cost_xp: c.xp, cost_fortune: c.fortune, cost_pp: c.pp, hide_effects_until_accepted: c.hide_effects })}
                />
            )}
        </div>
    );
}