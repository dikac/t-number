import FiniteError from "./throwable/finite";
import Function from "@dikac/t-function/function";
import Parameter from "@dikac/t-function/assert/parameter";

export default function Finite(
    value : number,
    error : Function<[number], Error> = FiniteError
) : asserts value is number {

    Parameter(value, isFinite, error);

}
