import AssertInfinite from "../assert/infinite";
import Function from "@dikac/t-function/function";
import InfiniteError from "../assert/throwable/infinite";

export default function Infinite(
    value : number,
    error : Function<[number], Error> = InfiniteError
) : number {

     AssertInfinite(value, error);

     return value;
}
