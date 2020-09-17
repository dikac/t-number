import GreaterTHanMinimumValidatable from "../validatable/greater-than-minimum";
export default class GreaterThanMinimum {
    constructor(message) {
        this.message = message;
    }
    validate(value) {
        return new GreaterTHanMinimumValidatable(value, this.message);
    }
}
//# sourceMappingURL=greater-than-minimum.js.map