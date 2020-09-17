import Callback from "./callback";
import InfiniteValidation from "../boolean/infinite";
export default function Positive(number, message) {
    return new Callback(number, InfiniteValidation, message);
}
//# sourceMappingURL=infinite.js.map