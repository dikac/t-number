import Callback from "./callback";
import NegativeValidation from "../boolean/negative";
export default function Negative(number, message) {
    return new Callback(number, NegativeValidation, message);
}
//# sourceMappingURL=negative.js.map