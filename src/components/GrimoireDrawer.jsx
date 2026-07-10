import React from 'react';
import { X } from '../config/icons';
import { useUserContext } from '../context/UserContext';
import GrimoirePersonnel from './cercle/GrimoirePersonnel';

export default function GrimoireDrawer({ charId, isAdmin, onClose }) {
  const { session } = useUserContext();
  if (!charId) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-stone-900/90 backdrop-blur-sm p-4 md:p-8">
      <div className="flex justify-end mb-4">
        <button
          onClick={onClose}
          className="text-stone-300 hover:text-white flex items-center gap-2 font-bold transition-colors bg-stone-800/50 px-4 py-2 rounded-xl"
        >
          <X size={20} /> Refermer le Grimoire
        </button>
      </div>
      <div className="flex-1 overflow-hidden max-w-5xl mx-auto w-full relative">
        <GrimoirePersonnel
          characterId={charId}
          cercleId={null}
          playerId={session?.user?.id}
          isAdmin={isAdmin}
        />
      </div>
    </div>
  );
}
