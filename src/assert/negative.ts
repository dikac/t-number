import IsNegative from "../boolean/negative";
import NegativeError from "./throwable/negative";
import Callback from "@dikac/t-function/assert/callback";

export default function Negative(
    value : number,
    error : (value:number)=> Error = NegativeError
) : asserts value is number {

    Callback(value, IsNegative, error);

}
