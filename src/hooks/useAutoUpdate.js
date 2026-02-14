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
    const applyUpdate = () => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.getRegistrations().then((registrations) => {
                for (let registration of registrations) {
                    registration.unregister(); // Supprime le vieux Service Worker
                }
                // Vide le cache local pour forcer le rechargement des nouveaux fichiers
                caches.keys().then((names) => {
                    for (let name of names) caches.delete(name);
                });
                // Recharge la page
                window.location.reload(true);
            });
        } else {
            window.location.reload(true);
        }
    };

    return { updateAvailable, remoteVersion, applyUpdate };
};
