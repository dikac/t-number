import NaturalError from "./throwable/natural";
import Callback from "@dikac/t-function/assert/callback";
import IsNatural from "../boolean/natural";
/**
 * assert if {@param number} is natural
 *
 * @param number
 * @param error
 * error factory
 */
export default function Natural(
    number : number,
    error : (value:number)=> Error = NaturalError
) : asserts number is number {

    Callback(number, IsNatural, error);

}
