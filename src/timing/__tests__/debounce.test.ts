import { debounce } from '../debounce'

describe('debounce', () => {
  it('should debounce a generic function and execute 0 times', () => {
    /*
    ejecutar mi funcion 5 veces pero no dejar correr el timpo
    simular que un usuario está escribiendo en un input pero no deja pasar el tiempo
    de debounce
     */
    const originalFn = vi.fn()
    const debouncedFn = debounce(originalFn, 200)
    debouncedFn(1)
    debouncedFn(1)
    debouncedFn(1)
    debouncedFn(1)
    // para vitest no paso ni 1ms
    expect(originalFn).not.toHaveBeenCalled()
  })
  it('should debounce a generic function and execute 1 time', () => {
    const originalFn = vi.fn()
    const debouncedFn = debounce(originalFn, 200)
    debouncedFn(1)
    debouncedFn(1)
    vi.advanceTimersByTime(250)
    expect(originalFn).toHaveBeenCalledTimes(1)
  })
})
