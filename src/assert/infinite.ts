import IsInfinite from "../boolean/infinite";
import InfiniteError from "./throwable/infinite";
import Function from "@dikac/t-function/function";
import Callback from "@dikac/t-function/assert/callback";

export default function Infinite(
    value : number,
    error : Function<[number], Error> = InfiniteError
) : asserts value is number {

    Callback(value, IsInfinite, error);

}
