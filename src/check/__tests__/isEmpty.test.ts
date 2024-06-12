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
    { tested: {}, expected: true, label: {} },
    { tested: undefined, expected: true, label: undefined },
    { tested: true, expected: true, label: true },
    { tested: ['1', '2'], expected: false, label: [1, 2] },
    { tested: '', expected: true, label: '' },
    { tested: [], expected: true, label: [] },
    { tested: /d+/, expected: true, label: 'd+/' }
  ])('isEmpty($label) should be $expected', ({ tested, expected }) => {
    expect(isEmpty(tested)).toBe(expected)
  })
})
