import { useState, useEffect } from 'react';
import { APP_VERSION } from '../version'; // Votre fichier de version actuel

export const useAutoUpdate = (intervalMs = 60000) => { // Vérifie toutes les minutes par défaut
    const [updateAvailable, setUpdateAvailable] = useState(false);
    const [remoteVersion, setRemoteVersion] = useState(null);

    const checkForUpdate = async () => {
        try {
            // On ajoute un timestamp pour éviter que le navigateur ne mette en cache le fichier version.json lui-même
            const response = await fetch(`/version.json?t=${new Date().getTime()}`);
            if (!response.ok) return;

            const data = await response.json();
            
            // Comparaison : Si la version serveur est différente de la version locale
            if (data.version !== APP_VERSION) {
                console.log(`Mise à jour détectée : v${APP_VERSION} -> v${data.version}`);
                setRemoteVersion(data.version);
                setUpdateAvailable(true);
            }
        } catch (error) {
            console.error("Impossible de vérifier les mises à jour :", error);
        }
    };

    useEffect(() => {
        // Vérification immédiate au lancement
        checkForUpdate();

        // Puis vérification périodique
        const interval = setInterval(checkForUpdate, intervalMs);
        return () => clearInterval(interval);
    }, []);

  // Fonction pour appliquer la mise à jour
  const applyUpdate = async () => {
    // 1. Destruction de l'ancien Service Worker
    if ('serviceWorker' in navigator) {
      try {
        const registrations = await navigator.serviceWorker.getRegistrations();
        for (let registration of registrations) {
          await registration.unregister(); 
        }
      } catch (e) {
        console.error("Erreur unregister SW:", e);
      }
    }

    // 2. Destruction des vieux fichiers en cache
    if ('caches' in window) {
      try {
        const cacheNames = await caches.keys();
        for (let name of cacheNames) {
          await caches.delete(name);
        }
      } catch (e) {
        console.error("Erreur suppression caches:", e);
      }
    }

    // 3. ✨ LA SOLUTION ANTI-ZOMBIE ✨
    // On détruit la mémoire locale pour forcer Supabase à recréer un jeton propre
    // Cela effacera aussi l'ancien cache des personnages hors-ligne pour éviter les conflits
    localStorage.clear();
    sessionStorage.clear();

    // 4. On force le rechargement pur et dur de la page
    window.location.reload(true);
  };
  
  return { updateAvailable, remoteVersion, applyUpdate };
};
