import MergeWrapper from "@dikac/t-validator/validatable/readonly-merge";
import MessageCallback from "@dikac/t-validator/validatable/callback-function";
import GreaterThanMinimumFunction from "../boolean/greater-than-minimum";
export default class GreaterThanMinimum extends MergeWrapper {
    constructor(object, message) {
        let container = {
            maximum: object.maximum,
            minimum: object.minimum,
            inclusive: object.inclusive,
            value: object
        };
        let msg = MessageCallback(container, GreaterThanMinimumFunction, () => message(this));
        super(container, msg, msg);
        this.minimum = object.minimum;
        this.maximum = object.maximum;
        this.inclusive = object.inclusive;
    }
}
//# sourceMappingURL=greater-than-minimum.js.map