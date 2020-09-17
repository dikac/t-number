import GreaterThanMaximumBoolean from "../boolean/greater-than-minimum";
import GreaterThanMaximumError from "./throwable/greater-than-maximum";
import Callback from "@dikac/t-function/assert/callback";
export default function GreaterThanMaximum(object, error = GreaterThanMaximumError) {
    Callback(object, GreaterThanMaximumBoolean, error);
}
//# sourceMappingURL=greater-than-maximum.js.map