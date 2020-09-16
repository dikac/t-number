/**
 * assert if {@param number} is greater than {@param minimum} or equal if {@param inclusive} is true
 *
 * @param number
 * @param minimum
 * @param inclusive
 * @param error
 * @constructor
 */
export default function Greater(number: number, minimum: number, inclusive: boolean, error?: (value: number, minimum: number, inclusive: boolean) => Error): asserts number is number;
