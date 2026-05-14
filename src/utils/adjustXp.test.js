describe('adjustXp — bug `||` vs `??`', () => {
  const clamp = (v) => Math.max(-100, v);
  const xpDefault = 10;

  it('quand la valeur atteint 0, `||` la remonte à xpDefault-1 (BUG)', () => {
    const prev = 0;
    const result = clamp((prev || xpDefault || 0) + (-1));
    expect(result).toBe(9); // 0 || 10 = 10, 10 - 1 = 9 → bug
  });

  it('quand la valeur atteint 0, `??` descend correctement en négatif (FIX)', () => {
    const prev = 0;
    const result = clamp((prev ?? xpDefault ?? 0) + (-1));
    expect(result).toBe(-1); // 0 ?? 10 = 0, 0 - 1 = -1 → correct
  });

  it('`??` permet d\'atteindre -100 (floor)', () => {
    const prev = 0;
    let value = prev;
    for (let i = 0; i < 200; i++) {
      value = clamp((value ?? xpDefault ?? 0) + (-1));
    }
    expect(value).toBe(-100);
  });

  it('`||` ne permet jamais de descendre sous 0 (reproduit le bug)', () => {
    const prev = 0;
    let value = prev;
    for (let i = 0; i < 200; i++) {
      value = clamp((value || xpDefault || 0) + (-1));
    }
    expect(value).toBeGreaterThanOrEqual(0); // oscille entre 9 et 0, jamais négatif
  });
});
