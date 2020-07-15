import IsNegative from "../boolean/negative";
import NegativeError from "./throwable/negative";
import Function from "@dikac/t-function/function";
import Parameter from "@dikac/t-function/assert/parameter";

export default function Negative(
    value : number,
    error : Function<[number], Error> = NegativeError
) : asserts value is number {

    Parameter(value, IsNegative, error);

}
