// src/components/QuickForgeModal.jsx

import React, { useState } from 'react';
import { X, Save, Sparkles, Star, Wand2 } from 'lucide-react';
import { supabase } from '../config/supabase';
import { showInAppNotification } from '../utils/SystemeServices';

export default function QuickForgeModal({ isOpen, onClose, type, onSuccess }) {
  const [nom, setNom] = useState('');
  const [description, setDescription] = useState('');
  const [typePouvoir, setTypePouvoir] = useState('masque');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  // Dictionnaire de configuration selon ce qu'on crée
  const config = {
    'fairy_powers': { titre: 'Nouveau Pouvoir', icon: <Sparkles size={20}/>, color: 'rose' },
    'fairy_assets': { titre: 'Nouvel Atout', icon: <Star size={20}/>, color: 'amber' },
    'fairy_capacites': { titre: 'Nouvelle Capacité', icon: <Wand2 size={20}/>, color: 'indigo' }
  }[type] || { titre: 'Nouvelle Entrée', icon: <Sparkles size={20}/>, color: 'stone' };

  const handleSave = async () => {
    if (!nom.trim()) {
      showInAppNotification("Le nom de votre création est requis.", "warning");
      return;
    }

    setLoading(true);
    try {
      // 1. On récupère l'identité du forgeron
      const { data: authData } = await supabase.auth.getUser();
      const userId = authData?.user?.id;

      if (!userId) throw new Error("Vous devez être connecté pour forger.");

      // 2. On génère un UUID fantôme pour lier cet élément avant même qu'il ne soit validé !
      const ghostId = window.crypto?.randomUUID 
        ? window.crypto.randomUUID() 
        : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            const r = Math.random() * 16 | 0;
            // eslint-disable-next-line no-mixed-operators
            return (c === 'x' ? r : ((r & 0x3) | 0x8)).toString(16);
          });

      // 3. On prépare la coquille pure de la donnée
      const payloadData = {
        id: ghostId,
        nom: nom.trim(),
        description: description.trim()
      };

      if (type === 'fairy_powers') {
        payloadData.type_pouvoir = typePouvoir;
      }

      // ✨ 4. LE CONTOURNEMENT RLS : On crée un ticket officiel pour le Conseil !
      const requestPayload = {
        user_id: userId,
        table_name: type,
        record_id: ghostId,
        record_name: nom.trim(),
        new_data: payloadData,
        justification: 'Création à la volée (Poupée Russe)',
        status: 'pending'
      };

      const { error } = await supabase
        .from('data_change_requests')
        .insert([requestPayload]);

      if (error) throw error;

      showInAppNotification(`${config.titre} proposé au Conseil avec succès !`, "success");
      
      // 5. On renvoie l'objet fantôme au parent pour cocher la case visuellement !
      onSuccess(payloadData, type);
      
      setNom('');
      setDescription('');
      onClose();
    } catch (error) {
      console.error("Erreur de forge rapide :", error);
      showInAppNotification("Échec de la forge : " + error.message, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    // ✨ FIX : z-[1] pour surpasser la modale parente !
    <div className="fixed inset-0 z-[1] flex items-center justify-center bg-stone-900/80 backdrop-blur-sm p-4 animate-fade-in" onClick={onClose}>
      <div className={`bg-white max-w-lg w-full rounded-2xl shadow-2xl border-4 border-${config.color}-200 flex flex-col overflow-hidden animate-fade-in-up`} onClick={e => e.stopPropagation()}>
        
        <div className={`bg-${config.color}-50 p-4 border-b border-${config.color}-100 flex justify-between items-center`}>
          <h3 className={`font-serif font-bold text-lg text-${config.color}-900 flex items-center gap-2`}>
            {config.icon} {config.titre} à la volée
          </h3>
          <button onClick={onClose} className="text-stone-400 hover:text-red-500 transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-bold text-stone-700 mb-1">Nom de la création</label>
            <input type="text" value={nom} onChange={e => setNom(e.target.value)} className="w-full p-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none" autoFocus placeholder="Ex: Souffle du Dragon..." />
          </div>

          {type === 'fairy_powers' && (
            <div>
              <label className="block text-sm font-bold text-stone-700 mb-1">Type de Pouvoir</label>
              <select value={typePouvoir} onChange={e => setTypePouvoir(e.target.value)} className="w-full p-2 border border-stone-300 rounded-lg outline-none bg-white">
                <option value="masque">🎭 Standard - Masqué</option>
                <option value="demasque">🔥 Standard - Démasqué</option>
                <option value="profond_masque">🔮 Profond - Masqué</option>
                <option value="profond_demasque">🌋 Profond - Démasqué</option>
                <option value="legendaire_masque">👑 Légendaire - Masqué</option>
                <option value="legendaire_demasque">☄️ Légendaire - Démasqué</option>
              </select>
            </div>
          )}

          <div>
            <label className="block text-sm font-bold text-stone-700 mb-1">Description courte (Optionnelle)</label>
            <textarea value={description} onChange={e => setDescription(e.target.value)} className="w-full p-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none resize-none custom-scrollbar" rows="3" placeholder="Vous pourrez ajouter les mécaniques complexes plus tard depuis l'Encyclopédie..."></textarea>
          </div>
        </div>

        <div className="bg-stone-50 p-4 border-t border-stone-200 flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 font-bold text-stone-600 hover:bg-stone-200 rounded-lg transition-colors">Annuler</button>
          <button onClick={handleSave} disabled={loading || !nom.trim()} className="px-4 py-2 font-bold text-white bg-amber-600 hover:bg-amber-700 rounded-lg flex items-center gap-2 transition-all shadow-md disabled:opacity-50">
            <Save size={16} /> {loading ? 'Forge en cours...' : 'Graver rapidement'}
          </button>
        </div>
      </div>
    </div>
  );
}
