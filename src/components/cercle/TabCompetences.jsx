// src/components/cercle/TabCompetences.jsx
import React, { useEffect, useState } from 'react';
import { supabase } from '../../config/supabase';

export default function TabCompetences({ activeMembers }) {
  const [charData, setCharData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ids = activeMembers.map(m => m.characters?.id).filter(Boolean);
    if (ids.length === 0) { setLoading(false); return; }

    supabase
      .from('characters')
      .select('id, nom, competences_libres, competences_futiles, data')
      .in('id', ids)
      .then(({ data, error }) => {
        if (!error && data) setCharData(data);
        setLoading(false);
      });
  }, [activeMembers]);

  if (loading) return <div className="text-center py-10 text-stone-400 animate-pulse font-serif">Consultation des parchemins...</div>;

  const members = activeMembers
    .map(m => ({ ...m, charInfo: charData.find(c => c.id === m.characters?.id) }))
    .filter(m => m.charInfo);

  if (members.length === 0) return <div className="text-center py-10 text-stone-400 font-serif italic">Aucun personnage lié dans ce Cercle.</div>;

  // ── Compétences utiles ────────────────────────────────────────────────────
  const buildUtilesMatrix = () => {
    const allComps = new Set();
    members.forEach(m => {
      const total = m.charInfo.data?.computed_stats?.competencesTotal || {};
      Object.keys(total).forEach(k => { if (total[k] > 0) allComps.add(k); });
    });
    const sorted = [...allComps].sort((a, b) => a.localeCompare(b, 'fr'));

    return sorted.map(comp => ({
      comp,
      cells: members.map(m => {
        const cs = m.charInfo.data?.computed_stats || {};
        const rang = cs.competencesTotal?.[comp] || 0;
        // Spécialités acquises par l'utilisateur
        const userSpecs = m.charInfo.competences_libres?.choixSpecialiteUser?.[comp] || [];
        // Spécialités gratuites (profil, atout…)
        const gratSpecs = (cs.specialites?.gratuites?.[comp] || []).map(s => s.specialite || s);
        // Spécialité de métier si elle concerne cette compétence
        const metierSpec = m.charInfo.competences_libres?.specialiteMetier;
        const metierSpecs = (metierSpec?.comp === comp) ? [metierSpec.nom] : [];
        const specs = [...new Set([...userSpecs, ...gratSpecs, ...metierSpecs])];
        return { rang, specs };
      }),
    })).filter(row => row.cells.some(c => c.rang > 0));
  };

  // ── Compétences futiles ───────────────────────────────────────────────────
  const buildFutilesMatrix = () => {
    const allComps = new Set();
    members.forEach(m => {
      const total = m.charInfo.data?.computed_stats?.futilesTotal || {};
      Object.keys(total).forEach(k => { if (total[k] > 0) allComps.add(k); });
      // Inclure aussi les comp sans computed_stats (personnages non-scellés)
      Object.keys(m.charInfo.competences_futiles?.rangs || {}).forEach(k => allComps.add(k));
    });
    const sorted = [...allComps].sort((a, b) => a.localeCompare(b, 'fr'));

    return sorted.map(comp => ({
      comp,
      cells: members.map(m => {
        const cs = m.charInfo.data?.computed_stats || {};
        // futilesTotal si dispo, sinon rangs bruts
        const rang = cs.futilesTotal?.[comp] ?? m.charInfo.competences_futiles?.rangs?.[comp] ?? 0;
        const precisions = m.charInfo.competences_futiles?.precisions?.[comp];
        const specs = precisions ? (Array.isArray(precisions) ? precisions : [precisions]) : [];
        return { rang, specs };
      }),
    })).filter(row => row.cells.some(c => c.rang > 0));
  };

  const utilesMatrix = buildUtilesMatrix();
  const futilesMatrix = buildFutilesMatrix();

  const tabClass = 'text-left px-3 py-2 text-xs font-bold text-stone-500 uppercase tracking-wide border-b border-stone-200 bg-stone-50';

  const renderTable = (matrix, sectionLabel, accentClass) => {
    if (matrix.length === 0) return null;
    return (
      <div className="mb-8">
        <h4 className={`text-sm font-bold font-serif mb-2 ${accentClass}`}>{sectionLabel}</h4>
        <div className="overflow-x-auto rounded-xl border border-stone-200 shadow-sm">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className={`${tabClass} min-w-[160px] sticky left-0 z-10`}>Compétence</th>
                {members.map(m => (
                  <th key={m.user_id} className={`${tabClass} min-w-[120px] text-center`}>
                    <div className="truncate max-w-[120px]">{m.charInfo.nom}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {matrix.map(({ comp, cells }, i) => (
                <tr key={comp} className={i % 2 === 0 ? 'bg-white' : 'bg-stone-50/60'}>
                  <td className="px-3 py-2 font-serif font-bold text-stone-800 border-b border-stone-100 sticky left-0 bg-inherit z-10">{comp}</td>
                  {cells.map((cell, j) => (
                    <td key={j} className="px-3 py-2 border-b border-stone-100 text-center align-top">
                      {cell.rang > 0 ? (
                        <div>
                          <span className="inline-block font-black text-amber-700 text-base leading-none">{cell.rang}</span>
                          {cell.specs.length > 0 && (
                            <div className="mt-0.5 flex flex-wrap justify-center gap-0.5">
                              {cell.specs.map((s, si) => (
                                <span key={si} className="text-[10px] text-stone-500 bg-stone-100 px-1.5 py-0.5 rounded italic">{s}</span>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <span className="text-stone-200">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <div>
      {renderTable(utilesMatrix, 'Compétences utiles', 'text-amber-800')}
      {renderTable(futilesMatrix, 'Compétences futiles', 'text-violet-800')}
    </div>
  );
}
