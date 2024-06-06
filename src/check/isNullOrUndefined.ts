import type { NullOrUndefined } from '..'
export function isNullOrUndefined (value: unknown): value is NullOrUndefined {
  return value === null || value === undefined // esto retorna un valor de verdad
}
