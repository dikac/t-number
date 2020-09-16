/**
 * assert if {@param number} is integer
 * @param number
 *
 * @param error
 * error factory
 */
export default function Integer(number: number, error?: (value: number) => Error): asserts number is number;
