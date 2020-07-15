import IsPositive from "../boolean/positive";
import PositiveError from "./throwable/positive";
import Function from "@dikac/t-function/function";
import Parameter from "@dikac/t-function/assert/parameter";

export default function Positive(
    value : number,
    error : Function<[number], Error> = PositiveError
) : asserts value is number {

    Parameter(value, IsPositive, error);

}
