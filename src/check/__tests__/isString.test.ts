import { describe, expect, it } from 'vitest'

import { isString } from '..'

describe('isString', () => {
  /*
    it('should return true if param is ""', () => {
      const result = isString('')
      expect(result).toBe(true)
    })
    it('should return false if param is null', () => {
      const result = isString(null)
      expect(result).toBe(false)
    })
    */
  /*

   */
  it('should return true if param is ""', () => {
    expect(isString('')).toBe(true)
  })
  it('should return false if param is null', () => {
    expect(isString(null)).toBe(false)
  })
  it('should return false if param is undefined', () => {
    expect(isString(undefined)).toBe(false)
  })
  it.each([
    // el primero es el input, el segundo es el output
    ['', true],
    [null, false],
    [undefined, false],
    [2, false]
  ])('isString(%o) should be %o', (arg, expected) => {
    expect(isString(arg)).toBe(expected)
  })
})
