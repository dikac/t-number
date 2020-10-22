import Callback from "./callback";
import NaturalValidation from "../boolean/natural";
export default function Natural(number, message) {
    return new Callback(number, NaturalValidation, message);
}
//# sourceMappingURL=natural.js.map