import { isString } from '..'

export const includes = (stringValue: string, searchableValue: string): boolean => {
  return isString(stringValue) && isString(searchableValue) ? stringValue.includes(searchableValue) : false
}
