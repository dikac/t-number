/**
 * assert if {@param number} is finite
 *
 * @param number
 * @param error
 * error factory
 */
export default function Finite(number: number, error?: (value: number) => Error): asserts number is number;
