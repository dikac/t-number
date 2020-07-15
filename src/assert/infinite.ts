import IsInfinite from "../boolean/infinite";
import InfiniteError from "./throwable/infinite";
import Function from "@dikac/t-function/function";
import Parameter from "@dikac/t-function/assert/parameter";

export default function Infinite(
    value : number,
    error : Function<[number], Error> = InfiniteError
) : asserts value is number {

    Parameter(value, IsInfinite, error);

}
