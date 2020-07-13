import AssertInteger from "../assert/integer";
import Function from "@dikac/t-function/function";
import IntegerError from "../assert/throwable/integer";

export default function Integer(
    value : number,
    error : Function<[number], Error> = IntegerError
) : number {

     AssertInteger(value, error);

     return value;
}
