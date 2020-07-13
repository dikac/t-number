import Function from "@dikac/t-function/function";
export default function Lower(value: number, minimum: number, inclusive: boolean, error?: Function<[number, number, boolean], Error>): asserts value is number;
