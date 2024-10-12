/**
 * Accept two paramets which is a and b
 * @param a number
 * @param b number
 * @returns value as number
 */

export default function sum(a: number, b: number): Promise<number> {
  return Promise.resolve(a + b);
}
