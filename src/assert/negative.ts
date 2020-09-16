import IsNegative from "../boolean/negative";
import NegativeError from "./throwable/negative";
import Callback from "@dikac/t-function/assert/callback";
/**
 * assert if {@param number} is negative
 *
 * @param number
 * @param error
 * error factory
 */
export default function Negative(
    number : number,
    error : (value:number)=> Error = NegativeError
) : asserts number is number {

    Callback(number, IsNegative, error);

}
