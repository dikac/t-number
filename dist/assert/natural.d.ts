/**
 * assert if {@param number} is natural
 *
 * @param number
 * @param error
 * error factory
 */
export default function Natural(number: number, error?: (value: number) => Error): asserts number is number;
