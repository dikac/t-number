/**
 * assert if {@param number} is infinite
 *
 * @param number
 * @param error
 * error factory
 */
export default function Infinite(number: number, error?: (value: number) => Error): asserts number is number;
