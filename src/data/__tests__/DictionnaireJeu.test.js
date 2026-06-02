import { accorderTexte } from '../DictionnaireJeu';

describe('accorderTexte', () => {
  it('retourne la forme masculine (index 0) pour un homme', () => {
    expect(accorderTexte('Fier/Fière', 'Homme')).toBe('Fier');
    expect(accorderTexte('Sournois/Sournoise', 'Homme')).toBe('Sournois');
    expect(accorderTexte('Cruel/Cruelle', 'Homme')).toBe('Cruel');
    expect(accorderTexte('Flamboyant/Flamboyante', 'Homme')).toBe('Flamboyant');
  });

  it('retourne la forme féminine (index 1) pour une femme', () => {
    expect(accorderTexte('Fier/Fière', 'Femme')).toBe('Fière');
    expect(accorderTexte('Sournois/Sournoise', 'Femme')).toBe('Sournoise');
    expect(accorderTexte('Cruel/Cruelle', 'Femme')).toBe('Cruelle');
    expect(accorderTexte('Flamboyant/Flamboyante', 'Femme')).toBe('Flamboyante');
  });

  it('retourne le texte inchangé pour les traits invariants', () => {
    expect(accorderTexte('Solitaire', 'Homme')).toBe('Solitaire');
    expect(accorderTexte('Solitaire', 'Femme')).toBe('Solitaire');
    expect(accorderTexte('Magnétique', 'Homme')).toBe('Magnétique');
    expect(accorderTexte('Magnétique', 'Femme')).toBe('Magnétique');
    expect(accorderTexte('Implacable', 'Homme')).toBe('Implacable');
    expect(accorderTexte('Implacable', 'Femme')).toBe('Implacable');
  });

  it('gère les textes null ou vides', () => {
    expect(accorderTexte(null, 'Homme')).toBe('');
    expect(accorderTexte('', 'Femme')).toBe('');
    expect(accorderTexte(undefined, 'Homme')).toBe('');
  });

  it('fonctionne avec "Féminin" comme sexe', () => {
    expect(accorderTexte('Fier/Fière', 'Féminin')).toBe('Fière');
  });

  it('retourne par défaut la forme masculine si sexe inconnu', () => {
    expect(accorderTexte('Fier/Fière', 'Non-binaire')).toBe('Fier');
    expect(accorderTexte('Fier/Fière', null)).toBe('Fier');
    expect(accorderTexte('Fier/Fière', '')).toBe('Fier');
  });

  describe('traits des espèces corrigées', () => {
    const H = 'Homme';
    const F = 'Femme';

    it('Fleur de métal — formes masculines disponibles', () => {
      expect(accorderTexte('Froid/Froide', H)).toBe('Froid');
      expect(accorderTexte('Froid/Froide', F)).toBe('Froide');
      expect(accorderTexte('Insolent/Insolente', H)).toBe('Insolent');
      expect(accorderTexte('Insolent/Insolente', F)).toBe('Insolente');
      expect(accorderTexte('Retors/Retorse', H)).toBe('Retors');
      expect(accorderTexte('Retors/Retorse', F)).toBe('Retorse');
    });

    it('Gorgone — formes masculines disponibles', () => {
      expect(accorderTexte('Sournois/Sournoise', H)).toBe('Sournois');
      expect(accorderTexte('Sournois/Sournoise', F)).toBe('Sournoise');
      expect(accorderTexte('Studieux/Studieuse', H)).toBe('Studieux');
      expect(accorderTexte('Studieux/Studieuse', F)).toBe('Studieuse');
    });

    it('Succube/Incube — formes masculines disponibles', () => {
      expect(accorderTexte('Cruel/Cruelle', H)).toBe('Cruel');
      expect(accorderTexte('Cruel/Cruelle', F)).toBe('Cruelle');
      expect(accorderTexte('Désenchanté/Désenchantée', H)).toBe('Désenchanté');
      expect(accorderTexte('Désenchanté/Désenchantée', F)).toBe('Désenchantée');
      expect(accorderTexte('Langoureux/Langoureuse', H)).toBe('Langoureux');
      expect(accorderTexte('Langoureux/Langoureuse', F)).toBe('Langoureuse');
      expect(accorderTexte('Manipulateur/Manipulatrice', H)).toBe('Manipulateur');
      expect(accorderTexte('Manipulateur/Manipulatrice', F)).toBe('Manipulatrice');
    });
  });
});
