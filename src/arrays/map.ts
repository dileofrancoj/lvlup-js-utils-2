// map :recibe un array de items, función de transformación

// export type GenericCallback<T, U> = (element: T) => U
export const map = <T, U>(array: T[], fn: (element: T) => U): U[] => {
  return array.map(fn)
}

/*
    const numbers = [1, 2, 3]
    const duplicatedNumbers = map(numbers, (x) => x * 2)
    const words = ['Hola', 'Mundo', 'Curle']
    const lengths = map<string, number>(words, (x) => x.length)

*/
