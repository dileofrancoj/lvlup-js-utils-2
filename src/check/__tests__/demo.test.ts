import { validateAge } from '../demo'

describe('validate age', () => {
  it('should return true when user age is 19', () => {
    expect(validateAge({ age: 19 })).toBe(true)
  })
  it('should return false when user is empty', () => {
    // @ts-expect-error we need to test this usecase
    expect(validateAge({})).toBe(false)
  })
  it('should return false when user age is 18', () => {
    expect(validateAge({ age: 18 })).toBe(false)
  })
  it('should return false when param is undefined', () => {
    // @ts-expect-error we need to test this usecase
    expect(validateAge(undefined)).toBe(false)
  })
})
