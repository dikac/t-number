import IsLower from "../boolean/lower";
import Callback from "@dikac/t-function/assert/callback";
import LowerError from "./throwable/lower";
/**
 * assert if {@param number} is lower than {@param maximum} or equal if {@param inclusive} is true
 *
 * @param number
 * @param maximum
 * @param inclusive
 * @param error
 * error factory
 */
export default function Lower(number, maximum, inclusive, error = LowerError) {
    Callback(number, IsLower, error, maximum, inclusive);
}
//# sourceMappingURL=lower.js.map