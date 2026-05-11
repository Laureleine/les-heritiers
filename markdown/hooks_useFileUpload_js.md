// src/hooks/useFileUpload.js
// Hook DRY pour la gestion des uploads de fichiers — centralise la validation,
// la sanitisation des noms, le loading state et le try/catch/finally avec
// notifications, éparpillés dans StepPersonnalisation, usePersonnalisation
// et ForgeContext.

import { useState } from 'react';
import { showInAppNotification } from '../utils/SystemeServices';

// ============================================================================
// UTILITAIRE PUR — réutilisable hors d'un composant React (ex: ForgeContext)
// ============================================================================

/**
 * Nettoie un nom de fichier pour le stockage Supabase :
 * - supprime les accents (NFD → ASCII)
 * - remplace tout caractère non alphanumérique par "_"
 * - met en minuscules
 *
 * @param {string} fileName - Nom de fichier d'origine
 * @returns {string} Nom sécurisé
 */
export const sanitizeFileName = (fileName) =>
    fileName
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "")
        .replace(/[^a-zA-Z0-9.-]/g, "_")
        .toLowerCase();

// ============================================================================
// HOOK REACT — pour les composants avec UI de loading
// ============================================================================

/**
 * Gestion centralisée des uploads de fichiers dans les composants React.
 *
 * @param {object} [options]
 * @param {number} [options.maxSizeMB=5]      - Taille max en Mo
 * @param {string[]} [options.allowedTypes]   - Types MIME autorisés (ex: ['image/jpeg'])
 *
 * @returns {{
 *   uploading: object,              // { [key]: boolean } — état de chargement par clé
 *   handleUpload: function,         // fonction principale
 *   validateFile: function,         // validation seule (throws si invalide)
 *   sanitizeFileName: function      // réexposé pour commodité
 * }}
 *
 * @example
 * const { uploading, handleUpload } = useFileUpload({ maxSizeMB: 5 });
 *
 * // Dans un handler :
 * handleUpload(file, (f) => uploadPortrait(f, 'masked'), 'masked', {
 *   success: '✓ Portrait enregistré dans le grimoire !',
 *   error:   (err) => `Erreur portrait : ${err.message}`
 * });
 */
export function useFileUpload({ maxSizeMB = 5, allowedTypes = null } = {}) {
    const [uploading, setUploading] = useState({});

    /**
     * Valide un fichier (taille + type MIME). Lance une Error si invalide.
     * @param {File} file
     */
    const validateFile = (file) => {
        if (file.size > maxSizeMB * 1024 * 1024) {
            throw new Error(`Le fichier ne doit pas dépasser ${maxSizeMB} Mo.`);
        }
        if (allowedTypes && !allowedTypes.includes(file.type)) {
            throw new Error(`Type non autorisé. Acceptés : ${allowedTypes.join(', ')}.`);
        }
    };

    /**
     * Orchestre un upload : validation → loading on → uploadFn → notification → loading off.
     *
     * @param {File|null}  file       - Le fichier à uploader
     * @param {function}   uploadFn   - La fonction d'upload spécifique au contexte (reçoit file)
     * @param {string}     [key]      - Clé pour l'état uploading (ex: 'masked', 'unmasked', 'default')
     * @param {object}     [messages] - Messages personnalisés { success, error }
     * @returns {Promise<*>}           - Résultat de uploadFn, ou null si le fichier est absent/invalide
     */
    const handleUpload = async (file, uploadFn, key = 'default', messages = {}) => {
        if (!file) return null;

        const successMsg = messages.success ?? '✓ Fichier téléchargé avec succès !';
        const errorMsg   = messages.error   ?? ((err) => `Erreur lors du dépôt : ${err.message}`);

        try {
            validateFile(file);
            setUploading(prev => ({ ...prev, [key]: true }));
            const result = await uploadFn(file);
            showInAppNotification(successMsg, 'success');
            return result;
        } catch (err) {
            const msg = typeof errorMsg === 'function' ? errorMsg(err) : errorMsg;
            showInAppNotification(msg, 'error');
            return null;
        } finally {
            setUploading(prev => ({ ...prev, [key]: false }));
        }
    };

    return { uploading, handleUpload, validateFile, sanitizeFileName };
}
