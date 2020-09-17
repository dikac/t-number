import Callback from "./callback";
import PositiveValidation from "../boolean/positive";
export default function Positive(number, message) {
    return new Callback(number, PositiveValidation, message);
}
//# sourceMappingURL=positive.js.map