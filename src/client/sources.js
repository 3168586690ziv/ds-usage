// A shared source store: getSnapshot, subscribe, and set with a function or
// value, stable across renders.
export function createSource(initial) {
  let value = initial
  const listeners = new Set()
  return {
    getSnapshot: () => value,
    subscribe: (listener) => { listeners.add(listener); return () => { listeners.delete(listener) } },
    set(next) {
      const resolved = typeof next === 'function' ? next(value) : next
      if (resolved === value) return
      value = resolved
      for (const listener of [...listeners]) listener()
    },
  }
}
