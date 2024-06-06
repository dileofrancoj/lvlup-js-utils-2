type GenericObject = Record<string | number, unknown>

export function isObjectLike (value: unknown): value is GenericObject {
  return (
    !(value instanceof Date) &&
        !(value instanceof RegExp) &&
        !Array.isArray(value) &&
        typeof value === 'object' &&
        value !== null
  )
}
