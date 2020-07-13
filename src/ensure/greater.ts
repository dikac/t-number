import AssertGreater from "../assert/greater";
import Function from "@dikac/t-function/function";
import GreaterError from "../assert/throwable/greater";

export default function Greater(
    value : number,
    minimum : number,
    inclusive : boolean,
    error : Function<[number, number, boolean], Error> = GreaterError
) : number {

     AssertGreater(value, minimum, inclusive, error);

     return value;
}
