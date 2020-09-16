/**
 * assert if {@param value} is number type
 * @param value
 *
 * @param error
 * error factory
 */
export default function Number(value: unknown, error?: (value: number) => Error): asserts value is number;
