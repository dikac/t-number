import IsNegative from "../boolean/negative";
import NegativeError from "./throwable/negative";
import Function from "@dikac/t-function/function";
import Callback from "@dikac/t-function/assert/callback";

export default function Negative(
    value : number,
    error : Function<[number], Error> = NegativeError
) : asserts value is number {

    Callback(value, IsNegative, error);

}
