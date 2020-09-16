import IsInfinite from "../boolean/infinite";
import InfiniteError from "./throwable/infinite";
import Callback from "@dikac/t-function/assert/callback";
/**
 * assert if {@param number} is infinite
 *
 * @param number
 * @param error
 * error factory
 */
export default function Infinite(
    number : number,
    error : (value:number)=> Error = InfiniteError
) : asserts number is number {

    Callback(number, IsInfinite, error);

}
