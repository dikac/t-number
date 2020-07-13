import IsPositive from "../boolean/positive";
import PositiveError from "./throwable/positive";
import Function from "@dikac/t-function/function";
import Callback from "@dikac/t-function/assert/callback";

export default function Positive(
    value : number,
    error : Function<[number], Error> = PositiveError
) : asserts value is number {

    Callback(value, IsPositive, error);

}
