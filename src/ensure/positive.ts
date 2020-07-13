import AssertPositive from "../assert/positive";
import Function from "@dikac/t-function/function";
import PositiveError from "../assert/throwable/positive";

export default function Positive(
    value : number,
    error : Function<[number], Error> = PositiveError
) : number {

     AssertPositive(value, error);

     return value;
}
