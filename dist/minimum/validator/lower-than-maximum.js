import GreaterThanMinimumValidatable from "../validatable/lower-than-maximum";
export default class LowerThanMaximum {
    constructor(message) {
        this.message = message;
    }
    validate(value) {
        return new GreaterThanMinimumValidatable(value, this.message);
    }
}
//# sourceMappingURL=lower-than-maximum.js.map