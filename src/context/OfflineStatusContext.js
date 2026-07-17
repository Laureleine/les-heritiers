// src/context/OfflineStatusContext.js
import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { syncAll, getSyncErrors, retrySync as retrySyncFn } from '../utils/syncQueue';
import { localDb } from '../config/localDb';

const OfflineStatusContext = createContext({
  isOnline: true,
  isSyncing: false,
  syncErrors: [],
  retrySync: () => {},
  hasCachedData: false,
});

export function OfflineStatusProvider({ children }) {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncErrors, setSyncErrors] = useState([]);
  const [hasCachedData, setHasCachedData] = useState(false);

  // Vérifier si des données sont en cache (au moins un dataset game_data)
  useEffect(() => {
    localDb.game_data.count().then(n => setHasCachedData(n > 0)).catch(() => {});
  }, []);

  const handleOnline = useCallback(async () => {
    setIsOnline(true);
    setIsSyncing(true);
    try {
      await syncAll();
    } finally {
      const errors = await getSyncErrors();
      setSyncErrors(errors);
      setIsSyncing(false);
      setHasCachedData(true);
    }
  }, []);

  const handleOffline = useCallback(() => {
    setIsOnline(false);
  }, []);

  useEffect(() => {
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [handleOnline, handleOffline]);

  const retrySync = useCallback(async () => {
    setIsSyncing(true);
    try {
      await retrySyncFn();
      const errors = await getSyncErrors();
      setSyncErrors(errors);
    } finally {
      setIsSyncing(false);
    }
  }, []);

  return (
    <OfflineStatusContext.Provider value={{ isOnline, isSyncing, syncErrors, retrySync, hasCachedData }}>
      {children}
    </OfflineStatusContext.Provider>
  );
}

export function useOfflineStatus() {
  return useContext(OfflineStatusContext);
}
