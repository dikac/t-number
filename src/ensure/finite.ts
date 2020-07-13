import AssertFinite from "../assert/finite";
import Function from "@dikac/t-function/function";
import FiniteError from "../assert/throwable/finite";

export default function Finite(
    value : number,
    error : Function<[number], Error> = FiniteError
) : number {

     AssertFinite(value, error);

     return value;
}
