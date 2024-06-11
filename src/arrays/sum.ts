export function sum (data: number[]): number {
  return data.reduce((prev, current) => prev + current, 0)
}
