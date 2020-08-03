import IsInteger from "../boolean/integer";
import IntegerError from "./throwable/integer";
import Function from "@dikac/t-function/function";
import Callback from "@dikac/t-function/assert/callback";

export default function Integer(
    value : number,
    error : Function<[number], Error> = IntegerError
) : asserts value is number {

    Callback(value, IsInteger, error);
}
