import IsPositive from "../boolean/positive";
import PositiveError from "./throwable/positive";
import Callback from "@dikac/t-function/assert/callback";
/**
 * assert if {@param number} is positive
 *
 * @param number
 * @param error
 * error factory
 */
export default function Positive(number, error = PositiveError) {
    Callback(number, IsPositive, error);
}
//# sourceMappingURL=positive.js.map