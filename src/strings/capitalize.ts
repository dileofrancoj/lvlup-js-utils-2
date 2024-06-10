import { isString } from '..'

export const capitalize = (s: string): string => {
  if (!isString(s)) return s
  const splittedString = s.split(' ')
  return splittedString.map((str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  }).join(' ')
}
