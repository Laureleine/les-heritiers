// src/components/recap/FicheParchemin.jsx

import React, { useMemo } from 'react';
import { CARAC_LIST, accorderTexte } from '../../data/DictionnaireJeu';
import { calculateCharacterStats } from '../../utils/bonusCalculator';

export default function FicheParchemin({ character, gameData }) {
    
    // ✨ LE FIX EST ICI : On stabilise la référence en mémoire !
    const feeData = useMemo(() => {
        return gameData?.fairyData?.[character.typeFee] || {};
    }, [gameData?.fairyData, character.typeFee]);

    const genreActuel = character.genreHumain || character.sexe;

    // 🧠 LE CERVEAU POUR L'AFFICHAGE DÉTAILLÉ (Affiche les "+1" en vert sur le papier)
    const finalStats = useMemo(() => calculateCharacterStats(character, gameData), [character, gameData]);

    const getCarac = (key) => {
        const base = character.caracteristiques?.[key]
            || character.data?.stats_scellees?.caracteristiques?.[key]
            || feeData?.caracteristiques?.[key]?.min
            || 1;
        const bonus = finalStats.caracteristiques.bonus[key]?.reduce((acc, b) => acc + b.value, 0) || 0;
        return { total: base + bonus, base, bonus, sources: finalStats.caracteristiques.bonus[key] || [] };
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
        return feeData?.competencesPredilection?.some(p => p.nom === comp) ||
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

    // ✨ LA VÉRITÉ ABSOLUE DIRECTEMENT EXTRAITE DU CERVEAU (DRY)
    const liveCombatStats = character.computedStats?.combat || {
        esquiveMasquee: 0, esquiveDemasquee: 0, parade: 0, resPhys: 0, resPsych: 0, pvMax: 0
    };

    const allSpecialties = useMemo(() => {
        const map = {};
        Object.entries(character.competencesLibres?.choixSpecialiteUser || {}).forEach(([c, list]) => {
            if (!map[c]) map[c] = [];
            list.forEach(s => map[c].push(s));
        });
        if (character.competencesLibres?.specialiteMetier?.nom) {
            const sm = character.competencesLibres.specialiteMetier;
            if (!map[sm.comp]) map[sm.comp] = [];
            map[sm.comp].push(`${sm.nom} (Métier)`);
        }
        if (feeData?.competencesPredilection) {
            feeData.competencesPredilection.forEach((p, idx) => {
                const nomSpec = p.specialite || (p.isSpecialiteChoix ? character.competencesLibres?.choixSpecialite?.[idx] : null);
                if (nomSpec) {
                    if (p.isSpecialiteChoix && nomSpec.includes(':')) {
                        const [pComp, pSpec] = nomSpec.split(':').map(s => s.trim());
                        if (!map[pComp]) map[pComp] = [];
                        map[pComp].push(`${pSpec} (Inné)`);
                    } else {
                        if (!map[p.nom]) map[p.nom] = [];
                        map[p.nom].push(`${nomSpec} (Inné)`);
                    }
                }
            });
        }
        Object.entries(finalStats.specialites.gratuites || {}).forEach(([comp, list]) => {
            if (!map[comp]) map[comp] = [];
            list.forEach(s => {
                map[comp].push(`${s.specialite} (✨ ${s.source})`);
            });
        });

        Object.keys(map).forEach(comp => {
            map[comp] = [...new Set(map[comp])]; // Déduplication
        });
        return map;
    }, [character.competencesLibres, feeData, finalStats]);

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
                    width: 210mm; min-height: 297mm; background: #fdfbf7; padding: 15mm; margin: 0 auto 20px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.2); border: 1px solid #d4c5b0; box-sizing: border-box;
                    font-family: 'Georgia', serif; color: #2c241b; position: relative;
                }
                .recap-header { text-align: center; border-bottom: 3px double #b5a287; padding-bottom: 10px; margin-bottom: 15px; }
                .recap-char-name { font-family: 'Playfair Display', serif; font-size: 32px; font-weight: 900; color: #92400e; text-transform: uppercase; }
                .carac-main-title { background: #92400e; color: white; font-family: 'Playfair Display', serif; font-size: 16px; font-weight: bold; padding: 4px 10px; border-radius: 4px; display: inline-block; margin-bottom: 10px; text-transform: uppercase; }
                .carac-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-bottom: 20px; }
                .carac-box { background: #fff; border: 1px solid #b5a287; border-radius: 4px; text-align: center; padding: 4px 8px; box-shadow: 2px 2px 0 rgba(139, 115, 85, 0.1); }
                .carac-label { font-size: 10px; font-weight: 600; text-transform: uppercase; color: #8b7355; border-bottom: 1px solid #eee; padding-bottom: 2px; margin-bottom: 2px; letter-spacing: 0.5px; }
                .carac-score { font-family: 'Playfair Display', serif; font-size: 22px; font-weight: 900; color: #4a3b2c; line-height: 1; margin-top: 2px; }
                .recap-box { border: 1px solid #b5a287; padding: 10px; border-radius: 4px; background: rgba(255,255,255,0.5); margin-bottom: 15px; }
                .field-label { font-size: 10px; font-weight: bold; text-transform: uppercase; color: #8b7355; display: block; margin-bottom: 2px; }
                .field-value { font-size: 14px; font-weight: bold; color: #2c241b; border-bottom: 1px dotted #b5a287; padding-bottom: 2px; min-height: 18px; }
                .comp-line { display: flex; align-items: baseline; font-size: 13px; margin-bottom: 2px; }
                .comp-dots { flex: 1; border-bottom: 1px dotted #b5a287; margin: 0 8px; position: relative; top: -4px; }
                .combat-circle { width: 40px; height: 40px; border-radius: 50%; border: 2px solid #4a3b2c; display: flex; align-items: center; justify-content: center; font-family: 'Playfair Display', serif; font-size: 18px; font-weight: 900; background: #fff; margin: 0 auto; }
                .combat-label { text-align: center; font-size: 10px; font-weight: bold; text-transform: uppercase; margin-top: 4px; color: #4a3b2c; }
                @media print {
                    body { background: white !important; }
                    
                    /* ✨ LE FIX (Cure d'amaigrissement pour forcer le bloc sur la page 1) */
                    @page { margin: 4mm; } 
                    
                    .recap-page { 
                        box-shadow: none !important; 
                        margin: 0 !important; 
                        padding: 5mm !important; /* On réduit fortement les bordures internes de la page */
                        border: none !important; 
                        page-break-after: always; 
                    }
                    .no-print { display: none !important; }
                    
                    /* Compression invisible à l'œil nu, mais vitale pour l'imprimante */
                    .carac-main-title { margin-top: 8px !important; margin-bottom: 2px !important; font-size: 14px !important; }
                    .recap-box { padding: 10px 12px !important; }
                    .field { margin-bottom: 2px !important; }
                }
            `}} />

            {/* ======================= PAGE 1 : LE MASQUE (FORME HUMAINE) ======================= */}
            <div className="recap-page">
                <div className="recap-header"><div className="recap-char-name">{character.nom || 'Inconnu'}</div></div>
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
                        </div>
                    </div>
                    <div className="field" style={{marginTop: '10px'}}>
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
                        return (
                            <div key={key} className="carac-box">
                                <div className="carac-label">{CARAC_LIST.find(c => c.key === key)?.label}</div>
                                <div className="carac-score flex items-center justify-center gap-1">
                                    {stat.total}
                                    {/* Les bonus verts n'apparaitront pas sur le papier grâce à 'no-print' */}
                                    {stat.bonus > 0 && <span className="no-print" style={{fontSize: '13px', color: '#16a34a'}} title={stat.sources.map(s => s.source).join(', ')}> (+{stat.bonus})</span>}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="carac-main-title">Compétences Utiles</div>
                <div className="recap-box grid grid-cols-2 gap-x-10">
                    {Object.entries(profilsMap).map(([profil, comps]) => (
                        <div key={profil} style={{marginBottom: '10px'}}>
                            <div style={{fontFamily: 'Playfair Display, serif', fontSize: '14px', fontWeight: 'bold', color: '#92400e', borderBottom: '1px solid #d4c5b0', marginBottom: '6px', paddingBottom: '2px'}}>{profil}</div>
                            {comps.map(comp => {
                                const stat = getCompScore(comp);
                                const isPred = isPredilection(comp);
                                const specs = allSpecialties[comp] || [];
                                return (
                                    <div key={comp} className="mb-2">
                                        <div className="comp-line">
                                            <span style={{color: '#4a3b2c'}}>
                                                {comp} {isPred && <span style={{fontSize: '10px', color: '#d97706', marginLeft: '4px'}}>★</span>}
                                                {specs.length > 0 && <span style={{fontSize: '11px', color: '#8b7355', marginLeft: '6px', fontStyle: 'italic'}}>{specs.join(' • ')}</span>}
                                            </span>
                                            <div className="comp-dots"></div>
                                            <span style={{fontWeight: 'bold', color: '#4a3b2c'}}>
                                                {stat.total}
                                                {stat.bonusMagique > 0 && <span className="no-print" style={{fontSize: '11px', color: '#16a34a', marginLeft: '4px'}} title={stat.sources.map(s => s.source).join(', ')}> (+{stat.bonusMagique})</span>}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>

				{/* ✨ LE FIX 2 : Le bloc insécable (break-inside-avoid) */}
				<div style={{ pageBreakInside: 'avoid', breakInside: 'avoid' }} className="mt-2">
					<div className="carac-main-title m-0">Combat & Santé</div>
					<div className="grid grid-cols-6 gap-2 recap-box mt-1" style={{background: '#e6e1d8', borderColor: '#4a3b2c'}}>
						<div><div className="combat-circle">{liveCombatStats.esquiveMasquee}</div><div className="combat-label">Esq. Masq.</div></div>
						<div><div className="combat-circle" style={{color: '#b91c1c', borderColor: '#b91c1c'}}>{liveCombatStats.esquiveDemasquee}</div><div className="combat-label" style={{color: '#b91c1c'}}>Esq. Dém.</div></div>
						<div><div className="combat-circle">{liveCombatStats.parade}</div><div className="combat-label">Parade</div></div>
						<div><div className="combat-circle">{liveCombatStats.resPhys}</div><div className="combat-label">Rés. Phys.</div></div>
						<div><div className="combat-circle">{liveCombatStats.resPsych}</div><div className="combat-label">Rés. Psych.</div></div>
						<div><div className="combat-circle" style={{borderColor: '#92400e', color: '#92400e'}}>{liveCombatStats.pvMax}</div><div className="combat-label" style={{color: '#92400e'}}>PV Max</div></div>
					</div>
				</div>
            </div>

			{/* ======================= PAGE 2 : LA FÉE (FORME DÉMASQUÉE) ======================= */}
			<div className="recap-page">
				<div className="carac-main-title" style={{background: '#1e3a8a'}}>Magie & Héritage</div>
				
				{/* ✨ LE FIX 2 : L'encart des caractéristiques magiques */}
				<div className="grid grid-cols-3 gap-2 mb-2">
					<div className="recap-box flex flex-col items-center justify-center p-2">
						<span className="field-label" style={{marginBottom: '2px'}}>Féérie</span>
						<span className="text-2xl font-serif font-black" style={{color: '#1e3a8a', lineHeight: '1'}}>{character.caracteristiques?.feerie || 3}</span>
					</div>
					<div className="recap-box flex flex-col items-center justify-center p-2">
						<span className="field-label" style={{marginBottom: '2px'}}>Masque</span>
						<span className="text-2xl font-serif font-black" style={{color: '#1e3a8a', lineHeight: '1'}}>{character.caracteristiques?.masque || 4}</span>
					</div>
					<div className="recap-box flex flex-col items-center justify-center p-2">
						<span className="field-label" style={{marginBottom: '2px'}}>Tricherie</span>
						<span className="text-2xl font-serif font-black" style={{color: '#1e3a8a', lineHeight: '1'}}>{character.caracteristiques?.tricherie || Math.floor(((character.caracteristiques?.feerie || 3) + (character.caracteristiques?.masque || 4)) / 2)}</span>
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
                    <div className="text-sm font-serif leading-relaxed">
                        {Object.keys(futilesMerged).length > 0 ? (
                            Object.entries(futilesMerged).map(([k, v], i) => (
                                <span key={k}>{k} ({v}){i < Object.keys(futilesMerged).length - 1 ? ' • ' : ''}</span>
                            ))
                        ) : (
                            <span className="italic text-gray-400">Aucune compétence futile acquise.</span>
                        )}
                    </div>
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