// src/components/recap/FicheParchemin.jsx

import React, { useMemo } from 'react';
import { CARAC_LIST, accorderTexte } from '../../data/DictionnaireJeu';
import { calculateCharacterStats } from '../../utils/bonusCalculator';
import { calculateFullCombatStats } from '../../utils/rulesEngine';
import { isCharacterScelle } from '../../utils/lockUtils';

export default function FicheParchemin({ character, gameData, detailed = false }) {
    
    // ✨ LE FIX EST ICI : On stabilise la référence en mémoire !
    const feeData = useMemo(() => {
        return gameData?.fairyData?.[character.typeFee] || {};
    }, [gameData?.fairyData, character.typeFee]);

    const genreActuel = character.genreHumain || character.sexe;

    // 🧠 LE CERVEAU POUR L'AFFICHAGE DÉTAILLÉ (Affiche les "+1" en vert sur le papier)
    const finalStats = useMemo(() => calculateCharacterStats(character, gameData), [character, gameData]);

    const isScelle = isCharacterScelle(character);
    const scellees  = character.data?.stats_scellees || {};

    // =========================================================================
    // 🔍 HELPERS DE DÉCOMPOSITION (Mode Détaillé)
    // =========================================================================

    /** Décompose une caractéristique en 4 couches : base fée / création / XP / bonus magiques */
    const getCaracBreakdown = (key) => {
        const feeMin = Number(feeData?.caracteristiques?.[key]?.min || 1);
        const currentVal = Number(character.caracteristiques?.[key] || feeMin);
        const bonusSources = finalStats.caracteristiques.bonus[key] || [];

        // Séparer bonus conditionnels (capacité) vs permanents (atouts/pouvoirs)
        const isCapaciteSrc = (src) => {
            if (!src) return false;
            const s = src.toLowerCase();
            if (s.includes('accru')) return true;
            return [character.capaciteChoisie, feeData?.capacites?.fixe1?.nom, feeData?.capacites?.fixe2?.nom]
                .filter(Boolean).some(c => s.includes(c.toLowerCase()));
        };
        const bonusPermanent = bonusSources.filter(b => !isCapaciteSrc(b.source)).reduce((acc, b) => acc + Number(b.value), 0);
        const bonusCapacite  = bonusSources.filter(b =>  isCapaciteSrc(b.source)).reduce((acc, b) => acc + Number(b.value), 0);
        const bonusPermaLabel = bonusSources.filter(b => !isCapaciteSrc(b.source)).map(b => `${b.value > 0 ? '+' : ''}${b.value} ${b.source}`).join(', ');
        const bonusCapaLabel  = bonusSources.filter(b =>  isCapaciteSrc(b.source)).map(b => `${b.value > 0 ? '+' : ''}${b.value} ${b.source}`).join(', ');

        let pointsCreation, pointsXP;
        if (isScelle && scellees.caracteristiques) {
            const scelleeVal = Number(scellees.caracteristiques[key] || feeMin);
            pointsCreation = Math.max(0, scelleeVal - feeMin);
            pointsXP       = Math.max(0, currentVal - scelleeVal);
        } else {
            pointsCreation = Math.max(0, currentVal - feeMin);
            pointsXP       = 0;
        }
        return { feeMin, pointsCreation, pointsXP, bonusPermanent, bonusPermaLabel, bonusCapacite, bonusCapaLabel };
    };

    /** Décompose une compétence utile en : profil / prédilection / rangs création / rangs XP / bonus magique */
    const getCompBreakdown = (comp) => {
        const currentRangs = character.competencesLibres?.rangs?.[comp] || 0;
        let rangsCreation, rangsXP;
        if (isScelle && scellees.competencesLibres) {
            rangsCreation = scellees.competencesLibres.rangs?.[comp] || 0;
            rangsXP       = Math.max(0, currentRangs - rangsCreation);
        } else {
            rangsCreation = currentRangs;
            rangsXP       = 0;
        }
        let bonusProfil = 0;
        Object.entries(profilsMap).forEach(([pName, comps]) => {
            if (comps.includes(comp)) {
                if (character.profils?.majeur?.nom === pName) bonusProfil = 2;
                else if (character.profils?.mineur?.nom === pName) bonusProfil = Math.max(bonusProfil, 1);
            }
        });
        const bonusPred    = isPredilection(comp) ? 2 : 0;
        const bonusSources = finalStats.competences.bonus[comp] || [];
        const bonusMagique = bonusSources.reduce((acc, b) => acc + b.value, 0);
        const bonusMagLabel = bonusSources.map(b => `+${b.value} ${b.source}`).join(', ');
        return { bonusProfil, bonusPred, rangsCreation, rangsXP, bonusMagique, bonusMagLabel };
    };

    /** Décompose une compétence futile en : prédilection / rangs création / rangs XP / bonus magique */
    const getFutileBreakdown = (comp) => {
        const baseInvesti  = character.competencesFutiles?.rangs?.[comp] || 0;
        const bonusPred    = (character.computedStats?.futilesPredFinales || []).includes(comp) ? 2 : 0;
        const bonusSources = finalStats.competences.bonus[comp] || [];
        const bonusMagique = bonusSources.reduce((acc, b) => acc + b.value, 0);
        const bonusMagLabel = bonusSources.map(b => `+${b.value} ${b.source}`).join(', ');
        let rangsCreation, rangsXP;
        if (isScelle && scellees.competencesFutiles) {
            // Snapshot présent → split exact création / XP
            rangsCreation = scellees.competencesFutiles.rangs?.[comp] || 0;
            rangsXP       = Math.max(0, baseInvesti - rangsCreation);
        } else if (isScelle) {
            // Snapshot absent (vieux perso) → on ne sait pas distinguer création / XP : tout en création
            // Le correctif retroactif en base (stats_scellees.competencesFutiles) résout cela proprement
            rangsCreation = baseInvesti;
            rangsXP       = 0;
        } else {
            // Perso non scellé → tout est création (pas d'XP possible)
            rangsCreation = baseInvesti;
            rangsXP       = 0;
        }
        return { bonusPred, rangsCreation, rangsXP, bonusMagique, bonusMagLabel };
    };

    /** Décompose la Fortune en : plancher race / achat création / achat XP */
    const getFortuneBreakdown = () => {
        const feeMin       = feeData?.fortune_min || 1;
        const currentFort  = character.fortune || 0;
        if (isScelle && scellees.fortune != null) {
            const pointsCreation = Math.max(0, scellees.fortune - feeMin);
            const pointsXP       = Math.max(0, currentFort - scellees.fortune);
            return { plancher: feeMin, pointsCreation, pointsXP };
        }
        return { plancher: feeMin, pointsCreation: Math.max(0, currentFort - feeMin), pointsXP: 0 };
    };

    const getCarac = (key) => {
        // 1. La base pure (Humaine) forcée en Nombre
        const base = Number(character.caracteristiques?.[key]
            || character.data?.stats_scellees?.caracteristiques?.[key]
            || feeData?.caracteristiques?.[key]?.min
            || 1);

        const sourcesList = finalStats.caracteristiques.bonus[key] || [];

        // 2. Le détecteur Magique (Tolérance absolue)
        const isCapacite = (sourceName) => {
            if (!sourceName) return false;
            
            const sourceNorm = sourceName.toLowerCase().trim();
            
            // Bouclier absolu : Si ça contient "accru", c'est forcément la Capacité Féérique !
            if (sourceNorm.includes('accru')) return true;

            // Tolérance sur les autres capacités (insensible à la casse et aux espaces)
            const caps = [
                character.capaciteChoisie,
                feeData?.capacites?.fixe1?.nom,
                feeData?.capacites?.fixe2?.nom
            ].filter(Boolean).map(c => c.toLowerCase().trim());

            return caps.some(cap => sourceNorm.includes(cap));
        };

        // On force la conversion en Number() pour éviter tout risque de concaténation de texte
        const bonusPermanent = sourcesList.filter(b => !isCapacite(b.source)).reduce((acc, b) => acc + Number(b.value), 0);
        const bonusCapacite = sourcesList.filter(b => isCapacite(b.source)).reduce((acc, b) => acc + Number(b.value), 0);

        // 3. Le rendu purifié
        return {
            total: base + bonusPermanent, // ✨ Le VRAI score total sous forme humaine
            base: base,
            bonus: bonusCapacite,         // ✨ Le bonus conditionnel féérique garanti !
            sources: sourcesList.filter(b => isCapacite(b.source))
        };
    };
	
    const profilsMap = {
        'Aventurier': ['Conduite', 'Mouvement', 'Ressort', 'Survie'],
        'Combattant': ['Art de la guerre', 'Autorité', 'Mêlée', 'Tir'],
        'Érudit': ['Culture', 'Fortitude', 'Occultisme', 'Rhétorique'],
        'Gentleman': ['Classe', 'Entregent', 'Séduction', 'Sensibilité'],
        'Roublard': ['Comédie', 'Larcin', 'Discrétion', 'Monde du crime'],
        'Savant': ['Habiletés', 'Médecine', 'Observation', 'Sciences']
    };

    const isPredilection = (comp) => {
        return feeData?.competencesPredilection?.some(p => p.nom === comp && !p.isOnlySpecialty) ||
               Object.values(character.competencesLibres?.choixPredilection || {}).includes(comp);
    };

    const getCompScore = (comp) => {
        const rangInvesti = character.competencesLibres?.rangs?.[comp] || 0;
        let bonusProfil = 0;

        Object.entries(profilsMap).forEach(([pName, comps]) => {
            if (comps.includes(comp)) {
                if (character.profils?.majeur?.nom === pName) bonusProfil = 2;
                if (character.profils?.mineur?.nom === pName) bonusProfil = 1;
            }
        });

        const bonusPred = isPredilection(comp) ? 2 : 0;
        const bonusMagique = finalStats.competences.bonus[comp]?.reduce((acc, b) => acc + b.value, 0) || 0;

        return {
            total: rangInvesti + bonusProfil + bonusPred + bonusMagique,
            bonusMagique,
            sources: finalStats.competences.bonus[comp] || []
        };
    };

    // ✨ CALCUL LIVE — même fonction que useCerbere (DRY, jamais de données périmées)
    const liveCombatStats = useMemo(() => calculateFullCombatStats(character, gameData), [character, gameData]);

    // allSpecialties → map<comp, {nom, origine}[]>
    // origine : 'Créa' | 'XP' | 'Inné' | 'Métier' | '✨ Source'
    const allSpecialties = useMemo(() => {
        const map = {};
        // Snapshot scellé pour distinguer Créa vs XP
        const specsBase = isScelle ? (scellees.competencesLibres?.choixSpecialiteUser || {}) : null;

        // 1. Spécialités choisies par l'utilisateur (Créa ou XP)
        Object.entries(character.competencesLibres?.choixSpecialiteUser || {}).forEach(([c, list]) => {
            if (!map[c]) map[c] = [];
            list.forEach(s => {
                const isXP = specsBase && !(specsBase[c] || []).includes(s);
                map[c].push({ nom: s, origine: isXP ? 'XP' : 'Créa' });
            });
        });

        // 2. Spécialité de Métier
        if (character.competencesLibres?.specialiteMetier?.nom) {
            const sm = character.competencesLibres.specialiteMetier;
            if (!map[sm.comp]) map[sm.comp] = [];
            map[sm.comp].push({ nom: sm.nom, origine: 'Métier' });
        }

        // 3. Spécialités innées (prédilections fée)
        if (feeData?.competencesPredilection) {
            feeData.competencesPredilection.forEach((p, idx) => {
                const nomSpec = p.specialite || (p.isSpecialiteChoix ? character.competencesLibres?.choixSpecialite?.[idx] : null);
                if (nomSpec) {
                    if (p.isSpecialiteChoix && nomSpec.includes(':')) {
                        const [pComp, pSpec] = nomSpec.split(':').map(s => s.trim());
                        if (!map[pComp]) map[pComp] = [];
                        map[pComp].push({ nom: pSpec, origine: 'Inné' });
                    } else {
                        if (!map[p.nom]) map[p.nom] = [];
                        map[p.nom].push({ nom: nomSpec, origine: 'Inné' });
                    }
                }
            });
        }

        // 4. Spécialités gratuites (atouts / pouvoirs)
        Object.entries(finalStats.specialites.gratuites || {}).forEach(([comp, list]) => {
            if (!map[comp]) map[comp] = [];
            list.forEach(s => {
                map[comp].push({ nom: s.specialite, origine: `✨ ${s.source}` });
            });
        });

        // Déduplication (nom + origine)
        Object.keys(map).forEach(comp => {
            const seen = new Set();
            map[comp] = map[comp].filter(s => {
                const key = `${s.nom}|${s.origine}`;
                if (seen.has(key)) return false;
                seen.add(key);
                return true;
            });
        });
        return map;
    }, [character.competencesLibres, feeData, finalStats, isScelle, scellees]);

    const bible = character.computedStats?.bible_autonome?.inventaire_lisible || {};
    const equipements = bible.armes_equipements || [];
    const contacts = bible.contacts || [];
    const langueMaternelle = character.profils?.langueMaternelle || '';
    const autresLangues = (character.profils?.langues || []).filter(l => l !== langueMaternelle);

    const futilesMerged = useMemo(() => {
        const merged = {};
        Object.entries(character.computedStats?.futilesTotal || {}).forEach(([n, v]) => {
            merged[n] = v;
        });
        Object.entries(finalStats.competences.bonus || {}).forEach(([comp, bonuses]) => {
            if (!Object.keys(gameData.competences || {}).includes(comp)) {
                const extra = bonuses.reduce((acc, b) => acc + b.value, 0);
                merged[comp] = (merged[comp] || 0) + extra;
            }
        });
        return merged;
    }, [character.computedStats, finalStats, gameData.competences]);

    return (
        <div className="recap-wrapper font-serif">
            <style dangerouslySetInnerHTML={{__html: `
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap');
                .recap-page {
                    width: 210mm; min-height: 297mm; background: #fdfbf7; padding: 12mm; margin: 0 auto 20px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.2); border: 1px solid #d4c5b0; box-sizing: border-box;
                    font-family: 'Georgia', serif; color: #2c241b; position: relative;
                }
                .recap-header { text-align: center; border-bottom: 3px double #b5a287; padding-bottom: 6px; margin-bottom: 10px; }
                .recap-char-name { font-family: 'Playfair Display', serif; font-size: 26px; font-weight: 900; color: #92400e; text-transform: uppercase; }
                .carac-main-title { background: #92400e; color: white; font-family: 'Playfair Display', serif; font-size: 13px; font-weight: bold; padding: 3px 8px; border-radius: 4px; display: inline-block; margin-bottom: 6px; text-transform: uppercase; }
                .carac-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; margin-bottom: 10px; }
                .carac-box { background: #fff; border: 1px solid #b5a287; border-radius: 4px; text-align: center; padding: 3px 6px; box-shadow: 2px 2px 0 rgba(139, 115, 85, 0.1); }
                .carac-label { font-size: 9px; font-weight: 600; text-transform: uppercase; color: #8b7355; border-bottom: 1px solid #eee; padding-bottom: 1px; margin-bottom: 1px; letter-spacing: 0.5px; }
                .carac-score { font-family: 'Playfair Display', serif; font-size: 18px; font-weight: 900; color: #4a3b2c; line-height: 1; margin-top: 1px; }
                .recap-box { border: 1px solid #b5a287; padding: 7px 9px; border-radius: 4px; background: rgba(255,255,255,0.5); margin-bottom: 8px; }
                .field-label { font-size: 9px; font-weight: bold; text-transform: uppercase; color: #8b7355; display: block; margin-bottom: 1px; }
                .field-value { font-size: 12px; font-weight: bold; color: #2c241b; border-bottom: 1px dotted #b5a287; padding-bottom: 1px; min-height: 15px; }
                .comp-line { display: flex; align-items: baseline; font-size: 12px; margin-bottom: 1px; }
                .comp-dots { flex: 1; border-bottom: 1px dotted #b5a287; margin: 0 6px; position: relative; top: -3px; }
                .combat-circle { width: 34px; height: 34px; border-radius: 50%; border: 2px solid #4a3b2c; display: flex; align-items: center; justify-content: center; font-family: 'Playfair Display', serif; font-size: 15px; font-weight: 900; background: #fff; margin: 0 auto; }
                .combat-label { text-align: center; font-size: 8px; font-weight: bold; text-transform: uppercase; margin-top: 3px; color: #4a3b2c; }
                .detail-row { font-size: 7px; color: #8b7355; margin-top: 2px; border-top: 1px dotted #d4c5b0; padding-top: 2px; line-height: 1.3; }
                .detail-row span { margin-right: 3px; white-space: nowrap; }
                .detail-tag { display: inline-block; background: #f5f0e8; border: 1px solid #d4c5b0; border-radius: 2px; padding: 0 2px; font-size: 7px; margin-right: 2px; }
                .detail-tag.xp  { background: #ecfdf5; border-color: #6ee7b7; color: #065f46; }
                .detail-tag.mag { background: #fdf4ff; border-color: #e9d5ff; color: #6b21a8; }
                .detail-tag.cre { background: #fff7ed; border-color: #fed7aa; color: #9a3412; }
                .detail-comp-row { font-size: 8px; color: #8b7355; margin-top: 1px; padding-left: 8px; }
                @media print {
                    body { background: white !important; }
                    @page { margin: 3mm; }
                    .recap-page {
                        box-shadow: none !important;
                        margin: 0 !important;
                        padding: 5mm !important;
                        border: none !important;
                        page-break-after: always;
                    }
                    .no-print { display: none !important; }
                    .recap-header { padding-bottom: 4px !important; margin-bottom: 6px !important; }
                    .recap-char-name { font-size: 22px !important; }
                    .carac-main-title { font-size: 11px !important; padding: 2px 7px !important; margin-bottom: 4px !important; margin-top: 4px !important; }
                    .carac-grid { gap: 4px !important; margin-bottom: 6px !important; }
                    .carac-box { padding: 2px 4px !important; }
                    .carac-score { font-size: 15px !important; }
                    .recap-box { padding: 5px 7px !important; margin-bottom: 5px !important; }
                    .comp-line { font-size: 11px !important; margin-bottom: 0px !important; }
                    .combat-circle { width: 30px !important; height: 30px !important; font-size: 13px !important; }
                    .combat-label { font-size: 7px !important; margin-top: 2px !important; }
                    .field { margin-bottom: 1px !important; }
                }
            `}} />

            {/* ======================= PAGE 1 : LE MASQUE (FORME HUMAINE) ======================= */}
            <div className="recap-page">
                <div className="recap-header" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px'}}>
                    {character.portrait_masked_url && (
                        <img
                            src={character.portrait_masked_url}
                            alt="Portrait masqué"
                            style={{width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #b5a287', flexShrink: 0}}
                        />
                    )}
                    <div className="recap-char-name">{character.nom || 'Inconnu'}</div>
                    {character.portrait_masked_url && <div style={{width: '64px', flexShrink: 0}} />}
                </div>
                <div className="recap-box">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="field">
                            <span className="field-label">Profil majeur</span>
                            <div className="field-value">{character.profils?.majeur?.nom || ''}</div>
                        </div>
                        <div className="field">
                            <span className="field-label">Profil mineur</span>
                            <div className="field-value">{character.profils?.mineur?.nom || ''}</div>
                        </div>
                        <div className="field">
                            <span className="field-label">Fortune</span>
                            <div className="field-value">Rang {character.fortune || 0}</div>
                            {detailed && (() => {
                                const bd = getFortuneBreakdown();
                                return (
                                    <div className="detail-row" style={{marginTop: '2px'}}>
                                        <span className="detail-tag" title="Plancher accordé par la race/le métier">Planch.:{bd.plancher}</span>
                                        {bd.pointsCreation > 0 && <span className="detail-tag cre" title="Rangs achetés à la création">Créa:+{bd.pointsCreation}</span>}
                                        {bd.pointsXP       > 0 && <span className="detail-tag xp"  title="Rangs achetés avec l'XP">XP:+{bd.pointsXP}</span>}
                                    </div>
                                );
                            })()}
                        </div>
                    </div>
                    <div className="field" style={{marginTop: '5px'}}>
                        <span className="field-label">Traits de caractère</span>
                        <div className="field-value">
                            {[...(character.traitsFeeriques || []), character.profils?.majeur?.trait, character.profils?.mineur?.trait]
                            .filter(Boolean).map(t => accorderTexte(t, genreActuel)).join(' • ')}
                        </div>
                    </div>
                </div>

                <div className="carac-main-title">Caractéristiques</div>
                <div className="carac-grid">
                    {['agilite', 'constitution', 'force', 'precision', 'esprit', 'perception', 'prestance', 'sangFroid'].map(key => {
                        const stat = getCarac(key);
                        const bd   = detailed ? getCaracBreakdown(key) : null;
                        return (
                            <div key={key} className="carac-box">
                                <div className="carac-label">{CARAC_LIST.find(c => c.key === key)?.label}</div>
                                <div className="carac-score flex items-center justify-center gap-1">
                                    {stat.total}
                                    {stat.bonus > 0 && <span style={{fontSize: '13px', color: '#16a34a'}} title={stat.sources.map(s => s.source).join(', ')}> (+{stat.bonus})</span>}
                                </div>
                                {detailed && bd && (
                                    <div className="detail-row">
                                        <span className="detail-tag" title="Base raciale">F:{bd.feeMin}</span>
                                        {bd.pointsCreation > 0 && <span className="detail-tag cre" title="Points achetés à la création">C:+{bd.pointsCreation}</span>}
                                        {bd.pointsXP       > 0 && <span className="detail-tag xp"  title="Points achetés avec l'XP">XP:+{bd.pointsXP}</span>}
                                        {bd.bonusPermanent > 0 && <span className="detail-tag mag" title={bd.bonusPermaLabel}>✨+{bd.bonusPermanent}</span>}
                                        {bd.bonusCapacite  > 0 && <span className="detail-tag mag" title={bd.bonusCapaLabel}>⚡+{bd.bonusCapacite}</span>}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className="carac-main-title">Compétences Utiles</div>
                <div className="recap-box grid grid-cols-2 gap-x-10">
                    {Object.entries(profilsMap).map(([profil, comps]) => (
                        <div key={profil} style={{marginBottom: '6px'}}>
                            <div style={{fontFamily: 'Playfair Display, serif', fontSize: '12px', fontWeight: 'bold', color: '#92400e', borderBottom: '1px solid #d4c5b0', marginBottom: '3px', paddingBottom: '1px'}}>{profil}</div>
                            {comps.map(comp => {
                                const stat  = getCompScore(comp);
                                const bd    = detailed ? getCompBreakdown(comp) : null;
                                const isPred = isPredilection(comp);
                                const specs = allSpecialties[comp] || [];
                                // Texte pour comp-line : Créa/XP → nom brut ; Inné/Métier/✨ → nom (origine)
                                const specsTexte = specs.map(s =>
                                    (s.origine === 'Créa' || s.origine === 'XP') ? s.nom : `${s.nom} (${s.origine})`
                                ).join(' • ');
                                return (
                                    <div key={comp} className="mb-0.5">
                                        <div className="comp-line">
                                            <span style={{color: '#4a3b2c'}}>
                                                {comp} {isPred && <span style={{fontSize: '10px', color: '#d97706', marginLeft: '4px'}}>★</span>}
                                                {specsTexte && <span style={{fontSize: '11px', color: '#8b7355', marginLeft: '6px', fontStyle: 'italic'}}>{specsTexte}</span>}
                                            </span>
                                            <div className="comp-dots"></div>
                                            <span style={{fontWeight: 'bold', color: '#4a3b2c'}}>
                                                {stat.total}
                                                {stat.bonusMagique > 0 && <span className="no-print" style={{fontSize: '11px', color: '#16a34a', marginLeft: '4px'}} title={stat.sources.map(s => s.source).join(', ')}> (+{stat.bonusMagique})</span>}
                                            </span>
                                        </div>
                                        {detailed && bd && (
                                            <div className="detail-comp-row">
                                                {bd.bonusProfil  > 0 && <span className="detail-tag" title="Bonus de Profil">Prof.+{bd.bonusProfil}</span>}
                                                {bd.bonusPred    > 0 && <span className="detail-tag" title="Compétence de Prédilection">Préd.+{bd.bonusPred}</span>}
                                                {bd.rangsCreation > 0 && <span className="detail-tag cre" title="Rangs investis à la création">Créa:{bd.rangsCreation}</span>}
                                                {bd.rangsXP       > 0 && <span className="detail-tag xp"  title="Rangs achetés avec l'XP">XP:+{bd.rangsXP}</span>}
                                                {bd.bonusMagique  > 0 && <span className="detail-tag mag" title={bd.bonusMagLabel}>✨+{bd.bonusMagique}</span>}
                                                {(bd.bonusProfil + bd.bonusPred + bd.rangsCreation + bd.rangsXP + bd.bonusMagique === 0) && <span style={{color: '#c7bfb5', fontStyle: 'italic'}}>non investie</span>}
                                                {/* Spécialités avec leurs origines */}
                                                {specs.length > 0 && (
                                                    <span style={{borderLeft: '1px solid #e5d8c8', marginLeft: '4px', paddingLeft: '4px'}}>
                                                        {specs.map((s, i) => {
                                                            const tagCls = s.origine === 'XP' ? 'xp' : s.origine === 'Créa' ? 'cre' : s.origine.startsWith('✨') ? 'mag' : '';
                                                            return (
                                                                <span key={i} className={`detail-tag ${tagCls}`} title={`Origine : ${s.origine}`}>
                                                                    {s.nom}{s.origine !== 'Créa' ? ` (${s.origine})` : ''}
                                                                </span>
                                                            );
                                                        })}
                                                    </span>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>

				{/* ✨ LE FIX 2 : Le bloc insécable (break-inside-avoid) */}
				<div style={{ pageBreakInside: 'avoid', breakInside: 'avoid' }} className="mt-2">
					<div className="carac-main-title m-0">Combat & Santé</div>
					<div className="grid grid-cols-5 gap-2 recap-box mt-1" style={{background: '#e6e1d8', borderColor: '#4a3b2c'}}>
						<div><div className="combat-circle">{liveCombatStats.esquiveMasquee}</div><div className="combat-label">Esq.</div></div>
						<div><div className="combat-circle">{liveCombatStats.parade}</div><div className="combat-label">Parade</div></div>
						<div><div className="combat-circle">{liveCombatStats.resPhys}</div><div className="combat-label">Rés. Phys.</div></div>
						<div><div className="combat-circle">{liveCombatStats.resPsych}</div><div className="combat-label">Rés. Psych.</div></div>
						<div><div className="combat-circle" style={{borderColor: '#92400e', color: '#92400e'}}>{liveCombatStats.pvMax}</div><div className="combat-label" style={{color: '#92400e'}}>PV Max</div></div>
						<div><div className="combat-circle" style={{color: '#b91c1c', borderColor: '#b91c1c'}}>{liveCombatStats.esquiveDemasquee}</div><div className="combat-label" style={{color: '#b91c1c'}}>Esq. Dém.</div></div>
						<div><div className="combat-circle" style={{color: '#b91c1c', borderColor: '#b91c1c'}}>{liveCombatStats.paradeDemasquee ?? liveCombatStats.parade}</div><div className="combat-label" style={{color: '#b91c1c'}}>Parade Dém.</div></div>
						<div><div className="combat-circle" style={{color: '#b91c1c', borderColor: '#b91c1c'}}>{liveCombatStats.resPhysDemasquee ?? liveCombatStats.resPhys}</div><div className="combat-label" style={{color: '#b91c1c'}}>Rés. Phys. Dém.</div></div>
						<div><div className="combat-circle" style={{color: '#b91c1c', borderColor: '#b91c1c'}}>{liveCombatStats.resPsychDemasquee ?? liveCombatStats.resPsych}</div><div className="combat-label" style={{color: '#b91c1c'}}>Rés. Psych. Dém.</div></div>
						<div><div className="combat-circle" style={{color: '#b91c1c', borderColor: '#b91c1c'}}>{liveCombatStats.pvMaxDemasquee ?? liveCombatStats.pvMax}</div><div className="combat-label" style={{color: '#b91c1c'}}>PV Max Dém.</div></div>
					</div>
				</div>
            </div>

			{/* ======================= PAGE 2 : LA FÉE (FORME DÉMASQUÉE) ======================= */}
			<div className="recap-page">
				<div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px'}}>
					<div className="carac-main-title" style={{background: '#1e3a8a', margin: 0}}>{character.typeFee || 'Magie & Héritage'}</div>
					{character.portrait_unmasked_url && (
						<img
							src={character.portrait_unmasked_url}
							alt="Portrait démasqué"
							style={{width: '72px', height: '72px', borderRadius: '6px', objectFit: 'cover', border: '2px solid #3b82f6', marginLeft: 'auto'}}
						/>
					)}
				</div>

				{/* ✨ LE FIX 2 : L'encart des caractéristiques magiques */}
				<div className="grid grid-cols-3 gap-2 mb-2">
					{[{key: 'feerie', label: 'Féérie'}, {key: 'masque', label: 'Masque'}].map(({key, label}) => {
						const bd = detailed ? getCaracBreakdown(key) : null;
						const val = character.caracteristiques?.[key] || (key === 'feerie' ? 3 : 4);
						return (
							<div key={key} className="recap-box flex flex-col items-center justify-center p-2">
								<span className="field-label" style={{marginBottom: '2px'}}>{label}</span>
								<span className="text-2xl font-serif font-black" style={{color: '#1e3a8a', lineHeight: '1'}}>{val}</span>
								{detailed && bd && (
									<div className="detail-row" style={{textAlign: 'center', marginTop: '4px'}}>
										<span className="detail-tag" title="Base raciale">F:{bd.feeMin}</span>
										{bd.pointsCreation > 0 && <span className="detail-tag cre">C:+{bd.pointsCreation}</span>}
										{bd.pointsXP       > 0 && <span className="detail-tag xp">XP:+{bd.pointsXP}</span>}
									</div>
								)}
							</div>
						);
					})}
					<div className="recap-box flex flex-col items-center justify-center p-2">
						<span className="field-label" style={{marginBottom: '2px'}}>Tricherie</span>
						<span className="text-2xl font-serif font-black" style={{color: '#1e3a8a', lineHeight: '1'}}>{character.caracteristiques?.tricherie || Math.floor(((character.caracteristiques?.feerie || 3) + (character.caracteristiques?.masque || 4)) / 2)}</span>
						{detailed && <div className="detail-row" style={{textAlign: 'center', marginTop: '4px', fontStyle: 'italic'}}>= (Fée + Masque) ÷ 2</div>}
					</div>
				</div>

				<div className="recap-box mb-2">
					<span className="field-label">Apparence Démasquée</span>
					<div className="field-value" style={{minHeight: '44px', border: 'none', fontStyle: 'italic'}}>{character.apparence || feeData?.description || ''}</div>
				</div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="recap-box" style={{background: '#ecfdf5', borderColor: '#6ee7b7'}}>
                        <span className="field-label" style={{color: '#065f46'}}>Avantages Innés</span>
                        <div className="text-[11px] space-y-1 mt-1">
                            {(feeData?.avantages || character.data?.avantages_innes || []).map((item, idx) => (
                                <div key={idx} className="flex gap-1.5"><span className="text-emerald-600">•</span><span>{item}</span></div>
                            ))}
                        </div>
                    </div>
                    <div className="recap-box" style={{background: '#fef2f2', borderColor: '#fca5a5'}}>
                        <span className="field-label" style={{color: '#9f1239'}}>Désavantages Innés</span>
                        <div className="text-[11px] space-y-1 mt-1">
                            {(feeData?.desavantages || character.data?.desavantages_innes || []).map((item, idx) => (
                                <div key={idx} className="flex gap-1.5"><span className="text-red-600">•</span><span>{item}</span></div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="recap-box">
                        <span className="field-label" style={{color: '#1e3a8a'}}>Capacités & Atouts</span>
                        <ul className="text-xs list-inside mt-2" style={{listStyle: 'none', padding: 0}}>
                            {character.capaciteChoisie && <li><b>{character.capaciteChoisie}</b></li>}
                            {(character.atouts || []).map((a, i) => <li key={i}>- {a}</li>)}
                        </ul>
                    </div>
                    <div className="recap-box">
                        <span className="field-label" style={{color: '#9f1239'}}>Pouvoirs Maîtrisés</span>
                        <div style={{ fontSize: '12px', marginTop: '5px' }}>
                            {character.pouvoirs?.map((p, i) => (
                                <div key={i} className="text-xs py-1 border-b border-dotted flex justify-between font-bold">
                                    <span>{p}</span><span style={{color: '#a8a29e'}}>□ □ □ □ □</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* ============================================================== */}
                {/* ✨ NOUVELLE DISPOSITION : BLOCS EN PLEINE LARGEUR               */}
                {/* ============================================================== */}

                {/* 1. Les Compétences Futiles */}
                <div className="carac-main-title mt-4" style={{background: '#166534'}}>Compétences Futiles</div>
                <div className="recap-box">
                    {!detailed ? (
                        <div className="text-sm font-serif leading-relaxed">
                            {Object.keys(futilesMerged).length > 0 ? (
                                Object.entries(futilesMerged).map(([k, v], i) => (
                                    <span key={k}>{k} ({v}){i < Object.keys(futilesMerged).length - 1 ? ' • ' : ''}</span>
                                ))
                            ) : (
                                <span className="italic text-gray-400">Aucune compétence futile acquise.</span>
                            )}
                        </div>
                    ) : (
                        <div>
                            {Object.keys(futilesMerged).length > 0 ? (
                                Object.entries(futilesMerged).map(([k, v]) => {
                                    const bd = getFutileBreakdown(k);
                                    return (
                                        <div key={k} className="mb-1">
                                            <div className="comp-line">
                                                <span style={{color: '#4a3b2c', fontSize: '12px'}}>{k}</span>
                                                <div className="comp-dots"></div>
                                                <span style={{fontWeight: 'bold', color: '#4a3b2c', fontSize: '12px'}}>{v}</span>
                                            </div>
                                            <div className="detail-comp-row">
                                                {bd.bonusPred     > 0 && <span className="detail-tag"     title="Compétence de Prédilection futile">Préd.+{bd.bonusPred}</span>}
                                                {bd.rangsCreation > 0 && <span className="detail-tag cre" title="Rangs investis à la création">Créa:{bd.rangsCreation}</span>}
                                                {bd.rangsXP       > 0 && <span className="detail-tag xp"  title="Rangs achetés avec l'XP">XP:+{bd.rangsXP}</span>}
                                                {bd.bonusMagique  > 0 && <span className="detail-tag mag" title={bd.bonusMagLabel}>✨+{bd.bonusMagique}</span>}
                                                {(bd.bonusPred + bd.rangsCreation + bd.rangsXP + bd.bonusMagique === 0) && <span style={{color: '#c7bfb5', fontStyle: 'italic'}}>prédilection seule</span>}
                                            </div>
                                        </div>
                                    );
                                })
                            ) : (
                                <span className="italic text-gray-400">Aucune compétence futile acquise.</span>
                            )}
                        </div>
                    )}
                </div>

                {/* 2. L'Équipement */}
                <div className="carac-main-title mt-4" style={{background: '#166534'}}>Équipement & Possessions</div>
                <div className="recap-box">
                    <div className="text-sm font-serif space-y-1">
                        {equipements.length > 0 ? equipements.map((e, idx) => (
                            <div key={idx}>- {e}</div>
                        )) : <div className="italic text-gray-400">Aucun équipement.</div>}
                    </div>
                </div>

                {/* 3. Les Contacts */}
                <div className="carac-main-title mt-4" style={{background: '#166534'}}>Contacts & Alliés</div>
                <div className="recap-box">
                    <div className="text-sm font-serif space-y-1">
                        {contacts.length > 0 ? contacts.map((c, idx) => (
                            <div key={idx}>- {c}</div>
                        )) : <div className="italic text-gray-400">Aucun contact.</div>}
                    </div>
                </div>

                {/* 4. Les Langues */}
                <div className="carac-main-title mt-4" style={{background: '#166534'}}>Érudition & Langues</div>
                <div className="recap-box">
                    <div className="text-sm font-serif">
                        {langueMaternelle ? (
                            <span className="text-amber-800 font-bold">{langueMaternelle} <span className="text-xs text-amber-600/70">(Maternelle)</span></span>
                        ) : null}
                        {autresLangues.length > 0 ? (
                            <span>{langueMaternelle ? ' • ' : ''}{autresLangues.join(' • ')}</span>
                        ) : null}
                    </div>
                </div>

                {/* 5. Familles, Titres et Statuts (S'ils existent, sinon on masque la boîte) */}
                {bible.titres && bible.titres.length > 0 && (
                    <>
                        {/* ✨ LE FIX : Un nom majestueux et fidèle au Livre de Base */}
                        <div className="carac-main-title mt-4" style={{background: '#166534'}}>Familles, Titres & Statuts</div>
                        <div className="recap-box">
                            <div className="text-sm font-serif space-y-1">
                                {bible.titres.map((t, idx) => (
                                    <div key={idx}>- {t}</div>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}