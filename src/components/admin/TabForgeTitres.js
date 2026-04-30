// src/components/admin/TabForgeTitres.js

import React, { useState, useEffect } from 'react';
import { supabase } from '../../config/supabase';
import { showInAppNotification } from '../../utils/SystemeServices';
import * as LucideIcons from 'lucide-react';

// ============================================================================
// --- 4. ONGLET : FORGE DES TITRES (Badges Dynamiques) ---
// ============================================================================

// ✨ FIX : Le composant filtre les accès !
function TabForgeTitres({ userProfile }) {
    const [badges, setBadges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [form, setForm] = useState({ id: '', label: '', icon_name: 'Award', color_classes: 'bg-stone-100 text-stone-800 border-stone-300', description: '' });

    // ✨ VÉRIFICATION DU RÔLE
    const isSuperAdmin = userProfile?.profile?.role === 'super_admin';

    const fetchBadges = async () => {
        setLoading(true);
        const { data, error } = await supabase.from('titres_honorifiques').select('*').order('label');
        if (!error && data) setBadges(data);
        setLoading(false);
    };

    useEffect(() => { fetchBadges(); }, []);

    const handleSave = async () => {
        if (!isSuperAdmin) return; // Sécurité de fer
        if (!form.id || !form.label) return showInAppNotification("L'ID et le Libellé sont obligatoires !", "error");

        const cleanId = form.id.toLowerCase().replace(/\s+/g, '_');

        try {
            const { error } = await supabase.from('titres_honorifiques').upsert([{ ...form, id: cleanId }]);
            if (error) throw error;
            showInAppNotification("Le Titre a été forgé et gravé dans le Nuage !", "success");
            fetchBadges();
            setForm({ id: '', label: '', icon_name: 'Award', color_classes: 'bg-stone-100 text-stone-800 border-stone-300', description: '' });
        } catch (err) {
            showInAppNotification("La forge a échoué : " + err.message, "error");
        }
    };

    const handleDelete = async (id) => {
        if (!isSuperAdmin) return; // Sécurité de fer
        if(!window.confirm("Détruire ce titre des archives ? Il sera retiré à tous les Héritiers qui le possèdent.")) return;

        const { error } = await supabase.from('titres_honorifiques').delete().eq('id', id);
        if (!error) {
            showInAppNotification("Titre détruit des archives !", "info");
            fetchBadges();
        }
    };

    const PreviewIcon = LucideIcons[form.icon_name] || LucideIcons.HelpCircle;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in">
            {/* L'Atelier (Formulaire) - ✨ RÉSERVÉ AU SUPER ADMIN */}
            {isSuperAdmin && (
                <div className="bg-white p-6 rounded-xl border border-amber-200 shadow-sm flex flex-col gap-4">
                    <h3 className="font-serif font-bold text-amber-900 flex items-center gap-2 border-b border-amber-100 pb-3">
                        <LucideIcons.Hammer size={18} /> L'Enclume du Façonneur
                    </h3>
                    <div>
                        <label className="text-[10px] font-bold text-stone-500 uppercase tracking-wider mb-1 block">Identifiant unique (BDD)</label>
                        <input type="text" value={form.id} onChange={e => setForm({...form, id: e.target.value})} className="w-full p-2 border border-stone-300 rounded-lg bg-stone-50 text-sm focus:ring-2 focus:ring-amber-500 outline-none" placeholder="ex: tueur_de_smog" />
                    </div>
                    <div>
                        <label className="text-[10px] font-bold text-stone-500 uppercase tracking-wider mb-1 block">Libellé affiché au joueur</label>
                        <input type="text" value={form.label} onChange={e => setForm({...form, label: e.target.value})} className="w-full p-2 border border-stone-300 rounded-lg bg-stone-50 text-sm focus:ring-2 focus:ring-amber-500 outline-none" placeholder="ex: Tueur de Smog" />
                    </div>
                    <div>
                        <label className="text-[10px] font-bold text-stone-500 uppercase tracking-wider mb-1 flex justify-between">
                            <span>Nom de l'icône (Anglais)</span>
                            <a href="https://lucide.dev/icons/" target="_blank" rel="noreferrer" className="text-amber-600 hover:underline">Catalogue Lucide ↗</a>
                        </label>
                        <input type="text" value={form.icon_name} onChange={e => setForm({...form, icon_name: e.target.value})} className="w-full p-2 border border-stone-300 rounded-lg bg-stone-50 text-sm focus:ring-2 focus:ring-amber-500 outline-none" placeholder="ex: Skull, Flame, Sword" />
                    </div>
                    <div>
                        <label className="text-[10px] font-bold text-stone-500 uppercase tracking-wider mb-1 block">Couleurs (Classes Tailwind CSS)</label>
                        <input type="text" value={form.color_classes} onChange={e => setForm({...form, color_classes: e.target.value})} className="w-full p-2 border border-stone-300 rounded-lg bg-stone-50 text-xs font-mono focus:ring-2 focus:ring-amber-500 outline-none" placeholder="ex: bg-red-100 text-red-800 border-red-200" />
                    </div>
                    <div>
                        <label className="text-[10px] font-bold text-stone-500 uppercase tracking-wider mb-1 block">Description narrative</label>
                        <textarea value={form.description} onChange={e => setForm({...form, description: e.target.value})} className="w-full p-2 border border-stone-300 rounded-lg bg-stone-50 text-sm focus:ring-2 focus:ring-amber-500 outline-none resize-none" rows="3" placeholder="Pour avoir vaincu la créature..." />
                    </div>
                    <div className="pt-4 border-t border-stone-100">
                        <label className="text-[10px] font-bold text-stone-500 uppercase tracking-wider mb-3 block">Aperçu en direct :</label>
                        <div className="p-4 bg-stone-100 rounded-lg border border-stone-200 flex justify-center items-center shadow-inner">
                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-sm font-bold shadow-sm transition-all ${form.color_classes}`}>
                                <PreviewIcon size={16} /> {form.label || 'Titre'}
                            </span>
                        </div>
                    </div>
                    <button onClick={handleSave} className="w-full mt-2 bg-amber-600 text-white font-bold py-3 rounded-lg shadow-md hover:bg-amber-700 transition-colors flex justify-center items-center gap-2">
                        <LucideIcons.CheckCircle size={18} /> Graver le Titre
                    </button>
                </div>
            )}

            {/* Le Registre (Liste) - ✨ VISIBLE PAR TOUS (S'étend si pas d'Admin) */}
            <div className={`${isSuperAdmin ? 'lg:col-span-2' : 'lg:col-span-3'} space-y-3 max-h-[700px] overflow-y-auto pr-2 custom-scrollbar`}>
                {loading ? (
                    <div className="animate-pulse p-8 text-center text-stone-400 font-serif border-2 border-dashed border-stone-200 rounded-xl bg-white/50">Ouverture de la salle des trophées...</div>
                ) : badges.length === 0 ? (
                    <div className="p-8 text-center text-stone-500 bg-white rounded-xl border border-stone-200 shadow-sm">La vitrine est vide pour le moment.</div>
                ) : badges.map(b => {
                    const BIcon = LucideIcons[b.icon_name] || LucideIcons.HelpCircle;
                    return (
                        <div key={b.id} className="bg-white p-4 rounded-xl border border-stone-200 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 shadow-sm hover:shadow-md transition-shadow group">
                            <div>
                                <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-xs font-bold ${b.color_classes}`}>
                                    <BIcon size={14} /> {b.label}
                                </span>
                                {/* L'ID de base de données ne s'affiche que pour l'Admin, pour ne pas casser l'immersion des joueurs */}
                                {isSuperAdmin && <div className="text-[10px] text-stone-400 mt-2 font-mono uppercase tracking-widest">ID: {b.id}</div>}
                                {b.description && <p className="text-sm text-stone-600 mt-1 italic leading-relaxed">"{b.description}"</p>}
                            </div>
                            
                            {/* ✨ BOUTONS D'ACTION - RÉSERVÉS AU SUPER ADMIN */}
                            {isSuperAdmin && (
                                <div className="flex gap-2 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button onClick={() => setForm(b)} className="p-2 text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-800 rounded-lg transition-colors shadow-sm" title="Modifier le design"><LucideIcons.Edit size={16}/></button>
                                    <button onClick={() => handleDelete(b.id)} className="p-2 text-red-600 bg-red-50 hover:bg-red-100 hover:text-red-800 rounded-lg transition-colors shadow-sm" title="Détruire le titre"><LucideIcons.Trash2 size={16}/></button>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default TabForgeTitres;