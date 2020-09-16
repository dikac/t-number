/**
 * assert if {@param number} is positive
 *
 * @param number
 * @param error
 * error factory
 */
export default function Positive(number: number, error?: (value: number) => Error): asserts number is number;
