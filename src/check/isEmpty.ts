/*
  @param value: Object | Array | string | number | boolean
  @returns boolean
*/

export function isEmpty (value: unknown): boolean {
  const isCountable = value instanceof Object
  if (!isCountable) return true
  return Object.entries(value).length === 0
}
