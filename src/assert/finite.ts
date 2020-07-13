import FiniteError from "./throwable/finite";
import Function from "@dikac/t-function/function";
import Callback from "@dikac/t-function/assert/callback";

export default function Finite(
    value : number,
    error : Function<[number], Error> = FiniteError
) : asserts value is number {

    Callback(value, isFinite, error);

}
