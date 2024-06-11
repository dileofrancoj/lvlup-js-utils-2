/* eslint-disable @typescript-eslint/no-explicit-any */
/*
    Recibe un argumento genérico o [] y devuelve un genérico o []
    La función devuelve el mismo array si el argumento es un array valido y de lo contrario devuelve un array vacío
*/

// ¿Cuál es el objetivo? -> Seguridad
export function arraylable (value: unknown[] | null): unknown[] {
  return Array.isArray(value) ? value : []
}
