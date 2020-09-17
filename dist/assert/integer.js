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
export default function Integer(number, error = IntegerError) {
    Callback(number, IsInteger, error);
}
//# sourceMappingURL=integer.js.map