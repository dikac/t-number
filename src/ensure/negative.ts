import AssertNegative from "../assert/negative";
import Function from "@dikac/t-function/function";
import NegativeError from "../assert/throwable/negative";

export default function Negative(
    value : number,
    error : Function<[number], Error> = NegativeError
) : number {

     AssertNegative(value, error);

     return value;
}
