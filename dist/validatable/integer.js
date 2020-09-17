import Callback from "./callback";
import IntegerValidation from "../boolean/integer";
export default function Integer(number, message) {
    return new Callback(number, IntegerValidation, message);
}
//# sourceMappingURL=integer.js.map