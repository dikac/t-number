import FiniteError from "./throwable/finite";
import Callback from "@dikac/t-function/assert/callback";
/**
 * assert if {@param number} is finite
 *
 * @param number
 * @param error
 * error factory
 */
export default function Finite(
    number : number,
    error : (value:number)=> Error = FiniteError
) : asserts number is number {

    Callback(number, isFinite, error);

}
