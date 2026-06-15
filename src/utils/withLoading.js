/**
 * Wraps an async operation between setLoading(true) and setLoading(false).
 * On error, calls onError(err) and returns its result (undefined by default).
 */
export async function withLoading(setLoading, fn, onError) {
  setLoading(true);
  try {
    return await fn();
  } catch (err) {
    return onError ? onError(err) : undefined;
  } finally {
    setLoading(false);
  }
}
