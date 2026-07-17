// src/components/OfflineBanner.jsx
import React, { useEffect, useState } from 'react';
import { useOfflineStatus } from '../context/OfflineStatusContext';
import { Wifi, WifiOff, RefreshCw, AlertTriangle } from '../config/icons';

export default function OfflineBanner() {
  const { isOnline, isSyncing, syncErrors, retrySync } = useOfflineStatus();
  const [showSyncDone, setShowSyncDone] = useState(false);
  const prevSyncing = React.useRef(false);

  useEffect(() => {
    if (prevSyncing.current && !isSyncing && isOnline && syncErrors.length === 0) {
      setShowSyncDone(true);
      const t = setTimeout(() => setShowSyncDone(false), 3000);
      return () => clearTimeout(t);
    }
    prevSyncing.current = isSyncing;
  }, [isSyncing, isOnline, syncErrors.length]);

  if (isOnline && !isSyncing && !showSyncDone && syncErrors.length === 0) return null;

  if (syncErrors.length > 0) {
    return (
      <div className="bg-red-600 text-white text-sm px-4 py-2 flex items-center justify-between gap-3">
        <span className="flex items-center gap-2">
          <AlertTriangle size={14} />
          {syncErrors.length} modification{syncErrors.length > 1 ? 's' : ''} n&apos;ont pas pu être envoyées
        </span>
        <button onClick={retrySync} className="underline font-bold hover:no-underline">
          Réessayer
        </button>
      </div>
    );
  }

  if (isSyncing) {
    return (
      <div className="bg-blue-600 text-white text-sm px-4 py-2 flex items-center gap-2">
        <RefreshCw size={14} className="animate-spin" />
        Retour en ligne — synchronisation en cours…
      </div>
    );
  }

  if (!isOnline) {
    return (
      <div className="bg-amber-600 text-white text-sm px-4 py-2 flex items-center gap-2">
        <WifiOff size={14} />
        Hors ligne — vos modifications sont sauvegardées localement
      </div>
    );
  }

  // showSyncDone
  return (
    <div className="bg-green-600 text-white text-sm px-4 py-2 flex items-center gap-2">
      <Wifi size={14} />
      Synchronisation terminée
    </div>
  );
}
