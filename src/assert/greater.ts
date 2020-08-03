import IsGreater from "../boolean/greater";
import IntegerError from "./throwable/integer";
import Function from "@dikac/t-function/function";
import Callback from "@dikac/t-function/assert/callback";

export default function Greater(
    value : number,
    minimum : number,
    inclusive : boolean,
    error : Function<[number, number, boolean], Error> = IntegerError
) : asserts value is number {

    Callback(value, IsGreater, error, minimum, inclusive);
}
