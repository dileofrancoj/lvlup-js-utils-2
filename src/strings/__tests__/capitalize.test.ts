import { capitalize } from '../capitalize'

describe('capitalize', () => {
  it.each([
    { tested: null, expected: null, label: null },
    { tested: {}, expected: {}, label: {} }
  ])('capitalize($label) should be $expected', ({ tested, expected }) => {
    // @ts-expect-error we should test this case
    expect(capitalize(tested)).toStrictEqual(expected)
  })
  it('should return Level Up when string is level up', () => {
    expect(capitalize('level up')).toBe('Level Up')
  })
  it('should return "" when string is empty', () => {
    expect(capitalize('')).toBe('')
  })
})
