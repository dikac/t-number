import IsGreater from "../boolean/greater";
import Callback from "@dikac/t-function/assert/callback";
import GreaterError from "./throwable/greater";
/**
 * assert if {@param number} is greater than {@param minimum} or equal if {@param inclusive} is true
 *
 * @param number
 * @param minimum
 * @param inclusive
 * @param error
 * @constructor
 */
export default function Greater(number, minimum, inclusive, error = GreaterError) {
    Callback(number, IsGreater, error, minimum, inclusive);
}
//# sourceMappingURL=greater.js.map