/*
    Mediante un input -> búsqueda contra un servicio
    cada vez que escribo -> pegada a la API (muchas requests)
    se hace la request cuando pasen X tiempo despues de que el usuario realizo la acción

    Termina un acción -> espera x tiempo -> dispara el callback

*/

import { type AnyFunction } from '..'

export function debounce<T extends AnyFunction> (fn: T, delay: number): (...args: Parameters<T>) => void {
  // setTimeOut
  let timeoutId: ReturnType<typeof setTimeout>
  return function debouncedFn (...args: Parameters<T>) {
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId) // vuelve a cero nuestro 'delay'
    }

    timeoutId = setTimeout(() => fn(...args), delay)
  }
}
