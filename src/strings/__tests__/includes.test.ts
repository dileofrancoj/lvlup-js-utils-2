// hola, ho -> true
import { includes } from '../includes'
describe('includes', () => {
  it('includes("hola", "ho") should be true', () => {
    expect(includes('hola', 'ho')).toBe(true)
  })
  it('should return false if first argument is undefined', () => {
    // @ts-expect-error we want to test undefined case
    expect(includes(undefined, 'ho')).toBe(false)
  })
  it('should return false if first argument is number', () => {
    // @ts-expect-error we want to test undefined case
    expect(includes(111, 'ho')).toBe(false)
  })
})
