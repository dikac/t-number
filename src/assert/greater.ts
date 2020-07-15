import IsGreater from "../boolean/greater";
import IntegerError from "./throwable/integer";
import Function from "@dikac/t-function/function";
import ParameterArguments from "@dikac/t-function/assert/parameter-arguments";

export default function Greater(
    value : number,
    minimum : number,
    inclusive : boolean,
    error : Function<[number, number, boolean], Error> = IntegerError
) : asserts value is number {

    ParameterArguments<number, number, [number, boolean]>(value, IsGreater, error, [minimum, inclusive]);
}
