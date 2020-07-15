import IsInteger from "../boolean/integer";
import IntegerError from "./throwable/integer";
import Function from "@dikac/t-function/function";
import Parameter from "@dikac/t-function/assert/parameter";

export default function Integer(
    value : number,
    error : Function<[number], Error> = IntegerError
) : asserts value is number {

    Parameter(value, IsInteger, error);
}
