import IsInteger from "../boolean/integer";
import IntegerError from "./throwable/integer";
import Callback from "@dikac/t-function/assert/callback";
/**
 * assert if {@param number} is integer
 * @param number
 *
 * @param error
 * error factory
 */
export default function Integer(
    number : number,
    error : (value:number)=> Error = IntegerError
) : asserts number is number {

    Callback(number, IsInteger, error);
}
