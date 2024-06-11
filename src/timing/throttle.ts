import { type AnyFunction } from '..'

/*
function greet(name: string, age: number): number {
  console.log(`Hello ${name} - ${age}`)
  return age
}

type greetTypes = Parameters<typeof greet>
type returnFnGreet = ReturnType<typeof greet>
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const throttle = <T extends AnyFunction>(fn: T, delay: number = 500) => {
  let timeOutId: ReturnType<typeof setTimeout> | undefined // NodeJS.Timeout
  return function throttledFn (...args: Parameters<T>) {
    if (timeOutId !== undefined) {
      return
    }
    timeOutId = setTimeout(() => {
      timeOutId = undefined
    }, delay)

    return fn(...args)
  }
}

/*
    const buttonClick = () => {
        ...
    }
    const onThrottledButonClick = throttle(() => {}), 800)
    <button onClick={onThrottledButonClick}>
    ...
    </button>
*/
