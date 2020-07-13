import AssertLower from "../assert/lower";
import Function from "@dikac/t-function/function";
import LowerError from "../assert/throwable/lower";

export default function Lower(
    value : number,
    maximum : number,
    inclusive : boolean,
    error : Function<[number, number, boolean], Error> = LowerError
) : number {

     AssertLower(value, maximum, inclusive, error);

     return value;
}
