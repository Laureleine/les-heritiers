// src/utils/adminMigration.js
// ============================================================================
// 🏛️ MIGRATION ONE-SHOT — Peuplement du Journal des Âmes (historique_xp)
// ============================================================================
// À utiliser UNE SEULE FOIS pour migrer les anciens personnages scellés qui
// n'ont pas encore d'historique_xp dans leur colonne `data`.
//
// Ce script applique la même logique que LOAD_CHARACTER dans characterEngine.js,
// mais persiste le résultat en base Supabase immédiatement.
//
// Appeler depuis un panneau admin : migrateXpHistories(gameData)

import { supabase } from '../config/supabase';
import { reconstructHistory } from './historyReconstructor';
import { isCharacterScelle } from './lockUtils';

/**
 * Migration one-shot : reconstruit et persiste historique_xp pour tous les
 * personnages scellés qui n'ont pas encore de journal.
 *
 * @param {object} gameData - Le gameData chargé (fairyData, socialItems, atouts…)
 * @param {{ dryRun?: boolean, onProgress?: (msg: string) => void }} opts
 * @returns {Promise<{ migrated: number, skipped: number, errors: string[] }>}
 */
export async function migrateXpHistories(gameData, opts = {}) {
    const { dryRun = false, onProgress = console.log } = opts;
    const report = { migrated: 0, skipped: 0, errors: [] };

    onProgress('🔍 Récupération de tous les personnages...');

    // 1. Charger tous les personnages avec leur colonne data complète
    const { data: allChars, error: fetchError } = await supabase
        .from('characters')
        .select('id, nom, statut, xp_total, xp_depense, data, caracteristiques, atouts, profils, competences_libres, competences_futiles, vie_sociale, fortune, type_fee, anciennete')
        .order('updated_at', { ascending: false });

    if (fetchError) {
        report.errors.push(`Erreur de chargement : ${fetchError.message}`);
        return report;
    }

    onProgress(`📋 ${allChars.length} personnages trouvés. Analyse en cours...`);

    for (const raw of allChars) {
        // Reconstituer l'objet character dans le format attendu par reconstructHistory
        const character = {
            id: raw.id,
            nom: raw.nom,
            statut: raw.statut,
            xp_total: raw.xp_total || 0,
            xp_depense: raw.xp_depense || 0,
            typeFee: raw.type_fee,
            anciennete: raw.anciennete,
            caracteristiques: raw.caracteristiques || {},
            atouts: raw.atouts || [],
            profils: raw.profils || {},
            competencesLibres: raw.competences_libres || {},
            competencesFutiles: raw.competences_futiles || {},
            vieSociale: raw.vie_sociale || {},
            fortune: raw.fortune || 0,
            data: raw.data || {}
        };

        // Ne migrer que les personnages scellés sans historique
        if (!isCharacterScelle(character)) {
            report.skipped++;
            continue;
        }

        const existingHistory = character.data?.historique_xp;
        if (existingHistory && existingHistory.length > 0) {
            onProgress(`⏭️  ${character.nom} — déjà migré (${existingHistory.length} entrées), ignoré.`);
            report.skipped++;
            continue;
        }

        // Pas d'XP à migrer
        if (!character.xp_total && !character.xp_depense) {
            onProgress(`⏭️  ${character.nom} — aucun XP à migrer, ignoré.`);
            report.skipped++;
            continue;
        }

        onProgress(`⚗️  ${character.nom} — reconstruction archéologique...`);

        try {
            const historique_xp = [];

            // 1. Le Gain Originel
            if (character.xp_total > 0) {
                historique_xp.push({
                    type: 'GAIN',
                    code: 'XP_HISTORIQUE',
                    label: "Expérience acquise avant l'ouverture du Registre",
                    valeur: character.xp_total,
                    date_mouvement: new Date(Date.now() - 200000).toISOString()
                });
            }

            // 2. La Fouille Archéologique
            if (character.xp_depense > 0) {
                const reconstructedTxs = reconstructHistory(character, gameData);

                // 3. Solde de tout compte (garantit l'intégrité mathématique)
                const sumReconstructed = reconstructedTxs.reduce((acc, tx) => acc + tx.valeur, 0);
                if (sumReconstructed !== character.xp_depense) {
                    const difference = character.xp_depense - sumReconstructed;
                    reconstructedTxs.push({
                        type: difference > 0 ? 'DEPENSE' : 'REMBOURSEMENT',
                        code: 'XP_SOLDE',
                        label: difference > 0 ? 'Ajustements manuels antérieurs (Passif)' : 'Remboursements antérieurs (Passif)',
                        valeur: Math.abs(difference),
                        date_mouvement: new Date(Date.now() - 1000).toISOString()
                    });
                }

                // Injecter en antéchronologique (plus récent en tête)
                reconstructedTxs.reverse().forEach(tx => historique_xp.unshift(tx));
            }

            if (dryRun) {
                onProgress(`✅  [DRY RUN] ${character.nom} — ${historique_xp.length} entrées à créer (pas sauvegardé).`);
                report.migrated++;
                continue;
            }

            // 4. Persistance en base
            const newData = { ...(character.data || {}), historique_xp };
            const { error: saveError } = await supabase
                .from('characters')
                .update({ data: newData, updated_at: new Date().toISOString() })
                .eq('id', character.id);

            if (saveError) {
                report.errors.push(`${character.nom} : ${saveError.message}`);
                onProgress(`❌  ${character.nom} — erreur de sauvegarde : ${saveError.message}`);
            } else {
                onProgress(`✅  ${character.nom} — ${historique_xp.length} entrées migrées et sauvegardées.`);
                report.migrated++;
            }
        } catch (e) {
            report.errors.push(`${character.nom} : ${e.message}`);
            onProgress(`❌  ${character.nom} — exception : ${e.message}`);
        }
    }

    onProgress(`\n🏁 Migration terminée : ${report.migrated} migrés, ${report.skipped} ignorés, ${report.errors.length} erreurs.`);
    return report;
}
