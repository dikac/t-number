import Guard from "../boolean/number";
import Callback from "@dikac/t-function/assert/callback";
import NumberError from "./throwable/number";
/**
 * assert if {@param value} is number type
 * @param value
 *
 * @param error
 * error factory
 */
export default function Number(value, error = NumberError) {
    Callback(value, Guard, error);
}
//# sourceMappingURL=number.js.map