import { describe, it, expect, vi } from 'vitest';
import {
  getSocleValue, setSocleValue, lowerSocle, isSousSocle,
  buildSousSocleMessage, requestSousSocleConfirm, SOUS_SOCLE_EVENT,
} from '../sousSocle';

const socle = {
  caracteristiques: { agilite: 3, esprit: 4 },
  competencesLibres: { rangs: { Mêlée: 2 }, choixSpecialiteUser: { Mêlée: ['Épée'] } },
  competencesFutiles: { rangs: { Musique: 3 } },
  fortune: 4,
  atouts: ['X'],
};

describe('sousSocle', () => {
  it('lit le socle de chaque type de valeur', () => {
    expect(getSocleValue(socle, 'carac', 'agilite')).toBe(3);
    expect(getSocleValue(socle, 'comp', 'Mêlée')).toBe(2);
    expect(getSocleValue(socle, 'futile', 'Musique')).toBe(3);
    expect(getSocleValue(socle, 'fortune')).toBe(4);
    expect(getSocleValue(null, 'carac', 'agilite')).toBeUndefined();
  });

  it('remplace une valeur sans toucher au reste ni muter l’original', () => {
    const next = setSocleValue(socle, 'comp', 'Mêlée', 1);
    expect(next.competencesLibres.rangs.Mêlée).toBe(1);
    expect(next.competencesLibres.choixSpecialiteUser).toEqual({ Mêlée: ['Épée'] });
    expect(next.atouts).toEqual(['X']);
    expect(socle.competencesLibres.rangs.Mêlée).toBe(2);
  });

  it("abaisse le socle seulement s'il est au-dessus", () => {
    expect(lowerSocle(socle, 'carac', 'agilite', 2).caracteristiques.agilite).toBe(2);
    expect(lowerSocle(socle, 'carac', 'agilite', 5)).toBe(socle);
    expect(lowerSocle(socle, 'fortune', null, 1).fortune).toBe(1);
  });

  it('détecte le passage sous le socle', () => {
    expect(isSousSocle(socle, 'futile', 'Musique', 2)).toBe(true);
    expect(isSousSocle(socle, 'futile', 'Musique', 3)).toBe(false);
    expect(isSousSocle(socle, 'futile', 'Photographie', 0)).toBe(false);
  });

  it('message de ruine spécifique pour la Fortune', () => {
    const msg = buildSousSocleMessage({ ruine: true, plancherFortune: 3 });
    expect(msg).toMatch(/rang 3/);
    expect(msg).toMatch(/ruine véritable/);
    expect(buildSousSocleMessage({ nom: 'Agilité', refund: 20 })).toMatch(/récupérerez 20 XP/);
  });

  it('diffuse la demande de confirmation', () => {
    const listener = vi.fn();
    window.addEventListener(SOUS_SOCLE_EVENT, listener);
    requestSousSocleConfirm({ title: 't' });
    expect(listener.mock.calls[0][0].detail).toEqual({ title: 't' });
    window.removeEventListener(SOUS_SOCLE_EVENT, listener);
  });
});

import { applySousSocleCorrection } from '../sousSocle';

describe('applySousSocleCorrection', () => {
  it('met à jour la valeur, abaisse le socle et rend les XP en GAIN', () => {
    const dispatch = vi.fn();
    const character = { data: { foo: 1, stats_scellees: { caracteristiques: { agilite: 3 } } } };
    applySousSocleCorrection(dispatch, character, {
      kind: 'carac', key: 'agilite', newValue: 2,
      updates: { caracteristiques: { agilite: 2 } }, label: 'Correction : Agilité', refund: 20,
    }, {});
    expect(dispatch.mock.calls[0][0].payload).toEqual({
      caracteristiques: { agilite: 2 },
      data: { foo: 1, stats_scellees: { caracteristiques: { agilite: 2 } } },
    });
    expect(dispatch.mock.calls[1][0].transaction).toMatchObject({ type: 'GAIN', code: 'SOCLE_CORRECTION', valeur: 20, rang_final: 2 });
  });
});
