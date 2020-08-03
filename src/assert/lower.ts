import IsLower from "../boolean/lower";
import IntegerError from "./throwable/integer";
import Function from "@dikac/t-function/function";
import Callback from "@dikac/t-function/assert/callback";

export default function Lower(
    value : number,
    minimum : number,
    inclusive : boolean,
    error : Function<[number, number, boolean], Error> = IntegerError
) : asserts value is number {

    Callback(value, IsLower,  error, minimum, inclusive);
}
