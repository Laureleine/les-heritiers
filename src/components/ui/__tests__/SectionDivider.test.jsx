import { render } from '@testing-library/react';
import SectionDivider from '../SectionDivider';

describe('SectionDivider', () => {
  it('rend sans motif (défaut ouroboros)', () => {
    const { container } = render(<SectionDivider />);
    const img = container.querySelector('img');
    expect(img).not.toBeNull();
    expect(img.getAttribute('src')).toContain('ouroboros-simple');
  });

  it('rend avec un motif personnalisé', () => {
    const { container } = render(<SectionDivider motif="corbeau-dore" />);
    const img = container.querySelector('img');
    expect(img).not.toBeNull();
    expect(img.getAttribute('src')).toContain('corbeau-dore');
  });

  it('accepte une className supplémentaire', () => {
    const { container } = render(<SectionDivider className="my-8" />);
    expect(container.firstChild.classList.contains('my-8')).toBe(true);
  });
});
