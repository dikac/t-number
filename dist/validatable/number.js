import Callback from "@dikac/t-validator/validatable/callback-function";
import NumberGuard from "../boolean/number";
export default function Number(value, message) {
    return Callback(value, NumberGuard, message);
}
//# sourceMappingURL=number.js.map