import { describe, it, expect, vi, beforeEach } from 'vitest';
import { withLoading } from '../withLoading';

describe('withLoading', () => {
  let setLoading;

  beforeEach(() => {
    setLoading = vi.fn();
  });

  it('encadre la fn avec setLoading(true) puis setLoading(false)', async () => {
    const fn = vi.fn().mockResolvedValue('ok');
    await withLoading(setLoading, fn);
    expect(setLoading).toHaveBeenNthCalledWith(1, true);
    expect(setLoading).toHaveBeenNthCalledWith(2, false);
  });

  it('retourne la valeur de fn en cas de succès', async () => {
    const result = await withLoading(setLoading, async () => 42);
    expect(result).toBe(42);
  });

  it('appelle setLoading(false) même si fn lance une erreur', async () => {
    const fn = vi.fn().mockRejectedValue(new Error('boom'));
    await withLoading(setLoading, fn, () => {});
    expect(setLoading).toHaveBeenLastCalledWith(false);
  });

  it('appelle onError avec l\'erreur et retourne son résultat', async () => {
    const err = new Error('erreur');
    const onError = vi.fn().mockReturnValue(false);
    const result = await withLoading(setLoading, async () => { throw err; }, onError);
    expect(onError).toHaveBeenCalledWith(err);
    expect(result).toBe(false);
  });

  it('retourne undefined si pas de onError et que fn échoue', async () => {
    const result = await withLoading(setLoading, async () => { throw new Error('x'); });
    expect(result).toBeUndefined();
  });
});
