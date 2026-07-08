import { useState, useCallback } from 'react';
import { supabase } from '../config/supabase';
import { genererMenu, rerollService, rerollPlat, resoudrePlat } from '../utils/menuGenerator';

export function useMenuGenerateur(platsApprouves) {
  const [menu, setMenu] = useState(null);
  const [structure, setStructure] = useState(null);
  const [parametres, setParametres] = useState(null);
  const [loading, setLoading] = useState(false);
  const [erreur, setErreur] = useState(null);

  const generer = useCallback(async ({ saison, typeRepas, niveauFinancier, trancheConvives, nbConvives, niveauCuisinier }) => {
    setLoading(true);
    setErreur(null);

    const { data: structuresPossibles } = await supabase
      .from('menu_structures')
      .select('id, type_repas, niveau_financier, tranche_convives, services, textes_intro')
      .eq('type_repas', typeRepas)
      .eq('niveau_financier', niveauFinancier)
      .eq('tranche_convives', trancheConvives);

    setLoading(false);

    if (!structuresPossibles || structuresPossibles.length === 0) {
      setErreur('Aucune structure de repas trouvée pour ces critères.');
      return;
    }

    const structureChoisie = structuresPossibles[Math.floor(Math.random() * structuresPossibles.length)];
    const params = { saison, typeRepas, niveauFinancier, nbConvives, niveauCuisinier, trancheConvives };

    setStructure(structureChoisie);
    setParametres(params);
    setMenu(genererMenu({
      structure: structureChoisie, plats: platsApprouves,
      niveauFinancier, saison, nbConvives, typeRepas,
    }));
  }, [platsApprouves]);

  const rerollGlobal = useCallback(() => {
    if (!structure || !parametres) return;
    setMenu(genererMenu({
      structure, plats: platsApprouves,
      niveauFinancier: parametres.niveauFinancier, saison: parametres.saison, nbConvives: parametres.nbConvives,
      typeRepas: parametres.typeRepas,
    }));
  }, [structure, parametres, platsApprouves]);

  const rerollUnService = useCallback((serviceId) => {
    if (!menu || !structure || !parametres) return;
    setMenu(rerollService(menu, platsApprouves, structure, serviceId, {
      niveauFinancier: parametres.niveauFinancier, saison: parametres.saison, nbConvives: parametres.nbConvives,
      typeRepas: parametres.typeRepas,
    }));
  }, [menu, structure, parametres, platsApprouves]);

  const rerollUnPlat = useCallback((serviceId, platIndex) => {
    if (!menu || !structure || !parametres) return;
    setMenu(rerollPlat(menu, platsApprouves, structure, serviceId, platIndex, {
      niveauFinancier: parametres.niveauFinancier, saison: parametres.saison, nbConvives: parametres.nbConvives,
      typeRepas: parametres.typeRepas,
    }));
  }, [menu, structure, parametres, platsApprouves]);

  const tenterLeSort = useCallback((difficulte) => {
    if (!parametres) return null;
    return resoudrePlat(difficulte, parametres.niveauCuisinier);
  }, [parametres]);

  return { menu, structure, parametres, loading, erreur, generer, rerollGlobal, rerollUnService, rerollUnPlat, tenterLeSort };
}
