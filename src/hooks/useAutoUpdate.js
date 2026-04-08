import { useState, useEffect } from 'react';
import { APP_VERSION } from '../version'; // Votre fichier de version actuel

export const useAutoUpdate = (intervalMs = 60000) => { // Vérifie toutes les minutes par défaut
    const [updateAvailable, setUpdateAvailable] = useState(false);
    const [remoteVersion, setRemoteVersion] = useState(null);

  const checkForUpdate = async () => {
    // 1. Le disjoncteur de développement
    if (process.env.NODE_ENV === 'development') return;
    
    // ✨ 2. LE VACCIN : Si l'URL contient notre marqueur de mise à jour fraîche, on stoppe tout !
    if (window.location.search.includes('updated=true')) {
      console.log("Mise à jour fraîchement appliquée, pause du détecteur.");
      return;
    }

    try {
      const response = await fetch(`/version.json?t=${new Date().getTime()}`);
      if (!response.ok) return;
      const data = await response.json();

      if (data.version !== APP_VERSION) {
        console.log(`Mise à jour détectée : v${APP_VERSION} -> v${data.version}`);
        setRemoteVersion(data.version);
        setUpdateAvailable(true);
      }
    } catch (error) {
      console.error("Impossible de vérifier les mises à jour :", error);
    }
  };

  const applyUpdate = async () => {
    if ('serviceWorker' in navigator) {
      try {
        const registrations = await navigator.serviceWorker.getRegistrations();
        for (let registration of registrations) {
          await registration.unregister();
        }
      } catch (e) { console.error("Erreur unregister SW:", e); }
    }

    if ('caches' in window) {
      try {
        const cacheNames = await caches.keys();
        for (let name of cacheNames) { await caches.delete(name); }
      } catch (e) { console.error("Erreur suppression caches:", e); }
    }

    localStorage.clear();
    sessionStorage.clear();

    // ✨ 3. L'INJECTION DU VACCIN : On recharge la page en ajoutant un marqueur dans l'URL !
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set('updated', 'true');
    window.location.replace(currentUrl.toString());
  };

  return { updateAvailable, remoteVersion, applyUpdate };
};