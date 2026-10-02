import { render } from '@testing-library/react';
import { TabBar } from '../TabBar';

const tabs = [
  { id: 'a', label: 'Onglet A' },
  { id: 'b', label: 'Onglet B' },
];

describe('TabBar', () => {
  it("applique la classe active lh-or sur l'onglet sélectionné", () => {
    const { container } = render(
      <TabBar tabs={tabs} activeTab="a" onTabChange={() => {}} />
    );
    const activeBtn = container.querySelector('[aria-selected="true"]');
    expect(activeBtn.className).toContain('text-lh-or');
    expect(activeBtn.className).toContain('border-lh-or');
  });

  it('applique la classe inactive sur les onglets non sélectionnés', () => {
    const { container } = render(
      <TabBar tabs={tabs} activeTab="a" onTabChange={() => {}} />
    );
    const inactiveBtn = container.querySelector('[aria-selected="false"]');
    expect(inactiveBtn.className).toContain('text-lh-gris-parchemin');
  });
});
