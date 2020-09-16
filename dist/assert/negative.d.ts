/**
 * assert if {@param number} is negative
 *
 * @param number
 * @param error
 * error factory
 */
export default function Negative(number: number, error?: (value: number) => Error): asserts number is number;
