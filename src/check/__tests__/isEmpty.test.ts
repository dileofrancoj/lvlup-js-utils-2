import { isEmpty } from '..'

/*
    Pruebas de isEmpty:
        si recibe null -> true
        si recibe undefined -> true
        si recibe {} -> true
        si recibe [1,3] -> false
        si recibe {name: 'gustavo'} -> false
*/
describe('isEmpty', () => {
  it.each([
    { tested: null, expected: true, label: null },
    { tested: {}, expected: true, label: {} }
  ])('isEmpty($label) should be $expected', ({ tested, expected }) => {
    expect(isEmpty(tested)).toBe(expected)
  })

  it('should return true when param is undefined', () => {
    expect(isEmpty(undefined)).toBe(true)
  })
})
