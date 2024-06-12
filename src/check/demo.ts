import { isEmpty } from '.'

interface User {
  age: number
}

export const validateAge = (user: User): boolean => {
  if (isEmpty(user)) return false
  if (user.age > 18) return true
  return false
}
