/**
 * assert if {@param number} is NaN
 *
 * @param number
 * @param error
 * error factory
 */
export default function Nan(number: number, error?: (value: number) => Error): asserts number is number;
