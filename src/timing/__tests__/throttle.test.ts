import { throttle } from '../throttle'

describe('throttle', () => {
  it('should execute the original function 1 time', () => {
    const fn = vi.fn() // creando una función mock
    const throttledFn = throttle(fn, 200)
    throttledFn()
    throttledFn()
    throttledFn()
    expect(fn).toHaveBeenCalledOnce() // .toHaveBeenCalledTimes(2)
    vi.advanceTimersByTime(300)
    throttledFn()
    throttledFn()
    expect(fn).toHaveBeenCalledTimes(2) // .toHaveBeenCalledTimes(2)
  })
})
