import NanError from "./throwable/nan";
import Callback from "@dikac/t-function/assert/callback";
/**
 * assert if {@param number} is NaN
 *
 * @param number
 * @param error
 * error factory
 */
export default function Nan(
    number : number,
    error : (value:number)=> Error = NanError
) : asserts number is number {

    Callback(number, isNaN, error);

}
